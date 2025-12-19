import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Home",
    href: "/",
    isIcon: true,
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const text = String(children).split("");

  return (
    <li>
      <a href={href || "#"} className="nav-link-animated">
        <span className="span-mother">
          {text.map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </span>
        <span className="span-mother2">
          {text.map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </span>
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar 
      shadow={false} 
      fullWidth 
      className="border-0 sticky top-0 z-50"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="/"
          className="flex items-center"
          aria-label="Home"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-900">
            <path d="M8 32V8H24L32 16V32M24 8V16H32" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </a>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>

        <style jsx global>{`
          /* Animated Navigation Links - Same as Footer */
          .nav-link-animated {
            font-weight: 600;
            color: #232528;
            cursor: pointer;
            display: flex;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 14px;
            letter-spacing: 0.5px;
            transition: color 0.3s ease;
          }

          .nav-link-animated .span-mother,
          .nav-link-animated .span-mother2 {
            display: flex;
            overflow: hidden;
          }

          .nav-link-animated .span-mother span {
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link-animated .span-mother2 {
            position: absolute;
            color: #D2B48C;
          }

          .nav-link-animated .span-mother2 span {
            transform: translateY(-1.2em);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Hover Effect */
          .nav-link-animated:hover .span-mother span {
            transform: translateY(1.2em);
          }

          .nav-link-animated:hover .span-mother2 span {
            transform: translateY(0);
          }

          /* Delay each character for smooth wave effect */
          .nav-link-animated .span-mother span:nth-child(1),
          .nav-link-animated .span-mother2 span:nth-child(1) {
            transition-delay: 0s;
          }
          .nav-link-animated .span-mother span:nth-child(2),
          .nav-link-animated .span-mother2 span:nth-child(2) {
            transition-delay: 0.05s;
          }
          .nav-link-animated .span-mother span:nth-child(3),
          .nav-link-animated .span-mother2 span:nth-child(3) {
            transition-delay: 0.1s;
          }
          .nav-link-animated .span-mother span:nth-child(4),
          .nav-link-animated .span-mother2 span:nth-child(4) {
            transition-delay: 0.15s;
          }
          .nav-link-animated .span-mother span:nth-child(5),
          .nav-link-animated .span-mother2 span:nth-child(5) {
            transition-delay: 0.2s;
          }
          .nav-link-animated .span-mother span:nth-child(6),
          .nav-link-animated .span-mother2 span:nth-child(6) {
            transition-delay: 0.25s;
          }
          .nav-link-animated .span-mother span:nth-child(7),
          .nav-link-animated .span-mother2 span:nth-child(7) {
            transition-delay: 0.3s;
          }
          .nav-link-animated .span-mother span:nth-child(8),
          .nav-link-animated .span-mother2 span:nth-child(8) {
            transition-delay: 0.35s;
          }
          .nav-link-animated .span-mother span:nth-child(9),
          .nav-link-animated .span-mother2 span:nth-child(9) {
            transition-delay: 0.4s;
          }
          .nav-link-animated .span-mother span:nth-child(10),
          .nav-link-animated .span-mother2 span:nth-child(10) {
            transition-delay: 0.45s;
          }
        `}</style>
        
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;