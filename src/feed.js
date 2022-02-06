import react,{useState,useEffect} from "react"
import Coment from "./coment"
import Pagination from "./pagination"
function Feed (){
    let [feeds,setFeeds] = useState([])
    let [page,setPage] = useState(272)
    let [lastPage,setLast]= useState();
    useEffect(()=>{
       fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`)
       .then(res=>res.json())
       .then(res=> {setFeeds(res.data);setLast(res.last_page)})


       
    },[])

    function addFeeds(){
        setPage(++page)
        fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`)
       .then(res=>res.json())
       .then(res=> setFeeds(state=>state.concat(res.data)))
    
    }
    
    function changePagination(number){
        setPage(number)
        fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${number}`)
       .then(res=>res.json())
       .then(res=> setFeeds(res.data))
    }


    if(feeds){
        return (
        <div>
        <ul>
            {
            feeds.map(coment=>{
                     return <Coment coment={coment} key={coment.id}/>
                })
            }
        </ul>
        {page==lastPage?<h3>Подгружать нечего</h3> : <button onClick={addFeeds}>Показать еще</button>}
        
        <Pagination page={page} lastPage={lastPage} changePagination={changePagination}/>
        </div>
        )
    }

    return <h1>NET ZAPISEY!</h1> 
}
export default Feed