import React, { useState } from "react";
import "./Calender.css";
import Navbar from "../../Components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function Calender() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Ocober",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTime, setEventTime] = useState({ hours: "00", minutes: "00" });
  const [eventText, setEventText] = useState("");
  const [editEvent, setEditEvent] = useState(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDate();

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 1 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();
    if (clickedDate >= today || isSameDay(clickedDate, today)) {
      setSelectedDate(clickedDate);
      setShowEventPopup(true);
      setEventTime({ hours: "00", minutes: "00" });
      setEventText("");
      setEditEvent(null);
    }
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleEventSubmit = () => {
    const newEvent = {
      id: editEvent ? editEvent.id : Date.now(),
      date: selectedDate,
      time: `${eventTime.hours.padStart(2, "0")} :${eventTime.minutes.padStart(
        2,
        "0"
      )}`,
      text: eventText,
    };
    let updatedEvents = [...events];
    if (editEvent) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === editEvent.id ? newEvent : event
      );
    } else {
      updatedEvents.push(newEvent);
    }

    updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    setEvents(updatedEvents);
    setEventTime({ hours: "00", minutes: "00" });
    setEventText("");
    setShowEventPopup(false);
    setEditEvent(null);
  };

  const handleEditEvent = (event) => {
    setSelectedDate(new Date(event.date));
    setEventTime({
      hours: event.time.split(":")[0],
      minutes: event.time.split(":")[1],
    });
    setEventText(event.text);
    setEditEvent(event);
    setShowEventPopup(true);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setEventTime((prevTime) => ({
      ...prevTime,
      [name]: value.padStart(2, "0"),
    }));
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <h1 className="text-amber-50 h-8 py-4 px-2 text-3xl">Calender</h1>
      <Navbar />
      <div className="Calender h-full w-full bg-gray-800  flex gap-8 rounded-2xl p-3 mb-10  border-8 border-gray-900 shadow-lg shadow-gray-700 overflow-hidden">
        <div className="navigateDate flex gap-9 flex-col ">
          <h1 className="Calender text-4xl pl-4 text-amber-50 ">Calender</h1>

          <div className="header-date flex justify-between items-center w-[398px] pl-4">
            <div className="flex">
              <h2 className="month text-[28px]  text-amber-50">
                {monthsOfYear[currentMonth]},
              </h2>
              <h2 className="year text-[28px] text-amber-50">{currentYear}</h2>
            </div>
            <div className="buttons flex gap-1">
              <i
                onClick={prevMonth}
                className="left text-amber-500 rounded-3xl w-5 h-5 bg-gray-400/35 flex items-center justify-center"
              >
                <IoIosArrowBack />
              </i>
              <i
                onClick={nextMonth}
                className="right text-amber-500 rounded-3xl w-5 h-5 bg-gray-400/35 flex items-center justify-center"
              >
                <IoIosArrowForward />
              </i>
            </div>
          </div>

          {/* */}

          <div className="weekdays w-[100%] flex gap-5 text-gray-400 text-[10px] pl-2">
            {daysOfWeek.map((day) => (
              <span
                className="w-[39px] flex justify-center font-bold text-[14px]"
                key={day}
              >
                {day}
              </span>
            ))}
          </div>

          <div className="days flex cursor-pointer flex-wrap  gap-[31px] p-3 w-[430px]  text-amber-50 text-[10px]">
            {[...Array(firstDayOfMonth).keys()].map((_, index) => (
              <span
                className="flex justify-center items-center w-7 h-7 text-[14px] "
                key={`empty-${index}`}
              />
            ))}
            {[...Array(daysInMonth).keys()].map((day) => (
              <span
                key={day + 1}
                className={`flex justify-center items-center w-7 h-7 text-[14px] + ${
                  day + 1 === currentDate.getDate() &&
                  currentMonth === currentDate.getMonth() &&
                  currentYear === currentDate.getFullYear()
                    ? "current-day"
                    : ""
                }`}
                onClick={() => handleDayClick(day + 1)}
              >
                {day + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="events w-full h-full flex flex-col gap-4 overflow-auto px-6">
          {showEventPopup && (
            <div className="popup flex flex-col justify-center items-center gap-6 absolute w-[420px] h-[320px] rounded-[8px] p-4 top-[45%] left-[15rem] bg-slate-900 shadow-lg shadow-slate-900/95 ">
              <div className="time-input flex gap-2 ">
                <div className="events-popup-time w-[4rem]  bg-blue-500 rounded-[1rem]  shadow-md shadow-blue-400  flex justify-center items-center text-amber-50">
                  Time
                </div>
                <input
                  className="hours w-[4rem] h-[2rem] text-center bg-transparent border  border-t-2 border-t-blue-500 border-b-blue-500 border-b-2 border-r-transparent border-l-transparent text-amber-50 webkit-appearancess"
                  type="number"
                  name="hours"
                  min={0}
                  max={24}
                  value={eventTime.hours}
                  onChange={handleTimeChange}
                />
                <input
                  className="minutes w-[4rem] h-[2rem] text-center bg-transparent border  border-t-2 border-t-blue-500 border-b-blue-500 border-b-2 border-r-transparent border-l-transparent text-amber-50"
                  type="number"
                  name="minutes"
                  min={0}
                  max={60}
                  value={eventTime.minutes}
                  onChange={handleTimeChange}
                />
              </div>

              <textarea
                className="w-[20rem] resize-none bg-gray-800 text-amber-50 border-none rounded-[4px] p-[1rem] "
                placeholder="Enter event text (Maximum 60 charactors)"
                value={eventText}
                onChange={(e) => {
                  if (e.target.value.length <= 60) {
                    setEventText(e.target.value);
                  }
                }}
              ></textarea>
              <button
                className="events-popup-btn w-[20rem] h-[2rem] rounded-[4px] bg-amber-500 shadow-md shadow-amber-300 text-amber-50 font-bold cursor-pointer hover:tracking-wider"
                onClick={handleEventSubmit}
              >
                {editEvent ? "Update Event" : "Add Event"}
              </button>
              <button
                onClick={() => setShowEventPopup(false)}
                className="close-events-popup absolute top-[1rem] right-[1rem] bg-transparent border-none cursor-pointer text-2xl text-amber-500"
              >
                <IoIosClose />
              </button>
            </div>
          )}
          {events.map((event, index) => (
            <div
              className="event w-[100%] h-[5rem] bg-blue-500  p-[1rem] gap-4 rounded-2xl flex items-center"
              key={index}
            >
              <div className="event-date-wrapper flex flex-col items-center w-[25%] pr-3 border border-transparent border-r-amber-200 ">
                <div className="event-data text-[14px] text-amber-50">
                  {`${
                    monthsOfYear[event.date.getMonth()]
                  } ${event.date.getDate()}, ${event.date.getFullYear()}`}
                </div>
                <div className="event-time text-[14px] text-amber-50 font-bold">
                  {event.time}
                </div>
              </div>
              <div className="event-text text-amber-50 w-[75%] p-2 text-[15px] ">
                {event.text}
              </div>
              <div className="event-buttons  w-8 h-12 flex justify-center items-center text-amber-50 cursor-pointer flex-col gap-2">
                <i>
                  <FaRegEdit
                    className="w-5 text-[15px]"
                    onClick={() => handleEditEvent(event)}
                  />
                </i>
                <i>
                  <TiDelete
                    className="w-5 text-[19px]"
                    onClick={() => handleDeleteEvent(event.id)}
                  />
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
