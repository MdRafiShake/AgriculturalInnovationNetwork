import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeatherSuccess, fetchWeatherStart, fetchWeatherFailure } from "../features/reportSlice";

const Hero = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const apiKey = import.meta.env.VITE_Api_key; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

          try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(fetchWeatherSuccess(data));

            setWeather({
              temp: Math.round(data.main.temp),
              description: data.weather[0].description,
              humidity: data.main.humidity,
            });
            setLoading(false);
          } catch (error) {
            console.error("Failed to fetch weather:", error);
            setLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation not supported");
      setLoading(false);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-[95%] max-w-[2000px] mx-auto mt-5 lg:mt-8 rounded-3xl p-4 lg:p-6 bg-gradient-to-r from-emerald-700/50 to-emerald-600/20"
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
        {/* Header */}
        <div className="order-1 lg:order-2 flex-1 flex flex-col justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <div>
              <h1 className="text-lg lg:text-2xl font-semibold text-white">
                Hello, Farmer 👋
              </h1>
              <p className="text-sm lg:text-base text-slate-200/90">
                Overview of today's fields & actions
              </p>
            </div>
            <div className="text-sm lg:text-base text-white mt-2 md:mt-0">
              June 22, 2024 
            </div>
          </div>
        </div>

        {/* Weather Card */}
        <div className="order-2 lg:order-1 w-full lg:w-1/3 p-4 bg-emerald-800/40 rounded-xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cloud className="w-6 h-6 text-sky-300 lg:w-8 lg:h-8" />
            <div>
              <div className="text-sm lg:text-base text-slate-200">Weather</div>
              <div className="text-xl lg:text-2xl font-semibold text-white">
                {loading ? "..." : `${weather?.temp}°C`}
              </div>
              <div className="text-xs lg:text-sm text-slate-300">
                {loading ? "Loading..." : weather?.description}
                
              </div>
            </div>
          </div>
          <div className="text-xs lg:text-sm text-slate-300">
            {loading ? "..." : `Humidity: ${weather?.humidity}%`}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
