import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as cityActions from '../../redux/cities/actions';
import * as weatherActions from '../../redux/weather/actions';

import Forecasts from '../../containers/Forecasts';

import CitySearch from '../../components/CitySearch';

import styles from './homepage.scss';

type Props = {

}
export class HomePage extends React.Component {
  props: Props;

  componentDidMount() {
    // this.props.weatherActions.getWeatherFor('london');
  }

  render() {
    const deleteCity = () => {
      const {cityActions} = this.props;

      cityActions.removeCity(this.refs._cityName.value);
    }

    const {cityActions} = this.props;

    return (
      <div>
        <div>
          <CitySearch save={cityActions.addCity}/>
        </div>


        <div>
          <Forecasts/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    cityActions: bindActionCreators(cityActions, dispatch),
    weatherActions: bindActionCreators(weatherActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
