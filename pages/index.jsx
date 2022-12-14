import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Hero from '../components/home/hero'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState("Tokyo");
  const [weather, setWeather] = useState();

  const handleClick = (name) => {
    setSelectedCity(name);
  };

  const search =(srch) =>{
   let x= document.querySelector(".srchbar").value;
    setSelectedCity(x);

  }

  useEffect(() => {
    fetch("http://countriesnow.space/api/v0.1/countries/capital/")
      .then((response) => response.json())
      .then((response) => {
        setCities(response);
      })
      .catch((err) => console.error(err));
    // console.log(cities);
  }, []);

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=d3b40551055c0358755bd0ecb5c84c51&query=${selectedCity} , headers: { Origin: window.location.host }` 
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setWeather(response);
      })
      .catch((err) => console.error(err));
    console.log(weather);
  }, [selectedCity]);

  if (!cities || !weather) {
    return <div>Loading...</div>;
  }
  console.log(weather);

 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <Hero  cities={cities} weather={weather} handleClick={handleClick} search={search} />

    </div>
  )
}

