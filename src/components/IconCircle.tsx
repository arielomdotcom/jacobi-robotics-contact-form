import React from "react";
import "./IconCircle.scss";

interface IconCircleProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
}

const IconCircle: React.FC<IconCircleProps> = ({ Icon }) => {
  return (
    <div className="icon-circle" aria-hidden="true">
      <Icon className="icon-circle-icon" />
    </div>
  );
};

export default IconCircle;
