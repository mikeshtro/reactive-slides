import 'reveal.js/dist/reveal.css';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';

const deck = new Reveal();
deck.initialize({
  plugins: [RevealHighlight],
  transition: 'none',
});
