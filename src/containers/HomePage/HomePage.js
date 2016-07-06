import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../../redux/cities/actions';
import styles from './homepage.scss';

type Props = {

}
export class HomePage extends React.Component {
  props: Props;

  componentDidMount() {
    console.log(this.refs)
  }

  render() {

    const handleSubmit = (e) => {
      e.preventDefault();
      const {actions} = this.props;
      console.log(this.props)

      actions.addCity(this.refs._cityName.value);
    }

    const deleteCity = () => {
      const {actions} = this.props;

      actions.removeCity(this.refs._cityName.value);
    }



    return (
      <div>
        <h2 className={styles.example}>Weather App</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="cityName" ref="_cityName"></input>
          <input type="submit"/>
        </form>

        <button onClick={deleteCity}> Delete </button>
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
    actions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
