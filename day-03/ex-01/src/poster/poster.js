import React from 'react'
import $ from 'jquery'
	
class Poster extends React.Component {

	constructor() {
		super();
		this.state = {
			total: 0,
			movies: [],
			querySearch: "",
			error: false
		};
		this.handleFilterMovie = this.handleFilterMovie.bind(this);
	}

	getDataFromServer = (url) => {
		$.ajax({
			url,
			beforeSend: () => {
				if (this.isLoading) {
					return false;
				}
				this.loading = true;
			},
			success: (response) => {
				let data = JSON.parse(response);
				this.setState({
					total: data.total,
					movies: data.movies,
				})
			},
			error: (xhr, status, error) => {
				this.setState({
					error: true
				})
			},
      complete: () => {
        this.loading = false;
      }
		});
	}

	handleDeleteFilm = (id) => {
		let movies = this.state.movies;
		let total = this.state.total;
		for(var i=0; i < movies.length; i++){
        if(movies[i].id === id){
            movies.splice(i, 1);
            total -= 1;
            break;
        }
    }
    this.setState({
    	movies,
    	total
    })
	}

	handleFilterMovie = (e) => {
    let querySearch = e.target.value.trim().toLowerCase();
    this.setState({
    	querySearch
    })
	}

	componentWillMount() {
		let url = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json"
		this.getDataFromServer(url);
	}

	renderListMovies = (movies) => {
		return movies.map((movie, key) => {
			return (
				<li className="list-group-item" key={key}>
					<div className="media">
						<div className="media-left">
							<a href="#">
                <img className="media-object" src={movie.posters.thumbnail} alt={movie.title}/>
              </a>
						</div>
						<div className="media-body">
							<span className="icon-close" onClick={this.handleDeleteFilm.bind(this, movie.id)}><i className="fa fa-times"></i></span>
              <h4 className="media-heading">{movie.title}</h4>
              <span>
              	<p>Time: {movie.runtime} </p>
             		<p>Release dates: {movie.release_dates.theater}</p>             		
              </span>
          	</div>
					</div>
				</li>
			)
		});
	}

	render() {
		let movies = this.state.movies;
		let total = this.state.total;
		let querySearch = this.state.querySearch;
		if (querySearch.length > 0) {
     	movies = movies.filter(function(movie) {
      	 return movie.title.toLowerCase().match(querySearch);
    	});
    	total = movies.length;
    }
		return(
			<div className="container">
				<div className="row">				
					<div className="col-md-6 col-md-offset-3">
						<div className="form-form-group">
							<label htmlFor="search">Search</label>
							<input type="text" className="form-control" name="querySearch"  onChange={this.handleFilterMovie.bind(this)} />
						</div>
						<h5><label htmlFor="total">Total:</label> <span className="badge">{total}</span></h5>
						<ul className="list-group">
							{this.renderListMovies( movies)}
						</ul>
					</div>
				</div>
			</div>
		)
	};
}
export default Poster