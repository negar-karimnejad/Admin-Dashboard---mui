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
  { id: 1, item: "Dashboard", icon: <HomeOutlined />, link: "/dashboard" },
  {
    id: 2,
    section: [
      { title: "Data" },
      {
        item: [
          {
            item: "Contacts Information",
            icon: <ContactsOutlined />,
            link: "/contacts-information",
          },
          {
            item: "Invoices Balances",
            icon: <ReceiptOutlined />,
            link: "/invoices-balances",
          },
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
          {
            item: "Profile Form",
            icon: <PersonOutlined />,
            link: "/profile-form",
          },
          {
            item: "Calender",
            icon: <CalendarTodayOutlined />,
            link: "/calender",
          },
          {
            item: "FAQ Page",
            icon: <HelpOutlineOutlined />,
            link: "/faq-page",
          },
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
          {
            id: 1,
            item: "Bar Chart",
            icon: <BarChartOutlined />,
            link: "/bar-chart",
          },
          {
            id: 2,
            item: "Pie Chart",
            icon: <PieChartOutlined />,
            link: "/pie-chart",
          },
          {
            id: 3,
            item: "Line Chart",
            icon: <TimelineOutlined />,
            link: "/line-chart",
          },
          {
            id: 4,
            item: "Geography Chart",
            icon: <Map />,
            link: "/geography-chart",
          },
        ],
      },
    ],
  },
];

//
