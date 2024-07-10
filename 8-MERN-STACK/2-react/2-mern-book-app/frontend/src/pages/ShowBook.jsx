import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/books/${id}`).then((response) => {
      setBook(response.data);
      setLoading(false);
    });
  }, []);

  console.log(book);
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.publishYear}</p>
      <BackButton destination="/" />
    </div>
  );
};

export default ShowBook;
