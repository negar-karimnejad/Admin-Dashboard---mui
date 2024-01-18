import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import routes from "./routes";
import { Colors } from "./theme/Colors";
import { theme } from "./theme/theme";

function App() {
  const router = useRoutes(routes);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    theme.palette.mode = darkMode ? "dark" : "light";
  }, [darkMode]);

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
          <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
        {router}
      </Box>
    </ThemeProvider>
  );
}

export default App;
