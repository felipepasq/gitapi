
import styles from '../styles/Profile.module.scss'

export default function Profile() {

    return (
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;900&display=swap" rel="stylesheet" />

            <div className={styles.profileContainer}>
                <img className={styles.profileImage} src="/pp.jpg" alt="" />
                <p className={styles.followers}>Seguidores</p>
                <p className={styles.following}>Seguindo</p>
                <p className={styles.repositories}>Repositórios</p>
            </div>
            <div className={styles.wrappper}>
                <div className={styles.sideContainer}>
                    <p className={styles.name}>Felipe Pasqua</p>
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