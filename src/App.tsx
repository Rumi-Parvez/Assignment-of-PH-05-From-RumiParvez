import { Suspense } from 'react';
import './App.css'
import Technologies from './components/technologies';
import type { IDataType } from './type';
import { Nav } from './components/Header/nav';
import { Hero } from './components/Hero Section/hero';
import { Footer } from './components/Footer Section/footer';
import { Loading } from './loading';


const getDataPermisions = async () : Promise<IDataType[]>=> {
  const res = await fetch('../public/technologiesData.json')
  const data = await res.json();
  return data;
}


function App() {
  return (
    <>
    <div >
      
    
    <div>
      <Suspense fallback={<Loading></Loading>} >
        <div className='w-full md:container md:m-auto '>
          <Nav></Nav>
        <Hero></Hero>

        <Technologies getDataPermisions={getDataPermisions()}></Technologies>
        <Footer></Footer>
        </div>
      </Suspense>

      
    </div>
    </div>
    
    </>
  )
}

export default App
