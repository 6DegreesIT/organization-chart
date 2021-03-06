import React from 'react'
import './App.css'
import OrgChart from '@unicef/react-org-chart'
import { BrowserRouter, Route } from 'react-router-dom'
import {
  Vinay,
  VinaysTeam,
  JyotsnasTeam,
  KaynatsTeam,
  NitikasTeam,
  VibhorsTeam,
  AnkitsTeam,
  AmitsTeam,
  AkankshasTeam,
  AbhisheksTeam
} from './Tree'
import avatarPersonnel from './assets/avatar-personnel.svg'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tree: Vinay,
      downloadingChart: false,
      config: {},
      highlightPostNumbers: [1],
    }
  }

  getChild = id => {
    switch (id) {
      case 1:
        return VinaysTeam
      case 2:
        return JyotsnasTeam
      case 4:
        return AkankshasTeam
      case 6:
        return KaynatsTeam
      case 7:
        return NitikasTeam
      case 3:
        return VibhorsTeam
      case 16:
        return AnkitsTeam
      case 27:
        return AmitsTeam
      case 43:
        return AbhisheksTeam
      default:
        return console.log('no children')
    }
  }

  getParent = d => {
    return d
  }

  handleDownload = () => {
    this.setState({ downloadingChart: false })
  }

  handleOnChangeConfig = config => {
    this.setState({ config: config })
  }

  handleLoadConfig = () => {
    const { config } = this.state
    return config
  }

  render() {
    const { tree, downloadingChart } = this.state

    //For downloading org chart as image or pdf based on id
    const downloadImageId = 'download-image'
    const downloadPdfId = 'download-pdf'

    return (
      <BrowserRouter basename="/react-org-chart">
        <Route exact path="/">
          <React.Fragment>
            <div className="zoom-buttons">
              <button
                className="btn btn-outline-primary zoom-button"
                id="zoom-in"
              >
                +
              </button>
              <button
                className="btn btn-outline-primary zoom-button"
                id="zoom-out"
              >
                -
              </button>
            </div>
            <div className="download-buttons">
              <button className="btn btn-outline-primary" id="download-image">
                Download as image
              </button>
              <button className="btn btn-outline-primary" id="download-pdf">
                Download as PDF
              </button>
              {downloadingChart && <div>Downloading chart</div>}
            </div>
            <OrgChart
              tree={tree}
              downloadImageId={downloadImageId}
              downloadPdfId={downloadPdfId}
              onConfigChange={config => {
                this.handleOnChangeConfig(config)
              }}
              loadConfig={d => {
                let configuration = this.handleLoadConfig(d)
                if (configuration) {
                  return configuration
                }
              }}
              downlowdedOrgChart={d => {
                this.handleDownload()
              }}
              loadImage={d => {
                return Promise.resolve(avatarPersonnel)
              }}
              loadParent={d => {
                const parentData = this.getParent(d)
                return parentData
              }}
              loadChildren={d => {
                const childrenData = this.getChild(d.id)
                return childrenData
              }}
            />
          </React.Fragment>
        </Route>
      </BrowserRouter>
    )
  }
}
