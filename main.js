import 'reveal.js/dist/reveal.css';

import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';

const deck = new Reveal({
  width: '100%',
  height: '100%',
});
deck.initialize({
  plugins: [RevealHighlight, RevealNotes],
  transition: 'none',
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.4,
  autoAnimateUnmatched: false,
});
