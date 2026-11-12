export type Lane = "All" | "Security" | "Onchain" | "Agents" | "Games";

export type Project = {
  lane: Exclude<Lane, "All">;
  title: string;
  when: string;
  mark: string;
  summary: string;
  beats: string[];
  stack: string[];
  live?: string;
  code: string;
};

export const lanes: Lane[] = ["All", "Security", "Onchain", "Agents", "Games"];

export const projects: Project[] = [
  {
    lane: "Security",
    title: "PayPal Shield AI",
    when: "2026",
    mark: "PayPal AI Hackathon",
    summary:
      "A real-time fraud firewall in front of PayPal. It is built to stop phishing invoices, coerced transfers, and carding botnets before the money settles.",
    beats: [
      "Strips prompt-injection tricks before any PayPal call is allowed through.",
      "Catches screen-share and phone scams from window-blur plus keyword signals.",
      "Isolation Forest plus BIN velocity can void a bad authorization, then seal the decision with SHA-256.",
    ],
    stack: ["React", "TypeScript", "Node", "Prisma", "Python"],
    live: "https://paypal-shield-soc-client.onrender.com",
    code: "https://github.com/Reelmemory/PayPal-Shield-AI",
  },
  {
    lane: "Onchain",
    title: "RegisterGuard POS",
    when: "2026",
    mark: "Arc mainnet",
    summary:
      "Non-custodial retail checkout. A shop takes USDC, and an onchain treasury splits the sale four ways without handing cashiers the merchant's keys.",
    beats: [
      "Automatic split across operations, tax, restock, and owner profit.",
      "Cashiers can refund only inside a policy. Owners keep the treasury.",
      "Offline payments via EIP-3009, settled on Arc with USDC.",
    ],
    stack: ["Solidity", "Foundry", "React", "viem", "wagmi"],
    live: "https://register-guard-pos-arc.vercel.app/",
    code: "https://github.com/Reelmemory/RegisterGuard-POS",
  },
  {
    lane: "Onchain",
    title: "Pace",
    when: "2026",
    mark: "Sui · Walrus",
    summary:
      "A runway calculator for people who live between airdrops and bounties. It learns how long the dry spells usually last, then locks enough cash to survive the next one.",
    beats: [
      "Remembers real gaps between payouts, daily burn, and upcoming bills.",
      "Runway reserve is drought times burn, plus bills, plus a floor. The rest is surplus.",
      "The chain stays in the background. The screen talks about money, not wallets.",
    ],
    stack: ["Next.js", "React", "Tailwind", "Walrus"],
    live: "https://pace-chi-jet.vercel.app",
    code: "https://github.com/Reelmemory/Pace",
  },
  {
    lane: "Onchain",
    title: "Conviction",
    when: "2026",
    mark: "Spark hackathon · solo",
    summary:
      "Narrative intelligence for crypto, with a catch: your call is written on Monad and you cannot edit it later. A diary you can rewrite is just a diary.",
    beats: [
      "Groups live DexScreener flow into AI, memes, DeFi, RWA, gaming, and DePIN.",
      "Scores each narrative 0–100 from liquidity, volume, momentum, and breadth, with the reasons attached.",
      "A bullish or bearish thesis, 280 characters, lands in ConvictionRegistry. Timestamped. Final.",
    ],
    stack: ["Next.js", "Tailwind", "Solidity", "viem"],
    live: "https://conviction-phi.vercel.app",
    code: "https://github.com/Reelmemory/conviction",
  },
  {
    lane: "Agents",
    title: "BIMO",
    when: "2026",
    mark: "Ops agent",
    summary:
      "A technical operations agent that is not allowed to freestyle. It reads, reasons, picks a registered tool, validates, asks when the action matters, then verifies.",
    beats: [
      "The loop is fixed: read, reason, select, validate, approve, act, verify, recover.",
      "Looks at Vercel deploys, network health, and EVM transactions without skipping the policy gate.",
      "The model proposes. BIMO decides whether that proposal is even a legal move.",
    ],
    stack: ["TypeScript", "Vite", "Vitest"],
    code: "https://github.com/Reelmemory/Bimo",
  },
  {
    lane: "Agents",
    title: "Divora",
    when: "2026",
    mark: "Phase 0",
    summary:
      "The foundation of an AI NFT trading agent that deliberately cannot trade yet. Private keys never enter the runtime, and a fail-closed policy sits in front of every action.",
    beats: [
      "The model may only emit a structured action. A constitution has to accept it.",
      "Chain, wallet, and policy live in separate packages so nothing shortcuts the gate.",
      "Honest scope: no buying, no signing, no autonomous execution.",
    ],
    stack: ["TypeScript", "Next.js", "Prisma"],
    code: "https://github.com/Reelmemory/Divora",
  },
  {
    lane: "Onchain",
    title: "Scout",
    when: "2026",
    mark: "Research desk",
    summary:
      "A token research desk for checking a name before the timeline does it for you — holder concentration in the app, alerts out through Telegram.",
    beats: [
      "Built as a real site, not a one-file sketch: Vite, a worker backend, and a push path.",
      "Holder checks stay available in the app when the data keys are set.",
      "The interesting part is the habit: look before you ape.",
    ],
    stack: ["JavaScript", "Vite", "Cloudflare"],
    code: "https://github.com/Reelmemory/Scout",
  },
  {
    lane: "Games",
    title: "Hoodie Run",
    when: "2026",
    mark: "Play to earn",
    summary:
      "A dino-style endless runner for the $HOODIE token. Jump, duck, paste an address. A good run pays out with no wallet popup and no gas from the player.",
    beats: [
      "Canvas runner in the browser. The backend validates the score and pays the gas.",
      "Rewards batch every few seconds through a Solidity distributor.",
      "The lesson from the hobby: a rule you understand in ten seconds can still carry a real system behind it.",
    ],
    stack: ["JavaScript", "Canvas", "Node", "Solidity"],
    live: "https://hoodie-run-1.onrender.com/",
    code: "https://github.com/Reelmemory/hoodie-run",
  },
];

