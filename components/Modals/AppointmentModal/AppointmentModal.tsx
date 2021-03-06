import {addDoc, collection, doc, updateDoc} from "@firebase/firestore";
import {FC, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import useRouter from "next/router";
import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {firestore} from "../../../config/firebase";
import 'react-toastify/dist/ReactToastify.css';
import styles from "../Modal/Modal.module.scss";

interface Props {
    showModal: any,
    setShowModal: any,
    specialist: any,
}

export const AppointmentModal: FC<Props> = ({showModal, setShowModal, specialist}) => {
    const [fullUserName, setFullUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectValue, setSelectValue] = useState<any>('');
    const databaseRef = collection(firestore, 'appointments');
    const docRef = doc(firestore, "doctors", `${specialist.shortName}`)
    const defaultSelect = specialist.date?.length === 0 ? "К сожалению, запись на данный момент невозможна" : "Выберите дату и время приема";

    const notifyToast = () => toast("Спасибо, Вы записаны на прием!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: "success"
    })

    const sendAppointment = async () => {
        await addDoc(databaseRef, {
            fullName: fullUserName,
            phone: phone,
            email: email,
            date: selectValue,
            specialist: specialist?.fullName
        });

        await updateDoc(docRef, {
            date: deleteSelectedDate(selectValue)
        });

        await setShowModal(false);
        await notifyToast();
    }

    const deleteSelectedDate = (date: string) => {
        return specialist.date.filter((e: string) => e !== date)
    }

    return (
        <>
            <Modal title={"Запись на прием в клинику"} onClose={() => setShowModal(false)} show={showModal}>
                <p>Администратор клиники с&nbsp;радостью ответит на&nbsp;ваши вопросы и&nbsp;запишет к&nbsp;нужному специалисту</p>

                <form onSubmit={sendAppointment}>
                    <input autoFocus={true} type="text" value={fullUserName} name="fullUserName" placeholder="Ваше ФИО" required
                           onChange={(event: any) => setFullUserName(event.target.value)}/>
                    <input type="phone" name="phone" placeholder="Контактный телефон" required
                           onChange={(event: any) => setPhone(event.target.value)}/>
                    <input type="email" name="email" placeholder="Ваш email" required
                           onChange={(event: any) => setEmail(event.target.value)}/>
                    <input type="text" name="specialist" value={"Специалист: " + specialist?.fullName} readOnly={true}/>

                    <select
                        required={true}
                        className={styles.select}
                        defaultValue={defaultSelect}
                        onChange={(e: any) => setSelectValue(e.target.value)}
                    >
                        <option
                            className={styles.select__option}
                            disabled
                        >{defaultSelect}
                        </option>

                        {specialist.date?.map((date: any) => (
                            <option
                                className={styles.select__option}
                                key={date}
                                value={date}
                            >{date}</option>
                        ))}

                    </select>

                    <Button
                        type="submit"
                        theme="orange"
                        disabled={specialist.date?.length === 0}
                    >Отправить</Button>
                </form>
            </Modal>

            <ToastContainer/>
        </>
    )
};