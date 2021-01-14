import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Slide from "./Slide";

const useStyle = makeStyles({
    slider: {
        zIndex: -1,
        position: "relative",
        marginTop: -45,
        maxHeight: "100vh",
        width: "100%"
    },
    dots: {
        zIndex: 999999,
        marginTop: -80
    }
});

const item = [
    {
        text: "dasd",
        h2:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iure?",
        h1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iure?",
        img:
            "https://unsplash.com/blog/content/images/size/w1600/2020/12/lake-antholz.jpg"
    },
    {
        text: "dasd",
        h2:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iure?",
        h1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iure?",
        img:
            "https://unsplash.com/blog/content/images/2020/12/eberhard-grossgasteiger-TMHL7wald8I-unsplash.jpg"
    },
    {
        text: "dasd",
        h2:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iure?",
        h1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iure?",
        img:
            "https://unsplash.com/blog/content/images/size/w1000/2020/12/eberhard-grossgasteiger-Bbac08Xv9D8-unsplash.jpg"
    }
];

export interface itemInterface {
    h2?: string;
    h1?: string;
    text?: string;
    img?: string;
}
export default function CustomSlider(): React.ReactElement {
    let style = useStyle();

    const slider = React.useRef(null);

    return (
        <div>
            <Carousel
                indicatorContainerProps={{ className: style.dots, style: {} }}
                indicators={false}
                animation={"slide"}
                swipe={true}
                className={style.slider}
                navButtonsAlwaysInvisible
                fullHeightHover={false}
            >
                {item.map((itm: itemInterface, insex: number) => (
                    <Slide key={insex} {...itm} />
                ))}
            </Carousel>
        </div>
    );
}
