import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

import DogsImg from '../../../../public/img/dogs_site.jpg';
import WizerImg from '../../../../public/img/wizer_site.jpg';
import PlayIcon from '../../../../public/play_icon.svg';
import DisabledPlayIcon from '../../../../public/play_disabled_icon.svg';


const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

const projects = [
  {
    title: 'Dogs',
    technologies: 'React, Node.js',
    githubLink: 'https://github.com/Lucas-A-Araujo/Dogs',
    siteLink: 'https://lucas-a-araujo.github.io/Dogs/',
    imageUrl: DogsImg,
    descricao: 'Uma rede social feita para donos de cachorros'
    + ' que desejam mostrar o seu pet para o mundo e ver os dos outros donos.',
    skills: ['React', 'Javascript'],
  },
  {
    title: 'Wizer',
    technologies: 'React, HTML, CSS',
    githubLink: '',
    siteLink: '',
    imageUrl: WizerImg,
    descricao: 'Uma plataforma de cursos de tecnologia com diversas trilhas'
    +' e cursos que permite você acompanhar o seu progresso de maneira eficiente.',
    skills: ['React', 'Next', 'Tailwind'],
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState(['all']);

  const handleAddFilter = async (skill: string) => {
    if(skill === 'all') {
      setFilter(['all']);
    }
    else if(filter.includes(skill)) {
      let newFilter = filter.filter((item) => (item !== skill && item !== 'all'));
      if(newFilter.length === 0) newFilter = ['all'];
      setFilter(newFilter);
    }
    else {
      const newFilter = filter.filter((item) => item !== 'all');
      setFilter([...newFilter, skill]);
    }
  };

  const hasItem = (array1: string[], array2: string[]) => {
    return array1.some(item1 => array2.some(item2 => item1 === item2));
  }

  const projetosFiltrados = filter.includes('all') ? projects : projects.filter(project => hasItem(project.skills, filter));



  return (
      <section className={styles.projects} id="portfolio">
      <div className={styles.filtro}>
        <button className={filter.includes('all') ? styles.active : ''} onClick={() => handleAddFilter('all')}>Todos</button>
        <button className={filter.includes('React') ? styles.active : ''} onClick={() => handleAddFilter('React')}>React</button>
        <button className={filter.includes('Node.js') ? styles.active : ''} onClick={() => handleAddFilter('Node.js')}>Node.js</button>
        <button className={filter.includes('CSS') ? styles.active : ''} onClick={() => handleAddFilter('CSS')}>CSS</button>
      </div>
      <div className={styles.listaProjetos}>
        {projetosFiltrados.map(project => (
          <div key={project.title} className={styles.projeto}>
            <div className={styles.projectHeader}>
            <h2>{project.title}</h2>
            {project.siteLink ? (
              <div className={styles.buttonContainer}>
              <Image alt="Github" src={PlayIcon}
              width="32" height="32" />
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.siteLinkButton}
                >
                  Abrir Site
                </a>
                </div>
              ) : (
                <div className={styles.buttonContainer}>
                  <Image alt="Github" src={DisabledPlayIcon}
              width="32" height="32" />
                  <p className={styles.comingSoonText}>Em breve</p>
                </div>
              )}
              </div>
            <Image alt={`Imagem ilustrando o site ${project.title}`} src={project.imageUrl} width="512" />
            <p>{project.descricao}</p>
          </div>
        ))}
      </div>
      </section>
  );
}
