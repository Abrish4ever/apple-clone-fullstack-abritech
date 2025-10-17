import React from 'react'
import IpadPro from '../../components/IpadPro/IpadPro';
import MacBookAir from '../../components/MacBook/MacBookAir';
import IphonePro from '../../components/IphonePro/IphonePro';
import Iphone11 from '../../components/Iphone11/Iphone11';
import TvWatch from '../../components/TvWatch/TvWatch';
import Arcade_Apple from '../../components/ArcadeApple/Arcade_Apple';
import AppleVideo from "../../components/AppleVideo/AppleVideo";


const Main = () => {
  return (
    <>
      <IpadPro />
      <MacBookAir />
      <IphonePro />
      <Iphone11 />
      <TvWatch />
      <Arcade_Apple />
      <AppleVideo />
    </>
  );
}

export default Main