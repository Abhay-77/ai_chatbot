import Image from "next/image";
import Link from "next/link";

const NavBar = ({
  navItems,
}: {
  navItems?: { name: string; href: string }[];
}) => {
  return (
    <>
      <nav className="bg-black w-screen h-14 sm:h-20 flex text-white items-center px-4 sm:px-8 justify-between">
        <Image
          src="/favicon.ico"
          alt="icon"
          className="h-full block sm:hidden"
          width={60}
          height={60}
        />
        <Image
          src="/favicon.ico"
          alt="icon"
          className="h-full hidden sm:block"
          width={80}
          height={80}
        />
        <div className="flex items-center gap-8">
          {navItems &&
            navItems.map((element) => (
              <Link
                href={element.href}
                className="hover:underline cursor-pointer text-xl font-thin"
                key={element.name}
              >
                {element.name}
              </Link>
            ))}
        </div>
      </nav>
    </>
  );
};
export default NavBar;
