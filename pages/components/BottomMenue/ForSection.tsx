import React from 'react'
import { makeStyles } from '@material-ui/core';
// import GoogleMapReact from 'google-map-react'
import WhereToVoteIcon from '@material-ui/icons/WhereToVote';
import { themeType } from '../../theme';



const useStyle = makeStyles((theme: themeType) => ({

    googleMap: {
        width: "100%",
        height: "50vh",
    }
}))

type P = ReturnType<typeof useStyle>;

type propsParType = {
    location: {
        address: string,
        lat: number,
        lng: number
    }
}

const ForSection: React.FC<propsParType> = ({ location }: propsParType) => {
    const style: P = useStyle()

    return (<div>
        <h3>We ar on ears</h3>
        {/* <div className={style.googleMap}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDQJ8oqv4tkXB_6RtRGaqUyWLYjL5xsXWQ',
                    libraries: ['localContext&v=beta'],

                }}
                defaultCenter={location} zoom={17} yesIWantToUseGoogleMapApiInternals >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div> */}
    </div>
    )
}
export default ForSection
type propType = { lat: number; lng: number; text: string; }
const LocationPin: React.FC<propType> = (props: propType): any => {

    return <div className="pin">
        <WhereToVoteIcon />
        <p className="pin-text">{props.text}</p>
    </div>
}