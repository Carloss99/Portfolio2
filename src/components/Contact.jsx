
import { UilLinkedin, UilGithub} from '@iconscout/react-unicons'

const Contact = () => {
    return (
        <div class="sm:w-full" id="contact">
            <h1 class="my-20 mx-auto text-center sm:text-4xl text-2xl text-decoration-line: underline ">Contact</h1>

            <ul class='flex justify-between gap-20'>
                <div>
                    <UilLinkedin class='inline'/>
                    <a href="https://www.linkedin.com/in/carlosfigueroa99" class='sm:hover:text-2xl hover:text-xl mx-1'>LinkedIn</a>
                </div>

                <div>
                    <UilGithub class='inline'/>
                    <a href='https://github.com/Carloss99' class='sm:hover:text-2xl hover:text-xl mx-1'>Github</a>
                </div>

            </ul>
        </div>
    )
}

export default Contact