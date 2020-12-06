import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionAwards = ({ awards }) => {
  if (!awards.length) return null;

  return (
    <Section title="Awards">
      {awards.map((award) => (
        <SummaryItem
          key={award.name}
          name={award.name}
          description={award.description}
          link={award.link}
        />
      ))}
    </Section>
  );
};

export default SectionAwards;
