import React from "react";
import dataset from './dataset'

// Dialog Popup
import Button from '@material-ui/core/Button';
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

// Transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
console.log(dataset[0].name);
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
                {/* HW 1 */}
                <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen(1)} >
                    {dataset[0].abbrev}
                </Button>
                <Dialog fullScreen open={this.state.arr[1].isActive} onClose={() => this.handleClickClose(1)} TransitionComponent={Transition}>
                    <AppBar style = {useStyles.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={() => this.handleClickClose(1)} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <DescriptionIcon/>
                            <Typography variant="h6" className={useStyles.title} style={{paddingLeft: 10}}>
                                {dataset[0].name}
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
                            <iframe src={dataset[0].src} width="100%" style={{minHeight: '83vh'}} title={dataset[0].abbrev} />
                        </div>
                    </Paper>
                </Dialog>
            </div>
        );
    };
}

export default CS428;
