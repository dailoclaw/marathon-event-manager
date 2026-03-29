import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/ContactsDashboard'))
const Participants = React.lazy(() => import('./views/participants/Participants'))
const Volunteers = React.lazy(() => import('./views/volunteers/Volunteers'))
const Sponsors = React.lazy(() => import('./views/sponsors/Sponsors'))
const RoutePlanner = React.lazy(() => import('./views/maps/RoutePlanner'))
const LetterboxDrop = React.lazy(() => import('./views/maps/LetterboxDrop'))
const CalendarView = React.lazy(() => import('./views/schedule/CalendarView'))
const Tasks = React.lazy(() => import('./views/schedule/Tasks'))
const Announcements = React.lazy(() => import('./views/communication/Announcements'))
const EmailComposer = React.lazy(() => import('./views/communication/EmailComposer'))
const EventSettings = React.lazy(() => import('./views/settings/EventSettings'))
const DataImport = React.lazy(() => import('./views/dataimport/DataImport'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/participants', name: 'Participants', element: Participants },
  { path: '/volunteers', name: 'Volunteers', element: Volunteers },
  { path: '/sponsors', name: 'Sponsors', element: Sponsors },
  { path: '/maps/route-planner', name: 'Route Planner', element: RoutePlanner },
  { path: '/maps/letterbox-drop', name: 'Letterbox Drop', element: LetterboxDrop },
  { path: '/schedule/calendar', name: 'Calendar View', element: CalendarView },
  { path: '/schedule/tasks', name: 'Tasks & Milestones', element: Tasks },
  { path: '/communication/announcements', name: 'Announcements', element: Announcements },
  { path: '/communication/email', name: 'Email Composer', element: EmailComposer },
  { path: '/settings', name: 'Event Settings', element: EventSettings },
  { path: '/data-import', name: 'Data Import', element: DataImport },
]

export default routes
