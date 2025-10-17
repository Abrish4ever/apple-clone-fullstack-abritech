import React from 'react'
// images / icons / logo - sm.png
// images/icons/search-icon-sm.png
// images/icons/cart-sm.png
import logo from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";
import { Link } from 'react-router';
const Header = () => {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                {/* <NavbarList LinkUrl="/mac/" LinkName="Mac" />
                <NavbarList LinkUrl="/iphone/" LinkName="iphone" />
                <NavbarList LinkUrl="/ipad/" LinkName="ipad" />
                <NavbarList LinkUrl="/watch/" LinkName="watch" />
                <NavbarList LinkUrl="/tv/" LinkName="tv" />
                <NavbarList LinkUrl="/Music/" LinkName="Music" />
                <NavbarList LinkUrl="/Support/" LinkName="Support" /> */}
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Mac/">
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/iphone/">
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/ipad/">
                    ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/watch/">
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/tv/">
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Music/">
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="Support">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={searchIcon} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header