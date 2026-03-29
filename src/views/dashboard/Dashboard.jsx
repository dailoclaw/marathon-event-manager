import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'

const Dashboard = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <CIcon icon={cilSpeedometer} className="me-2" />
          Dashboard
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md={4}>
              <CCard className="text-center mb-3">
                <CCardBody>
                  <h2>0</h2>
                  <div className="text-muted">Total Participants</div>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={4}>
              <CCard className="text-center mb-3">
                <CCardBody>
                  <h2>0</h2>
                  <div className="text-muted">Volunteers</div>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={4}>
              <CCard className="text-center mb-3">
                <CCardBody>
                  <h2>0</h2>
                  <div className="text-muted">Days to Event</div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <p className="text-muted">
            Welcome to Marathon Event Manager. This dashboard will display key metrics once data is imported.
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
