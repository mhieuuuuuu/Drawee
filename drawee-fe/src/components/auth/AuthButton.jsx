const AuthButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
            w-full
            rounded-full
            bg-[#FFEBED]
            py-2
            font-semibold
            text-[#27153D]
            hover:bg-[#F6B6B7]
            hover:text-[#27153D]
            transition
            "
    >
      {children}
    </button>
  );
};

export default AuthButton;
