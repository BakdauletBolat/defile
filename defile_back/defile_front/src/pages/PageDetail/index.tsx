import Main from "../../layouts/main";

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import {HomeOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useStoreContext } from "../../hooks/useContext";
import LoadingScreen from "../../components/loadingScreen";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";
import parse from 'html-react-parser';

function DetailPage() {

    let { slug } = useParams();
    const { application } = useStoreContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [swiper, setSwiper] = useState<SwiperClass>();
    const navigate = useNavigate();
    const getPage = async () => {
        setIsLoading(true);
        await application?.loadPage(slug);
        setIsLoading(false);

    }


    useEffect(() => {
        getPage();
    }, [slug]);

    if (application?.page == undefined) {
        return <div>Нет данных</div>
    }

    if (isLoading) {
        return <LoadingScreen></LoadingScreen>
    }

    return (
        <Main>
            <div className="detail-top">
                <div className="container">
                    <div className="breadcrumb">
                        <div className="breadcrumb__item">
                            <Link to="/"><HomeOutlined></HomeOutlined></Link>
                            <div className="breadcrumb__divider">/</div>
                        </div>
                        <div className="breadcrumb__item">
                            <Link to="/">{application?.page?.title}</Link>
                            <div className="breadcrumb__divider">/</div>
                        </div>

                    </div>
                </div>
    
                <div className='container'>
                <Swiper
                slidesPerView={1}
                spaceBetween={50}      
                style={{
                    padding: '20px 20px'
                }}
                onSwiper={(swiper) => setSwiper(swiper)}
                breakpoints={{
                    1500: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 2
                    },
                    1120: {
                        slidesPerView: 1
                    },
                    720: {
                        slidesPerView: 1
                    }
                }}
            >
                {application?.page.photos!.map(photo => <SwiperSlide key={photo.id}>
                    <img width='100%' height='200px' style={
                        {
                            objectFit:'cover'
                        }
                    } src={photo.photo}  />
                </SwiperSlide>)
                }
            </Swiper>
                </div>
              
                
                <div className="detail-top__row container ">
                    <div className="detail-desc">
                        <div className="detail-product__name">{application?.page?.title}</div>
                        <div className="detail-product__desc">{ parse(application!.page!.content!) }</div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default observer(DetailPage);