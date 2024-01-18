import {
  NotificationsOutlined,
  PersonOutlined,
  Search,
  SettingsOutlined
} from "@mui/icons-material";
import { Box, FormControl, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme/Colors";
import { theme } from "../theme/theme";

// eslint-disable-next-line react/prop-types
function Topbar() {
  const TopbarInput = styled(InputBase)(({ theme }) => ({
    borderRadius: 4,
    backgroundColor: Colors(theme.palette.mode).primary[400],
    color: Colors(theme.palette.mode).grey[500],
    fontSize: 16,
    width: "auto",
    padding: "4px 12px",
  }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 70,
        color: Colors(theme.palette.mode).grey[400],
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
          }}
        />
      </FormControl>
      <Box sx={{ display: "flex", gap: 2, cursor: "pointer" }}>
        <NotificationsOutlined />
        <SettingsOutlined />
        <PersonOutlined />
      </Box>
    </Box>
  );
}

export default Topbar;
