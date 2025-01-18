import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";
import { useEffect } from "react";

export function Header() {
  const { theme } = useTheme();

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.add("slide-in");
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 transition-transform duration-500 ease-in-out transform -translate-x-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <h1
            className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} transition-colors duration-500 ease-in-out`}
          >
            SKYCAST
          </h1>
        </Link>

        <div className="flex gap-4">
          <CitySearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}