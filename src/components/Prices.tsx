const prices = [
  { name: "Маникюр", price: "от 900 ₽", emoji: "💅" },
  { name: "Педикюр", price: "от 2 200 ₽", emoji: "🦶" },
  { name: "Брови", price: "от 500 ₽", emoji: "✨" },
  { name: "Визаж", price: "от 2 500 ₽", emoji: "💄" },
  { name: "Эстетическая косметология", price: "от 1 500 ₽", emoji: "🌿" },
  { name: "Массаж лица", price: "от 1 000 ₽", emoji: "🤲" },
];

export default function Prices() {
  return (
    <section className="bg-neutral-900 px-6 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest text-neutral-400 mb-4 text-center">Стоимость услуг</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16 leading-tight">
          Прозрачные цены
        </h2>
        <div className="flex flex-col divide-y divide-neutral-700">
          {prices.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-6 group">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-lg text-neutral-100 group-hover:text-white transition-colors">{item.name}</span>
              </div>
              <span className="text-xl font-semibold text-white">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-10 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
            Записаться
          </button>
        </div>
      </div>
    </section>
  );
}