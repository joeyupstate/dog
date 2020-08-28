/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => (
  <div
    css={css`
      height: 280px;
      width: 50%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      border-radius:5px;
      margin-bottom:30px;
    
    `}
  />
)

export default Slide