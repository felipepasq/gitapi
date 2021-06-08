import styles from '../Header/styles.module.scss'

interface HeaderProps {
    login: string;
    followers: number;
    following: number;
    repositories: number;
}

export function Header(props: HeaderProps) {

    return (

        <div className={styles.profileContainer}>
            <img className={styles.profileImage} src="/pp.jpg" alt="" />
            <p className={styles.followers}>Followers</p>
            <p className={styles.numberFollowers}>{props.followers}</p>
            <p className={styles.following}>Following</p>
            <p className={styles.numberFollowing}>{props.following}</p>
            <p className={styles.repositories}>Repositories</p>
            <p className={styles.numberRepositories}>{props.repositories}</p>
        </div>

    )
}