import styled from "styled-components";

export const FormTasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
`;

export const FormTasks = styled.form``;

export const FormTasksTitle = styled.label.attrs({
  htmlFor: "input-form",
})`
  font-weight: 600;
  display: inline-block;
  width: fit-content;
  margin-bottom: 0.2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  @media (max-width: 426px) {
    flex-direction: column;
    gap: 0.5rem;
    height: 7rem;
  }
`;

export const FormTasksInput = styled.input.attrs({
  placeholder: "Título da Tarefa",
  id: "input-form",
})`
  width: 83%;
  outline: none;
  border: 3px solid #c5ced6;
  border-radius: 4px;
  font-size: 1.5rem;
  padding: 1rem;
  &::placeholder {
    color: #c3cfd9;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`;

export const FormTasksButton = styled.button.attrs({
  type: "submit",
  value: "submit",
})`
  width: 15%;
  background-color: #6558f5;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
  @media (max-width: 426px) {
    width: 100%;
    padding: 0.8rem;
  }
`;
