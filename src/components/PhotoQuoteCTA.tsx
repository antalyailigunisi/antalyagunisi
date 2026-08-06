'use client';

import { Camera, Send, CheckCircle } from 'lucide-react';

export default function PhotoQuoteCTA() {
  const phone = '05062521681';
  const whatsappMsg = encodeURIComponent(
    'Merhaba, arızalı/eski günısımın fotoğrafını gönderiyorum. Tamir veya değişim için fiyat teklifi alabilir miyim?'
  );

  return (
    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-solar-500/30 text-center relative overflow-hidden my-12">
      <div className="absolute -left-12 -top-12 w-48 h-48 bg-solar-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="inline-flex p-4 rounded-3xl bg-solar-500/10 text-solar-400 mb-6 border border-solar-500/20">
        <Camera className="w-10 h-10 animate-pulse" />
      </div>

      <h3 className="text-2xl md:text-4xl font-black text-white max-w-2xl mx-auto leading-tight">
        Fotoğrafını Çekin, <span className="text-solar-400">5 Dakikada</span> Fiyat Teklifi Alın!
      </h3>

      <p className="text-gray-300 text-base max-w-xl mx-auto mt-4 leading-relaxed">
        Eski günınızın, sızdıran deponuzun veya kırık panelinizin fotoğrafını çekip WhatsApp'tan atın. Teknik ekibimiz hemen incelesin ve en uygun tamir/değişim fiyatını iletsin.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 my-6 text-xs text-gray-400">
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Ücretsiz Keşif & Teşhis</span>
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Sürpriz Maliyet Yok</span>
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Anında WhatsApp Yanıtı</span>
      </div>

      <a
        href={`https://wa.me/90${phone}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
      >
        <Camera className="w-6 h-6" />
        <span>Fotoğraf Gönder & Fiyat Al</span>
        <Send className="w-5 h-5 ml-1" />
      </a>
    </div>
  );
}
