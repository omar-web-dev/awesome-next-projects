import Desktop from "./Desktop";

const Header = () => {
  return (
    <>
      <nav
        className={`z-50 w-full px-3 lg:relative py-4 bg-gray-100 shadow-lg`}
      >
        <div className="max-w-[1200px] font-Cuprum py-3  text-black mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo Here */}
            <h1 className="">Logo</h1>
            <div>
              {/* Desktop Menu */}
              <Desktop />
              {/* MobileMenu */}
              <div className="transition-transform duration-1000 ease-in">
                {/* <MobileMenu navItems={navItems} /> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
