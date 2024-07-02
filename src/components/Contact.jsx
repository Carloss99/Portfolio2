import {Link} from 'react-router-dom'

const Contact = () => {
    return (
        <div class="" id="contact">
            <h1 class="my-20 text-center text-3xl text-decoration-line: underline ">Contact</h1>

            <ul class='flex justify-between w-1/2 sm:w-1/4 m-auto text-lg'>

                <a href="https://www.linkedin.com/in/carlosfigueroa99" class='hover:text-2xl'>LinkedIn</a>

                <a href='https://github.com/Carloss99' class='hover:text-2xl'>Github</a>
                {/* <Link to='https://www.linkedin.com/in/carlosfigueroa99'><li class='hover:text-2xl'>LinkedIn</li></Link>
                <Link to='https://github.com/Carloss99'><li class='hover:text-2xl'>Github</li></Link> */}

            </ul>
        </div>
    )
}

export default Contact