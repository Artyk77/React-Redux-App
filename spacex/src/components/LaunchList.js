import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Launch from './Launch';
import { getData } from './actions';



const LaunchList = props => {
    return (
        <>
            <h1>SpaceX Launch Directory App</h1>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="Oval" color="#somecolor" height="30" width="30" />
                ) : (
                        'Get SpaceX Launch Data'
                    )}
            </button>

            {props.launch &&
                props.launch.map(launch => <Launch key={launch.mission_name} launch={launch} />)}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        launch: state.launch
    }
}

export default connect(mapStateToProps, { getData })(LaunchList)