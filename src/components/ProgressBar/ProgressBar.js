/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--borderRadius);
`

const BarWrapper = styled.div`
  overflow:hidden;
  border-radius: 4px;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value}%;
  height: var(--height);
`

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--padding": "4px",
    "--height": 24 + "px",
    /** The formula is to add half of the delta between the container and his child height */
    "--borderRadius": 8 + "px",
  }
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={SIZES[size]}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value}/>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
