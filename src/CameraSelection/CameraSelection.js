import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CameraSelection.css';

// http://tie.digitraffic.fi/api/v1/metadata/camera-stations
// http://tie.digitraffic.fi/api/v1/data/camera-data/{id}
const cameras = [
    { presetId: '', name: '-' },
    { presetId: 'C1052701', name: 'Laihia - Vaasaan' },
    { presetId: 'C1052702', name: 'Laihia - Tampereelle' },
    { presetId: 'C1053601', name: 'Laihia - Ruto Vaasaan' },
    { presetId: 'C1053602', name: 'Laihia - Ruto Tampereelle' },
    { presetId: 'C1050802', name: 'Vaasa - Mottoritie Laihialle' },
    { presetId: 'C1050801', name: 'Vaasa - Mottoritie Vaasaan' },
    { presetId: 'C1051602', name: 'Tervajoki - Laihialle' },
    { presetId: 'C1051601', name: 'Tervajoki - Seinäjoelle' },
    { presetId: 'C0454801', name: 'Tampere - Lielahti Ylöjärvelle' },
    { presetId: 'C0454802', name: 'Tampere - Lielahti Tampereelle' },
    { presetId: 'C0460900', name: 'Tampere - Rantatunnelin suu itä' },
    { presetId: 'C0450702', name: 'Tampere - Lakalaiva Helsinkiin' },
    { presetId: 'C0450701', name: 'Tampere - Lakalaiva Vaasaan' }
]

class CameraSelection extends Component {

    selectionChanged = (event) => {
        console.log("Selected:" + event.target.value);
        this.props.onSelect(event.target.value);
    }

    render = () => {
        const { selectedPresetId } = this.props;
        return <div className="Camera-selection-container">
            <div className="Camera-selection-text">
                Select camera to show:<br />
                <form>
                    <select onChange={this.selectionChanged} value={selectedPresetId}>
                        {
                            cameras.map((cam, i) =>
                                <option
                                    key={'selection_' + i}
                                    value={cam.presetId}>
                                    {cam.name}
                                </option>)
                        }
                    </select>
                </form>
            </div>
        </div>
    }
}

CameraSelection.propTypes = {
    selectedPresetId: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default CameraSelection;