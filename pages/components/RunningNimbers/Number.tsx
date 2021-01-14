import React from "react";
import { makeStyles } from "@material-ui/core";
import { themeType } from "../../theme";

const useStyle = makeStyles((theme: themeType) => ({
    root: {
        color: "white",
        textAlign: "center"
    },
    numbers: {
        fontSize: 45
    },
    subTitle: {
        fontSize: 22
    }
}));

type P = ReturnType<typeof useStyle>;
interface ImStatelessProps {
    children: string;
    number: number;
    scroll: number;
    duration: number;
    percent: Boolean;
}

export default React.memo<ImStatelessProps>(function Number({
    children,
    number,
    scroll,
    duration,
    percent
}): React.ReactElement {
    const style: P = useStyle();
    let [state, setstate] = React.useState(0);

    let timerId = () => {
        setInterval(() => {
            if (state <= number) {
                setstate(state++);
            }
        }, duration);
    };

    React.useEffect(() => {
        if (scroll > 700) {
            timerId();
        }
    }, [scroll]);

    return (
        <div className={style.root}>
            <div className={style.numbers}>
                {" "}
                {state} <> {percent ? "%" : ""}</>
            </div>

            <div className={style.subTitle}> {children}</div>
        </div>
    );
});
