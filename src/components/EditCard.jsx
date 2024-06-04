import {useContext} from 'react';
import {AluraflixContext} from '../context/AluraflixContext';
import close from '../assets/close.svg';

const EditCard = () => {
  const {form, handleChange, active, handlePatch, handleReset, closeEdit} =
    useContext(AluraflixContext);

  return (
    <div
      className={`${
        !active ? 'hidden' : 'inset-0'
      } fixed  flex justify-center items-center bg-blue-700 bg-opacity-30`}
    >
      <div className="bg-blue-950 min-w-[600px] h-5/6 max-sm:h-auto max-sm:min-w-[350px] max-sm:p-1.5 opacity-100 py-8 px-20 rounded-xl border-2 border-blue-500">
        <div className="flex justify-end cursor-pointer rounded-full">
          <img
            src={close}
            alt="close"
            width={24}
            height={24}
            onClick={() => closeEdit()}
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-8 max-sm:mb-0">
          <h2 className="text-4xl font-bold mb-4 mt-4 max-sm:text-xl">
            EDITAR VIDEO
          </h2>
        </div>
        <div>
          <form onSubmit={() => handlePatch(form.id)}>
            <div className="flex flex-col">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Título del video"
                className="border-2 border-blue-500 rounded-md p-2 bg-blue-950 mb-4"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="category">Categoría:</label>
              <input
                list="categories"
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Categoría del video"
                className="border-2 border-blue-500 rounded-md p-2 bg-blue-950 mb-4"
                required
              />

              <datalist id="categories">
                <option value="walkthrough" />
                <option value="game review" />
                <option value="game ost" />
              </datalist>
            </div>

            <div className="flex flex-col">
              <label htmlFor="image">Imagen:</label>
              <input
                type="text"
                id="image"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Enlace obligatorio"
                className="border-2 border-blue-500 rounded-md p-2 bg-blue-950 mb-4"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="video">Video:</label>
              <input
                type="text"
                id="video"
                name="video"
                value={form.video}
                onChange={handleChange}
                className="border-2 border-blue-500 rounded-md p-2 bg-blue-950 mb-4"
                placeholder="Enlace del video"
                required
              />
            </div>
            <div className="flex flex-col mb-8 max-sm:mb-4">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="7"
                placeholder="Descripción del video"
                className="border-2 border-blue-500 rounded-md p-2 bg-blue-950 mb-4 max-sm:h-[100px] max-sm:mb-0"
                required
              ></textarea>
            </div>
            <div className="flex justify-evenly">
              <button
                className="border-2 bg-black border-[#2271D1] text-[#2271D1] inner-blue-custom py-2 px-8 rounded-md mb-8 mr-5 uppercase"
                type="submit"
              >
                Guardar
              </button>
              <button
                className="border-2 border-white py-2 px-8 rounded-md mb-8 uppercase"
                onClick={handleReset}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
