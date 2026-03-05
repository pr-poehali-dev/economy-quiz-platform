import { useState } from "react";
import Icon from "@/components/ui/icon";

type Section = "home" | "quizzes" | "olympiads" | "results" | "rating" | "profile";

const NAV_ITEMS: { id: Section; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "quizzes", label: "Викторины", icon: "Zap" },
  { id: "olympiads", label: "Олимпиады", icon: "Trophy" },
  { id: "results", label: "Результаты", icon: "BarChart2" },
  { id: "rating", label: "Рейтинг", icon: "Star" },
  { id: "profile", label: "Профиль", icon: "User" },
];

const QUIZZES = [
  { id: 1, title: "Основы микроэкономики", desc: "Спрос, предложение, равновесие рынка", questions: 20, duration: "15 мин", difficulty: "Начальный", participants: 1240 },
  { id: 2, title: "Макроэкономические показатели", desc: "ВВП, инфляция, безработица", questions: 25, duration: "20 мин", difficulty: "Средний", participants: 876 },
  { id: 3, title: "Международная торговля", desc: "Теории торговли и протекционизм", questions: 15, duration: "12 мин", difficulty: "Начальный", participants: 654 },
  { id: 4, title: "Денежно-кредитная политика", desc: "Центральный банк, монетарные инструменты", questions: 30, duration: "25 мин", difficulty: "Продвинутый", participants: 432 },
  { id: 5, title: "Рынок труда", desc: "Занятость, заработная плата, профсоюзы", questions: 20, duration: "18 мин", difficulty: "Средний", participants: 765 },
  { id: 6, title: "Теория игр", desc: "Стратегическое взаимодействие агентов", questions: 15, duration: "20 мин", difficulty: "Продвинутый", participants: 321 },
];

const OLYMPIADS = [
  {
    id: 1,
    title: "Всероссийская олимпиада по экономике",
    desc: "Ежегодное соревнование для студентов и школьников со всей страны",
    date: "15 марта 2026",
    deadline: "10 марта 2026",
    prize: "Сертификат + диплом",
    level: "Национальный",
    participants: 4200,
    status: "open",
  },
  {
    id: 2,
    title: "Олимпиада по поведенческой экономике",
    desc: "Исследование иррационального поведения потребителей",
    date: "28 марта 2026",
    deadline: "22 марта 2026",
    prize: "Сертификат + грант",
    level: "Региональный",
    participants: 1850,
    status: "open",
  },
  {
    id: 3,
    title: "Чемпионат по финансовой грамотности",
    desc: "Личные финансы, инвестиции и управление рисками",
    date: "5 апреля 2026",
    deadline: "1 апреля 2026",
    prize: "Сертификат",
    level: "Открытый",
    participants: 2100,
    status: "soon",
  },
];

const RESULTS = [
  { id: 1, event: "Основы микроэкономики", type: "Викторина", date: "28 фев 2026", score: 18, total: 20, percent: 90, rank: 12 },
  { id: 2, event: "Макроэкономические показатели", type: "Викторина", date: "22 фев 2026", score: 21, total: 25, percent: 84, rank: 34 },
  { id: 3, event: "Всероссийская олимпиада", type: "Олимпиада", date: "15 янв 2026", score: 87, total: 100, percent: 87, rank: 8 },
  { id: 4, event: "Рынок труда", type: "Викторина", date: "10 янв 2026", score: 17, total: 20, percent: 85, rank: 21 },
];

const RATING = [
  { rank: 1, name: "Алексей Воронцов", city: "Москва", points: 2840, badge: "🏆", isMe: false },
  { rank: 2, name: "Мария Соколова", city: "Санкт-Петербург", points: 2710, badge: "🥈", isMe: false },
  { rank: 3, name: "Дмитрий Кузнецов", city: "Казань", points: 2580, badge: "🥉", isMe: false },
  { rank: 4, name: "Анна Петрова", city: "Екатеринбург", points: 2340, badge: "", isMe: false },
  { rank: 5, name: "Иван Смирнов", city: "Новосибирск", points: 2210, badge: "", isMe: false },
  { rank: 6, name: "Елена Чернова", city: "Ростов-на-Дону", points: 2100, badge: "", isMe: false },
  { rank: 7, name: "Сергей Белов", city: "Краснодар", points: 1980, badge: "", isMe: false },
  { rank: 8, name: "Ольга Никитина", city: "Воронеж", points: 1870, badge: "", isMe: false },
  { rank: 24, name: "Вы", city: "Москва", points: 1240, badge: "👤", isMe: true },
];

