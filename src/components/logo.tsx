import React from "react";
interface ILogoIcon {
  icon: React.ReactNode;
  text: string;
}
const Logo = ({ icon, text }: ILogoIcon) => {
  return (
    <a className="w-[400px] flex items-center gap-2 font-semibold" href="#">
      {icon}
      <span className="">{text}</span>
    </a>
  );
};

export default Logo;
