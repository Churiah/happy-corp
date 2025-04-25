import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRoute, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './page.css';
import { arrowForwardCircleOutline, arrowRedoOutline, searchOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SwiperYacht from '../components/SwiperYacht';

const YachtList: React.FC = () => {

    const list = [
        {
            id: 1,
            name: "Du thuyền A56676",
            id_address: 1,
            address: "Bến Bạch Đằng, Quận 1",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },
        {
            id: 1,
            name: "Du thuyền A123",
            id_address: 3,
            address: "Khu Thảo Điền, Quận 2",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },
        {
            id: 1,
            name: "Du thuyền s543",
            id_address: 3,
            address: "Khu Thảo Điền, Quận 2",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },
        {
            id: 1,
            name: "Du thuyền A123",
            id_address: 2,
            address: "Bến Bạch Đằng, Quận 1",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },
        {
            id: 1,
            name: "Du thuyền A56676",
            id_address: 1,
            address: "Bến Bạch Đằng, Quận 1",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },
        {
            id: 1,
            name: "Du thuyền A123",
            id_address: 3,
            address: "Bến Bạch Đằng, Quận 1",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },
        {
            id: 1,
            name: "Du thuyền s543",
            id_address: 3,
            address: "Bến Bạch Đằng, Quận 1",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },
        {
            id: 1,
            name: "Du thuyền A123",
            id_address: 2,
            address: "Bến Bạch Đằng, Quận 1",
            avatar: "https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg",
            describe: "Du thuyện hạn sang với không gian cổ tích"

        },

    ]

    return (
        <IonPage>
            <IonContent fullscreen >
                <div className=' backgound-home h-25'>
                    <IonRow className='d-flex justify-content-between align-items-center  p-4 pb-2'>
                        <div className='text-white fw-bold ' style={{ fontSize: "20px" }}>Wellcome to Happy Corp</div>
                        <img src='https://beta.ellm.io/templates/assets/img/logo-small.svg' alt='logo' style={{ width: "40px" }}></img>

                    </IonRow>
                    <div style={{ height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
                        <IonCard className='m-0  p-3 rounded-bottom-0 rounded-top-5 pb-5'>
                            <IonRow className='d-flex justify-content-center align-items-center'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Quận 1</IonLabel>
                            </IonRow>
                            <SwiperYacht list={list} address_id={1} />
                            <IonRow className='d-flex justify-content-center align-items-center mt-4'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Quận 2</IonLabel>
                            </IonRow>
                            <SwiperYacht list={list} address_id={2} />
                            <IonRow className='d-flex justify-content-center align-items-center mt-4'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Quận 9</IonLabel>
                            </IonRow>
                            <SwiperYacht list={list} address_id={3} />

                        </IonCard>
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default YachtList;
