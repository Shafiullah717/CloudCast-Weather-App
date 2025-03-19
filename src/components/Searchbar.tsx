import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-r-lg hover:bg-blue-50 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Search
        </button>
      </div>
    </div>
  );
}