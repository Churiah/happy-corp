import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './page.css';
import { arrowForwardCircleOutline, arrowRedoOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

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

    return (
        <IonPage>
            <IonContent fullscreen >
                <div className=' backgound-home h-25'>
                    <IonRow className='d-flex justify-content-between align-items-center  p-4 '>
                        <div className='text-white fw-bold ' style={{ fontSize: "20px" }}>Wellcome to Happy Corp</div>
                        <img src='https://beta.ellm.io/templates/assets/img/logo-small.svg' alt='logo' style={{ width: "40px" }}></img>

                    </IonRow>

                    <IonCard className='m-0  p-3 rounded-bottom-0 rounded-top-5 pb-5'>
                        <IonRow className='d-flex justify-content-between align-items-center'>
                            <IonLabel className='text-dark fs-6 fw-bold'>Dịch vụ</IonLabel>
                            <div className='text-pink fs-13'>See all</div>
                        </IonRow>

                        <IonRow className='mt-2 hide-scrollbar' style={{ overflowX: 'auto', whiteSpace: 'nowrap', flexWrap: 'nowrap' }}>
                            <IonCol size='8'>
                                <div style={{ position: 'relative' }}>
                                    <img src='https://dulichduthuyen.com.vn/vnt_upload/news/07_2021/du-thuyen-dep-nhat-the-gioi-Savannah.jpg' className='rounded-4'></img>
                                    <IonCard className='m-0 bg-dark bg-opacity-50 text-dark p-2 pb-3 rounded-4' style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '6px',
                                        right: '6px',
                                    }}>
                                        <IonRow className='d-flex justify-content-between align-items-center text-white'>
                                            <IonLabel className='fw-bold'>Thuê du thuyền</IonLabel>
                                            <IonIcon icon={arrowRedoOutline} color='white'></IonIcon>
                                        </IonRow>

                                    </IonCard>
                                </div>
                            </IonCol>
                            <IonCol size='8' >
                                <div style={{ position: 'relative' }}>
                                    <img src='https://daiphattoy.vn/upload/sanpham/large/do-choi-xe-hoi-dieu-khien-tu-xa-sieu-ngau-011-1616834196-76fa1a.jpg' className='rounded-4'></img>
                                    <IonCard className='m-0 bg-dark bg-opacity-50 text-dark p-2 pb-3 rounded-4' style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '6px',
                                        right: '6px',
                                    }}>
                                        <IonRow className='d-flex justify-content-between align-items-center text-white'>
                                            <IonLabel className='fw-bold'>Thuê xe</IonLabel>
                                            <IonIcon icon={arrowRedoOutline} color='white'></IonIcon>
                                        </IonRow>
                                    </IonCard>
                                </div>
                            </IonCol>
                            <IonCol size='8'>
                                <div style={{ position: 'relative' }}>
                                    <img src='https://decoxdesign.com/upload/images/indochine-bedroom-01-decox-design.jpg' className='rounded-4'></img>
                                    <Link to="/room-concept">
                                        <IonCard className='m-0 bg-dark bg-opacity-50 text-dark p-2 pb-3 rounded-4' style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '6px',
                                            right: '6px',
                                        }}>
                                            <IonRow className='d-flex justify-content-between align-items-center text-white'>
                                                <IonLabel className='fw-bold'>Concept phòng</IonLabel>
                                                <IonIcon icon={arrowRedoOutline} color='white'></IonIcon>
                                            </IonRow>
                                        </IonCard>
                                    </Link>
                                </div>
                            </IonCol>
                            <IonCol size='8' >
                                <div style={{ position: 'relative' }}>
                                    <img src='https://intranphat.com/uploads/services/anh-bia-13.png' className='rounded-4'></img>
                                    <IonCard className='m-0 bg-dark bg-opacity-50 text-dark p-2 pb-3 rounded-4' style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '6px',
                                        right: '6px',
                                    }}>
                                        <IonRow className='d-flex justify-content-between align-items-center text-white'>
                                            <IonLabel className='fw-bold'>Chọn menu</IonLabel>
                                            <IonIcon icon={arrowRedoOutline} color='white'></IonIcon>
                                        </IonRow>
                                    </IonCard>
                                </div>
                            </IonCol>
                            <IonCol size='8'>
                                <div style={{ position: 'relative' }}>
                                    <img src='https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/05/09/1_call-1652057570914.png' className='rounded-4'></img>
                                    <IonCard className='m-0 bg-dark bg-opacity-50 text-dark p-2 pb-3 rounded-4' style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '6px',
                                        right: '6px',
                                    }}>
                                        <IonRow className='d-flex justify-content-between align-items-center text-white'>
                                            <IonLabel className='fw-bold'>Thuê trợ lí</IonLabel>
                                            <IonIcon icon={arrowRedoOutline} color='white'></IonIcon>
                                        </IonRow>
                                    </IonCard>
                                </div>
                            </IonCol>
                        </IonRow>

                        <IonRow className='d-flex justify-content-between align-items-center mt-3'>
                            <IonLabel className='text-dark fs-6 fw-bold'>Booking</IonLabel>
                            <div className='text-pink fs-13'>See all</div>
                        </IonRow>
                        <div className="calendar-wrapper mt-2">
                            <Calendar
                                // onChange={() => { setValue() }}
                                // value={value}
                                tileContent={({ date, view }) => {
                                    const key = formatDateKey(date);
                                    if (view === 'month' && notes[key]?.type == "3") {
                                        return (
                                            <>
                                                <IonRow className='d-flex justify-content-end'>
                                                    <div className="note-dot bg-primary" />
                                                    <div className="note-dot bg-primary" />
                                                    <div className="note-dot bg-primary" />
                                                    <div className="note-dot bg-primary" />
                                                    <div className="note-dot bg-dark" />
                                                    <div className="note-dot bg-dark" />
                                                </IonRow>
                                            </>
                                        );
                                    }
                                    return null;
                                }}
                                tileClassName={({ date, view }) => {
                                    const key = formatDateKey(date);
                                    const note = notes[key];
                                    const isSameMonth = date.getMonth() === value.getMonth();

                                    if (view === 'month') {
                                        if (!isSameMonth) return 'faded-day';
                                        if (note?.type === '1') return 'marked-day1';
                                        if (note?.type === '2') return 'marked-day2';
                                        // if (note) return 'marked-day3';
                                    }

                                    return '';
                                }}
                            />
                        </div>
                        <IonRow>
                            <IonCol size='4' className='d-flex align-items-center'>
                                <div style={{ height: "20px", width: "20px" }} className='bg-dark rounded-2'></div>
                                <div className='fs-13 ms-2'>Khách không đến</div>
                            </IonCol>
                            <IonCol size='4' className='d-flex align-items-center'>
                                <div style={{ height: "20px", width: "20px", background: "linear-gradient(to right, #ff416c, #ffbd2f)" }} className='rounded-2'></div>
                                <div className='fs-13 ms-2'>Đã thanh toán</div>
                            </IonCol>
                            <IonCol size='4' className='d-flex align-items-center'>
                                <div style={{ height: "20px", width: "26px" }} className='bg-primary rounded-2'></div>
                                <div className='fs-13 ms-2'>Đã đặt bàn thành công</div>
                            </IonCol>
                        </IonRow>


                        <IonRow className='d-flex justify-content-between align-items-center mt-3'>
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

            </IonContent>
        </IonPage>
    );
};

export default Home;
