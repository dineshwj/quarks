import React, { Component } from "react";
import axios from "axios";

const API_KEY = "qRFVqdyvgtlegtX95I4knLgxjmpBvXMX";

class Giphy extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      giphyResult: [],
      limit: 5
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const searchQuery = e.target.getElementsByTagName("input")[0].value;

    this.handleSearchRequest(searchQuery);

    this.setState({
      searchQuery: searchQuery
    });
  };

  handleSearchRequest = query => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=${
          this.state.limit
        }`
      )

      .then(response => {
        console.log(response.data.data);
        let result = response.data.data;
        this.setState({
          giphyResult: result
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log("searchQuery", this.state.searchQuery, this.state.giphyResult);

    return (
      <div>
        <div className="searchbar">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Search here..." type="text" />
            <button type="submit">Search </button>
          </form>
        </div>

        <div className="container">
          {this.state.giphyResult.map((items, index) => (
            <div key={index} className="card">
              <div className="card-img">
                <img src={items.images.downsized_medium.url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Giphy;
