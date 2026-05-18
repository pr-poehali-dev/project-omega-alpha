export default function Workspace() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-50">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0">
        <img
          src="https://cdn.poehali.dev/projects/5cf78603-bd8c-4dbb-a590-ef796f6c2cd4/bucket/34bd2197-6db9-4749-a281-24c234a2625d.jpg"
          alt="Рабочее место мастера"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:ml-12">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Моё рабочее место</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Индивидуальный кабинет мастера — уютное пространство, созданное для вашего комфорта.
        </p>
        <p className="text-neutral-500 text-base leading-relaxed">
          Всё оборудование профессиональное, материалы сертифицированные. Приём строго по записи — только вы и мастер.
        </p>
      </div>
    </div>
  );
}
