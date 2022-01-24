import styled from 'styled-components';
import axios, { Axios } from 'axios';
import {SearchInput, SearchBox, AppName, Header} from './components/HeaderComponents';
import MovieComponent from './components/MovieComponents';
import {useState} from 'react';
import MovieInfoComponent from './components/MovieInfoComponents';

const api_key = "8ac3fcff";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;



const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
`;



function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();



  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${api_key}`
      );
      updateMovieList(response.data.Search)
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(()=> fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  //const link_req = "http://www.omdbapi.com/?i=tt3896198&apikey=8ac3fcff";
  return (
    <Container>
      <Header>
        <AppName>Film Lovers</AppName>
        <SearchBox>
          <SearchInput placeholder='Pesquisar filme' value={searchQuery} onChange={onTextChange}/>
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent
       selectedMovie = {selectedMovie}
       onMovieSelect = {onMovieSelect}
       />
      }
      <MovieListContainer>
        {
          movieList?.length? movieList.map((movie, index) => ( <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect}/>))
           : "Nenhum filme procurado"
        }
      </MovieListContainer>
    </Container>
  );
}

export default App;
