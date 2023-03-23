const openReplyModal = () => {
  window.scrollTo(0, 0);
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
  window.scrollTo(0, 0);
  document.getElementById("eventModal").style.display = "grid";
};

const closeEventModal = () => {
  document.getElementById("eventModal").style.display = "none";
};

const submitEventModal = () => {
  document.getElementById("eventModal").style.display = "none";
  alert("Event created successfully!");
};
