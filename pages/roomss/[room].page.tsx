import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
// import { rooms } from '../components/Rooms/Rooms'
import { Container } from '@material-ui/core';
const rooms = [
    { iamg: "/papaya-800x500.jpg", h2: "Papaya", prise: "399", p: "Decsdafatures a queen four possfdgsdfgter bed and a pfdsgfsdgsdfgrivate bath. You enter by walking through the garden." },
    { iamg: "/queen.jpg", h2: "Papaya Deluxe", prise: "359", p: "Decorated with an artful tropical flair, Papaya features a queen four poster bed and the garden." },
    { iamg: "/bamboo.jpg", h2: "Deluxe", prise: "489", p: "Poster bed and a private bath. You enter by walking through the garden." },
    { iamg: "/haway.jpg", h2: "Deluxe", prise: "489", p: "Poster bed and a private bath. You enter by walking through the garden." },
]

export default function Room(props) {
    const router = useRouter()



    return (
        <Container>
            <img
                src={props.iamg}
                alt="Picture of the author"
                width={800}
                height={500}
            />
            <p >{props.p}</p>
        </Container>
    )
}

Room.getInitialProps = ctx => {

    return rooms[+ctx.query.room]
}
