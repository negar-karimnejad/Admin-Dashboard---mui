import { Box, Typography } from "@mui/material";
import user from "../assets/user.png";
import { menuList } from "../data/data";
import { Colors } from "../theme/Colors";
import { SidebarBox, SidebarMenuTitle, theme } from "../theme/theme";
import SidebarMenuBox from "./SidebarMenuBox";
import { Menu } from "@mui/icons-material";

function Sidebar() {
  const content = menuList.map((list) => {
    if (list.section) {
      return list.section.map((sec, index) => (
        <>
          <SidebarMenuTitle key={index}>{sec.title}</SidebarMenuTitle>
          {sec.item?.map((inner) => (
            <SidebarMenuBox
              key={inner.id}
              title={inner.item}
              icon={inner.icon}
            />
          ))}
        </>
      ));
    } else if (!list.section) {
      return (
        <SidebarMenuBox key={list.id} title={list.item} icon={list.icon} />
      );
    }
  });

  return (
    <SidebarBox>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          ADMINS
        </Typography>
        <Menu />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img width={80} src={user} alt="User" style={{ marginBottom: 2 }} />
        <Typography
          variant="h5"
          color={Colors(theme.palette.mode).grey[100]}
          fontWeight={"bold"}
        >
          Ed Roh
        </Typography>
        <span
          style={{
            color: Colors(theme.palette.mode).greenAccent[500],
            fontSize: 12,
          }}
        >
          VP Fancy Admin
        </span>
      </Box>
      {content}
    </SidebarBox>
  );
}

export default Sidebar;
