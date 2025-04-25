import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


export interface SwiperCarProps {
    list:
    {
        id: number,
        model: string,
        manufacturer: string,
        avatar: string,
        describe: string
    }[],
}

const SwiperCar: React.FC<SwiperCarProps> = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [])

    return (
        <>
            {!loading ? (
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper mt-3"
                    style={{ marginLeft: "8%" }}
                >
                    {props.list.map((car, index) => (
                        <SwiperSlide key={index} >
                            <div className="card-container ">
                                <img src={car.avatar} className="rounded-4" />
                                <div className='fs-15'>{car.model}</div>
                                <div className='fs-13 mt-1 text-pink'>{car.manufacturer}</div>
                                <p className="description fs-13">{car.describe}</p>
                                <div className="status">
                                    <span className="available">Available</span>
                                    <div className="circle green" />
                                    <span className="busy">Busy</span>
                                    <div className="circle pink" />
                                </div>
                                <Link to="/yacht-booking"  >
                                    <button className="book-btn w-100" >BOOK NOW</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (<div>Loading</div>)
            }

        </>
    )
}

export default SwiperCar
