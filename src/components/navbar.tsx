import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
  },
  {
    name: "Account",
    icon: UserCircleIcon,
  },
  {
    name: "Docs",
    icon: CommandLineIcon,
    href: "https://www.material-tailwind.com/docs/react/installation",
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
      <a href={href || "#"} className="login-button flex items-center gap-2">
        <span className="span-mother">
          {text.map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </span>
        <span className="span-mother2">
          {text.map((char, i) => (
            <span key={i}>{char}</span>
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
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="https://www.material-tailwind.com"
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold"
        >
          Subhash Interior
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text">Sign In</Button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color="gray">blocks</Button>
          </a>
        </div>
<style jsx global>{`
.login-button {
  font-weight: bold;
  color: #3653f8;
  cursor: pointer;
  display: flex;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}

.login-button .span-mother,
.login-button .span-mother2 {
  display: flex;
  overflow: hidden;
}

.login-button .span-mother span {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-button .span-mother2 {
  position: absolute;
}

.login-button .span-mother2 span {
  transform: translateY(-1.2em);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover Effect */
.login-button:hover .span-mother span {
  transform: translateY(1.2em);
}

.login-button:hover .span-mother2 span {
  transform: translateY(0);
}

/* Delay each character - smoother progression */
.login-button span:nth-child(1) { transition-delay: 0s; }
.login-button span:nth-child(2) { transition-delay: 0.05s; }
.login-button span:nth-child(3) { transition-delay: 0.1s; }
.login-button span:nth-child(4) { transition-delay: 0.15s; }
.login-button span:nth-child(5) { transition-delay: 0.2s; }
.login-button span:nth-child(6) { transition-delay: 0.25s; }
.login-button span:nth-child(7) { transition-delay: 0.3s; }
.login-button span:nth-child(8) { transition-delay: 0.35s; }
`}</style>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
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
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text">Sign In</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
