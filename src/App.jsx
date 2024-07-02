
import SideBar from './components/Sidebar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { Animator, ScrollContainer, ScrollPage,FadeIn,FadeOut,Fade,batch, Move, Sticky, StickyIn, MoveIn, MoveOut } from 'react-scroll-motion'
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow:ital,wght@1,500&family=Cinzel+Decorative&family=Dancing+Script:wght@500&family=Josefin+Sans:ital,wght@1,300&family=Rubik+Iso&family=Shantell+Sans:wght@300&family=Special+Elite&family=VT323&display=swap');
</style>

function App() {
  const mainStyle = {
    height : "100vh",
    backgroundImage :"url('https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize : "cover",
    opacity: '0.5'
  }
  const font = {
    fontFamily: "Shantell Sans, cursive"
}

  return (
    <>
    
    
    <div class="bg-slate-950 text-zinc-400" id="home">
        
        <ScrollContainer>
          <ScrollPage>
          <Animator animation={Fade(0,1)}>
            <div class="bg-black">

              <div class="" style={mainStyle}></div>

              <SideBar/>

              <div style={font} class="text-zinc-300 text-3xl absolute top-0 right-0 mt-60 mr-60 w-96">My name is Carlos Figueroa. I am a Softare Engineer.</div>

            </div>
            
            </Animator>
            </ScrollPage>
            
        <ScrollPage >
          <Animator animation={batch(Move(-2000,0,3000,0))}>
            <Skills/>
          </Animator>
        </ScrollPage>  
          
        <ScrollPage>
          <Animator animation={batch(MoveIn(-1200,0), MoveOut(3000, 0))}>
            <Projects/>
          </Animator>
          
          </ScrollPage>

        <ScrollPage>
          <Animator>
            <Experience/>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator>
            <Contact/>
          </Animator>
        </ScrollPage>

        
      
        </ScrollContainer>
        </div>
    
    </>
  )
}

export default App
