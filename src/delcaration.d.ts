declare module '*.jpg';
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
