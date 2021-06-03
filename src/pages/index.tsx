import styles from '../styles/Home.module.scss'
import { Button } from 'react-bootstrap'
import Link from 'next/link';
import React from 'react';
import { api } from '../services/api'



type User = {
  login: string;
}

export default function Home() {

  return (
    <div>

      <div className={styles.background}>
        <img className={styles.image} src="/github.svg" alt="Github Logo" />

        <div className={styles.container}>

          <form>
            <input className={styles.user} type="text" />

            <Link href={`/profile/`}>
              <Button className={styles.submit}
                variant="primary"
                type="submit"
              >

                Entrar 🢂

              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}






