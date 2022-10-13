import Wrapper from "../Wrapper/Wrapper1.jsx"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDogs } from "../../store/actions/index.js";
const ITEMS_PER_PAGE = 8;
 export default function Logicalwrapper() {
  let apiOriginal = useSelector((state) => state.dogs1)
  let dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAllDogs());
  },[]);
  const [datosFromApi, SetdatosFromApi] = useState(apiOriginal);
  const [items, setItems] = useState([...apiOriginal].splice(0,ITEMS_PER_PAGE));
  console.log(items)
  const [currentPage, setCurrentPage] = useState(0)
  function NextHandler()  {
    const totalElementos = datosFromApi.length;
    const nextPage = currentPage + 1;
    const FirsIndex = nextPage * ITEMS_PER_PAGE;
    if(FirsIndex === totalElementos) return;
    setItems([...datosFromApi].splice(FirsIndex,ITEMS_PER_PAGE))
    setCurrentPage(nextPage);
  } 
  function PrevHandler(){
      const prevPage = currentPage -1
      if(prevPage < 0)return
      const FirsIndex = prevPage * ITEMS_PER_PAGE;
      setItems([...datosFromApi].splice(FirsIndex,ITEMS_PER_PAGE))
    setCurrentPage(prevPage);
    }
  return <div>
<Wrapper currentPage={currentPage} PrevHandler={PrevHandler} NextHandler={NextHandler} items ={items}></Wrapper>
</div>
 }

 