class Initializer {
  static initializeExtension() {
    console.log('initializing...');
    const content = document.querySelector('.application-main .container.new-discussion-timeline');
    const repositoryContent = content.querySelector('.repository-content');

    // make it a bit wider to give more real estate for the injected elements
    content.style.width = '90%';
    repositoryContent.style.width = '70%';
  }
}

export default Initializer;
