import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Launch from './Launch';
import { getData } from '../actions/index'



const LaunchList = props => {
    console.log('launch props', props)
    return (
        <>
            <h1>Welcome to the SpaceX Launch Directory App</h1>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="BallTriangle" color="#2B2ED2" height="50" width="100" />
                ) : (
                        'Get SpaceX Launch Data'
                    )}
            </button>

            {props.launches &&
                props.launches.map(launch => <Launch key={launch.mission_name} launch = {launch} />)}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        launches: state.launches
    }
}

export default connect(mapStateToProps, { getData })(LaunchList)