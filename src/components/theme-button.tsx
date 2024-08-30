import { FloatButton } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import useThemeStore from "../store/theme";

const ThemeButton = () => {
  const {isDarkTheme , changeTheme } = useThemeStore();

  return (
    <FloatButton
      shape="circle"
      type="primary"
      style={{ insetInlineEnd: 8, insetBlockEnd: 12 }}
      onClick={changeTheme}
      icon={isDarkTheme ? <SunFilled /> : <MoonFilled />}
    />
  );
};

export default ThemeButton;
