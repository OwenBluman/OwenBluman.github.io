const projects = [
    {
        title: "Owen's Goated Trickshot",
        description: 'Amazing throw, Brady-esque',
        video: '/Users/owenbluman/Downloads/IMG_0448.MOV'
    },
    // Add other projects here
];

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    projectItem.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <video controls width="400">
      <source src="${project.video}" type="video/quicktime">
      Your browser does not support the video tag.
    </video>
  `;

    document.querySelector('.project-list').appendChild(projectItem);
});
