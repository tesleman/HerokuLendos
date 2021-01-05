import React from 'react'

import { Container, Grid, makeStyles } from '@material-ui/core'
import { themeType } from '../../theme'
import Item from './Item';


const useStyle = makeStyles((theme: themeType) => ({
    root: {
        textAlign: "center",
        paddingTop: 100,
        "& h3": {
            color: theme.palette.secondary.main
        }

    },
    topText: {
        fontFamily: theme.typography.fontFamily,


    },
    buttonWrap: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        margin: "60px 0"

    },
    bgc: {
        paddingBottom: 60,
        backgroundColor: "#ffff"
    }


}))
type P = ReturnType<typeof useStyle>;

export default function Amenities() {
    const style: P = useStyle()
    return (
        <div className={style.bgc}>
            <Container className={style.root}>
                <h3>FEATURED PACKAGES</h3>
                <h1>Hotel Amenities</h1>
                {<Grid container  >
                    {Array(6).fill(0).map((_, index) => <Item key={index} />)}
                </Grid>}
            </Container>
        </div>
    )
}
