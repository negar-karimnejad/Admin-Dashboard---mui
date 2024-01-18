import { Box } from "@mui/material";
import { Colors } from "../theme/Colors";
import { theme } from "../theme/theme";

// eslint-disable-next-line react/prop-types
const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${
          Colors(theme.palette.mode).primary[400]
        } 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${
          Colors(theme.palette.mode).blueAccent[500]
        } ${angle}deg 360deg),
            ${Colors(theme.palette.mode).greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
