import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => setReviews(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("rating", rating);
    formData.append("comment", comment);
    formData.append("image", file);

    await axios.post("http://localhost:5000/upload", formData);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center">Értékelések</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 mt-6 shadow-lg">
        <input type="text" placeholder="Név" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full mb-2"/>
        <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} className="border p-2 w-full mb-2"/>
        <textarea placeholder="Komment" value={comment} onChange={(e) => setComment(e.target.value)} className="border p-2 w-full mb-2"></textarea>
        <div {...getRootProps()} className="border-dashed border-2 p-6 text-center cursor-pointer mb-4">
          <input {...getInputProps()} />
          {file ? <p>{file.name}</p> : <p>Húzd ide a képet vagy kattints a feltöltéshez</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Feltöltés</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 shadow-lg">
            <img src={`http://localhost:5000${review.imageUrl}`} alt="Review" className="w-full h-40 object-cover mb-2"/>
            <h2 className="font-bold">{review.name}</h2>
            <p>Értékelés: {review.rating}/5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
