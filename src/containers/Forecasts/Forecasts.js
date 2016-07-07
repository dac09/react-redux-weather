import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as cityActions from '../../redux/cities/actions';
import * as weatherActions from '../../redux/weather/actions';

import styles from './forecastList.scss';

import Forecast from '../../components/Forecast';


type Props = {

}
export class Forecasts extends React.Component {
  props: Props;

  componentWillReceiveProps(nextProps) {
    const {cities, weather, weatherActions} = this.props;

    let cityList = Object.keys(nextProps.cities);

    cityList.map((city) => {
      console.log(city)

      // // Don't fetch weather again if already present
      if (city in cities){
        return;
      }

      weatherActions.getWeatherFor(city);
    })
  }

  render() {

    const deleteCity = (city) => {
      const {cityActions} = this.props;

      cityActions.removeCity(city);
    }

    const renderForecastTracks = () => {
      const cityList = Object.keys(this.props.cities);

      return cityList.map((city, index) => {
        const {weather} = this.props;

        return (
          <div key={index} className="animated slideInDown">
            <div className="row">
              <h3 className="column column-90">{city}</h3>
              <button className="column column-10 button-clear" onClick={() => deleteCity(city)}>× Remove</button>
            </div>
            <div className={`${styles.trackWrap} row`}>
                {weather && weather[city] && <Forecast weatherList={weather[city].list}/>}
            </div>
        </div>)
      })
    }

    return (
      <div>
        {renderForecastTracks()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    weather: state.weather,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    cityActions: bindActionCreators(cityActions, dispatch),
    weatherActions: bindActionCreators(weatherActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecasts)
