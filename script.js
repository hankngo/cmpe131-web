let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const holidays = {
    "2024-07-04": "Independence Day",
    "2024-12-25": "Christmas Day",
    "2024-01-01": "New Year's Day"
};

const events = {
    "2024-05-18": "Company Outing",
    "2024-11-07": "Project Deadline"
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

            if (holidays[fullDate]) {
                cell.innerHTML = `<span class='holiday' title='${holidays[fullDate]}'>${date}</span>`;
                cell.classList.add('has-event');
            } else if (events[fullDate]) {
                cell.innerHTML = `<span class='event' title='${events[fullDate]}'>${date}</span>`;
                cell.classList.add('has-event');
            }

            row.appendChild(cell);
            date++;
        }
        tbody.appendChild(row);
    }
}

function moveMonth(step) {
    currentMonth += step;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    showCalendar(currentMonth, currentYear);
}
