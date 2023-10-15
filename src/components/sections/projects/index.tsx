import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';


const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

const projects = [
  {
    title: 'Projeto 1',
    technologies: 'React, Node.js',
    githubLink: 'https://github.com/seuprojeto1',
    siteLink: '',
    imageUrl: '/images/project1.jpg',
    descricao: 'Descrição do Projeto 1',
    skills: ['React', 'Node.js'],
  },
  {
    title: 'Projeto 2',
    technologies: 'React, HTML, CSS',
    githubLink: 'https://github.com/seuprojeto2',
    siteLink: 'https://seusite2.com',
    imageUrl: '/images/project2.jpg',
    descricao: 'Descrição do Projeto 1',
    skills: ['React', 'HTML', 'CSS'],
  },
  // Adicione mais projetos aqui
];

export function ProjectsSection() {
  const [filter, setFilter] = useState(['all']);

  const handleFilter = (skill: string[]) => {
    // Implemente a lógica de filtro aqui, se necessário
  };

  const handleAddFilter = async (skill: string) => {
    // Implemente a lógica de filtro aqui, se necessário
    if(skill === 'all') {
      setFilter(['all']);
      console.log(filter);
    }
    else if(filter.includes(skill)) {
      const newFilter = filter.filter((item) => (item !== skill && item !== 'all'));
      setFilter(newFilter);
      console.log(filter);
    }
    else {
      const newFilter = filter.filter((item) => item !== 'all');
      setFilter([...newFilter, skill]);
      console.log(filter);

    }
  };

  const hasItem = (array1: string[], array2: string[]) => {
    return array1.some(item1 => array2.some(item2 => item1 === item2));
  }

  const projetosFiltrados = filter.includes('all') ? projects : projects.filter(project => hasItem(project.skills, filter));



  return (
    <div>
      <section className={styles.projects} id="portfolio">
      <div className={styles.filtro}>
        <button onClick={() => handleAddFilter('all')}>Todos</button>
        <button onClick={() => handleAddFilter('React')}>React</button>
        <button onClick={() => handleAddFilter('Node.js')}>Node.js</button>
        <button onClick={() => handleAddFilter('CSS')}>CSS</button>
        {/* Adicione mais botões para outras tecnologias, se necessário */}
      </div>
      <div className={styles.listaProjetos}>
        {projetosFiltrados.map(project => (
          <div key={project.title} className={styles.projeto}>
            <h2>{project.title}</h2>
            <p>{project.descricao}</p>
          </div>
        ))}
      </div>
        {/* <ProjectFilter skills={skills} projects={projects} onFilter={handleFilter} /> */}
      </section>
    </div>
  );
}
