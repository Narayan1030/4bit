import "./Services.css";


export default function ServicesCard(props) {
  return (
      <div className="service-card">
        <div className="service-card-icon">
        <span className="service-icons">{props.element.logo}</span>
        <p className="service-expertise">{props.element.status}</p>
      </div>
      <div className="service-details">
        <h2 className="service-detail-title">{props.element.title}</h2>
        <p className="service-detail-para">{props.element.description}</p><hr />
      </div>
      <div className="service-tools">
        {props.element.tools &&
          props.element.tools.map((tool, index) => {
            return <button key={index}>{tool}</button>;
          })}
      </div>
      </div>
  );
}
