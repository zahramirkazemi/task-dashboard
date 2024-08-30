import { Checkbox, CheckboxProps, Flex, List } from "antd";
import useTodoStore from "../store/todo";
import { Todo } from "../type";

const TaskList: React.FC = () => {
  const { isLoading, todoList, updateTask } = useTodoStore();

  const handleTaskCheck = (id: number, checked: boolean): Promise<void> => updateTask(id, checked);

  const renderItem = (item: Todo): JSX.Element => <Checkbox onChange={(event) => handleTaskCheck(item.id, event.target.checked)} checked={item.completed} className={item.completed? 'checked-task': ''}>{item.title}</Checkbox>

  return (
    <Flex gap="middle" align="start" justify="space-around">
      <List
        header={<div>ToDo</div>}
        bordered
        loading={isLoading}
        style={{ width: '45%'}}
        dataSource={todoList.filter((todo) => !todo.completed)}
        renderItem={(item) => <List.Item key={item.id}>{renderItem(item)}</List.Item>}
      />
      <List
        header={<div>Done</div>}
        bordered
        loading={isLoading}
        style={{ width: '45%'}}
        dataSource={todoList.filter((todo) => todo.completed)}
        renderItem={(item) => <List.Item key={item.id}>{renderItem(item)}</List.Item>}
      />
    </Flex>
  );
};

export default TaskList;
