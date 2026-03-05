import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, RESULTS, RATING, CERTIFICATES } from "@/data/constants";

// ─── RESULTS ───

export function ResultsSection() {
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

// ─── RATING ───

export function RatingSection() {
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

// ─── PROFILE ───

export function ProfileSection({ setSection }: { setSection: (s: Section) => void }) {
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
