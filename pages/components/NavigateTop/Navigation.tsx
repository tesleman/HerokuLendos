import { Container, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'



let useStyles = makeStyles((theme) => ({
    navigate: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        leavingScreen: 195,
        boxShadow: "0 5px 5px rgba(182, 182, 182, 0.75)",
        width: "100%"
    },
    navigateUl: {
        display: "flex",
        height: 45,
        padding: 0,
        flexDirection: "row",
        margin: "0 0",
        justifyContent: "center",
        alignItems: "center",
        listStyleType: "none",

        fontFamily: "Playfair Display",

    },
    navigateSub: {
        zIndex: 5,
        padding: "0 10px",
        height: "100%",
        opacity: 1,
        fontSize: 18,
        color: "black",
        textDecoration: "none",
        position: "absolute",
        marginTop: 10,
        alignItems: "space-between",
        "&:hover": {
            cursor: 'pointer'
        }
    },
    navigateLinck: {
        padding: "10px 10px",
        fontSize: 18,
        cursor: "pointer",
        color: "black",
        textDecoration: "none",
        position: "relative",
        alignSelf: "center",
        "&:hover": {
            borderTopWidth: 2,
            borderTopStyle: "solid",
            borderTopColor: theme.palette.secondary.main,
            backgroundColor: "rgba(d9, d9, d9, 0.3)",
            boxShadow: '0 3px 5px 2px rgba(76, 75, 70, 0.3)',
        },
    },
    navigateLinckSub: {
        padding: "0 10px",
        backgroundColor: "#ffff",
        fontSize: 18,
        color: "#4c4b46",
        textDecoration: "none",
        position: "relative",
        borderColor: "#cac8c1",
        border: 1,
        borderStyle: "solid",
        left: -21,
        height: 50,
        display: "flex",
        zIndex: 2,
        "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: "#d9d9d9",
            boxShadow: '0 3px 5px 2px rgba(76, 75, 70, .3)',
        },

    },

    navSubA: {
        margin: "auto",
        textAlign: "center",

    }


}))


export default function s() {
    let categories = [{
        name: 'Home',
        url: ''
    }, {
        name: 'Первый',
        url: 'first',
        subcat: [{
            name: 'Отэто',
            url: 'seconds1'
        },
        {
            name: 'Secocat2',
            url: 'seubcat2'
        },
        {
            name: 'Secocat2',
            url: 'seubcat2'
        }]
    }, {
        name: 'Second',
        url: 'second',
        subcat: [{
            name: 'Secondsubcat1',
            url: 'secondsubcat1'
        },
        {
            name: 'Secondsubcat2',
            url: 'secondsubcat2'
        }]
    }, {
        name: 'Products',
        url: 'products'
    }]

    let style = useStyles()


    const [state, setstate] = React.useState('')
    return (
        <nav className={style.navigate}>
            <Container>


                <ul className={style.navigateUl}>
                    {categories.map((m, index) => <Link key={index} href={`/${m.url}`} >
                        <li
                            onMouseOver={() => setstate(m.name)}
                            onMouseLeave={() => setstate('')}
                            className={style.navigateLinck} >
                            {m.name}
                            {m.subcat ? <ul className={style.navigateSub} >{m.subcat.map((l, i) => <Sub key={i} {...l} state={state} names={m.name} />)}</ul> : ""} </li>
                    </Link>)}

                </ul>


            </Container >
        </nav>
    )
}

const Sub = (props) => {
    let style = useStyles()
    return (<>
        {props.state === props.names ? (
            <Link href={`/${props.url}`}>
                <li className={style.navigateLinckSub}>
                    <a className={style.navSubA}>{props.name}</a>
                </li>
            </Link>
        ) : ""}
    </>)
}