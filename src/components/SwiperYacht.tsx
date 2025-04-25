import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


export interface SwiperYachtProps {
    list:
    {
        id: number,
        name: string,
        id_address: number,
        address: string,
        avatar: string,
        describe: string
    }[],
    address_id: number
}

const SwiperYacht: React.FC<SwiperYachtProps> = (props) => {
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
                    {props.list.filter((yacht) => yacht.id_address === props.address_id).map((yacht, index) => (
                        <SwiperSlide key={index} >
                            <div className="card-container ">
                                <img src={yacht.avatar} className="rounded-4" />
                                <div className='fs-15'>{yacht.name}</div>
                                <div className='fs-13 mt-1 text-pink'>{yacht.address}</div>
                                <p className="description fs-13">{yacht.describe}</p>
                                <div className="status">
                                    <span className="available">Available</span>
                                    <div className="circle green" />
                                    <span className="busy">Busy</span>
                                    <div className="circle pink" />
                                </div>
                                <Link to="/yacht-booking"  >
                                    <button className="book-btn w-100" >BOOK ME NOW</button>
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

export default SwiperYacht
