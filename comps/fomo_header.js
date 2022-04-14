import { AppBar, Grid, Menu, Toolbar } from "@mui/material"

let Header = () => {
    let isSelected=false;
    let selected={padding:"5px",backgroundColor:"#f000f0", textShadow:"0 0 10px #f000f0",
    borderColor:"#f000f0",color:"white",fontWeight:600,borderRadius:"10px"}
    let styleLink={padding:"5px",textShadow:"0 0 10px #f000f0", color:"white",fontWeight:600}
    return <>
    <Grid sx={{paddingTop:"20px",paddingBottom:"20px"}}>
                <Grid justifyContent="space-evenly" sx={{verticalAlign:"baseline"}} container>
                <a style={isSelected?selected:styleLink} >Home</a>
                <a style={selected} >Tutorial</a>
                <a href="/staking" style={isSelected?selected:styleLink} >Key Staking</a>
                <a style={isSelected?selected:styleLink} >Buy Key</a>
                <a style={isSelected?selected:styleLink} >Community</a>
                <a style={isSelected?selected:styleLink} >Tutorial</a>
                </Grid>
                </Grid>
    </>
}

export default Header;