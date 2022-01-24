import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

//<Close onClick={() => props.onMovieSelect()}>X</Close>

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    justify-content: center;
    border-bottom: 1px solid lightgray;
`;

const CoverImage = styled.img`
    object-fit: cover;
    height: 10%;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px;
`;

const MovieName = styled.span`
    font-size: 22px;
    font-weight: 600;
    color: black;
    margin: 15px 0;

    overflow: hidden;
    text-transform: capitalize;
    text-overflow: ellipsis;

    & span{
        opacity: 0.8;
    }
`;

const MovieInfo = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: black;
    overflow: hidden;
    margin: 4px 0;
    text-transform: capitalize;
    text-overflow: ellipsis;

    & span{
        opacity: 0.5;
    }
`;

const Close =  styled.span`
    font-size: 16px;
    font-weight: 600;
    color: black;
    background: lightgray;
    height: fit-content;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
`;

const api_key = "8ac3fcff";
const MovieInfoComponent = (props) =>{
    const [movieInfo, setMovieInfo] = useState();
    const {selectedMovie} = props;
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${api_key}`).
    then((response) => setMovieInfo(response.data));
}, [selectedMovie]);
    return (
        <Container>
            <CoverImage src={movieInfo?.Poster}/>
            <InfoColumn>
                <MovieName>
                    {movieInfo?.Type} : {movieInfo?.Title}
                </MovieName>
                <MovieInfo>
                    Idioma: <span>{movieInfo?.Language}</span>
                </MovieInfo>
                <MovieInfo>
                    Avaliação: <span>{movieInfo?.Rated}</span>
                </MovieInfo>
                <MovieInfo>
                    Atores: <span>{movieInfo?.Actors}</span>
                </MovieInfo>
            </InfoColumn>
            <Close onClick={() => props.onMovieSelect()}>X</Close> 
        </Container>
    );
}

export default MovieInfoComponent