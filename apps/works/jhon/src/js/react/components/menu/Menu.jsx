import React, { useEffect, useState, useMemo } from "react";
import styles from "./Menu.module.scss";

/**
 * Props:
 * - active: string  — название активного пункта ("Home", "About", ...)
 * - links?: [{ href: string, anchor: string }] — можно передать свои ссылки
 */
export default function Menu({ active = "Home", links }) {
  const [open, setOpen] = useState(false);

  const LINKS = useMemo(
    () =>
      links ?? [
        { href: "#", anchor: "Home" },
        { href: "#", anchor: "About" },
        { href: "#", anchor: "Blog" },
        { href: "#", anchor: "Contacts" },
      ],
    [links]
  );

  // Локируем скролл body при открытом меню (мобильный UX) и чистим за собой
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Закрываем меню при клике вне (на мобильном — по желанию)
  useEffect(() => {
    const onClickDoc = (e) => {
      if (!open) return;
      // если клик не внутри меню и не по иконке
      const menuEl = document.getElementById("menu-root");
      if (menuEl && !menuEl.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClickDoc);
    return () => document.removeEventListener("click", onClickDoc);
  }, [open]);

  const toggle = () => setOpen((s) => !s);

  return (
    <div id="menu-root" className={`${styles.menu} header__menu`}>
      {/* Кнопка-бургер */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={`${styles.iconMenu} ${open ? styles.iconMenu_open : ""} icon-menu`}
        onClick={toggle}
        data-fls-menu
      >
        <span />
      </button>

      {/* Навигация */}
      <nav className={styles.menu__body} data-open={open ? "true" : "false"}>
        <ul className={styles.menu__list}>
          {LINKS.map((item) => {
            const isActive = active === item.anchor;
            return (
              <li className={styles.menu__item} key={item.anchor}>
                <a
                  href={item.href}
                  className={`${styles.menu__link} ${isActive ? styles.menu__linkActive : ""} menu__link`}
                >
                  {item.anchor}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
