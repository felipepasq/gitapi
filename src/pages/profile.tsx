
import axios from 'axios'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useReducer } from 'react'
import { api } from '../services/api'
import styles from '../styles/Profile.module.scss'


interface ProfileProps {
    login: string;
    followers: number;
    following: number;
    repositories: number;
}


export default function Profile(props: ProfileProps) {


    return (
        <div>
            <div className={styles.profileContainer}>
                <img className={styles.profileImage} src="/pp.jpg" alt="" />
                <p className={styles.followers}>Seguidores{props.followers}</p>
                <p className={styles.following}>Seguindo</p>
                <p className={styles.repositories}>Repositórios</p>
            </div>

            <div className={styles.wrappper}>
                <div className={styles.sideContainer}>
                    <p className={styles.name}>{props.login}</p>
                    <p className={styles.email}>Email</p>
                    <p className={styles.city}>Cidade</p>
                </div>

                <div className={styles.bioContainer}>
                    <h1>BIO</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nunc sed massa mollis venenatis. Ut dictum, metus nec imperdiet sagittis, eros tortor iaculis mi, a vehicula mi ex quis eros. Mauris lacinia orci id sapien ornare, ut vehicula nunc tincidunt. In ultricies ac ligula euismod accumsan. Donec auctor euismod neque eu laoreet. Pellentesque eu maximus risus, nec tempor nulla. Fusce ac nisi eleifend, bibendum lectus quis, facilisis massa. Nunc ex lacus, volutpat ut ante non, finibus facilisis nibh. Nulla porta, nunc nec laoreet interdum, nulla nisi ultrices est, sed blandit elit tortor sit amet elit. Nulla auctor, mi ut dignissim scelerisque, augue sapien cursus massa, et tempus lacus ante eget odio. Quisque aliquam massa ut lacus maximus condimentum. Duis semper diam et elementum gravida. In et luctus sem, viverra porttitor nibh.</p>
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
        }
    }


}