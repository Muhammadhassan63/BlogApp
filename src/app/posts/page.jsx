const getdata = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
};
import Link from "next/link";
export const metadata={
  title: 'posts',
  description: 'All posts'
}
export default async function Posts() {
  const data = await getdata();
  return (
    <div className="">
      <h1 className="text-center text-4xl "> All BLOG POSTS</h1>
      <h3 className="text-xl p-4">Click on any posts to Read</h3>
      {data.map((items) => (
        <li className="list-none p-2">
          {" "}
          <Link href={`/posts/${items.id}`} key={items.id}>
            <h1 className="bg-gray-100 p-4 "> {items.title}</h1>
          </Link>
          
        </li>
      ))}
    </div>
  );
}
