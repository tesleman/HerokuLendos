import React from "react";
import { makeStyles } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import WhereToVoteIcon from "@material-ui/icons/WhereToVote";
import { themeType } from "../../theme";

const useStyle = makeStyles((theme: themeType) => ({
    googleMap: {
        width: "100%",
        height: "30vh"
    }
}));

type P = ReturnType<typeof useStyle>;

type propsParType = {
    location: {
        address: string;
        lat: number;
        lng: number;
    };
};

const ForSection: React.FC<propsParType> = ({ location }) => {
    const style: P = useStyle();

    return (
        <div>
            <h3>We ar on ears</h3>
            <div className={style.googleMap}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: ""
                    }}
                    defaultCenter={location}
                    zoom={17}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};
export default ForSection;
type propType = { lat: number; lng: number; text: string };
const LocationPin: React.FC<propType> = (props: propType): any => {
    return (
        <div className="pin">
            <WhereToVoteIcon />
            <p className="pin-text">{props.text}</p>
        </div>
    );
};
