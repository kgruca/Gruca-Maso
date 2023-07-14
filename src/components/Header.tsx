import Link from "next/link";

const Header = () => (
  <nav className="sticky top-0 flex h-12 flex-row flex-nowrap items-center justify-between p-6">
    <div
      className="mr-6 flex w-full flex-shrink-0 items-center justify-between 
        text-amber-50"
    >
      <Link href="/">
        <h1>Gruca & Maso</h1>
      </Link>
      <div className="flex flex-row flex-nowrap gap-4">
        <Link href="/login">Login</Link>
        <Link href="/cart">Shopping Cart</Link>
      </div>
    </div>
  </nav>
);

export default Header;
