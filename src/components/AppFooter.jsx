import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Marathon Event Manager
        </a>
        <span className="ms-1">&copy; 2026</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Version</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          v1.0.0
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
