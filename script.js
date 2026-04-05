// Activity Data (Static Array)
const activities = [
  { id: 1, name: "Wake up early", completed: false },
  { id: 2, name: "Exercise", completed: false },
  { id: 3, name: "Study JavaScript", completed: false },
  { id: 4, name: "Build Project", completed: false }
];

// Select elements
const list = document.getElementById("activityList");
const progress = document.getElementById("progress");

// Render Activities
function renderActivities() {
  list.innerHTML = "";

  activities.forEach(activity => {
    const li = document.createElement("li");

    // Activity name
    li.textContent = activity.name;

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = activity.completed;

    // Event Listener
    checkbox.addEventListener("change", () => {
      activity.completed = checkbox.checked;
      updateUI();
    });

    // Apply completed style
    if (activity.completed) {
      li.classList.add("completed");
    }

    li.appendChild(checkbox);
    list.appendChild(li);
  });
}

// Update Progress
function updateProgress() {
  const completedCount = activities.filter(a => a.completed).length;
  progress.textContent = `${completedCount} out of ${activities.length} completed`;

  // Edge case: all completed
  if (completedCount === activities.length) {
    progress.textContent += " 🎉 All tasks completed!";
  }
}

// Update UI
function updateUI() {
  renderActivities();
  updateProgress();
}

// Initial Load
updateUI();