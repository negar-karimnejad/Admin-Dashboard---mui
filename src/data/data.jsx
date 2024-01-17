import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  Map,
  PersonOutlined,
  PieChartOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

// SIDEBAR
export const menuList = [
  { id: 1, item: "Dashboard", icon: <HomeOutlined /> },
  {
    id: 2,
    section: [
      { title: "Data" },
      {
        item: [
          { item: "Contacts Information", icon: <ContactsOutlined /> },
          { item: "Invoices Balances", icon: <ReceiptOutlined /> },
        ],
      },
    ],
  },
  {
    id: 3,
    section: [
      { title: "Pages" },
      {
        item: [
          { item: "Profile Form", icon: <PersonOutlined /> },
          { item: "Calender", icon: <CalendarTodayOutlined /> },
          { item: "FAQ Page", icon: <HelpOutlineOutlined /> },
        ],
      },
    ],
  },
  {
    id: 4,
    section: [
      { title: "Charts" },
      {
        item: [
          { id: 1, item: "Bar Chart", icon: <BarChartOutlined /> },
          { id: 2, item: "Pie Chart", icon: <PieChartOutlined /> },
          { id: 3, item: "Line Chart", icon: <TimelineOutlined /> },
          { id: 4, item: "Geography Chart", icon: <Map /> },
        ],
      },
    ],
  },
];

//
