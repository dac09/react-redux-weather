import React from 'react'

type Props = {

};
export class CitySearch extends React.Component {
  props: Props;

  render () {

    const handleSubmit = (e) => {
      e.preventDefault();
      const {save} = this.props;

      save(this.refs._cityName.value);
    }


    return (
      <form onSubmit={handleSubmit} className="row">
        <div className="column column-80">
          <input type="text"  name="cityName" ref="_cityName"></input>
        </div>
        <input className="column column-20" type="submit"></input>
      </form>
    )
  }
}

export default CitySearch
