import Link from "next/link";

export default ({navItems}:{navItems?:{name:string,href:string}[]}) => {
  return (
    <>
      <nav className="bg-black w-screen h-20 flex text-white items-center px-8 justify-between">
        <img src="../favicon.ico" alt="icon" className="h-full" />
        <div className="flex items-center gap-8">
          {navItems && navItems.map((element) => (
            <Link href={element.href} className="hover:underline cursor-pointer text-xl font-thin" key={element.name}>
              {element.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
