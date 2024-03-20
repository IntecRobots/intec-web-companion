import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

export const NavigationLinksRight = () => {
  return (
    <div className="flex items-center space-x-6">
      <a href="#notifications" className="hover:text-gray-300">
        <FaRegBell size="1.5em" /> {/* Hace el ícono un poco más grande */}
      </a>
      <a href="/home/settings" className="hover:text-gray-300">
        <IoSettingsOutline size="1.5em" />{" "}
        {/* Hace el ícono un poco más grande */}
      </a>
    </div>
  );
};
