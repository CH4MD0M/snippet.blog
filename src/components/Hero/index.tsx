import React from 'react';
import Typewriter from 'typewriter-effect';

// CSS
import * as S from './style';

interface HeroProps {
  name: string;
}

const Hero = ({ name }: HeroProps) => {
  return (
    <S.HeroWrapper>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={typewriter => {
          typewriter
            .typeString("ch4md0m's <br />")
            .pauseFor(1000)
            .typeString('snippet')
            .pauseFor(1000)
            .typeString(' 저장소')
            .pauseFor(2500)
            .start();
        }}
      />
    </S.HeroWrapper>
  );
};

export default Hero;
