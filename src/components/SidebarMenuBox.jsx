import { CustomSidebarMenuBox } from "../theme/theme";

// eslint-disable-next-line react/prop-types
function SidebarMenuBox({ title, icon }) {
  return (
    <CustomSidebarMenuBox>
      {icon}
      {title}
    </CustomSidebarMenuBox>
  );
}

export default SidebarMenuBox;
