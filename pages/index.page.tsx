import "typeface-playfair-display";
// import "material-design-icons"
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import CustomSlider from "./components/Slider/customSlider";
import Information from "./components/Info/Information";
import RunningNumbers from "./components/RunningNimbers/RunningNumbers";
import Rooms from "./components/Rooms/Rooms";
import Amenities from "./components/Amenities/Amenities";
import BottomMenue from "./components/BottomMenue/BottomMenue";

export const roomss = [
    {
        iamg: "/papaya-800x500.jpg",
        h2: "Papaya",
        prise: "399",
        p:
            "Decsdafatures a queen four possfdgsdfgter bed and a pfdsgfsdgsdfgrivate bath. You enter by walking through the garden."
    },
    {
        iamg: "/queen.jpg",
        h2: "Papaya Deluxe",
        prise: "359",
        p:
            "Decorated with an artful tropical flair, Papaya features a queen four poster bed and the garden."
    },
    {
        iamg: "/bamboo.jpg",
        h2: "Deluxe",
        prise: "489",
        p:
            "Poster bed and a private bath. You enter by walking through the garden."
    },
    {
        iamg: "/haway.jpg",
        h2: "Deluxe",
        prise: "489",
        p:
            "Poster bed and a private bath. You enter by walking through the garden."
    }
];

const useStyle = makeStyles({
    bacground: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -1,
        "&::after": {
            content: '""',
            backgroundColor: "#9e9e9e",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1,
            opacity: 0.3
        }
    }
});

export default function Home({ rooms }) {
    let style = useStyle();

    return (
        <div className={style.bacground}>
            <Head>
                <title>My page title</title>
                <link
                    rel="stylesheet"
                    href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
                ></link>
            </Head>
            <CustomSlider />
            <Information />,
            <RunningNumbers />
            <Rooms rooms={rooms} />
            <Amenities />
            <BottomMenue />
        </div>
    );
}

Home.getInitialProps = (ctx) => {
    const rooms = [
        {
            iamg: "/papaya-800x500.jpg",
            h2: "Papaya",
            prise: "399",
            p:
                "Decsdafatures a queen four possfdgsdfgter bed and a pfdsgfsdgsdfgrivate bath. You enter by walking through the garden."
        },
        {
            iamg: "/queen.jpg",
            h2: "Papaya Deluxe",
            prise: "359",
            p:
                "Decorated with an artful tropical flair, Papaya features a queen four poster bed and the garden."
        },
        {
            iamg: "/bamboo.jpg",
            h2: "Deluxe",
            prise: "489",
            p:
                "Poster bed and a private bath. You enter by walking through the garden."
        },
        {
            iamg: "/haway.jpg",
            h2: "Deluxe",
            prise: "489",
            p:
                "Poster bed and a private bath. You enter by walking through the garden."
        }
    ];
    return { rooms };
};
