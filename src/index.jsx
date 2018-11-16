import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

export default {
  App,
};

window.addEventListener('load', () => {
  const content = document.querySelector('.application-main .container.new-discussion-timeline');
  const repositoryContent = content.querySelector('.repository-content');

  // make it a bit wider to give more real estate for the injected elements
  content.style.width = '100%';
  content.style.marginLeft = '2em';
  repositoryContent.style.width = '70%';
  repositoryContent.style.display = 'inline-block';

  const appContainer = document.createElement('div');
  const appStyles = {
    display: 'inline-block',
    border: '1px solid black',
    width: '25%',
    position: 'fixed',
    marginLeft: '2%',
  };

  Object.assign(appContainer.style, appStyles);
  content.insertBefore(appContainer, repositoryContent.nextSibling);
  ReactDOM.render(<App />, appContainer);
});

