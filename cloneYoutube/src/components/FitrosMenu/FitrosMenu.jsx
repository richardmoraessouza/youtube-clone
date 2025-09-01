import React, { useState } from "react";
import Fitro from "./Fitros.json";
import styles from "./FitrosMenu.module.scss";

function FitrosMenu() {
  const breakpoints = [2, 9, 17, 27];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <nav>
      <ul className={styles.menuList}>
        {Fitro.map((item, index) => (
          <React.Fragment key={index}>
            <li className={styles.menuItem}>
              <a
                href={item.link}
                className={selectedIndex === index ? styles.selected : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedIndex(index);
                }}
              >
                {item.icon && (
                  <span className="material-symbols-outlined">{item.icon}</span>
                )}

                {item.imagens && (
                  <img
                    src={item.imagens}
                    className={styles.canais}
                    alt={item.texto}
                  />
                )}

                {item.texto}
              </a>
            </li>
            {breakpoints.includes(index) && <hr className={styles.divider} />}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default FitrosMenu;
