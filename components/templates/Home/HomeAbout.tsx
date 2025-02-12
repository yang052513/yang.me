import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ProfileContext } from 'context/ProfileContext'
import { Typography } from 'components/atoms/Typography'
import { Icon } from 'components/atoms/Icon'
import { Image } from 'components/atoms/Image'
import { Chip } from 'components/molecules/Chip'
import { Button } from 'components/atoms/Button'
import { Flex } from 'components/atoms/Flex'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { Link } from 'components/atoms/Link'

const StyledContentWrapper = styled.div`
  width: 50%;
  ${(props) => props.theme.media.desktop_md} {
    margin: 0 auto;
    width: 80%;
  }
`

const flexStyle = css`
  ${(props) => props.theme.media.desktop_md} {
    flex-direction: column;
  }
`

const resumeBtnStyle = css`
  position: absolute;
  bottom: 0;

  ${(props) => props.theme.media.desktop_md} {
    position: initial;
    margin-top: 30px;
    width: 100%;
  }
`

const aboutImgStyle = css`
  margin-right: 100px;

  ${(props) => props.theme.media.desktop_md} {
    margin: 0 auto 30px auto;
  }

  ${(props) => props.theme.media.mobile} {
    width: 250px;
  }
`

export const HomeAbout: React.FC = () => {
  const { albums, bio, resumeLink, tools } = useContext(ProfileContext).profile
  const bios: Array<string> = bio.split('<br>')

  return (
    <>
      <SectionHeader
        title="About Me"
        subtitle="Love Coding & Learning New Things."
      />

      <Flex justify="center" align="flex-start" css={flexStyle}>
        <Image
          src={albums[0].url}
          alt={albums[0].alt}
          width="400px"
          height="400px"
          css={aboutImgStyle}
        />
        <StyledContentWrapper>
          {bios.map((p: string, index: number) => (
            <Typography key={p} variant="body" margin={index !== 0}>
              {p}
            </Typography>
          ))}

          <Flex>
            {tools.map((elem) => (
              <Chip
                size="small"
                variant="outlined"
                key={elem.id}
                label={elem.content}
                icon={elem.icon}
                css={css`
                  margin-right: 10px;
                  margin-bottom: 10px;
                `}
              />
            ))}
          </Flex>
          <Link href={resumeLink}>
            <Button
              variant="contained"
              endIcon={<Icon iconName={FONTAWESOME_ICONS.download} />}
              css={resumeBtnStyle}
            >
              Linkedin Profile
            </Button>
          </Link>
        </StyledContentWrapper>
      </Flex>
    </>
  )
}
