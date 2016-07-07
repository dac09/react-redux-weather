import React from 'react'
// import FlipCard from 'react-flipcard';

import styles from './forecast.scss';

import {FormattedRelative, FormattedDate} from 'react-intl';

type Props = {
  weatherList: React.PropTypes.Array;
};
export class Forecast extends React.Component {
  props: Props;

  render () {


    const renderCards = () => {
      const {weatherList} = this.props;

        return weatherList.map(
          (forecast, index) => {
            const date = new Date(forecast.dt_txt);
            return (
              // Was trying to use a card component
              // but CSS issues!
              <div className={styles.cardContainer}>
                    <h4>{forecast.weather[0].main}</h4>
                    {index <= 5 ? <FormattedRelative value={date}/> : <FormattedDate value={date} weekday="long" hour="2-digit"/>  }
              </div>
            )
          }
        )


    }

    console.info(this.props.weatherList)
    return (
      <div className={styles.track}>
        {this.props.weatherList && renderCards()}
      </div>
    )
  }
}

export default Forecast
