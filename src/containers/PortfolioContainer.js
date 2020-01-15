import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const {stocks, removeStock} = this.props

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            stocks.map(stock => <Stock key={stock.id} stock={stock} removeStock={removeStock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
