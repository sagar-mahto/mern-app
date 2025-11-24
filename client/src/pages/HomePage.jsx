import React from 'react'
import pimage from '../images/porn.jpeg'
import mimage from '../images/movie.jpeg'
import aimage from '../images/anime.jpeg'

const HomePage = () => {
   
  return (
    <div className="w-full min-h-screen p-10 flex flex-col items-center gap-8 bg-gradient-to-br from-blue-300 to-blue-500">

  {/* Images Container */}
  <div className="images flex flex-wrap justify-center gap-5 w-full">

    {/* Card 1 */}
    <div className="w-[380px] max-w-full h-[500px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
      <a href="https://www.crunchyroll.com/?srsltid=AfmBOordv9pBH6_mBx2-MYy_0eG71K4BLIudKS-pTAdlxjhdWXy97smr" target="_blank">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-500 hover:scale-110"
          src={aimage}
          alt="Anime"
        />
      </a>
    </div>

    {/* Card 2 */}
    <div className="w-[380px] max-w-full h-[500px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
      <a href="https://protonmovies.online/" target="_blank">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-500 hover:scale-110"
          src={mimage}
          alt="Movies"
        />
      </a>
    </div>

    {/* Card 3 */}
    <div className="w-[380px] max-w-full h-[500px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
      <a href="https://www.rexporn.sex/" target="_blank">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-500 hover:scale-110"
          src={pimage}
          alt="Photos"
        />
      </a>
    </div>

  </div>

  {/* Logout Button */}
  <a href="/login">
    <p className="logout-btn bg-blue-600 hover:bg-blue-700 rounded-md opacity-80 text-xl py-2 px-6 text-white font-bold shadow-md hover:shadow-xl transition">
      Logout
    </p>
  </a>

</div>

  )
}

export default HomePage
