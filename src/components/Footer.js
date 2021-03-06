import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { useSiteMetadata } from '../utilis/staticQuery/useSiteMetadata';
import Paragraph from './Atoms/Paragraph';
import FlexBox from './Atoms/FlexBox';
import theme from '../assets/styles/theme';

const StyledFooter = styled.footer`
  font-size: 14px;
  padding: 8px 24px;
  width: 100%;
  background: ${props => props.theme.color.lightGray};
  color: ${props => props.theme.color.gray};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  a {
    color: ${props => props.theme.color.gray};
  }
`;

const Footer = () => {
  const meta = useSiteMetadata();

  return (
    <StyledFooter>
      <FlexBox width={['100%', 'auto']}>
        <Paragraph fontSize={1} color={theme.color.black70} width="100%">
          Made with ♥ and coffee by {meta.author} © {new Date().getFullYear()}
        </Paragraph>
      </FlexBox>
      <FlexBox ml={[0, 'auto']}>
        <a target="_blank" rel="noopener noreferrer" href={meta.gitlab}>
          <Paragraph fontSize={1} color={theme.color.black70} style={{ textTransform: 'uppercase' }}>
            <FormattedMessage id="footer.gitlab" defaultMessage="code on gitlab" />
          </Paragraph>
        </a>
      </FlexBox>
    </StyledFooter>
  );
};

export default Footer;
