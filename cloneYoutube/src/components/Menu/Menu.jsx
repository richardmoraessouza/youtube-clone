import { useState } from "react"
import Fitro from "../Fitro/FItro"
import styles from "./Menu.module.scss"
function Menu() {
  const [modal, setModal] = useState(false)
  const modal_menu = () => {
    setModal(!modal)
  }
  
    return (
        <aside className={styles.navegacao}>
            <section className={styles.containerPesquisar}>
               <form action="" className={styles.pesquisas}>
                <section className={styles.logoContainer}>
                 <button type="button" className={styles.hambuguer} onClick={modal_menu}>
                 <span class="material-symbols-outlined">menu</span>
                 </button>
                  <abbr title="Página inicial do Youtube" className={styles.img_Youtube}>
                      <a href="http://" target="_self" rel="noopener noreferrer">
                        <img src="../image/Youtube.png" alt="Youtube" /></a>
                    </abbr>
                </section>

                 <section className={styles.barraDePesquisar}>
                  <input type="text" placeholder="Pesquisar" className={styles.procurar}/>
                  <abbr title="Pesquisar"><button type="submit" className={`${styles.btn_pesquisa}`}><span class="material-symbols-outlined">search</span></button></abbr>
                  <button type="button" className={`rounded-circle ${styles.btnAudio}`} ><span class="material-symbols-outlined">mic</span></button>
                 </section>

               <section className={styles.mais}>
                 <button type="button" className={`rounded-4 ${styles.btn_criar}`}><span class="material-symbols-outlined">add_circle</span>Criar</button>
                  <abbr title="Notificações"><button type="button" className={`rounded-circle ${styles.btnNotificações}`}><span class="material-symbols-outlined">notifications</span></button></abbr>
                  <button type="button" className={`rounded-4 ${styles.btnPerfil}`}>
                    <img src="/image/richard.jpg" alt="https://www.linkedin.com/in/richard-moraes-souza/" />
                  </button>
               </section>
               </form>
            </section>

            <section className={styles.fitrosNavegacao}>
              <Fitro/>
           </section>

           {modal && (
            <section aria-label="Menu principal" className={styles.menu}>
                <nav>
                  <section>
                    <ul>
                      <li><a href=""><span className="material-symbols-outlined"> home</span><span>Início</span></a></li>
                      <li><a href=""> <span className="material-symbols-outlined">play_circle</span><span>Shorts</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">subscriptions</span><span>Inscrições</span></a></li>
                    </ul>
                  </section>

                  <hr />
                  <section>
                    <ul>
                      <li><a href=""><span className="material-symbols-outlined">history</span><span>Histórico</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">playlist_play</span><span>Playlist</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">video_library</span><span>Seus Vídeos</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">watch_later</span><span>Assistir mais tarde</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">thumb_up</span><span>Vídeos com "gostei"</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">download</span><span>Download</span></a></li>
                    </ul>
                  </section>
                  
                  <hr />
                  <section>
                    <ul>
                      <li><a href="">Curso em vídeo</a></li>
                      <li><a href="">JJ</a></li>
                      <li><a href="">YouTube</a></li>
                      <li><a href="">Dev em dobro</a></li>
                      <li><a href="">Lira</a></li>
                      <li><a href="">Alanzoka</a></li>
                    </ul>
                  </section>
                  
                  <hr />
                  <section>
                    <ul>
                      <li><a href=""><span className="material-symbols-outlined">settings</span><span>Configurações</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">flag</span><span>Histórico de denúncia</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined"> help</span><span>Ajuda</span></a></li>
                      <li><a href=""><span className="material-symbols-outlined">feedback</span><span>Enviar feedback</span></a></li>
                    </ul>
                  </section>

                </nav>
                <hr />
                <section>
                  <p>
                    Sobre Imprensa Direitos autorais Entre em contato Criadores de conteúdo
                    Publicidade Desenvolvedores<br></br>Termos Privacidade Política e segurança Como funciona o YouTube Testar os novos recursos
                  </p>
                </section>

                <footer className={`p-1`}>
                    <p>
                        © 2025 Google LLC
                    </p>
                </footer>
            </section>
           )}
      </aside>
      
    )
}
export default Menu