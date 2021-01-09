import React from 'react';
import slugify from "slugify";

export default function FeatureItem(props) {
  const { USCurrencyFormat, selected, feature, item } = props;
  const itemHash = slugify(JSON.stringify(item));

  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === selected[feature].name}
        onChange={e => props.updateFeature(feature, item)}
      />

      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>
  );
}
