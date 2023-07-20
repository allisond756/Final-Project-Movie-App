import DataTable from '../components/DataTable'
import Background from '../assets/dashfilm.jpg'


function Dashboard() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-col justify-center bg-cover bg-fixed pb-96'
      >
      <div className=' bg-yellow-50 bg-opacity-50'>
        <DataTable />
      </div>
    </div>
  )
}

export default Dashboard