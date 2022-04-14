import { AppBar, Toolbar } from "@mui/material"

let Header = () => {
    return <>
        <AppBar position="sticky">
            <Toolbar>
                <span>My Logo</span>
                <span>APP DEXTools</span>
                <span>Manifesto</span>
                <span>DEXT Token</span>
                <span>Team</span>
                <span>Contact</span>
            </Toolbar>
        </AppBar>
    </>
}

export default Header;