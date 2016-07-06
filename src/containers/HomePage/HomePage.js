import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../../redux/cities/actions';
import * as weatherActions from '../../redux/weather/actions';
import styles from './homepage.scss';

type Props = {

}
export class HomePage extends React.Component {
  props: Props;

  componentDidMount() {
    // this.props.weatherActions.getWeatherFor('london');
  }

  render() {

    const handleSubmit = (e) => {
      e.preventDefault();
      const {cityActions} = this.props;

      cityActions.addCity(this.refs._cityName.value);
    }

    const deleteCity = () => {
      const {cityActions} = this.props;

      cityActions.removeCity(this.refs._cityName.value);
    }



    return (
      <div>
        <div>
          <form onSubmit={handleSubmit} className="row">
            <div className="column column-80">
              <input type="text"  name="cityName" ref="_cityName"></input>
            </div>
            <input className="column column-20" type="submit"></input>
          </form>
        </div>

        <div className="row">
          <button className="column-50" onClick={deleteCity}> Delete </button>
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
