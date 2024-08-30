import { Flex } from "antd";
import ThemeButton from "./theme-button";

const Header: React.FC = () => {
  return (
    <Flex justify="space-around">
      <ThemeButton/>
    </Flex>
  );
};

export default Header;
