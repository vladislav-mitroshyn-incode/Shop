declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module '*.scss' {
  const content: { [key: string]: string };
  export = content;
}
declare module '*.jpg';
declare module '*.png';
declare module '*.webp';
