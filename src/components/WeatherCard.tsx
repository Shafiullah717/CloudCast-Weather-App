interface WeatherCardProps {
    data: any;
  }
  
  export default function WeatherCard({ data }: WeatherCardProps) {
    return (
      <div>
        <h2>{data.location.name}, {data.location.country}</h2>
        <p>Temperature: {data.current.temp_c}°C</p>
        <p>Humidity: {data.current.humidity}%</p>
        <p>Wind Speed: {data.current.wind_kph} kph</p>
      </div>
    );
  }
  