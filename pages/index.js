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
        <div className={styles.slider }>
        
        </div>
        <div>
          <h1>
            Serviços
          </h1>
        </div>
        <div className={styles.services}>
          <section className={styles.section}>
              <div className={styles.card}> 
                <div className={styles.cardImage}>
                  imagem
                </div>
                <div className={styles.cardText}>
                  <h3>
                    Martelinho de Ouro
                  </h3>
                  <ul>
                    <li>
                      Vincos
                    </li>
                    <li>
                      Chuva de Granizo
                    </li>
                    <li>
                      Amassados pequeno e grande porte
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.card}> 
                <div className={styles.cardImage}>
                  imagem
                </div>
                <div className={styles.cardText}> 
                  <h3>
                    Funilaria Express
                  </h3>
                  <ul>
                    <li>
                      Retoques
                    </li>
                    <li>
                      Serviços rapidos
                    </li>
                    <li>
                      Pequenos amassados
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.card}> 
                <div className={styles.cardImage}>
                  imagem
                </div>
                <div className={styles.cardText}>
                  <h3>
                    Polimento
                  </h3>
                  <ul>
                    <li>
                      Polimento geral
                    </li>
                    <li>
                      Polimento farol
                    </li>
                    <li>
                      Remoção de riscos
                    </li>
                  </ul>
                </div>
              </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <div>
            <h1>
              Endereço
            </h1>
            <ul>
              <li>
                Rua central, 530 - <bold>Cep: 01230-032</bold>
              </li>
            </ul>
          </div>
          <div>
            <h1>
              Contato
            </h1>
            <ul>
              <li>
                Tel: (11)4152-3040
              </li>
              <li>
                Cel: (11)9.8833-0455
              </li>
              <li>
                suaoficina@gmail.com
              </li>
            </ul>
          </div>
          <div> 
            <h1>
              Atendimento
            </h1>
            <ul>
              <li>
                Seg - Sex: 08hr00 - 18hr00
              </li>
              <li>
                Sab: 08hr00 - 13hr00
              </li>
              <li>
                Dom - Feriado: Fechado
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>twitter</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
