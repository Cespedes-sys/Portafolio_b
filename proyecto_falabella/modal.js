
document.addEventListener('DOMContentLoaded', function() {
  const projectModal = document.getElementById('projectModal');
  
  // Datos de los proyectos (puedes expandir esto)
  const projects = {
    falabella: {
      title: "Proyecto Falabella",
      description: "Réplica funcional del e-commerce Falabella desarrollada con Angular y Node.js. Incluye sistema de autenticación, carrito de compras y pasarela de pagos simulada.",
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Mysql', 'Bootstrap'],
      images: [
        './proyecto_falabella/inicio_f.png',
        './proyecto_falabella/menu.png',
        './proyecto_falabella/perfil.png',
        './proyecto_falabella/recuperar.png',
        './proyecto_falabella/registro.png',
        './proyecto_falabella/perfil.png',

      ],
      link: '#'
    },
    proyecto2: {
      title: "Proyecto 2",
      description: "Descripción detallada del segundo proyecto.",
      technologies: ['React', 'Firebase', 'CSS'],
      images: ['foto.jpeg', 'foto.jpeg', 'foto.jpeg'],
      link: '#'
    },
    proyecto3: {
      title: "Proyecto 3",
      description: "Descripción detallada del tercer proyecto.",
      technologies: ['Python', 'Django', 'PostgreSQL'],
      images: ['foto.jpeg', 'foto.jpeg', 'foto.jpeg'],
      link: '#'
    }
  };

  projectModal.addEventListener('show.bs.modal', function(event) {
    const button = event.relatedTarget;
    const projectId = button.getAttribute('data-project');
    const project = projects[projectId];
    
    // Actualizar título
    document.getElementById('modalTitle').textContent = project.title;
    
    // Actualizar carrusel
    const carouselInner = projectModal.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';
    
    project.images.forEach((img, index) => {
      const item = document.createElement('div');
      item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      item.innerHTML = `<img src="${img}" class="d-block w-100" alt="${project.title}">`;
      carouselInner.appendChild(item);
    });
    
    // Actualizar descripción
    document.querySelector('#projectDescription p').textContent = project.description;
    
    // Actualizar tecnologías
    const techContainer = document.getElementById('projectTechnologies');
    techContainer.innerHTML = '';
    
    project.technologies.forEach(tech => {
      const badge = document.createElement('span');
      badge.className = 'badge bg-primary bg-opacity-10 text-primary';
      badge.textContent = tech;
      techContainer.appendChild(badge);
    });
    
    // Actualizar enlace
    document.getElementById('projectLink').href = project.link;
  });
});