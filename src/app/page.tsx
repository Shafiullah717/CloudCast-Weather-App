"use client"
import { useState } from "react"; 
import SearchBar from "@/components/Searchbar";
import WeatherCard from "@/components/WeatherCard";
import { fetchWeather } from "@/utils/FetchWeather";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (city: string) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
