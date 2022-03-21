import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { NavBar } from "../ui/NavBar";
import { messages } from "../../helpers/calendar-messages-es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";

moment.locale("es");

const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Cumpleaños del jefe",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    notes: "comprar la torta",
    user: {
      _id: "123",
      name: "Alejandro",
    },
  },
];

export const CalendarScreen = () => {
  const dispatch = useDispatch();

  const [lastView, setlastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDobleClick = (e) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem("lastView", e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#437ec1",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

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
          onView={onViewChange}
          onSelectEvent={onSelectEvent}
          onDoubleClickEvent={onDobleClick}
          eventPropGetter={eventStyleGetter}
          view={lastView}
          components={{ event: CalendarEvent }}
        />
      </div>
      <CalendarModal />
    </div>
  );
};
