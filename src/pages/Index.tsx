import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/db51c89c-8106-4d76-b28f-893d07dc956c/files/c0b297c1-ab31-4f32-9a41-93cbf2b78b3c.jpg";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Эксперты", href: "#experts" },
  { label: "Кейсы", href: "#cases" },
  { label: "Блог", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  {
    icon: "Scale",
    title: "Судебная экспертиза",
    desc: "Проводим экспертизы по поручению суда и сторон дела. Заключения принимаются без возражений.",
    tags: ["Строительная", "Почерковедческая", "Финансовая", "Оценочная"],
  },
  {
    icon: "FileSearch",
    title: "Рецензия на экспертизу",
    desc: "Находим все ошибки и противоречия в экспертизе оппонента. Даём суду весомые основания её отклонить.",
    tags: ["Анализ методологии", "Выявление ошибок", "Контраргументы"],
  },
  {
    icon: "Microscope",
    title: "Досудебная оценка",
    desc: "До суда анализируем вашу ситуацию и проблему — определяем сильные стороны и стратегию защиты.",
    tags: ["Первичный анализ", "Стратегия", "Прогноз"],
  },
];

const advantages = [
  { num: "10+", label: "лет опыта", desc: "Понимаем все нюансы судебной системы" },
  { num: "СРО", label: "членство", desc: "Максимальный авторитет заключений в суде" },
  { num: "1–7", label: "дней", desc: "Оперативная подготовка документов" },
  { num: "100%", label: "прозрачность", desc: "Фиксированные цены без скрытых доплат" },
];

const experts = [
  {
    name: "Андрей Викторович Соколов",
    title: "Главный эксперт",
    spec: "Строительно-техническая экспертиза",
    exp: "18 лет практики",
    sro: "Член НП «СРО Судебных экспертов»",
  },
  {
    name: "Елена Михайловна Карпова",
    title: "Ведущий эксперт",
    spec: "Финансово-экономическая экспертиза",
    exp: "12 лет практики",
    sro: "Член РФЦСЭ при Минюсте РФ",
  },
  {
    name: "Дмитрий Александрович Лебедев",
    title: "Эксперт-аналитик",
    spec: "Почерковедческая и документарная",
    exp: "10 лет практики",
    sro: "Член СУДЭКС",
  },
];

const cases = [
  {
    category: "Строительный спор",
    title: "Оспорили экспертизу оппонента в деле на 47 млн руб.",
    result: "Суд отклонил экспертизу. Дело выиграно.",
    duration: "5 дней",
  },
  {
    category: "Корпоративный спор",
    title: "Финансовая экспертиза по делу о фальсификации отчётности",
    result: "Заключение принято с первого раза.",
    duration: "7 дней",
  },
  {
    category: "Гражданский иск",
    title: "Досудебная оценка квартиры с нарушениями застройщика",
    result: "Клиент получил компенсацию 2,8 млн руб.",
    duration: "3 дня",
  },
];

const faqItems = [
  {
    q: "Что входит в бесплатную консультацию?",
    a: "Эксперт изучит документы по вашему делу, оценит ситуацию и предложит наиболее эффективный путь: судебная экспертиза, рецензия или досудебная оценка. Без обязательств и давления.",
  },
  {
    q: "Как суд воспринимает ваши заключения?",
    a: "Наши эксперты являются членами СРО, что автоматически повышает авторитет заключений. За 10+ лет практики ни одно заключение не было отклонено судом без принятия во внимание.",
  },
  {
    q: "Сколько стоят услуги?",
    a: "Стоимость фиксируется при заключении договора и не меняется. Точную цену можно назвать только после анализа вашего дела на бесплатной консультации.",
  },
  {
    q: "Как быстро вы готовите заключение?",
    a: "От 1 до 7 рабочих дней в зависимости от сложности. Мы понимаем ценность времени в судебном процессе и строго соблюдаем договорные сроки.",
  },
  {
    q: "Гарантируете ли вы конфиденциальность?",
    a: "Абсолютно. Все материалы дела, данные клиента и сведения об экспертизе защищены договором о конфиденциальности и нормами экспертной тайны.",
  },
];

