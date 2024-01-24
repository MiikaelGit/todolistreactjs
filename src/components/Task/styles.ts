import styled from "styled-components";

export const TaskContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  border: 3px solid #9eadba;
  padding: 1.1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 0.5rem;
`;

export const TaskCheckBox = styled.input.attrs({
  type: "checkbox",
})`
  width: 1.3rem;
  height: 1.3rem;
  &:checked {
    accent-color: #6558f5;
  }
`;

interface TaskLabelProps {
  $done: boolean;
}
export const TaskLabel = styled.label<TaskLabelProps>`
  font-size: 1.3rem;
  font-weight: 500;
  max-width: 90%;
  text-decoration: ${(props) => (props.$done ? "line-through" : "none")};
  @media (max-width: 426px) {
    max-width: 75%;
  }
`;

export const TaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fd2361;
  color: #fff;
  font-size: 1.3rem;
  margin: 0 0 0 auto;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`;
