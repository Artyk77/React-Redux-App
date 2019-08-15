import React from 'react';

const Launch = props => {
    return (
        <div>
            <h3>Mission Name: {props.launch.mission_name}</h3>
            <p>Details: {props.launch.details}</p>
            <p>Launch Year: {props.launch.launch_year}</p>
            <p>Rocket Info: {props.launch.rocket.rocket_name}</p>
            <p>Launch Site: {props.launch.launch_site.site_name_long}</p>
            {/* <img src = {props.launch.links.flickr_images[0]} alt = {props.launch.links.flickr_images}/> */}
        </div>
    )
}

export default Launch