const blogPosts = [
  {
    date: "18 марта 2025",
    category: "Экспертиза",
    title: "Как оспорить экспертизу оппонента: пошаговое руководство",
    excerpt: "Разбираем типичные ошибки в экспертных заключениях и юридические инструменты для их оспаривания в суде.",
  },
  {
    date: "5 февраля 2025",
    category: "СРО",
    title: "Почему членство эксперта в СРО критично для вашего дела",
    excerpt: "Суды всё чаще требуют подтверждения квалификации эксперта. Объясняем, что такое СРО и почему это важно.",
  },
  {
    date: "14 января 2025",
    category: "Практика",
    title: "5 признаков того, что вам нужна рецензия на экспертизу",
    excerpt: "Когда имеет смысл оспаривать чужое заключение и каковы шансы на успех — реальные кейсы из практики.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", question: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-navy-900 text-foreground overflow-x-hidden">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-navy-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-gold flex items-center justify-center">
                <div className="w-4 h-4 bg-gold opacity-80" style={{clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"}} />
              </div>
              <div>
                <div className="font-cormorant text-sm font-bold text-gold-light leading-tight tracking-wide">Прайм ЭкспертУм</div>
                <div className="font-ibm text-[9px] text-muted-foreground tracking-widest uppercase">Судебные экспертизы</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+74951234567" className="font-ibm text-xs text-gold tracking-wider">+7 (495) 123-45-67</a>
              <a href="#consult">
                <button className="btn-gold text-xs px-5 py-2.5">Консультация</button>
              </a>
            </div>

            <button className="lg:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-navy-800 border-t border-border px-6 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="block nav-link py-3 border-b border-border" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#consult" className="block mt-4">
              <button className="btn-gold w-full">Бесплатная консультация</button>
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16" id="home">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="geometric-accent top-20 right-20 w-64 h-64 hidden lg:block" />
        <div className="geometric-accent top-32 right-32 w-44 h-44 hidden lg:block" />
        <div className="absolute top-1/3 right-16 w-px h-32 bg-gold opacity-20 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up" style={{animationFillMode:'forwards'}}>
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="font-ibm text-[10px] tracking-widest uppercase text-gold opacity-80">
                Опыт 10+ лет · Члены СРО · Москва
              </span>
            </div>

            <h1 className="font-cormorant text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in-up delay-100" style={{animationFillMode:'forwards'}}>
              Экспертное заключение,<br />
              <span className="text-gold italic">которое примет суд</span>
            </h1>

            <p className="font-ibm text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in-up delay-200" style={{animationFillMode:'forwards'}}>
              Проводим судебные экспертизы, готовим рецензии на экспертизы оппонента и помогаем выиграть дело. Работаем оперативно — от 1 до 7 дней.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in-up delay-300" style={{animationFillMode:'forwards'}}>
              <a href="#consult">
                <button className="btn-gold">
                  Бесплатный анализ проблемы
                </button>
              </a>
              <a href="#services">
                <button className="btn-outline-gold">
                  Наши услуги
                </button>
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-in-up delay-400" style={{animationFillMode:'forwards'}}>
              {advantages.map((a) => (
                <div key={a.num} className="border-l border-gold-dark pl-4">
                  <div className="stat-number">{a.num}</div>
                  <div className="font-cormorant text-sm text-gold-light">{a.label}</div>
                  <div className="font-ibm text-[11px] text-muted-foreground mt-1">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 bg-gold animate-pulse" />
          <Icon name="ChevronDown" size={14} className="text-gold" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="gold-line" />
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="font-ibm text-muted-foreground max-w-xl">
              Три ключевых направления для победы в судебном споре
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-hover bg-navy-700 border border-border p-8 group">
                <div className="w-12 h-12 border border-gold-dark flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
                  <Icon name={s.icon} fallback="Circle" size={20} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="font-ibm text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="font-ibm text-[10px] px-2 py-1 border border-border text-muted-foreground tracking-wider uppercase">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about" className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line" />
              <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-6">
                О компании<br /><span className="text-gold italic">Прайм ЭкспертУм</span>
              </h2>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-6">
                Мы не просто оказываем услуги — мы разделяем цель клиента: выиграть дело. За 10 лет работы наши эксперты прошли путь от рядовых специалистов до признанных авторитетов в своих областях.
              </p>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-8">
                Каждое дело — уникально. Мы изучаем нюансы, а не используем шаблоны. Дисциплина и соблюдение сроков — наша репутация. Конфиденциальность — наш принцип.
              </p>
              <div className="space-y-3">
                {[
                  "Солидарны с целью клиента — работаем на результат",
                  "Строго соблюдаем дедлайны в отличие от рынка",
                  "Заключения принимаются судом без лишних вопросов",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                      <Icon name="CheckSquare" size={16} className="text-gold" />
                    </div>
                    <span className="font-ibm text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Award", title: "Членство в СРО", desc: "Все эксперты состоят в саморегулируемых организациях" },
                { icon: "Shield", title: "Конфиденциальность", desc: "Полная защита данных и экспертная тайна" },
                { icon: "Clock", title: "1–7 дней", desc: "Оперативная подготовка без ущерба качеству" },
                { icon: "TrendingUp", title: "Фиксированная цена", desc: "Никаких скрытых платежей и переделок" },
              ].map((item) => (
                <div key={item.title} className="bg-navy-700 border border-border p-6">
                  <Icon name={item.icon} fallback="Circle" size={24} className="text-gold mb-4" />
                  <div className="font-cormorant text-lg font-semibold mb-2">{item.title}</div>
                  <div className="font-ibm text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* EXPERTS */}
      <section id="experts" className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="gold-line" />
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">Наши эксперты</h2>
            <p className="font-ibm text-muted-foreground max-w-xl">
              Сертифицированные специалисты с подтверждённой репутацией в судебной системе
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {experts.map((e) => (
              <div key={e.name} className="card-hover bg-navy-700 border border-border p-8">
                <div className="w-16 h-16 bg-navy-600 border border-gold-dark flex items-center justify-center mb-6">
                  <Icon name="User" size={28} className="text-gold opacity-70" />
                </div>
                <div className="font-cormorant text-xl font-semibold mb-1">{e.name}</div>
                <div className="font-ibm text-[11px] text-gold tracking-widest uppercase mb-3">{e.title}</div>
                <div className="h-px bg-border mb-4" />
                <div className="space-y-2">
                  <div className="font-ibm text-xs text-muted-foreground">{e.spec}</div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={12} className="text-gold" />
                    <span className="font-ibm text-xs text-foreground/70">{e.exp}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="BadgeCheck" size={12} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-ibm text-xs text-foreground/70">{e.sro}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="gold-line" />
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">Кейсы</h2>
            <p className="font-ibm text-muted-foreground max-w-xl">
              Реальные результаты из нашей практики
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="card-hover bg-navy-800 border border-border p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-gold-dark opacity-60" />
                <span className="font-ibm text-[10px] tracking-widest uppercase text-gold mb-4 block">{c.category}</span>
                <h3 className="font-cormorant text-xl font-semibold mb-4 leading-snug">{c.title}</h3>
                <div className="h-px bg-border mb-4" />
                <div className="flex items-start gap-2 mb-3">
                  <Icon name="CheckCircle" size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-ibm text-xs text-foreground/80">{c.result}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={12} className="text-muted-foreground" />
                  <span className="font-ibm text-[11px] text-muted-foreground">Подготовка: {c.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* BLOG */}
      <section id="blog" className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="gold-line" />
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">Блог</h2>
            <p className="font-ibm text-muted-foreground max-w-xl">
              Экспертные статьи о судебной практике
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <article key={i} className="card-hover bg-navy-700 border border-border p-8 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-ibm text-[10px] px-2 py-0.5 border border-gold-dark text-gold tracking-wider uppercase">{p.category}</span>
                  <span className="font-ibm text-[11px] text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="font-ibm text-xs text-muted-foreground leading-relaxed mb-6">{p.excerpt}</p>
                <div className="flex items-center gap-2 text-gold">
                  <span className="font-ibm text-[11px] tracking-wider uppercase">Читать</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="gold-line" style={{width: 60, margin: '0 auto 1.5rem'}} />
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="font-ibm text-muted-foreground">Отвечаем на частые вопросы клиентов</p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-navy-800 border border-border overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-cormorant text-lg font-semibold pr-4">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={16}
                    className="text-gold flex-shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 font-ibm text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULT FORM */}
      <section id="consult" className="py-24 bg-navy-700 relative overflow-hidden">
        <div className="geometric-accent top-10 right-10 w-80 h-80 hidden lg:block" />
        <div className="geometric-accent top-20 right-20 w-60 h-60 hidden lg:block" />

        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="gold-line" style={{width: 60, margin: '0 auto 1.5rem'}} />
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
              Бесплатный анализ<br /><span className="text-gold italic">вашей проблемы</span>
            </h2>
            <p className="font-ibm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Оставьте заявку — эксперт изучит вашу ситуацию и предложит оптимальное решение. Без обязательств.
            </p>
          </div>

          {!formSent ? (
            <form onSubmit={handleSubmit} className="bg-navy-800 border border-border p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="font-ibm text-[11px] tracking-widest uppercase text-muted-foreground block mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="w-full bg-navy-700 border border-border text-foreground font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-dark placeholder:text-muted-foreground/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-ibm text-[11px] tracking-widest uppercase text-muted-foreground block mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-navy-700 border border-border text-foreground font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-dark placeholder:text-muted-foreground/40 transition-colors"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label className="font-ibm text-[11px] tracking-widest uppercase text-muted-foreground block mb-2">Кратко опишите вашу ситуацию</label>
                <textarea
                  rows={4}
                  value={formData.question}
                  onChange={(e) => setFormData({...formData, question: e.target.value})}
                  placeholder="Например: нужна рецензия на строительную экспертизу оппонента по спору о качестве ремонта..."
                  className="w-full bg-navy-700 border border-border text-foreground font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-dark placeholder:text-muted-foreground/40 transition-colors resize-none"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <button type="submit" className="btn-gold w-full lg:w-auto px-10">
                  Получить бесплатный анализ
                </button>
                <p className="font-ibm text-[11px] text-muted-foreground text-center lg:text-left">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          ) : (
            <div className="bg-navy-800 border border-gold-dark p-10 text-center">
              <Icon name="CheckCircle" size={40} className="text-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-3xl font-bold mb-3">Заявка получена</h3>
              <p className="font-ibm text-muted-foreground">
                Наш эксперт свяжется с вами в течение 30 минут в рабочее время.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-navy-900 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-gold flex items-center justify-center">
                  <div className="w-4 h-4 bg-gold opacity-80" style={{clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"}} />
                </div>
                <div>
                  <div className="font-cormorant text-sm font-bold text-gold-light tracking-wide">Прайм ЭкспертУм</div>
                  <div className="font-ibm text-[9px] text-muted-foreground tracking-widest uppercase">Судебные экспертизы</div>
                </div>
              </div>
              <p className="font-ibm text-xs text-muted-foreground leading-relaxed">
                Профессиональные судебные экспертизы и рецензии. Работаем по всей России. Члены СРО.
              </p>
            </div>

            <div>
              <div className="font-cormorant text-lg font-semibold mb-5 text-gold">Контакты</div>
              <div className="space-y-3">
                {[
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", text: "info@prime-expertum.ru" },
                  { icon: "MapPin", text: "Москва, ул. Тверская, д. 1" },
                  { icon: "Clock", text: "Пн–Пт: 9:00–18:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon name={item.icon} fallback="Circle" size={14} className="text-gold" />
                    <span className="font-ibm text-sm text-foreground/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-cormorant text-lg font-semibold mb-5 text-gold">Быстрые ссылки</div>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="font-ibm text-xs text-muted-foreground hover:text-gold transition-colors py-1">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-4">
            <span className="font-ibm text-[11px] text-muted-foreground">
              © 2025 Прайм ЭкспертУм. Все права защищены.
            </span>
            <span className="font-ibm text-[11px] text-muted-foreground">
              ИНН 7701234567 · ОГРН 1234567890123
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}