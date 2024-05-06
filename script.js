let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const holidays = {
    "2024-01-01": "New Year's Day",
    "2024-01-15": "Martin Luther King Jr. Day",
    "2024-02-19": "Presidents' Day",
    "2024-05-27": "Memorial Day",
    "2024-07-04": "Independence Day",
    "2024-09-02": "Labor Day",
    "2024-10-14": "Columbus Day",
    "2024-11-11": "Veterans Day",
    "2024-11-28": "Thanksgiving Day",
    "2024-12-25": "Christmas Day"
};

const events = {
  "2024-05-07": "Planning Commission meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-05-13": "City Council second Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-05-14": "ZBA meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-05-16": "Parks and Recreation Commission meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-05-20": "TIFA/EDC meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-05-21": "DDA meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-05-28": "City Council fourth Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-06-04": "Planning Commission meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-06-10": "City Council second Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-06-11": "ZBA meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-06-17": "TIFA/EDC meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-06-18": "DDA meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-06-20": "Parks and Recreation Commission meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-06-24": "City Council fourth Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-07-02": "Planning Commission meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-07-08": "City Council second Monday meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-07-09": "ZBA meeting 7:00pm - 8:00pm at Williamston City Hall",
  "2024-07-15": "TIFA/EDC meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-07-16": "DDA meeting 6:00pm - 7:00pm at Williamston City Hall",
  "2024-07-18": "Parks and Recreation Commission meeting 6:00pm - 7:00pm at Williamston City Hall"
};

document.addEventListener('DOMContentLoaded', function() {
  showCalendar(currentMonth, currentYear);
});

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbody = document.getElementById("calendar-body");
  tbody.innerHTML = ""; // Clear previous cells

  document.getElementById("monthAndYear").innerText = `${monthNames[month]} ${year}`;

  let date = 1;
  for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
              let cell = document.createElement("td");
              row.appendChild(cell);
              continue;
          }

          if (date > daysInMonth) {
              break;
          }

          let cell = document.createElement("td");
          let fullDate = `${year}-${(month+1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
          let cellText = document.createTextNode(date);
          cell.appendChild(cellText);

          let eventInfo = holidays[fullDate] || events[fullDate];
          if (eventInfo) {
              let span = document.createElement('span');
              span.className = 'event';
              span.dataset.tooltip = eventInfo;
              span.innerHTML = date;
              cell.innerHTML = '';
              cell.appendChild(span);
              cell.classList.add('has-event');
          }

          row.appendChild(cell);
          date++;
      }
      tbody.appendChild(row);
  }
}
