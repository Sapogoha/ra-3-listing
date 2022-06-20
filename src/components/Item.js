import React from 'react';
import PropTypes from 'prop-types';

function Item({ item }) {
  const { url, MainImage, title, currency_code, price, quantity } = item;
  if (!item?.MainImage?.url_570xN) return null;

  let formattedTitle;
  title.length < 50
    ? (formattedTitle = title)
    : (formattedTitle = `${title.substring(0, 49)}...`);

  let formattedPrice;
  switch (currency_code) {
    case 'EUR':
      formattedPrice = `€${price}`;
      break;
    case 'GBP':
      formattedPrice = `${price} ${currency_code}`;
      break;
    default:
      formattedPrice = `$${item.price}`;
      break;
  }

  let level;

  if (quantity <= 10) {
    level = 'low';
  } else if (quantity <= 20) {
    level = 'medium';
  } else {
    level = 'high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formattedTitle}</p>
        <p className="item-price">{formattedPrice}</p>
        <p className={`item-quantity level-${level}`}>{quantity}</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
