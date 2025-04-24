import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import './page.css';
import { add, arrowForwardCircleOutline, arrowRedoOutline, key, locateOutline, locationSharp, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

type MenuItem = {
    id: number;
    name: string;
    content: string;
    image: string;
    quantity: number;
};


const YachtBooking: React.FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenAssistant, setIsOpenAssistant] = useState(false);


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

    const [selectAssistant, setSelectAssistant] = useState<{
        id: number;
        name: string;
        age: number;
        avatar: string;
        describe: string;
    } | undefined>(undefined);


    return (
        <IonPage>
            <IonContent fullscreen >
                <div className=' backgound-home h-25'>
                    <IonRow className='d-flex justify-content-between align-items-center  p-4 pb-2'>
                        <div className='text-white fw-bold ' style={{ fontSize: "20px" }}>Wellcome to Happy Corp</div>
                        <img src='https://beta.ellm.io/templates/assets/img/logo-small.svg' alt='logo' style={{ width: "40px" }}></img>

                    </IonRow>
                    <div style={{ height: 'calc(100vh - 70px)', overflowY: 'auto' }} >
                        <IonCard className='m-0  p-3 pb-5 rounded-bottom-0 rounded-top-5 shadow-none'>
                            <IonRow className='d-flex justify-content-center align-items-center'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Du thuyền A123</IonLabel>
                            </IonRow>
                            <IonRow className='mt-3'>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src='https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg' className='w-100 rounded-4'></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img src='https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg' className='w-100 rounded-4'></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img src='https://danviet.mediacdn.vn/upload/3-2019/images/2019-07-16/Chiem-nguong-sieu-du-thuyen-400-trieu-do-cua-ty-phu-giau-nhat-the-gioi-syiq_82913-1563250315-width800height456.jpg' className='w-100 rounded-4'></img>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </IonRow>
                            <IonList className='p-0 px-3'>
                                <IonRow className='d-flex align-items-center mt-3 text-dark fs-15' >
                                    <IonIcon className='me-2 text-pink' icon={locationSharp} style={{ width: "20px", height: "20px" }}></IonIcon>
                                    Bến Bạch Đằng, Quận 1
                                </IonRow>
                                <IonRow className='d-flex align-items-center mt-2 text-dark fs-15' >
                                    <IonIcon className='me-2 text-pink' icon={sparklesSharp} style={{ width: "20px", height: "20px" }}></IonIcon>
                                    Du thuyện hạn sang với không gian cổ tích
                                </IonRow>
                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Địa điểm</IonRow>
                                <IonRow className='mt-1'>
                                    <input type='text' className='p-2 rounded-3 fs-13 border border-1 w-100' placeholder='Nhập địa điểm'></input>
                                </IonRow>
                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Thời gian</IonRow>
                                <IonRow className='mt-1'>
                                    <input type='datetime-local' className='p-2 rounded-3 fs-13 border border-1 w-100'></input>
                                </IonRow>
                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Họ và tên</IonRow>
                                <IonRow className='mt-1'>
                                    <input type='text' className='p-2 rounded-3 fs-13 border border-1 w-100' placeholder='Họ và tên'></input>
                                </IonRow>
                                <IonRow className='text-pink fs-13 fw-bold mt-3'>Số điện thoại</IonRow>
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
                                    <button className='book-btn fs-13 p-2' onClick={() => setIsOpenAssistant(true)}>Chọn</button>
                                </IonRow>
                                {selectAssistant ?
                                    <IonRow className='border-bottom mt-2'>
                                        <IonCol size='2'>
                                            <img src={`${selectAssistant.avatar}`} className='rounded-3'></img>
                                        </IonCol>
                                        <IonCol size='10'>
                                            <div className='text-pink fs-13'>{selectAssistant.name}</div>
                                            <div className='text-secondary fs-13'>{selectAssistant.describe}</div>
                                            <div className='d-flex justify-content-end mt-2'>
                                                <button onClick={() => { setSelectAssistant(undefined); localStorage.removeItem("selectAssistant") }} className='bg-danger fs-11 p-1 text-white rounded-3 d-flex align-items-center'><IonIcon icon={trashOutline} className='me-1'></IonIcon> Xóa</button>

                                            </div>
                                        </IonCol>
                                    </IonRow>
                                    :
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
                        {/* <IonButtons slot="end">
                            <IonButton onClick={() => {setIsOpenMenu(false)}}>Close</IonButton>
                        </IonButtons> */}
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
                    <IonSearchbar showClearButton="always" placeholder="search" className='fs-13 w-100 p-0'></IonSearchbar>
                    <IonRow className='mt-2'>
                        {menuWithQty && menuWithQty.map((food, key) => {
                            return (
                                <>
                                    <IonCol size='6'>
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
                        <IonTitle className='fs-15'>Chọn món ăn</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => { setIsOpenAssistant(false) }}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonRow className='px-3'>
                        <input className='rounded-3 p-2 fs-13 w-100 border border-1' placeholder='search'></input>
                    </IonRow>

                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper mt-3"
                        style={{ marginLeft: "8%" }}
                    >
                        {assistant.map((assistant, index) => (
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
                                    <button className="book-btn" onClick={() => {
                                        setSelectAssistant(assistant);
                                        localStorage.setItem("selectAssistant", JSON.stringify(assistant));
                                        setIsOpenAssistant(false)
                                    }}>BOOK ME NOW</button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </IonContent>
                <IonFooter>
                    <IonRow className='d-flex justify-content-center my-3 mt-2'>
                        <button className='book-btn fs-15 p-3 w-75' onClick={() => { setIsOpenMenu(false) }}>Đặt {selectFood.length > 0 && selectFood.length} món </button>
                    </IonRow>
                </IonFooter>
            </IonModal>
        </IonPage>
    );
};

export default YachtBooking;
