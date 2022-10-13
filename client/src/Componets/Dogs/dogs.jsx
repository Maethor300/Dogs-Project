
// export default function DogsAll(){
//     let dogsSelector = useSelector((state) => state.dogs1);
//     let dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getAllDogs());
//     }, [])
//       return <div>
//         {dogsSelector.map((dogsSelector)=>{
//            return <Dogsall name ={dogsSelector.name} image = {dogsSelector.image.url}/>
//         })}
//      </div>
// }