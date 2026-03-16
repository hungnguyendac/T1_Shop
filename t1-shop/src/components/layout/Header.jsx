"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState([false, false, false]);
  const toggleMenu = (index) => {
    const newOpen = [false, false, false];
    newOpen[index] = !open[index]; 
    setOpen(newOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.hdBanner}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <p>GLOBAL/USD</p>
          </div>
          <div className={styles.right}>
            <a className={styles.userLink} href="#">
              LOGIN
            </a>
            <span className={styles.slash}>/</span>
            <a className={styles.userLink} href="#">
              JOIN
            </a>
            <span className={styles.slash}>/</span>
            <a className={styles.userLink} href="#">
              ORDER
            </a>
          </div>
        </div>
      </div>
      <div className="app-container">
        <div className={styles.hdWrap}>
          <div className={styles.menuBars}>
            <svg
              width="24"
              height="19.764"
              viewBox="0 0 24 19.764"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.058 16.471H0.469v2.824h19.764a2.822 2.822 0 0 0 2.824 -2.824m0 -8H0.469v2.824h19.764a2.822 2.822 0 0 0 2.824 -2.824m0 -8H0.469v2.824h19.764A2.822 2.822 0 0 0 23.058 0.47"
                fill="white"
              ></path>
            </svg>
          </div>
          <nav className={styles.mainNav}>
            <div className={styles.memberShip}>
              <p className={styles.memberShipText}>GLOBAL/USD</p>
              <Link className={styles.memberLink} href="#">
                Login
                <span className={styles.memberArrow}></span>
              </Link>
            </div>
            <div className={styles.menu}>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <Link className={styles.itemLink} href="#">
                    NEW
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link className={styles.itemLink} href="#">
                    BEST
                  </Link>
                </li>
                <li
                  className={`${styles.menuItem} ${open[0] ? styles.active : ""}`}
                >
                  <Link className={styles.itemLink} href="#">
                    SHOP
                  </Link>
                  <span
                    className={styles.arrowMenu}
                    onClick={() => toggleMenu(0)}
                  ></span>
                  <ul className={styles.subMenu}>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        ALL
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        TEAM KIT
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        COLLECTION
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        COLLABORATION
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        SALE
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`${styles.menuItem} ${open[1] ? styles.active : ""}`}
                >
                  <Link className={styles.itemLink} href="#">
                    LEGACY
                  </Link>
                  <span
                    className={styles.arrowMenu}
                    onClick={() => toggleMenu(1)}
                  ></span>
                  <ul className={styles.subMenu}>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        T1 2025 WORLDS COLLECTION
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        T1 2024 WORLDS COLLECTION
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        T1 2023 WORLDS COLLECTION
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        APPAREL
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        GIFTS & ACCESSORIES
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`${styles.menuItem} ${open[2] ? styles.active : ""}`}
                >
                  <Link className={styles.itemLink} href="#">
                    COMMUNITY
                  </Link>
                  <span
                    className={styles.arrowMenu}
                    onClick={() => toggleMenu(2)}
                  ></span>
                  <ul className={styles.subMenu}>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        NOTICE
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        EVENT
                      </Link>
                    </li>
                    <li className={styles.subMenuLink}>
                      <Link className={styles.subLink} href="#">
                        REVIEW
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.menuItem}>
                  <Link className={styles.itemLink} href="#">
                    Q&A
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={77}
              height={31}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.hdRight}>
            <div className={styles.search}>
              <div className={styles.searchTS}>
                <p className={styles.tSearch}>SEARCH</p>
                <input
                  className={styles.sInput}
                  type="text"
                  placeholder="Pre-Order"
                />
              </div>
              <span className={styles.hIcon}>
                <svg
                  className={styles.iconSearch}
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path
                    d="M17.685,19.132a7.2,7.2,0,1,1,1.445-1.445l-1.445,1.442Zm1.494,1.576a9.366,9.366,0,1,1,1.527-1.527l4.949,4.948a1.081,1.081,0,1,1-1.527,1.527l-4.949-4.948Z"
                    transform="translate(-3.999 -4)"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <svg
              className={styles.iconSearchMobile}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 22 22"
              fill="currentColor"
            >
              <path
                d="M17.685,19.132a7.2,7.2,0,1,1,1.445-1.445l-1.445,1.442Zm1.494,1.576a9.366,9.366,0,1,1,1.527-1.527l4.949,4.948a1.081,1.081,0,1,1-1.527,1.527l-4.949-4.948Z"
                transform="translate(-3.999 -4)"
                fillRule="evenodd"
              ></path>
            </svg>
            <svg
              viewBox="0 0 22 23"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width={24}
              height={22}
              className={styles.iconHeart}
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
              className={styles.iconBag}
            >
              <path
                d="M19.3485 3.75001H14.9147C14.8766 1.675 12.9074 0 10.4936 0C8.07988 0 6.12343 1.675 6.07261 3.75001H1.63884L0 20H21L19.3612 3.75001H19.3485ZM10.4936 1.87501C11.853 1.87501 12.9582 2.71251 13.0091 3.75001H7.99095C8.04176 2.71251 9.14697 1.87501 10.5063 1.87501H10.4936ZM2.09618 18.1251L3.35391 5.62502H17.6207L18.8785 18.1251H2.08349H2.09618Z"
                fill="currentColor"
              />
            </svg>
            <div className={styles.multiShop}>
              <span className={styles.globalCurrent}>
                GL
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
