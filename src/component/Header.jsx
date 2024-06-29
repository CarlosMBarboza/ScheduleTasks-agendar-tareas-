import {IconMoon} from './icons/IconMoon';

export const Header = () => {
  return (
    <header>
            <div className="flex justify-between mb-4">
              <h1 className="uppercase font-semibold tracking-tight text-white text-3xl">Schedule <span className="lowercase"> tasks</span></h1>
              <button>
                <IconMoon className=" fill-red-400" />
              </button>
            </div>
           
          </header>

  )
}
