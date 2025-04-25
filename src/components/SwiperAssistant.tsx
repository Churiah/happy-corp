import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

export interface SwiperAssistantProps {
    list:
    {
        id: number,
        name: string,
        age: number,
        avatar: string,
        describe: string
    }[]
}

const SwiperAssistant: React.FC<SwiperAssistantProps> = (props) => {
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
                    {props.list.slice(0, 3).map((assistant, index) => (
                        <SwiperSlide key={index} >
                            <div className="card-container ">
                                <img src={assistant.avatar} className=" border border-3 border-secondary w-50 rounded-circle" style={{ margin: "0 auto" }} />
                                <div className='fs-15'>{assistant.name}</div>
                                <p className="description fs-13">{assistant.describe}</p>
                                <div className="status">
                                    <span className="available">Available</span>
                                    <div className="circle green" />
                                    <span className="busy">Busy</span>
                                    <div className="circle pink" />
                                </div>
                                <button className="book-btn">BOOK ME NOW</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (<div>Loading</div>)
            }

        </>
    )
}

export default SwiperAssistant
