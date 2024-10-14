import React from 'react'
import './ExplorePage.css'
import { auth } from '../services/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Explore = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='explore-container'>
            <h1>Explore Peer Case Studies</h1>
            <div className='explore-main'>
                <div className='explore-left'>
                    <div className='explore-left-card'>
                        <div>Design</div>
                        <div>Innovation</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Process</div>
                        <div>Innovation</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Material</div>
                        <div>Innovation</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Energy</div>
                        <div>Efficiency</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Digital</div>
                        <div>Transformation</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Product Life Cycle</div>
                        <div>Extension</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Renewable</div>
                        <div>Energy</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Waste</div>
                        <div>Recovery</div>
                    </div>
                    <div className='explore-left-card'>
                        <div>Sharing</div>
                        <div>Models</div>
                    </div>
                </div>
                <div className='explore-right'>
                    <div className='explore-search'>
                        <div className='explore-search-left'>
                            <div className='explore-search-left-icon'></div>
                            <input placeholder='Search text'></input>
                        </div>
                        <div className='explore-search-right'></div>
                    </div>
                    <h3>
                        Global value chain for Textile industry has a growing
                        trend in design innovation that has transformed the
                        market and consumer dynamics.
                    </h3>
                    <h3>
                        Over 70% companies are using circular design for their
                        products resulting in durable and customizable options
                    </h3>
                    <div className='explore-title-box'>
                        Case Studies. Peers in your market
                    </div>
                    <div className='explore-card-list'>
                        <div className='explore-card'>
                            <div className='explore-card-header'>
                                <div className='explore-card-header-left'>
                                    <div className='explore-card-header-circle'>
                                        A
                                    </div>
                                    <div className='explore-card-header-nameBox'>
                                        <div className='explore-card-header-name'>
                                            Header
                                        </div>
                                        <div className='explore-card-header-sub'>
                                            Subhead
                                        </div>
                                    </div>
                                </div>
                                <div className='explore-card-header-right'></div>
                            </div>
                            <div className='explore-card-img'></div>
                            <div className='explore-card-title'>
                                <div className='explore-card-title-first'>
                                    Title
                                </div>
                                <div>Subtitle</div>
                            </div>
                            <div className='explore-card-description'>
                                Lorem ipsum dolor sit amet,consectetur
                                adipiscing elit,sed do eiusmod tempor
                            </div>
                            <div className='explore-card-btnList'>
                                <div className='explore-card-btn cancel'>
                                    Enabled
                                </div>
                                <div className='explore-card-btn'>Enabled</div>
                            </div>
                        </div>
                        <div className='explore-card'>
                            <div className='explore-card-header'>
                                <div className='explore-card-header-left'>
                                    <div className='explore-card-header-circle'>
                                        A
                                    </div>
                                    <div className='explore-card-header-nameBox'>
                                        <div className='explore-card-header-name'>
                                            Header
                                        </div>
                                        <div className='explore-card-header-sub'>
                                            Subhead
                                        </div>
                                    </div>
                                </div>
                                <div className='explore-card-header-right'></div>
                            </div>
                            <div className='explore-card-img'></div>
                            <div className='explore-card-title'>
                                <div className='explore-card-title-first'>
                                    Title
                                </div>
                                <div>Subtitle</div>
                            </div>
                            <div className='explore-card-description'>
                                Lorem ipsum dolor sit amet,consectetur
                                adipiscing elit,sed do eiusmod tempor
                            </div>
                            <div className='explore-card-btnList'>
                                <div className='explore-card-btn cancel'>
                                    Enabled
                                </div>
                                <div className='explore-card-btn'>Enabled</div>
                            </div>
                        </div>
                        {/* <div className='explore-card'>
                            <div className='explore-card-header'>
                                <div className='explore-card-header-left'>
                                    <div className='explore-card-header-circle'>
                                        A
                                    </div>
                                    <div className='explore-card-header-nameBox'>
                                        <div className='explore-card-header-name'>
                                            Header
                                        </div>
                                        <div className='explore-card-header-sub'>
                                            Subhead
                                        </div>
                                    </div>
                                </div>
                                <div className='explore-card-header-right'></div>
                            </div>
                            <div className='explore-card-img'></div>
                            <div className='explore-card-title'>
                                <div className='explore-card-title-first'>
                                    Title
                                </div>
                                <div>Subtitle</div>
                            </div>
                            <div className='explore-card-description'>
                                Lorem ipsum dolor sit amet,consectetur
                                adipiscing elit,sed do eiusmod tempor
                            </div>
                            <div className='explore-card-btnList'>
                                <div className='explore-card-btn cancel'>
                                    Enabled
                                </div>
                                <div className='explore-card-btn'>Enabled</div>
                            </div>
                        </div> */}

                        <button className='scroll-button left'>
                            <IoIosArrowBack size={80} />
                        </button>
                        <button className='scroll-button right'>
                            <IoIosArrowForward size={80} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
