# 📅 Day 3 - React Practice

Today I focused on practicing core React concepts by building small components and understanding state updates.

---

## 🧠 Topics Covered

* React `useState` Hook
* Managing multiple state values using objects
* Updating state using spread operator (`...`)
* Functional state updates (`prev => ...`)
* Dynamic object keys (`[key]`)
* Handling events in React (`onClick`, `onChange`)
* Controlled components (input field handling)

---

## 🧩 Practice 1: Ludo Board

* Created a simple Ludo board counter
* Managed state as an object:

  * `blue`, `yellow`, `green`, `red`
* Updated values dynamically using:

  * Spread operator (`...prev`)
  * Computed properties (`[color]`)

👉 Learned how to update specific values without affecting others.

---

## 🧩 Practice 2: Todo List App

* Built a basic Todo application
* Implemented features:

  * Add task
  * Delete task
  * Update all tasks (uppercase)
  * Update single task
  * Mark task as done

👉 Used:

* `map()` → for updating items
* `filter()` → for deleting items

---

## 🔥 Key Learnings

* React state is immutable (never modify directly)
* Always use spread operator to preserve existing data
* Functional updates prevent stale state issues
* Arrays in React are updated using `map()` and `filter()`
* Clean and reusable logic improves scalability

---

## 🎯 Summary

Today helped me understand how React handles:

* State updates
* Array manipulation
* Dynamic UI rendering

This forms the foundation for building real-world React applications.

---

