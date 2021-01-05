import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { themeType } from '../../theme'
import FirstSection from './FirstSection'
import ForSection from './ForSection'
import SecondSection from './SecondSection'

const useStyle = makeStyles((theme: themeType) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "& ul li": {
            listStyleType: "none",
        },

    }

}))

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

type P = ReturnType<typeof useStyle>;
export default function BottomMenue() {
    const style: P = useStyle()
    return (
        <div className={style.root}>

            <Container >
                <Grid container>
                    <Grid item xs={3}>

                        <FirstSection />
                    </Grid>

                    <Grid item xs={3}>

                        <SecondSection />
                    </Grid>

                    <Grid item xs={6}>
                        <ForSection location={location} />

                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
