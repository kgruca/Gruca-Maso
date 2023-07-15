import Link from "next/link";

const Header = () => (
  <nav className="sticky top-0 flex h-12 flex-row flex-nowrap items-center justify-between p-6">
    <div
      className="mr-6 flex w-full shrink-0 items-center justify-between 
        text-amber-50"
    >
      <div className="flex w-full flex-row justify-center text-6xl mt-20 uppercase">
        <Link href="/">
          <h1>Gruca & Maso</h1>
        </Link>
      </div>
      <div className="flex flex-row flex-nowrap gap-4">
        <Link href="/login">Login</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  </nav>
);

export default Header;
