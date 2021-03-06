import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Section title="Education and Training">
      {education.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
