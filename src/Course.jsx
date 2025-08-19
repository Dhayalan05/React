import { useEffect, useState } from "react";

function Course(props) {

    // let purchased = false;
    const [purchased, setpurchased] = useState(false);


    function BuyCourse(discount, e) {
        console.log(props.name, "purchased with", discount, "% discount");
        console.log(e);
        // console.log(purchased);
        setpurchased(true);


    }
    // useEffect(() =>{
    //     console.log('inside course use Effect');
    //     console.log(purchased);
    // })

    return (
        <div className="book">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={(event) => BuyCourse(20, event)} className="btn">Buy Now</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{purchased ? "Already Purchased" : "Get it Now"}</p>
        </div>
    )
}
export default Course