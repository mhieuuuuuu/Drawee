const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-3xl border border-white/40 bg-white/20 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3E828E]/20">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27153D] text-3xl">
        {icon}
      </div>

      <h3 className="mb-4 text-2xl font-bold text-[#27153D]">{title}</h3>

      <p className="leading-7 text-[#27153D]/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
