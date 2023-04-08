import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin-in.svg';

const Footer = () => {
  return (
    <footer className="m-auto w-11/12 h-16 border-t text-xs flex justify-between p-3">
      <span className="text-slate-500 font-bold">© made by SeungYun Chu</span>
      <div className="flex justify-between w-12">
        <a href="https://github.com/seungyeonchoo">
          <Github className="w-5 cursor-pointer fill-gray-500 hover:fill-gray-700" />
        </a>
        <a href="https://www.linkedin.com/in/seungyun-chu-44b59a255/">
          <LinkedIn className="w-5 cursor-pointer fill-gray-500 hover:fill-blue-600" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
