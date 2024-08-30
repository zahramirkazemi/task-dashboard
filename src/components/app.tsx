import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { darkTheme, lightTheme } from "../constant";
import useTodoStore from "../store/todo";
import useThemeStore from "../store/theme";
import "../asset/style/app.css";
import Header from "./header";
import TaskList from "./task-list";

const App = () => {
  const { isDarkTheme } = useThemeStore();
  const { fetchTaskList } = useTodoStore();

  useEffect(() => {
    fetchTaskList();
  }, []);

  useEffect(() => {
    document.documentElement.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  return (
    <ConfigProvider
      theme={{
        token: isDarkTheme ? darkTheme : lightTheme,
      }}
    >
      <div className="content">
        <Header/>
        <TaskList/>
      </div>
    </ConfigProvider>
  );
};

export default App;
