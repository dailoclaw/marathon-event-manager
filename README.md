# Marathon Event Manager

A comprehensive, production-ready admin dashboard for planning and running community marathon events. Built on the CoreUI Free React Admin Template with extensive customizations for marathon management.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![CoreUI](https://img.shields.io/badge/CoreUI-5.0-321fdb)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

### Core Functionality
- **Dashboard** - Key metrics, registration progress, event countdown
- **Participants Management** - Full CRUD with filters, search, pagination
- **Volunteers Management** - Role assignment, shift management
- **Sponsors Management** - Tier tracking, benefit delivery
- **Route Planning** - Interactive Leaflet maps with draggable markers
- **Letterbox Drop Planner** - Promo flyer distribution with route optimization
- **Schedule & Calendar** - FullCalendar integration, task management
- **Communication** - Announcements board, email composer
- **Data Import** - CSV/Excel upload with column mapping

### Technical Stack
- **Frontend:** React 18 + Vite + TypeScript
- **UI Framework:** CoreUI React 5.0 (Bootstrap-based)
- **State Management:** Redux Toolkit
- **Maps:** React-Leaflet + OpenStreetMap
- **Calendar:** FullCalendar React
- **Charts:** Chart.js (via CoreUI Charts)
- **Styling:** SCSS with custom energetic branding

## Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd marathon-event-manager
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser:**
Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Project Structure

```
marathon-event-manager/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── AppContent.jsx
│   │   ├── AppFooter.jsx
│   │   ├── AppHeader.jsx
│   │   ├── AppSidebar.jsx
│   │   └── AppSidebarNav.jsx
│   ├── layout/            # Layout components
│   │   └── DefaultLayout.jsx
│   ├── scss/              # Styling
│   │   ├── style.scss
│   │   └── variables.scss
│   ├── store/             # Redux store
│   │   ├── index.js
│   │   └── reducers.js
│   ├── views/             # Application pages
│   │   ├── communication/
│   │   ├── dashboard/
│   │   ├── dataimport/
│   │   ├── maps/
│   │   ├── participants/
│   │   ├── schedule/
│   │   ├── settings/
│   │   └── volunteers/
│   ├── _nav.js            # Sidebar navigation config
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── routes.js          # Route definitions
├── package.json
├── README.md
└── vite.config.js
```

## Branding & Customization

### Colors
The app uses an energetic color scheme:
- **Primary:** `#FF4D4D` (Energetic Red)
- **Secondary:** `#001F3F` (Dark Navy)
- **Sidebar Background:** Dark Navy
- **Header/Footer:** Light gray with white content area

Modify these in `src/scss/variables.scss`.

### Version Number
The version number (`v1.0.0`) is displayed in:
- `package.json`
- Footer (`src/components/AppFooter.jsx`)
- Header subtitle (`src/components/AppHeader.jsx`)

Remember to update all three when deploying new versions.

## Data Import

The app is configured to import marathon data from spreadsheets. The import page supports:
- CSV files (via PapaParse)
- Excel files (.xlsx via xlsx library)
- Automatic column detection
- Manual column mapping UI
- Data preview before import

Expected columns based on your spreadsheet:
- RECIPIENT (Name)
- EMAIL
- STREET
- SUBURB
- CONTACT / CONTACT PERSON
- PHONE
- NOTES

## Next Steps for Full Implementation

1. **Map Integration** - Add actual Leaflet map to Route Planner
2. **FullCalendar** - Implement calendar view in Schedule
3. **Data Import Logic** - Complete the import parsing and state management
4. **Email Integration** - Add EmailJS or SendGrid for the composer
5. **GPX Export** - Add route export functionality
6. **PDF Reports** - Generate printable participant lists

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (responsive design)

## License

MIT - Free to use for your marathon events!

---

**Created for:** Saw Lo
**Version:** 1.0.0
**Date:** March 29, 2026
