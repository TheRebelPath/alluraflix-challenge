import trash from '../assets/trash.svg';
import edit from '../assets/edit.svg';
import {useContext} from 'react';
import {AluraflixContext} from '../context/AluraflixContext';

const VideoCard = ({id, title, category, image, video, description}) => {
  const {handleDelete, editButton} = useContext(AluraflixContext);

  return (
    <div className="flex flex-col border-2 border-[#2271D1] rounded-xl shadow-inner-blue-custom w-[400px] h-[300px] max-sm:w-full max-sm:h-full overflow-hidden">
      <a href={video} target="_blank" className="w-[100%] h-4/5">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </a>
      <div className="flex justify-evenly bg-black text-white h-1/5 font-bold">
        <button
          onClick={() => handleDelete(id)}
          className="flex items-center uppercase"
        >
          {' '}
          <img src={trash} alt="trash" className="mr-4" /> Borrar
        </button>
        <button
          className="flex items-center uppercase"
          onClick={() => editButton(id)}
        >
          {' '}
          <img src={edit} alt="edit" className="mr-4" /> Editar
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
