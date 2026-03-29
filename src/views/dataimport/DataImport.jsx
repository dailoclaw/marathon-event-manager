import React from 'react'
import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudUpload } from '@coreui/icons'

const DataImport = () => {
  return (
    <CCard>
      <CCardHeader>Data Import</CCardHeader>
      <CCardBody>
        <p>Import your marathon data from CSV or Excel files.</p>
        <CButton color="primary">
          <CIcon icon={cilCloudUpload} className="me-2" />
          Import Spreadsheet
        </CButton>
      </CCardBody>
    </CCard>
  )
}

export default DataImport
