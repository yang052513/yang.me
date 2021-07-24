import React from 'react'
import { Image } from 'components/atoms/Image'
import styled, { css } from 'styled-components'
import { style } from 'components/molecules/RotateAvatar/style'

const StyledWrapper = styled.div`
  position: relative;
  width: 310px;
  height: 310px;
  transform: translateX(-45px);

  ${(props) => props.theme.media.tablet} {
    ${style.screen.tablet}
  }

  ${(props) => props.theme.media.mobile} {
    ${style.screen.mobile}
  }
`

const override = css`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${(props) => props.theme.color.primary};

  ${(props) => props.theme.animation.keyframes.wiggleRotate};
  animation: wiggleRotate 4s infinite;
`

export const RotateAvater: React.FC = () => {
  return (
    <StyledWrapper>
      <Image
        src="images/avatar.jpg"
        alt="yang avatar"
        width="310px"
        variant="circle"
      />
      <Image
        src="images/avatar-outline.png"
        alt="rotate animation avatar frame"
        width="310px"
        variant="circle"
        css={override}
      />
    </StyledWrapper>
  )
}
