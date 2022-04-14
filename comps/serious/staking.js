import { Col, Row } from "react-bootstrap"
import FomoShell from "./shell"
import { ProgressBar } from "react-bootstrap"
let FomoStaking = () => {
    return <>
        <FomoShell>
            <div style={{ margin: "auto",padding:"10px", width: "80vw",backgroundImage: "url('pink_bg.jpg')"
            }}>
            <KeyPriceDiv />
            <div style={{marginTop:"50px"}}>
                <Row>
                    <Col md={6}><LeftSubDiv /></Col>
                    <Col md={6}><LeftSubDiv /></Col>
                </Row>
                </div>
            </div>
        </FomoShell>
    </>
}

let KeyPriceDiv = () => {
    return <>
        <div style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: 50, margin: "auto", 
        }}>
            <div>
                <Row>
                    <Col md={6}>
                        <div >
                            <Row>
                                <Col md={5}>
                                    <div><img src={"./sifu_logo.png"} /></div>
                                </Col>
                                <Col md={7}><div style={{ color: "white" }}>
                                    <h4
                                        style={{
                                            fontSize: "30px", fontWeight: 800,
                                            fontFamily: "Russo One sans-serif"
                                        }}>Key Price</h4>
                                    <h6>1 key = 0.05 BNB</h6>
                                </div></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6} >
                        <ExpiresIn />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <ProgressBar striped variant="danger" now={40} animated style={{ backgroundColor: "white" }} />
                    </Col>
                </Row>
            </div>
        </div>
    </>
}

let ExpiresIn = () => {
    return <>
        <div>
            <Row style={{ marginBottom: "50px" }} >
                <Col>
                    <h3>Key Expires In:</h3>
                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                        <CountPart />
                        <CountPart />
                        <CountPart />
                        <CountPart />
                    </div>
                </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }} >
                <Col></Col>
            </Row>
        </div>
    </>
}

let CountPart = () => {
    return <>
        <h3 style={{ color: "white" }}>06 <sub>D</sub></h3>
    </>
}

let LeftSubDiv = () => {
    return <>
        <div style={{ padding: 20 ,color:"white",fontWeight:"bolder",
            backgroundColor: "rgba(0,0,0,0.4)",}}>
            <h3>Fomo Key Game</h3>
            <div>
                <Row>
                    <Col md={6} >
                        <h5>Token distribution</h5>
                    </Col>
                    <Col md={6}>
                        <h5>Share percentage</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} >
                        <span>Holder share</span>
                    </Col>
                    <Col md={6}>
                        <span>Share percentage</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} >
                        <span>Airdrop</span>
                    </Col>
                    <Col md={6}>
                        <span>Share percentage</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} >
                        <span>Market share</span>
                    </Col>
                    <Col md={6}>
                        <span>Share percentage</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} >
                        <span>Liquidity</span>
                    </Col>
                    <Col md={6}>
                        <span>4% fee</span>
                    </Col>
                </Row>
            </div>
        </div>
    </>
}


export default FomoStaking