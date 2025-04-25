import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './page.css';
import { add, arrowForwardCircleOutline, arrowRedoOutline, key, remove, searchOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';

type MenuItem = {
    id: number;
    name: string;
    content: string;
    image: string;
    quantity: number;
};
const MenuList: React.FC = () => {

    const menu = [
        {
            id: 1,
            name: "Cơm chiên",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: "9.000.000"

        },
        {
            id: 2,
            name: "Cơm chiên hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: "9.000.000"
        },
        {
            id: 3,
            name: "Lẩu hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: "9.000.000"
        },
        {
            id: 4,
            name: "Trái cây tươi mát",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: "9.000.000"
        },
        {
            id: 5,
            name: "Cơm chiên hải sản ssfsdfg",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: "9.000.000"
        },
        {
            id: 6,
            name: "Lẩu hải sản fdhgbfd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: "9.000.000"
        },
        {
            id: 7,
            name: "Trái cây tươi mát fgsd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: "9.000.000"
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

    return (
        <IonPage>
            <IonContent fullscreen >
                <div className=' backgound-home h-25'>
                    <IonRow className='d-flex justify-content-between align-items-center  p-4 pb-2'>
                        <div className='text-white fw-bold ' style={{ fontSize: "20px" }}>Wellcome to Happy Corp</div>
                        <img src='https://beta.ellm.io/templates/assets/img/logo-small.svg' alt='logo' style={{ width: "40px" }}></img>

                    </IonRow>
                    <div style={{ height: 'calc(100vh - 70px)', overflowY: 'auto', }}>
                        <IonCard className='m-0  p-3 rounded-bottom-0 rounded-top-5 pb-5' style={{ marginBottom: "70px !importamt" }}>
                            <IonRow className='d-flex justify-content-center align-items-center mt-2'>
                                <IonLabel className='text-pink fs-6 fw-bold'>Concept Cổ tích</IonLabel>
                            </IonRow>

                            <IonRow className=' d-flex align-items-center'>
                                <IonCol size='4'>
                                    <select className='w-100 fs-13 p-2 border border-1 rounded-3 bg-light' >
                                        <option value={1}>Quận 1</option>
                                        <option value={2}>Quận 2</option>
                                    </select>
                                </IonCol>
                                <IonCol size='8'>
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
                            <IonFooter className=''>
                                <IonRow className='d-flex justify-content-center pb-2 mt-2'>
                                    <button className='book-btn fs-13 fw-bold p-3 w-75 d-flex justify-content-between'>Giỏ hàng <span>{selectFood.length > 0 ? selectFood.length : 0} món</span></button>
                                </IonRow>
                            </IonFooter>
                        </IonCard>

                    </div>
                </div>

            </IonContent>





        </IonPage>
    );
};

export default MenuList;
