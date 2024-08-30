import { Checkbox, CheckboxProps, Flex, List } from "antd";
import useTaskStore from "../store/task";
import { Task } from "../type";

const TaskList: React.FC = () => {
  const { isLoading, taskList, updateTask } = useTaskStore();

  const handleTaskCheck = (id: number, checked: boolean): Promise<void> => updateTask(id, checked);

  const renderItem = (item: Task): JSX.Element => <Checkbox onChange={(event) => handleTaskCheck(item.id, event.target.checked)} checked={item.completed} className={item.completed? 'checked-task': ''}>{item.title}</Checkbox>

  return (
    <Flex gap="middle" align="start" justify="space-around">
      <List
        header={<div>ToDo</div>}
        bordered
        loading={isLoading}
        style={{ width: '45%', height: '80vh'}}
        dataSource={taskList.filter((task) => !task.completed)}
        renderItem={(item) => <List.Item key={item.id}>{renderItem(item)}</List.Item>}
      />
      <List
        header={<div>Done</div>}
        bordered
        loading={isLoading}
        style={{ width: '45%', height: '80vh'}}
        dataSource={taskList.filter((task) => task.completed)}
        renderItem={(item) => <List.Item key={item.id}>{renderItem(item)}</List.Item>}
      />
    </Flex>
  );
};

export default TaskList;
