import React from "react";
import Image from "next/image";
import { Buttons } from "@/components/settings/Buttons";
import { CheckBoxes } from "@/components/settings/CheckBoxes";
import { OptionsButtons } from "@/components/settings/OptionsButtons";

const Settings: React.FC = () => {

  return (
    <div className="mx-40 my-30">
      <h3 className="p-4 m-4 font-bold text-xl">MENÚ DE OPCIONES</h3>
      <OptionsButtons />
      <CheckBoxes />
      <Buttons />
    </div>
  );
};

export default Settings;
