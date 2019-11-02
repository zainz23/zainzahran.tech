import React from "react";
import dataset from './dataset'

// Dialog Popup
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from "@material-ui/core/Paper";
import DescriptionIcon from '@material-ui/icons/Description';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ButtonBase from '@material-ui/core/ButtonBase';          // Makes card clickable
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from "@material-ui/core/Tooltip";
import {Zoom} from "@material-ui/core";

// Transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = {
    appBar: {
        position: 'relative',
    },
    title: {
        padding: 20,
        flex: 1,
    },
};

class CS428 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                { name: "hw1", isActive: false },
                { name: "hw2", isActive: false },
                { name: "hw3", isActive: false },
                { name: "hw4", isActive: false },
                { name: "hw5", isActive: false },
                { name: "hw7", isActive: false },
                { name: "hw8", isActive: false },
                { name: "hw10", isActive: false },
                { name: "p1",  isActive: false},
                { name: "p2",  isActive: false}
            ]
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }
    handleClickOpen = (index) => {
        let tmp = this.state.arr;
        tmp[index].isActive = !tmp[index].isActive;
        this.setState({
            arr: tmp
        });
    };
    handleClickClose = (index) => {
        let tmp = this.state.arr;
        tmp[index].isActive = !tmp[index].isActive;
        this.setState({
            arr: tmp
        });
    };
    render() {

        return (
            <div className='CS428'>

                <h1>Zain Zahran</h1>
                <h1>Virtual and Augmented Reality</h1>
                {/* HOMEWORKS */}
                <h2 style={{paddingBottom: 20, paddingTop: 20}} >Homeworks</h2>
                {
                    // eslint-disable-next-line
                    dataset.map((item, i) => {
                        if (dataset[i].type === "hw") {
                            return (
                                <div style={{display: 'inline-block'}} key={i}>
                                    <Tooltip title={dataset[i].title} TransitionComponent={Zoom}>
                                        <ButtonBase
                                            onClick={() => this.handleClickOpen(i)}
                                        >
                                            <Card
                                                style={{
                                                    width: 300
                                                }}
                                            >
                                                <CardActionArea>
                                                    <CardMedia
                                                        image={dataset[i].img}
                                                        title={dataset[i].title}
                                                        style={{height: 160}}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {dataset[i].name}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {dataset[i].desc}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </ButtonBase>
                                    </Tooltip>
                                    <Dialog fullScreen open={this.state.arr[i].isActive}
                                            onClose={() => this.handleClickClose(i)} TransitionComponent={Transition}>
                                        <AppBar style={useStyles.appBar}>
                                            <Toolbar>
                                                <IconButton edge="start" color="inherit"
                                                            onClick={() => this.handleClickClose(i)} aria-label="close">
                                                    <CloseIcon/>
                                                </IconButton>
                                                <DescriptionIcon/>
                                                <Typography variant="h6" className={useStyles.title}
                                                            style={{paddingLeft: 10}}>
                                                    {dataset[i].name}
                                                </Typography>
                                            </Toolbar>
                                        </AppBar>
                                        <Divider/>
                                        <Paper
                                            style={{
                                                margin: "1.5em",
                                                textAlign: 'left',
                                                display: 'inline-block',
                                                padding: '8px 24px 24px',
                                                minHeight: '85vh',
                                            }}>
                                            <div>
                                                <iframe src={dataset[i].src} width="100%" style={{minHeight: '83vh'}}
                                                        title={dataset[i].abbrev}/>
                                            </div>
                                        </Paper>
                                    </Dialog>
                                </div>
                            )
                        }
                    })
                }
                {/* PROJECTS */}
                <h2 style={{paddingBottom: 20, paddingTop: 20}}>Projects</h2>
                {
                    // eslint-disable-next-line
                    dataset.map((item, i) => {
                        if (dataset[i].type === "project") {
                            return (
                                <div style={{display: 'inline-block'}} key={i}>
                                    <Tooltip title={dataset[i].title} TransitionComponent={Zoom}>
                                        <ButtonBase
                                            onClick={() => this.handleClickOpen(i)}
                                        >
                                            <Card
                                                style={{
                                                    width: 300
                                                }}
                                            >
                                                <CardActionArea>
                                                    <CardMedia
                                                        image={dataset[i].img}
                                                        title={dataset[i].title}
                                                        style={{height: 160}}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {dataset[i].name}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {dataset[i].desc}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </ButtonBase>
                                    </Tooltip>
                                    <Dialog fullScreen open={this.state.arr[i].isActive}
                                            onClose={() => this.handleClickClose(i)} TransitionComponent={Transition}>
                                        <AppBar style={useStyles.appBar}>
                                            <Toolbar>
                                                <IconButton edge="start" color="inherit"
                                                            onClick={() => this.handleClickClose(i)} aria-label="close">
                                                    <CloseIcon/>
                                                </IconButton>
                                                <DescriptionIcon/>
                                                <Typography variant="h6" className={useStyles.title}
                                                            style={{paddingLeft: 10}}>
                                                    {dataset[i].name}
                                                </Typography>
                                            </Toolbar>
                                        </AppBar>
                                        <Divider/>
                                        <Paper
                                            style={{
                                                margin: "1.5em",
                                                textAlign: 'left',
                                                display: 'inline-block',
                                                minHeight: '85vh',
                                            }}>
                                            <div>
                                                {/* DEMO VIDEO */}
                                                <h1>Demo</h1>
                                                <iframe width="560" height="315"
                                                        src={dataset[i].youtube} frameBorder="0"
                                                        style={{width:'100%', minHeight: '63vh'} }
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        title={dataset[i].abbrev}/>
                                                {/* DOCUMENTATION */}
                                                <h1>Documentation</h1>
                                                <iframe src={dataset[i].src} width="100%" style={{minHeight: '83vh'}}
                                                        title={dataset[i].abbrev}/>
                                            </div>
                                        </Paper>
                                    </Dialog>
                                </div>
                            )
                        }
                    })
                }
            </div>

        );
    };
}

export default CS428;
