import * as S from "./styles";
import { FormTasks } from "../Form/Form";
import { Task } from "../Task/Task";
import { FormEvent, useContext, useState } from "react";
import { TasksContext } from "../../context/TaskContext";

export interface TaskType {
  id: number;
  done: boolean;
  taskTitle: string;
}

export const Content: React.FC = () => {
  const [taskValue, setTaskValue] = useState("");
  const { taskList, setTaskList } = useContext(TasksContext);

  const handleTaskValue = (value: string) => {
    setTaskValue(value);
  };

  const handleCheck = (taskId: number) => {
    const checkedTasks = taskList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });

    setTaskList(checkedTasks);
    localStorage.setItem("tasks", JSON.stringify(checkedTasks));
  };

  const deleteTask = (taskId: number) => {
    const newTasksWithoutDeleteOne = taskList.filter(
      (task) => task.id !== taskId
    );
    setTaskList(newTasksWithoutDeleteOne);
    localStorage.setItem("tasks", JSON.stringify(newTasksWithoutDeleteOne));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (taskValue.length < 3) {
      alert("Digite uma tarefa com no mínimo 3 caracteres!");
      setTaskValue("");
      return;
    } else {
      const newTasks = [
        ...taskList,
        {
          id: new Date().getTime(),
          done: false,
          taskTitle: taskValue,
        },
      ];
      setTaskList(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    setTaskValue("");
  };

  console.log(taskList);
  return (
    <S.MainStyle>
      <S.FormMainContainer>
        <FormTasks
          handleSubmit={handleSubmit}
          taskValue={taskValue}
          handleTaskValue={handleTaskValue}
        />
      </S.FormMainContainer>
      <S.TasksMainContainer>
        {taskList.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              handleCheck={handleCheck}
              deleteTask={deleteTask}
              done={task.done}
              taskTitle={task.taskTitle}
            />
          );
        })}
      </S.TasksMainContainer>
    </S.MainStyle>
  );
};
