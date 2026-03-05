export type Section = "home" | "quizzes" | "olympiads" | "results" | "rating" | "profile";

export const NAV_ITEMS: { id: Section; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "quizzes", label: "Викторины", icon: "Zap" },
  { id: "olympiads", label: "Олимпиады", icon: "Trophy" },
  { id: "results", label: "Результаты", icon: "BarChart2" },
  { id: "rating", label: "Рейтинг", icon: "Star" },
  { id: "profile", label: "Профиль", icon: "User" },
];

export const QUIZZES = [
  { id: 1, title: "Основы микроэкономики", desc: "Спрос, предложение, равновесие рынка", questions: 20, duration: "15 мин", difficulty: "Начальный", participants: 1240 },
  { id: 2, title: "Макроэкономические показатели", desc: "ВВП, инфляция, безработица", questions: 25, duration: "20 мин", difficulty: "Средний", participants: 876 },
  { id: 3, title: "Международная торговля", desc: "Теории торговли и протекционизм", questions: 15, duration: "12 мин", difficulty: "Начальный", participants: 654 },
  { id: 4, title: "Денежно-кредитная политика", desc: "Центральный банк, монетарные инструменты", questions: 30, duration: "25 мин", difficulty: "Продвинутый", participants: 432 },
  { id: 5, title: "Рынок труда", desc: "Занятость, заработная плата, профсоюзы", questions: 20, duration: "18 мин", difficulty: "Средний", participants: 765 },
  { id: 6, title: "Теория игр", desc: "Стратегическое взаимодействие агентов", questions: 15, duration: "20 мин", difficulty: "Продвинутый", participants: 321 },
];

export const OLYMPIADS = [
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

export const RESULTS = [
  { id: 1, event: "Основы микроэкономики", type: "Викторина", date: "28 фев 2026", score: 18, total: 20, percent: 90, rank: 12 },
  { id: 2, event: "Макроэкономические показатели", type: "Викторина", date: "22 фев 2026", score: 21, total: 25, percent: 84, rank: 34 },
  { id: 3, event: "Всероссийская олимпиада", type: "Олимпиада", date: "15 янв 2026", score: 87, total: 100, percent: 87, rank: 8 },
  { id: 4, event: "Рынок труда", type: "Викторина", date: "10 янв 2026", score: 17, total: 20, percent: 85, rank: 21 },
];

export const RATING = [
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

export const CERTIFICATES = [
  { id: 1, event: "Всероссийская олимпиада по экономике", date: "15 янв 2026", rank: "8 место" },
  { id: 2, event: "Основы микроэкономики", date: "28 фев 2026", rank: "12 место" },
];

export const difficultyColor: Record<string, string> = {
  "Начальный": "text-emerald-700 bg-emerald-50",
  "Средний": "text-amber-700 bg-amber-50",
  "Продвинутый": "text-red-700 bg-red-50",
};
