import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { rooms } from '../components/Rooms/Rooms'
import { Container } from '@material-ui/core';


export default function Room(props) {
    const router = useRouter()



    return (
        <Container>
            <Image
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
