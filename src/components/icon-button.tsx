import React from "react";
interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  text: string;
}
const IconButton = ({ icon, onClick, text }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8"
    >
      {icon}
      <span className="sr-only">{text}</span>
    </button>
  );
};

export default IconButton;
