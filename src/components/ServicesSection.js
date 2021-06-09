import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Front-End Developing"
            desc="I will try my best to make a clean, minimalistic looking website."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Back-End Developing"
            desc="The brain of the website, here I will connect everything together and make the site functional."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Developing"
            desc="As of your request, I'd make a fully functional app which requires a lot of skill and work."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
