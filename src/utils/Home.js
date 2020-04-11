import React, { Component } from 'react';
import API from './api';
// import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
   
    API.search()
      .then(({data:{results}}) => {

        let users = results.map(person => {
          return {
            id: person.id.value || 'N/A',
            name: person.name.first + person.name.last,
            address: person.location.city,
            email: person.email,
            phone: person.phone,
            website: person.picture.thumbnail
          }
        })
        this.setState({ users })
      })
  }

  deleteRow(id) {
    const index = this.state.users.findIndex(user => {
      return user.id === id
    })
    console.log("index", index)
  }

  render() {

    const columns = [
      {
        Header: "ID",
        accessor: "id",
        filterable: true,
        style: { textAlign: "center" },
        width: 300
      },
      {
        Header: "NAME",
        accessor: "name",
        filterable: true,
        textAlign: "center",
        style: { textAlign: "center" },
        width: 300
      },
      {
        Header: "Email",
        accessor: "email",
        style: { textAlign: "center" },
      },
      {
        Header: "PHONE",
        accessor: "phone",
        style: { textAlign: "center" },
      },
      {
        Header: "THUMBNAIL",
        Cell: props => {
          console.log(props)
          return (
            <img src={props.value} />
          )
        },
        accessor: "website",
        style: { textAlign: "center" },
        width: 200
      },
      {
        Header: "CITY",
        accessor: "address",
        style: { textAlign: "center" },
      },
      {
        Header: "DELETE",
        Cell: props => {
          return (
            <button style={{ backgroundColor: "green", color: "white" }}
              onClick={() => {
                this.deleteRow(props.original.id);
              }}
            >Delete</button>)
        },
        style: { textAlign: "center" },
        width: 200
      },

    ]

    return (
      <ReactTable
        columns={columns}
        data={this.state.users}
        showPaginationTop
      >

      </ReactTable>
    );
  }
}

export default App;




