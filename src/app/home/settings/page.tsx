import React from "react";

import { CheckBoxes } from "@/components/settings/CheckBoxes";
import { OptionsButtons } from "@/components/settings/OptionsButtons";
import LogoutSession from "@/components/login-page/LogoutSession";
import { Buttons } from "@/components/settings/Buttons";
import { SessionProvider } from "next-auth/react";

const Settings: React.FC = () => {

  return (
    <div className="mx-40 my-30">
      <h3 className="p-4 m-4 font-bold text-xl">MENÚ DE OPCIONES</h3>
      <OptionsButtons />
      <CheckBoxes />
      <Buttons />
      <div className="p-4 text-center text-gray-300">© 2024 Intec Robots </div>
    </div>
  );
};

export default Settings;