export type SideQuest = {
  id: "manga" | "anime" | "games";
  label: string;
  title: string;
  passive: string;
  titles: string[];
  body: string;
};

export const passives = [
  "Troubleshooting",
  "Independent learning",
  "Critical thinking",
  "Web3 fundamentals",
];

export const sideQuests: SideQuest[] = [
  {
    id: "manga",
    label: "Manga",
    title: "The grind you can see",
    passive: "Levels are public. Gosu, Solo Leveling, Eleceed.",
    titles: ["Gosu", "Solo Leveling", "Eleceed"],
    body: "Quiet mastery, a hunter who starts at the bottom, and a kid whose speed is the whole build. Those are the volumes on the shelf. The lesson that survives the fight is the same one in a good product: progress should be visible, and the party matters.",
  },
  {
    id: "anime",
    label: "Anime",
    title: "New game, same memory",
    passive: "Reincarnation. You keep what you learned.",
    titles: ["Solo Leveling", "Second-chance stories"],
    body: "The reincarnation shows are the ones that stick — Solo Leveling and the stories built like it. You die, you remember, you do not waste the run. Support work feels like that. The ticket comes back. This time you already know the fix.",
  },
  {
    id: "games",
    label: "Games",
    title: "Explore, survive, solve",
    passive: "Far Cry. Resident Evil. Tomb Raider.",
    titles: ["Far Cry", "Resident Evil", "Tomb Raider"],
    body: "Not menu-heavy roleplay. Open country you can mess with, a mansion that punishes a wasted bullet, a ruin you read with your hands. Hoodie Run is the small version of that lesson: one clear verb, then a system hiding under it.",
  },
];

export const panels = [
  {
    kicker: "Panel 01 · Title",
    title: "A volume, not a résumé.",
    body: "Call him Memory. On GitHub he is Reel. Lagos is home. Utopia is the joke he put in the location field. The work is the serious part.",
  },
  {
    kicker: "Panel 02 · Night",
    title: "Ideas do not wait for office hours.",
    body: "The line he actually wrote: “I just love bringing my ideas to life.” That is the whole motive. Ship the thing that should exist, then make the next chapter better than the last.",
  },
  {
    kicker: "Panel 03 · Boss",
    title: "Every build has an antagonist.",
    body: "Fraud that settles before a human blinks. A cashier who should not hold the treasury. A trader who rewrites history after the candle. Name the enemy, then build the counter.",
  },
  {
    kicker: "Panel 04 · Party",
    title: "The stack is a squad.",
    body: "TypeScript for the face. Solidity when the promise has to live on a chain. Python when the model has to notice a pattern a rule would miss. Nobody goes in alone, and nobody skips the policy check.",
  },
  {
    kicker: "Panel 05 · Side quest",
    title: "Manga, anime, games. On purpose.",
    body: "Gosu, Solo Leveling, and Eleceed on the shelf. Reincarnation anime, because a second life is only useful if you remember the first. Far Cry, Resident Evil, and Tomb Raider when the evening needs a map, a scarce clip, or a puzzle in the stone.",
  },
  {
    kicker: "Panel 06 · Next",
    title: "To be continued.",
    body: "IT support specialist by day. Computer science from Glorious Vision University. Google support credentials on the shelf. A quest log that already includes a fraud firewall, a point of sale, an agent, and a runner. The next arc is whatever is missing.",
  },
];

export const loadout = [
  { name: "IT support", note: "The day job. Tickets, machines, and the patience to explain the fix" },
  { name: "TypeScript & React", note: "Next.js, Vite, the face of almost every recent build" },
  { name: "Solidity", note: "Foundry, viem, wagmi — Arc, Monad, and a game distributor" },
  { name: "Applied AI", note: "Isolation Forest, FastAPI, agents that must explain the move" },
  { name: "Node services", note: "Express, Prisma, queues that pay gas so the player does not" },
  { name: "Product sense", note: "A score without a reason is a vibe. He writes the reason down." },
  { name: "Game feel", note: "Canvas, jump, duck, and a loop you understand immediately" },
];

export const achievements = [
  {
    title: "Technical Support Fundamentals",
    by: "Google",
    when: "August 2026",
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    by: "Google",
    when: "October 2026",
  },
];
