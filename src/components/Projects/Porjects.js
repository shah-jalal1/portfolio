import React from 'react';
import './Projects.css'
import docPortal from '../../images/doctor.PNG';
import ecommerce from '../../images/ecommerce.png';
import electronics from '../../images/electronics.png';
import pandaCommerce from '../../images/pandCommerce.png';
import penguine from '../../images/penguine.png';
import hardRock from '../../images/hard-rock.jpg';

const Porjects = () => {
    return (
        <div className="projects">
            <div className="container">
                <div>
                    <h2 className="section-title text-center mb-5">
                        Projects
                </h2>
                    <div className="card-group">

                        <div className="card p-1 m-3 col-md-4">

                            <div className="card-body">
                                <img src={docPortal} className="card-image" alt="" />
                                <h5 className="card-title text-center mt-2">Doctros Portal</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <a href="https://doctors-portal-671dc.web.app/" target="_blank"><button className='btn btn-danger'>Live View</button></a>
                                <a href="https://github.com/shah-jalal1/doctors-portal" target="_blank"><button className='btn btn-info'>Github</button></a>
                            </div>
                        </div>
                        <div className="card p-1 m-3 col-md-4">
                            <div className="card-body">
                                <img src={electronics} className="card-image" alt="" />
                                <h5 className="card-title text-center mt-2">Electronics Servicng</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <a href="https://electronics-servicing-b8beb.web.app/" target="_blank"><button className='btn btn-danger'>Live View</button></a>
                                <a href="https://github.com/shah-jalal1/electronics-servicing" target="_blank"><button className='btn btn-info'>Github</button></a>
                            </div>
                        </div>
                        <div className="card p-1 m-3 col-md-4">
                            <div className="card-body">
                                <img src={ecommerce} className="card-image" alt="" />
                                <h5 className="card-title text-center mt-2">Amar Dokan</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <a href="https://fresh-valley-425a3.firebaseapp.com/" target="_blank"><button className='btn btn-danger'>Live View</button></a>
                                <a href="https://github.com/shah-jalal1/amar-dokan" target="_blank"><button className='btn btn-info'>Github</button></a>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="card-group">
                            <div className="card p-1 m-3 col-md-4">
                                <div className="card-body">
                                    <img src={pandaCommerce} className="card-image" alt="" />
                                    <h5 className="card-title text-center mt-2">Panda Ecommerce</h5>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <a href="https://shah-jalal1.github.io/panda-ecommerce-shopping/index.html" target="_blank"><button className='btn btn-danger'>Live View</button></a>
                                    <a href="https://github.com/shah-jalal1/panda-ecommerce-shopping" target="_blank"><button className='btn btn-info'>Github</button></a>
                                </div>
                            </div>
                            <div className="card p-1 m-3 col-md-4">
                                <div className="card-body">
                                    <img src={penguine} className="card-image" alt="" />
                                    <h5 className="card-title text-center mt-2">Pennguin Fashion</h5>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <a href="https://shah-jalal1.github.io/panda-commerce/" target="_blank"><button className='btn btn-danger'>Live View</button></a>
                                    <a href="https://github.com/shah-jalal1/panda-commerce" target="_blank"><button className='btn btn-info'>Github</button></a>
                                </div>
                            </div>
                            <div className="card p-1 m-3 col-md-4">
                                <div className="card-body">
                                    <img src={hardRock} className="card-image" alt="" />
                                    <h5 className="card-title text-center mt-2">hard Rock</h5>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <a href="https://shah-jalal1.github.io/hard-rock/" target="_blank"><button className='btn btn-danger'>Live View</button></a>
                                    <a href="https://github.com/shah-jalal1/hard-rock" target="_blank"><button className='btn btn-info'>Github</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Porjects;