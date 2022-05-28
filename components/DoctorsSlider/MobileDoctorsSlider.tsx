import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Autoplay} from "swiper";
import {CardSlider} from "../Card/CardSlider/CardSlider";
import doc1 from '/public/doctorsSlider/doc1.svg';
import doc2 from '/public/doctorsSlider/doc2.svg';
import doc3 from '/public/doctorsSlider/doc3.svg';
import doc4 from '/public/doctorsSlider/doc4.svg';
import doc5 from '/public/doctorsSlider/doc5.svg';
import doc6 from '/public/doctorsSlider/doc6.svg';

export const MobileDoctorsSlider = () => {

    SwiperCore.use([Navigation]);
    SwiperCore.use([Autoplay]);

    return (
        <>
            <div className="doctor__slider">
                <Swiper
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom"
                    }}
                    loop={true}
                    autoplay={true}
                    slidesPerView={1}
                    onSlideChange={() => {}}
                    onSwiper={() => {}}
                >
                    <SwiperSlide>
                        <CardSlider
                            img={doc1}
                            fullName={"Тарасова Анна Константиновна"}
                            speciality={"Ревматолог, терапевт"}
                            price={"Первичный прием: 6500 руб."}
                            width={250}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSlider
                            img={doc2}
                            fullName={"Головенко Алексей Олегович"}
                            speciality={"Гастроэнтеролог"}
                            price={"Первичный прием: 5000 руб."}
                            width={250}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSlider
                            img={doc3}
                            fullName={"Рамеева Анна Сергеевна"}
                            speciality={"Терапевт"}
                            price={"Первичный прием: 5500 руб."}
                            width={250}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSlider
                            img={doc4}
                            fullName={"Охотин Андрей Николаевич"}
                            speciality={"Стоматолог"}
                            price={"Первичный прием: 4000 руб."}
                            width={250}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSlider
                            img={doc5}
                            fullName={"Наумова Наталья Андреевна"}
                            speciality={"Кардиолог"}
                            price={"Первичный прием: 6500 руб."}
                            width={250}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSlider
                            img={doc6}
                            fullName={"Латышев Александр Васильевич"}
                            speciality={"Хирург"}
                            price={"Первичный прием: 5500 руб."}
                            width={250}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};