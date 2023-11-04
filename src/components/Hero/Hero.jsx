import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Revolution starts with new shoes</h1>
        <p>
          This website has some subtext that goes here under the main title. It's a smaller font and
          the color is lower contrast
        </p>
        <button>Start Shopping</button>
      </div>
      <div className={styles.heroImg}>this is a placeholder for an image</div>
    </section>
  )
}

export default Hero