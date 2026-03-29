import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilPeople,
  cilCalendar,
  cilMap,
  cilEnvelopeLetter,
  cilBell,
  cilSettings,
  cilChartPie,
  cilHandPointRight,
  cilDollar,
  cilTask
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: { color: 'info', text: 'NEW' },
  },
  {
    component: CNavTitle,
    name: 'Management',
  },
  {
    component: CNavItem,
    name: 'Participants',
    to: '/participants',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Volunteers',
    to: '/volunteers',
    icon: <CIcon icon={cilHandPointRight} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sponsors',
    to: '/sponsors',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Planning & Operations',
  },
  {
    component: CNavGroup,
    name: 'Schedule',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Calendar View',
        to: '/schedule/calendar',
      },
      {
        component: CNavItem,
        name: 'Tasks & Milestones',
        to: '/schedule/tasks',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Routes & Maps',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Route Planner',
        to: '/maps/route-planner',
      },
      {
        component: CNavItem,
        name: 'Letterbox Drop',
        to: '/maps/letterbox-drop',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Communication',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Announcements',
        to: '/communication/announcements',
      },
      {
        component: CNavItem,
        name: 'Email Composer',
        to: '/communication/email',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Settings',
  },
  {
    component: CNavItem,
    name: 'Event Settings',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Data Import',
    to: '/data-import',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
]

export default _nav
