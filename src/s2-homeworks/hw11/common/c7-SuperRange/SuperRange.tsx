import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: "#00CC22",
        height: 8,
        "&": {
          width: 250,
        },
        "& .MuiSlider-track": {
          border: "none",
        },
        "& .MuiSlider-thumb": {
          height: 18,
          width: 18,
          margin: "0 auto",
          backgroundColor: "#fff",
          border: "1px solid currentColor",
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
          },
          "&::before": {
            backgroundColor: "#00CC22",
            height: 6,
            width: 6,
          },
        },
      }}
      value={props.value}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
