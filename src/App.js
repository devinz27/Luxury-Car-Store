import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: data.products,
      sort: "",
    };
  }

  sortProducts = (event) =>  {
    const sort = event.target.value
    this.setState(() => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => 
      sort === "lowest" ? ((a.price > b.price) ? 1 : -1) : 
      sort === "highest" ? ((a.price < b.price) ? 1 : -1 ):
        ((a.id > b.id) ? 1 : -1)
      ),
    }))
  }

  render() {
    return (
      <div className="container">
        <header>
          <a href="/">React Shopping List</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
              sort={this.state.sort}
              sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
