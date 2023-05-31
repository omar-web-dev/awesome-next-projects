import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 bg-gray-200 dark:text-gray-300">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Getting started</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link href="#">
              Installation
            </Link>
            <Link href="#">
              Release Notes
            </Link>
            <Link href="#">
              Upgrade Guide
            </Link>
            <Link href="#">
              Using with Preprocessors
            </Link>
            <Link href="#">
              Optimizing for Production
            </Link>
            <Link href="#">
              Browser Support
            </Link>
            <Link href="#">
              IntelliSense
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Core Concepts</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link href="#">
              Utility-First
            </Link>
            <Link href="#">
              Responsive Design
            </Link>
            <Link href="#">
              Hover, Focus, &amp; Other States
            </Link>
            <Link href="#">
              Dark Mode
            </Link>
            <Link href="#">
              Adding Base Styles
            </Link>
            <Link href="#">
              Extracting Components
            </Link>
            <Link href="#">
              Adding New Utilities
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Customization</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link href="#">
              Configuration
            </Link>
            <Link href="#">
              Theme Configuration
            </Link>
            <Link href="#">
              Breakpoints
            </Link>
            <Link href="#">
              Customizing Colors
            </Link>
            <Link href="#">
              Customizing Spacing
            </Link>
            <Link href="#">
              Configuring Variants
            </Link>
            <Link href="#">
              Plugins
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link href="#">
              GitHub
            </Link>
            <Link href="#">
              Discord
            </Link>
            <Link href="#">
              Twitter
            </Link>
            <Link href="#">
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="dark:text-gray-400">
          © Copyright 1986. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
