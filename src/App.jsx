
import SideBar from './components/Sidebar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { Animator, ScrollContainer, ScrollPage,FadeIn,FadeOut,Fade,batch, Move, Sticky, StickyIn, MoveIn, MoveOut, ZoomIn} from 'react-scroll-motion'
import TextType from './components/TextType';






function App() {
  

  return (
    <>
  
    <div class="bg-zinc-900 text-zinc-200 pb-10" id="home">

        <div class="bg-black" >


        {/* background wallpaper */}
        <div class="sm:h-screen h-80" style={{
        
          backgroundImage :"url('https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize :"cover",
          opacity:'0.5'
        }}></div> 


        {/* Type text component */}
        <TextType class="text-3xl text-center m-20 absolute top-0 left-0 w-full"
          text={["My name is Carlos Figueroa.", "I am a Softare Engineer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        </div>
        
      
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>


        </div>
    
    </>
  )
}

export default App
















// <ScrollContainer>
//           <ScrollPage>
//           <Animator animation={Fade(0,1)}>
//             <div class="bg-black" >


//               {/* background wallpaper */}
//               {/* <div class="sm:h-screen h-80" style={{
                
//                 backgroundImage :"url('https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//                 backgroundSize :"cover",
//                 opacity:'0.5'
//               }}></div> */}

              
//               {/* <div class="text-md sm:text-3xl absolute top-0 sm:left-40 sm:mt-60 sm:mr-60 mt-28 mx-28 w-2/4 sm:w-96" >My name is Carlos Figueroa. I am a Softare Engineer.</div> */}

//               {/* Type text component */}
//               <TextType class="text-3xl text-center m-20 absolute top-0 left-0 w-full"
//                 text={["My name is Carlos Figueroa.", "I am a Softare Engineer"]}
//                 typingSpeed={75}
//                 pauseDuration={1500}
//                 showCursor={true}
//                 cursorCharacter="|"
//               />

//             </div>
            
//              </Animator>
//             </ScrollPage>
          
//             <ScrollPage>
//           <Animator animation={batch(MoveIn(-300,500), MoveOut(500, -300))}>
//             <Skills/>
//           </Animator>
          
//           </ScrollPage>
            
           
          
//         <ScrollPage>
//           <Animator animation={batch(MoveIn(300,0), MoveOut(-500, 0))}>
//             <Projects/>
//           </Animator>
          
//           </ScrollPage>

//         <ScrollPage>
//           <Animator animation={batch(Fade(0,1), Move(0,0,0,-1500), Sticky())}>
//             <Experience/>
//           </Animator>
//         </ScrollPage>

//         <ScrollPage>
//           <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
//             <Contact/>
//           </Animator>
//         </ScrollPage>

//         </ScrollContainer> 