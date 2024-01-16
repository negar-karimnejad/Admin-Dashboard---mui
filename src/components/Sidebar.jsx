import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  Map,
  Menu,
  PeopleOutlined,
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

function Sidebar() {
  const SidebarBox = styled(Box)(({ theme }) => ({
    backgroundColor: Colors(theme.palette.mode).primary[400],
    color: Colors(theme.palette.mode).primary[100],
    width: 280,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  }));
  const SidebarMenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  }));

  return (
    <SidebarBox>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" color="initial">
          ADMIN
        </Typography>
        <Menu />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src={user} alt="User" style={{ marginBottom: 10 }} />
        <Typography
          variant="h4"
          color={Colors(theme.palette.mode).grey[100]}
          fontWeight={"bold"}
        >
          Ed Roh
        </Typography>
        <span style={{ color: Colors(theme.palette.mode).greenAccent[500] }}>
          VP Fancy Admin
        </span>
      </Box>
      <SidebarMenuBox>
        <HomeOutlined />
        Dashboard
      </SidebarMenuBox>
      <Typography
        variant="body1"
        color={Colors(theme.palette.mode).primary[300]}
      >
        Data
      </Typography>
      <SidebarMenuBox>
        <PeopleOutlined />
        Manage Team
      </SidebarMenuBox>
      <SidebarMenuBox>
        <ContactsOutlined />
        Contacts Information
      </SidebarMenuBox>
      <SidebarMenuBox>
        <ReceiptOutlined />
        Invoices Balances
      </SidebarMenuBox>
      <Typography
        variant="body1"
        color={Colors(theme.palette.mode).primary[300]}
      >
        Pages
      </Typography>
      <SidebarMenuBox>
        <PersonOutlined />
        Profile Form
      </SidebarMenuBox>
      <SidebarMenuBox>
        <CalendarTodayOutlined />
        Calender
      </SidebarMenuBox>
      <SidebarMenuBox>
        <HelpOutlineOutlined />
        FAQ Page
      </SidebarMenuBox>
      <Typography
        variant="body1"
        color={Colors(theme.palette.mode).primary[300]}
      >
        Charts
      </Typography>
      <SidebarMenuBox>
        <BarChartOutlined />
        Bar Chart
      </SidebarMenuBox>
      <SidebarMenuBox>
        <PieChartOutlined />
        Pie Chart
      </SidebarMenuBox>
      <SidebarMenuBox>
        <TimelineOutlined />
        Line Chart
      </SidebarMenuBox>
      <SidebarMenuBox>
        <Map />
        Geography Chart
      </SidebarMenuBox>
    </SidebarBox>
  );
}

export default Sidebar;
