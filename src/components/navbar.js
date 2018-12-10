import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Identicon from './identicon.js'
import PropTypes from 'prop-types'
import React from 'react'

import NotificationItem from './notification-item'

class NavBar extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { wallet } = this.props
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="./">
            <span>
              <img
                alt=""
                className="d-inline-block align-mid"
                height="30"
                src="kleros-logo.svg"
                width="30"
              />
            </span>{' '}
            <span>
              <img
                alt=""
                className="d-inline-block align-mid"
                height="auto"
                src="Group.svg"
                width="auto"
              />
            </span>
          </a>
          <button
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNav"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="./">
                  Centralized Arbitrator Dashboard
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div className="dropdown">
              <button
                aria-expanded="false"
                aria-haspopup="true"
                className="btn btn-secondary"
                data-toggle="dropdown"
                id="dropdownMenu2"
                type="button"
              >
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon="bell"
                  onClick={e => e.stopPropagation()}
                />
              </button>
              <div aria-labelledby="dropdownMenu2" className="dropdown-menu notification-control">
                <label className="text-center">Notifications</label>
                <hr/>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
              </div>
            </div>
            <div className="mx-2 dropdown" onClick={e => e.stopPropagation()}>
              <button
                aria-expanded="false"
                aria-haspopup="true"
                className="btn btn-secondary"
                data-toggle="dropdown"
                id="dropdownMenu2"
                type="button"
              >
                <FontAwesomeIcon className="navbar-icon" icon="envelope" />
              </button>
              <div
                aria-labelledby="dropdownMenu2"
                className="p-4 dropdown-menu dropdown-menu-right"
                onClick={e => e.stopPropagation()}
              >
                <label className="col-md-12 text-center">Register to receive notifications by email</label>
                <hr />
                <ul
                  className="nav nav-tabs email-control"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      aria-controls="profile"
                      aria-selected="true"
                      className="nav-link active"
                      data-toggle="tab"
                      href="#profile"
                      id="all-contracts-tab"
                      onClick={e => e.stopPropagation()}
                      role="tab"
                    >
                      All Contracts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      aria-controls="contact"
                      aria-selected="false"
                      className="nav-link"
                      data-toggle="tab"
                      href="#contact"
                      id="current-contract-tab"
                      role="tab"
                    >
                      Current Contract
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    aria-labelledby="all-contracts-tab"
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                  >
                  <br/>
                  <label>Registering your email you will be informed:</label>
                  <br/>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="defaultCheck1"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        When there is a new dispute
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="defaultCheck2"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="defaultCheck2">
                        When there is a new evidence to an existing dispute
                      </label>
                    </div>
                    <hr />
                    <form>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="inputNameAllContracts"
                            placeholder="Name"
                            type="name"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="inputEmailAllContracts"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-sm-6">
                          <button className="btn" type="submit">
                            Unsubscribe
                          </button>
                        </div>
                        <div className="col-sm-6">
                          <button
                            className="btn btn-primary float-right"
                            type="submit"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    aria-labelledby="current-contract-tab"
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                  >
                  <div
                    aria-labelledby="all-contracts-tab"
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                  >
                    <br/>
                    <label>Registering your email you will be informed:</label>
                    <br/>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="defaultCheck1"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        When there is a new dispute
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="defaultCheck2"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="defaultCheck2">
                        When there is a new evidence to an existing dispute
                      </label>
                    </div>
                    <hr />
                    <form>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="inputEmailCurrentContract"
                            placeholder="Name"
                            type="name"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="inputPasswordCurrentContract"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-sm-6">
                          <button className="btn" type="submit">
                            Unsubscribe
                          </button>
                        </div>
                        <div className="col-sm-6">
                          <button
                            className="btn btn-primary float-right"
                            type="submit"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="button">
              <Identicon
                bgColor="#4004A3"
                className="identicon"
                color="#009AFF"
                scale={3}
                seed={wallet}
                size={10}
                spotColor="white"
              />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

NavBar.propTypes = {
  wallet: PropTypes.string.isRequired
}

export default NavBar