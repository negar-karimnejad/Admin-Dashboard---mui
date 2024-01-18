import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useRoutes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import routes from "./routes";
import { Colors } from "./theme/Colors";
import { theme } from "./theme/theme";

function App() {
  const router = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: Colors(theme.palette.mode).primary[500],
        }}
      >
        <Box display={"flex"}>
          <Sidebar />
          <Box
            sx={{
              width: "100%",
              bgcolor: Colors(theme.palette.mode).primary[500],
              paddingX: 2,
            }}
          >
            <Topbar />
            {router}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
