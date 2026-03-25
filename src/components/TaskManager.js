import React, { useState } from 'react';

import {
  TextField,
  Button,
  List,
  ListItem,
  Checkbox,
  IconButton,
  Typography,
  Container,
  AppBar,
  Toolbar
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import { FacebookShareButton, WhatsappShareButton } from 'react-share';  

const TaskManager = () => {

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const shareUrl = 'https://d1s4hlfz2rl9ze.cloudfront.net/';

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const handleToggleTask = (index) => {

  const updatedTasks = [...tasks];

  updatedTasks[index].completed = !updatedTasks[index].completed;

  setTasks(updatedTasks);
};

const handleDeleteTask = (index) => {

  const updatedTasks = tasks.filter((_, i) => i !== index);

  setTasks(updatedTasks);
};

return (
  <Container>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Daily Task Management
        </Typography>
      </Toolbar>
    </AppBar>

    <Typography variant="h6" style={{ marginTop: '20px', textAlign: 'center' }}>
      Manage Your Tasks
    </Typography>

    <TextField
    label="New Task"
variant="outlined"
fullWidth
value={taskText}
onChange={(e) => setTaskText(e.target.value)}
style={{ marginTop: '20px' }}
/>

<Button
variant="contained"
color="primary"
onClick={handleAddTask}
style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
>
Add Task
</Button>
<List>
  {tasks.map((task, index) => (

    <ListItem
      key={index}
      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => handleToggleTask(index)}
      />

      {task.text}

      <IconButton
        onClick={() => handleDeleteTask(index)}
        color="primary"
      ><DeleteIcon/>
      </IconButton>
      </ListItem>
  ))}
  </List>

   <Typography
  variant="h6"
  style={{ marginTop: '20px', textAlign: 'center' }}
>
  Share Tasks
</Typography>

<div style={{ textAlign: 'center', marginTop: '20px' }}>

  <FacebookShareButton url={shareUrl}>
    <Button
      variant="contained"
      style={{ backgroundColor: '#3b5998', color: '#fff', marginRight: '10px' }}
    >
      Facebook
    </Button>
  </FacebookShareButton>

 

  <WhatsappShareButton url={shareUrl}>
    <Button
      variant="contained"
      style={{ backgroundColor: '#25D366', color: '#fff' }}
    >
      WhatsApp
    </Button>
  </WhatsappShareButton>

</div>

  </Container>
);
};

export default TaskManager;