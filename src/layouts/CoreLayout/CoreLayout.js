import React from 'react'
import './styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <div className="row">
      <h2>Weather App</h2>
    </div>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
