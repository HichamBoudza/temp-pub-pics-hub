import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./Context";
const url =
  "https://api.unsplash.com/search/photos?client_id=JIEO2iySQTNxepeu3EZ1iNIJghU_dtWzJWBO1ttyAt0&query=cats";
console.log(import.meta.env.VITE_API_KEY);
const Gallery = () => {
  const { searchValue } = useGlobalContext();
  // const searchQuery = `${searchValue}`;
  // const fullUrl = `${url}&query=${searchValue}`;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchValue}`);
      return result.data;
    },
  });
  // console.log("full url is ");
  if (isLoading) {
    return <p> Loading</p>;
  }

  if (isError) {
    return <p>{isError.message}</p>;
  }
  // console.log(data.results[0].urls.regular);
  return (
    <section className="image-container">
      {data.results.map((img) => {
        // console.log(img);
        return (
          <img
            key={img.id}
            src={img.urls.regular}
            alt={img.slug}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
