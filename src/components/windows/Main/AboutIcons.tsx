import { Icon } from "@iconify/react/dist/iconify.js";

function AboutIcons(props: { icon: string; title: string }) {
  return (
    <div className="w-1/5 flex flex-col justify-center items-center">
      <Icon icon={props.icon} className="text-white text-8xl"/>
      <p className="text-white font-bold italic text-xl">{props.title}</p>
    </div>
  );
}

export default AboutIcons;
