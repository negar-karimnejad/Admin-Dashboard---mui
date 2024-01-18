import { DownloadOutlined, FileDownload } from "@mui/icons-material";
import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import ProgressCircle from "../components/ProgressCircle";
import { dashboardGrid, mockTransactions } from "../data/data";
import { Colors } from "../theme/Colors";
import { theme } from "../theme/theme";
import LineChart from "../components/LineChart";

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: Colors(theme.palette.mode).grey[100],
        }}
      >
        <Box>
          <Typography
            variant="h5"
            color={Colors(theme.palette.mode).grey[100]}
            fontWeight={"bold"}
          >
            DASHBOARD
          </Typography>
          <span
            style={{
              color: Colors(theme.palette.mode).greenAccent[500],
              fontSize: 12,
            }}
          >
            Welcome to your dashboard
          </span>
        </Box>
        <Button
          sx={{
            fontSize: 14,
            padding: "10px 20px",

            fontWeight: "bold",
            bgcolor: Colors(theme.palette.mode).blueAccent[700],
            color: Colors(theme.palette.mode).grey[100],
          }}
          color="primary"
        >
          <FileDownload sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
      <Grid
        container
        spacing={0}
        gap={1.2}
        xs={12}
        justifyContent={"space-between"}
      >
        {dashboardGrid.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            md={5.9}
            lg={2.9}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: Colors(theme.palette.mode).primary[400],
              borderRadius: 1,
              padding: 2,
            }}
          >
            <Box color={Colors(theme.palette.mode).greenAccent[400]}>
              {item.icon}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 12 }}>
                {item.subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                color: Colors(theme.palette.mode).greenAccent[400],
              }}
            >
              <ProgressCircle progress={item.progress} />
              {item.increase}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        display="flex"
        height={350}
        gap={2}
        sx={{
          flexDirection: { lg: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            width: { xs: "auto", lg: "70%" },
          }}
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={Colors(theme.palette.mode).primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={Colors(theme.palette.mode).grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={Colors(theme.palette.mode).greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{
                    fontSize: "26px",
                    color: Colors(theme.palette.mode).greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "30%" },
            overflow: { xs: "visible", lg: "auto" },
          }}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={Colors(theme.palette.mode).primary[400]}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${
              Colors(theme.palette.mode).primary[500]
            }`}
            colors={Colors(theme.palette.mode).grey[100]}
            p="15px"
          >
            <Typography
              color={Colors(theme.palette.mode).grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${
                Colors(theme.palette.mode).primary[500]
              }`}
              p="15px"
            >
              <Box>
                <Typography
                  color={Colors(theme.palette.mode).greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={Colors(theme.palette.mode).grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={Colors(theme.palette.mode).grey[100]}>
                {transaction.date}
              </Box>
              <Box
                backgroundColor={Colors(theme.palette.mode).greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
