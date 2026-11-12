import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Swords,
} from "lucide-react";
import {
  achievements,
  lanes,
  loadout,
  panels,
  passives,
  projects,
  sideQuests,
  type Lane,
  type SideQuest,
} from "./content";

const links = {
  github: "https://github.com/Reelmemory",
  linkedin: "https://www.linkedin.com/in/airhihenbuwa-memory-969488410/",
  x: "https://x.com/0xreelz",
};

export function Portfolio() {
  const [lane, setLane] = useState<Lane>("All");
  const [open, setOpen] = useState<string>("PayPal Shield AI");
  const [quest, setQuest] = useState<SideQuest["id"]>("manga");
  const [panel, setPanel] = useState(0);

  const visible = useMemo(
    () => (lane === "All" ? projects : projects.filter((item) => item.lane === lane)),
    [lane],
  );
  const equipped = sideQuests.find((item) => item.id === quest) ?? sideQuests[0];
  const page = panels[panel];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <a href="#top" className="flex shrink-0 items-center gap-2">
            <span className="grid size-8 place-items-center rounded-md bg-vermillion font-display text-sm font-semibold text-paper">
              M
            </span>
            <span className="font-display text-lg leading-none tracking-tight">Memory</span>
          </a>
          <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
            {[
              ["Profile", "#profile"],
              ["Quests", "#quests"],
              ["Side quests", "#side"],
              ["Loadout", "#loadout"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 rounded-full px-3 py-2 text-sm text-ink-soft hover:bg-paper-2"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-paper sm:inline-flex"
          >
            GitHub
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.9fr] md:py-20">
          <div className="rise">
            <p className="text-xs font-semibold tracking-widest text-vermillion uppercase">
              Save 01 · Lagos, Nigeria
            </p>
            <h1 className="mt-4 font-display text-6xl leading-none font-semibold tracking-tight text-ink sm:text-8xl">
              Memory
            </h1>
            <p className="mt-3 font-display text-2xl text-ink-soft sm:text-3xl">Airhihenbuwa</p>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              IT support specialist in Lagos. Builder after the tickets close. I ship Web2 and Web3
              products — fraud defense, onchain tools, and agents that have to ask before they act.
              The rest of the time goes to gaming, manga, and the stories I come back to.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "160ms" }}>
              <a
                href="#quests"
                className="inline-flex h-12 items-center rounded-full bg-vermillion px-5 text-sm font-semibold text-paper hover:bg-vermillion-deep"
              >
                Open the quest log
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:bg-paper-2"
              >
                <Linkedin className="size-4" aria-hidden />
                LinkedIn
              </a>
              <a
                href={links.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-line px-5 text-sm font-semibold hover:bg-paper-2"
              >
                @0xreelz
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {[
                ["08", "Public builds"],
                ["02", "Hackathon arcs"],
                ["04", "Chains touched"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl text-ink tabular-nums">{value}</dt>
                  <dd className="mt-1 text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="relative overflow-hidden rounded-card border border-line bg-ink text-paper">
            <div className="absolute top-5 right-5 grid size-20 place-items-center rounded-full border-2 border-vermillion text-center font-display text-xs leading-tight tracking-wide text-vermillion uppercase seal">
              Reel
              <br />
              2026
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                Character sheet
              </p>
              <h2 className="mt-3 font-display text-4xl leading-none">Player one</h2>
              <ul className="mt-8 space-y-4 text-sm">
                <SheetRow label="Class" value="IT support specialist" />
                <SheetRow label="Build" value="Full-stack, after hours" />
                <SheetRow label="Base" value="Lagos · save point Utopia" />
                <SheetRow label="Guild" value="GuidepostLabs" />
                <SheetRow label="School" value="Glorious Vision University" />
                <li className="border-b border-paper/15 pb-3">
                  <span className="text-xs tracking-widest text-gold uppercase">Passive</span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {passives.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-paper/15 px-3 py-1 text-xs"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <p className="mt-8 text-sm text-paper/80">
                Equipped side quest: <span className="text-gold">{equipped.label}</span>. Swap it
                below. The main story does not change.
              </p>
            </div>
          </aside>
        </section>

        <section id="profile" className="border-y border-line bg-paper-2">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-widest text-vermillion uppercase">
                Chapter 01
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">The profile, in plain speech</h2>
            </div>
            <div className="space-y-5 text-lg text-ink-soft">
              <p>
                Airhihenbuwa Memory is an IT support specialist and computer science graduate in
                Lagos. The day job is people, machines, and the second time a problem shows up.
                Green Recycling Company is on the record. On GitHub the name is Reel.
              </p>
              <p>
                The public work from the last year is a sprint, not a mood board: a PayPal fraud
                firewall, a non-custodial point of sale, a cash-runway tool with onchain memory, a
                conviction journal you cannot edit, and an operations agent that refuses to act
                without a policy.
              </p>
              <p>
                The off-hours shelf is specific. Manga: Gosu, Solo Leveling, Eleceed. Anime: the
                reincarnation runs, where you keep your memory and refuse to waste the next life.
                Games: Far Cry, Resident Evil, Tomb Raider — explore, survive, solve.
              </p>
              <p className="flex items-start gap-2 text-base text-ink">
                <MapPin className="mt-0.5 size-4 shrink-0 text-vermillion" aria-hidden />
                Lagos, Nigeria · github.com/Reelmemory · linkedin.com/in/airhihenbuwa-memory
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-vermillion uppercase">
                A short volume
              </p>
              <h2 className="mt-2 font-display text-4xl">Read it like a chapter</h2>
            </div>
            <p className="hidden text-sm text-muted sm:block tabular-nums">
              {panel + 1} / {panels.length}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <article className="relative min-h-64 overflow-hidden rounded-card border border-ink bg-ink text-paper">
              <div className="absolute top-0 bottom-0 left-0 w-2 bg-vermillion" aria-hidden />
              <div key={panel} className="panel-in p-6 sm:p-10">
                <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                  {page.kicker}
                </p>
                <h3 className="mt-4 max-w-lg font-display text-4xl leading-tight sm:text-5xl">
                  {page.title}
                </h3>
                <p className="mt-5 max-w-xl text-lg text-paper/85">{page.body}</p>
              </div>
            </article>
            <div className="flex gap-3 md:flex-col">
              <button
                type="button"
                onClick={() => setPanel((n) => Math.max(0, n - 1))}
                disabled={panel === 0}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm font-semibold disabled:opacity-40 md:flex-none md:px-5"
              >
                <ChevronLeft className="size-4" aria-hidden />
                Back
              </button>
              <button
                type="button"
                onClick={() => setPanel((n) => Math.min(panels.length - 1, n + 1))}
                disabled={panel === panels.length - 1}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-paper disabled:opacity-40 md:flex-none md:px-5"
              >
                Next
                <ChevronRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>
          <div className="mt-4 flex gap-2" aria-hidden>
            {panels.map((item, index) => (
              <button
                key={item.kicker}
                type="button"
                aria-label={`Open ${item.kicker}`}
                onClick={() => setPanel(index)}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  index === panel ? "scale-y-150 bg-vermillion" : "bg-line"
                }`}
              />
            ))}
          </div>
        </section>

        <section id="quests" className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold tracking-widest text-vermillion uppercase">
                  Chapter 02 · Quest log
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">What actually shipped</h2>
                <p className="mt-3 text-ink-soft">
                  Pulled from the public repos. No invented metrics. Open one to read the arc, then
                  jump to the live build or the code.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
                {lanes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={lane === item}
                    onClick={() => setLane(item)}
                    className={`h-11 rounded-full px-4 text-sm font-semibold ${
                      lane === item
                        ? "bg-ink text-paper"
                        : "border border-line bg-paper text-ink hover:bg-paper"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {visible.map((project, index) => {
                const expanded = open === project.title;
                return (
                  <article
                    key={`${lane}-${project.title}`}
                    className="card-lift rise rounded-card border border-line bg-paper p-5 sm:p-6"
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-wide text-gold uppercase">
                          {project.lane} · {project.when} · {project.mark}
                        </p>
                        <h3 className="mt-2 font-display text-3xl">{project.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 items-center gap-1 rounded-full bg-vermillion px-4 text-sm font-semibold text-paper"
                          >
                            Live
                            <ArrowUpRight className="size-4" aria-hidden />
                          </a>
                        ) : null}
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center gap-1 rounded-full border border-line px-4 text-sm font-semibold"
                        >
                          <Github className="size-4" aria-hidden />
                          Code
                        </a>
                      </div>
                    </div>
                    <p className="mt-4 max-w-3xl text-ink-soft">{project.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-ink-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? "" : project.title)}
                      className="mt-4 inline-flex h-11 items-center text-sm font-semibold text-vermillion"
                      aria-expanded={expanded}
                    >
                      {expanded ? "Close the arc" : "Read the arc"}
                    </button>
                    {expanded ? (
                      <ul className="arc-in mt-2 max-w-3xl space-y-2 border-t border-line pt-4 text-ink-soft">
                        {project.beats.map((beat) => (
                          <li key={beat} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-vermillion" />
                            <span>{beat}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="side" className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold tracking-widest text-vermillion uppercase">
            Chapter 03 · Side quests
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
            Manga, anime, and games — equipped, not pasted on
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Pick one. It marks the equipped side quest on the sheet. The passive stays the
            skills. The point is still serious: hobbies are a design school you do not graduate from.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {sideQuests.map((item) => {
              const active = quest === item.id;
              const Icon = item.id === "manga" ? BookOpen : item.id === "anime" ? Sparkles : Gamepad2;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setQuest(item.id)}
                  aria-pressed={active}
                  className={`card-lift rounded-card border p-5 text-left transition-colors duration-300 ${
                    active ? "border-ink bg-ink text-paper" : "border-line bg-paper hover:bg-paper-2"
                  }`}
                >
                  <Icon className={`size-5 ${active ? "text-gold" : "text-vermillion"}`} aria-hidden />
                  <p className={`mt-6 text-xs font-semibold tracking-wide uppercase ${active ? "text-gold" : "text-muted"}`}>
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.titles.map((name) => (
                      <li
                        key={name}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          active ? "bg-paper/10 text-gold" : "bg-paper-2 text-ink-soft"
                        }`}
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                  <p className={`mt-3 text-sm ${active ? "text-paper/80" : "text-ink-soft"}`}>{item.body}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section id="loadout" className="border-t border-line bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                Chapter 04 · Loadout
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Tools that show up in the repos</h2>
              <ul className="mt-8 space-y-4">
                {loadout.map((item) => (
                  <li key={item.name} className="border-b border-paper/15 pb-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-paper/70">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase">
                <Swords className="size-4" aria-hidden />
                Achievements
              </p>
              <ul className="mt-6 space-y-4">
                {achievements.map((item) => (
                  <li key={item.title} className="rounded-card border border-paper/15 p-5">
                    <p className="text-xs tracking-widest text-gold uppercase">{item.by}</p>
                    <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-paper/70">{item.when}</p>
                  </li>
                ))}
                <li className="rounded-card border border-paper/15 p-5">
                  <p className="text-xs tracking-widest text-gold uppercase">Education</p>
                  <h3 className="mt-2 font-display text-2xl">Computer Science</h3>
                  <p className="mt-2 text-sm text-paper/70">Glorious Vision University</p>
                </li>
                <li className="rounded-card border border-paper/15 p-5">
                  <p className="text-xs tracking-widest text-gold uppercase">Day job</p>
                  <h3 className="mt-2 font-display text-2xl">IT support specialist</h3>
                  <p className="mt-2 text-sm text-paper/70">
                    The role beside the builds. Google’s support certificates sit on the same
                    shelf. Green Recycling Company is the experience listed on LinkedIn.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="save" className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-card border border-line bg-paper-2 p-6 sm:p-10">
            <p className="text-xs font-semibold tracking-widest text-vermillion uppercase">
              Save point
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl sm:text-5xl">
              If the next arc needs a builder, start here.
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              Serious about the systems. Light about the way in. The hobby is not a disclaimer —
              it is why the products have a pulse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-paper"
              >
                <Github className="size-4" aria-hidden />
                github.com/Reelmemory
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-paper px-5 text-sm font-semibold"
              >
                <Linkedin className="size-4" aria-hidden />
                LinkedIn
              </a>
              <a
                href={links.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold"
              >
                X · @0xreelz
              </a>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted">
            Airhihenbuwa Memory · Reel · Lagos. Built from the public GitHub and the public slice of
            LinkedIn.
          </p>
        </section>
      </main>
    </div>
  );
}

function SheetRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex gap-4 border-b border-paper/15 pb-3">
      <span className="w-24 shrink-0 text-xs tracking-widest text-gold uppercase">{label}</span>
      <span>{value}</span>
    </li>
  );
}
