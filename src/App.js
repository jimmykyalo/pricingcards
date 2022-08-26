
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa'
function App() {
  
  const checkHandler = (e)=>{
      console.log(e.target.checked)
      if(e.target.checked){
        document.getElementById('root').classList.add('dark')
      }else{
        document.getElementById('root').classList.remove('dark')
      }
  }
  return (
    // Global container
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-800">
      <div className="my-6">
        <div className="relative self-start justify-self-end inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle"  onChange={checkHandler} id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
          <label htmlFor="toggle" className="self-start justify-self-end toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          
        </div>
      <label htmlFor="toggle" className="text-sm  text-black dark:text-white">Click to Toggle Dark Mode</label>
      </div>
      <div className="flex flex-col md:flex-row my-6 space-y-6
      md:space-y-0 md:space-x-6 md:my-0">
        {/* Card 1 */}
        <div className="group rounded-xl  bg-slate-200 dark:bg-slate-700 dark:text-white">
          {/* upper container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-100 dark:bg-slate-800">
            <div className="text-center uppercase">Basic</div>
            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/Month</h3>
            <div className="flex justify-center">
              <a href="#" className="inline-block px-10 py-3 text-center my-6 border border-violet-600 rounded-lg hover:bg-violet-800  hover:border-violet-800 hover:text-white  duration-200">Purchase</a>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700"></div>
           {/* lower container */}
           <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-100 dark:bg-slate-800">
            <div className="text-sm flex flex-col space-y-2">
              <div className="flex  items-center justify-center">
                <FaCheck />
                <span className='ml-1'>100 GB of Storage</span>
              </div>
              <div className="flex items-center justify-center">
                <FaCheck />
                <span className='ml-1'>Option to add members</span>
              </div>
              <div className="flex items-center justify-center">
                <FaCheck />
                <span className='ml-1'>Extra member benefits</span>
              </div>
            </div>
           </div>
        </div>

        {/* Card 2 */}
        <div className="group rounded-xl  bg-violet-600 dark:text-white">
          {/* upper container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-100 dark:bg-slate-800">
            <div className="text-center uppercase">standard</div>
            <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 className="mt-2 text-center">$3.99/Month</h3>
            <div className="flex justify-center">
              <a href="#" className="inline-block px-10 py-3 text-center my-6 border bg-violet-600 border-violet-800 rounded-lg hover:bg-violet-800  hover:border-violet-800  text-white duration-200">Purchase</a>
            </div>
          </div>
          <div className="mx-3 border-t border-slate-200 dark:border-slate-700"></div>
           {/* lower container */}
           <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-100 dark:bg-slate-800">
            <div className="dark:text-white text-sm flex flex-col space-y-2">
              <div className="flex  items-center justify-center">
                <FaCheck />
                <span className='ml-1'>200 GB of Storage</span>
              </div>
              <div className="flex items-center justify-center">
                <FaCheck />
                <span className='ml-1'>Option to add members</span>
              </div>
              <div className="flex items-center justify-center">
                <FaCheck />
                <span className='ml-1'>Extra member benefits</span>
              </div>
            </div>
           </div>
        </div>

        {/* Card 3 */}
        <div className="group rounded-xl  bg-slate-200 dark:bg-slate-700 dark:text-white">
          {/* upper container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-100 dark:bg-slate-800">
            <div className="text-center uppercase">premium</div>
            <h2 className="mt-10 font-serif text-5xl text-center">2 TB</h2>
            <h3 className="mt-2 text-center">$3.99/Month</h3>
            <div className="flex justify-center">
              <a href="#" className="inline-block px-10 py-3 text-center my-6 border border-violet-600 rounded-lg hover:bg-violet-800  hover:border-violet-800 hover:text-white duration-200">Purchase</a>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700"></div>
           {/* lower container */}
           <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-100 dark:bg-slate-800">
            <div className="dark:text-white text-sm flex flex-col space-y-2">
              <div className="flex  items-center justify-center">
                <FaCheck />
                <span className='ml-1'>2 TB of Storage</span>
              </div>
              <div className="flex items-center justify-center">
                <FaCheck />
                <span className='ml-1'>Option to add members</span>
              </div>
              <div className="flex items-center justify-center">
                <FaCheck />
                <span className='ml-1'>Extra member benefits</span>
              </div>
            </div>
           </div>
        </div>

      </div>
    </div>
  );
}

export default App;
