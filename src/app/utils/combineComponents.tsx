import React, { ComponentProps, FC } from 'react';

// a component that returns the 'sum' aka accumulation of all providerContexts in a given order
// Reduce recall - https://miro.medium.com/max/1000/1*dhTC_FFgiH3mKROrnDj12w.gif

export const combineComponents = (...components: FC<any>[]): FC => {

  return components.reduce(

    (AccumulatedComponents :React.FC<any>, CurrentComponent: React.FC<any>) => {
      return ({ children }: ComponentProps<FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    
    ({ children }) => <>{children}</>,
  );
};
