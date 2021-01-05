
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((props) => ({
    root: {
        position: 'absolute',
        zIndex: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    slideSize: {
        height: "100vh",
        display: "flex",
        width: "100%",
        zIndex: 0,
        flex: 1,
        justifyContent: "center",
        justifyItems: "center",
        backgroundSize: 'cover'

    },


    slideTextAnimation: {
        color: "white",
        alignSelf: "center",
        position: "relative",
        animation: '$mui-ripple-enter .5s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: "0.5s",



    }, '@keyframes mui-ripple-enter': {
        '0%': {
            opacity: 0,
            transform: "translateY(100px)"
        },

        '100%': {
            opacity: 1,
            transform: "translateY(0)"
        }, 'to': {
            top: 100
        }
    },

}));
export default function Slide({ text, img }) {
    const classes = useStyles();

    return (
        <div style={{ backgroundImage: `url(${img})` }} className={classes.slideSize}>


            <div className={classes.root} />

            <div className={classes.slideTextAnimation}>
                <h2 >{text}</h2>
                <h1>{text}</h1>

                <div >{text}</div>
                <div />
            </div>
        </div >
    );
}
