import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true},
    { field: 'title', headerName: "Movie Title", flex: 1},
    { field: 'director', headerName: "Director", flex: 1},
    { field: 'rating', headerName: "Movie Rating", flex: 1},
    { field: 'run_time', headerName: "Movie Run Time", flex: 1}
]


function DataTable() {



    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 font-semibold text-emerald-950 bg-emerald-300 rounded m-3 hover:bg-emerald-950 hover:text-white border-2 border-emerald-950 hover:border-emerald-300"
                    onClick={() => handleOpen()}
                >
                    Add New Movie
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-emerald-300 font-semibold text-emerald-950 rounded m-3 hover:bg-emerald-950 hover:text-white border-2 border-emerald-950 hover:border-emerald-300" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-emerald-300 font-semibold text-emerald-950 rounded m-3 hover:bg-emerald-950 hover:text-white border-2 border-emerald-950 hover:border-emerald-300" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-emerald-300 border-2 border-emerald-950 font-semibold text-emerald-950 my-2 rounded">My Watchlist</h2>
            <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable