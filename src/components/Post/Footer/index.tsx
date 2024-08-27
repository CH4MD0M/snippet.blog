import React from 'react';

import Bio from '@components/Bio';
import Divider from '@components/Divider';
import PostNavigator from './PostNavigator';

interface FooterProps {
  pageContext: PostContextProps;
}

const Footer = ({ pageContext }: FooterProps) => {
  return (
    <>
      <Bio />
      <Divider mt="0" />
      <PostNavigator pageContext={pageContext} />
    </>
  );
};

export default Footer;
