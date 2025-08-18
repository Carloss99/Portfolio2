import { useState } from "react"
import daytracker from '../assets/daytracker.png'


//projects component
const Projects = () => {

    //array holding projects as objects
    const panels = [
        { title: "Star Wars Trivia", link: "https://regal-tanuki-9c1a67.netlify.app", background: "https://external-preview.redd.it/8t2Ke2zdrHx669tFR1UzcOvELcpRPMUsPUyMLVB0EN0.jpg?auto=webp&s=5c7efaff25d7b9e5071ee25e8f01f3e7fc160196" },
        { title: "Hangman", link: "https://creative-strudel-0cfd0a.netlify.app", background: "https://t3.ftcdn.net/jpg/05/53/20/12/360_F_553201237_I9NNuEE7LfExev63xcgK0klqbwqaBsva.jpg" },
        { title: "Daytracker", link: "https://wonderful-wisp-ad741f.netlify.app" , background: `${daytracker}`}
    ]
    //selected panel 
    const [activeIndex, setActiveIndex] = useState(0)

    const panel = {
        backgroundSize: 'auto 80%',
        backgroundPosition: 'center',
        backgroundRepeat:'none',
        borderRadius: '50px',
        height: '60vh',
        border: '1px solid grey',
        cursor: 'pointer',
        flex: '0.11',
        margin: '5px',
        position: 'relative',
        transition: 'flex 0.5s ease-in'
    }

    const h3 = {
        position: 'absolute',
        top: '5%',
        left: '30%',
        opacity: '0',
        margin: 'auto',
    }

    const panelActive ={
        flex:'.3'
    }
    const panelActiveh3 ={
        opacity:'1'
    }
    const handleClick = (index) => {
        setActiveIndex(index)
    }




    




    return (
        // container for projects component
        <div className="my-30 m-auto sm:w-3/4 rounded-3xl h-3/4 bg-zinc-800 p-10" id="projects">


            {/* Projects header */}
            <h1 className=" text-center text-3xl text-decoration-line: underline ">Projects</h1>


            {/* container for projects */}
            <div  className='flex justify-center m-auto container'>

                {/* maps projects and dispalys */}
                {panels.map((proj,index) => (

                    // div project panel
                    <div key={index} className='panelActive' style={{...panel, ...(activeIndex === index ? panelActive: {}), backgroundImage: `url(${proj.background})`}} onClick={() => handleClick(index)}>

                    {/* link to project */}
                    <a href={proj.link}><h3 style={{...h3, ...(activeIndex === index ? panelActiveh3 : {} )}}>{proj.title}</h3></a>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects