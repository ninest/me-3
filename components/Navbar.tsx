import { useTheme } from "@/lib/theme";
import Icon from "./Icon";
import SmartLink from "./SmartLinks";

const Navbar = () => {
  // const { theme, setTheme } = useTheme();
  const { currentTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="z-50 sticky top-0 bg-light opacity-80 p-md space-x-lg flex justify-between font-display">
        <SmartLink href="/" className="text-lg text-gray-dark">
          <span className="block md:hidden">P. Kabra</span>
          <span className="hidden md:block">Parth Kabra</span>
        </SmartLink>
        <nav className="">
          <ul className="flex items-baseline space-x-base text-gray">
            <li>
              <SmartLink
                href="/blog"
                className="ghost"
                activeClassName="font-bold"
              >
                Blog
              </SmartLink>
            </li>
            <li>
              <SmartLink
                href="/about"
                className="ghost"
                activeClassName="font-bold"
              >
                About
              </SmartLink>
            </li>
            <li>
              <SmartLink
                href="/contact"
                className="ghost"
                activeClassName="font-bold"
              >
                Contact
              </SmartLink>
            </li>

            <li>
              <button onClick={toggleTheme}>
                {currentTheme === "light" ? (
                  <Icon id="moon" size="xxxs" />
                ) : (
                  <Icon id="sun" size="xxxs" />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
