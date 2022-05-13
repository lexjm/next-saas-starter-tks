import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Precios flexibles para equipos ágiles</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Stars"
          description="Pruébanos gratis"
          benefits={['720hras', 
                     '1 Proyecto activo',
                     '1 Usuario', 
                     '1 asistencia'
          ]}
        >
          $78<span>/Mensual</span>
        </PricingCard>
        <PricingCard
          title="Premium"
          description="La mejor para equipos"
          benefits={['720hras', 
                     '1 Proyecto acticvo',
                     'Ulimited viewers', 
                     '100 blocks', 
                     'CSV Downloader', 
                     'Password protection'
                    ]}
          isOutlined
        >
          $290<span>/Mensual</span>
        </PricingCard>
        <PricingCard
          title="Quantum"
          description="Get your team together"
          benefits={[
            '10 seat',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
        >
          $444<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
