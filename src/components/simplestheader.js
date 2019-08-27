import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";
import { Logo } from "@hackoregon/component-library";

const smallerDevicesMaxWidth = "360px";
const maxWidth = "700px";
const minWidth = "701px";
const maxHeight = "600px";

const logoWrapper = css`
  padding: 10px 0px 0px 0px;
`;

const header = css`
   {
    width: 100%;
    position: fixed;
    z-index: 1;
    border-bottom: 1px solid rgba(205, 205, 205, 0.4);
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);

    //   fix at the top of page
    top: 0px;
    padding: 0 1rem 0 1rem;

    display: flex;
    // to have logo on the left and links on the right
    justify-content: space-between;
  }

  @media (max-width: ${maxWidth}) {
    height: 54px;
  }
  @media (min-width: ${minWidth}) and (min-height: ${maxHeight}) {
    height: 72px;
  }
`;

const headerMenu = css`
  list-style: none;
  margin: 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
  li a {
    display: block;
    text-decoration: none;
    color: #48a98a;
  }
  @media (max-width: ${maxWidth}) {
    li a {
      padding: 3px 10px 5px 0;
      font-size: 16px;
    }
  }
  @media (max-width: ${smallerDevicesMaxWidth}) {
    li a {
      padding: 3px 5px 5px 0;
      font-size: 13px;
    }
  }
  @media (min-width: ${minWidth}) {
    li a {
      padding: 15px 15px;
      font-size: 22px;
    }
  }
`;

const SimplestHeader = ({ menu }) => {
  return (
    <header className={header}>
      <div className={logoWrapper}>
        <Link to="/">
          <Logo type="squareLogo" />
        </Link>
      </div>
      <ul className={headerMenu}>
        {menu.map(item => (
          <li>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default SimplestHeader;
