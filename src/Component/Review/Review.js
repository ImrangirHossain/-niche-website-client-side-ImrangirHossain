import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
    const {name,discription,rating } = props.review;

    return (
        <div>
            <div className="col border border-1 text-center p-3">
            <p className="text-muted"><small> '{discription}'</small></p>
                        <h6>{name}</h6>
                        <p className="text-muted">Rated: <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating></p>
            </div>
        </div>
    );
};

export default Review;