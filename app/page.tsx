import Lanyard from "./componnents/Lanyard/Lanyard";
import RotatingText from "./componnents/RotatingText/RotatingText";
import SplitText from "./componnents/SplitText/SplitText";
import BlurText from "./componnents/BlurText/BlurText";
import AnimatedContent from "./componnents/AnimatedContent/AnimatedContent";
import Squares from "./componnents/Squares/Squares";
import ScrollVelocity from "./componnents/ScrollVelocity/ScrollVelocity";
import TiltedCard from "./componnents/TiltedCard/TiltedCard";
import ScrollFloat from "./componnents/ScrollFloat/ScrollFloat";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';


export default function Home() {

 
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
      <Squares 
      speed={0.5} 
      squareSize={40}
      direction='diagonal' // up, down, left, right, diagonal
      borderColor='#444A29'
      hoverFillColor='#19222D'
      />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
            <div className="flex flex-col gap-6">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="flex items-center gap-2">
              <h1 className="text-2xl text-white font-bold">Gue Bisa</h1>
              <RotatingText 
                 texts={['Web Design', 'Web Developer', 'Ai Development', 'Web Programming']}
                 mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                 staggerFrom={"last"}
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 exit={{ y: "-120%" }}
                 staggerDuration={0.025}
                 splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                 transition={{ type: "spring", damping: 30, stiffness: 400 }}
                 rotationInterval={2000}
              />
              </div>
            </AnimatedContent>

            <div className="flex flex-col items-start">
              <SplitText 
                text="I'm Rayhan Rambe"
                className="text-6xl font-semibold text-start"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
              <SplitText 
                text="Full Stack Developer"
                className="text-5xl font-semibold text-start text-[#C6F10E]"
                delay={80}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>

              <BlurText 
                 text="I'm Rayhan Atricha Rambe — a developer who loves exploring tech, solving problems, and building cool things.
                        Check out my work as I keep learning and growing in this ever-evolving world of code."
                 delay={75}
                 animateBy="words"
                 direction="top"
                 className="text-xl mb-8"
              />
              <div className="flex items-center">
           
              </div>
      
            </div>
              </div>
              </div>

              <div className="col-span-6 relative">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]}/>
              </div>
          </div>
      </div>

        <div className="bg-neutral-950 py-10">
        <ScrollVelocity
          texts={['Ntar Lagi Kuliah', 'Dah Semester 6 njr']}
        />
        </div>

      <div className="container mx-auto h-screen bg-neutral-950">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 ">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-2">
              <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName="font-bold pl-20 "
                >
                  About Me
                </ScrollFloat>
                <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName="text-base pl-20"
                >
                  Mau tau lebih tentang aku?
                </ScrollFloat>

                <Link href="/aboutme">
                  <button className="bg-[#19222D] hover:bg-[#444A29] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ml-20">
                    Let's Go!
                  </button>
                </Link>

              </div>
            </div>
          </div>
          <div className="col-span-6 ">
          <div className="items-center pl-40 py-28">
          <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
            <TiltedCard
              imageSrc="./assets/images/nyerah.jpeg"
              altText="Rayhan"
              captionText="Rayhan Atricha Rambe"
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="350px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              
            />
            </AnimatedContent>
          </div>
          </div>
        </div>  
      </div>

      <div className="container mx-auto h-screen bg-neutral-950">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 ">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-2">
              <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName="font-bold pl-20 "
                >
                  My Projects
                </ScrollFloat>
                <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName="text-base pl-20"
                >
                  Jelajahi project yang sudah saya kerjakan.
                </ScrollFloat>

                <Link href="/project">
                  <button className="bg-[#19222D] hover:bg-[#444A29] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ml-20">
                    Let's Go!
                  </button>
                </Link>

              </div>
            </div>
          </div>
          <div className="col-span-6 ">
          <div className="items-center pl-40 py-28">
          <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
            <TiltedCard
              imageSrc="./assets/images/nyerah.jpeg"
              altText="Rayhan"
              captionText="Rayhan Atricha Rambe"
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="350px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              
            />
            </AnimatedContent>
          </div>
          </div>
        </div>  
      </div>

      <div className="container mx-auto h-screen flex flex-col items-center justify-center">
             <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName="text-6xl"
                >
                  Get in Touch 
              </ScrollFloat>

            <div className="flex space-x-6 text-3xl text-gray-600">
              <a href="https://github.com/siuuuu78" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rayhan-rambe-303aba25b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/rayhanatricha" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
        
      </div>
     
    </div>
  );
}
