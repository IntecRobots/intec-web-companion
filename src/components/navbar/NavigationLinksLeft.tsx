import { BsCup } from "react-icons/bs";
import { GoPeople } from "react-icons/go";

// NavigationLinks.js
export const NavigationLinksLeft = () => {
    return (
      <div className="flex items-center space-x-6">
        <a href="/home/visit" className="hover:text-gray-300">
          <GoPeople size="1.5em"/>
        </a>
        <a href="#salas" className="hover:text-gray-300">
          <BsCup size="1.5em"/>
        </a>
      </div>
    );
  };
  