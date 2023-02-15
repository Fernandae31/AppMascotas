const express = require('express');
const { google } = require('googleapis');


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


document.getElementById('add-event-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('event-title').value;
    const start = new Date(document.getElementById('event-start').value);
    const end = new Date(document.getElementById('event-end').value);
    const pet = document.getElementById('pets').value;

  
    const event = {
      'summary': title,
      "description": pet,
      'start': {
        'dateTime': start.toISOString()
      },
      'end': {
        'dateTime': end.toISOString()
      }
    };
  
    const request = gapi.client.calendar.events.insert({
      'calendarId': GOOGLE_CALENDAR_ID,
      'resource': event
    });
  
    request.execute(function(event) {
      console.log('Evento creado: ' + event.htmlLink);
    });
  });


  