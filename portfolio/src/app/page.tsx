'use client';

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Locale = "en" | "th";
type Theme = "dark" | "light";

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  title: Record<Locale, string>;
  role: Record<Locale, string>;
  description: Record<Locale, string>;
  impact: Record<Locale, string>;
  stack: string[];
};

type Experience = {
  company: string;
  period: string;
  role: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "C# (Basic)", "SQL", "Python"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Bootstrap", "Tailwind CSS", "Angular", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "OpenText Builder"],
  },
  {
    title: "Databases & Cloud",
    items: ["MS SQL Server", "MySQL", "AWS S3"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "GitLab", "Jira", "Confluence", "Jenkins", "Docker", "Postman"],
  },
  {
    title: "AI Tools",
    items: ["ChatGPT", "GitHub Copilot", "Codex", "LLM", "Agentic AI"],
  }
];

const experiences: Experience[] = [
  {
    company: "FWD Life Insurance Public Co., Ltd.",
    period: "2023 Jan - Mar",
    role: {
      en: "Specialized Developer",
      th: "Specialized Developer",
    },
    bullets: {
      en: [
        "Built insurance letter generation workflows for Claim, NB, POS, and COL based on BRD requirements.",
        "Integrated data from microservices and XML (CORS) to generate letters and store outputs on AWS S3.",
        "Created automated test cases with Pytest and supported SIT / UAT deployments with Jenkins.",
        "Handled production incidents and change requests in collaboration with business users.",
      ],
      th: [
        "พัฒนา workflow สำหรับสร้างเอกสารประกัน เช่น Claim, NB, POS และ COL ตาม BRD.",
        "เชื่อมข้อมูลจาก microservices และ XML (CORS) เพื่อสร้างเอกสารและเก็บผลลัพธ์บน AWS S3.",
        "เขียน automated test case ด้วย Pytest และช่วยดูแลการ deploy ใน SIT / UAT ผ่าน Jenkins.",
        "รับมือ production incident และ change request ร่วมกับ business user.",
      ],
    },
  },
  {
    company: "SCBLIFE Assurance Public Company Limited",
    period: "2020 Mar - 2022 Dec",
    role: {
      en: "Specialized Developer",
      th: "Specialized Developer",
    },
    bullets: {
      en: [
        "Developed insurance document templates based on business requirements.",
        "Used OpenText Builder with data integration from microservices and XML (CORS).",
        "Managed deployments to SIT and UAT environments and supported migration from on-premise to cloud.",
      ],
      th: [
        "พัฒนา document template สำหรับงานประกันตามความต้องการของธุรกิจ.",
        "ใช้ OpenText Builder ร่วมกับข้อมูลจาก microservices และ XML (CORS).",
        "ดูแลการ deploy ไปยัง SIT / UAT และช่วย migration จาก on-premise ไป cloud.",
      ],
    },
  },
  {
    company: "E Professional Co., Ltd.",
    period: "2020 Jan - 2020 Mar",
    role: {
      en: "Fullstack Developer",
      th: "Fullstack Developer",
    },
    bullets: {
      en: [
        "Developed CMS features using Spring Boot and Angular.",
        "Implemented responsive UI that matched design requirements.",
      ],
      th: [
        "พัฒนา feature สำหรับ CMS ด้วย Spring Boot และ Angular.",
        "ทำ UI ให้ responsive และสอดคล้องกับ design requirements.",
      ],
    },
  },
  {
    company: "Siam E-Commerce Technologies Co., Ltd.",
    period: "2018 Aug - 2019 Nov",
    role: {
      en: "Frontend Developer",
      th: "Frontend Developer",
    },
    bullets: {
      en: [
        "Developed a client-side web application for the LH Fund project.",
        "Implemented responsive UI from provided designs and coordinated feedback with clients.",
        "Performed system testing before delivery to improve release quality.",
      ],
      th: [
        "พัฒนา web application ฝั่ง client สำหรับโครงการ LH Fund.",
        "ออกแบบและพัฒนา UI แบบ responsive จาก design ที่ได้รับ พร้อมประสาน feedback กับลูกค้า.",
        "ทำ system testing ก่อนส่งมอบเพื่อช่วยยกระดับคุณภาพงาน release.",
      ],
    },
  },
];

