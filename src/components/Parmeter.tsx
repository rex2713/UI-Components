import React from "react";

interface Param {
  title: string;
  description: string;
}
interface ParameterProps {
  params: Param[];
}

const Parmeter: React.FC<ParameterProps> = ({ params }) => {
  return (
    <span>
      可用參數：
      {params.map((param, index) => (
        <React.Fragment key={index}>
          <span className="pr-1 text-secondary">{param.title}</span>
          <span>{param.description}</span>
          {index < params.length - 1 && <span>、</span>}
        </React.Fragment>
      ))}
    </span>
  );
};

export default Parmeter;
