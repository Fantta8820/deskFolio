import "./App.css";
import TaskBar from "./components/taskBar/TaskBar.tsx";
import MainWindow from "./components/windows/Main/MainWindow.tsx";

function App() {
  return (
    <main className="w-full h-svh bg-gray-600">
      <MainWindow />
      <TaskBar />
    </main>
  );
}

export default App;
