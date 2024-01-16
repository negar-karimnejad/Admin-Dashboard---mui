import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import routes from "./routes";
import { Colors } from "./theme/Colors";
import { theme } from "./theme/theme";

function App() {
  const router = useRoutes(routes);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: Colors(theme.palette.mode).primary[500],
      }}
    >
      <Sidebar />
      {router}
    </Box>
  );
}

export default App;
