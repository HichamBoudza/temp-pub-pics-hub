import React, { useState } from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { searchValue, setSearchValue, fullUrl, setFullUrl } =
    useGlobalContext();
  console.log(searchValue);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchValue(event.target.elements.search.value);
    setFullUrl(
      `https://api.unsplash.com/search/photos?client_id=JIEO2iySQTNxepeu3EZ1iNIJghU_dtWzJWBO1ttyAt0&query=${searchValue}`
    );
  };
  return (
    <section>
      <h1 className="title">PubPicsHub</h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="cat"
          className="form-input"
        />
        <button className="btn"> submit</button>
      </form>
    </section>
  );
};

export default SearchForm;
