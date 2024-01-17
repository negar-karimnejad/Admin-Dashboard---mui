import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "./Colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

// SIDEBAR
export const SidebarBox = styled(Box)(({ theme }) => ({
  backgroundColor: Colors(theme.palette.mode).primary[400],
  color: Colors(theme.palette.mode).primary[100],
  width: 280,
  padding: theme.spacing(2, 4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const SidebarMenuTitle = styled(Typography)(({ theme }) => ({
  color: Colors(theme.palette.mode).primary[300],
  fontSize: 12,
  fontWeight: "bold",
  marginTop: theme.spacing(1),
}));

// 