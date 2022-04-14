import { screenFn } from "./utilFns";
import Header from "../comps/header"
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/system";
import { BiLinkExternal } from "react-icons/bi"
import { BsFillCameraVideoFill, } from "react-icons/bs"

let Index = () => {
    return <>
        <PCView />
    </>
}

let PCView = () => {
    return <>
        <Header />
        <div style={{
            backgroundColor: "#f4fafd", height: "100px",
            clipPath: "polygon(100% 0%,100% 100%, 0% 100%)"
        }}></div>
        <div>
            <div disableGutters style={{
                backgroundColor: "#f4fafd",
            }}>
                <Container>
                    <Grid container sx={{ height: "100vh" }}>
                        <Grid item container md={6} >
                            <Container>
                                <h3 style={{
                                    color: "#00a3bf",
                                    fontWeight: 600, fontSize: "60px", lineHeight: 1.07
                                }} >BOOST YOUR EXCHANGE EXPERIENCE
                                </h3>
                                <p style={{
                                    fontSize: "18px",
                                    lineHeight: 1.67,
                                    color: "#4c4c4c !important"
                                }} >Real-time data analysis at the tips of your fingers:
                                    Create unique trading strategies, anticipate market movements, search for big spreads, track and copy the most profitable wallets and much more.
                                </p>
                                <div>
                                    <a style={{
                                        fontSize: "18px", verticalAlign: "text-bottom", color: "white",
                                        padding: "10px", borderRadius: "20px",
                                        marginRight: "30px",
                                        backgroundImage: "linear-gradient(to right, #00b8d8 0%, #0b9ac4 100%)",
                                    }}> <BsFillCameraVideoFill /> Watch video</a>
                                    <a style={{
                                        fontSize: "18px", verticalAlign: "text-bottom", color: "white",
                                        padding: "10px", borderRadius: "20px",
                                        marginRight: "30px",
                                        backgroundColor: "#ff4169",
                                    }}> <BiLinkExternal /> Launch app</a>
                                </div>
                            </Container>
                        </Grid>
                        <Grid item container md={6} sx={{
                            backgroundImage: "url('/hero_img_illu.svg')",
                            backgroundOrigin: "padding-box",
                            backgroundPosition: "left top", backgroundRepeat: "no-repeat"
                        }}  >
                        </Grid>
                    </Grid>
                </Container>

            </div>
            <div style={{
                backgroundColor: "#f4fafd", height: "200px",
                clipPath: "polygon(0% 0%,100% 0%, 100% 0%)"
            }}></div>
            <Container>
                <p>If you are a DEFI user, and you want to be able to anticipate market movements and
                    develop better trading strategies,
                    DEXTools will help you in a very simple way.</p>
            </Container>
            <Grid container justifyContent="center" sx={{
                backgroundColor: "#00a3bf",
            }} >
                <Grid container sx={{ clipPath: "polygon(100% 0,100% 100%, 0% 100%)", backgroundColor: "red" }}>

                    <Box sx={{
                        width: "800px",
                        height: "600px",
                        backgroundColor: `#FeeAFA`,
                        '&:hover': {
                            backgroundColor: "#Fdfff5",
                            opacity: [0.9, 0.8, 0.7],
                            cursor: "none"
                        },
                        display: "flex",

                    }} >
                        <Grid container rowSpacing={1} columns={{ md: 12 }} direction="row" >
                            <Grid md={6} />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    </>
}

export default Index