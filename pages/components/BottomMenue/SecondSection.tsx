import { makeStyles } from '@material-ui/core';
import React from 'react'
import { themeType } from '../../theme';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Head from 'next/head';




const useStyle = makeStyles((theme: themeType) => ({
    root: {
        color: 'white',
        marginBottom: 5,
        paddingBottom: 5,
        "&::before": {
            fontSize: 15,
            fontFamily: "FontAwesome",
            paddingRight: 8,
            content: '"\\f105"',
            color: 'white',
            zIndex: 15,
            top: 2,
            position: "relative",
            fontWeight: 100,
            opacity: 0.5

        }

    }

}))
type P = ReturnType<typeof useStyle>;

export default function SecondSection() {

    const categories = ["About the Inn",
        "Rooms & Rates",
        "Area Guide",
        "Specials & Packages",
        "Wedding & Reception",
        "Pet Policy",]
    const style: P = useStyle()
    return (<div>



        <ul> About
                {categories.map((item, i) => <li className={style.root} key={i}>{item}</li>)}
        </ul>
    </div>
    )
}
