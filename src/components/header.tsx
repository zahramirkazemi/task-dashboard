import { Flex, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
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
