import React from 'react';
import { CircleGraphContainer } from './CircleGraph.styled';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface CircleGraphProps {
  percent: number; // ex: 71
}

export default function CircleGraph({ percent }: CircleGraphProps) {
    const { t } = useTranslation();
  return (
    <CircleGraphContainer>
      <div className="circle" style={{ '--percent': percent } as React.CSSProperties}>
        <h2>{percent}%</h2>
      </div>
      <p>{t('totalProfit')}</p>
    </CircleGraphContainer>
  );
}
