import MarqueeReact from 'react-fast-marquee';

function Marquee({ children, className }) {
  return (
    <MarqueeReact className={className} speed='20'>
      {children}
    </MarqueeReact>
  );
}

export default Marquee;
