import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export type themeType = typeof theme
// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4c4b46",
            contrastText: "#bbbbbb"
        },
        secondary: { main: "#d3bc6c" }
    },
    typography: {
        fontFamily: "Playfair Display",
    }

});

export default theme;