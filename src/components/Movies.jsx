import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";

class Movies extends Component {
  // NB:Update the state of the component after deleting the movie by using setState() function.
  state = {
    movies: getMovies(),
    pageSize: 10
  };

  // Get all the movies in array except the one we've deleted
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  // handleDelete =( movie )=>{
  //     console.log(movie);
  // }
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePagination = page => {
    console.log(page);
  };
  render() {
    // Refactoring
    const { length: count } = this.state.movies;
    // Display message
    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <React.Fragment>
        <p>Showing {count} Movies in database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                {/* Call to handleDelete() function, Original was this.handleDelete */}
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          // const { length: count } = this.state.movies;
          itemCount={count}
          pageSize={this.state.pageSize}
          onPageClick={this.handlePagination}
        />
      </React.Fragment>
    );
  }
}
export default Movies;
