import React from "react";

const HarvestingTips = () => {
  // Mock tips data
  const tips = [
    { area: "North Field", tip: "Harvest early morning to retain freshness." },
    { area: "South Zone", tip: "Use sharp tools to avoid crop damage." },
    { area: "East Plot", tip: "Check soil moisture before harvesting root crops." },
  ];

  return (
    <div className="w-[95%] mx-auto mt-3 p-4 bg-emerald-800/40 rounded-xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-white">Harvesting Tips</div>
          <div className="text-xs text-slate-300">Tips by area</div>
        </div>
        
      </div>

      {/* Tips list */}
      <div className="mt-3 space-y-2">
        {tips.length === 0 ? (
          <div className="text-xs text-slate-300">Loading tips...</div>
        ) : (
          tips.map((t, idx) => (
            <div
              key={idx}
              className="px-2 py-2 rounded-lg bg-white/10 flex items-start gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
              <div>
                <div className="text-sm font-medium text-white">{t.area}</div>
                <div className="text-xs text-slate-300">{t.tip}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HarvestingTips;
