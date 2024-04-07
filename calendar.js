const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  
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
      dayElement.innerHTML = `
        <span class="date-number">${i}</span>
        <div class="events-dropdown">${getEventsForDay(i)}</div>
      `;
      dayElement.addEventListener("click", () => {
        dayElement.classList.toggle("selected");
      });
      daysContainer.appendChild(dayElement);
    }
  }
  
  function getEventsForDay(day) {
    // Placeholder for the events data. Replace with actual event data retrieval logic.
    const events = [{name: 'Event 1'}, {name: 'Event 2'}]; // Example events
    let eventsHtml = '<ul>';
    events.forEach(event => {
      eventsHtml += `<li>${event.name}</li>`; // Add actual event data here
    });
    eventsHtml += '</ul>';
    return eventsHtml;
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