const projects: Project[] = [
  {
    title: {
      en: "Insurance Letter Engine",
      th: "ระบบสร้างเอกสารแบบประกัน",
    },
    role: {
      en: "Enterprise workflow for insurance document generation",
      th: "Workflow ระดับองค์กรสำหรับการสร้างเอกสารแบบประกัน",
    },
    description: {
      en: "Built document generation flows for Claim, NB, POS, and COL using business requirements and data from microservices.",
      th: "สร้าง flow สำหรับเอกสาร Claim, NB, POS และ COL โดยใช้ business requirement และข้อมูลจาก microservices.",
    },
    impact: {
      en: "Reduced manual document handling and made delivery more consistent across business users.",
      th: "ช่วยลดงานเอกสารที่ต้องทำด้วยมือ และทำให้การส่งมอบมีมาตรฐานสม่ำเสมอขึ้น.",
    },
    stack: ["OpenText Builder", "XML / CORS", "AWS S3", "Jenkins"],
  },
  {
    title: {
      en: "CMS Feature Delivery",
      th: "การพัฒนา feature สำหรับ CMS",
    },
    role: {
      en: "Frontend + backend delivery for CMS workflows",
      th: "พัฒนา frontend + backend สำหรับ workflow ของ CMS",
    },
    description: {
      en: "Worked on CMS application features using Spring Boot and Angular with responsive UI implementation.",
      th: "พัฒนา feature ของ CMS ด้วย Spring Boot และ Angular พร้อมทำ UI แบบ responsive.",
    },
    impact: {
      en: "Improved usability across screen sizes and aligned the interface with the intended design.",
      th: "ช่วยให้ใช้งานได้ดีขึ้นบนหลายขนาดหน้าจอ และทำให้ UI ตรงตามแบบที่วางไว้.",
    },
    stack: ["Spring Boot", "Angular", "Responsive UI", "Testing"],
  },
  {
    title: {
      en: "LH Fund Client App",
      th: "แอปฝั่งลูกค้าของ LH Fund",
    },
    role: {
      en: "Client-side web app with delivery coordination",
      th: "เว็บแอปฝั่ง client พร้อมการประสานงานการส่งมอบ",
    },
    description: {
      en: "Delivered a client-side application, implemented responsive UI from provided designs, and gathered feedback during delivery.",
      th: "ส่งมอบแอปฝั่ง client, พัฒนา responsive UI จาก design ที่ได้รับ และเก็บ feedback ระหว่างการส่งงาน.",
    },
    impact: {
      en: "Helped the team ship a cleaner client experience with a more reliable release process.",
      th: "ช่วยให้ทีมส่งมอบประสบการณ์ใช้งานที่ดีขึ้น และทำให้กระบวนการ release น่าเชื่อถือมากขึ้น.",
    },
    stack: ["Angular", "HTML", "CSS", "JavaScript"],
  },
];

