
import Header from "../fomo_header"
import { Grid } from "@mui/material";

let FomoShell = ({children}) => {
    return <>
        <Grid
            sx={{
                backgroundImage: "url('fomo_bg.jpg')",
                backgroundOrigin: "padding-box",
                paddingBottom: "40px"
            }}>
            <Header />
            <Banner />
            {children}
        </Grid>
    </>
}



let Banner = () => {
    return <>
        <Grid container justifyContent="center" >
            <div style={{
                textTransform: "uppercase",
                textAlign: "center",
                color: "#fff",
                padding: "2px", backgroundColor: "#f000f0", width: "70%", borderRadius: "5px",
                boxShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f", marginBottom: "20px"
            }}>
                <h4>The only way you lose in this game is if you stop playing</h4>
            </div>
        </Grid>
    </>
}

export default FomoShell