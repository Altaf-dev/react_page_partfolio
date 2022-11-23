import React from 'react';
import PortfolioItem from "./PortfolioItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


export function Portfolio(props) {

    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="title">Мои работы</h2>
                <div className="portfolio__list">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        loop={false}
                        spaceBetween={20}
                        slidesPerView={2}
                        draggable={true}
                        navigation={{
                            prevEl: '.portfolio-next',
                            nextEl: '.portfolio-prev',
                        }}
                        pagination={{
                            clickable: true,
                        }}>

                        {props.portfolioList.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <PortfolioItem item={item}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="portfolio-prev slide-prev"></div>
                    <div className="portfolio-next slide-next"></div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
