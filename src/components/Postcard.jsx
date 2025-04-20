import React from 'react';

const Postcard = ({post}) => {

    const {category, title, author, date, content, authorImage, featuredImage} = post;

    return (
        <div>
            {title} - {date}
        </div>
    );
};

export default Postcard;