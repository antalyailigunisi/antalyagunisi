import Canvas3D from '@/components/Canvas3D';
import SavingsCalculator from '@/components/SavingsCalculator';
import SolarWeatherWidget from '@/components/SolarWeatherWidget';
import PhotoQuoteCTA from '@/components/PhotoQuoteCTA';
import FAQSection from '@/components/FAQSection';
import { Phone, MapPin, ShieldCheck, Wrench, ThermometerSun, Star, Award } from 'lucide-react';

export default function Home() {
  const mapUrl = "https://share.google/NIX5zaytsdFQggRCg";
  const phone = "0506 252 16 81";

  return (
    <main className="min-h-screen relative pb-32">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-solar-600 to-solar-400 flex items-center justify-center font-black text-black text-xl shadow-lg shadow-solar-500/20">
              Z
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white block leading-none">ANTALYA ZİRVE</span>
              <span className="text-[10px] text-solar-400 tracking-widest uppercase font-semibold">Güneş Enerji Sistemleri</span>
            </div>
          </div>

          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-2 bg-solar-500 hover:bg-solar-400 text-black font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-solar-500/25 hover:scale-105"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>{phone}</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        {/* Canlı Antalya Güneş Widget'ı */}
        <SolarWeatherWidget />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-solar-500/30 text-solar-400 text-xs font-semibold">
              <Award className="w-4 h-4" />
              <span>Antalya'nın 1 Numaralı Günısı Servisi</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight">
              Sıcak Suda <br />
              <span className="text-gradient">Kesintisiz Zirve</span> Teknolojisi
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-xl font-normal leading-relaxed">
              Basınçlı krom depolu sistemler, yüksek verimli vakum tüpler ve hızlı teknik montaj. Antalya genelinde 7/24 kesintisiz güneş enerjisi çözümleri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-3 bg-solar-500 hover:bg-solar-400 text-black font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-solar-500/20 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 fill-black" />
                <span>Hemen Servis Çağır</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass-panel hover:bg-white/10 text-white font-semibold text-base px-6 py-4 rounded-2xl border border-white/10 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-solar-400" />
                <span>Konumu Aç (Google Maps)</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 text-sm text-gray-400">
              <div className="flex text-solar-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-solar-400" />
                ))}
              </div>
              <span>%100 Müşteri Memnuniyeti & Garanti</span>
            </div>
          </div>

          {/* 3D Model Bölümü */}
          <div className="lg:col-span-5 glass-panel rounded-3xl border border-white/10 p-2 relative">
            <Canvas3D />
          </div>
        </div>
      </section>

      {/* Fotoğraflı Teklif Modülü */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <PhotoQuoteCTA />
      </section>

      {/* Hesaplayıcı Section */}
      <section className="mt-12 px-4 md:px-8 max-w-7xl mx-auto">
        <SavingsCalculator />
      </section>

      {/* Bento Grid Özellikler */}
      <section className="mt-20 md:mt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Neden Zirve Güneş Enerjisi?</h2>
          <p className="text-gray-400 mt-3">Geleneksel sistemlerin ötesinde dayanıklı ve modern mühendislik</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-4 hover:border-solar-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-solar-500/10 flex items-center justify-center text-solar-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Paslanmaz Krom Depo</h3>
            <p className="text-sm text-gray-400">
              Kirece ve Antalya'nın sert sularına dayanıklı, korozyon yapmayan özel krom iç depo mimarisi.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-4 hover:border-solar-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Yüksek Verimli Tüpler</h3>
            <p className="text-sm text-gray-400">
              Bulutlu havalarda dahi güneş ışınlarını maksimum emen vakum tüplü selektif kolektörler.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-4 hover:border-solar-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Hızlı Servis & Tamir</h3>
            <p className="text-sm text-gray-400">
              Antalya'nın tüm ilçelerine aynı gün içinde arıza, montaj ve periyodik bakım teknik servisi.
            </p>
          </div>
        </div>
      </section>

      {/* SSS Accordion Bölümü */}
      <FAQSection />

      {/* Sabit Alt İletişim Barı */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="glass-panel p-3 rounded-full border border-solar-500/30 flex items-center justify-between shadow-2xl shadow-black">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-300 hover:text-white px-4 py-2"
          >
            <MapPin className="w-4 h-4 text-solar-400" />
            <span>Konum</span>
          </a>

          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 bg-solar-500 hover:bg-solar-400 text-black font-extrabold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-solar-500/30"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Hemen Ara: {phone}</span>
          </a>
        </div>
      </div>
    </main>
  );
}
