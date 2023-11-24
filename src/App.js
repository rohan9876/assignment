import './App.css';
import profile from "./images/woman.png";
import telephone from "./images/telephone.png";
import support from "./images/support.png";
import leftchevron from "./images/left-chevron.png";
import logo from "./images/logo.jpg";
import girl from "./images/girl.jpeg";
import teacher from "./images/teacher.jpg";
import vedio from "./vedio/vedio.mp4";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { ImParagraphLeft } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";
import { GoVideo } from "react-icons/go";
import { RiSlideshowLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { LuFileSearch } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { FiMic } from "react-icons/fi";
import { FaRegShareSquare } from "react-icons/fa";
import { PiWechatLogo } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";




function App() {
  return (
    <div className="App">
      <div className="left">
        <div className='left-top'>
        <img className="logo" src={logo} />
        <div className='icon'>
          {<IoStatsChart />}
          </div>
          <div className='icon'>
          {<MdOutlineNotificationsNone />}
          </div>
          <div className='icon'>
          {<BsClock />}
          </div>
          <div className='icon'>
          {<LuListTodo />}
          </div>
          <div className='icon'>
          {<FiEye />}
          </div>
          <div className='icon'>
          {<BsPeopleFill />}
          </div>
          <div className='icon'>
          {<ImParagraphLeft />}
          </div>
        </div>
        <div className='left-bottom'>
          <img className='profile' src={profile} />
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="top-left">
            <img className='icon' src={leftchevron} />
            <h1 className='heading'>Basic Mathematics 101</h1>
          </div>
          <div className="top-right">
            <img className='icon' src={telephone} />
            <h4 className='sub-heading'>Call Techer</h4>
            <img className='icon' src={support} />
            <h4 className='sub-heading'>Support</h4>
          </div>
        </div>

        <div className='navbar'>
          <div className='navbar-items'>
            <div className='navbar-icon'>
              <SiGoogleclassroom />
            </div>
            <h5>classroom</h5>
          </div>
          <div className='navbar-items'>
            <div className='navbar-icon'>
              <SiGoogleclassroom />
            </div>
            <h5>whiteboard</h5>
          </div>
          <div className='navbar-items'>
            <div className='navbar-icon'>
              <GoVideo />
            </div>
            <h5>Videos</h5>
          </div>
          <div className='navbar-items'>
            <div className='navbar-icon'>
              <RiSlideshowLine />
            </div>
            <h5>Slide Show</h5>
          </div>
          <div className='navbar-items'>
            <div className='navbar-icon'>
              <GrDocumentText />
            </div>
            <h5>Documents</h5>
          </div>
          <div className='navbar-items'>
            <div className='navbar-icon'>
              <LuFileSearch />
            </div>
            <h5>Doc.Cam</h5>
          </div>
        </div>


        <div className='main-container'>
          <div className='details'>
            <div>
              <img className='girl' src={girl} />
              <div className='name1'>
              <h5 >Riddha</h5>
              </div>
            </div>
            <div>
              <img className='teacher' src={teacher} />
              <div className='name2'>
              <h5 >Ms. Kaur</h5>
              </div>
              
            </div>
            <div className='icon-container'>
              <div className='icon-box'>
                <div>
                  <BsCameraVideo />
                </div>
              </div>
              <div className='icon-box'>
                <div>
                  <FiMic />
                </div>
              </div>
              <div className='icon-box'>
                <div>
                  <FaRegShareSquare />
                </div>
              </div>
            </div>
            <div className='icon-container1'>
            <div className='icon-box'>
                <div>
                  <PiWechatLogo />
                </div>
              </div>
              <div className='icon-box'>
                <div>
                  <IoLogOutOutline />
                </div>
              </div>
            </div>
          </div>
          <div className='vedio-container'>
            <video className='vedio' controls src={vedio} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
