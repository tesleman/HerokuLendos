import { Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { themeType } from "../../theme";

const useStyle = makeStyles((theme: themeType) => ({
    root: {
        padding: "15px 15px",
        "& p": {
            textAlign: "left"
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
        margin: "32px 0",
        borderTopStyle: "solid",
        borderTopWidth: 1,
        borderColor: theme.palette.primary.main,
        opacity: 0.5
    },
    bg: {
        padding: "15px 15px",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 5px 2px rgba(76, 75, 70, 0.3)"
    }
}));
type P = ReturnType<typeof useStyle>;
export default function Item(): React.ReactElement {
    const style: P = useStyle();
    return (
        <Grid className={style.root} item xs={4}>
            <div className={style.bg}>
                <Image
                    src="/bigstock-Luxury-Bedroom-5449511-800x500.jpg"
                    alt="Picture of the author"
                    width={280}
                    height={175}
                />
                <h2 className={style.h2}>View Our Rooms</h2>
                <p>
                    Each uniquely decorated room in our stately mansion has its
                    own distinct .
                </p>
            </div>
        </Grid>
    );
}
