import React from 'react';
import winterWatchCollection from '../../images/collection-watch.png';
import winterCollection from '../../images/winter-collection.jpg';
import './WinterCollection.css';

const WinterCollection = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col watch-collection-content p-5">
                <img className="w-25 mb-3" src={winterWatchCollection} alt="" />
                <h3>WINTER COLLECTIONS</h3>
                <p className="text-muted px-2"><small>There are five basic features that every quality watch should have, regardless of price. Material is at least stainless steel titanium of ceramic with PVD coating. Good quartz movement or a certified mechanical movement.</small></p>
            </div>
            <div className="col p-0">
                <img className="w-100" src={winterCollection} alt="" />
            </div>
        </div>
    );
};

export default WinterCollection;