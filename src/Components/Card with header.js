import InputElement from "./Simple native";
import Search from "./With actions";

/* This example requires Tailwind CSS v2.0+ */
export default function Under() {
  return (
    <div className=" overflow-hidden shadow rounded-lg divide-y divide-gray-200 w-full  photo  ">
      <div>
          <h1 className="font-bold ml-12 mt-8">Vehicles in Acquisition</h1>
        </div>
      <div className="px-4 py-5 sm:px-6 border-2 border-gray-100 rounded-md">
      <Search/>
      <div className="flex justify-between mt-3">
       <InputElement name="Status"/>
       <InputElement name="Resent"/>
       <InputElement name="Price"/>
       <InputElement name="Start Date"/>
       <InputElement name="End Date"/>
       <div className="flex mt-2">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-5  text-black-500 rounded-full bg-blue-500 rounded-xl" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>
        </div>
       </div> 
      </div>
      <div>
      <div>  
        </div>
      </div>
    </div>
  )
}
