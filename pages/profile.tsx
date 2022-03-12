import Image from "next/image";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import profileLogo from "../public/profile/profileLogo.svg";
import apply_note from "../public/profile/apply_note.svg";
import styles from "../styles/pagesStyles/profile.module.scss";

const Profile = () => {
    return (
        <BaseLayout title="Профиль">

            <aside className={styles.profile}>
                <Image src={profileLogo} width={120} height={120}/>

                <div className={styles.profileInfo__info}>
                    <h1>Соколов Александр Игоревич</h1>
                    <p>email@.mail.ru</p>
                    <p>+7 (919) 823-43-03</p>
                    <p>12.03.2022</p>
                </div>
            </aside>

            <div className={styles.visits}>
                <h1>Записи на прием</h1>
                <div className={styles.visits__info}>
                    <Image src={apply_note} width={200} height={200}/>
                    <p>Здесь будут записи на предстоящие записи</p>
                </div>
            </div>

            <div className={styles.review}>

            </div>
        </BaseLayout>
    );
}
export default Profile;