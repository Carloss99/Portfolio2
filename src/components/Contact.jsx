
import { UilLinkedin, UilGithub} from '@iconscout/react-unicons'
//contact component
const Contact = () => {
    return (
        //Container div
        <div className="w-1/2  " id="contact">

            {/* list to hold contact links */}
            <ul className='flex place-content-evenly '>

                <div>
                    <UilLinkedin className='inline'/>
                    <a href="https://www.linkedin.com/in/carlosfigueroa99" className='transition duration-300 ease-in sm:hover:text-2xl hover:text-xl hover:text-blue-400 mx-2'>LinkedIn</a>
                </div>


                <div>
                    <UilGithub className='inline'/>
                    <a href='https://github.com/Carloss99' className='transition duration-300 ease-in sm:hover:text-2xl hover:text-xl hover:text-zinc-600 mx-2'>Github</a>
                </div>

            </ul>
        </div>
    )
}

export default Contact