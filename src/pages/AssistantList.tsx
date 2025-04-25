/* eslint-disable @typescript-eslint/no-unused-vars */
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './page.css';
import { arrowForwardCircleOutline, arrowRedoOutline, searchOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import { EffectCards } from 'swiper/modules';
import SwiperAssistant from '../components/SwiperAssistant';

const AssistantList: React.FC = () => {

    function log() {
        console.log(123);

    }

    const [value, setValue] = useState(new Date());

    // Ví dụ ghi chú ngày đặc biệt
    const notes: Record<string, { color: string; text?: string, type: string }> = {
        '2025-04-06': { color: 'black', type: "1" },
        '2025-04-21': { color: 'linear-gradient(to right, #ff416c, #ffbd2f)', type: "2" },
        '2025-04-17': { color: '#007bff', type: "3" },
    };
    const formatDateKey = (date: Date) =>
        date.toISOString().split('T')[0];


    const list = [
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí với 3 năm kinh nghiệp"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí với 3 năm kinh nghiệp"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        }
    ]

    function Booking() {

    }
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
                                <IonLabel className='text-pink fs-6 fw-bold'>Assistant HOT</IonLabel>
                            </IonRow>
                            <SwiperAssistant list={list} />
                            <IonRow className='d-flex justify-content-center align-items-center mt-5'>
                                <IonLabel className='text-pink fs-6 fw-bold'>List Assistant</IonLabel>
                            </IonRow>
                            <SwiperAssistant list={list} />
                            <IonRow className='d-flex justify-content-between align-items-center mt-4'>
                                <IonLabel className='text-dark fs-6 fw-bold'>Lịch sử</IonLabel>
                                <div className='text-pink fs-13'>See all</div>
                            </IonRow>
                            <IonList className='pb-4'>
                                <IonRow className='bg-light rounded-4 p-1 mt-2'>
                                    <IonCol size='9'>
                                        <IonLabel className='fs-13 text-pink fw-300'>Thuê du thuyền</IonLabel>
                                        <div className='fs-13'>Bạn đã đặt du thuyền DT123 cho ngày 12/05/2025</div>
                                        <div className='text-primary d-flex align-items-center fs-13'>Đặt lại <IonIcon icon={arrowForwardCircleOutline} className='ms-2'></IonIcon></div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className='fs-13 text-end'>15/02/2025</div>
                                    </IonCol>
                                </IonRow>
                                <IonRow className='bg-light rounded-4 p-1 mt-2'>
                                    <IonCol size='9'>
                                        <IonLabel className='fs-13 text-pink fw-300'>Thuê du thuyền</IonLabel>
                                        <div className='fs-13'>Bạn đã đặt du thuyền DT123 cho ngày 12/05/2025</div>
                                        <div className='text-primary d-flex align-items-center fs-13'>Đặt lại <IonIcon icon={arrowForwardCircleOutline} className='ms-2'></IonIcon></div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className='fs-13 text-end'>15/02/2025</div>
                                    </IonCol>
                                </IonRow>
                                <IonRow className='bg-light rounded-4 p-1 mt-2'>
                                    <IonCol size='9'>
                                        <IonLabel className='fs-13 text-pink fw-300'>Thuê du thuyền</IonLabel>
                                        <div className='fs-13'>Bạn đã đặt du thuyền DT123 cho ngày 12/05/2025</div>
                                        <div className='text-primary d-flex align-items-center fs-13'>Đặt lại <IonIcon icon={arrowForwardCircleOutline} className='ms-2'></IonIcon></div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className='fs-13 text-end'>15/02/2025</div>
                                    </IonCol>
                                </IonRow>

                            </IonList>


                        </IonCard>
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default AssistantList;
