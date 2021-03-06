import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import {getDocsFromFirebase} from '../../utils/getDocsFromFirebase';
import {BaseLayout} from '../../components/BaseLayout/BaseLayout';
import {DoctorCard} from "../../components/Card/CardSlider/DoctorCard";
import {Spinner} from "../../components/ui/Spinner/Spinner";
import styles from '/styles/pagesStyles/adultClinic.module.scss';

export default function Clinic({doctors, adultClinics}: any) {
    const [loading, setLoading] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 4500);
        return () => clearTimeout(timing);
    }, []);

    return (
        <BaseLayout title={query.title as string}>
            {loading ? <Spinner/>
                :
                <div className={styles.department}>
                    <h1>{query.title}</h1>
                    {adultClinics?.filter((adultClinic: any) => (query.title === adultClinic.title)).map((filteredClinic: any) => (
                        <div key={filteredClinic.title} className={styles.clinicPage}>
                            <img src={filteredClinic.inner_url} alt='clinic'/>
                            <blockquote className={styles.clinicPage__quote}>{filteredClinic.quote}</blockquote>
                            <p>{filteredClinic.description}</p>
                        </div>
                    ))}

                    <div className={styles.clinicPage__doctors}>
                        <h3>Врачи отделения</h3>
                        <div className={styles.clinicPage__doctors__content}>
                            {doctors?.filter((doctor: any) => (doctor.department === (query.title)))
                                .map((filteredDoctor: any) => (
                                    <DoctorCard
                                        key={filteredDoctor.fullName}
                                        img={filteredDoctor.url}
                                        fullName={filteredDoctor.fullName}
                                        speciality={filteredDoctor.speciality}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            }
        </BaseLayout>
    );
}

export async function getStaticProps() {
    const adultClinics = await getDocsFromFirebase('adultClinic');
    const doctors = await getDocsFromFirebase('doctors');

    return {
        props: {doctors, adultClinics}
    };
}

export async function getStaticPaths() {
    const adultClinics = await getDocsFromFirebase('adultClinic');

    const paths = adultClinics.map((clinic: any) => ({
        params: {title: clinic.title}
    }));

    return {paths, fallback: true};
}