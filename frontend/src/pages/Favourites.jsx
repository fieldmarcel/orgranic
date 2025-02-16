import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavourites, removeFromFavourites, removeAllFavourites } from "../../redux/slices/favourites";

const Favourites = () => {
    const [data, setData] = useState([]); // Initialize state with an empty array
    const [error, setError] = useState(null); // State for handling errors

    useEffect(() => {
        axios
            .get("http://localhost:8081/api/v1/recipes/favourites")
            .then((response) => {
                setData(response.data.recipe || []); // Ensure data is an array
            })
            .catch((error) => {
                console.error("Error fetching favourites:", error);
                setError("Failed to load data"); // Store error message
            });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Favourite Recipes</h1>

            {error && <p className="text-red-500">{error}</p>}

            {data.length === 0 && !error ? (
                <p>No favourites yet.</p>
            ) : (
                data.map((item) => <p key={item.id}>{item.name}</p>)
            )}
        </div>
    );
};

export default Favourites;
