import React from 'react';
import './App.css';  // Import the CSS file

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}, ${this.props.price}
      </li>
    );
  }
}

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Apple', price: 0.99 },
      { id: 2, name: 'Orange', price: 0.89 },
    ],
  };

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = parseFloat(this.priceRef.current.value);  // Ensure the price is a number
    this.setState({
      items: [
        ...this.state.items,
        { id, name, price }
      ]
    });

    // Clear the input fields after adding
    this.nameRef.current.value = '';
    this.priceRef.current.value = '';
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {this.state.items.map(i => {
            return (
              <Item
                key={i.id}
                name={i.name}
                price={i.price}
              />
            );
          })}
        </ul>
        <input type="text" placeholder="Item Name" ref={this.nameRef} /><br />
        <input type="text" placeholder="Item Price" ref={this.priceRef} /><br />
        <button onClick={this.add}>Add Item</button>
      </div>
    );
  }
}

export default App;
