import MovieForm from './MovieForm';

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-gray-300 bg-opacity-25'
        
        >
            <div
                className='max-w-600px w-2/5 fixed flex z-1 bg-emerald-100 shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-emerald-300 border border-emerald-950 p-2 rounded hover:bg-emerald-950 hover:text-emerald-300 text-emerald-950 hover:border-emerald-300"
                        onClick={props.onClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <MovieForm id={ props.id } onClose={props.onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Modal