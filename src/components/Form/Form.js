import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";

import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({creator: "", title: "", message: "", tags: "", selectedFile: ""});

  // finds the specific post whose data we want to automatically populate in the form for updating
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post)
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    // if the post data in the form already has an id, then we want the submit handler to update
    // the post, not create a new one. If no currentId exists, then just create a new post.
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    
    clear()
  };

  const clear = () => {
    setCurrentId(null)
    setPostData({creator: "", title: "", message: "", tags: "", selectedFile: ""});

  };

  return (
    // Paper is basically a div w/ a whitish background
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} Your Treasure</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
