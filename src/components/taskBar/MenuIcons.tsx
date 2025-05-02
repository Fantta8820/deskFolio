import { Icon } from "@iconify/react/dist/iconify.js";

function MenuIcons(props: { icon: string; title: string }) {
  return (
    <main className="w-1/4 flex flex-col justify-center items-center">
      <Icon icon={props.icon} className="text-white text-4xl" />
      <p className={`text-white text-center text-sm line-clamp-2 w-16 pt-2`}>{props.title}</p>
    </main>
  );
}

export default MenuIcons;
