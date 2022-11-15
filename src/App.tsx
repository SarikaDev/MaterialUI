import React, { useEffect } from "react";
import MuiAutoComplete from "./components/AutoComplete";
import MuiBox from "./components/BoxFlex";
import MuiButton from "./components/Button";
import MuiCheckBox from "./components/CheckBox";
import MuiMasonry from "./components/Masonry";
import MuiMultipleSelect from "./components/MultipleSelect";
import MuiRadioButton from "./components/RadioButton";
import MuiSelect from "./components/SingleSelect";
import MuiTextField from "./components/TextField";
import MuiTypography from "./components/Typography";

const App = () => {
  const days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  const greet = (day: string): string => {
    return ` ${day}`;
  };

  useEffect(() => {
    days.forEach((day, index) => {
      console.log(`Starts with ${index + 1} -- ${greet(day)}`);
    });
  }, [days]);

  function func() {
    const items = [12, 24, 36];
    let copy: any = [];
    items.forEach(function (item) {
      copy.push(item + item + 2);
    });
    console.log(copy);
  }
  func();

  return (
    <div>
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiSelect /> */}
      {/* <MuiMultipleSelect /> */}
      {/* <MuiTextField /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckBox /> */}
      {/* <MuiAutoComplete /> */}
      {/* <MuiBox /> */}
      {/* <MuiMasonry /> */}
    </div>
  );
};

export default App;
