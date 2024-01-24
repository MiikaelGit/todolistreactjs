import { useContext } from "react";
import * as S from "./styles";
import { TasksContext } from "../../context/TaskContext";

export const Header: React.FC = () => {
  const { taskList } = useContext(TasksContext);

  const totalTasks = taskList.length;
  const totalPendingTasks = taskList.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const totalDoneTasks = totalTasks - totalPendingTasks;

  return (
    <S.HeaderStyle>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.HeaderTitle>MyTodo</S.HeaderTitle>
          <S.HeaderSpan>Bem-vindo(a)!</S.HeaderSpan>
        </S.TitleContainer>
        <S.HeaderContainerStats>
          <S.TotalTasksContainer>
            <S.TaskTitle>Total de Tarefas</S.TaskTitle>
            <S.TaskSpan>{totalTasks}</S.TaskSpan>
          </S.TotalTasksContainer>
          <S.PeddingTasksContainer>
            <S.TaskTitle>Tarefas Pendentes</S.TaskTitle>
            <S.TaskSpan>{totalPendingTasks}</S.TaskSpan>
          </S.PeddingTasksContainer>
          <S.DoneTasksContainer>
            <S.TaskTitle>Tarefas Concluídas</S.TaskTitle>
            <S.TaskSpan>{totalDoneTasks}</S.TaskSpan>
          </S.DoneTasksContainer>
        </S.HeaderContainerStats>
      </S.HeaderContainer>
    </S.HeaderStyle>
  );
};
