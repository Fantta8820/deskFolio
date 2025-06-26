import { setLocalStorageValues } from "../../utils/WindowFuncs";
import MenuIcons from "./MenuIcons";

function StartupMenu() {
  const items = setLocalStorageValues("MainWindow");
  return (
    <main className="w-1/4 h-[500px] bg-gray-700 absolute bottom-12 rounded-lg flex items-center flex-col space-y-6">
      <div className="flex justify-start w-3/4 pt-4">
        <h1 className="text-white text-lg">Todos os programas</h1>
      </div>
      <section className="grid grid-cols-4 w-2/3">
        <MenuIcons
          icon={"subway:menu"}
          title={"Janela Principal"}
          windowName={"MainWindow"}
          isOpen={true}
          position={items.position}
        />
      </section>
    </main>
  );
}

export default StartupMenu;
