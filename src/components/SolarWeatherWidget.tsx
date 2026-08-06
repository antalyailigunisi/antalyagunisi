'use client';

import { useState, useEffect } from 'react';
import { Sun, CloudSun, CloudRain, Flame, CheckCircle2 } from 'lucide-react';

export default function SolarWeatherWidget() {
  const [weather, setWeather] = useState<{
    temp: number;
    cloudCover: number;
    efficiency: number;
    waterTemp: number;
    statusText: string;
    loading: boolean;
  }>({
    temp: 32,
    cloudCover: 10,
    efficiency: 92,
    waterTemp: 74,
    statusText: 'Mükemmel Güneşlenme',
    loading: true,
  });

  useEffect(() => {
    // Antalya Koordinatları: Lat 36.8848, Lon 30.7056
    fetch('https://api.open-meteo.com/v1/forecast?latitude=36.8848&longitude=30.7056&current=temperature_2m,cloud_cover')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current) {
          const temp = Math.round(data.current.temperature_2m);
          const cloud = data.current.cloud_cover; // 0-100% arası bulutluluk
          
          // Gerçekçi Fiziksel Hesaplama
          const efficiency = Math.max(20, Math.min(100, Math.round(100 - cloud * 0.75)));
          const waterTemp = Math.min(88, Math.round(temp + (efficiency / 100) * 48));
          
          let status = 'Mükemmel Güneşlenme';
          if (cloud > 30 && cloud <= 70) status = 'Orta Düzey Isınma';
          if (cloud > 70) status = 'Düşük Güneşlenme (Destekli)';

          setWeather({
            temp,
            cloudCover: cloud,
            efficiency,
            waterTemp,
            statusText: status,
            loading: false,
          });
        }
      })
      .catch(() => {
        setWeather((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return (
    <div className="glass-panel p-4 md:p-6 rounded-3xl border border-solar-500/30 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-solar-500/10 via-transparent to-blue-500/10">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="p-3.5 rounded-2xl bg-solar-500/20 text-solar-400 border border-solar-500/30 relative">
          {weather.cloudCover < 30 ? (
            <Sun className="w-7 h-7 animate-spin-slow" />
          ) : weather.cloudCover <= 70 ? (
            <CloudSun className="w-7 h-7 text-amber-300" />
          ) : (
            <CloudRain className="w-7 h-7 text-blue-400" />
          )}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Canlı Antalya Verisi
            </span>
            <span className="text-xs text-gray-400">({weather.statusText})</span>
          </div>
          <h4 className="text-lg md:text-xl font-extrabold text-white">
            Antalya Şu An {weather.temp}°C | Güneş Verimliliği: %{weather.efficiency}
          </h4>
        </div>
      </div>

      <div className="glass-card px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-3 w-full md:w-auto justify-center">
        <Flame className="w-6 h-6 text-solar-400 animate-bounce" />
        <div>
          <span className="text-[11px] text-gray-400 block leading-none">Tahmini Depo Su Sıcaklığı</span>
          <span className="text-xl font-black text-solar-400">
            ~{weather.waterTemp}°C <span className="text-xs font-normal text-emerald-400">(0 TL Elektrik)</span>
          </span>
        </div>
      </div>
    </div>
  );
}
