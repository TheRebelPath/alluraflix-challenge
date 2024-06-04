import {Hero, VideoCard, EditCard} from '../components';
import {useContext, useEffect, useState} from 'react';
import {AluraflixContext} from '../context/AluraflixContext';

const Home = () => {
  const {videos} = useContext(AluraflixContext);
  const [randomVideos, setRandomVideos] = useState(null);

  useEffect(() => {
    if (videos.length > 0) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      setRandomVideos(videos[randomIndex]);
    }
  }, [videos]);

  console.log(randomVideos);

  return (
    <section>
      {randomVideos && <Hero {...randomVideos} />}
      <section className="px-5 mb-12">
        <div>
          <h2 className="bg-blue-300 text-white max-w-80 text-center font-bold text-2xl mb-5 rounded-md py-2 uppercase">
            Walkthrough
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
          {videos
            .filter((video) => video.category === 'walkthrough')
            .map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
        </div>
      </section>
      <section className="px-5 mb-12">
        <div>
          <h2 className="bg-green-500 text-white max-w-80 text-center font-bold text-2xl mb-5 rounded-md py-2 uppercase">
            Game Review
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
          {videos
            .filter((video) => video.category === 'game review')
            .map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
        </div>
      </section>
      <section className="px-5 mb-12">
        <div>
          <h2 className="bg-yellow-500 text-white max-w-80 text-center font-bold text-2xl mb-5 rounded-md py-2 uppercase">
            Game OST
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
          {videos
            .filter((video) => video.category === 'game ost')
            .map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
        </div>
      </section>
      <EditCard />
    </section>
  );
};

export default Home;
