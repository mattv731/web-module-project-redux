import React from 'react';

import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

import { removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
    const { favorites, displayFavorites, removeFavorite } = props;

    const handleRemove = (item) => {
        removeFavorite(item, item.id)
    }
    
    return (
    <div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={() => {handleRemove(movie.id)}}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    // console.log(state) // see what state you are getting
    return ({
        favorites: state.favorites.favorites,
        displayFavorites: state.favorites.displayFavorites
    })
}

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);