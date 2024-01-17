import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  Map,
  Menu,
  PersonOutlined,
  PieChartOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import user from "../assets/user.png";
import { Colors } from "../theme/Colors";
import { theme } from "../theme/theme";
import SidebarMenuBox from "./SidebarMenuBox";

function Sidebar() {
  const SidebarBox = styled(Box)(({ theme }) => ({
    backgroundColor: Colors(theme.palette.mode).primary[400],
    color: Colors(theme.palette.mode).primary[100],
    width: 280,
    padding: theme.spacing(2, 4),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
  }));
  const SidebarMenuTitle = styled(Typography)(({ theme }) => ({
    color: Colors(theme.palette.mode).primary[300],
    fontSize: 12,
    fontWeight: "bold",
    marginTop: theme.spacing(1),
  }));

  const menuList = [
    {id:1,},
    {id:2},
    {id:3},
    {id:4},
  ]
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
      <SidebarMenuBox
        title="Dashboard"
        icon={<HomeOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuTitle>Data</SidebarMenuTitle>
      <SidebarMenuBox
        title="Contacts Information"
        icon={<ContactsOutlined />}
      />
      <SidebarMenuBox
        title="Invoices Balances"
        icon={<ReceiptOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuTitle>Pages</SidebarMenuTitle>
      <SidebarMenuBox
        title="Profile Form"
        icon={<PersonOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuBox
        title="Calender"
        icon={<CalendarTodayOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuBox
        title="FAQ Page"
        icon={<HelpOutlineOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuTitle>Charts</SidebarMenuTitle>
      <SidebarMenuBox
        title="Bar Chart"
        icon={<BarChartOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuBox
        title="Pie Chart"
        icon={<PieChartOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuBox
        title="Line Chart"
        icon={<TimelineOutlined sx={{ width: 20 }} />}
      />
      <SidebarMenuBox
        title="Geography Chart"
        icon={<Map sx={{ width: 20 }} />}
      />
    </SidebarBox>
  );
}

export default Sidebar;
