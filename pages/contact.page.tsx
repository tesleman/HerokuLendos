import {
    Container,
    FormControl,
    Grid,
    makeStyles,
    TextField,
    InputLabel,
    Select
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";

import { themeType } from "./theme";
import { roomss } from "./index.page";
import Button from "./components/Button";

const useStyle = makeStyles((theme: themeType) => ({
    container: {
        marginTop: 50
    }
}));
type P = ReturnType<typeof useStyle>;
export default function Contact() {
    const style: P = useStyle();
    const date = new Date();
    const { register, errors, handleSubmit, formState, setValue } = useForm({
        criteriaMode: "all",
        mode: "onChange"
    });
    const { isDirty, isValid } = formState;
    const [selectedDate, handleDateChange] = React.useState(
        moment(date).format().split("T")[0]
    );
    const [select, handleSelectChange] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        console.log("isValid", isValid);
        console.log("isDirty ", isDirty);
        console.log("formState ", formState.dirtyFields);
    }, [formState]);

    const handlData = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleDateChange(e.target.value);
    };
    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSelectChange(e.target.value);
    };

    const onSubmit = async (data: any) => {
        setLoading(true);
        const mailer = await fetch("http://localhost:3000/api/mailer", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });
        const result = await mailer.json();
        console.log(result.data);
        setValue("email", "");
        setLoading(false);
    };
    return (
        <Container className={style.container}>
            <p>
                Fill out the form below and book your room today! Happy Inn will
                get in contact with you within 24 hours to confirm your booking.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            helperText={
                                (errors?.email?.types?.required &&
                                    "Email required") ||
                                (errors?.email?.types?.minLength &&
                                    "Email minLength must be  > 3")
                            }
                            error={
                                errors?.email?.types?.required ||
                                errors?.email?.types?.minLength
                            }
                            type="Email"
                            name="email"
                            inputRef={register({
                                required: true,
                                minLength: 6
                            })}
                            style={{ width: "100%" }}
                            id="filled-error"
                            label="Email"
                            defaultValue=""
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="phone"
                            helperText={
                                (errors?.phone?.types?.required &&
                                    "Phone required") ||
                                (errors?.phone?.types?.minLength &&
                                    "Phone minLength must be  > 6")
                            }
                            error={
                                errors?.phone?.types?.required ||
                                errors?.phone?.types?.minLength
                            }
                            inputRef={register({
                                required: true,
                                minLength: 6
                            })}
                            style={{ width: "100%" }}
                            id="filled-error"
                            label="Phone"
                            defaultValue=""
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            inputRef={register}
                            name="dateFrome"
                            id="date"
                            label="Frome"
                            type="date"
                            defaultValue={selectedDate}
                            style={{ width: "100%" }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={handlData}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="dateTo"
                            inputRef={register}
                            id="date"
                            label="To"
                            type="date"
                            defaultValue={selectedDate}
                            style={{ width: "100%" }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={handlData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl style={{ width: "100%" }}>
                            <InputLabel htmlFor="age-native-simple">
                                Rooms
                            </InputLabel>
                            <Select
                                inputRef={register({ required: true })}
                                error={errors?.rooms?.types?.required}
                                native
                                value={select}
                                onChange={handleSelect}
                                inputProps={{
                                    name: "rooms",
                                    id: "age-native-simple"
                                }}
                            >
                                <option aria-label="None" value="" />
                                {roomss.map((m, i) => (
                                    <option key={i} value={m.h2}>
                                        {m.h2}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <textarea
                            name="message"
                            ref={register}
                            style={{ width: "100%", height: 300 }}
                        ></textarea>
                    </Grid>
                </Grid>

                <Button
                    disabled={!isValid || !isDirty || loading}
                    type="submit"
                    onClick={null}
                >
                    sdfs
                </Button>
            </form>
        </Container>
    );
}
