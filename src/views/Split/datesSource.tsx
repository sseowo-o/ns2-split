import { set } from 'date-fns';
import { useState } from 'react';

const now = new Date();

const getTodayAtSpecificHour = (hour = 12) =>
  set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 });

export const randomTimes: [Date, Date, Date] = [
  getTodayAtSpecificHour(3),
  getTodayAtSpecificHour(8),
  getTodayAtSpecificHour(18),
];

export const selectedInterval: [Date] = [randomTimes[0]];

export const timelineInterval: [Date, Date] = [
  getTodayAtSpecificHour(0),
  getTodayAtSpecificHour(24),
];
