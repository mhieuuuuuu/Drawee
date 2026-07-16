import { User, Lock, Mail } from "lucide-react";

const AuthInput = ({ type, placeholder, icon, onChange, value }) => {
  const Icon = icon === "user" ? User : icon === "mail" ? Mail : Lock;

  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="
                w-full
                rounded-full
                border
                border-white/20
                bg-white/5
                px-4
                py-2
                pr-12
                text-white
                placeholder:text-white/60
                outline-none
                focus:border-[#A6C9B6]
                transition
                "
      />

      <Icon
        size={18}
        className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-white/80
                "
      />
    </div>
  );
};

export default AuthInput;
