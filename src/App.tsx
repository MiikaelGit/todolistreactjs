import { GlobalStyle } from "./GlobalStyle/GlobalStyles";
import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { TasksProvider } from "./context/TaskContext";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Content />
      <GlobalStyle />
    </TasksProvider>
  );
}

export default App;
