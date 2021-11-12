import React from 'react';
import {IconType} from '..';

export const IconChevronUp: IconType = ({
  height = 24,
  width = 24,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.292433 5.69532C0.479735 5.88242 0.733736 5.98752 0.998581 5.98752C1.26342 5.98752 1.51743 5.88242 1.70473 5.69532L4.99376 2.40894L8.28278 5.69532C8.37492 5.79064 8.48513 5.86667 8.60699 5.91898C8.72885 5.97128 8.85991 5.99881 8.99253 5.99996C9.12515 6.00111 9.25667 5.97586 9.37941 5.92568C9.50216 5.8755 9.61368 5.8014 9.70746 5.7077C9.80124 5.61399 9.8754 5.50256 9.92562 5.37991C9.97584 5.25726 10.0011 5.12585 9.99996 4.99334C9.99881 4.86082 9.97126 4.72987 9.91891 4.60811C9.86656 4.48635 9.79047 4.37623 9.69508 4.28417L5.6999 0.292199C5.5126 0.105104 5.2586 0 4.99376 0C4.72891 0 4.47491 0.105104 4.28761 0.292199L0.292433 4.28417C0.105189 4.47132 0 4.72511 0 4.98974C0 5.25438 0.105189 5.50817 0.292433 5.69532Z"
        fill="currentColor"
      />
    </svg>
  );
};
