import Image from "next/image";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { product } from "../data/home"
const Product = ({ layout }) => {
    const product = [
        {
            id: 1,
            pMainImg: "/assets/img/product/oxsys-main-product.png",
            oxyPure: " 93 ± 3%",
            outFlow: "120 LPM",
            opTemp: "10°C to 52°C",
            outPre: "4 bar to 6 bar",
            inVolt: "220-240v ac/50hz",
            power: "9kw/h",
            weight: "560kg",
            size: "1660(L)*805(w)*1460(h)*",
            modelName: "Oxsys 1200s",
            generates: "120 x 60 x 24 = 1,72,000",
            cytype: "30"
        },
        {
            id: 2,
            pMainImg: "/assets/img/product/oxsys600s.png",
            oxyPure: " 93 ± 3%",
            outFlow: "60 LPM",
            opTemp: "10°C to 45°C / 30% to 85% Rh",
            outPre: "4 bar to 6 bar",
            inVolt: "220-240v ac/50hz",
            power: "4.5kw/h",
            weight: "270kg",
            size: "780(L) * 800(w) * 1455(h) *",
            modelName: "Oxsys 600s",
            generates: "60 x 60 x 24 = 86,000",
            cytype: "15"
        }, {
            id: 3,
            pMainImg: "/assets/img/product/oxsys200s.png",
            oxyPure: " 93 ± 3%",
            outFlow: "20 LPM",
            opTemp: "10°C to 52°C",
            outPre: "4 bar to 6 bar",
            inVolt: "220-240v AC/50hz",
            power: "2kw/h",
            weight: "80kg",
            size: "1660(L)*805(w)*1460(h)*",
            modelName: "Oxsys 300s",
            generates: "20 x 60 x 24 = 28,800",
            cytype: "5"
        }
    ]

    const [selectedProduct, setSelectedProduct] = useState(0);
    const selectedProductData = product[selectedProduct];
    return (
        <>
            <div className="desktop-products">
                <div className="row product-box justify-content-between align-items-center">
                    <div className="col-md-6">
                        <h2>{selectedProductData ? selectedProductData.modelName : ''}</h2>
                        {selectedProductData && (
                            <div className="description-box">
                                <h3 className="text-center">Specification</h3>
                                <p>Oxygen Purity: {selectedProductData.oxyPure}</p>
                                <p>Output Flow Rate: {selectedProductData.outFlow}</p>
                                <p>Outlet Pressure Range: {selectedProductData.outPre}</p>
                                <p>Operating Temperature: {selectedProductData.opTemp}</p>
                                <p>Input Voltage: {selectedProductData.inVolt}</p>
                                <p>Max Power: {selectedProductData.power}</p>
                                <p>Weight App.: {selectedProductData.weight}</p>
                                <p>Size mm: {selectedProductData.size}</p>
                            </div>
                        )}
                        {selectedProductData && (
                            <div className="benefits">
                                <h4>
                                    A single unit {selectedProductData.modelName} generates{' '}
                                    {selectedProductData.generates} litres of oxygen per day.
                                </h4>
                                <h4>
                                    This is equal to usable oxygen of {selectedProductData.cytype} d-type cylinders.
                                </h4>
                            </div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <Swiper
                            navigation={true}
                            pagination={{ clickable: true }}
                            onSlideChange={(swiper) => setSelectedProduct(swiper.activeIndex)}
                            modules={[Navigation, Pagination]}
                        >
                            {product.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={item.pMainImg}
                                        alt="Product Image"
                                        width={500}
                                        height={420}
                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="mobile-products">
                {product.map((item) => (
                    <div className="row product-box justify-content-between align-items-center" key={item.id}>
                        <div className="col-md-6">
                            <h2>{item.modelName}</h2>
                            <div className="description-box">
                                <h3 className="text-center">Specification</h3>
                                <p>Oxygen Purity : {item.oxyPure}</p>
                                <p>Output Flow Rate : {item.outFlow}</p>
                                <p>Outlet Pressure Range : {item.outPre}</p>
                                <p>Operating Temperature : {item.opTemp}</p>
                                <p>Input Voltage : {item.inVolt}</p>
                                <p>Max Power : {item.power}</p>
                                <p>Weight App. : {item.weight}</p>
                                <p>Size mm : {item.size}</p>
                            </div>
                            <div className="benefits">
                                <h4>A single unit {item.modelName} generates {item.generates} litres of oxygen per day.</h4>
                                <h4>this is equal to usable oxygen of {item.cytype} d-type cylinders</h4>
                            </div>


                        </div>
                        <div className="col-md-6">

                            <div className="pimage">


                                <Image
                                    src={item.pMainImg}
                                    alt="Project Banner"
                                    className="img-fluid"
                                    width={543}
                                    height={320}
                                />
                            </div>
                        </div>
                    </div >
                ))}
            </div>
        </>
    );
};

export default Product;