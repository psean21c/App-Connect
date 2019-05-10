import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {
  state = {
    books: []
  }

  //http://localhost:3000/rooms
  componentWillMount() {
    axios.get('http://localhost:3000/rooms').then((response) => {
      this.setState({
        books: response.data
      })
    });
  }

  render() {
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.cname}</td>
        <td>{book.cdescription}</td>
        <td>
          <Button color="success" size="sm" className="mr-2">Edit</Button>
          <Button color="danger" size="sm">Delete</Button>
        </td>
      </tr>
      )
    });

    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </Table>
      </div>
    );
  }

}

export default App;
