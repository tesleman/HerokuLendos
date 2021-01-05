import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import { themeType } from '../../theme'
import Image from 'next/image'
import Button from '../Button'




const useStyle = makeStyles((theme: themeType) => ({
    backGround: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        maxHeight: 740,
        width: "70%",
        backgroundImage: 'url(/about-background.jpg)',
        backgroundSize: "cover"

    },
    bgrel: {
        position: "relative",
        height: 650,
        width: "100%",
    },
    h1: {
        textAlign: "center",
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main
    }, root: {
        flexGrow: 1,
    },
    h2: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main

    },
    span: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 30
    },


}))

type P = ReturnType<typeof useStyle>;

export default function Information() {
    const style: P = useStyle()

    return (

        <div className={style.bgrel}>
            <div  >
                <Container className={style.backGround} >
                    <h1 className={style.h1} > The Happy Inn</h1>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <h2 className={style.h2}>It Is The Perfect Escape</h2>
                            <div className={style.span}>The resort flows gracefully along the Eastern Shore, canopied by ancient oaks and caressed by bay breezes. It is a setting made for total relaxation, and the luxurious 9,000-square-foot european style spa is its crown jewel.</div>

                            <div className={style.span}>Today, the house has been revived to show off its full glory. Dean and Paul were instrumental in treating the house to the period ornamentation they feel it deserved.  The Happy Inn still retains many of its original features.</div>
                            <Button href={'sssds'}>About The Inn</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src="/about-images.png"
                                alt="Picture of the author"
                                width={600}
                                height={435}
                            />
                        </Grid>
                    </Grid>
                </Container>

            </div>
        </div>
    )
}
