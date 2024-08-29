import { useState } from "react";
import { ConfigProvider } from "antd";
import { darkTheme, lightTheme } from "../constant";
import "../style/app.css";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: isDarkMode ? darkTheme : lightTheme,
      }}
    >
      <div className="content">
      </div>
    </ConfigProvider>
  );
};

export default App;
