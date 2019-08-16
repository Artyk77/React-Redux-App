import React from 'react';
import { Card } from "shards-react";
import { Image } from 'semantic-ui-react'

const Launch = props => {
    console.log('rendering launch props' , props.launch.mission_name)
    return (
        <Card>
        <Image src= {props.launch.links.mission_patch_small} wrapped ui={false} />
        <Card.Content>
        <Card.Header>Mission: {props.launch.mission_name}</Card.Header>
        <Card.Meta>
            <span className='date'>Mission ID: {props.launch.mission_id}</span>
        </Card.Meta>
        <Card.Meta>
            <span className='date'>Launch Year: {props.launch.launch_year}</span>
        </Card.Meta>
        <Card.Meta>
            <span className='date'>Rocket Info: {props.launch.rocket.rocket_name}</span>
        </Card.Meta>
        <Card.Meta>
            <span className='date'>Launch Site: {props.launch.launch_site.site_name_long}</span>
        </Card.Meta>
        </Card.Content>
    </Card>
    )
}

export default Launch