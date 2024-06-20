import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.home_icon} alt="" />
            <p className='font-bold text-gray-400 hover:text-slate-50'>Accueil</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="" />
            <p className='font-bold  text-gray-400 hover:text-slate-50'>Rechercher</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 hover:scale-105 transition duration-50 cursor-pointer">
                <img className='w-8  text-gray-400 ' src={assets.stack_icon} alt="" />
                <p className='font-bold  text-gray-400 hover:text-slate-50'>Bibliothèque</p>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-5' src={assets.plus_icon} alt="" />
                <img className='w-5' src={assets.arrow_icon} alt="" />
            </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-bold'>Créez votre première playlist</h1>
          <p className='font-normal'>C'est simple, nous allons vous aider</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:scale-110 transition duration-100 font-bold'>Créer une playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1 className='font-bold'>Cherchons quelques podcasts auquels vous abonner</h1>
          <p className='font-normal'>Nous vous transmettrons des informations sur les nouveaux épisodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:scale-110 transition duration-100 font-bold'>Parcourir les podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
