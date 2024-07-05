const Projects = () => {
    return (
        
        <div class=" mt-20 sm:w-3/4 w-full h-3/4 mx-auto " id="projects">
            <h1 class="my-10 text-center text-3xl text-decoration-line: underline ">Projects</h1>
            <div class="flex justify-evenly  h-40 mt-32">
                <div class="border-2 border-sky-500 w-1/4 rounded-3xl sm:hover:h-44 hover:h-44 sm:hover:w-48 hover:w-36">
                <a href="https://regal-tanuki-9c1a67.netlify.app"><h3 class="text-center mt-4 sm:text-xl text-md  hover:text-2xl">Star wars Trivia</h3></a></div>

                <div class="border-2 border-sky-500 w-1/4 rounded-3xl sm:hover:h-44 hover:h-44 sm:hover:w-48 hover:w-36">
                <a href="https://creative-strudel-0cfd0a.netlify.app" ><h3 class="text-center mt-4 sm:text-xl text-md  hover:text-2xl">Hangman</h3></a>
                </div>

                <div class="border-2 border-sky-500 w-1/4 rounded-3xl sm:hover:h-44 hover:h-44 sm:hover:w-48 hover:w-36">
                <a href="https://wonderful-wisp-ad741f.netlify.app/"><h3 class="text-center mt-4 sm:text-xl text-md hover:text-2xl">Daytracker</h3></a>
                </div>
            </div>
        </div>
    )
}

export default Projects