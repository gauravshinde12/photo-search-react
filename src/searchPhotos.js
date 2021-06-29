import React, { useEffect, useState } from "react";

const accessKey = 'W1nkkIi0gXogLp5YxTWjNW7Gy9L894GNeeckUt6im3I';

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    // useEffect(() => {
    //     if(!query) return;
    //     console.log('query is...', query);

    // }, [query])
    const searchPhotos = (e) => {
        e.preventDefault();
        fetch(`https://api.unsplash.com/search/photos?query=${query}&perPage=20&orientation=portrait&page=1&client_id=${accessKey}`).then(data => data.json())
            .then((json) => {
                console.log('data is....', json);
                setPics(json.results);
            });


        // console.log("Submitting the Form")
    };
    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                <label className="label" htmlFor="query">
                    {" "}
          📷
        </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Try "dog" or "apple"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                    Search
        </button>
            </form>
            <div className="card-list">
                {pics.map((pic) => <div className="card" key={pic.id}>
                    <img
                        className="card--image"
                        alt={pic.alt_description}
                        src={pic.urls.full}
                        width="50%"
                        height="50%"
                    ></img>
                </div>)}
            </div>

        </>
    );
}