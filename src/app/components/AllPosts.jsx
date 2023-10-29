import DeletePost from "./DeletePost"
const AllPosts = (props) => {
  return (
    <div className='p-4 bg-gray-100 m-8'>
        
        <h1 className='text-2xl pb-2'>{props.title}</h1>
        <p className='text-lg'>{props.content}</p>
        <DeletePost id={props.id}/>
      
    </div>
  )
}

export default AllPosts
