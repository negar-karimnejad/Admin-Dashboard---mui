import {
    DarkModeOutlined,
    NotificationsOutlined,
    PersonOutlined,
    Search,
    SettingsOutlined,
} from "@mui/icons-material";
import { Box, FormControl, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme/Colors";
import { theme } from "../theme/theme";

function Topbar() {
  const TopbarInput = styled(InputBase)(({ theme }) => ({
    borderRadius: 4,
    backgroundColor: Colors(theme.palette.mode).primary[400],
    fontSize: 16,
    width: "auto",
    padding: "4px 12px",
  }));

  const changeMode = () => {
    theme.palette.mode === "dark" ? "light" : "dark";
    console.log(theme.palette.mode);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 70,
        paddingX: 5,
      }}
    >
      <FormControl variant="standard" sx={{ position: "relative" }}>
        <TopbarInput placeholder="Search" />
        <Search
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            margin: "auto",
            right: 10,
            color: Colors(theme.palette.mode).primary[100],
          }}
        />
      </FormControl>
      <Box sx={{ display: "flex", gap: 2 }}>
        <DarkModeOutlined onChange={changeMode} />
        <NotificationsOutlined />
        <SettingsOutlined />
        <PersonOutlined />
      </Box>
    </Box>
  );
}

export default Topbar;
