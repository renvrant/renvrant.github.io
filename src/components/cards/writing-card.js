import React from 'react';
import Card from './card';

function WritingCard() {
  return (
    <Card title="Writing" color="3">
      <ul>
        <li>
          <a href="https://rangle.io/blog/custom-build-modes-with-vue-cli-3/" target="_blank">
          Custom Build Modes with Vue CLI 3
          </a>
        </li>
        <li><a href="http://blog.rangle.io/accessibility-in-modern-web-applications/" target="_blank">
                 Accessibility in Modern Web Applications
               </a>
        </li>
        <li><a href="https://angular-2-training-book.rangle.io/handout/architect/functional_forms.html" target="_blank">
                Functional Forms in Angular</a>
        </li>
        <li>
          <a href="https://angular-2-training-book.rangle.io/handout/a11y/" target="_blank">Angular Accessibility</a>
        </li>
        {/* <li>*/}
        {/* <a href="https://medium.com/@renvrant/teach-determination-not-code-e383f5b65a90#.nfdypf6s0" target="_blank">*/}
        {/* Teach determination, not code</a>*/}
        {/* </li>*/}
      </ul>
    </Card>
  );
}

export default WritingCard;
