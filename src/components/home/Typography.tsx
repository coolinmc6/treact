import React from 'react';

type TypographyProps = {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export default function Typography({ size, children }: TypographyProps) {
  return (
    <div className={`typography typography-${size}`}>
      {children}
    </div>
  );
}
