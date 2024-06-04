import {Link} from 'react-router-dom';
import Aluraflix from '../assets/Aluraflix.png';

const Header = () => {
  return (
    <nav className="flex justify-between items-center  py-6 p-4 border-b-2 border-[#2271D1] max-sm:hidden">
      <div>
        <img src={Aluraflix} alt="Aluraflix" width={120} />
      </div>
      <div className="">
        <Link
          to="/"
          className="px-9 py-2 bg-black text-[#2271D1] border-2 border-[#2271D1] rounded-md shadow-inner-blue-custom mr-4 "
        >
          Home{' '}
        </Link>
        <Link
          to="/upload"
          className="px-9 py-2 text-white border-2 border-white rounded-md	"
        >
          Upload
        </Link>
      </div>
    </nav>
  );
};

export default Header;
