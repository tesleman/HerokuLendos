import React from 'react';
import Container from '@material-ui/core/Container';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';

import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles((theme) => ({
    base: {
        display: "flex",
        width: "100%",
        height: 43,
        backgroundColor: theme.palette.primary.main,
        flexDirection: "row",
        overflow: "hidden"

    },
    leftIcons: {
        justifyContent: "flex-start",
        flexDirection: "row",
        display: "flex",
        width: "75%"
    },
    icon: {
        color: theme.palette.secondary.main,

    },
    text: {
        color: theme.palette.primary.contrastText,
        alignSelf: "center",
        fontFamily: theme.typography.fontFamily,
        fontSize: 13,
        paddingLeft: 6
    },
    flexDir: {
        alignSelf: "center",
        display: "flex",
        margin: "8px 8px"
    },
    righrIcons: {
        width: "25%",
        flexDirection: "row",
        display: "flex",
        color: theme.palette.primary.contrastText,
        alignSelf: "center",

    },
    icons: {

        padding: "6px 13px",
        borderRightStyle: "solid",
        borderRightColor: theme.palette.primary.contrastText,
        borderRight: 1,
        height: "100%",
        fontSize: 60,
        cursor: "pointer",
        '&:first-child': {
            borderLeft: "1px !important",
            borderLeftColor: theme.palette.primary.contrastText,
            borderLeftStyle: "solid !important",
        },
        "&:hover": {
            color: "white"
        }
    }

}))

export default function TopLine() {
    const style = useStyle()

    return (
        <div className={style.base}>


            <div className={style.leftIcons}>
                <div className={style.flexDir}>
                    <RoomIcon className={style.icon} />
                    <span className={style.text}>8903 Grove St, Healdsburg, CA 95448</span>
                </div>
                <div className={style.flexDir}>
                    <PhoneIcon className={style.icon} />
                    <span className={style.text}>(123) 456-7890</span>
                </div>
                <div className={style.flexDir}>
                    <EmailIcon className={style.icon} />
                    <span className={style.text}>booking@website.com</span>
                </div>



            </div>

            <div className={style.righrIcons}>
                <FacebookIcon className={style.icons} />
                <FacebookIcon className={style.icons} />
                <FacebookIcon className={style.icons} />
            </div>


        </div>
    )
}
