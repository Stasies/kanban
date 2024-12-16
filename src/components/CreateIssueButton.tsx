import React from "react";
const button = {
  fontSize: "14px",
  padding: "4px 0",
  backgroundColor: "transparent",
};
type PropFunction = (value: any) => void;
const CreateIssueButton: React.FC<{ onClick: PropFunction }> = ({
  onClick,
}) => {
  return (
    <button onClick={onClick} style={button}>
      + Create issue
    </button>
  );
};

export default CreateIssueButton;
