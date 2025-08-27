import { useRef } from "react";
import styles from "./Fitro.module.scss";
import Fitros from "./Fitros.json";

function Fitro() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.arrowLeft} onClick={scrollLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#fff">
         <path d="M15.4 7.4 10.8 12l4.6 4.6L14 18l-6-6 6-6Z"/>
        </svg>

      </button>

      <section
        ref={scrollRef}
        className={`d-flex row flex-nowrap overflow-scroll gap-2 ${styles.fitros_container}`}
      >
        {Fitros.map((item, index) => (
          <div
            className={`d-flex justify-content-center rounded ${styles.fitro_de_navegação}`}
            key={index}
          >
            <a href="#" target="_self" rel="noopener noreferrer">
              {item}
            </a>
          </div>
        ))}
      </section>

      <button className={styles.arrowRight} onClick={scrollRight}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#fff">
        <path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6Z"/>
        </svg>
      </button>
    </div>
  );
}

export default Fitro;
