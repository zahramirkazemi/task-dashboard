import { Flex } from "antd";
import ThemeButton from "./theme-button";
import LiveSearch from "./search";

const Header: React.FC = () => {
  return (
    <Flex justify="space-around">
      <LiveSearch/>
      <ThemeButton/>
    </Flex>
  );
};

export default Header;
