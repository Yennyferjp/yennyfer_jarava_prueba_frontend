import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

function Header() {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [subSubMenuVisible, setSubSubMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const toggleSubSubMenu = () => {
    setSubSubMenuVisible(!subSubMenuVisible);
  };

  const closeMenu = () => {
    setSubMenuVisible(false);
    setSubSubMenuVisible(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}><a href="#">Home</a></li>
          <li className={styles.menuItem} ref={menuRef}>
            <a href="#" onClick={toggleSubMenu}>
              Pages
            </a>
            {subMenuVisible && (
              <ul className={styles.submenu}>

                <li className={styles.submenuItem}><a href="#">Page 1</a></li>
                <li className={styles.menuItemSpacer}></li>

                <li className={styles.submenuItem}><a href="#">Page 2</a></li>
                <li className={styles.menuItemSpacer}></li>

                <li className={styles.submenuItem}>

                  <a href="#" onClick={toggleSubSubMenu}>
                    Page 3            &#9660;
                  </a>
                  <li className={styles.menuItemSpacer}></li>

                  {subSubMenuVisible && (
                    <ul className={styles.subsubmenu}>
                      <li className={styles.submenuItem1}><a href="#">Item 1</a></li>
                      <li className={styles.menuItemSpacer}></li>

                      <li className={styles.submenuItem1}><a href="#">Item 2</a></li>
                      <li className={styles.menuItemSpacer}></li>

                      <li className={styles.submenuItem1}><a href="#">Item 3</a></li>
                      <li className={styles.menuItemSpacer}></li>

                    </ul>
                  )}
                </li>

              </ul>
            )}
          </li>

          <li className={styles.menuItem}><a href="#">About</a></li>
          <li className={styles.menuItem}><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
