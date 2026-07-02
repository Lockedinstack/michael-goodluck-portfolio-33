import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Github, Twitter, MessageCircle, Mail, Sparkles, Heart, Triangle, Atom, Gem, Bot } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michael Goodluck — AI & No-Code Developer" },
      {
        name: "description",
        content:
          "Michael Goodluck architects high-performance web and mobile applications with AI and no-code tools — from concept to production-ready deployment.",
      },
      { property: "og:title", content: "Michael Goodluck — AI & No-Code Developer" },
      {
        property: "og:description",
        content:
          "Architecting digital solutions with AI & No-Code. Web, mobile, and AI-driven automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    n: "01",
    title: "Billboard Chart Analysis",
    desc: "A data-driven exploration of music industry trends.",
    tag: "Data / Web",
    href: "https://billboard-chart-analysis-roan.vercel.app/",
  },
  {
    n: "02",
    title: "Customer Segmentation Analysis",
    desc: "An AI-powered classification system that categorizes leads to drive targeted marketing.",
    tag: "AI / ML",
    href: "https://customer-segmentation-analysis-psi.vercel.app/",
  },
  {
    n: "03",
    title: "AI Ethics Case File",
    desc: "A forensic audit of algorithmic bias and governance in real-world systems.",
    tag: "Research",
    href: "https://drive.google.com/file/d/1sgUTozEmLD36JEE442Lwezvqs6FGOIHD/view?usp=sharing",
  },
  {
    n: "04",
    title: "Smart Calculator",
    desc: "A clean, responsive utility tool built for precision.",
    tag: "Utility",
    href: "https://github.com/Lockedinstack/calculator",
  },
];

const stack = [
  { name: "Lovable", Icon: Heart, color: "#FF4D8D" },
  { name: "Vercel", Icon: Triangle, color: "#000000" },
  { name: "React", Icon: Atom, color: "#61DAFB" },
  { name: "Google Gemini", Icon: Gem, color: "#8E75B2" },
  { name: "Claude", Icon: Bot, color: "#D97757" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-sans font-semibold">
            MG
          </span>
          Michael Goodluck
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Hire me <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-background/40 to-background" aria-hidden />
      <div className="container-tight relative py-24 md:py-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3 w-3 text-accent" />
          Available for new projects
        </div>
        <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl leading-[1.05]">
          Architecting Digital Solutions with{" "}
          <span className="italic text-accent">AI &amp; No-Code.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Building high-performance web and mobile applications from concept to
          production-ready deployment.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            View Projects <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="container-tight grid gap-12 py-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">I build things.</h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm a developer focused on crafting web and mobile apps that actually
            work. My workflow is simple: I use the best AI and no-code tools
            available to get high-quality projects from concept to production
            fast.
          </p>
          <p>
            I've transitioned from a freelance background to a structured,
            professional architecture approach, but I'm still the same developer
            who's ready to jump into new challenges and build.
          </p>
          <p className="text-foreground">
            If you need a partner who knows how to move fast and deliver — let's talk.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-b border-border bg-muted/40">
      <div className="container-tight py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Technical Stack
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl max-w-xl">
              A lean toolkit engineered for velocity.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {stack.map((s) => (
            <div
              key={s.name}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition hover:border-accent/60 hover:-translate-y-0.5"
            >
              <img
                src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                alt={`${s.name} logo`}
                className="h-7 w-7 shrink-0"
                loading="lazy"
              />
              <span className="truncate text-base md:text-lg font-display">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="container-tight py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Featured Projects
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">Selected work.</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
            A snapshot of recent builds — from data explorations to shipped utilities.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition hover:border-foreground/40 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-muted-foreground">{p.n}</span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                  Visit project
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/meebpzqz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-border bg-primary text-primary-foreground">
      <div className="container-tight py-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-widest opacity-60">Contact</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Let's build something.</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-md">
            Have a project in mind or want to move fast on an idea? Drop a message
            or reach out on any channel below.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href="mailto:michaelgoodluckperetimimg01@gmail.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition"
            >
              <Mail className="h-4 w-4" /> michaelgoodluckperetimimg01@gmail.com
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { href: "https://github.com/Lockedinstack", icon: Github, label: "GitHub" },
              { href: "https://x.com/lockedindev_", icon: Twitter, label: "Twitter" },
              { href: "https://wa.me/2349161318093", icon: MessageCircle, label: "WhatsApp" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:border-accent hover:text-accent transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          action="https://formspree.io/f/meebpzqz"
          method="POST"
          className="md:col-span-7 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 md:p-8 space-y-4"
        >
          <input type="hidden" name="_replyto" />
          <input
            type="hidden"
            name="_to"
            value="michaelgoodluckperetimimg01@gmail.com"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="text-xs uppercase tracking-widest text-primary-foreground/60">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-primary-foreground/15 bg-transparent p-3 text-sm outline-none focus:border-accent transition"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send message"}
            <ArrowUpRight className="h-4 w-4" />
          </button>
          {status === "error" && (
            <p className="text-xs text-red-300">
              Something went wrong. Please email directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-primary-foreground/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-primary-foreground/15 bg-transparent p-3 text-sm outline-none focus:border-accent transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Michael Goodluck. All rights reserved.</p>
      <p className="font-mono">Built with Lovable · Deployed on Vercel</p>
    </footer>
  );
}
