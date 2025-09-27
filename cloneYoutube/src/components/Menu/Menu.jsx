import { useState } from "react"
import Fitro from "../Fitro/FItro"
import styles from "./Menu.module.scss"
import FitrosMenu from "../FitrosMenu/FitrosMenu"

function Menu({ isOpen, toggleMenu }) {
  return (
    <aside className={styles.navegacao}>
      <section className={styles.containerPesquisar}>
        <form action="" className={styles.pesquisas}>
          <section className={styles.logoContainer}>
            <button type="button" className={styles.hambuguer} onClick={toggleMenu}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <abbr title="Página inicial do Youtube" className={styles.img_Youtube}>
              <a href="http://" target="_self" rel="noopener noreferrer">
                <img src="image/Youtube.png" alt="Youtube" />
              </a>
            </abbr>
          </section>

          <section className={styles.barraDePesquisar}>
            <input type="text" placeholder="Pesquisar" className={styles.procurar} />
            <abbr title="Pesquisar">
              <button type="submit" className={`${styles.btn_pesquisa}`}>
                <span className="material-symbols-outlined">search</span>
              </button>
            </abbr>
            <button type="button" className={`rounded-circle ${styles.btnAudio}`}>
              <span className="material-symbols-outlined">mic</span>
            </button>
          </section>

          <section className={styles.mais}>
            <button type="button" className={`rounded-4 ${styles.btn_criar}`}>
              <span className="material-symbols-outlined">add_circle</span>Criar
            </button>
            <abbr title="Notificações">
              <button type="button" className={`rounded-circle ${styles.btnNotificações}`}>
                <span className="material-symbols-outlined">notifications</span>
              </button>
            </abbr>
            <button type="button" className={`rounded-4 ${styles.btnPerfil}`}>
              <img src="image/richard.jpg" alt="https://www.linkedin.com/in/richard-moraes-souza/" />
            </button>
          </section>
        </form>
      </section>

      <div className={styles.containerFitros}>
        {isOpen && (
          <section
            aria-label="Menu principal"
            className={`${styles.menu} ${isOpen ? styles.menuAtivo : ""}`}
          >
            <FitrosMenu />
            <hr />
            <footer className="p-1">
              <p>
              © 2025 Google LLC — Este é um projeto acadêmico/experimental criado apenas para fins de estudo. Não é afiliado ao Google ou YouTube.
              </p>
              <p>© 2025 Google LLC</p>
              <div className="p-5"></div>
            </footer>
          </section>
        )}

        <section className={styles.fitrosNavegacao}>
          <Fitro />
        </section>
      </div>
    </aside>
  )
}

export default Menu;
