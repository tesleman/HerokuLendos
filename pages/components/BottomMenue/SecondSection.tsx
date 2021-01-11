import { makeStyles } from "@material-ui/core";
import React from "react";

import { themeType } from "../../theme";

const useStyle = makeStyles((theme: themeType) => ({
    root: {
        color: "white",
        marginBottom: 5,
        paddingBottom: 5,
        "&::before": {
            fontSize: 15,
            fontFamily: "FontAwesome",
            paddingRight: 3,
            content: '"\\f105"',
            color: "white",
            zIndex: 15,
            top: 0,
            position: "relative",
            fontWeight: 100,
            opacity: 0.5
        },
        "& :hover": {
            borderBottom: `1px solid ${theme.palette.secondary.main}`
        },
        "& a": {
            lineHeight: 1.5,
            marginTop: 5,
            textDecoration: "none",
            color: "white",
            position: "relative"
        }
    },
    about: {
        marginBottom: 15
    }
}));
type P = ReturnType<typeof useStyle>;

export default function SecondSection({ categories }) {
    const style: P = useStyle();
    return (
        <div>
            <ul>
                <div className={style.about}> About</div>
                {categories.map((item: Array<string>, i: number) => (
                    <li className={style.root} key={i}>
                        <a href=""> {item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
