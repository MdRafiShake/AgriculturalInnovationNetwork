import React from "react";
import { Droplet, Beaker, MapPin } from "lucide-react"; // icons

const SoilReport = ({ soil, location }) => {
  // fallback mock soil data
  const data = soil || {
    type: "Loamy",
    ph: 6.8,
    moisture: "45%",
  };

  // fallback mock location data
  const place = location || {
    village: "Munshiganj",
    district: "Dhaka",
    coordinates: "23.542°N, 90.511°E",
  };

  return (
    <div className="w-[95%] mx-auto mt-3 p-4 bg-emerald-800/40 rounded-xl shadow-md">
      {/* Soil Section */}
      <h2 className="text-sm text-slate-200 mb-2">Soil Report</h2>
      <div className="text-lg font-semibold text-white">{data.type}</div>

      <div className="flex justify-between mt-3 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <Beaker className="w-4 h-4 text-amber-300" />
          pH: {data.ph}
        </div>
        <div className="flex items-center gap-2">
          <Droplet className="w-4 h-4 text-sky-400" />
          Moisture: {data.moisture}
        </div>
      </div>

      {/* Location Section */}
      <div className="mt-4 text-sm text-slate-200">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-red-400" />
          <span className="font-semibold">Location</span>
        </div>
        <div className="ml-6 text-slate-300">
          <div>Village: {place.village}</div>
          <div>District: {place.district}</div>
          <div>Coords: {place.coordinates}</div>
        </div>
      </div>
    </div>
  );
};

export default SoilReport;
