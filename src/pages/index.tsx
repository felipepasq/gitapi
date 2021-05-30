import styles from '../styles/Home.module.scss'
import { Button } from 'react-bootstrap'
import Link from 'next/link';
import React from 'react';




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
              console.log(login);
            </form>
        </div>
      </div>
    </div>
  )
}






async function getContent() {
  try {
    const response = await fetch('https://api.github.com/users/felipepasq');
    const data = await response.json()

    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
}

getContent()