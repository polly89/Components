
import React from "react";
import Accordion from '../pages/AccordionPage';

function AccordionPage() {
  const items = [
    {
      id:'1',
      label: 'Can I use React?',
      content: 'Yes you can! I Ccan use React on any project I want to. You can use React on any project. React is awesome. '
    },
    {
      id:'2',
      label: 'Can I use JS?',
      content: 'Yes you can use JS! JS is sometimes simpler than React. There are still more projects made in JS than React.'
    },
    {
      id:'3',
      label: 'Can I use CSS?',
      content: 'Yes you can use css! CSS rules! You can even create animations using purely HTML and CSS.'
    },
  ]
    return(
      <Accordion items={items}/>
    )
}
export default AccordionPage;
