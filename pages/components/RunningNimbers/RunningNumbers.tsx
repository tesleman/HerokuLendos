import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { themeType } from '../../theme';

import Number from './Number'

const useStyle = makeStyles((theme: themeType) => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        backgroundImage: 'url(https://happy-inn.progressionstudios.com/wp-content/uploads/2017/03/counters-bg.jpg)',
        backgroundPosition: "center center",
        backgroundSize: "cover",

        height: 300,
        padding: "0 15%"


    }
}))
type P = ReturnType<typeof useStyle>;

export default React.memo(function RunningNumbers() {

    const style: P = useStyle()

    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (


        <Grid className={style.root}
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={3}>
                <Number number={144} scroll={scroll} duration={5} percent={false} >Rooms</Number>
            </Grid>
            <Grid item xs={3}>
                <Number number={15} scroll={scroll} duration={100} percent={false} >Years in Business</Number>
            </Grid>
            <Grid item xs={3}>
                <Number number={287} scroll={scroll} duration={1} percent={false} > Employees</Number>
            </Grid>
            <Grid item xs={3}>
                <Number number={99} scroll={scroll} duration={4} percent={true} >Customer Satisfaction</Number>
            </Grid>
        </Grid>



    )
})

