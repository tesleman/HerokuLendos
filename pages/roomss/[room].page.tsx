import React from "react";

import { useRouter } from "next/router";
import { roomss } from "../index.page";
import { Container, makeStyles, Theme } from "@material-ui/core";
import { NextPageContext } from "next";

const useStyle = makeStyles((theme: Theme) => ({
    h2: {
        fontSize: 35,
        fontWeight: 400,
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
        marginBottom: 60,
        color: "#828076"
    },
    h2Wrap: {
        display: "flex",
        msFlexDirection: "row",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#d6d5d5"
    },
    image: {
        marginTop: "15px",
        width: "100%"
    }
}));

export default function Room(props) {
    const router = useRouter();
    const style = useStyle();
    return (
        <div>
            <div className={style.h2Wrap}>
                <h2 className={style.h2}>{props.h2}</h2>
            </div>
            <Container>
                <img
                    className={style.image}
                    src={props.iamg}
                    alt="Picture of the author"
                />
                <p>{props.p}</p>
            </Container>
        </div>
    );
}

Room.getInitialProps = (ctx: NextPageContext) => {
    return roomss[+ctx.query.room];
};
