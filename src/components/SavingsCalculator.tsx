'use client';

import { useState } from 'react';
import { Sun, Flame, Zap, PiggyBank } from 'lucide-react';

export default function SavingsCalculator() {
  const [personCount, setPersonCount] = useState<number>(4);
  const [electricBill, setElectricBill] = useState<number>(1200);

  // Antalya Güneşlenme Oranı bazlı yıllık tahmini tasarruf
  const yearlySavings = Math.round(electricBill * 12 * 0.45 * (personCount / 3));
  const co2Prevented = (personCount * 0.65).toFixed(1);

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-10 border border-solar-500/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-solar-500/10 text-solar-400">
          <Sun className="w-6 h-6 animate-spin-slow" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">Antalya Canlı Tasarruf Simülatörü</h3>
          <p className="text-sm text-gray-400">Günısı sistemi ile yılda ne kadar tasarruf edeceksiniz?</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <label className="block text-sm text-gray-300 mb-2 font-medium">
            Ailedeki Kişi Sayısı: <span className="text-solar-400 font-bold">{personCount} Kişi</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={personCount}
            onChange={(e) => setPersonCount(Number(e.target.value))}
            className="w-full accent-solar-500 h-2 bg-gray-700 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2 font-medium">
            Ortalama Aylık Elektrik Faturanız: <span className="text-solar-400 font-bold">{electricBill} TL</span>
          </label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={electricBill}
            onChange={(e) => setElectricBill(Number(e.target.value))}
            className="w-full accent-solar-500 h-2 bg-gray-700 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="glass-card p-5 rounded-2xl border border-solar-500/30">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Tahmini Yıllık Tasarruf</span>
            <PiggyBank className="w-5 h-5 text-solar-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-solar-400 mt-2">
            ₺{yearlySavings.toLocaleString('tr-TR')}
          </div>
          <span className="text-[11px] text-gray-500">Elektrik & Tüp harcamasında cebinizde kalan</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-blue-500/30">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Doğaya Katkınız</span>
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-blue-400 mt-2">
            {co2Prevented} Ton CO₂
          </div>
          <span className="text-[11px] text-gray-500">Yıllık engellenen karbon salınımı</span>
        </div>
      </div>
    </div>
  );
}
