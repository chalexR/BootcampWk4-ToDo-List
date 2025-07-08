# 📋 JavaScript ToDo List Example

## Overview

This project is a **simple JavaScript-based ToDo List** with a **clean, unstyled Bootstrap front end**, built as a **learning exercise** to:

- Understand **JavaScript reusable functions**
- Practice **array manipulation**
- Explore **DOM manipulation**
- Prepare for future expansion with **server-side storage (MySQL)**.

---

## 🚀 Features

✅ Add, edit, and complete tasks\
✅ Filter tasks by status (`complete`, `incomplete`)\
✅ Dynamically updates the DOM with new tasks\
✅ Generates unique incremental IDs with `highestID()`\
✅ Uses **clean reusable functions** for:

- Adding tasks
- Editing tasks
- Marking tasks complete/deleting from main view
- Loading and displaying tasks

---

## 🛠️ Technologies

- **HTML** for structure
- **Bootstrap** for layout (unstyled)
- **Vanilla JavaScript** for logic and DOM manipulation

---

## 📈 Future Plans

- Migrate `taskArray` to **MySQL database** for persistent storage
- Responsive styling with Bootstrap or CSS Grid
- Optional authentication for personalized task lists

---

## 🗂️ Project Structure

```
index.html        # Main front end
style.css         # Main front end styling
script.js         # Contains reusable JavaScript functions
README.md         # Project overview
```

---

## 💡 How It Works

1️⃣ User inputs a task and clicks “Add Task.”\
2️⃣ Script checks for duplicates, assigns a unique ID, and adds to `taskArray`.\
3️⃣ Tasks display dynamically in the table.\
4️⃣ Users can:

- **Edit a task** (pre-fills input for editing)
- **Mark a task as complete** (updates task status)

---

## 🎓 Learning Outcomes

✅ Reinforced **core JavaScript concepts**\
✅ Practiced **clean code structuring** for scalable projects\
✅ Learned **separation of concerns** (data, logic, presentation)\

---

## ⚡ Getting Started

1️⃣ Clone this repository:
```bash
git clone https://github.com/your-username/todo-list-js.git
```

2️⃣ Open `index.html` in your browser.

3️⃣ Add, edit, and complete tasks to test the system.

---

## 🪴 Next Steps

- Move to a MySQL database
- Connect front end using `fetch()` or Axios for live data sync
- Add localStorage as an interim persistent option

---

## 📜 License

This project is open for **personal and educational use**.

---
