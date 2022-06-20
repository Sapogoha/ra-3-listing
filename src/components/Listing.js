import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.listing_id} item={item} />
      ))}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Listing.defaultProps = {
  items: [],
};

export default Listing;
