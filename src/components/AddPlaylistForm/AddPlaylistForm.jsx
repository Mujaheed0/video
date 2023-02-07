import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPlaylist } from "../../store/thunks/addNewPlaylist";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./AddPlaylistForm.module.css";

export default function () {
  const [playlistForm, setPlaylistForm] = useState({
    title: "",
    description: "",
  });

let dispatch=useDispatch();
  const handleChange = (event) => {
    setPlaylistForm({
      ...playlistForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  dispatch(  addNewPlaylist(playlistForm));
    setPlaylistForm({
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          value={playlistForm.title}
          name="title"
          placeholder="Title of Playlist"
          required
          onChangeHandler={(event) => handleChange(event)}
        />
        <Input
          type="text"
          value={playlistForm.description}
          name="description"
          placeholder="Description"
          onChangeHandler={(event) => handleChange(event)}
        />
        <Button variant="primary" fullWidth>
          Create New Playlist
        </Button>
      </form>
    </div>
  );
}
