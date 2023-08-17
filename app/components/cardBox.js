import React from 'react'
import Image from 'next/image'
import './cardbox.css'
const cardBox = () => {
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
            cardImg: "/assets/img/dependable.svg",
            cardImgAlt: "Dependable",
            cardTitle: "Dependable",
            cardDescription: "if one unit fails the equipment doesn't stop"
        }
        // {
        //     id: 2,
        //     cardImg: "/assets/img/quick-install.svg",
        //     cardImgAlt: "Quick Installation",
        //     cardTitle: "Quick Installation",
        //     cardDescription: "gets installed within few hours unlike oxygen plants"
        // },
        , {
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
            cardImg: "/assets/img/eco-friendly.svg",
            cardImgAlt: "Lesser Running Cost",
            cardTitle: "Lesser Running Cost",
            cardDescription: "works 24 hours a day 365 day a year"
        }
    ]
    return (

        <>
            {box.map((item) => (
                <div className="thecard" key={item.id} data-aos="fade-right">
                    <Image
                        src={item.cardImg}
                        width={50}
                        height={50}
                        alt={item.cardImgAlt}
                    />
                    <p>{item.cardDescription}</p>
                    <h2>{item.cardTitle}</h2>
                </div>
            ))}
        </>
    )
}

export default cardBox
