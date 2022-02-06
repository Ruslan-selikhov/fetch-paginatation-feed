import react from "react";
function Coment(props){
return (
        <li key={props.coment.id} className="feed_container">
            <p className="name_coment">{props.coment.name}</p>
            <p className="text_coment">{props.coment.text}</p>
        </li>
    )
}
export default Coment