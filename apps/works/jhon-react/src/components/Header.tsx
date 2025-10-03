import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="w-full mb-6 sm:mb-20">
      <div className="max-w-[1042px] mx-auto p-5 sm:p-7 flex justify-end-safe">
        <div
          className={`${
            open ? 'left-0' : '-left-full'
          } absolute top-0 sm:static flex w-full sm:w-auto transition-all duration-300`}
        >
          <nav className="h-screen w-3xs sm:w-auto sm:h-auto bg-white">
            <ul className="flex flex-col sm:flex-row gap-8 text-xl font-medium p-8 sm:p-0">
              <li>
                <NavLink to="/" onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/works" onClick={() => setOpen(false)}>
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={() => setOpen(false)}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" onClick={() => setOpen(false)}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>

          <div
            onClick={() => setOpen(!open)}
            className={`${
              open ? 'left-0' : '-left-full'
            } bg-gray-600/30 w-full sm:w-auto`}
          />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8 flex flex-col justify-center items-center sm:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              open ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black my-1 transition-opacity duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              open ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>
    </header>
  );
}
