const AuthCard = ({ title, children }) => {
  return (
    <div className="w-[320px] rounded-2xl border border-white/20 bg-white/10 px-6 py-5 shadow-2xl backdrop-blur-xl">
      <h2 className="mb-5 text-center text-3xl font-bold text-[#FFEBED]">
        {title}
      </h2>

      {children}
    </div>
  );
};

export default AuthCard;
