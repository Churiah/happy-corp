import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './page.css';
import { arrowForwardCircleOutline, arrowRedoOutline, searchOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


const RoomConcept: React.FC = () => {

    const concept = [
        {
            id: 1,
            type: 1,
            name: "Phòng với phong cách cổ tích",
            content: "Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.",
            price: "10000000",
            image: "https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg"
        },
        {
            id: 2,
            type: 2,
            name: "Phòng với phong cách nhẹ nhàng lãng mạng",
            content: "Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.",
            price: "10000000",
            image: "https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg"
        },
        {
            id: 3,
            type: 1,
            name: "Phòng với phong cách cổ tích gsf",
            content: "Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.",
            price: "10000000",
            image: "https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg"
        },
        {
            id: 4,
            type: 1,
            name: "Phòng với phong cách cổ tích djkfhsdlikjfl",
            content: "Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.",
            price: "10000000",
            image: "https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg"
        },
        {
            id: 5,
            type: 2,
            name: "Phòng với phong cách cổ tích dhsff",
            content: "Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.",
            price: "10000000",
            image: "https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg"
        },
        {
            id: 6,
            type: 3,
            name: "Phòng với phong cách đơn giản 623578",
            content: "Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.",
            price: "10000000",
            image: "https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg"
        },
        {
            id: 7,
            type: 3,
            name: "Phòng với phong cách đơn giản",
            content: "Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.",
            price: "10000000",
            image: "https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg"
        }
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
                            <IonRow className='d-flex justify-content-center align-items-center mt-2'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Concept Cổ tích</IonLabel>
                            </IonRow>
                            <IonRow className='d-flex align-items-center'>
                                {concept.filter((concept) => concept.type === 1).map((concept, index) => (
                                    <>
                                        <IonCol size='6'>
                                            <IonCard className=' shadow-none m-0 p-1 border border-1'>
                                                <img src={`${concept.image}`} className='w-100 rounded-3'></img>
                                                <div className='fs-13 text-pink fw-bold mt-2'>{concept.name}</div>
                                                <div className='fs-13 text-secondary three-line-block mt-2'>{concept.content}</div>

                                                <div className='d-flex justify-content-between align-items-center mt-2'>
                                                    <div className='fs-11 text-danger text-end '>{concept.price} VNĐ</div>
                                                    <button className='book-btn fs-11 p-2'>Book ngay</button>
                                                </div>
                                            </IonCard>
                                        </IonCol>
                                    </>
                                ))}

                            </IonRow>
                            <IonRow className='d-flex justify-content-center align-items-center mt-4'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Concept Đơn giản</IonLabel>
                            </IonRow>
                            <IonRow className='d-flex align-items-center'>
                                {concept.filter((concept) => concept.type === 2).map((concept, index) => (
                                    <>
                                        <IonCol size='6'>
                                            <IonCard className=' shadow-none m-0 p-1 border border-1'>
                                                <img src={`${concept.image}`} className='w-100 rounded-3'></img>
                                                <div className='fs-13 text-pink fw-bold mt-2'>{concept.name}</div>
                                                <div className='fs-13 text-secondary three-line-block mt-2'>{concept.content}</div>

                                                <div className='d-flex justify-content-between align-items-center mt-2'>
                                                    <div className='fs-11 text-danger text-end '>{concept.price} VNĐ</div>
                                                    <button className='book-btn fs-11 p-2'>Book ngay</button>
                                                </div>
                                            </IonCard>
                                        </IonCol>
                                    </>
                                ))}

                            </IonRow>
                            <IonRow className='d-flex justify-content-center align-items-center mt-4'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Concept Lãng mạng</IonLabel>
                            </IonRow>
                            <IonRow className='d-flex align-items-center'>
                                {concept.filter((concept) => concept.type === 3).map((concept, index) => (
                                    <>
                                        <IonCol size='6'>
                                            <IonCard className=' shadow-none m-0 p-1 border border-1'>
                                                <img src={`${concept.image}`} className='w-100 rounded-3'></img>
                                                <div className='fs-13 text-pink fw-bold mt-2'>{concept.name}</div>
                                                <div className='fs-13 text-secondary three-line-block mt-2'>{concept.content}</div>

                                                <div className='d-flex justify-content-between align-items-center mt-2'>
                                                    <div className='fs-11 text-danger text-end '>{concept.price} VNĐ</div>
                                                    <button className='book-btn fs-11 p-2'>Book ngay</button>
                                                </div>
                                            </IonCard>
                                        </IonCol>
                                    </>
                                ))}

                            </IonRow>

                            <IonRow className='d-flex justify-content-between align-items-center mt-4'>
                                <IonLabel className='text-dark fs-6 fw-bold'>Lịch đã đặt sắp tới</IonLabel>
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

export default RoomConcept;
