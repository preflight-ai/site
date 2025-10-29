import { Binary, BotMessageSquare, Code, GitBranch } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      desc: "Leverages Groq intelligence to find logic errors and unsafe patterns before commit.",
      icon: <BotMessageSquare size={"1.5em"} />,
    },
    {
      title: "Pre-commit Integration",
      desc: "Seamlessly integrates with Git hooks to block critical issues in real time.",
      icon: <GitBranch size={"1.5em"} />,
    },
    {
      title: "Multi-language Support",
      desc: "Understands JavaScript, TypeScript, Python, and more — no extra setup needed.",
      icon: <Binary size={"1.5em"} />,
    },
  ];

  return (
    <section className="py-24  text-white text-center">
      <h2 className="text-3xl font-bold mb-10 ">
        Why <span className="text-red-500">Developers</span> love Preflight
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/40 hover:bg-zinc-900 transition-colors"
          >
            <div className="text-4xl mb-3 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-zinc-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
