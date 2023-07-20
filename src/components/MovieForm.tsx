import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle, chooseDirector, chooseRating, chooseRunTime } from "../redux/slices/RootSlice"

interface MovieFormProps {
  id?: string[]
  onClose: () => void;
}

const MovieForm = ( props:MovieFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseDirector(data.director));
      dispatch(chooseRating(data.rating));
      dispatch(chooseRunTime(data.run_time));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000)
      event.target.reset();

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Movie Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="director">Director</label>
          <Input {...register('director')} name='director' placeholder="Director" />
        </div>
        <div>
          <label htmlFor="rating">Movie Rating</label>
          <Input {...register('rating')} name='rating' placeholder="Rating" />
        </div>
        <div>
          <label htmlFor="run_time">Run Time</label>
          <Input {...register('run_time')} name='run_time' placeholder="Run Time" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-center w-full ms-auto bg-emerald-300 m-2 p-2 rounded hover:bg-emerald-950 text-emerald-950 border border-emerald-950 hover:text-emerald-300 hover:border-emerald-300"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default MovieForm