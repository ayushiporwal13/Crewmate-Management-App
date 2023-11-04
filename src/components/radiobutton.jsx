// import * as React from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function RadioButton({ handleChange, value }) {
  // const [value, setValue] = React.useState('');

  // const handleRadioChange = (event) => {
  //   setValue(event.target.value);

  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (value === 'best') {

  //   } else if (value === 'worst') {

  //   } else {

  //   }
  // };

  return (
    <form>
      <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              <h1 style={{ color: "white" }}>Color</h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="color"
              value={value}
              onChange={handleChange}
              style={{ color: "black", backgroundColor: "white" }}
            >
              <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
              <FormControlLabel value="Red" control={<Radio />} label="Red" />
              <FormControlLabel
                value="Green"
                control={<Radio />}
                label="Green"
              />
              <FormControlLabel
                value="Purple"
                control={<Radio />}
                label="Purple"
              />
              <FormControlLabel
                value="Yellow"
                control={<Radio />}
                label="Yellow"
              />
              {/* <FormControlLabel
                value="Orange"
                control={<Radio />}
                label="Orange"
              />
              <FormControlLabel value="Pink" control={<Radio />} label="Pink" />
              <FormControlLabel
                value="Rainbow"
                control={<Radio />}
                label="Rainbow"
              /> */}
            </RadioGroup>
      </FormControl>
    </form>
  );
}
