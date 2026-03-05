import { useState } from "react";
import { Section } from "@/data/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HomeSection, QuizzesSection, OlympiadsSection } from "@/components/sections/HomeSections";
import { ResultsSection, RatingSection, ProfileSection } from "@/components/sections/UserSections";

export default function Index() {
  const [section, setSection] = useState<Section>("home");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header section={section} setSection={setSection} />

      <main className="flex-1">
        {section === "home" && <HomeSection setSection={setSection} />}
        {section === "quizzes" && <QuizzesSection />}
        {section === "olympiads" && <OlympiadsSection setSection={setSection} />}
        {section === "results" && <ResultsSection />}
        {section === "rating" && <RatingSection />}
        {section === "profile" && <ProfileSection setSection={setSection} />}
      </main>

      <Footer />
    </div>
  );
}
