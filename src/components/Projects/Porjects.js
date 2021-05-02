import React from 'react';
import './Projects.css'
import docPortal from '../../images/docPortal.png';
import ecommerce from '../../images/ecommerce.png';
import electronics from '../../images/electronics.png';

const Porjects = () => {
    return (
        <div className="projects">
            <div className="container">
                 <h2 className="section-title text-center mb-5">
                    Projects
                </h2>
                <div className="card-group">

                    <div className="card p-1 m-3">
                        <img src={docPortal} className="card-image" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href="">Live</a>
                            <a href="">Github</a>
                        </div>
                    </div>
                    <div className="card p-1 m-3">
                        <img src={electronics} className="card-image" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href="">Live</a>
                            <a href="">Github</a>
                        </div>
                    </div>
                    <div className="card p-1 m-3">
                        <img src={ecommerce} className="card-image" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href="">Live</a>
                            <a href="">Github</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Porjects;