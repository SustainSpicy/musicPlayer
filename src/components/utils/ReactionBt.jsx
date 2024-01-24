import { useState } from "react";

const ReactionBtn = ({ element1, element2 }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {isActive ? element1 : element2}
    </div>
  );
};

export default ReactionBtn;
