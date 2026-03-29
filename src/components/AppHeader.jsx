import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu, cilBell, cilEnvelopeOpen, cilUser, cilSettings } from '@coreui/icons'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <span className="fs-4 fw-bold text-primary">MEM</span>
        </CHeaderBrand>
        
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/participants" component={NavLink}>
              Participants
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/maps/route-planner" component={NavLink}>
              Route Planner
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
              <CBadge color="danger" shape="rounded-pill" className="position-absolute top-0 end-0">
                3
              </CBadge>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        
        <CHeaderNav className="ms-3">
          <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
              <CIcon icon={cilUser} size="lg" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem href="#">
                <CIcon icon={cilUser} className="me-2" />
                Profile
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilSettings} className="me-2" />
                Settings
              </CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Sign Out</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>
      </CContainer>
      
      <CHeaderDivider />
      
      <CContainer fluid>
        <span className="text-muted small">
          Marathon Event Manager v1.0.0 | Event Date: TBD
        </span>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
