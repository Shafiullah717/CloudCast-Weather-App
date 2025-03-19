"use client";
import { useState } from "react";
import SearchBar from "@/components/Searchbar";
import WeatherCard from "@/components/WeatherCard";
import { fetchWeather } from "@/utils/FetchWeather";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("City not found. Please try again."); // Handle errors
      setWeather(null); // Clear weather data
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* App Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">CloudCast Weather App</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-8">
            {error}
          </div>
        )}

        {/* Weather Card */}
        {weather && (
          <div className="animate-fade-in">
            <WeatherCard data={weather} />
          </div>
        )}
      </div>
    </div>
  );
}