// CentralImage.js
import Image from "next/image";

export const CentralImage = () => {
  return (
    <div className="rounded-full border-2 border-white w-16 h-16 flex items-center justify-center overflow-hidden">
      <Image
        src="/images/errorRobot.png" 
        alt="Profile"
        width={64} 
        height={64} 
        className="object-cover"
      />
    </div>
  );
};
