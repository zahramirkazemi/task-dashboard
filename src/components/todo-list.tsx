import { ConfigProvider, Flex, List } from "antd";
import useTodoStore from "../store/todo";
import { Todo } from "../type";

interface TodoListProps {
  listTitle: string;
  listItems: Todo[];
}

const TodoList = ({listItems, listTitle}: TodoListProps) => {
  const { isLoading } = useTodoStore();

  return (
    <List
      header={<div>{listTitle}</div>}
      bordered
      loading={isLoading}
      dataSource={listItems}
      renderItem={(item) => <List.Item key={item.id}>{item.title}</List.Item>}
    />
  );
};

export default TodoList;
