import { UilBars } from '@iconscout/react-unicons'
import { useState, Link} from 'react'

const Sidebar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    

    return(
        <div class="absolute top-5 left-5 text-white text-xl">
            <UilBars onClick={handleNav}/>
            {nav ? (
                <div class="ml-4 mt-10 flex flex-col gap-20 text-lg" >
                    <a href="#home">
                        <span class="ml-3">Home</span>
                    </a>
                    <a href="#skills">
                        <span class="ml-3">Skills</span>
                    </a>
                    <a href="#projects">
                        <span class="ml-3">Projects</span>
                    </a>

                    <a href="#experience">
                        <span class="ml-3">Experience</span>
                    </a>

                    <a href="#contact">
                        <span class="ml-3">Contact</span>
                    </a>
                    
                </div>
            ):(<></>)}
        </div>
    )
}

export default Sidebar