import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import MicIcon from '@material-ui/icons/Mic';

import Menu from './Menu/Menu';
import Sing from './Sing/Sing';

// browsing/searching songs
// browsing/searching songs for current user
// actual karaoke room
// User settings page


class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: "menu"
        }
    }

    handleSelect = (eventKey) => {
        console.log(eventKey);
        this.setState({ view: eventKey })
    }
    getSingStyle = () => {
        if (this.state.view === 'sing') {
            return {
                backgroundColor: 'rgb(52, 55, 59)',
                borderRadius: 10
            }
        }
    }

    getMenuStyle = () => {
        if (this.state.view === 'menu') {
            return {
                backgroundColor: 'rgb(52, 55, 59)',
                borderRadius: 10,
                color: 'white'
            }
        }
    }

    render() {
        console.log(this.state.view);
        // const useStyles = makeStyles((theme) => ({
        //     root: {
        //       '& > *': {
        //         margin: theme.spacing(1),
        //       },
        //     },
        //   }));

        return (
            <>
            {/* <NavBar style={{backgroundColor: "rgb(104, 121, 148)"}} fixed="top"> */}
            <NavBar 
            // style={{backgroundImage: "linear-gradient(rgb(83, 85, 92), rgb(44,47,51))"}} 
            fixed="top"
            variant="light">
                {/* <NavBar.Brand style={{}}>  </NavBar.Brand> */}
                <Nav
                    // activeKey="/home"
                    onSelect={this.handleSelect}
                    >
                    <Nav.Item style={this.getMenuStyle()}>
                        <Nav.Link eventKey="menu">
                            <Grid style={{ color: 'white'}} container direction="row" alignItems="center">
                                <Grid item>
                                    <MenuIcon />
                                </Grid>
                                <Grid item>
                                    <div style={{marginLeft: 2}}> Menu </div>
                                </Grid>
                            </Grid>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={this.getSingStyle()}>
                        <Nav.Link eventKey="sing">
                            <Grid style={{ color: 'white' }} container direction="row" alignItems="center">
                                <Grid item>
                                    <MicIcon />
                                </Grid>
                                <Grid item>
                                    Sing
                                </Grid>
                            </Grid>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </NavBar>
            {/* <Button onClick={this.handleClick}> Click meeee</Button>
        <div style={{ margin: 'auto', width: '50%', }}className={useStyles.root}> 
            <Dropzone onDrop={files => this.handleFileUpload(files)}>
            {({getRootProps, getInputProps}) => (
                <section>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                </section>
            )}
            </Dropzone>
        </div>

        <div style={{ marginTop: '50px', margin: 'auto', width: '50%', }}className={useStyles.root}> 
            <Dropzone onDrop={files => this.handleRecordingUpload(files)}>
            {({getRootProps, getInputProps}) => (
                <section>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                </section>
            )}
            </Dropzone>
        </div> */}
        {this.state.view === "menu" && <Menu/>}
        {this.state.view === "sing" && <Sing/>}
        </>
        )
    }
}

export default MainPage;