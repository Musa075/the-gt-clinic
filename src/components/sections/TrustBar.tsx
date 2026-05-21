import { Star, ShieldCheck, CheckSquare, Award, HeartPulse } from "lucide-react";

export default function TrustBar() {
  const trusts = [
    {
      icon: <Star size={20} className="fill-gold text-gold" />,
      title: "5-Star Rated",
      desc: "Patient Satisfaction"
    },
    {
      icon: <Award size={20} className="text-gold" />,
      title: "20+ Years Experience",
      desc: "Clinical Expertise"
    },
    {
      icon: <ShieldCheck size={20} className="text-gold" />,
      title: "Triple Board Certified",
      desc: "Columbia-Trained Physician"
    },
    {
      icon: <HeartPulse size={20} className="text-gold" />,
      title: "Personalized Care Plans",
      desc: "No One-Size-Fits-All"
    },
    {
      icon: <CheckSquare size={20} className="text-gold" />,
      title: "Physician Performed",
      desc: "100% Doctor Administered"
    }
  ];

  return (
    <section className="bg-primary-light border-y border-beige py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 lg:divide-x divide-beige md:divide-x-0">
          {trusts.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-3 transition-all duration-300 hover:scale-105 ${
                index >= 2 ? "pt-6 md:pt-3" : ""
              } ${index >= 3 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="w-10 h-10 rounded-full bg-beige/30 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-primary-dark">
                {item.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-slate mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
