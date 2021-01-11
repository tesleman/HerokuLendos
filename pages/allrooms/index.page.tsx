import React from "react";
import Rooms from "../components/Rooms/Rooms";

export default function AllRooms({ rooms }) {
    return (
        <div>
            <Rooms rooms={rooms} />
        </div>
    );
}
AllRooms.getInitialProps = (ctx) => {
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
