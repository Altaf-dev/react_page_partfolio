import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export function Certificate()  {

    return (
        <section className="certificate" id={"certificate"}>
            <div className="container">
                <h2 className="title">Сертификаты</h2>
                <div className="certificate__list">
                    <Swiper
                        modules={[Navigation]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{
                            prevEl: '.certificate-next',
                            nextEl: '.certificate-prev',
                        }}>
                        <SwiperSlide>
                            <div className="certificate-item">
                                <img className="certificate-img" src={require("../img/certificate1.png")} alt="img"/>
                                <a href="https://gb.ru/go/dTNKRR" target={'_blank'} className="certificate-link">Ссылка на сертификат </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="certificate-item">
                                <img className="certificate-img" src={require("../img/certificate2.png")} alt="img"/>
                                <a href="https://gb.ru/go/bxxuT8" target={'_blank'} className="certificate-link">Ссылка на сертификат </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="certificate-item">
                                <img className="certificate-img" src={require("../img/certificate3.png")} alt="img"/>
                                <a href="https://gb.ru/go/puhXwE" target={'_blank'} className="certificate-link">Ссылка на сертификат </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="certificate-item">
                                <img className="certificate-img" src={require("../img/certificate4.png")} alt="img"/>
                                <a href="https://gb.ru/go/HXVrbY" target={'_blank'} className="certificate-link">Ссылка на сертификат </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="certificate-item">
                                <img className="certificate-img" src={require("../img/certificate5.png")} alt="img"/>
                                <a href="https://gb.ru/go/eD7ASN" target={'_blank'} className="certificate-link">Ссылка на сертификат </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="certificate-item">
                                <img className="certificate-img" src={require("../img/certificate6.png")} alt="img"/>
                                <a href="https://www.udemy.com/certificate/UC-e7df7661-217c-446d-afb3-f0ba9276ee32/" target={'_blank'} className="certificate-link">Ссылка на сертификат </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="certificate-item">
                                <img className="certificate-img" src={require("../img/certificate7.png")} alt="img"/>
                                <a href="https://www.udemy.com/certificate/UC-abea6976-60df-4eea-b0e7-d5fd438f8c43/" target={'_blank'} className="certificate-link">Ссылка на сертификат </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="certificate-prev"></div>
                    <div className="certificate-next"></div>
                </div>
            </div>
        </section>
    );
};

export default Certificate