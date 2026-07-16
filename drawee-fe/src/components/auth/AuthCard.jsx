const AuthCard = ({ title, children }) => {
  return (
    <div
      className="
            w-[320px]
            rounded-2xl
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            shadow-2xl
            px-6
            py-5
            "
    >
      <h2
        className="
                text-center
                text-3xl
                font-bold
                text-[#FFEBED]
                mb-5
                "
      >
        {title}
      </h2>

      {children}
    </div>
  );
};

export default AuthCard;
