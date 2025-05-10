import HeaderNavbar from "@/components/header-navbar";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <>
      <header className="px-24 pt-8 flex items-center justify-between">
        <Logo />

        <HeaderNavbar />
      </header>
    </>
  );
}
