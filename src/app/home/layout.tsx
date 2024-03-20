import { NavigationLinksLeft } from "@/components/navbar/NavigationLinksLeft";
import { CentralImage } from "@/components/navbar/CentralImage";
import { NavigationLinksRight } from "@/components/navbar/NavigationLinksRight";
import { SearchBar } from "@/components/navbar/SearchBar";
import { LogoImage } from "@/components/navbar/LogoImage";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <header className="relative flex items-center justify-center p-4 text-white w-full"> {/** border-b border-gray-700 mb-5 */}
        <LogoImage />
        <div className="flex items-center space-x-4">
          <NavigationLinksLeft />
          <CentralImage />
          <NavigationLinksRight />
        </div>
        <SearchBar />
        <hr className="border-b border-gray-700 mb-5"/>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
