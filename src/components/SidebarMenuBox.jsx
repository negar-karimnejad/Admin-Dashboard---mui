import { CustomSidebarMenuBox } from "../theme/theme";

// eslint-disable-next-line react/prop-types
function SidebarMenuBox({ title, icon, link }) {
  return (
    <CustomSidebarMenuBox to={link}>
      {icon}
      {title}
    </CustomSidebarMenuBox>
  );
}

export default SidebarMenuBox;
