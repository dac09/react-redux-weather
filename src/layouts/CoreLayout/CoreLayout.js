import React from 'react'
import './styles/core.scss'
import {IntlProvider} from 'react-intl';

export const CoreLayout = ({ children }) => (
      <IntlProvider
        locale='en'
    >
  <div className='container text-center'>
    <div className="row">
      <h2>Weather App</h2>
    </div>
    {children}
  </div>
  </IntlProvider>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
