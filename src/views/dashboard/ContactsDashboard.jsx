import React, { useState, useMemo } from 'react'
import {
  CCard, CCardBody, CCardHeader, CCol, CRow,
  CTable, CTableBody, CTableDataCell, CTableHead,
  CTableHeaderCell, CTableRow, CBadge,
  CFormInput, CFormSelect, CButton, CCollapse, CProgress,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeOpen, cilPhone, cilHome, cilCheckCircle, cilXCircle } from '@coreui/icons'
import { contacts, getStats, suburbs, categories } from '../../data/contacts'

const ContactsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSuburb, setFilterSuburb] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [expandedRow, setExpandedRow] = useState(null)

  const stats = useMemo(() => getStats(), [])

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const matchesSearch = !searchTerm ||
        contact.recipient?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.street?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email?.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesSuburb = !filterSuburb || contact.suburb === filterSuburb
      const matchesCategory = !filterCategory || contact.category === filterCategory
      
      let matchesStatus = true
      if (filterStatus === 'sent') matchesStatus = contact.date_sent?.includes('2025')
      if (filterStatus === 'pending') matchesStatus = !contact.date_sent?.includes('2025')
      if (filterStatus === 'responded') matchesStatus = contact.response?.toLowerCase() === 'y'
      if (filterStatus === 'failed') matchesStatus = contact.failed?.toLowerCase() === 'y'

      return matchesSearch && matchesSuburb && matchesCategory && matchesStatus
    })
  }, [searchTerm, filterSuburb, filterCategory, filterStatus])

  const getStatusBadge = (contact) => {
    if (contact.failed?.toLowerCase() === 'y') return <CBadge color="danger">Failed</CBadge>
    if (contact.response?.toLowerCase() === 'y') return <CBadge color="success">Responded</CBadge>
    if (contact.date_sent?.includes('2025')) return <CBadge color="info">Sent</CBadge>
    return <CBadge color="secondary">Pending</CBadge>
  }

  const getCategoryBadge = (category) => {
    const colors = { Venue: 'primary', Business: 'success', Church: 'warning', Accommodation: 'info', Other: 'dark' }
    return <CBadge color={colors[category] || 'secondary'}>{category}</CBadge>
  }

  return (
    <>
      <CRow className="mb-4">
        <CCol sm={6} lg={3}>
          <CCard className="mb-3">
            <CCardBody className="p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="text-medium-emphasis text-uppercase fw-semibold small">Total Contacts</div>
                  <div className="fs-2 fw-bold">{stats.total}</div>
                </div>
                <CIcon icon={cilHome} size="3xl" className="text-primary opacity-25" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={6} lg={3}>
          <CCard className="mb-3">
            <CCardBody className="p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="text-medium-emphasis text-uppercase fw-semibold small">Advice Sent</div>
                  <div className="fs-2 fw-bold">{stats.sent}</div>
                </div>
                <CIcon icon={cilEnvelopeOpen} size="3xl" className="text-info opacity-25" />
              </div>
              <CProgress thin className="mt-2" value={(stats.sent / stats.total) * 100} color="info" />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={6} lg={3}>
          <CCard className="mb-3">
            <CCardBody className="p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="text-medium-emphasis text-uppercase fw-semibold small">Responded</div>
                  <div className="fs-2 fw-bold text-success">{stats.responded}</div>
                </div>
                <CIcon icon={cilCheckCircle} size="3xl" className="text-success opacity-25" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={6} lg={3}>
          <CCard className="mb-3">
            <CCardBody className="p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="text-medium-emphasis text-uppercase fw-semibold small">Failed</div>
                  <div className="fs-2 fw-bold text-danger">{stats.failed}</div>
                </div>
                <CIcon icon={cilXCircle} size="3xl" className="text-danger opacity-25" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <span>Contact List</span>
          <span className="text-medium-emphasis small">Showing {filteredContacts.length} of {stats.total}</span>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3 g-2">
            <CCol md={3}>
              <CFormInput placeholder="Search contacts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </CCol>
            <CCol md={3}>
              <CFormSelect value={filterSuburb} onChange={(e) => setFilterSuburb(e.target.value)}>
                <option value="">All Suburbs</option>
                {suburbs.map((s) => <option key={s} value={s}>{s}</option>)}
              </CFormSelect>
            </CCol>
            <CCol md={2}>
              <CFormSelect value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </CFormSelect>
            </CCol>
            <CCol md={2}>
              <CFormSelect value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="">All Status</option>
                <option value="sent">Sent</option>
                <option value="pending">Pending</option>
                <option value="responded">Responded</option>
                <option value="failed">Failed</option>
              </CFormSelect>
            </CCol>
            <CCol md={2}>
              <CButton color="secondary" variant="outline" onClick={() => { setSearchTerm(''); setFilterSuburb(''); setFilterCategory(''); setFilterStatus('') }}>Clear</CButton>
            </CCol>
          </CRow>

          <div className="table-responsive">
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Recipient</CTableHeaderCell>
                  <CTableHeaderCell>Category</CTableHeaderCell>
                  <CTableHeaderCell>Suburb</CTableHeaderCell>
                  <CTableHeaderCell>Contact</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredContacts.map((contact) => (
                  <React.Fragment key={contact.id}>
                    <CTableRow onClick={() => setExpandedRow(expandedRow === contact.id ? null : contact.id)} style={{ cursor: 'pointer' }}>
                      <CTableDataCell>
                        <strong>{contact.recipient}</strong>
                        {contact.street && <div className="small text-medium-emphasis">{contact.street}</div>}
                      </CTableDataCell>
                      <CTableDataCell>{getCategoryBadge(contact.category)}</CTableDataCell>
                      <CTableDataCell>{contact.suburb || '-'}</CTableDataCell>
                      <CTableDataCell>
                        {contact.contact_person && <div className="small">{contact.contact_person}</div>}
                      </CTableDataCell>
                      <CTableDataCell>{getStatusBadge(contact)}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell colSpan={5} className="p-0">
                        <CCollapse visible={expandedRow === contact.id}>
                          <div className="p-3 bg-light">
                            <CRow>
                              <CCol md={6}>
                                <h6>Contact Details</h6>
                                <p className="mb-1"><strong>Street:</strong> {contact.street || 'N/A'}</p>
                                <p className="mb-1"><strong>Suburb:</strong> {contact.suburb || 'N/A'}</p>
                                {contact.email && <p className="mb-1"><CIcon icon={cilEnvelopeOpen} size="sm" className="me-2" />{contact.email}</p>}
                                {contact.phone && <p className="mb-1"><CIcon icon={cilPhone} size="sm" className="me-2" />{contact.phone}</p>}
                              </CCol>
                              <CCol md={6}>
                                <h6>Communication Status</h6>
                                <p className="mb-1"><strong>Date Sent:</strong> {contact.date_sent || 'Not sent'}</p>
                                <p className="mb-1"><strong>Response:</strong> {contact.response || 'No response'}</p>
                                <p className="mb-1"><strong>Failed:</strong> {contact.failed || 'No'}</p>
                                {contact.notes && <p className="mb-1"><strong>Notes:</strong> {contact.notes}</p>}
                              </CCol>
                            </CRow>
                          </div>
                        </CCollapse>
                      </CTableDataCell>
                    </CTableRow>
                  </React.Fragment>
                ))}
              </CTableBody>
            </CTable>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default ContactsDashboard
