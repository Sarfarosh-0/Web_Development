# Notes App 📝

A clean, modern, responsive note-taking web application built with **React 18**, **TypeScript**, and **Tailwind CSS**. It supports instant local persistence, full-text search, soft-deletion with a dedicated trash bin, restore capabilities, and modal confirmations for critical actions.

---

## 🚀 Features

* **Create & Organize Notes**: Quickly draft and persist notes with titles, structured content, and automatically formatted creation timestamps.
* **Soft Deletion & Trash Management**: Deleting a note moves it to the Trash tab. Notes can be fully restored back to the active list or permanently erased.
* **Instant Full-Text Search**: Filter notes in real time by title or body text directly from the top search bar.
* **Local Storage Persistence**: State synchronizes with browser `localStorage`, preserving active notes and trash items across sessions.
* **Modal Confirmations**: Guardrails for destructive operations such as emptying the trash or purging all application data.
* **Responsive Layout**: Includes a collapsible overlay sidebar optimized for mobile viewport sizes alongside desktop-first split views.
* **Accessible & Styled UI**: Minimalist warm-toned UI utilizing semantic HTML, custom typography (**Plus Jakarta Sans**), and vector icons via `lucide-react`.

---

## 🛠️ Tech Stack

* **UI Framework**: [React 18](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icon Library**: [Lucide React](https://lucide.dev/)
* **Font Engine**: Google Fonts (*Plus Jakarta Sans*)

---

## 📂 Project Structure

```text
REACT_JS/03_React_App/
├── index.html
├── src/
│   ├── main.tsx             # Application entry point
│   ├── App.tsx              # Root component & central state management
│   ├── index.css            # Tailwind directives & global font configuration
│   └── Components/
│       ├── Header.tsx       # Top bar with main actions & mobile menu toggle
│       ├── Sidebar.tsx      # Navigation drawer for tabs and app-wide reset
│       ├── Searchbar.tsx    # Live text input filter
│       ├── Main.tsx         # Main content layout wrapper
│       ├── NotesContainer.tsx# Dynamic note grid renderer
│       ├── Notebox.tsx      # Note card with restore/delete actions
│       ├── AddNote.tsx      # Modal form for creating new notes
│       ├── EmptyNotes.tsx   # Placeholder state UI for empty views
│       ├── ConfirmModal.tsx # Confirmation modal for app data purge
│       └── EmptyTrash.tsx   # Confirmation modal for emptying the trash bin
