import { createContext, useEffect, useState } from "react";
import { TaskType } from "../components/Content/Content";

interface TaskContextData {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const TasksContext = createContext({} as TaskContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");

    if (tasksOnLocalStorage) {
      const tasksToJson = JSON.parse(tasksOnLocalStorage);
      setTaskList(tasksToJson);
    }
  }, []);

  return (
    <TasksContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TasksContext.Provider>
  );
};
