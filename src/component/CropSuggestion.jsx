import React from "react";

const CropSuggestion = () => {
  // mock soil + season info
  const soil = { type: "Loamy", ph: 6.8, moisture: "45%" };
  const season = "Winter";

  // simple rules for suggestions
  const cropLibrary = [
    { id: 1, name: "Rice", bestSeason: "Monsoon", expectedYield: "3.5 tons/acre", soil: "Clayey" },
    { id: 2, name: "Wheat", bestSeason: "Winter", expectedYield: "2.8 tons/acre", soil: "Loamy" },
    { id: 3, name: "Maize", bestSeason: "Summer", expectedYield: "4.0 tons/acre", soil: "Sandy" },
    { id: 4, name: "Potato", bestSeason: "Winter", expectedYield: "12 tons/acre", soil: "Loamy" },
  ];

  // filter crops based on soil + season
  const suggestions = cropLibrary.filter(
    (c) => c.soil === soil.type && c.bestSeason === season
  );

  return (
    <div className="w-[95%] mx-auto mt-3 p-4 bg-emerald-800/40 rounded-xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-200">Harvesting Suggestions</div>
          <div className="text-xs text-slate-300">
            Based on soil ({soil.type}) & season ({season})
          </div>
        </div>
        <div className="text-xs text-slate-300">Quick picks</div>
      </div>

      {/* Suggestions */}
      <div className="mt-3 grid grid-cols-1 gap-2">
        {suggestions.length === 0 && (
          <div className="text-xs text-slate-300">No harvesting suggestions available</div>
        )}

        {suggestions.map((c) => (
          <div
            key={c.id}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-700/40 hover:bg-emerald-700/60 transition"
          >
            <div>
              <div className="font-medium text-white">{c.name}</div>
              <div className="text-xs text-slate-300">
                Best in {c.bestSeason} • Yield: {c.expectedYield}
              </div>
            </div>
            <button className="px-3 py-1 rounded-md bg-emerald-600 text-white text-sm shadow-md hover:bg-emerald-500 transition">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropSuggestion;
