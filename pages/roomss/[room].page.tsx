import React from "react";

import { useRouter } from "next/router";
import { roomss } from "../index.page";
import { Container } from "@material-ui/core";
import { NextPageContext } from "next";

export default function Room(props) {
    const router = useRouter();

    return (
        <Container>
            <img
                style={{ marginTop: "15px" }}
                src={props.iamg}
                alt="Picture of the author"
                width={800}
                height={500}
            />
            <p>{props.p}</p>
        </Container>
    );
}

Room.getInitialProps = (ctx: NextPageContext) => {
    return roomss[+ctx.query.room];
};
