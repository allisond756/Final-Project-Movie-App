import { Modal } from 'react-bootstrap'
import { useState } from 'react';

const API_IMG_URL = "https://image.tmdb.org/t/p/w500/"

const MovieBox = ({title='', poster_path='', vote_average='', release_date='', overview=''}) => {

  const [ show, setShow ] = useState(false);

  const handleShow = () =>setShow(true)
  const handleClose = () =>setShow(false)

  return (
    <div className="card text-center bg-emerald-300 p-3 m-2 rounded border-2 border-dotted border-emerald-950">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG_URL+poster_path} />
        <div className="card-body">
          <button type="button" className="btn bg-emerald-950 text-emerald-300 border-emerald-200 border-2 m-1 p-1.5 hover:bg-white" onClick={handleShow}>View More</button>
          <Modal show={show} className='movie_modal z-1 flex flex-col'>
            <Modal.Header className='bg-emerald-200 text-emerald-950'>
              <Modal.Title>{title}</Modal.Title>
              <button onClick={handleClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </Modal.Header>
            <Modal.Body className='bg-emerald-200 text-emerald-950'>
              <img className="card-img-top" style={{width:'14rem'}} src={API_IMG_URL+poster_path} />
              <h3>IMDb: {vote_average}</h3>
              <h3>Release Date: {release_date}</h3>
              <p>{overview}</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>

    // <div className="card text-center bg-emerald-300 p-3 m-2 rounded border-2 border-dotted border-emerald-950">
    //   <div className="card-body">
    //     <img className="card-img-top" src={API_IMG_URL+poster_path} />
    //     <div className="card-body">
    //     <button type="button" className="btn bg-emerald-950 text-emerald-300 border-emerald-200 hover:bg-white border-2 m-1 p-1" data-bs-toggle="modal" data-bs-target="#modal">View More</button>
          
    //       <div className="modal" id="modal" >
    //         <div className="modal-dialog">
    //           <div className="modal-content bg-emerald-200">
    //             <div className="modal-header">
    //               <h1 className='text-2xl'>{title}</h1>
    //               <button type="button" className="btn-close text-xl" data-bs-dismiss="modal" aria-label="Close">
    //                 <i className="fa-solid fa-xmark"></i>
    //               </button>
    //             </div>
    //             <div className="modal-body">
    //               <img className="card-img-top" src={API_IMG_URL+poster_path} />
    //               <h3>IMDb: {vote_average}</h3>
    //               <h3>Release Date: {release_date}</h3>
    //               <p>{overview}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MovieBox