const openReplyModal = () => {
  document.getElementById("commentModal").style.display = "grid";
};

const closeReplyModal = () => {
  document.getElementById("commentModal").style.display = "none";
};

const submitReplyModal = () => {
  document.getElementById("commentModal").style.display = "none";
  alert("Reply send successfully!");
};

const openEventModal = () => {
  document.getElementById("eventModal").style.display = "grid";
};

const closeEventModal = () => {
  document.getElementById("eventModal").style.display = "none";
};

const submitEventModal = () => {
  document.getElementById("eventModal").style.display = "none";
  alert("Event created successfully!");
};

const selectUpcomingEvents = () => {
  document.getElementById("upcomingEventTab").classList.add("selected");
  document.getElementById("pastEventTab").classList.remove("selected");
};

const selectPastEvents = () => {
  document.getElementById("pastEventTab").classList.add("selected");
  document.getElementById("upcomingEventTab").classList.remove("selected");
};

const selectDailyRevenue = () => {
  document.getElementById("dailyRevenueTab").classList.add("selected");
  document.getElementById("monthlyRevenueTab").classList.remove("selected");
  document.getElementById("yearlyRevenueTab").classList.remove("selected");
};

const selectMonthlyRevenue = () => {
  document.getElementById("dailyRevenueTab").classList.remove("selected");
  document.getElementById("monthlyRevenueTab").classList.add("selected");
  document.getElementById("yearlyRevenueTab").classList.remove("selected");
};

const selectYearlyRevenue = () => {
  document.getElementById("dailyRevenueTab").classList.remove("selected");
  document.getElementById("monthlyRevenueTab").classList.remove("selected");
  document.getElementById("yearlyRevenueTab").classList.add("selected");
};

const openSideBar = () => {
  document.getElementById("sidebar").style.display = "grid";
};

const closeSideBar = () => {
  document.getElementById("sidebar").style.display = "none";
};
