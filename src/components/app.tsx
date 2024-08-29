import { useEffect, useState } from "react";
import { ConfigProvider, Flex, List } from "antd";
import { darkTheme, lightTheme } from "../constant";
import "../style/app.css";
import useTodoStore from "../store/todo";
import TodoList from "./todo-list";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const { todoList, fetchTodoList } = useTodoStore();

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: isDarkMode ? darkTheme : lightTheme,
      }}
    >
      <div className="content">
        <Flex gap="middle" align="start" justify="space-around">
          <TodoList listTitle='Todo' listItems={todoList.filter(todo => !todo.completed)} />
          <TodoList listTitle='Done!' listItems={todoList.filter(todo => todo.completed)} />
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;
