import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { themeType } from "../../theme";
import Button from "../Button";
import Room from "./Room";

const useStyle = makeStyles((theme: themeType) => ({
    root: {
        textAlign: "center",
        paddingTop: 100
    },
    topText: {
        fontFamily: theme.typography.fontFamily,
        "& h3": {
            color: theme.palette.secondary.main
        }
    },
    buttonWrap: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        margin: "60px 0"
    },
    bgc: {
        paddingBottom: 30,
        backgroundColor: "#f5f5f5"
    }
}));
type P = ReturnType<typeof useStyle>;
function Rooms({ rooms }) {
    const style: P = useStyle();
    return (
        <div className={style.bgc}>
            <Container className={style.root}>
                <div className={style.topText}>
                    <h3>CHECK OUT OUR</h3>
                    <h1>Featured Rooms</h1>
                </div>

                <Grid container>
                    {rooms &&
                        rooms.map((item, index) => (
                            <Room key={index} {...item} index={index} />
                        ))}
                </Grid>
                <div className={style.buttonWrap}>
                    <Button>Detail</Button>
                </div>
            </Container>
        </div>
    );
}

export default Rooms;
