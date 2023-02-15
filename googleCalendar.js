//index.js code for integrating Google Calendar

const express = require('express');
const { google } = require('googleapis');

const app = express();

require("dotenv").config();

const GOOGLE_PRIVATE_KEY = process.env.private_key;
const GOOGLE_CLIENT_EMAIL = process.env.client_email;
const GOOGLE_PROJECT_NUMBER = process.env.project_number;
const GOOGLE_CALENDAR_ID = process.env.calendar_id;

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({
  version: "v3",
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
});

const auth = new google.auth.GoogleAuth({
  keyFile: "./keys.json",
  scopes: SCOPES,
});

const calendarEvent = {
  summary: "Lllamda con Alexis",
  description: "Hola",
  start: {
    dateTime: "2023-02-14T21:00:00",
    timeZone: "America/Mexico_City",
  },
  end: {
    dateTime: "2023-02-14T22:00:00",
    timeZone: "America/Mexico_City",
  },
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 },
    ],
  },
};

const addCalendarEvent = async () => {
  auth.getClient().then((auth) => {
    calendar.events.insert(
      {
        auth: auth,
        calendarId: GOOGLE_CALENDAR_ID,
        resource: calendarEvent,
      },
      function (error, response) {
        if (error) {
          console.log("Error " + err); 
          return;
        }
		console.log("Se creo el evento")
        console.log("Detalles del evento ", response.data); 
      }
    );
  });
};

addCalendarEvent();

const listCalendarEvents = () => {
  calendar.events.list(
    {
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    },
    (error, result) => {
      if (error) {
        console.log("Error ", error); 
      } else {
        if (result.data.items.length > 0) {
          console.log("Lista de eventos próximos ", result.data.items); 
        } else {
          console.log("No hay eventos próximos"); 
        }
      }
    }
  );
};
listCalendarEvents();

app.listen(3000, () => console.log(`App listening on port 3000!`));

module.export = [{
  addCalendarEvent,
  listCalendarEvents
}]