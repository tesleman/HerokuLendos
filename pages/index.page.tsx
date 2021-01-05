import 'typeface-playfair-display'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "material-design-icons"
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React from 'react'
import CustomSlider from './components/Slider/customSlider'
import Information from './components/Info/Information'
import RunningNumbers from './components/RunningNimbers/RunningNumbers'
import Rooms from './components/Rooms/Rooms'
import Amenities from './components/Amenities/Amenities';
import BottomMenue from './components/BottomMenue/BottomMenue';



const useStyle = makeStyles({

  bacground: {
    backgroundImage: "url(https://unsplash.com/blog/content/images/2020/12/eberhard-grossgasteiger-TMHL7wald8I-unsplash.jpg)",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    "&::after": {
      content: '""',
      backgroundColor: "#9e9e9e",
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: -1,
      opacity: 0.3,
    }
  }
})

export default function Home({ names }) {
  const [state, setstate] = React.useState(names)
  React.useEffect(() => {
    async function name() {

      const res = await fetch("http://localhost:3000/api/hello");
      const json = await res.json();
      setstate(json.name)
    }
    name()
    return () => {

    }
  }, [])
  let style = useStyle()

  return (

    <div className={style.bacground}>

      <Head>
        <title>My page title</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"></link>
      </Head>

      <CustomSlider />

      <Information />,
      <RunningNumbers />
      <Rooms />
      <Amenities />
      <BottomMenue />
    </div>
  )
}
