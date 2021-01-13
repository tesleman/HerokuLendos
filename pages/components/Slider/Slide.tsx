import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { itemInterface } from "./customSlider";

const useStyles = makeStyles((props) => ({
    slideSize: {
        height: "100vh",
        display: "flex",
        width: "100%",
        zIndex: 0,
        flex: 1,
        justifyContent: "center",
        justifyItems: "center",
        backgroundSize: "cover",
        marginTop: -20
    },

    slideTextAnimation: {
        color: "white",
        alignSelf: "center",
        position: "relative",
        zIndex: 4,
        transitionDuration: "0.5s",
        textAlign: "center",
        marginBottom: 120,
        "& h2 ": {
            animation: "$mui-ripple-enter 1s cubic-bezier(0.4, 0, 0.2, 1)"
        },
        "& h1": {
            animation: "$mui-ripple-enter 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
        },
        "& div": {
            animation: "$mui-ripple-enter 2s cubic-bezier(0.4, 0, 0.2, 1)"
        }
    },
    "@keyframes mui-ripple-enter": {
        "0%": {
            opacity: 0,
            transform: "translateY(100px)"
        },

        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    }
}));
export default function Slide({ text, img, h1, h2 }: itemInterface) {
    const classes = useStyles();

    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className={classes.slideSize}
        >
            <div className={classes.slideTextAnimation}>
                <h2>{h2}</h2>
                <h1>{h1}</h1>

                <div>{text}</div>
                <div />
            </div>
        </div>
    );
}
