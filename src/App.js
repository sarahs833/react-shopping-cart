import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import data from './data.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products : data.products,
      size: "",
      sort: ""
    }
  }
  sortProducts = (event) => {
    const sort = event.target.value
    this.setState({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => 
        sort === "highest"? 
          a.price < b.price?  1:-1:
        sort === "lowest"?
          a.price > b.price? 1: -1:
        a._id > b._id ? 1 : -1
      )
    })
  }

  filterProducts = (event) => {
  if(event.target.value === "") {
    this.setState({ size: event.target.value, products: data.products})
  } else {
      this.setState({size: event.target.value, 
        products: data.products.filter( product => product.availableSizes.indexOf(event.target.value) >= 0)
      })
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header> <a href="/">React Shopping Cart </a></header>
        <main>
          <div className="content">
            <main className="main">
              <Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort} filterProducts={this.filterProducts} sortProducts={this.sortProducts}/>
              <Products products={this.state.products}/>
            </main>
          </div>
          <div className="sidebar"></div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
  }
}

export default App;
