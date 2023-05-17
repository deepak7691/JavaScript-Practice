const date = new Date();

// console.log(date.getDate());                 // Today's date (day of the month) in numeric form
// console.log(date.getDay());                  // Today's day of the week in numeric form (Sunday is 0, Monday is 1, and so on)
// console.log(date.getFullYear());             // Current year (4 digits)
// console.log(date.getHours());                // Current hour in 24-hour format (0-23)
// console.log(date.getMilliseconds());         // Current millisecond
// console.log(date.getMinutes());              // Current minute (0-59)
// console.log(date.getMonth());                // Current month (0-11, with 0 being January)
// console.log(date.getSeconds());              // Current second (0-59)
// console.log(date.getTime());                 // Number of milliseconds elapsed since January 1, 1970 00:00:00 UTC (also known as the Unix Epoch)
// console.log(date.getTimezoneOffset())        // Difference, in minutes, between the local time zone and UTC
// console.log(date.getUTCDate());              // Day of the month, according to UTC (0-31)
// console.log(date.getUTCDay());               // Day of the week, according to UTC (0-6, with 0 being Sunday)
// console.log(date.getUTCFullYear());          // Year, according to UTC (4 digits)
// console.log(date.getUTCHours());             // Hour, according to UTC (0-23)
// console.log(date.getUTCMilliseconds());      // Millisecond, according to UTC (0-999)
// console.log(date.getUTCMinutes());           // Minute, according to UTC (0-59)
// console.log(date.getUTCMonth());             // Month, according to UTC (0-11, with 0 being January)
// console.log(date.getUTCSeconds());           // Second, according to UTC (0-59)
console.log(date.toDateString());            // Date in a human-readable format, without time (e.g. "Fri May 06 2023")
console.log(date.toISOString());             // Date in ISO 8601 format (e.g. "2023-05-06T15:30:45.678Z")
console.log(date.toLocaleDateString());      // Date in a human-readable format, according to the locale (e.g. "5/6/2023" in the US)
console.log(date.toLocaleTimeString());      // Time in a human-readable format, according to the locale (e.g. "3:30:45 PM" in the US)
console.log(date.toLocaleString());          // Date and time in a human-readable format, according to the locale (e.g. "5/6/2023, 3:30:45 PM" in the US)
console.log(date.toString());                // Date and time in a human-readable format (e.g. "Fri May 06 2023 15:30:45 GMT+0530 (India Standard Time)")
console.log(date.toTimeString());            // Time in a human-readable format, without date (e.g. "15:30:45 GMT+0530 (India Standard Time)")
console.log(date.toUTCString());             // Date and time in UTC, in a human-readable format (e.g. "Fri, 06 May 2023 10:00:45 GMT")
