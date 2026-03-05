import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, QUIZZES, OLYMPIADS, difficultyColor } from "@/data/constants";

// ─── HOME ───

export function HomeSection({ setSection }: { setSection: (s: Section) => void }) {
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

// ─── QUIZZES ───

export function QuizzesSection() {
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

// ─── OLYMPIADS ───

export function OlympiadsSection({ setSection }: { setSection: (s: Section) => void }) {
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
