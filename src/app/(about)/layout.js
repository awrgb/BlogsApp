import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "15+ Projects Completed",
    "Freelancer",
    "Open Source Contributor",
    "Generative AI Expert",
    'Full Stack Webiste Developer',
    "React Native Mobile Apps Developer",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
