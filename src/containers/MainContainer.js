import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    myStocks: [],
    isAlphabetical: true,
    type: 'All'
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({
      stocks: stocks
    }))
  }


  addToMyStocks = (stock) => {
    if(!this.state.myStocks.includes(stock)) this.setState({
      myStocks: [...this.state.myStocks, stock]
    })
    console.log(stock)
  }


  removeToMyStocks = (stockToRemove) => {
    this.setState({
      myStocks: this.state.myStocks.filter(stock => stock.id !== stockToRemove.id)
    })
  }


  changeIsAlphabetical = () => {
    this.setState({
      isAlphabetical: !this.state.isAlphabetical
    })
    console.log(this.state.isAlphabetical)
  }


  changeType = (event) => {
    this.setState({
      type: event.target.value
    })
    console.log(this.state.type)
  }


  render() {
    const {stocks, myStocks, isAlphabetical, type} = this.state

    if(isAlphabetical) stocks.sort((s1, s2) => s1.name.localeCompare(s2.name))
    else stocks.sort((s1, s2) => s1.price - s2.price)

    const filteredStocks = (this.state.type === 'All') ? stocks : stocks.filter(stock => stock.type === this.state.type)


    return (
      <div>
        <SearchBar
          isAlphabetical={isAlphabetical}
          changeAlphabetical={this.changeIsAlphabetical}
          currentType={type}
          changeType={this.changeType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filteredStocks} addStock={this.addToMyStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={myStocks} removeStock={this.removeToMyStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
