import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add';
import { disableBodyScroll } from 'body-scroll-lock';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dropzone from 'react-dropzone';
import { handleFileUpload } from '../API/Api';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'None',
    'Atria',
    'Callisto',
];
const ITEM_HEIGHT = 48;

  

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            dialog: false,
            files: [],
            anchorEl: null,
            menuOpen: false,
            songs: [{title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'},
                    {title: 'Smile', artist: 'The Weeknd'}]
        }
    }

    handleTextChange = (txt) => {
        console.log(txt.target.value);
        this.setState({ searchInput: txt.target.value })
    }

    handleUploadButtonClick = () => {
        this.setState({ 
            dialog: true
        })
    }
    handleUploadButtonClick = () => {
        this.setState({ 
            dialog: true
        })
    }

    handleDialogClose = () => {
        this.setState({
            dialog: false,
            files: []
        })
    }

    handleMenuOpen = () => {

    }

    handleMenuClose = () => {

    }

    handleDialogSubmit = () => {
        handleFileUpload(this.state.files);
    }

    handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            if (this.state.searchInput) this.fireSearch();
        }
    }

    fireSearch = () => {
        if (this.state.searchInput) {
            console.log("searching!");
        }
    }

    componentDidMount() {
        console.log(document.getElementById("grid"))
        disableBodyScroll(document.getElementById("grid"));
    }
    
    generateSongs = (classes) => {
        if (this.state.songs) {
            return this.state.songs.map((song) => 
                <Grid item xs={3}>
                    <Card style={{ position: 'relative' }} className={classes.cardRoot}>
                        <IconButton
                            style={{ position: 'absolute', right: 0}}
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={this.handleMenuOpen}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <div className={classes.details}>
                            <CardContent style={{ padding: 8 }} className={classes.content}>
                            <Typography component="h6" variant="h6">
                                {song.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {song.artist}
                            </Typography>
                        </CardContent>
                        </div>
                    </Card>
                </Grid>
            )
        }
    }

    render() {
        const classes = makeStyles((theme) => ({
            root: {
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                color: 'rgb(44, 47, 51)'
            },
            cardRoot: {
                display: 'flex',
            },
            details: {
                display: 'flex',
                flexDirection: 'column',
            },
            content: {
                flex: '1 0 auto',
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            dialogRoot: {
                '& > *': {
                   margin: theme.spacing(1),
                }
            }
          }));
          
        return <>
            <Dialog fullWidth={true} maxWidth={'sm'} open={this.state.dialog} onClose={this.handleDialogClose}>
                <DialogTitle>Upload a song</DialogTitle>
                <DialogContent>
                    <DialogContentText> Drag or drop an mp3 file to upload</DialogContentText>
                    <div style={{cursor: 'pointer', minHeight: '100px', lineHeight: '100px', textAlign: 'center', outline: '1px solid', backgroundColor: 'rgb(245, 245, 245)'}}className={classes.dialogRoot}> 
                    <Dropzone onDrop={files => this.setState({ files })}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <span style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: 'normal'}}>
                                    <Button style={{ textTransform: 'none' }}> Upload </Button>
                                </span>
                            </div>
                            </section>
                        )}
                    </Dropzone>
                    </div>
                </DialogContent>
                <DialogActions>
            <Button style={{textTransform: 'none'}} onClick={this.handleDialogClose}> Cancel </Button>
            <Button style={{textTransform: 'none'}} onClick={this.handleDialogSubmit}> Submit </Button>
          </DialogActions>
            </Dialog>
            <div style={{height: 80}}></div>
            <div style={{marginLeft: 35, float: 'left', }}>
            <Paper style={{ width: 275, backgroundColor: 'rgb(50, 53, 58)'}} className={classes.root}>
                <InputBase
                    style={{color: 'white'}}
                    className={classes.input}
                    placeholder="Search Existing Songs"
                    inputProps={{ 'aria-label': 'search existing songs' }}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
                <IconButton style={{color: 'white'}} onClick={this.fireSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>
            </div>
            <div style={{marginRight: 25, float: 'right'}}>
            <Button
                style={{ color: 'white', backgroundColor: 'rgb(90, 90, 90)', textTransform: 'none' }}
                variant="contained"
                size="large"
                onClick={this.handleUploadButtonClick}
                className={classes.button}
                startIcon={<AddIcon />}
            >
                Upload a Song
            </Button>
            </div>
            <div style={{width: '95vw'}}>
                <Grid id="grid" style={{maxHeight: 'calc(100vh - 180px)', overflow: 'auto', outline: 'solid', marginLeft: 25, marginTop: 75}} container spacing={3}>
                    {this.generateSongs(classes)}
                </Grid>
            </div>
        </>
    }
}