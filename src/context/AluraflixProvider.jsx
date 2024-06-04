import {useEffect, useState} from 'react';
import {AluraflixContext} from './AluraflixContext';
import {v4} from 'uuid';
import {useNavigate} from 'react-router-dom';

const AluraflixProvider = ({children}) => {
  const [videos, setVideos] = useState([]);
  const [active, setActive] = useState(false);
  const [form, setForm] = useState({
    id: v4(),
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });
  const navigate = useNavigate();

  const getVideos = async () => {
    const response = await fetch('http://localhost:3500/aluraflix');
    const data = await response.json();

    setVideos(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3500/aluraflix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      navigate('/');
      handleReset();
      getVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3500/aluraflix/${id}`, {
        method: 'DELETE',
      });
      getVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePatch = async (id) => {
    try {
      await fetch(`http://localhost:3500/aluraflix/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setActive(false);
      handleReset();
      getVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    const video = videos.find((video) => video.id === id);
    setForm(video);
  };

  const handleReset = () => {
    setForm({
      id: v4(),
      title: '',
      category: '',
      image: '',
      video: '',
      description: '',
    });
  };

  const editButton = (id) => {
    handleEdit(id);
    setActive(!active);
  };

  const closeEdit = () => {
    setActive(!active);
    handleReset();
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <AluraflixContext.Provider
      value={{
        videos,
        getVideos,
        form,
        setForm,
        active,
        setActive,
        handleSubmit,
        handleDelete,
        handleReset,
        handleChange,
        handlePatch,
        editButton,
        closeEdit,
      }}
    >
      {children}
    </AluraflixContext.Provider>
  );
};

export default AluraflixProvider;
