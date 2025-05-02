import "./App.css";
import TaskBar from "./components/taskBar/TaskBar.tsx";
import MainWindow from "./components/windows/Main/MainWindow.tsx";
import { WindowProvider } from "./contexts/WindowContext.tsx";

function App() {
  return (
    <WindowProvider>
      <main className="w-full h-svh bg-gray-600">
        <MainWindow />
        <TaskBar />
      </main>
    </WindowProvider>
  );
}

export default App;
