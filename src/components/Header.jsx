import * as React from 'react';
import { Container } from '.';
import { MenuIcon } from '@heroicons/react/outline';

const navLinks = [
  {
    title: 'Program',
    href: '#program',
  },
  {
    title: 'Produk',
    href: '#product',
  },
  {
    title: 'Lokasi',
    href: '#location',
  },
];

function Nav() {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex gap-1">
        {navLinks.map((navLink, idx) => (
          <li key={idx}>
            <a
              href={navLink.href}
              className="text-gray-800 text-base font-semibold hover:bg-indigo-50 rounded-md px-3 py-2"
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavMobile() {
  const refMenu = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);
  const onClose = () => setOpen(!isOpen);

  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && refMenu.current && !refMenu.current.contains(e.target)) {
        setOpen(!isOpen);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden relative">
      <button onClick={onClose}>
        <MenuIcon className="h-8 w-8 text-gray-800" />
      </button>
      {isOpen && (
        <div
          ref={refMenu}
          className="absolute right-0 mt-8 w-32 rounded-md shadow-lg bg-white"
        >
          <nav className="py-2 px-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((navLink, idx) => (
                <li key={idx} className="flex ">
                  <a
                    href={navLink.href}
                    onClick={onClose}
                    className="text-gray-700 text-base font-medium hover:text-gray-800 hover:bg-indigo-50 rounded-md px-1.5 py-1"
                  >
                    {navLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex w-full bg-white py-4">
      <Container>
        <div className="flex w-full justify-between items-center">
          <img
            src="https://res.cloudinary.com/dztdpfos7/image/upload/v1644734528/logo_qwjlwx.png"
            alt="logo"
            width={177}
            height={48}
          />
          <Nav />
          <NavMobile />
        </div>
      </Container>
    </header>
  );
}
