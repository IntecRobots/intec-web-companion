import { NavigationLinksLeft } from "@/components/navbar/NavigationLinksLeft";
import { CentralImage } from "@/components/navbar/CentralImage";
import { NavigationLinksRight } from "@/components/navbar/NavigationLinksRight";
import { SearchBar } from "@/components/navbar/SearchBar";
import { LogoImage } from "@/components/navbar/LogoImage";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative flex items-center justify-center p-4 bg-gray-800 text-white w-full">
        <LogoImage />
        {/* Contenedor central con enlaces y la imagen, centrado */}
        <div className="flex items-center space-x-4">
          <NavigationLinksLeft />
          <CentralImage />
          <NavigationLinksRight />
        </div>

        {/* Barra de búsqueda con posicionamiento absoluto a la derecha */}
        <SearchBar />
      </header>
      
      {/* Contenido principal */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
  }