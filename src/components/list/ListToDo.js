import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import useList from "../../hooks/useList";
import './ListToDo.css';

const ListToDo = () => {
    const {
        listToDos,
        inputText,
        onInputText,
        onClickAddToList,
        onDelete,
        onChangeShow,
        getColour
    } = useList();

    return (
        <>
            <Box sx={{maxWidth: 752}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <List dense={false}>
                            {listToDos.list &&
                                listToDos.list.map((value, index) =>
                                    <div key={`card-- ${index}`} className="box">
                                        <div key={`title-- ${index}`}
                                             onClick={() => {
                                                 onChangeShow(value)
                                             }}
                                             style={{background: getColour(value), height: 30, width: 100}}
                                        >
                                            {value.title}
                                        </div>
                                        <div key={`delete-- ${index}`} onClick={() => {
                                            onDelete(value)
                                        }}>
                                            <DeleteIcon/>
                                        </div>
                                    </div>
                                )}
                        </List>
                    </Grid>
                </Grid>
            </Box>
            <div>
                <TextField id="standard-basic"
                           variant="standard"
                           value={inputText}
                           onChange={onInputText}/>
                <Button variant="contained"
                        endIcon={<SendIcon/>}
                        onClick={onClickAddToList}
                >
                    Send
                </Button>
            </div>
        </>
    );

}

export default ListToDo;