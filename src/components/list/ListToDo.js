import React, {Component} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

class ListToDo extends Component {
    state = {
        input: '',
        list: [
            {
                id: 0,
                work: 'do1',
                isShow: false,
            },
            {
                id: 1,
                work: 'do2',
                isShow: true,
            },
            {
                id: 2,
                work: 'do3',
                isShow: true,
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
            list: [...this.state.list, {id: Date.now(), work: this.state.input, isShow: false}],
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
                    work: value.work,
                    isShow: !value.isShow
                },)]
        });
        console.log(this.state)
    }


    getColour = (value) => {
        return value.isShow ? '#F7C815' : '#BC0000';
    }

    render() {
        return (
            <>
                <Box sx={{maxWidth: 752}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <List dense={false}>
                                {this.state.list.map((value, index) =>
                                    <>
                                        <div key={`work-- ${index}`}
                                             onClick={() => {
                                                 this.onChangeShow(value)
                                             }}
                                             style={{background: this.getColour(value), height: 50, width: 100}}>
                                            {value.work}
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
                    <input value={this.state.input} onChange={this.onInputText}/>
                    <button onClick={this.onClickAddToLIst}>Add</button>
                </div>
            </>
        );
    }
}

export default ListToDo;