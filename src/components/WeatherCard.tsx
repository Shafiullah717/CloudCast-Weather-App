interface WeatherCardProps {
    data: any;
  }
  
  export default function WeatherCard({ data }: WeatherCardProps) {
    return (
      <div className="max-w-sm mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-2xl p-6 text-white transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold mb-2">
          {data.location.name}, {data.location.country}
        </h2>
        <p className="text-lg mb-1">🌡️ Temperature: {data.current.temp_c}°C</p>
        <p className="text-lg mb-1">💧 Humidity: {data.current.humidity}%</p>
        <p className="text-lg mb-1">🌬️ Wind Speed: {data.current.wind_kph} kph</p>
        <div className="mt-4 flex justify-center">
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
            className="w-16 h-16"
          />
          <p className="text-lg ml-2 self-center">
            {data.current.condition.text}
          </p>
        </div>
      </div>
    );
  }