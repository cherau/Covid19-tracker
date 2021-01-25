import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { render } from "react-dom";
import { fetchData } from "./api";

//import coronaImage from "./images/image.png";
class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log(data);
  }
  handleCountryChange = async (country) => {
    // fetch and set
    const fetchedData = await fetchData(country);
    //console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://i.ibb.co/7QpKsCX/image.png"
          alt="COVID19"
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <br />
        <br />
        <img src="https://darknetdiaries.com/imgs/carna.gif" alt="map" />
      </div>
    );
  }
}
export default App;
