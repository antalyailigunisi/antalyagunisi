'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Kışın günısı suyu ısıtır mı?',
    a: 'Evet! Antalya kış aylarında dahi ortalama %70 oranında güneşli gün sayısına sahiptir. Yüksek yalıtımlı vakum tüplü ve krom depolu sistemlerimiz kış güneşiyle suyu rahatlıkla ısıtır. Çok bulutlu günlerde ise isteğe bağlı rezistans takviyesi devreye girer.',
  },
  {
    q: 'Krom depo ile galvaniz depo arasındaki fark nedir?',
    a: 'Krom (paslanmaz çelik) depolar gıdaya uygundur, Antalya’nın kireçli sularına ve korozyona karşı üstün dayanıklılık gösterir, çok uzun ömürlüdür. Galvaniz depolar ise daha ekonomik başlangıç maliyetine sahiptir ancak zamanla paslanma riski krom depoya göre daha yüksektir.',
  },
  {
    q: 'Antifriz ne zaman konmalı ve neden önemlidir?',
    a: 'Antalya merkezde don nadir görülse de yüksek kesimlerde ve kış gecelerindeki ani sıcaklık düşüşlerinde panellerin donup patlamasını önlemek için sonbahar sonu (Ekim-Kasım) kapalı devre sistemlere antifriz ilavesi ve kontrolü yapılmalıdır.',
  },
  {
    q: 'Günısı su sızdırıyor, ne yapmalıyım?',
    a: 'Su sızıntısı genellikle eskimiş conta, çatlamış boru veya kireçten delinmiş depo kaynaklıdır. Ana vananızı kapatıp 0506 252 16 81 numaramızdan servis çağırmalısınız. Ekibimiz aynı gün gelip müdahale eder.',
  },
  {
    q: 'Vakum tüplü mü yoksa düz panelli günısı mı tercih edilmeli?',
    a: 'Vakum tüpleri soğuk kış günlerinde ısı kaybını sıfıra indirir ve suyu daha hızlı ısıtır. Düz paneller ise Antalya’nın aşırı sıcak yaz günlerinde aşırı basınç üretmeden yıllarca stabil çalışan klasik çözümdür.',
  },
  {
    q: 'Depo şamandırası neden bozulur ve su taşırır?',
    a: 'Antalya suyunun kireç oranı yüksek olduğu için şamandıra mekanizması kireçlenerek takılı kalır. Bu durum çatıdan sürekli su taşmasına neden olur. Şamandıra değişimi ile 15 dakikada çözülen bir arızadır.',
  },
  {
    q: 'Günısı bakımı ne sıklıkla yapılmalıdır?',
    a: 'Yılda 1 kez (tercihen kış öncesi) depo kireç temizliği, boru izolasyon kontrolü, conta ve antifriz kontrolü yaptırmak sisteminizin ömrünü 2 katına çıkarır ve suyunuzun daha sıcak kalmasını sağlar.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="my-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-solar-500/30 text-solar-400 text-xs font-semibold mb-3">
          <HelpCircle className="w-4 h-4" />
          <span>Aklınıza Takılanlar</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Sıkça Sorulan Sorular</h2>
        <p className="text-gray-400 text-sm mt-2">Antalya günısı ve güneş enerjisi sistemleri hakkında merak edilen her şey</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base md:text-lg hover:text-solar-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-solar-400 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-6 md:px-6 md:pb-6 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
