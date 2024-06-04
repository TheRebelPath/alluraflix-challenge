import Aluraflix from '../assets/Aluraflix.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex justify-center items-center  py-6 p-4 border-t-2 border-[#2271D1]">
      <img
        src={Aluraflix}
        alt="aluraflix"
        width={120}
        className="max-sm:hidden"
      />
      <div className="sm:hidden">
        <Link
          to="/"
          className="px-9 py-2 bg-black text-[#2271D1] border-2 border-[#2271D1] rounded-full shadow-inner-blue-custom mr-4 "
        >
          Home{' '}
        </Link>
        <Link
          to="/upload"
          className="px-9 py-2 text-white border-2 border-white rounded-full	"
        >
          Upload
        </Link>
      </div>
    </div>
  );
};

export default Footer;
