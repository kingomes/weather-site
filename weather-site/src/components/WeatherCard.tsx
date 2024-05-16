export default function WeatherCard(props) {
    return (
        <div className="weather-card">
            <img src={`../images/${props.item.imageUrl}`} className="card--photo"/>
            <div className="card--info">
                <div className="card--whereabouts">
                    <img src="../images/location-symbol.png" className="card--symbol"/>
                    <span className="card--location">{props.item.location}</span>
                    <span><a href={props.item.googleMapsUrl} target="_blank" className="card--link">View on Google Maps</a></span>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}