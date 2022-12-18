import React, {useState} from 'react'
import Profile from '../assets/jasp (2).png'
import blueBadge from '../assets/My project (1).png'
import Typewriter from 'typewriter-effect'
import { FaFacebook, FaFolder, FaProjectDiagram,FaPhone, FaVideo, FaInternetExplorer, FaBars, FaEye, FaTimes} from 'react-icons/fa'
import achievement1 from '../assets/certifications/certificate1.png'
import achievement2 from '../assets/certifications/Digital certicate.jpg'
import achievement3 from '../assets/certifications/freecodecamp.png'
import achievement4 from '../assets/certifications/python certificate.png'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-letter-j-glitch-distortion-vector-22855050-removebg-preview.png'
import HTML from '../assets/html-removebg-preview.png'
import CSS from '../assets/css-removebg-preview.png'
import Js from '../assets/javascript.png'
import Git from '../assets/pngegg.png'
import Java from '../assets/pngegg (1).png'
import Cplusplus from '../assets/pngegg (2).png';
import Python from '../assets/pngegg (3).png';
import Rreact from '../assets/pngegg (4).png';
import Tailwind from '../assets/Tailwind-CSS-removebg-preview.png' 
import MongOdb from '../assets/pngegg (5).png';
import NoDE from '../assets/pngegg (6).png'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import Vid1 from '../assets/videos/stopwatch.mp4'



