const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const events = {
  "2024-04-10": "Event 1",
  "2024-04-15": "Event 2",
  "2024-04-20": "Event 3"
};

function renderCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  document.getElementById("monthYear").innerHTML = `${months[currentMonth]} ${currentYear}`;
  
  const daysContainer = document.querySelector(".days");
  daysContainer.innerHTML = "";
  
  for (let i = 0; i < firstDay; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    daysContainer.appendChild(dayElement);
  }
  
  for (let i = 1; i <= lastDay; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = i;
    dayElement.addEventListener("mouseenter", () => {
      const dateKey = `${currentYear}-${currentMonth + 1}-${i.toString().padStart(2, "0")}`;
      const event = events[dateKey];
      if (event) {
        document.getElementById("eventDisplay").textContent = event;
        dayElement.classList.add("hasEvent");
      }
    });
    dayElement.addEventListener("mouseleave", () => {
      document.getElementById("eventDisplay").textContent = "";
      dayElement.classList.remove("hasEvent");
    });
    daysContainer.appendChild(dayElement);
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  renderCalendar();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  renderCalendar();
});

renderCalendar();
