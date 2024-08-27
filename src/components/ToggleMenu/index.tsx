import React from 'react';
import { Link } from 'gatsby';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

import { menuVariants, menuItemVariants } from '@utils/framer';

// CSS
import * as S from './style';

interface ToggleMenuProps {
  toggle: () => void;
}

const ToggleMenu = ({ toggle }: ToggleMenuProps) => {
  return (
    <S.ToggleMenuWrapper
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <S.CloseButton onClick={toggle}>
        <IoMdClose />
      </S.CloseButton>
      <Link to="/categories">
        <motion.div variants={menuItemVariants}>categories</motion.div>
      </Link>
      <Link to="/tags">
        <motion.div variants={menuItemVariants}>tags</motion.div>
      </Link>
      <Link to="/search">
        <motion.div variants={menuItemVariants}>search</motion.div>
      </Link>
    </S.ToggleMenuWrapper>
  );
};

export default ToggleMenu;