const Home = () => {
    const [nav, setNav] = useState(false)
    
    const [isFollowing, setIsFollowing] = useState(false)

    const handleClick = () => setNav(!nav)
  return (
    <div name='home' className='bg-[#0D1117] w-full lg:p-[4rem]'>
        {/**header */}
        <header className='w-full h-16 bg-[#161B22] flex justify-between items-center px-4 lg:px-8  fixed top-0 left-0'>
            <img src={Logo} alt="" className='w-[60px]'/>
            <div className='hidden lg:flex'>
            <div className='text-white flex gap-4'>
                <div className='flex items-center justify-center'>
                    <FaInternetExplorer /> <NavLink to='explore' className='mr-4 ml-[5px]'>Explore</NavLink>
                </div>
                <div className='flex items-center justify-center'>
                    <FaVideo /> <NavLink to='explore' className='mr-4 ml-[5px]'>Videos</NavLink>
                </div>
                    
                <div className='flex items-center justify-center'>
                    <FaProjectDiagram /> <NavLink to='explore' className='mr-4 ml-[5px]'>Projects</NavLink>
                </div>
                <div className='flex items-center justify-center'>
                    <FaPhone />   <NavLink to='explore' className='mr-4 ml-[5px]'>Contact</NavLink>
                </div>
            </div>
            </div>
            <div onClick={handleClick} className='md:hidden z-10 text-white'>
            {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            <div className={!nav ? 'hidden' : 'absolute z-40 top-8 left-0 py-8 mx-auto mt-[2rem] rounded-md w-full text-white gap-4 bg-[#161B22] color-grey-300 flex flex-col justify-center items-center'}>
                <div className='flex items-center justify-center border-b-[1px] w-[90%] p-2 border-gray-700'>
                    <FaInternetExplorer /> <NavLink to='explore' className='mr-4 ml-[5px]'>Explore</NavLink>
                </div>
                <div className='flex items-center justify-center border-b-[1px] w-[90%] p-2 border-gray-700'>
                    <FaVideo /> <NavLink to='explore' className='mr-4 ml-[5px]'>Videos</NavLink>
                </div>
                    
                <div className='flex items-center justify-center border-b-[1px] w-[90%] p-2 border-gray-700'>
                    <FaProjectDiagram /> <NavLink to='explore' className='mr-4 ml-[5px]'>Projects</NavLink>
                </div>
                <div className='flex items-center justify-center'>
                    <FaPhone />   <NavLink to='explore' className='mr-4 ml-[5px]'>Contact</NavLink>
                </div>
            </div>
        </header>
        {/**container */}
        <div className='flex lg:flex-row flex-col mx-w-[1000px] px-4 py-8 w-full mt-[4rem] lg:mt-[0] gap-8'>
            <div className='lg:w-[300px]'>
                <div className='flex flex-col-2 items-center gap-4 lg:flex-col mb-8'>
                    <img src={Profile} alt="" className='w-[80px] h-[80px] rounded-full border-2 border-[#8B949E] lg:w-[200px] lg:h-[200px]'/>
                    <div>
                        <div className='flex items-center'>
                        <h1 className='font-bold text-[#C9D1D9] text-2xl'>Jasper</h1>
                        <img 
                        src={blueBadge} 
                        alt="" 
                        className='h-[26px]'/>
                        </div>
                        <p className='text-[#8B949E]'>
                        <Typewriter 
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        "Jasperayawan",
                    ],    
                }}
                    />
                        </p>
                    </div>
                </div>

                <div className='text-[#C9D1D9] border-b-[.5px] border-gray-800 pb-4 flex flex-col lg:flex-col-reverse'>
                    <div className=''>
                        <p>👨‍💻 20 years old Aspiring Software Engineer studied at Southern Mindanao colleges
                            I learn how to code when i was 18 years old
                        </p>
                        <div className='text-green-500'>
                        <Typewriter 
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        "Software Engineer",
                        "Game Developer",
                        "Cyber Security",
                    ],    
                }}
                    />
                        </div>

                        <div className='mt-4 text-[14px]'>
                            <div className='flex items-center gap-2 hover:text-blue-500 hover:underline'> <FaFolder /> <a href='https://mail.google.com/mail/u/0/?ogbl#inbox'>  ejayawan22@gmail.com</a></div> 
                            <div className='flex items-center gap-2 hover:text-blue-500 hover:underline'> <FaFacebook /> <a href='https://www.facebook.com/jasper.ayawan.1/'>  www.facebook.com</a></div>
                        </div>
                    </div>

                    <button className='bg-[#21262D] w-full my-4 rounded-md block border-gray-700 py-[3px] border-[1.5px]'
                        onClick={() => setIsFollowing(!isFollowing)}>
                            {isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>

                <div>
                   <h1 className='text-[#C9D1D9] my-4'>Achievements</h1>
                   <div className='gap-4 flex items-center mb-8'>
                       <div className='w-[50px] h-[50px] border-[1px] flex justify-center items-center rounded-full'>
                            <img src={achievement1} alt="" className='rounded-full'/>
                       </div>
                       <div className='w-[50px] h-[50px] border-[1px] flex justify-center items-center rounded-full'>
                            <img src={achievement2} alt="" className='rounded-full'/>
                       </div>
                       <div className='w-[50px] h-[50px] border-[1px] flex justify-center items-center rounded-full'>
                            <img src={achievement3} alt="" className='rounded-full'/>
                       </div>
                       <div className='w-[50px] h-[50px] border-[1px] flex justify-center items-center rounded-full'>
                            <img src={achievement4} alt="" className='rounded-full'/>
                       </div>
                    </div>
                    
                </div>
        
            </div>



            <div className='w-full h-full'>
                <div className=''>
                
                <div className='p-4 border-[1px] border-gray-700 rounded-lg'>
                    <div className='text-[#C9D1D9] border-b-[1px] border-gray-700 pb-4 mb-4'>
                        <p className='font-mono text-[12px]'>JasperAyawan/READ.md</p>
                        <h1 className='text-3xl mt-2 font-bold'>⛷ Meta Crafter</h1>
                        <div className='mt-4'>
                            <p className='font-mono text-[12px] bg-gray-600 rounded-lg px-[7px] w-[160px] justify-center items-center flex'>Digital Craftman /Frond-end Developer</p>
                        </div>
                    </div>

                    <p className='text-[#C9D1D9] text-[14px]'>I'm full-stack developer and content creator building my version of the digital
                         world one step at a time. All coding projects are built from the ground up, from planning and 
                         designing all the way to solving real-life problems with code. Currently studying at Southern Mindanao Colleges during my 1st year college
                         we learn c++ and on that time i don't have an idea what programming is, all i want is just to run my code and pass it to my professor, 
                         after a few weeks I understand how computer works and I learn how to code by searching on google and watching some tutorial on Youtube.
                         I learn web development when I was second year college and we started with HTML and CSS hehe I learn the latest technologies by myself not to my professor
                         I inspired by sir Jomari who was the content creater on Youtube and Software Engineer of NYC because of his ability to code and insane in programming.
                         Hope I will become a Software Engineer too.</p>

                    <div className='mt-4 border-b-4 pb-8 mb-8 border-[#333]'>
                        <ul className='flex gap-[.2rem] flex-wrap'>
                            <li><a href="/" className='text-white bg-red-500 px-8 text-[13px] font-mono py-[0.3rem]'>SUBSCRIBE</a></li>
                            <li><a href="/" className='text-white bg-yellow-500 px-4 text-[13px] font-mono py-[0.3rem] flex justify-center items-center gap-2'><FaEye/> VIEWS</a></li>
                            <li><a href="/" className='text-white bg-blue-500 px-8 text-[13px] font-mono py-[0.3rem]'>FOLLOW</a></li>
                            <li><a href="/" className='text-white bg-green-500 px-8 text-[13px] font-mono py-[0.3rem]'>STARS</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold text-gray-400'>🧰 Languages and Tools</h1>
                        <div className='flex justify-start items-center gap-4 py-4 flex-wrap'>
                        <div>
                            <img src={HTML} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={CSS} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={Js} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={Git} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={Java} alt="" className='w-[50px]'/>
                        </div>
                        <div>
                            <img src={Cplusplus} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={Python} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={Rreact} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={Tailwind} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={MongOdb} alt="" className='w-[30px]'/>
                        </div>
                        <div>
                            <img src={NoDE} alt="" className='w-[30px]'/>
                        </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-gray-400'>📺 Latest Youtube Videos</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-4'>
                         <div className=' py-4'>
                            <Video 
                                onCanPlayThrough = {() => {
                                    console.log('video play')
                                }}
                            >
                                <source src={Vid1} type='video/webm'/>
                            </Video>
                         </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home