import { FormEvent } from "react";
import * as S from "./styles";
interface FormTasksProps {
  taskValue: string;
  handleTaskValue: (value: string) => void;
  handleSubmit: (event: FormEvent) => void;
}
export const FormTasks: React.FC<FormTasksProps> = (props) => {
  return (
    <S.FormTasksContainer>
      <S.FormTasks
        onSubmit={(event) => {
          props.handleSubmit(event);
        }}
      >
        <S.FormTasksTitle>Adicionar Tarefa</S.FormTasksTitle>
        <S.InputContainer>
          <S.FormTasksInput
            value={props.taskValue}
            onChange={(event) => {
              props.handleTaskValue(event.target.value);
            }}
          ></S.FormTasksInput>
          <S.FormTasksButton>Adicionar</S.FormTasksButton>
        </S.InputContainer>
      </S.FormTasks>
    </S.FormTasksContainer>
  );
};
