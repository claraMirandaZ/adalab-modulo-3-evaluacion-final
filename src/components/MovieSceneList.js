import '../styles/layout/MovieSceneList.scss';
import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  if (props.MovieSceneList.length === 0) {
    return (
      <p className='movie__notFound'>
        Search term {props.filterMovie} brings no results! Please, try again
      </p>
    );
  } else {
    const movieElements = props.MovieSceneList.map((movieScene, index) => {
      return (
        <li className='movie__listItem' key={index}>
          <MovieSceneItem MovieSceneItem={movieScene} />
        </li>
      );
    });

    return (
      <section className='movie__container'>
        <ul className='movie__list'>{movieElements}</ul>
      </section>
    );
  }
}

export default MovieSceneList;
