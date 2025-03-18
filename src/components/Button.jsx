import React from "react";

export default function Button({ value, onBtnClick }) {
  return (
    <>
      <button onClick={() => onBtnClick(value)}>{value}</button>
    </>
  );
}
