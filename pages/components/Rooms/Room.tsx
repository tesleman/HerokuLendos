import { Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import { themeType } from "../../theme";
import Button from "../Button";

const useStyle = makeStyles((theme: themeType) => ({
    root: {
        padding: "15px 15px"
    },
    pWrap: {
        padding: 10,
        height: 50,
        overflow: "hidden",
        textOverflow: "ellipsis",
        "& p": {
            margin: 0,
            overflow: "hidden",
            lineClamp: 3,
            display: "flex",
            textOverflow: "ellipsis",
            boxOrient: "vertical"
        }
    },
    h2: {
        textAlign: "left",
        lineHeight: 1.4,
        fontSize: 20,
        fontWeight: 400
    },
    prise: {
        textAlign: "left",
        fontSize: 22,
        margin: "22px 0",
        borderTopStyle: "solid",
        borderTopWidth: 1,
        borderColor: theme.palette.primary.main,
        opacity: 0.5
    },
    bg: {
        height: 460,
        padding: "15px 15px",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 5px 2px rgba(76, 75, 70, 0.3)"
    }
}));
type P = ReturnType<typeof useStyle>;

export default function Room({ index, iamg, h2, prise, p }) {
    const style: P = useStyle();
    return (
        <Grid className={style.root} item xs={3}>
            <div className={style.bg}>
                <div>
                    <Image
                        src={iamg}
                        alt="Picture of the author"
                        width={250}
                        height={175}
                    />
                </div>
                <h2 className={style.h2}>{h2}</h2>
                <div className={style.pWrap}>
                    <p>{p}</p>
                </div>
                <div className={style.prise}>{prise}/night</div>

                <Button href={index}>Details</Button>
            </div>
        </Grid>
    );
}