const CERTIFICATES = [
  { id: 1, event: "Всероссийская олимпиада по экономике", date: "15 янв 2026", rank: "8 место" },
  { id: 2, event: "Основы микроэкономики", date: "28 фев 2026", rank: "12 место" },
];

const difficultyColor: Record<string, string> = {
  "Начальный": "text-emerald-700 bg-emerald-50",
  "Средний": "text-amber-700 bg-amber-50",
  "Продвинутый": "text-red-700 bg-red-50",
};

export default function Index() {
  const [section, setSection] = useState<Section>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => setSection("home")}
            className="flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-sm font-bold" style={{ color: "hsl(42 85% 65%)" }}>Э</span>
            </div>
            <span className="font-display text-lg font-semibold text-primary tracking-tight">
              ЭкономОлимп
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSection(item.id)}
                className={`nav-link ${section === item.id ? "active text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Войти
            </button>
            <button
              onClick={() => setSection("profile")}
              className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Регистрация
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={20} className="text-foreground" />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white animate-fade-in">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setSection(item.id); setMobileOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    section === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {section === "home" && <HomeSection setSection={setSection} />}
        {section === "quizzes" && <QuizzesSection />}
        {section === "olympiads" && <OlympiadsSection setSection={setSection} />}
        {section === "results" && <ResultsSection />}
        {section === "rating" && <RatingSection />}
        {section === "profile" && <ProfileSection setSection={setSection} />}
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="font-display text-xs font-bold" style={{ color: "hsl(42 85% 65%)" }}>Э</span>
            </div>
            <span className="text-sm text-muted-foreground">ЭкономОлимп © 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">О платформе</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeSection({ setSection }: { setSection: (s: Section) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium mb-8 animate-fade-in">
          <Icon name="Sparkles" size={12} />
          Более 8 000 участников по всей России
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary leading-tight mb-6 animate-slide-up">
          Олимпиады<br />
          <span style={{ color: "hsl(var(--accent))" }}>по экономике</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-slide-up stagger-2">
          Проверяй знания в викторинах, участвуй в олимпиадах и получай именные сертификаты
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up stagger-3">
          <button
            onClick={() => setSection("olympiads")}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Участвовать в олимпиаде
          </button>
          <button
            onClick={() => setSection("quizzes")}
            className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
          >
            Пройти викторину
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-slide-up stagger-4">
        {[
          { value: "8 400+", label: "Участников" },
          { value: "32", label: "Викторины" },
          { value: "12", label: "Олимпиады" },
          { value: "5 200+", label: "Сертификатов выдано" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 border border-border text-center card-hover">
            <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="font-display text-3xl font-semibold text-primary mb-8 text-center">
          Как это работает
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "ClipboardList", title: "Выбери испытание", desc: "Найди подходящую викторину или олимпиаду в каталоге" },
            { icon: "PenLine", title: "Пройди тест", desc: "Ответь на вопросы в удобном формате с таймером" },
            { icon: "Award", title: "Получи сертификат", desc: "После олимпиады скачай именной сертификат с результатами" },
          ].map((f, i) => (
            <div key={f.title} className={`bg-white rounded-xl p-6 border border-border card-hover animate-slide-up stagger-${i + 2}`}>
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                <Icon name={f.icon} size={20} className="text-amber-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white rounded-2xl border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-medium mb-4">
              <Icon name="Award" size={14} />
              АВТОМАТИЧЕСКИЕ СЕРТИФИКАТЫ
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Подтверди свои знания официально
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              После каждой олимпиады система автоматически создаёт именной сертификат с твоими результатами, рангом и датой участия. Скачай PDF и добавь в резюме.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              {["Именной документ с результатами", "Уникальный код верификации", "Мгновенная генерация в PDF"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Icon name="Check" size={14} className="text-amber-600 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <button
              onClick={() => setSection("olympiads")}
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Участвовать в олимпиаде
            </button>
          </div>
          <div className="flex-shrink-0 w-full md:w-80">
            <div className="certificate-glow rounded-xl overflow-hidden border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
              <div className="text-center mb-4">
                <div className="font-display text-xs text-amber-600 tracking-widest uppercase mb-2">Сертификат участника</div>
                <div className="font-display text-xl font-bold text-primary">Всероссийская олимпиада</div>
                <div className="font-display text-lg text-primary">по экономике 2026</div>
              </div>
              <div className="border-t border-b border-amber-100 py-4 my-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">Выдан</div>
                <div className="font-display text-lg font-semibold text-primary">Иван Петров</div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <div>
                  <div className="font-medium text-foreground">8 место</div>
                  <div>из 4200 участников</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-foreground">87 баллов</div>
                  <div>15 января 2026</div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">№ OLY-2026-00847</div>
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Icon name="QrCode" size={20} className="text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuizzesSection() {
  const [filter, setFilter] = useState("Все");
  const filters = ["Все", "Начальный", "Средний", "Продвинутый"];
  const filtered = filter === "Все" ? QUIZZES : QUIZZES.filter((q) => q.difficulty === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-primary mb-2">Викторины</h1>
        <p className="text-muted-foreground">Быстрые тесты для проверки знаний по экономике</p>
      </div>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((quiz, i) => (
          <div key={quiz.id} className={`bg-white rounded-xl border border-border p-6 card-hover animate-slide-up stagger-${Math.min(i + 1, 5)}`}>
            <div className="flex items-start justify-between mb-4">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColor[quiz.difficulty]}`}>
                {quiz.difficulty}
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Icon name="Users" size={12} />
                {quiz.participants.toLocaleString()}
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-2">{quiz.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{quiz.desc}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
              <span className="flex items-center gap-1">
                <Icon name="HelpCircle" size={12} />
                {quiz.questions} вопросов
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={12} />
                {quiz.duration}
              </span>
            </div>
            <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Начать викторину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function OlympiadsSection({ setSection }: { setSection: (s: Section) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-primary mb-2">Олимпиады</h1>
        <p className="text-muted-foreground">Соревнования с официальными сертификатами участника</p>
      </div>

      <div className="flex flex-col gap-5">
        {OLYMPIADS.map((ol, i) => (
          <div key={ol.id} className={`bg-white rounded-xl border border-border p-6 md:p-8 card-hover animate-slide-up stagger-${Math.min(i + 1, 3)}`}>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    ol.status === "open"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}>
                    {ol.status === "open" ? "Регистрация открыта" : "Скоро"}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {ol.level}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-semibold text-primary mb-2">{ol.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{ol.desc}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Дата проведения</div>
                    <div className="text-sm font-medium text-foreground">{ol.date}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Дедлайн записи</div>
                    <div className="text-sm font-medium text-foreground">{ol.deadline}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Участников</div>
                    <div className="text-sm font-medium text-foreground">{ol.participants.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Награда</div>
                    <div className="text-sm font-medium text-foreground flex items-center gap-1">
                      <Icon name="Award" size={12} className="text-amber-500" />
                      {ol.prize}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-2 md:w-40">
                <button
                  disabled={ol.status !== "open"}
                  className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {ol.status === "open" ? "Записаться" : "Скоро"}
                </button>
                <button className="w-full py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-4 animate-fade-in">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon name="Award" size={16} className="text-amber-600" />
        </div>
        <div>
          <div className="text-sm font-medium text-amber-900 mb-1">Сертификаты выдаются автоматически</div>
          <div className="text-xs text-amber-700 leading-relaxed">
            После завершения олимпиады система автоматически сформирует именной сертификат для каждого участника. Документ будет доступен в разделе «Профиль».
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultsSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-primary mb-2">Результаты</h1>
        <p className="text-muted-foreground">История участия и статистика</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: "ClipboardCheck", label: "Всего пройдено", value: "4" },
          { icon: "TrendingUp", label: "Средний балл", value: "87%" },
          { icon: "Trophy", label: "Лучшее место", value: "8" },
          { icon: "Award", label: "Сертификатов", value: "2" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-border p-5 card-hover">
            <Icon name={s.icon} size={20} className="text-amber-500 mb-3" />
            <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-display text-xl font-semibold text-primary">История участия</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Мероприятие</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Тип</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Дата</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Результат</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Место</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={r.id} className={`border-b border-border last:border-0 hover:bg-muted/20 transition-colors animate-slide-up stagger-${Math.min(i + 1, 4)}`}>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{r.event}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      r.type === "Олимпиада"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {r.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{r.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-muted rounded-full h-1.5 w-24">
                        <div
                          className="h-1.5 rounded-full bg-amber-400"
                          style={{ width: `${r.percent}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">{r.percent}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">#{r.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RatingSection() {
  const top3 = [RATING[1], RATING[0], RATING[2]];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-primary mb-2">Рейтинг</h1>
        <p className="text-muted-foreground">Лучшие участники платформы за все время</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
        {top3.map((p, idx) => (
          <div
            key={p.rank}
            className={`bg-white rounded-xl border border-border p-4 text-center card-hover animate-slide-up stagger-${idx + 1} ${
              idx === 1 ? "md:scale-105 border-amber-200 bg-amber-50/30" : ""
            }`}
          >
            <div className="text-2xl mb-2">{p.badge || `#${p.rank}`}</div>
            <div className="font-display text-sm font-semibold text-primary leading-tight mb-1">{p.name.split(" ")[0]}</div>
            <div className="text-xs text-muted-foreground mb-2">{p.city}</div>
            <div className="font-display text-lg font-bold" style={{ color: "hsl(var(--accent))" }}>{p.points.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">очков</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-display text-xl font-semibold text-primary">Общий рейтинг</h2>
        </div>
        <div>
          {RATING.map((p) => (
            <div
              key={p.rank}
              className={`flex items-center gap-4 px-6 py-4 border-b border-border last:border-0 transition-colors animate-fade-in ${
                p.isMe
                  ? "bg-amber-50/50 border-l-2 border-l-amber-400"
                  : "hover:bg-muted/20"
              }`}
            >
              <div className={`w-8 text-center font-display font-bold ${
                p.rank <= 3 ? "text-amber-500 text-lg" : "text-muted-foreground text-sm"
              }`}>
                {p.badge || `#${p.rank}`}
              </div>
              <div className="flex-1">
                <div className={`text-sm font-semibold ${p.isMe ? "text-amber-700" : "text-foreground"}`}>
                  {p.name}
                </div>
                <div className="text-xs text-muted-foreground">{p.city}</div>
              </div>
              <div className="text-right">
                <div className="font-display font-bold text-primary">{p.points.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">очков</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileSection({ setSection }: { setSection: (s: Section) => void }) {
  const [activeTab, setActiveTab] = useState<"overview" | "certs">("overview");

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl border border-border p-6 md:p-8 mb-6 animate-fade-in">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
            <span className="font-display text-3xl font-bold" style={{ color: "hsl(42 85% 65%)" }}>ИП</span>
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold text-primary mb-1">Иван Петров</h1>
            <p className="text-sm text-muted-foreground mb-3">ivan.petrov@example.com · Москва</p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon name="Calendar" size={12} />
                На платформе с января 2026
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon name="Star" size={12} />
                #24 в рейтинге
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon name="Award" size={12} />
                2 сертификата
              </div>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors text-foreground">
            Редактировать
          </button>
        </div>
      </div>

      <div className="flex gap-1 bg-muted rounded-lg p-1 mb-6 w-fit">
        {(["overview", "certs"] as const).map((id) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === id
                ? "bg-white text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {id === "overview" ? "Обзор" : "Сертификаты"}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-border p-6">
            <h2 className="font-display text-xl font-semibold text-primary mb-5">Статистика</h2>
            <div className="space-y-4">
              {[
                { label: "Викторин пройдено", value: "3", icon: "Zap" },
                { label: "Олимпиад пройдено", value: "1", icon: "Trophy" },
                { label: "Средний результат", value: "87%", icon: "TrendingUp" },
                { label: "Очков набрано", value: "1 240", icon: "Star" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name={s.icon} size={14} className="text-amber-500" />
                    {s.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <h2 className="font-display text-xl font-semibold text-primary mb-5">Последние результаты</h2>
            <div className="space-y-3">
              {RESULTS.slice(0, 3).map((r) => (
                <div key={r.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${r.percent >= 85 ? "bg-emerald-500" : "bg-amber-400"}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{r.event}</div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                  <div className="text-sm font-bold text-primary">{r.percent}%</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSection("results")}
              className="mt-4 w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Все результаты →
            </button>
          </div>
        </div>
      )}

      {activeTab === "certs" && (
        <div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {CERTIFICATES.map((cert, i) => (
              <div key={cert.id} className={`certificate-glow rounded-xl overflow-hidden border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 relative animate-slide-up stagger-${i + 1}`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                <div className="text-center mb-4">
                  <div className="font-display text-xs text-amber-600 tracking-widest uppercase mb-2">Сертификат участника</div>
                  <div className="font-display text-lg font-bold text-primary leading-tight">{cert.event}</div>
                </div>
                <div className="border-t border-b border-amber-100 py-3 my-3 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Выдан</div>
                  <div className="font-display text-base font-semibold text-primary">Иван Петров</div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                  <div>
                    <div className="font-medium text-foreground">{cert.rank}</div>
                    <div>{cert.date}</div>
                  </div>
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                    <Icon name="QrCode" size={16} className="text-primary/40" />
                  </div>
                </div>
                <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Icon name="Download" size={14} />
                  Скачать PDF
                </button>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-xl bg-muted/50 border border-border text-center">
            <p className="text-sm text-muted-foreground mb-3">Хочешь получить больше сертификатов?</p>
            <button
              onClick={() => setSection("olympiads")}
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Участвовать в олимпиаде
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
