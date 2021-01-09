import React from 'react';
import FeatureItem from './FeatureItem';

export default function FeatureList(props) {
  const { features, feature, idx } = props;
  const featureHash = feature + "-" + idx;

  const options = features[feature].map((item, idx) => (
    <FeatureItem key={idx} item={item} {...props} />
  ));

  return (
        <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
