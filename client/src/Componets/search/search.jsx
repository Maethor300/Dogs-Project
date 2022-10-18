import React from "react";
import "./search.css"
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { searchDogs } from "../../store/actions/index.js";
export default function Searchdogs() {
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();
    function onSubmit (e){
        e.preventDefault();
        dispatch(searchDogs(search))
    }
    function onInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onInputChange} value = {search}/>
            <input type="submit" value={'Buscar'} />
        </form>
    )
}