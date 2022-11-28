import React, {Component} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

class ListToDo extends Component {
    state = {
        input: '',
        list: [
            {
                id: 0,
                title: 'do1',
                isCompleted: false,
            },
            {
                id: 1,
                title: 'do2',
                isCompleted: true,
            },
            {
                id: 2,
                title: 'do3',
                isCompleted: true,
            },
        ],
        deleteElement: '',
        changedElement: '',
    };

    onInputText = (event) => {
        this.setState({
            input: event.target.value,
        });
    }

    onClickAddToLIst = () => {
        this.setState({
            list: [...this.state.list, {id: Date.now(), title: this.state.input, isCompleted: false}],
        });
    }

    onDelete = (value) => {
        this.setState({
            deleteElement: this.state.list.splice(this.state.list.indexOf(value), 1)
        });
    }

    onChangeShow = (value) => {
        this.setState({
            changedElement: [this.state.list.splice(this.state.list.indexOf(value), 1,
                {
                    id: value.id,
                    title: value.title,
                    isCompleted: !value.isCompleted
                },)]
        });
    }


    getColour = (value) => {
        return value.isCompleted ? '#F7C815' : '#BC0000';
    }

    render() {
        return (
            <>
                <Box sx={{maxWidth: 752}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <List dense={false}>
                                {this.state.list &&
                                    this.state.list.map((value, index) =>
                                        <>
                                            <div key={`work-- ${index}`}
                                                 onClick={() => {
                                                     this.onChangeShow(value)
                                                 }}
                                                 style={{background: this.getColour(value), height: 50, width: 100}}>
                                                {value.title}
                                            </div>
                                            <div key={`delete-- ${index}`} onClick={() => {
                                                this.onDelete(value)
                                            }}>
                                                <DeleteIcon/>
                                            </div>
                                        </>
                                    )}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
                <div>
                    <TextField id="standard-basic"
                               variant="standard"
                               value={this.state.input}
                               onChange={this.onInputText}/>
                    <Button variant="contained"
                            endIcon={<SendIcon/>}
                            onClick={this.onClickAddToLIst}>
                        Send
                    </Button>
                </div>
            </>
        );
    }
}

export default ListToDo;