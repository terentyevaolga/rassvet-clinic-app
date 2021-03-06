import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Image from "next/image";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {getDocsFromFirebase} from "../../utils/getDocsFromFirebase";
import {Spinner} from "../../components/ui/Spinner/Spinner";
import styles from "/styles/pagesStyles/hospital.module.scss";

const Title = ({hospitals}: any) => {
    const [loading, setLoading] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timing);
    }, []);

    return (
        <BaseLayout title={query.title as string}>
            <div>
                <h1>{query.title}</h1>
                {loading ? <Spinner/> :
                    <>
                        {hospitals?.filter((hospital: any)=>(query.title === hospital.title)).map((filteredHospital: any)=>(
                            <div key={filteredHospital.title} className={styles.clinic}>
                                <p>{filteredHospital.description}</p>
                                <Image src={filteredHospital.image1} width={900} height={442} alt={'hospital image'}/>
                                <Image src={filteredHospital.image2} width={900} height={442} alt={'hospital image'}/>
                                <Image src={filteredHospital.image3} width={900} height={442} alt={'hospital image'}/>
                            </div>
                        ))}
                    </>
                }
            </div>
        </BaseLayout>
    );
};

export default Title;

export async function getStaticProps() {
    const hospitals = await getDocsFromFirebase('hospital');

    return {
        props: {hospitals}
    };
}

export async function getStaticPaths() {
    const hospitals = await getDocsFromFirebase('hospital');

    const paths = hospitals.map((clinic: any) => ({
        params: {title: clinic.title}
    }));

    return {paths, fallback: true};
}