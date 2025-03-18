import React from "react";
import Display from "./Display";
import Button from "./Button";
import { useState } from "react";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);

  const onClickHandler = (btnValue) => {

    if (btnValue === "=") {
        setDisplayValue (calculate(displayValue));
        return
    }

    if (displayValue === 0) {
        setDisplayValue("");
    }

    setDisplayValue((prevValue) => prevValue + btnValue);
  };

  const calculate = (str) => {
    return eval(str);
  }

  return (
    <div>
      <Display text={displayValue} />

      <Button value="1" onBtnClick={onClickHandler}/>
      <Button value="2" onBtnClick={onClickHandler}/>
      <Button value="3" onBtnClick={onClickHandler}/>
      <Button value="4" onBtnClick={onClickHandler}/>
      <Button value="5" onBtnClick={onClickHandler}/>
      <Button value="6" onBtnClick={onClickHandler}/>
      <Button value="7" onBtnClick={onClickHandler}/>
      <Button value="8" onBtnClick={onClickHandler}/>
      <Button value="9" onBtnClick={onClickHandler}/>
      <Button value="10" onBtnClick={onClickHandler}/>
      <Button value="+" onBtnClick={onClickHandler}/>
      <Button value="-" onBtnClick={onClickHandler}/>
      <Button value="*" onBtnClick={onClickHandler}/>
      <Button value="=" onBtnClick={onClickHandler}/>
    </div>
  );
}
