import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// eslint-disable-next-line react/prop-types
function SidebarMenuBox({ title, icon }) {
  console.log(icon);
  const SidebarMenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 13,
    gap: theme.spacing(3),
  }));
  return (
    <SidebarMenuBox>
      {icon}
      {title}
    </SidebarMenuBox>
  );
}

export default SidebarMenuBox;
