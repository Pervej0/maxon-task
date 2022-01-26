const counterData = {
  satisfiedClient: 598,
  totalProject: 128,
  workCompleted: 114,
  awardsReceived: 109,
};

// get element
const clientsCount = document.getElementById("clients-count");
const projectsCount = document.getElementById("projects-count");
const completedCount = document.getElementById("completed-count");
const awardsCount = document.getElementById("awards-count");

// increasing counter number
const counterIncrease = (element) => {
  if (element.id === "clients-count") {
    element.innerText++;
  }
  if (element.id === "projects-count") {
    element.innerText++;
  }
  if (element.id === "completed-count") {
    element.innerText++;
  }
  if (element.id === "awards-count") {
    element.innerText++;
  }
};

const handleInterval = (element, counter) => {
  const limitedInterval = setInterval(() => {
    counterIncrease(element);
    if (element.innerText == counter) {
      clearInterval(limitedInterval);
    }
  }, 10);
};

handleInterval(clientsCount, counterData.satisfiedClient);
handleInterval(projectsCount, counterData.totalProject);
handleInterval(completedCount, counterData.workCompleted);
handleInterval(awardsCount, counterData.awardsReceived);
