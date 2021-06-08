
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useReducer } from 'react'
import styles from '../styles/Profile.module.scss'
import { api } from '../services/api'
import { Header } from '../Header'

interface ProfileProps {
    login: string;
    followers: number;
    following: number;
    repositories: number;
    location: string;
    bio: string;
}

export default function Profile(props: ProfileProps) {

    return (
        <div>
            <Header
                login={props.login}
                followers={props.followers}
                following={props.following}
                repositories={props.repositories}
            />


            <div className={styles.wrappper}>
                <div className={styles.sideContainer}>
                    <p className={styles.name}>login</p>
                    <p className={styles.city}>location</p>
                </div>

                <div className={styles.bioContainer}>
                    <h1>BIO</h1>

                </div>

            </div>
        </div>
    )


}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const response = await api.get('')

    return {
        props: {
            login: response.data.login,
            followers: response.data.followers,
            following: response.data.following,
            repositories: response.data.public_repos,
            location: response.data.location,
            bio: response.data.bio,
        }
    }


}