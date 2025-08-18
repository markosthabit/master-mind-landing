export { default as AboutIntro } from './AboutIntro';
export { default as AboutHistory } from './AboutHistory';
export { default as AboutVision } from './AboutVision';
export { default as AboutWeAre } from './AboutWeAre';


import  AboutHistory  from './AboutHistory';
import  AboutVision  from './AboutVision';
import  AboutWeAre  from './AboutWeAre';
import AboutIntro from './AboutIntro';

export default function AboutSection() {
  return (
    <>
      <AboutWeAre />   
      <AboutHistory />
      <AboutVision />
      <AboutIntro />
    </>
  );
}
