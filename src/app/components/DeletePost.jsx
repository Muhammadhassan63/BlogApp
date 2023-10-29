"use client";
import { useRouter } from "next/navigation";

const DeletePost = (props) => {
  const router = useRouter();
  console.log(props.id)
  const handleDeletePost = async () => {
    const id = props.id;
    console.log(id)
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Deleted successfully!");
      } else {
        alert("Failed to delete post.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the post.");
    }
    router.refresh();
  };
  return (
    <div>
      <button className="text-red-500" onClick={handleDeletePost}>
        Delete
      </button>
    </div>
  );
};

export default DeletePost;
