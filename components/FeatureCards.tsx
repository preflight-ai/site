import { Brain, ShieldCheck, Code2, Users, Wand2 } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      title: "Senior Architect-Level AI",
      desc: "Catches 16+ bug categories that pass code review — race conditions, memory leaks, UX issues.",
      icon: <Brain size={"1.5em"} className="text-purple-500" />,
    },
    {
      title: "AI Auto-Fix Suggestions",
      desc: "Get actionable code patches instantly. AI suggests fixes and you apply with one command.",
      icon: <Wand2 size={"1.5em"} className="text-yellow-500" />,
    },
    {
      title: "No Code Reviewer Needed",
      desc: "Get instant AI feedback on every commit — your personal senior architect that never sleeps.",
      icon: <Users size={"1.5em"} className="text-orange-500" />,
    },
    {
      title: "Pre-commit Protection",
      desc: "Blocks commits with critical issues automatically — no bad code reaches your repo.",
      icon: <ShieldCheck size={"1.5em"} className="text-green-500" />,
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
