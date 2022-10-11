import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../store/actions/index.js";
import DogsShow from "../search/Search.jsx";
export default function dogsAll(){
    let dogsSelector = useSelector((state) => state.dogs1);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDogs());
    },[])
    console.log(dogsSelector)
    return <div>
        {dogsSelector.map((dogsSelector) => {
            return <DogsShow name= {dogsSelector.name} image = {dogsSelector.image.url} />
        })}
    </div>
}