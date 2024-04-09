import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AgeCalculator = () => {
  const [currentYear, setCurrentyear] = useState();
  const [birthYear, setbirthyear] = useState();
  const [age, setage] = useState();
  const onbirthyear = (data) => {
    console.log(data.target.value);
    setbirthyear(data.target.value);
  };
  const oncurrentyear = (data) => {
    console.log(data.target.value);
    setCurrentyear(data.target.value);
  };
  const onclickcheckage = () => {
    console.log(currentYear);
    console.log(birthYear);
    if (currentYear === "" || currentYear.length < 4) {
      alert("please enter current year");
      return;
    } else {
      setage(Number(currentYear) - Number(birthYear));
    }
    if (birthYear === "" || birthYear.length < 4) {
      alert("please enter current year");
      return;
    } else {
      setage(Number(currentYear) - Number(birthYear));
    }
  };
  return (
    <div className="container">
      <div className="flex1">
        <TextField
          id="birthyear-basic"
          label="BirthYear"
          type="number"
          onChange={onbirthyear}
          variant="outlined"
        />
        <TextField
          id="currentyear-basic"
          label="CurrentYear"
          type="number"
          onChange={oncurrentyear}
          variant="outlined"
        />
      </div>
      <Button size="large" onClick={onclickcheckage} variant="contained">
        Submit
      </Button>
      <p>Your age is{age}</p>
    </div>
  );
};
export default AgeCalculator;
