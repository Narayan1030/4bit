import ProcessCard from "./ProcessCard"
import "./Process.css"

export default function Process(){
    return(
        <>
        <div className="process-container">
              <h2>How we ship — fast</h2>
              <div className='process-row'>
                <ProcessCard number="1" title="Discover" description="Audit, goals, success metrics." />
                <ProcessCard number="2" title="Design" description="UX flows, UI kit, prototypes." />
                <ProcessCard number="3" title="Develop" description="APIs, integrations, QA." />
                <ProcessCard number="4" title="Launch" description="Monitoring, analytics, training." />
                <ProcessCard number="5" title="Grow" description="A/B tests, content, ads." />
        </div>
    </div>
    </>
    )
}