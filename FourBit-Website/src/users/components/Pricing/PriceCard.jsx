import "./Price.css"
import { LuShieldCheck } from "react-icons/lu";

export default function PriceCard({element}){
    return(<>
        <div className="price-card">
            <div className="pricing">
                <div className="pricing-head">
                    <h4>{element.name}</h4>
               {element.popularity && element.popularity.length?
                <p>{element.popularity}</p>:null}
                </div>
                <div className="price-detail">
                    <h2>{element.price}</h2> 
                    <p><sub>{element.per}</sub></p>
                    
                </div>
                <hr style={{height:"0.09px"}}/>
            </div>
            <div className="price-feature">
                {
                    element.features && element.features.length?  
                    element.features.map((feature,idx)=>
                    <span><LuShieldCheck />{feature}</span>
                )

                    :null
                }

            </div>
            <button>
                {element.button}
            </button>
        </div>

    </>)
}