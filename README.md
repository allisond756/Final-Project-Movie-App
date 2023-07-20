MOV_API_URL: "https://api.themoviedb.org/3/movie/popular?api_key=e9152176f23675a3926b8ae82b5829dd"
API_IMG_URL: "https://api.themoviedb.org/3/movie/{movie_id}/images"
API_MOV_SEARCH: "https://api.themoviedb.org/3/search/movie?api_key=e9152176f23675a3926b8ae82b5829dd&query"


<div className="card text-center bg-emerald-300 p-3 m-2 rounded border-2 border-dotted border-emerald-950">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG_URL+poster_path} />
        <div className="card-body">
          <button type="button" className="btn bg-slate-600 border-red-600 border-2 m-1 p-1" onClick={handleShow}>View More</button>
          <Modal show={show} className='z-1 border border-red-600 flex flex-col'>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <button onClick={handleClose}>X</button>
              <img className="card-img-top" style={{width:'14rem'}} src={API_IMG_URL+poster_path} />
              <h1>{title}</h1>
              <h3>IMDb: {vote_average}</h3>
              <h3>Release Date: {release_date}</h3>
              <h4>Overview</h4>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}></Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>