import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line
export default createGlobalStyle`
  :root {
    --R: 0;
    --G: 0;
    --B: 0;
    --A: 1;
    --A-60p: calc(var(--A) * 0.6);

    --primary-color: rgb(var(--R), var(--G), var(--B), var(--A));
    --secondary-color: rgb(var(--R), var(--G), var(--B), var(--A-60p));

    --size-1: 1rem;
    --size-80p: calc(var(--size-1) * 0.8);
    --size-3: calc(var(--size-1) * 3);
  }
`;
