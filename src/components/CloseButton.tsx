import { Icon } from "@iconify/react/dist/iconify.js";

function CloseButton() {
  return (
    <button className="absolute text-red-300 right-5 text-xl">
      <Icon icon="mdi:circle" />
    </button>
  );
}

export default CloseButton;
