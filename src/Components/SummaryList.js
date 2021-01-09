// import react from 'React';
import React, { Component } from "react";
import SummaryTotal from './SummaryTotal';
import SummaryItem from './SummaryItem';

export default class SummaryList extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => (
      <SummaryItem key={idx} feature={feature} idx={idx} {...this.props} />
    ));
    
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <SummaryTotal {...this.props} />
      </section>
    );
  }
}
