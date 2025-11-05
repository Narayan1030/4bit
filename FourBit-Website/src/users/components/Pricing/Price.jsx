import "./Price.css"
import PriceData from "./PriceData"
import PriceCard from "./PriceCard"


export default function Price(){
    return(<>
    <div className="pricing-container">
      <div className="pricing-description">
        <h2>Simple Pricing</h2> 
        <p>Pick a track that fits. We also tailor retainers for ongoing growth.</p>
        </div>
      
      <div className="pricing-card">
        {PriceData && PriceData.length
          ? PriceData.map((price, index) => (
              <PriceCard key={price.id} element={price} />
            ))
          : null}
      </div>
    </div>
    </>)
}