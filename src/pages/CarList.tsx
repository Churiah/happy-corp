import { IonCard, IonCol, IonContent, IonIcon, IonLabel, IonList, IonPage, IonRow } from "@ionic/react"
import SwiperAssistant from "../components/SwiperAssistant"
import { arrowForwardCircleOutline } from "ionicons/icons"
import SwiperCar from "../components/SwiperCar"
const CarList = () => {
    const list = [
        {
            id: 1,
            model: "RANGE ROVER SVAUTOBIOGRAPHY",
            manufacturer: "Land Rover",
            avatar: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPwMFS9kDyj3Iem0ocfgIqZxmPrlRtPsYCJvHcGQirOCozU74barnwks1hSlp6YO3fpBhOqQRov3hNDgh2I7z4tJt-CIB-Qet-CRRoMYVwIFCFJY34dqp9vyK5mlCLzFkYuygFp9BNMQLhAKP6IEryxYCi?key=rpyGZ_9kGx4duDE76p7lHQ",
            describe: "Động cơ V8 siêu nạp 5.0L công suất có 557 mã lực"

        },
        {
            id: 2,
            model: "BENTLEY FLYING SPUR",
            manufacturer: "Bentley",
            avatar: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfyXoM_EbCu3OwiPHPiKqz_oKxKC4H7ODfQbYR6kcpnnj1APc-gzAaTuMV5ypuwNhe7UNU2HeN-xvKrrloWSwGapYbKZ-l4PZh0t0EEdMsPnf7q1ROs1g71pd7hRbo8ivM9oAssg4t9UEBEkmq5E4DA3LI?key=rpyGZ_9kGx4duDE76p7lHQ",
            describe: "Động cơ V12 tăng áp kép 6.0L công suất là 626 mã lực và mô-men xoắn 663 lb-ft"

        },
        {
            id: 3,
            model: "MERCEDES MAYBACH S650",
            manufacturer: "Mercedes",
            avatar: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfNJjtntyD6tTbWZk7928WyeyDmVN68B_nk09VEaM3oLrLrYB4hcf2uim0aAWuGOEbO47Laz-L56faNiZ2sg32zz2oIr_j0kv-vjfxfacidKtzDkNsTeiK2525Mom-mNGWo7z6zeEPwjWYSRStkCNa9kfdy?key=rpyGZ_9kGx4duDE76p7lHQ",
            describe: "Động cơ Biturbo-V12 6.0L chế tạo thủ công, cho công suất là 621 mã lực và mô-men xoắn là 738 lb-ft"

        },
        {
            id: 1,
            model: "RANGE ROVER SVAUTOBIOGRAPHY",
            manufacturer: "Land Rover",
            avatar: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPwMFS9kDyj3Iem0ocfgIqZxmPrlRtPsYCJvHcGQirOCozU74barnwks1hSlp6YO3fpBhOqQRov3hNDgh2I7z4tJt-CIB-Qet-CRRoMYVwIFCFJY34dqp9vyK5mlCLzFkYuygFp9BNMQLhAKP6IEryxYCi?key=rpyGZ_9kGx4duDE76p7lHQ",
            describe: "Động cơ V8 siêu nạp 5.0L công suất có 557 mã lực"

        },
        {
            id: 2,
            model: "BENTLEY FLYING SPUR",
            manufacturer: "Bentley",
            avatar: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfyXoM_EbCu3OwiPHPiKqz_oKxKC4H7ODfQbYR6kcpnnj1APc-gzAaTuMV5ypuwNhe7UNU2HeN-xvKrrloWSwGapYbKZ-l4PZh0t0EEdMsPnf7q1ROs1g71pd7hRbo8ivM9oAssg4t9UEBEkmq5E4DA3LI?key=rpyGZ_9kGx4duDE76p7lHQ",
            describe: "Động cơ V12 tăng áp kép 6.0L công suất là 626 mã lực và mô-men xoắn 663 lb-ft"

        },
        {
            id: 3,
            model: "MERCEDES MAYBACH S650",
            manufacturer: "Mercedes",
            avatar: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfNJjtntyD6tTbWZk7928WyeyDmVN68B_nk09VEaM3oLrLrYB4hcf2uim0aAWuGOEbO47Laz-L56faNiZ2sg32zz2oIr_j0kv-vjfxfacidKtzDkNsTeiK2525Mom-mNGWo7z6zeEPwjWYSRStkCNa9kfdy?key=rpyGZ_9kGx4duDE76p7lHQ",
            describe: "Động cơ Biturbo-V12 6.0L chế tạo thủ công, cho công suất là 621 mã lực và mô-men xoắn là 738 lb-ft"

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

                            <IonRow className='d-flex justify-content-center align-items-center mt-5'>
                                <IonLabel className='text-pink fs-6 fw-bold'>List Cars</IonLabel>
                            </IonRow>
                            <SwiperCar list={list} />
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
    )
}

export default CarList
