
import { UilLinkedin, UilGithub} from '@iconscout/react-unicons'
//contact component
const Contact = () => {
    return (
        //Container div
        <div className="sm:w-3/4 mx-auto p-10 bg-zinc-800 rounded-3xl " id="contact">
            {/* header */}
            <h1 className=" mx-auto mb-10 text-center sm:text-4xl text-2xl text-decoration-line: underline ">Contact</h1>

            {/* list to hold contact links */}
            <ul className='flex justify-around '>

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