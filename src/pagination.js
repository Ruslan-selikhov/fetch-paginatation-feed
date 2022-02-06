import './App.css'
import classNames from 'classnames'
function Pagination(props){

    let num_pages=[]
    let lastPage=props.lastPage
    for(let i=props.page-2;i<props.page+2;i++){
        num_pages[i]=i
    }
    if(props.page==lastPage)
    num_pages.pop()
    if(props.page!==lastPage&&props.page-1!==lastPage&&props.page-2!==lastPage)
    num_pages.push(lastPage)



    return(
        <div>
        <ul className="container_pagination">
        {
          
           
           
           lastPage?
           num_pages.map(number=> 
            {
                if(number!==0) 
                return <li className={classNames('block_pagination',{'active':number==props.page})} key={number}>
                    <a onClick={()=>props.changePagination(number)}>{number}</a>
                </li>
            }):''
           

        }
        </ul>
        </div>
    )
}
export default Pagination