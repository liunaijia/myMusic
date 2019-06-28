import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line
export default createGlobalStyle`
  :root {
    --r: 0;
    --g: 0;
    --b: 0;
    --a: 1;
    --a-60p: calc(var(--a) * 0.6);
    --bg-r: calc(255 - var(--r));
    --bg-g: calc(255 - var(--g));
    --bg-b: calc(255 - var(--b));

    --primary-color: rgb(var(--r), var(--g), var(--b), var(--a));
    --secondary-color: rgb(var(--r), var(--g), var(--b), var(--a-60p));
    --primary-bg-color: rgb(var(--bg-r), var(--bg-g), var(--bg-b), var(--a));

    --size-1: 1rem;
    --size-80p: calc(var(--size-1) * 0.8);
    --size-2: calc(var(--size-1) * 2);
    --size-3: calc(var(--size-1) * 3);
  }
`;
