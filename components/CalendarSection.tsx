'use client';

import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css';

type EventDetails = {
  title: string;
  description: string;
  time: string;
};

const events: Record<string, EventDetails[]> = {
  '2024-05-26': [
    { title: 'Event 1', description: 'Details for event 1', time: '10:00 AM' },
    { title: 'Event 2', description: 'Details for event 2', time: '12:00 PM' },
  ],
  '2024-09-05': [
    { title: 'First General Body Meeting!!', description: 'Join us for our first meeting of the year in Westgate E165. Come and meet the e-board. Food will be provided!', time: '6:00 PM' }
  ],
  // Add more events for different dates
};

const CalendarSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [eventDetails, setEventDetails] = useState<EventDetails[]>([]);

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      const dateString = value.toISOString().split('T')[0];
      setEventDetails(events[dateString] || []);
    } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof Date) {
      setSelectedDate(value[0]);
      const dateString = value[0].toISOString().split('T')[0];
      setEventDetails(events[dateString] || []);
    } else {
      setSelectedDate(new Date());
      setEventDetails([]);
    }
  };

  return (
    <section id="calendar" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 flex flex-col items-center">
        <div className="w-full">
          <h1 className="text-center font-bold text-4xl mb-4">
            Events Calendar
            <hr className="w-10 h-1 my-4 bg-green-500 border-0 rounded mx-auto" />
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-10">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="mx-auto"
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