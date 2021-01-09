import React from 'react';
import FeatureList from './FeatureList';

export default function FeatureForm(props) {
  const { features } = props;

    const featureHTML = Object.keys(features).map((feature, idx) => (
        <FeatureList key={idx} feature={feature} idx={idx} {...props} />
  ));

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {featureHTML}
    </form>
  );

}


