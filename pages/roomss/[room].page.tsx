import React from "react";
import { Container, makeStyles, Theme } from "@material-ui/core";
import { NextPageContext } from "next";
import mediumZoom from "medium-zoom";

import { roomss } from "../index.page";

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
    },
    smallImageWrap: {
        width: "20%",
        position: "relative",
        display: "flex",
        flexDirection: "row"
    },
    smallImage: {
        objectFit: "fill",
        height: "100%",
        width: "100%",
        marginLeft: 15,
        "&:nth-child(1)": {
            marginLeft: 0
        }
    }
}));
interface props {
    iamg: Array<string>;
    p: string;
    h2: string;
}
export default function Room(props: props): React.ReactElement {
    const style = useStyle();
    React.useEffect(() => {
        mediumZoom(".imagin img");
        return () => {};
    }, []);
    return (
        <div>
            <div className={style.h2Wrap}>
                <h2 className={style.h2}>{props.h2}</h2>
            </div>
            <Container>
                <img
                    className={style.image}
                    src={props.iamg[0]}
                    alt="Picture of the author"
                />

                <div className="imagin">
                    <div className={style.smallImageWrap}>
                        {props.iamg.map((item: string, index: number) => (
                            <img
                                className={style.smallImage}
                                key={index}
                                src={item}
                                alt={props.h2}
                            />
                        ))}
                    </div>
                </div>
                <p>{props.p}</p>
            </Container>
        </div>
    );
}

Room.getInitialProps = (ctx: NextPageContext) => {
    return roomss[+ctx.query.room];
};
