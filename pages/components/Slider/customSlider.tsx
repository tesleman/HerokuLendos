import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import Slide from "./Slide";

const useStyle = makeStyles({
    slider: {
        zIndex: 2,
        position: "relative",
        marginTop: 0,
        maxHeight: "100vh",
        width: "100%",
        margin: "0 auto"
    },
    slickDots: {
        marginTop: -84,
        display: "flex !important",
        height: 70,
        listStyle: " none",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    img: {
        position: "relative",
        width: 50,
        height: 50,
        margin: "0 5px",
        padding: 0,
        cursor: "pointer"
    },
    a: {
        position: "relative",
        width: 50,
        height: 50,
        margin: "0 5px",
        padding: 0,
        cursor: "pointer",
        left: -15
    },
    prev: {
        left: 25,
        position: "absolute",
        top: "50%",
        zIndex: 5,
        border: "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none",
        display: "flex",
        width: 40,
        height: 40,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        "& svg": {
            flexDirection: "row",
            display: "flex",
            padding: 5,
            justifyContent: "center",
            marginLeft: 4
        }
    },
    next: {
        right: 25,
        position: "absolute",
        top: "50%",
        zIndex: 5,
        border: "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none",
        display: "flex",
        width: 40,
        height: 40,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        "& svg": {
            flexDirection: "row",
            display: "flex",
            padding: 5,
            justifyContent: "center"
        }
    }
});

const item = [
    {
        text: "dasd",
        img:
            "https://unsplash.com/blog/content/images/size/w1600/2020/12/lake-antholz.jpg"
    },
    {
        text: "dasd",
        img:
            "https://unsplash.com/blog/content/images/2020/12/eberhard-grossgasteiger-TMHL7wald8I-unsplash.jpg"
    },
    {
        text: "dasd",
        img:
            "https://unsplash.com/blog/content/images/size/w1000/2020/12/eberhard-grossgasteiger-Bbac08Xv9D8-unsplash.jpg"
    }
];
export default function CustomSlider() {
    let style = useStyle();

    const slider = React.useRef(null);

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    const ondemand: LazyLoadTypes = "ondemand";

    const setyings = {
        lazyLoad: ondemand,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: style.slickDots,
        fade: true,
        arrows: false,
        useTransform: true,
        infinite: true,
        customPaging: function (i) {
            return (
                <a className={style.a}>
                    <img className={style.img} src={`${item[i].img}`} />
                </a>
            );
        }
    };
    return (
        <div>
            <Slider ref={slider} className={style.slider} {...setyings}>
                {item.map((itm, insex) => (
                    <Slide key={insex} {...itm} />
                ))}
            </Slider>
            <div style={{ textAlign: "center" }}>
                <button className={style.prev} onClick={previous}>
                    <ArrowBackIosIcon />
                </button>
                <button className={style.next} onClick={next}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
}
