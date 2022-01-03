import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CameraSelection from './CameraSelection/CameraSelection'
import CameraView from './CameraView/CameraView'

class App extends Component {

  constructor() {
    super();
    this.state = { selectedPresetId: null }
  }

  cameraSelected = (value) => {
    this.setState({ selectedPresetId: value });
  }

  render = () => {
    const { selectedPresetId } = this.state;
    return (
      <div className="app">
        <CameraSelection
          selectedPresetId={this.state.selectedPresetId}
          onSelect={(value) => this.cameraSelected(value)}
        />
        {selectedPresetId ?
          <div className="camera-container">
            <CameraView presetId={selectedPresetId} />
          </div>
          : null
        }
      </div>
    );
  }
}

App.propTypes = {
  selectedPresetId: PropTypes.string.isRequired
}

export default App;