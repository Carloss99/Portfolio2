import { UilBars } from '@iconscout/react-unicons'
import { useState, Link} from 'react'

const Sidebar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    

    return(
        <div class="absolute top-5 left-5 sm:text-xl text-sm">
            <UilBars onClick={handleNav}/>
            {nav ? (
                <div class="ml-4 mt-10 flex flex-col sm:gap-24 gap-2" >
                    <a href="#home">
                        <span >Home</span>
                    </a>
                    <a href="#skills">
                        <span >Skills</span>
                    </a>
                    <a href="#projects">
                        <span >Projects</span>
                    </a>

                    <a href="#experience">
                        <span >Experience</span>
                    </a>

                    <a href="#contact">
                        <span >Contact</span>
                    </a>
                    
                </div>
            ):(<></>)}
        </div>
    )
}

export default Sidebar