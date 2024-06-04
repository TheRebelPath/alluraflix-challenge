import {useContext} from 'react';

import {AluraflixContext} from '../context/AluraflixContext';
const UploadForm = () => {
  const {handleSubmit, form, handleReset, handleChange} =
    useContext(AluraflixContext);

  return (
    <section className="text-white ">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl font-bold mb-4 mt-4">NUEVO VIDEO</h1>
        <p className="text-sm uppercase">
          Complete el formulario para crear una nueva tarjeta de video
        </p>
      </div>
      <div>
        <h2 className="mb-8 border-t-2 border-b-2 border-gray-700 p-4 text-xl">
          Crear Tarjeta
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full mb-8">
            <div className="flex flex-col w-[40%] mr-5">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Título del video"
                className="border-2 border-gray-700 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col w-[40%]">
              <label htmlFor="category">Categoría:</label>
              <input
                list="categories"
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Categoría del video"
                className="border-2 border-gray-700 rounded-md p-2"
                required
              />
            </div>
            <datalist id="categories">
              <option value="walkthrough" />
              <option value="game review" />
              <option value="game ost" />
            </datalist>
          </div>
          <div className="flex w-full mb-8">
            <div className="flex flex-col w-[50%] mr-5">
              <label className="text-red-600" htmlFor="image">
                Imagen:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Enlace obligatorio"
                className="border-2 border-red-600 rounded-md p-2 placeholder-red-600"
                required
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="video">Video:</label>
              <input
                type="text"
                id="video"
                name="video"
                value={form.video}
                onChange={handleChange}
                className="border-2 border-gray-700 rounded-md p-2"
                placeholder="Enlace del video"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="7"
              placeholder="Descripción del video"
              className="border-2 border-gray-700 rounded-md w-1/2 resize-none p-2"
              required
            ></textarea>
          </div>

          <button
            className="border-2 border-[#2271D1] py-2 px-6 rounded-md mb-8 mr-5 uppercase"
            type="submit"
          >
            Guardar
          </button>
          <button
            className="border-2 border-white py-2 px-6 rounded-md mb-8 uppercase"
            onClick={handleReset}
          >
            Limpiar
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadForm;
