export default function Footer() {
  return (
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
  );
}
