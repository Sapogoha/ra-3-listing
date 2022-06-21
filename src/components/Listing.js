import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Listing({ items }) {
  if (!items) {
    return null;
  }
  return (
    <div className="item-list">
      {items.map((item) =>
        item.state === 'active' ? (
          <Item key={item.listing_id} item={item} />
        ) : null
      )}
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
