import Background from '../assets/film.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-4 bg-teal-200 bg-opacity-40 text-emerald-950 font-semibold rounded'>Welcome to MovieWatch</h3>
        </div>
    </div>
  )
}

export default Home