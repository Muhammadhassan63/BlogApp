import AddPosts from "./AddPosts"
import AllPosts from "./AllPosts"
const  allPosts=async()=>{
    const posts= await fetch("http://localhost:3000/api/posts/", { cache: 'no-store' })
    return posts.json()
}

const Posts = async() => {

    const allposts=await allPosts()
  return (
    <div>
      <AddPosts/>

{
  allposts.map((items) => {
    return (
      <AllPosts key={items.id} title={items.title} content={items.content} id={items.id}/>
      
    );
  })
}

    </div>
  )
}

export default Posts
