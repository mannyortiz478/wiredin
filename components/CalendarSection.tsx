'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css';

const events = {
  '2024-05-26': [
    { title: 'Event 1', description: 'Details for event 1', time: '10:00 AM' },
    { title: 'Event 2', description: 'Details for event 2', time: '12:00 PM' },
  ],
  // Add more events for different dates
};

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventDetails, setEventDetails] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const dateString = date.toISOString().split('T')[0];
    setEventDetails(events[dateString] || []);
  };

  return (
    <section id="calendar" className="py-12">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 flex flex-col items-center">
        <div className="w-full">
          <h1 className="text-center font-bold text-4xl mb-4">
            Events Calendar
            <hr className="w-10 h-1 my-4 bg-green-500 border-0 rounded mx-auto" />
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center mt-10 md:mt-0">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">Events on {selectedDate.toDateString()}</h2>
            {eventDetails.length === 0 ? (
              <p>No events for this date.</p>
            ) : (
              eventDetails.map((event, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p>{event.time}</p>
                  <p>{event.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
