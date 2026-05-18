const credentials = [
  {
    icon: "🎓",
    title: "Среднее профессиональное образование",
    desc: "Специальность: технологии индустрии красоты",
  },
  {
    icon: "⭐",
    title: "Повышение квалификации",
    desc: "Мастер-классы Aravia",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/files/b1b2150b-5373-4bc3-a75c-a27ec1da1154.jpg"
          alt="Мастер"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Образование и квалификация</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждый образ — это история. Помогу вам найти стиль, который отражает именно вас.
        </p>
        <div className="flex flex-col gap-6 mb-8">
          {credentials.map((c) => (
            <div key={c.title} className="flex items-start gap-4">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="font-semibold text-neutral-900">{c.title}</p>
                <p className="text-sm text-neutral-500">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Записаться онлайн
        </button>
      </div>
    </div>
  );
}