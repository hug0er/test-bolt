import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const handleSearch = () => {
    console.log("Search clicked");
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="pokedex relative mt-24 ">
          <img src="images/pokedex.svg" alt="Pokedex" className="" />
          <div className="search-btn flex items-center justify-center">
            <button className="fnt-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="vm-btn flex items-center justify-center">
            <Link href="/pokedex">
              <button className="fnt-btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
