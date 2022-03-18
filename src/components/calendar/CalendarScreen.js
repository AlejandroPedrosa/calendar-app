import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { NavBar } from "../ui/NavBar";
import { messages } from "../../helpers/calendar-messages-es";

moment.locale("es");

const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Cumpleaños del jefe",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
  },
];

export const CalendarScreen = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-screen">
        <NavBar />
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
        />
      </div>
    </div>
  );
};
