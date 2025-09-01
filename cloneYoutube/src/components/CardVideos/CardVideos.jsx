import styles from './CardVideos.module.scss';
import videos from './CardVideos.json'

function CardVideos() {
  return (
    <>
    <div className='p-3'></div>
    <section className={styles['videos-container'] }>
      {videos.map((item, index) => (
          <article key={index} className={styles.card}>
            <a href={item.link}>
            <div className={styles.videos}>
             <img src={item.thumbnail} alt="Thumbnail do vídeo" />
            </div>
            <div className={styles.canal}>
                <img src={item.img_canal} alt="Thumbnail do vídeo" />
             <div className={styles.videoInfor}>
                <h3 className={styles.titulo}>
                    {item.title}
                </h3>
                <p className={styles['criador'] }>
                    {item.creator}
                </p>
                <p className={styles.views}>
                    {item.views}
                </p>
             </div>
            </div>
            </a>
          </article>
      ))}
    </section>
    </>

  );
}

export default CardVideos;
