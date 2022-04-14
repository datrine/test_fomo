
import { Divider, Grid } from "@mui/material";
import { Container, Tabs, InputGroup, FormGroup, Tab, FormControl, Form, Row, Col, ButtonGroup, Button } from "react-bootstrap"
import FomoShell from "./shell";


let FomoIndex = () => {
    return <>
        <FomoShell>
            <Container>
                <Container>
                    <Row>
                        <Col xs={6}>  <TabsOfMain /></Col>
                        <Col xs={6}> <TabsOfRoundTeams /></Col>
                    </Row></Container>


                <div>
                    <div class></div>
                </div>
            </Container></FomoShell>

    </>
}

let TabsOfMain = () => {
    return <><Tabs defaultActiveKey="profile" id="uncontrolled"
        style={{ Color: "white", backgroundColor: "#212529", padding: 10 }} >
        <Tab eventKey="home" title="Home"
            style={{ Color: "white", backgroundColor: "#212529", padding: 10 }} >
            <div><PurchaseTab /></div>
        </Tab>
        <Tab eventKey="profile" title="Profile" style={{ Color: "white" }}>
            <div><VaultTab /></div>
        </Tab>
        <Tab eventKey="contact" title="Contact" style={{ Color: "white" }}>
            <PurchaseTab />
        </Tab>
    </Tabs></>
}

let PurchaseTab = () => {
    return <><>
        <div style={{ backgroundColor: "#212529", color: "white" }}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                </InputGroup.Text>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <ButtonGroup size="lg" aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>
            <ChooseTeam />
        </div>
    </></>
}

let VaultTab = () => {
    return <>
        <Tab.Container>
            <VaultRow />
        </Tab.Container>
    </>
}
let VaultRow = () => {
    return <>
        <div style={{ backgroundColor: "#212529", color: "white" }}>
            <span>Exit</span>
            <span>6.67 BNB</span>
        </div>
    </>
}


let ChooseTeam = () => {
    return <>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <IconEmo />
            <Divider />
            <IconEmo />
            <Divider />
            <IconEmo />
            <Divider />
            <IconEmo />
        </div>
    </>
}

let IconEmo = () => {
    return <>
        <div style={{
            display: "flex",
            flexDirection: "column", alignItems: "center",
            height: "200px"
        }} >
            <img src="./whale.png" />
            <h3>Snake</h3>
            <p>Trickle-down divinomics</p>
            <p style={{ color: "green" }} >++ most bnb to pot</p>
        </div>
    </>
}



let TabsOfRoundTeams = () => {
    return <><Tabs defaultActiveKey="profile" id="uncontrolled"
        style={{ Color: "white", backgroundColor: "#212529", padding: 10 }} >
        <Tab eventKey="round" title="Round"
            style={{ Color: "white", backgroundColor: "#212529", padding: 10 }} >
            <div><RoundTab/></div>
        </Tab>
        <Tab eventKey="team" title="Team" style={{ Color: "white" }}>
            <div><Tiles /></div>
        </Tab>
    </Tabs></>
}

let Tiles = () => {
    return <>
        <div style={{ backgroundColor: "#212529", color: "white", padding: "20px" }}>
            <Tile />
        </div>

    </>
}

let Tile = () => {
    return <>
        <div style={{
            width: "150px", height: "150px", display: "flex",
            flexDirection: "column", alignItems: "center", backgroundColor: "#212519",
            borderRadius: "10px"
        }}>
            <h4>Whale</h4>
            <img src="./whale.png" />
        </div>
    </>
}

let RoundTab=()=>{
    return<>
    <div style={{ backgroundColor: "#212529", color: "white", padding: "20px" }}>
        <div>
            <h4>Round #0</h4>
            <div>
                <Row>
                    <Col md={6}><span>Active POT</span></Col>
                    <Col md={6}></Col>
                </Row>
            </div>
        </div>
    </div>
    </>
}

export default FomoIndex