import React from 'react';
import Products from './components/Products';
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
  render() {
    return (
      <div className="grid-container">
        <header> <a href="/">React Shopping Cart </a></header>
        <main>
          <div className="content">
            <main className="main"><Products products={this.state.products}/></main>
          </div>
          <div className="sidebar"></div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
  }
}

export default App;
