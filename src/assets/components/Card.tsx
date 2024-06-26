import { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode; bg?: string }> = ({
  children,
  bg = "bg-gray-100",
}) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};
export default Card;
