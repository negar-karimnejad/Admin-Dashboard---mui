import { Box, Typography } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { Colors } from "./Colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const toggleDarkMode = (setDarkMode) => {
  setDarkMode((prev) => !prev);
};

// SIDEBAR
export const SidebarBox = styled(Box)(({ theme }) => ({
  backgroundColor: Colors(theme.palette.mode).primary[400],
  color: Colors(theme.palette.mode).primary[100],
  width: 350,
  padding: theme.spacing(2, 2, 2, 3),
  display: "flex",
  flexDirection: "column",
}));

export const SidebarMenuTitle = styled(Typography)(({ theme }) => ({
  color: Colors(theme.palette.mode).primary[300],
  fontSize: 12,
  fontWeight: "bold",
  marginTop: theme.spacing(1),
}));

export const CustomSidebarMenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: 13,
  marginBottom: theme.spacing(0.7),
  gap: theme.spacing(2),
  cursor: "pointer",
  "&:hover": {
    color: Colors(theme.palette.mode).blueAccent[500],
  },
}));

//
