import Image from "next/image";

export const LogoImage = () => {
    return (
      <div className=" absolute left-8 justify-center ">
        <a href="/home">
        <Image
          src="/images/intecrobots_dark.png" 
          alt="Profile"
          width={120} 
          height={80} 
          className="object-cover"
        />
        </a>
      </div>
    );
  };