import { Brain, ShieldCheck, Code2, Users } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      desc: "Leverages Groq intelligence to find logic errors and unsafe patterns before commit.",
      icon: <Brain size={"1.5em"} className="text-purple-500" />,
    },
    {
      title: "Pre-commit Integration",
      desc: "Seamlessly integrates with Git hooks to block critical issues in real time.",
      icon: <ShieldCheck size={"1.5em"} className="text-green-500" />,
    },
    {
      title: "No Code Reviewer Needed",
      desc: "Get instant AI feedback on every commit — your personal code reviewer that never sleeps.",
      icon: <Users size={"1.5em"} className="text-orange-500" />,
    },
    {
      title: "Multi-language Support",
      desc: "Understands JavaScript, TypeScript, Python, and more — no extra setup needed.",
      icon: <Code2 size={"1.5em"} className="text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 px-6 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">
        Why <span className="text-red-500">Developers</span> love Preflight
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
