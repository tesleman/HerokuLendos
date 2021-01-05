import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { NextPageContext } from "next";
import { themeType } from '../../theme'
import Button from '../Button';
import Room from './Room';

export const rooms = [
    { iamg: "/papaya-800x500.jpg", h2: "Papaya", prise: "399", p: "Decsdafatures a queen four possfdgsdfgter bed and a pfdsgfsdgsdfgrivate bath. You enter by walking through the garden." },
    { iamg: "/queen.jpg", h2: "Papaya Deluxe", prise: "359", p: "Decorated with an artful tropical flair, Papaya features a queen four poster bed and the garden." },
    { iamg: "/bamboo.jpg", h2: "Deluxe", prise: "489", p: "Poster bed and a private bath. You enter by walking through the garden." },
    { iamg: "/haway.jpg", h2: "Deluxe", prise: "489", p: "Poster bed and a private bath. You enter by walking through the garden." },
]





const useStyle = makeStyles((theme: themeType) => ({
    root: {
        textAlign: "center",
        paddingTop: 100,


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


}))
type P = ReturnType<typeof useStyle>;
function Rooms({ names }: any) {
    console.log(names)

    const style: P = useStyle()
    return (
        <div className={style.bgc}>
            <Container className={style.root}>
                <div className={style.topText} >
                    <h3 >CHECK OUT OUR</h3>
                    <h1>Featured Rooms</h1>
                </div>

                <Grid container  >
                    {rooms.map((item, index) => <Room key={index} {...item} index={index} />)}
                </Grid>
                <div className={style.buttonWrap}>
                    <Button href={'sa'}>Detail</Button>
                </div>
            </Container>
        </div>
    )
}


Rooms.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch("http://localhost:3000/api/hello");
    const json = await res.json();
    console.log(json.name)
    return { names: json.name };
}
export default Rooms 