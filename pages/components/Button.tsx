import React from "react";
import Link from "next/link";
import { themeType } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme: themeType) => ({
    button: (disabled) => ({
        fontFamily: theme.typography.fontFamily,
        fontSize: 16,
        fill: "#4c4b46",
        color: theme.palette.primary.main,
        backgroundColor: disabled ? "rgb(226 226 226)" : "#d3bc6c",
        borderRadius: "0px 0px 0px 0px",
        padding: "18px 65px",
        cursor: "pointer",
        border: disabled ? "1px solid clack" : "none",
        transition: "all 0.3s ease-out",

        "&:hover": {
            color: disabled ? "ddddd" : "white !important",
            backgroundColor: disabled
                ? "rgb(226 226 226) !important"
                : "#818a91 !important"
        }
    })
}));

type P = ReturnType<typeof useStyle>;

interface propInterface {
    children: string;
    href?: string | number;
    onClick?: () => void;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
}
export default function Button({
    children,
    href,
    onClick,
    type,
    disabled
}: propInterface): React.ReactElement {
    const style: P = useStyle(disabled);

    return (
        <Link href={`/roomss/${href}`}>
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={style.button}
            >
                {children}
            </button>
        </Link>
    );
}
Button.defaultProps = {
    disabled: false
};
