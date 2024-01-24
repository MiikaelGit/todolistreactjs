import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #e0defd;
  border: 3px solid #6558f5;
`;
export const HeaderContainer = styled.div`
  max-width: 1240px;
  margin: 1.5rem auto 0;
  @media (max-width: 1024px) {
    padding: 0 1rem 0 1rem;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;
export const HeaderSpan = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  @media (max-width: 426px) {
    display: none;
  }
`;

export const HeaderContainerStats = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalTasksContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12.5rem;
  width: 18.7rem;
  background-color: #e3e8ed;
  border: 3px solid #9eadba;
  transform: translateY(50%);
  @media (max-width: 768px) {
    height: 12rem;
    width: 14rem;
    font-size: 85%;
  }
  @media (max-width: 426px) {
    height: 7.5rem;
    width: 7rem;
    font-size: 60%;
    text-align: center;
  }
  @media (max-width: 376px) {
    height: 7rem;
    width: 6.5rem;
    font-size: 52%;
  }
  @media (max-width: 321px) {
    height: 6.5rem;
    width: 5rem;
  }
`;
export const PeddingTasksContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12.5rem;
  width: 18.7rem;
  background-color: #fae6d8;
  border: 3px solid #e8833a;
  transform: translateY(50%);
  @media (max-width: 768px) {
    height: 12rem;
    width: 14rem;
    font-size: 85%;
  }
  @media (max-width: 426px) {
    height: 7.5rem;
    width: 7rem;
    font-size: 55%;
    text-align: center;
  }
  @media (max-width: 376px) {
    height: 7rem;
    width: 6.5rem;
    font-size: 50%;
  }
  @media (max-width: 321px) {
    height: 6.5rem;
    width: 5rem;
  }
`;
export const DoneTasksContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12.5rem;
  width: 18.7rem;
  background-color: #d1efec;
  border: 3px solid #1aae9f;
  transform: translateY(50%);
  @media (max-width: 768px) {
    height: 12rem;
    width: 14rem;
    font-size: 85%;
  }
  @media (max-width: 426px) {
    height: 7.5rem;
    width: 7rem;
    font-size: 55%;
    text-align: center;
  }
  @media (max-width: 376px) {
    height: 7rem;
    width: 6.5rem;
    font-size: 50%;
  }
  @media (max-width: 321px) {
    height: 6.5rem;
    width: 5rem;
  }
`;

export const TaskTitle = styled.h2``;
export const TaskSpan = styled.span`
  font-size: 6.25rem;
  @media (max-width: 426px) {
    font-size: 3rem;
  }
`;
