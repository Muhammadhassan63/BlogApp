
const getpost= async function(id){
  const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getpost(params.id); 

  return {
    title: post.title, 
    description: post.body, 
  };
}

export default async function  DynamicPosts   ({params}) {
    const data = await getpost(params.id)
  return (
    <div>
        <h1 className="text-center font-bold text-4xl m-5">Description</h1>
        <h1 className="p-10">
            {data.body}
        </h1>
      
    </div>
  )
}
