import styles from "./Fitro.module.scss"
import Fitros from "./Fitros.json"
function Fitro() {
    return (
        <>
        <section className="d-flex row flex-nowrap overflow-scroll gap-2">
            {Fitros.map((item, index) => (
                <div className={`d-flex justify-content-center rounded ${styles.fitro_de_navegação}`} key={index}>
                    <a href="#" target="_self" rel="noopener noreferrer">{item}</a>
                </div>
            ))}
        </section>
        
        </>
    )
}
export default Fitro
