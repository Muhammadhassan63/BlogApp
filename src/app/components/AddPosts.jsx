
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'

const AddPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router=useRouter()

    const handlePost = async () => {
        const newPost = {
            title: title,
            content: content,
        };

        try {
            const response = await fetch("http://localhost:3000/api/posts/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });

            if (response.ok) {
                alert("Post added successfully!");

                setTitle("");
                setContent("");
            } else {
                alert("Failed to add post.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the post.");
        }
        router.refresh()

    };

    return (
        <div className="flex flex-col items-center gap-2 mt-12">
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className=" p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    className=" p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <button
                    onClick={handlePost}
                    className=" p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Post
                </button>
            </div>
        </div>
    );

};

export default AddPosts;
