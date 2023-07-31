import React from 'react';
import Image from 'next/image';
import "./box.css";

export default function Box() {
    const box = [
        {
            id: 1,
            cardImg: "/assets/img/economical.svg",
            cardImgAlt: "Economical",
            cardTitle: "Economical  ",
            cardDescription: "Running cost way less than an oxygen plant, as well as oxygen cylinders"
        },
        {
            id: 2,
            cardImg: "/assets/img/quick-install.svg",
            cardImgAlt: "Quick Installation",
            cardTitle: "Quick Installation",
            cardDescription: "gets installed within few hours unlike oxygen plants"
        }, {
            id: 3,
            cardImg: "/assets/img/support.svg",
            cardImgAlt: "Customer Support",
            cardTitle: "Customer Support",
            cardDescription: "we provide the best after sales service in the market"
        }, {
            id: 4,
            cardImg: "/assets/img/in-house.svg",
            cardImgAlt: "Inhouse oxygen generation",
            cardTitle: "Inhouse oxygen generation",
            cardDescription: "reduce dependency on oxygen cylinders"
        }, {
            id: 5,
            cardImg: "/assets/img/nonstop.svg",
            cardImgAlt: "Nonstop Function",
            cardTitle: "Nonstop Function",
            cardDescription: "works 24 hours a day 365 day a year"
        }
        , {
            id: 6,
            cardImg: "/assets/img/dependable.svg",
            cardImgAlt: "Dependable",
            cardTitle: "Dependable",
            cardDescription: "if one unit fails the equipment doesn't stop"
        }
        , {
            id: 7,
            cardImg: "/assets/img/high-pressure.svg",
            cardImgAlt: "High Pressure",
            cardTitle: "High Pressure",
            cardDescription: "can produce 4 to 7 bars of pressure"
        }
        , {
            id: 8,
            cardImg: "/assets/img/customizable.svg",
            cardImgAlt: "Customizable",
            cardTitle: "Customizable",
            cardDescription: "can be tailored the requirement of the hospital"
        }, {
            id: 9,
            cardImg: "/assets/img/portable.svg",
            cardImgAlt: "Portable",
            cardTitle: "Portable",
            cardDescription: "can be shifted to any desired place, any time"
        }
        , {
            id: 10,
            cardImg: "/assets/img/durable.svg",
            cardImgAlt: "long lasting ",
            cardTitle: "long lasting ",
            cardDescription: "designed to last for 18 to 20 years"
        }
        , {
            id: 11,
            cardImg: "/assets/img/eco-friendly.svg",
            cardImgAlt: "Eco Friendly",
            cardTitle: "Eco Friendly ",
            cardDescription: "consume less energy than an oxygen plant"
        }, {
            id: 12,
            cardImg: "/assets/img/low-maintainance.svg",
            cardImgAlt: "Low Maintainance",
            cardTitle: "Low Maintainance",
            cardDescription: "The maintainance is way lesser than an oxygen plant"
        }, {
            id: 13,
            cardImg: "/assets/img/safety.svg",
            cardImgAlt: "Safety",
            cardTitle: "Safety",
            cardDescription: "machine has low pressure alarm and a fire alarms"
        }, {
            id: 14,
            cardImg: "/assets/img/shortest-lead-time.svg",
            cardImgAlt: "Shortest Lead Time ",
            cardTitle: "Shortest Lead Time ",
            cardDescription: "ready to deliver within 3 days"
        }
    ];

    return (
        <>
            {box.map((item) => (
                <div className="box" key={item.id}>
                    <div className="imgBox">
                        <Image
                            src={item.cardImg}
                            width={50}
                            height={50}
                            alt={item.cardImgAlt}
                        />
                        {/* <h2>{item.cardTitle}</h2> */}
                    </div>
                    <div className="content">
                        <h2>{item.cardTitle}</h2>
                        <p>{item.cardDescription}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
