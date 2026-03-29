import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'

import { CBadge } from '@coreui/react'

export const AppSidebarNav = ({ items }) => {
  const location = useLocation()

  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon && typeof icon === 'object' ? icon : <CIcon icon={icon} customClassName="nav-icon" />}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index, indent = false) => {
    const {
      component,
      name,
      badge,
      icon,
      ...rest
    } = item
    const Component = component
    return (
      <Component
        {...(rest.to &&
          !rest.items && { // If it's a direct link (not a dropdown with sub-items)
            component: NavLink,
            // Check if current location path matches the item's 'to' path for active styling
            activeClassName: 'active',
            className: 'nav-link',
            // ensures only one nav item is active at a time
            // exact: true,
            // this is an intentional deviation from CoreUI to ensure sub-routes activate parent
            // example: /dashboard/metrics should mark /dashboard as active
            // We'll rely on CoreUI's default logic which is usually suitable for top-level active states.
            // For child routes activating parent, we might need custom logic or just rely on router-dom's implicit behavior.
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge, indent)}
      </Component>
    )
  }

  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true),
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
