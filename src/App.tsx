import { Suspense } from 'react';
import './App.css'
import Technologies from './components/technologies';
import type { IDataType } from './type';
import { Nav } from './components/Header/nav';
import { Hero } from './components/Hero Section/hero';
import { Footer } from './components/Footer Section/footer';


const getDataPermisions = async () : Promise<IDataType[]>=> {
  const res = await fetch('../public/technologiesData.json')
  const data = await res.json();
  return data;
}


function App() {
  return (
    <>
    <div className='container m-auto '>
      <Nav></Nav>
    <Hero></Hero>
    
    <div>
      <Suspense fallback={<h1>Loading......</h1>} >

      <Technologies getDataPermisions={getDataPermisions()}></Technologies>

      </Suspense>

      <Footer></Footer>
    </div>
    </div>
    
    </>
  )
}

export default App
