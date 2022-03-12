import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Lazy} from "swiper";
import Image from "next/image";
import {Card} from "../Card/Card";
import prevArrow from '../../public/slider/prev-arrow.svg';
import nextArrow from '../../public/slider/next-arrow.svg';
import doc1 from '../../public/doctorsSlider/doc1.svg';
import doc2 from '../../public/doctorsSlider/doc2.svg';
import doc3 from '../../public/doctorsSlider/doc3.svg';
import doc4 from '../../public/doctorsSlider/doc4.svg';
import doc5 from '../../public/doctorsSlider/doc5.svg';
import doc6 from '../../public/doctorsSlider/doc6.svg';

export const DoctorsSlider = () => {

    SwiperCore.use([Navigation]);
    SwiperCore.use([Lazy]); //это для автомат.листания слайдов, которое потом мб сделаем

    return (
        <>
            <div className="slider">
                <div className="navigation">
                    <div className="swiper-button-prev-custom">
                        <Image src={prevArrow} width={24} height={24}/>
                    </div>
                    <div className="swiper-button-next-custom">
                        <Image src={nextArrow} width={24} height={24}/>
                    </div>
                </div>

                <Swiper
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom"
                    }}
                    loop={true}
                    lazy={true}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card
                            img={doc1}
                            fullName={"Тарасова Анна Константиновна"}
                            speciality={"Ревматолог, терапевт"}
                            price={"Первичный прием: 6500 руб."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img={doc2}
                            fullName={"Головенко Алексей Олегович"}
                            speciality={"Гастроэнтеролог"}
                            price={"Первичный прием: 5000 руб."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img={doc3}
                            fullName={"Рамеева Анна Сергеевна"}
                            speciality={"Терапевт"}
                            price={"Первичный прием: 5500 руб."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img={doc4}
                            fullName={"Охотин Андрей Николаевич"}
                            speciality={"Стоматолог"}
                            price={"Первичный прием: 4000 руб."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img={doc5}
                            fullName={"Наумова Наталья Андреевна"}
                            speciality={"Кардиолог"}
                            price={"Первичный прием: 6500 руб."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img={doc6}
                            fullName={"Латышев Александр Васильевич"}
                            speciality={"Хирург"}
                            price={"Первичный прием: 5500 руб."}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};