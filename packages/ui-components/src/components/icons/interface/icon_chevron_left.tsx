import React from 'react';
import {IconType} from '..';

export const IconChevronLeft: IconType = ({
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
        d="M5.69532 0.292433C5.88242 0.479735 5.98752 0.733736 5.98752 0.998581C5.98752 1.26342 5.88242 1.51743 5.69532 1.70473L2.40894 4.99376L5.69532 8.28278C5.79064 8.37492 5.86667 8.48513 5.91898 8.60699C5.97128 8.72885 5.99881 8.85991 5.99996 8.99253C6.00111 9.12515 5.97586 9.25667 5.92568 9.37941C5.8755 9.50216 5.8014 9.61368 5.7077 9.70746C5.61399 9.80124 5.50256 9.8754 5.37991 9.92562C5.25726 9.97584 5.12585 10.0011 4.99334 9.99996C4.86082 9.99881 4.72987 9.97126 4.60811 9.91891C4.48635 9.86656 4.37623 9.79047 4.28417 9.69508L0.292199 5.6999C0.105104 5.5126 0 5.2586 0 4.99376C0 4.72891 0.105104 4.47491 0.292199 4.28761L4.28417 0.292433C4.47132 0.105189 4.72511 0 4.98974 0C5.25438 0 5.50817 0.105189 5.69532 0.292433Z"
        fill="currentColor"
      />
    </svg>
  );
};
