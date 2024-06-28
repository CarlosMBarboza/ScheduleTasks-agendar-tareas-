import { CrossIcon } from "./component/icons/CrossIcon"
import { MoonIcon } from "./component/icons/MoonIcon"


function App() {


  return (
    <>
      <div className="bg-[url('./images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300">
        <div className="container mx-auto px-4 pt-8">

          <header>
            <div className="flex justify-between mb-4">
              <h1 className="uppercase font-semibold tracking-tight text-white text-3xl">Schedule <span className="lowercase"> tasks</span></h1>
              <button>
                <MoonIcon className=" fill-red-400" />
              </button>
            </div>
            <form className="bg-white flex gap-4 items-center rounded-md overflow-hidden  p-4">
              <span className="inline-block h-5 w-5 rounded-full border-2"></span>
              <input className="w-full text-gray-400 outline-none" type="text" placeholder="New tasks " />
            </form>
          </header>

          <main className="mt-8 bg-white rounded-md">
            <article className="flex gap-4 border-b   p-4 items-center">
              <button className="inline-block h-5 w-5 rounded-full flex-none border-2"></button>
              <p className="text-gray-600 grow">Complete online</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-4 border-b   p-4 items-center">
              <button className="inline-block h-5 w-5 rounded-full flex-none border-2"></button>
              <p className="text-gray-600 grow">Complete online</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-4 border-b  p-4 items-center">
              <button className="inline-block h-5 w-5 rounded-full flex-none border-2"></button>
              <p className="text-gray-600 grow">Complete online</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <section className=" flex justify-between   p-4 items-center">
              <span className="text-gray-400">5 item left</span>
              <button className="text-gray-400">Clear Completed</button>
            </section>
          </main>
          <section className="bg-white mt-8 flex justify-center p-4 rounded-md gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </section>
          <p className="text-center">Drag and drop to reorder list</p>
        </div>
      </div>
    </>
  )
}

export default App
