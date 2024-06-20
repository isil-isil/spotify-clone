import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContex } from '../context/PlayerContex'

const Player = () => {

    const {track,seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContex);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4' >
        <img className='w-12' src={track.image} alt="image chanson en cours" />
        <div>
            <p className='font-bold cursor-pointer'>{track.name}</p>
            <p className='text-slate-400 cursor-pointer'>{track.desc.slice(0,14)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className="flex gap-4">
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="icon" />
            <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="icon" />
            {playStatus
            ?<img onClick={pause} className='w-5 cursor-pointer hover:scale-125 transition duration-100' src={assets.pause_icon} alt="icon" />
            :<img onClick={play} className='w-5 cursor-pointer hover:scale-125 transition duration-100' src={assets.play_icon} alt="icon" />
            }
            <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="icon" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="icon" />
        </div>
        <div className="flex items-center gap-5">
            <p className='text-slate-400'>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[700px] bg-neutral-600 rounded-full cursor-pointer'>
                <hr ref={seekBar} className='h-1 border-none w-0 bg-neutral-50 rounded-full'/>
            </div>
            <p className='text-slate-400'>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt="icon play" />
        <img className='w-4' src={assets.mic_icon} alt="icon play" />
        <img className='w-4' src={assets.queue_icon} alt="icon play" />
        <img className='w-4' src={assets.speaker_icon} alt="icon play" />
        <img className='w-4' src={assets.volume_icon} alt="icon play" />
        <div className='w-20 bg-slate-50 h-1 rounded'>

        </div>
        <img className='w-4' src={assets.mini_player_icon} alt="icon play" />
        <img className='w-4' src={assets.zoom_icon} alt="icon play" />
      </div>
    </div>
  )
}

export default Player
