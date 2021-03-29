import React, { Component } from "react";
import ListItems from "./ListItems";
import "./Form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: 0,
      todo: "",
      editItem: false,
    };
  }
  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };
  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      todo: this.state.todo,
      id: this.state.id,
    };
    const addedItems = [...this.state.items, newItem];

    this.setState({
      items: addedItems,
      todo: "",
      id: Math.floor(Math.random() * 10),
    });
  };
  deleteItems = (id) => {
    const filteredItem = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: filteredItem });
  };
  editItems = (id) => {
    const filteredItem = this.state.items.filter((item) => {
      return item.id !== id;
    });
    const findedItems = this.state.items.find((item) => {
      return item.id === id;
    });

    this.setState({
      items: filteredItem,
      todo: findedItems.todo,
      editItem: true,
    });
  };
  render() {
    return (
      <div className="main-form">
        <form className="form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter your work"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.addItem}>
            submit
          </button>
        </form>
        <ListItems
          items={this.state.items}
          deleteClick={this.deleteItems}
          editItem={this.editItems}
        />
      </div>
    );
  }
}
export default Form;
