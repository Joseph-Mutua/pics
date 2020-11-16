import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID DYzdl-JNf8bfv0ZFpHkeHDiYBMUJS33M9Qq1EZW5tsU",
      },
    });
  }

  state = {};
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
