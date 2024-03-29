import React from 'react'
import styles from "./backgroundvideoplayer.module.css";
const BackgroundVideoPlayer = () => {
  return (
    <main className={styles.main}>
    <div className={styles.contents}>
        <h1>deep blue cinematics</h1>
        <div className={styles.buttons}>
            <button>our work</button>
            <button>our story</button>
        </div>
    </div>
    <video
        src="./sunsetwater.mp4"
        autoPlay
        muted
        loop
        className={styles.video}
    />
</main>
  )
}

export default BackgroundVideoPlayer