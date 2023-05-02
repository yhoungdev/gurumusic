interface Props {
    base: any;
    md: any;
    lg: any;
  }
  
  export const smallView: Props = { base: 'block', md: 'block', lg: 'none' };
  
  export const largeView: Props = { base: 'none', md: 'none', lg: 'block' };
  
  export const flexSm: Props = { base: '100%', md: '100%', lg: '50%' };
  
  export const flexDirection: Props = { base: 'column', md: 'column', lg: 'row' };