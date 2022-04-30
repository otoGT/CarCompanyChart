import React, {useState} from 'react';
import Under from './Components/Card with header';
import Button from './Components/Circular buttons';
import Overlay from './Components/Simple with icons and brand color';

function App() {

 return(
    <div className='flex'>
     <div>
     <Overlay/>
     </div>
       <div className='w-full h-full bg-slate-100 main'>
          <div className='w-full flex justify-between mt-8 ml-8'><h1>Tegeta Approved</h1><div><Button/></div></div>
          <div className='w-full flex justify-between mt-8 ml-8 font-bold'><h1>Acquisition</h1></div>
          <Under/> 
          <div className='ml-4 flex flex-row gap-24'>
             <p className='text-black-500'>New</p>
             <p className='text-black-500'>Auctions Won</p>
             <p className='text-black-500'>In Transit</p>
             <p className='text-black-500'>Delivered to Poti</p>
             <p className='text-black-500'>Customs Clearance</p>
             <p className='text-black-500'>Delivered To Hub</p>
             <p className='text-black-500'>Evaluation</p>
             <p className='text-black-500'>Recondition</p>
             <p className='text-black-500'>Ready For Sale</p>
          </div>
          <div className='ml-4 flex flex-row gap-1 mt-4'>
               <div className='bg-slate-200 rounded-md h-24'>
               <h1>Cadillac XT5 1234</h1>
               <h2>678-00-0</h2> 
               <h3>$30,700</h3>
               </div>   
               <div className='bg-slate-200 rounded-md h-36'>
               <h1>Cadillac XT5</h1>
               <h2>Cadillac XT5tyutyuy</h2> 
               <h3>7678</h3>
               <h4>5676577567567</h4>
               <h5>$30,700</h5>
               </div>   
               <div className='bg-slate-200 rounded-md h-20 ml-8'>
               <h1>Cadillac XT5</h1>
               <h2>$30,700</h2>
               </div> 
               <div className='bg-slate-200 rounded-md h-20 ml-14'>
               <h1>Cadillac XT5 123</h1>
               <h2>$30,700</h2>
               </div> 
               <div className='bg-slate-200 rounded-md ml-16'>
               <h1>Cadillac XT5 1234</h1>
               <h2>78-00-0</h2> 
               <h1>Cadillac XT5 1234</h1>
               <h2>78-00-0</h2> 
               <h1>Cadillac XT5 1234</h1>
               <h2>78-00-0</h2> 
               <h2>$30,700</h2>
               </div> 
               <div className='bg-slate-200 rounded-md h-24 ml-24'>
               <h1>Cadillac XT5 1234567</h1>
               <h2>XT5</h2> 
               <h3>$30,700</h3>
               </div>  
               <div className='bg-slate-200 rounded-md h-20 ml-10'>
               <h1>Cadillac XT5</h1>
               <h2>$30,700</h2>
               </div> 
               <div className='bg-slate-200 rounded-md h-20 ml-20'>
               <h1>Cadillac XT5 123</h1>
               <h2>$30,700</h2>
               </div>
               <div className='bg-slate-200 rounded-md h-20 ml-20'>
               <h1>Cadillac XT5 123</h1>
               <h2>$30,700</h2>
               </div>
          </div>
          <div className='ml-4 flex flex-row gap-1 -mt-4'>
               <div className='bg-slate-200 rounded-md h-20 -mt-20'>
               <h1>Cadillac XT5 1234</h1>
               <h2>678-00-0</h2> 
               <h3>$30,700</h3>
               </div>   
               <div className='bg-slate-200 rounded-md -mt-16 h-16'>
               <h1>Cadillac XT5</h1>
               <h2>$30,700</h2> 
               </div>   
               <div className='bg-slate-200 rounded-md -mt-16 ml-16 h-20'>
               <h1>Cadillac XT5 1234</h1>
               <h2>678-00-0</h2> 
               <h3>$30,700</h3>
               </div> 
               <div className='bg-slate-200 rounded-md -mt-16 h-16 ml-5'>
               <h1>Cadillac XT5</h1>
               <h2>$30,700</h2>
               </div>
          </div>
          <div className='ml-4 flex flex-row gap-1 mt-4'>
               <div className='text-transparent rounded-md h-24'>
               <h1>Cadillac XT5 1234</h1>
               <h2>678-00-0</h2> 
               <h3>$30,700</h3>
               </div>   
               <div className='bg-slate-200 rounded-md h-16'>
               <h1>Cadillac XT5</h1>
               <h2>$30,700</h2>
               </div>   
               <div className='text-transparent rounded-md h-20 ml-8'>
               <h1>Cadillac XT5</h1>
               <h2>$30,700</h2>
               </div> 
               <div className='bg-slate-200 rounded-md h-20 ml-24'>
               <h1>Cadillac XT5 123</h1>
               <h2>$30,700</h2>
               </div> 
               <div className='text-transparent rounded-md ml-16'>
               <h1>Cadillac XT5 1234</h1>
               <h2>78-00-0</h2> 
               <h1>Cadillac XT5 1234</h1>
               <h2>78-00-0</h2> 
               <h1>Cadillac XT5 1234</h1>
               <h2>78-00-0</h2> 
               <h2>$30,700</h2>
               </div> 
               <div className='bg-slate-200 rounded-md -mt-32 h-24 ml-24'>
               <h1>Cadillac XT5 1234567</h1>
               <h2>XT5</h2> 
               <h3>$30,700</h3>
               </div>  
               <div className='bg-slate-200 rounded-md -mt-32 h-32 ml-10'>
               <h1>Cadillac XT5</h1>
               <h2>Cadillac XT</h2>
               <h3>Cadillac XT</h3>
               <h4>$30,700</h4>
               </div> 
               <div className='text-transparent rounded-md h-20 ml-20'>
               <h1>Cadillac XT5 123</h1>
               <h2>$30,700</h2>
               </div>
               <div className='text-transparent rounded-md h-20 ml-20'>
               <h1>Cadillac XT5 123</h1>
               <h2>$30,700</h2>
               </div>
          </div>
         </div>
         </div>
 )
}

export default App;
