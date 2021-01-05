import Button from '@material-ui/core/Button'
import React from 'react'

export default function Imagen() {

    const [state, setstate] = React.useState(null)
    console.log(state)
    const fff = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let files = e.target.files[0];
        reader.onloadend = (e) => {
            setstate(e.target.result)
        }
        reader.readAsDataURL(files)
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/api/image", {
                method: 'POST',
                body: state
            });
            setstate(null)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={onHandleSubmit} >
                <input onChange={fff} type="file" />
                <Button type={'submit'}>sub</Button>
            </form>
            <img src={state?.length > 0 ? state : ""} alt="" />
        </div>
    )
}
