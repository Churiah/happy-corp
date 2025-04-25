import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, key, locateOutline, locationSharp, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';

type MenuItem = {
    id: number;
    name: string;
    content: string;
    image: string;
    quantity: number;
};
type AssistantItem = {
    id: number;
    name: string;
    describe: string;
    avatar: string;
};

const RoomConceptBooking: React.FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenAssistant, setIsOpenAssistant] = useState(false);
    const history = useHistory();

    const menu = [
        {
            id: 1,
            name: "Cơm chiên",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 2,
            name: "Cơm chiên hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 3,
            name: "Lẩu hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 4,
            name: "Trái cây tươi mát",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 5,
            name: "Cơm chiên hải sản ssfsdfg",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 6,
            name: "Lẩu hải sản fdhgbfd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 7,
            name: "Trái cây tươi mát fgsd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        }
    ]

    const assistant = [
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí với 3 năm kinh nghiệp"

        },
        {
            id: 2,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 3,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí với 3 năm kinh nghiệp"

        },
        {
            id: 4,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 5,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 6,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 7,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        }
    ]

    const [menuWithQty, setMenuWithQty] = useState<MenuItem[]>([]);

    // Chỉ cập nhật menuWithQty nếu menu thay đổi thực sự
    useEffect(() => {
        if (menu && menu.length > 0) {
            const isSame = menu.every((item, index) =>
                menuWithQty[index] && item.id === menuWithQty[index].id
            );

            if (!isSame) {
                const initData = menu.map(item => ({
                    ...item,
                    quantity: 0
                }));
                setMenuWithQty(initData);
            }
        }
    }, [menu]);


    // Lưu vào localStorage mỗi khi menuWithQty thay đổi
    const [selectFood, setSelectFood] = useState<MenuItem[]>([]);
    useEffect(() => {
        const selectedItems = menuWithQty.filter(item => item.quantity > 0);
        localStorage.setItem('cartItems', JSON.stringify(selectedItems));
        setSelectFood(selectedItems);
    }, [menuWithQty]);

    const increaseQty = (id: number) => {
        setMenuWithQty(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id: number) => {
        setMenuWithQty(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                    : item
            )
        );
    };

    const removeFood = (id: number) => {
        setSelectFood(prev => {
            const updated = prev.filter(selectFood => selectFood.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(updated));
            return updated;
        });
        setMenuWithQty(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: 0 }
                    : item
            )
        );

    }

    const [selectAssistant, setSelectAssistant] = useState<AssistantItem[]>([]);

    const handleSelectAssistant = (assistant: AssistantItem) => {
        setSelectAssistant(prev => {
            const exists = prev.some(item => item.id === assistant.id);
            let updated;

            if (exists) {
                updated = prev.filter(item => item.id !== assistant.id);
            } else {
                updated = [...prev, assistant];
            }

            localStorage.setItem("selectAssistant", JSON.stringify(updated));
            return updated;
        });
    };


    return (
        <IonPage>
            <IonContent fullscreen >
                <div className=' backgound-home h-25'>
                    <IonRow className='d-flex align-items-center  p-4 pb-2'>
                        <IonCol size='10' className='d-flex align-items-center'>
                            <button className='text-center rounded-circle text-white me-2' style={{ width: "40px", height: "40px", backgroundColor: "#ff6600" }} onClick={() => history.goBack()}>
                                <IonIcon icon={arrowBack} style={{ fontSize: "22px" }} />
                            </button>
                            <div className='text-white fw-bold ' style={{ fontSize: "17px" }}>Booking Concept Room</div>
                        </IonCol>
                        <IonCol size='2' className='text-end'>
                            <img src='https://beta.ellm.io/templates/assets/img/logo-small.svg' alt='logo' style={{ width: "40px" }}></img>
                        </IonCol>
                    </IonRow>
                    <div style={{ height: 'calc(100vh - 70px)', overflowY: 'auto' }} >
                        <IonCard className='m-0  p-3 pb-5 rounded-bottom-0 rounded-top-5 shadow-none'>
                            <IonRow className='d-flex justify-content-center align-items-center'>

                                <IonLabel className='text-pink fs-6 fw-bold'>Khách sạn Sài Gòn</IonLabel>
                            </IonRow>
                            <IonRow className='mt-3'>
                                <div id="slideRoomConceptBooking" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#slideRoomConceptBooking" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#slideRoomConceptBooking" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#slideRoomConceptBooking" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src='https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg' className='w-100 rounded-4'></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img src='https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg' className='w-100 rounded-4'></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img src='https://decoxdesign.com/upload/images/merose-villa-1300m2-phong-ngu-05-decox-design.jpg' className='w-100 rounded-4'></img>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#slideRoomConceptBooking" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#slideRoomConceptBooking" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </IonRow>
                            <IonList className='p-0 px-3'>
                                <IonRow className='d-flex align-items-center mt-3 text-dark fs-15' >
                                    <IonIcon className='me-2 text-pink' icon={locationSharp} style={{ width: "20px", height: "20px" }}></IonIcon>
                                    Phòng với phong cách cổ tích
                                </IonRow>
                                <IonRow className='d-flex align-items-center mt-2 text-dark fs-13' >
                                    <IonIcon className='me-2 text-pink' icon={sparklesSharp} style={{ width: "20px", height: "20px" }}></IonIcon>
                                    Màu tường nhẹ nhàng, mềm mại để tăng sự thông thoáng và thoải mái cho phòng ngủ. Ngoài ra, nên đặt một cửa sổ lớn hoặc một lớp kính ngay cạnh giường, chỉ cần mở cửa sổ để căn phòng rộng rãi hơn.
                                </IonRow>
                                <IonRow className='d-flex align-items-center'>
                                    <IonCol size='6' className='ps-0'>
                                        <IonRow className='text-pink fs-13 fw-bold mt-3'>Thời gian checkin <span className='text-danger ms-1'>(*)</span></IonRow>
                                        <IonRow className='mt-1'>
                                            <input type='datetime-local' className='p-2 rounded-3 fs-13 border border-1 w-100'></input>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size='6' className='pe-0'>
                                        <IonRow className='text-pink fs-13 fw-bold mt-3'>Thời gian checkout <span className='text-danger ms-1'>(*)</span></IonRow>
                                        <IonRow className='mt-1'>
                                            <input type='datetime-local' className='p-2 rounded-3 fs-13 border border-1 w-100'></input>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Số lượng <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-1'>
                                    <input type='number' className='p-2 rounded-3 fs-13 border border-1 w-100' placeholder='0'></input>
                                </IonRow>
                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Họ và tên <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-1'>
                                    <input type='text' className='p-2 rounded-3 fs-13 border border-1 w-100' placeholder='Họ và tên'></input>
                                </IonRow>
                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Số điện thoại <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-1'>
                                    <input type='tel' className='p-2 rounded-3 fs-13 border border-1 w-100' placeholder='Số điện thoại'></input>
                                </IonRow>

                                <IonRow className='d-flex justify-content-between mt-3 align-items-center'>
                                    <div className='text-pink fs-13 fw-bold'>Chọn Menu</div>
                                    <button className='book-btn fs-13 p-2' onClick={() => setIsOpenMenu(true)}>Chọn</button>
                                </IonRow>
                                {selectFood && selectFood.length > 0 ? selectFood.map((food, key) => {
                                    return (
                                        <>
                                            <IonRow className='border-bottom mt-2' key={key}>
                                                <IonCol size='2'>
                                                    <img src={`${food.image}`} className='rounded-3'></img>
                                                </IonCol>
                                                <IonCol size='10'>
                                                    <div className='text-pink fs-13'>{food.name}</div>
                                                    <div className='text-secondary ' style={{ fontSize: "12px" }}>{food.content}</div>
                                                    <IonRow className='d-flex justify-content-between align-items-center'>
                                                        <div className='text-dark'>Số lượng: {food.quantity}</div>
                                                        <button onClick={() => removeFood(food.id)} className='bg-danger fs-11 p-1 text-white rounded-3 d-flex align-items-center'><IonIcon icon={trashOutline} className='me-1'></IonIcon> Xóa</button>
                                                    </IonRow>

                                                </IonCol>
                                            </IonRow>
                                        </>
                                    )
                                }) :
                                    <IonRow className='border-bottom pb-3 mt-2 fs-13 d-flex justify-content-center'>
                                        Hãy chọn món ăn để cuộc hẹn của bạn ấm no nhé!
                                    </IonRow>
                                }
                                <IonRow className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='text-pink fs-13 fw-bold'>Chọn Trợ lí</div>
                                    <button className='book-btn fs-13 p-2' onClick={() => { setIsOpenAssistant(true); }}>Chọn</button>
                                </IonRow>

                                {selectAssistant && selectAssistant.length > 0 ? selectAssistant.map((assistant, key) => {
                                    return (
                                        <>
                                            <IonRow className='border-bottom mt-2' key={key}>
                                                <IonCol size='2'>
                                                    <img src={`${assistant.avatar}`} className='rounded-3'></img>
                                                </IonCol>
                                                <IonCol size='10'>
                                                    <div className='text-pink fs-13'>{assistant.name}</div>
                                                    <div className='text-secondary ' style={{ fontSize: "12px" }}>{assistant.describe}</div>

                                                </IonCol>
                                            </IonRow>
                                        </>
                                    )
                                }) :
                                    <IonRow className='border-bottom pb-3 mt-2 fs-13 d-flex justify-content-center'>
                                        Hãy chọn trợ lí để giúp đỡ bạn nhé!
                                    </IonRow>
                                }

                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Ghi chú</IonRow>
                                <IonRow className='mt-1'>
                                    <textarea rows={5} className='p-2 rounded-3 fs-13 border border-1 w-100' placeholder='Ghi chú'></textarea>
                                </IonRow>

                                <IonRow className='py-4 w-100 d-flex justify-content-center'>
                                    <button className='book-btn fs-15 p-3 w-75'>Booking </button>
                                </IonRow>

                                <IonRow></IonRow>
                            </IonList>

                        </IonCard>
                    </div>
                </div>

            </IonContent>
            <IonModal
                id="example-modal-menu"
                isOpen={isOpenMenu}
                backdropDismiss={false}
                initialBreakpoint={1}
                breakpoints={[0.3, 0.5, 1]}
                className='custom-modal'
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle className='fs-15'>Chọn món ăn</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonRow className=' d-flex align-items-center'>
                        <IonCol size='5'>
                            <select className='w-100 fs-13 p-2 border border-1 rounded-3 bg-light' >
                                <option value={1}>Quận 1</option>
                                <option value={2}>Quận 2</option>
                            </select>
                        </IonCol>
                        <IonCol size='7'>
                            <input className='rounded-3 p-2 fs-13 w-100 border border-1 bg-light' placeholder='search'></input>

                        </IonCol>

                    </IonRow>

                    <IonRow className='mt-2'>
                        {menuWithQty && menuWithQty.map((food, key) => {
                            return (
                                <>
                                    <IonCol size='6' key={key}>
                                        <IonCard className='m-0 p-3 rounded-3'>
                                            <img src={`${food.image}`} className='rounded-3'></img>
                                            <div className='text-pink fw-bold fs-13 text-center my-2'>{food.name}</div>
                                            <div className='text-secondary ' style={{ fontSize: "12px" }}>{food.content}</div>
                                            <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                                                <IonButton
                                                    size="small"
                                                    fill="outline"
                                                    color="medium"
                                                    onClick={() => decreaseQty(food.id)}
                                                >
                                                    <IonIcon icon={remove} />
                                                </IonButton>

                                                <span style={{ minWidth: "24px", textAlign: "center" }}>{food.quantity}</span>

                                                <IonButton
                                                    size="small"
                                                    fill="outline"
                                                    color="primary"
                                                    onClick={() => increaseQty(food.id)}
                                                >
                                                    <IonIcon icon={add} />
                                                </IonButton>
                                            </div>
                                        </IonCard>
                                    </IonCol>
                                </>
                            )
                        })}
                    </IonRow>

                </IonContent>
                <IonFooter>
                    <IonRow className='d-flex justify-content-center my-3 mt-2'>
                        <button className='book-btn fs-15 p-3 w-75' onClick={() => { setIsOpenMenu(false) }}>Đặt {selectFood.length > 0 && selectFood.length} món </button>
                    </IonRow>
                </IonFooter>
            </IonModal>

            <IonModal
                id="example-modal-menu"
                isOpen={isOpenAssistant}
                backdropDismiss={false}
                initialBreakpoint={1}
                breakpoints={[0.3, 0.5, 1]}
                className='custom-modal'
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle className='fs-15'>Chọn trợ lí</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => { setIsOpenAssistant(false); }} className='fs-13'>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonRow className='px-3'>
                        <input className='rounded-3 p-2 fs-13 w-100 border border-1' placeholder='search'></input>
                    </IonRow>

                    <IonRow className='mt-3'>
                        {assistant && assistant.map((assistant, key) => {
                            const isSelected = selectAssistant.some(item => item.id === assistant.id);
                            return (
                                <IonCol size='6' key={key}>
                                    <IonCard className='m-0 p-3 rounded-3'>
                                        <img src={`${assistant.avatar}`} className='rounded-3'></img>
                                        <div className='text-pink fw-bold fs-13 text-center my-2'>{assistant.name}</div>
                                        <div className='text-secondary three-line-block' style={{ fontSize: "12px" }}>{assistant.describe}</div>
                                        <div className='d-flex justify-content-center mt-2' onClick={() => { handleSelectAssistant(assistant) }}>
                                            <button className={` fs-13 p-2 w-75 ${isSelected ? 'bg-light p-2 text-black rounded-pill' : 'book-btn'}`} >{isSelected ? 'Đã chọn' : 'Chọn ngay'}</button>
                                        </div>
                                    </IonCard>
                                </IonCol>
                            )
                        })}

                    </IonRow>



                </IonContent>
                <IonFooter>
                    <IonRow className='d-flex justify-content-center my-3 mt-2'>
                        <button className='book-btn fs-15 p-3 w-75' onClick={() => { setIsOpenAssistant(false) }}>Book</button>
                    </IonRow>
                </IonFooter>
            </IonModal>
        </IonPage>
    );
};

export default RoomConceptBooking;
