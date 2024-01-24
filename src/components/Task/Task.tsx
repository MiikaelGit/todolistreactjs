import * as S from "./styles";
import { TaskType } from "../Content/Content";
import { GoTrash } from "react-icons/go";

interface TaskProps extends TaskType {
  handleCheck: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export const Task: React.FC<TaskProps> = (props) => {
  return (
    <S.TaskContainer>
      <S.TaskCheckBox
        checked={props.done}
        onChange={() => props.handleCheck(props.id)}
      ></S.TaskCheckBox>
      <S.TaskLabel $done={props.done}>{props.taskTitle}</S.TaskLabel>
      <S.TaskButton onClick={() => props.deleteTask(props.id)}>
        <GoTrash />
      </S.TaskButton>
    </S.TaskContainer>
  );
};
