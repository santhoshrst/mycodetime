import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <header className={`navbar ${open ? 'menu-open' : ''}`}>
      <div className="logo">
        <Link to="/">⚡ MyCodeTime</Link>
      </div>

      <button
        type="button"
        className={`menu-toggle ${open ? 'active' : ''}`}
        onClick={toggle}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? 'nav-menu active' : 'nav-menu'}>
        <NavLink to="/" onClick={close}>
          Home
        </NavLink>
        <NavLink to="/compiler" onClick={close}>
          Compiler
        </NavLink>
        <NavLink to="/leaderboard" onClick={close}>
          Leaderboard
        </NavLink>
        <NavLink to="/create-contest" onClick={close}>
          Create Contest
        </NavLink>
        <button className="login-btn" type="button">
          Login
        </button>
      </nav>
    </header>
  );
}