const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Portfolio / Software Developer",
      title: "Tanawut Rungpetnimit",
      subtitle: "Software Developer with insurance system experience and a strong focus on reliable delivery, clean implementation, and practical problem solving.",
      note: "I build calm, usable interfaces with an enterprise mindset.",
    },
    buttons: {
      download: "Download Resume",
      projects: "View Projects",
    },
    about: {
      title: "About",
      body: "I am a software developer with experience across insurance systems, CMS delivery, frontend implementation, and production support. I enjoy turning business requirements into predictable UI and system flows, and I care about code quality, collaboration, and on-time delivery.",
    },
    skills: {
      title: "Skills",
      subtitle: "Tools in regular rotation.",
    },
    experience: {
      title: "Experience",
      subtitle: "Career timeline based on the resume you shared.",
    },
    projects: {
      title: "Projects",
      subtitle: "A mixed view of enterprise work and frontend delivery.",
      impact: "Outcome / Impact",
      tech: "Stack",
    },
    contact: {
      title: "Contact",
      subtitle: "Ready for opportunities and collaboration.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  th: {
    nav: {
      about: "เกี่ยวกับ",
      skills: "สกิล",
      experience: "ประสบการณ์",
      projects: "โปรเจกต์",
      contact: "ติดต่อ",
    },
    hero: {
      eyebrow: "พอร์ตโฟลิโอ / Software Developer",
      title: "Tanawut Rungpetnimit",
      subtitle: "Software Developer ที่มีประสบการณ์ด้าน insurance system และให้ความสำคัญกับงานที่เสถียร อ่านง่าย และส่งมอบได้จริง",
      note: "ผมชอบสร้าง interface ที่สงบ ใช้งานง่าย และคิดแบบงานองค์กร",
    },
    buttons: {
      download: "ดาวน์โหลดเรซูเม่",
      projects: "ดูโปรเจกต์",
    },
    about: {
      title: "เกี่ยวกับ",
      body: "ผมเป็น software developer ที่มีประสบการณ์ทั้งด้าน insurance system, CMS delivery, frontend implementation และ production support ผมชอบแปลง business requirement ให้กลายเป็น UI และ system flow ที่คาดเดาได้ และให้ความสำคัญกับคุณภาพโค้ด การทำงานร่วมกับทีม และการส่งมอบตรงเวลา",
    },
    skills: {
      title: "สกิล",
      subtitle: "Tools in regular rotation.",
    },
    experience: {
      title: "ประสบการณ์",
      subtitle: "ไทม์ไลน์อาชีพจาก resume ที่คุณส่งมา",
    },
    projects: {
      title: "โปรเจกต์",
      subtitle: "มุมมองผลงานที่ผสมระหว่างงานองค์กรและงานฝั่ง frontend",
      impact: "ผลลัพธ์ / Impact",
      tech: "เทคโนโลยี",
    },
    contact: {
      title: "ติดต่อ",
      subtitle: "พร้อมคุยเรื่องงานและโอกาสใหม่ ๆ",
      email: "อีเมล",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
} as const;

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M21 12.2A8.8 8.8 0 1 1 11.8 3a7.2 7.2 0 1 0 9.2 9.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.6 2.8 4 5.9 4 9s-1.4 6.2-4 9c-2.6-2.8-4-5.9-4-9s1.4-6.2 4-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function revealStyle(delay: string): CSSProperties {
  return { ["--reveal-delay" as string]: delay } as CSSProperties;
}

const fadeUpClassName = "animate-fade-up";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      const savedLocale = window.localStorage.getItem("portfolio-locale");
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (savedLocale === "en" || savedLocale === "th") {
        setLocale(savedLocale);
      }

      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      } else {
        setTheme(prefersDark ? "dark" : "light");
      }
    });

    return () => window.cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!revealTargets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "experience", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            distance: Math.abs(entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - window.innerHeight / 2),
          }))
          .sort((a, b) => a.distance - b.distance);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].id);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "-35% 0px -35% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const copy = translations[locale];
  const isDark = theme === "dark";

  const navItems = useMemo(
    () => [
      { key: "about", label: copy.nav.about, href: "#about" },
      { key: "skills", label: copy.nav.skills, href: "#skills" },
      { key: "experience", label: copy.nav.experience, href: "#experience" },
      { key: "projects", label: copy.nav.projects, href: "#projects" },
      { key: "contact", label: copy.nav.contact, href: "#contact" },
    ],
    [copy],
  );

  return (
    <main className="min-h-screen bg-app text-primary">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_42%),radial-gradient(circle_at_20%_20%,_rgba(34,211,238,0.16),_transparent_28%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 animate-fade-up" style={{ animationDelay: "40ms" }}>
          <div data-reveal style={revealStyle("0ms")} className={`${fadeUpClassName} glass-panel hover-lift flex flex-col gap-4 rounded-3xl px-4 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between`}>
            <div>
              <h1 className=" text-lg font-semibold sm:text-xl">{copy.hero.title}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <nav className="hidden items-center gap-1 rounded-full border border-subtle bg-surface-2 px-2 py-1 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    aria-current={activeSection === item.key ? "page" : undefined}
                    className={`relative rounded-full px-3 py-2 text-sm text-secondary transition duration-200 hover:bg-surface hover:text-[#5ad5ff] ${
                      activeSection === item.key
                        ? "text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:rounded-full after:bg-[#5ad5ff]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLocale((current) => (current === "en" ? "th" : "en"))}
                  className="hover-lift inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-4 py-2 text-sm font-medium text-primary hover:shadow-[0_0_0_1px_rgba(56,189,248,0.18)]"
                  aria-label="Toggle language"
                >
                  <GlobeIcon />
                  <span>{locale === "en" ? "EN" : "TH"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                  className="hover-lift inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-4 py-2 text-sm font-medium text-primary"
                  aria-label="Toggle theme"
                >
                  {isDark ? <MoonIcon /> : <SunIcon />}
                  <span>{isDark ? "Dark" : "Light"}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="grid flex-1 items-start gap-8 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-12">
          <div className="space-y-8">
            <div data-reveal style={revealStyle("80ms")} className={`${fadeUpClassName} terminal-panel overflow-hidden rounded-[2rem] border border-subtle shadow-[0_30px_120px_rgba(0,0,0,0.28)]`}>
              <div className="flex items-center gap-2 border-b border-subtle bg-surface-2 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
                <span className="ml-3 text-xs uppercase tracking-[0.32em] text-muted">Open to full-time opportunities</span>
              </div>
              <div className="grid gap-8 p-6 sm:p-8 xl:grid-cols-[1fr_1.2fr]">
                <div className="flex flex-col items-center gap-4 xl:items-start">
                  <div className="group relative h-52 w-52 overflow-hidden rounded-[2rem] border border-subtle bg-surface-2 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover-lift sm:h-64 sm:w-64">
                    <Image
                      src="/profile-hero.png"
                      alt="Tanawut Rungpetnimit portrait"
                      fill
                      priority
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="rounded-full border border-accent bg-surface-2 px-4 py-2 text-sm text-accent transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_0_0_1px_rgba(90,213,255,0.22)]">
                    Based in Bangkok, Thailand
                  </div>
                </div>

                <div className={`${fadeUpClassName} space-y-6`} style={{ animationDelay: "180ms" }}>
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-muted">{copy.hero.eyebrow}</p>
                    <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-primary sm:text-5xl lg:text-6xl">
                      {copy.hero.title}
                    </h2>
                    <p className="max-w-2xl text-lg leading-8 text-secondary">{copy.hero.subtitle}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/resume-tanawut-2026.pdf"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition-colors duration-300 hover:bg-[#5ad5ff] hover:text-[#08111f]"
                      download
                    >
                      {copy.buttons.download}
                      <ArrowIcon />
                    </a>
                    <a
                      href="#projects"
                      className="hover-lift inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-5 py-3 text-sm font-semibold text-primary hover:text-accent"
                    >
                      {copy.buttons.projects}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section id="about" data-reveal style={revealStyle("80ms")} className={`${fadeUpClassName} section-card`}>
              <SectionHeading title={copy.about.title} subtitle={copy.about.body} />
            </section>

            <section id="skills" data-reveal style={revealStyle("120ms")} className={`${fadeUpClassName} section-card`}>
              <SectionHeading title={copy.skills.title} subtitle={copy.skills.subtitle} />
              <div className="mt-6 grid gap-4">
                {skillGroups.map((group, index) => (
                  <div
                    key={group.title}
                    data-reveal
                    style={revealStyle(`${160 + index * 90}ms`)}
                    className={`${fadeUpClassName} hover-lift rounded-2xl border border-subtle bg-surface p-5`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-base font-semibold text-primary">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="hover-lift rounded-full border border-subtle bg-surface-2 px-3 py-1.5 text-sm text-secondary hover:bg-surface hover:text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section id="experience" data-reveal style={revealStyle("140ms")} className={`${fadeUpClassName} section-card`}>
              <SectionHeading title={copy.experience.title} subtitle={copy.experience.subtitle} />
              <div className="mt-6 space-y-6">
                {experiences.map((item, index) => (
                  <article key={`${item.company}-${item.period}`} className="relative pl-6">
                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_5px_rgba(56,189,248,0.16)]" />
                    {index !== experiences.length - 1 ? (
                      <span className="absolute left-[5px] top-5 h-full w-px bg-border-line" />
                    ) : null}
                    <div
                      data-reveal
                      style={revealStyle(`${180 + index * 120}ms`)}
                      className={`${fadeUpClassName} hover-lift rounded-2xl border border-subtle bg-surface p-5`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-primary">{item.company}</h3>
                          <p className="mt-1 text-sm text-accent">{item.role[locale]}</p>
                        </div>
                        <span className="rounded-full border border-subtle bg-surface-2 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
                          {item.period}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-secondary">
                        {item.bullets[locale].map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_rgba(90,213,255,0.12)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="projects" data-reveal style={revealStyle("160ms")} className={`${fadeUpClassName} section-card`}>
              <SectionHeading title={copy.projects.title} subtitle={copy.projects.subtitle} />
              <div className="mt-6 space-y-4">
                {projects.map((project, index) => (
                  <article
                    key={project.title.en}
                    data-reveal
                    style={revealStyle(`${200 + index * 120}ms`)}
                    className={`${fadeUpClassName} hover-lift rounded-2xl border border-subtle bg-surface p-5`}
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-primary">{project.title[locale]}</h3>
                      <p className="text-sm text-accent">{project.role[locale]}</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-secondary">{project.description[locale]}</p>
                    <div className="mt-4 rounded-2xl border border-subtle bg-surface-2 p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-muted">{copy.projects.impact}</p>
                      <p className="mt-2 text-sm leading-6 text-primary">{project.impact[locale]}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="hover-lift rounded-full border border-subtle bg-surface-2 px-3 py-1 text-xs text-secondary hover:bg-surface hover:text-primary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section id="contact" data-reveal style={revealStyle("180ms")} className={`${fadeUpClassName} section-card`}>
              <SectionHeading title={copy.contact.title} subtitle={copy.contact.subtitle} />
              <div className="mt-6 space-y-3">
                <ContactLink delay="220ms" label={copy.contact.email} value="tanawut913@gmail.com" href="mailto:tanawut913@gmail.com" />
                <ContactLink delay="300ms" label={copy.contact.github} value="github.com/Tanawut023" href="https://github.com/Tanawut023" />
                <ContactLink delay="380ms" label={copy.contact.linkedin} value="in/tanawut" href="https://www.linkedin.com/in/tanawut-rungpetnimit-249906117/" />
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div data-reveal style={revealStyle("0ms")} className={`${fadeUpClassName} space-y-3`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_0_0_1px_rgba(90,213,255,0.18)]">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" />
        {title}
      </div>
      <p className="max-w-2xl text-sm leading-6 text-secondary">{subtitle}</p>
    </div>
  );
}

function ContactLink({
  label,
  value,
  href,
  delay,
}: {
  label: string;
  value: string;
  href: string;
  delay: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      data-reveal
      style={revealStyle(delay)}
      className={`${fadeUpClassName} hover-lift flex items-center justify-between gap-3 rounded-2xl border border-subtle bg-surface px-4 py-4 hover:bg-surface-2 hover-glow`}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-muted">{label}</p>
        <p className="mt-1 text-sm font-medium text-primary">{value}</p>
      </div>
      <ArrowIcon />
    </a>
  );
}
