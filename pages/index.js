import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sua Oficina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id={styles.header}>
        <div>
            <nav className={styles.containerMenu}>
              <h1>
                Sua Oficina
              </h1>
              <ul className={styles.menu}>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Fotos</li>
                <li>Contato</li>
              </ul>
            </nav>
          </div>
      </header>

      <main className={styles.main}>
        <div className={styles.slider}>
          <h1>Slider</h1>
        </div>
        <div>
          <h1>
            Serviços
          </h1>
        </div>
        <div>
          <section>
            <div>
              <p>imagem e lista de serviços</p>
            </div>
            <div>
              <p>imagem e lista de serviços</p>
            </div>
            <div>
              <p>imagem e lista de serviços</p>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <ul>
          <ul>
            <h1>Siga-nos</h1>
            <li>facebook</li>
            <li>tweeter</li>
            <li>instagram</li>
          </ul>
          <ul>
            <h1>Atendimento</h1>
            <li>Segunda - sexta</li>
            <li>Sabado</li>
            <li>Dom e Feriados</li>
          </ul>
          <ul>
            <h1>Endereço</h1>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </ul>
      </footer>
    </div>
  )
}
