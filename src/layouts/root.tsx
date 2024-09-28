import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`inter relative min-h-screen`}>
      <div className="flex">
        <header className="fixed flex w-full bg-black py-4 text-white opacity-80">
          <div className="container mx-auto">
            <div className="mx-auto w-full">
              <Link href="/" passHref>
                <Image
                  src="/pokemon-logo.png"
                  alt="Pokémon Logo"
                  width={108.51}
                  height={40}
                  className="mx-auto"
                />
              </Link>
            </div>

            <nav className="mt-10px flex w-full justify-center">
              <Link href="/" passHref className="px-12 hover:underline">
                Home
              </Link>
              <Link href="/pokedex" passHref className="px-12 hover:underline">
                Pokedex
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
