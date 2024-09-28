import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header */}
      <header className="w-full bg-black/70 py-4 text-base text-white">
        <div className="container mx-auto flex flex-col items-center">
          <Link href="/" passHref>
            <Image
              src="/pokemon-logo.png"
              alt="Pokémon Logo"
              width={108.51}
              height={40}
              className="mx-auto"
            />
          </Link>

          <nav className="mt-2 flex justify-center">
            <Link href="/" passHref className="px-4 hover:underline">
              Home
            </Link>
            <Link href="/pokedex" passHref className="px-4 hover:underline">
              Pokedex
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1  ">{children}</main>
    </div>
  );
}
