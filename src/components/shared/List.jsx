import React, {Component} from "react"
const ASSETS ={
    award: require('../../assets/award2.png'),
    
};


class List extends Component {


    render(){
        const FACTS = [
            {
                Number: "1",
                Words: " 100% Organic Meat and Fish"
            },
        {
            Number: "2",
            Words: "Made in America"
        },
        {
            Number:"3",
            Words: "Safe for Fat/Large dogs"
        },
        {
            Number:"4",
            Words: "Tasty for all pups and dogs"
        },
        {
            Number:"5",
            Words: "Packed in biodegradable can"
        },
        ];
        return(
            <div className= "list-block">
                <div className="box">
                    <img 
                    src={ASSETS.award}
                    className="award-icon"
                    alt="award-icon"
                    />
                    
                    <h1 className="facts-title">
                        Award Winner of Stuff
                    </h1>
                    {FACTS.map((fact)=>(
                        <li
                        className="facts-list"
                        >
                    {fact.Words}
                        </li>
                    ))}

                </div>
            </div>

        )
    }
}

export default List