import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  Email,
  HelpOutlineOutlined,
  HomeOutlined,
  Map,
  PersonAdd,
  PersonOutlined,
  PieChartOutlined,
  PointOfSale,
  ReceiptOutlined,
  TimelineOutlined,
  Traffic,
} from "@mui/icons-material";
import { theme } from "../theme/theme";
import { Colors } from "../theme/Colors";

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

//DASHBOARD

export const dashboardGrid = [
  {
    id: 1,
    title: "12,361",
    subtitle: "Emails Sent",
    progress: "0.75",
    increase: "+14%",
    icon: <Email />,
  },
  {
    id: 2,
    title: "431,225",
    subtitle: "Sales Obtained",
    progress: "0.50",
    increase: "+21%",
    icon: <PointOfSale />,
  },
  {
    id: 3,
    title: "32,441",
    subtitle: "New Clients",
    progress: "0.30",
    increase: "+5%",
    icon: <PersonAdd />,
  },
  {
    id: 2,
    title: "1,325,134",
    subtitle: "Traffic Received",
    progress: "0.80",
    increase: "+43%",
    icon: <Traffic />,
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: Colors(theme.palette.mode === "dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: Colors(theme.palette.mode === "dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: Colors(theme.palette.mode === "dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];
