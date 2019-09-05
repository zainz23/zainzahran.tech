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
                { name: "hw2", isActive: false }
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
                {/*<video id="background-video" loop autoPlay*/}
                       {/*style={{*/}
                           {/*position: "fixed",*/}
                           {/*right: 0,*/}
                           {/*bottom: 0,*/}
                           {/*minWidth: "100%",*/}
                           {/*minHeight: "100%",*/}
                       {/*}}>*/}
                    {/*<source src="https://bit.ly/2Kl5qnz" type="video/mp4" />*/}
                    {/*<source src="https://bit.ly/2Kl5qnz" type="video/ogg" />*/}
                    {/*Your browser does not support the video tag.*/}
                {/*</video>*/}
                {
                    dataset.map((item, i) =>
                        <div style={{display: 'inline-block'}}>
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
                                            style ={{height: 160}}
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
                            <Dialog fullScreen open={this.state.arr[i].isActive} onClose={() => this.handleClickClose(i)} TransitionComponent={Transition}>
                                <AppBar style = {useStyles.appBar}>
                                    <Toolbar>
                                        <IconButton edge="start" color="inherit" onClick={() => this.handleClickClose(i)} aria-label="close">
                                            <CloseIcon />
                                        </IconButton>
                                        <DescriptionIcon/>
                                        <Typography variant="h6" className={useStyles.title} style={{paddingLeft: 10}}>
                                            {dataset[i].name}
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                <Divider />
                                <Paper
                                    style={{
                                        margin: "1.5em",
                                        textAlign: 'left',
                                        display: 'inline-block',
                                        padding: '8px 24px 24px',
                                        minHeight: '85vh',
                                    }}>
                                    <div>
                                        <iframe src={dataset[i].src} width="100%" style={{minHeight: '83vh'}} title={dataset[i].abbrev} />
                                    </div>
                                </Paper>
                            </Dialog>
                        </div>
                    )
                }
                {/* Categorize by HW, Project, etc.*/}
            </div>

        );
    };
}

export default CS428;
