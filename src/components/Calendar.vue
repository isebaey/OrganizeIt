<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  components: { FullCalendar },
  data() {
    return {
      calendarOptions: this.getCalendarOptions(),
    };
  },
  methods: {
    getCalendarOptions() {
      return {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        editable: true,
        selectable: true,
        locale: "en",
        events: this.getEvents(),
        eventClick: this.handleEventClick,
        dateClick: this.handleDateClick,
        eventMouseEnter: this.handleEventHover,
        select: this.handleDateSelect,
      };
    },
    getEvents() {
      return [
        {
          title: "Team Meeting",
          start: "2024-10-14T10:00:00",
          end: "2024-10-14T12:00:00",
          description: "Discuss project updates.",
          color: "#28a745",
        },
        {
          title: "Code Review",
          start: "2024-10-16T14:00:00",
          description: "Review latest code submissions.",
          color: "#dc3545",
        },
      ];
    },
    handleEventClick(info) {
      alert(
        `Event: ${info.event.title}\nDescription: ${info.event.extendedProps.description}`
      );
    },
    handleDateClick(info) {
      alert(`Date clicked: ${info.dateStr}`);
    },
    handleEventHover(info) {
      tippy(info.el, {
        content: info.event.extendedProps.description || info.event.title,
        placement: "top",
      });
    },
    handleDateSelect(info) {
      const title = prompt("Enter event title:");
      if (title) {
        const newEvent = {
          title,
          start: info.startStr,
          end: info.endStr,
          allDay: info.allDay,
        };
        info.view.calendar.addEvent(newEvent);
      }
    },
  },
};
</script>

<template>
  <div class="compact-calendar">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style scoped>
.compact-calendar {
  max-width: 800px;
  margin: 0 auto;
}

.fc {
  font-size: 0.8rem;
}

.fc-header-toolbar {
  padding: 5px 10px;
}

.fc-daygrid-day-number {
  font-size: 0.7rem;
}

.fc-event {
  font-size: 0.7rem;
  padding: 2px;
}

.fc-toolbar-title {
  font-size: 1rem;
}

.fc-prev-button,
.fc-next-button {
  font-size: 0.8rem;
  padding: 4px 8px;
}

button {
  background-color: #3498db !important;
}
</style>
