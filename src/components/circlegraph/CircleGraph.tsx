import React from 'react';
import { CircleGraphContainer } from './CircleGraph.styled';

interface CircleGraphProps {
  percent: number; // ex: 71
}

export default function CircleGraph({ percent }: CircleGraphProps) {
  return (
    <CircleGraphContainer>
      <div className="circle" style={{ '--percent': percent } as React.CSSProperties}>
        <h2>{percent}%</h2>
      </div>
      <p>Lucro Total</p>
    </CircleGraphContainer>
  );
}
