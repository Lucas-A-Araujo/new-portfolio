//import Header from '../components/Header';
import { Header } from '@/components/Header';
import { PresentationSection } from '@/components/sections/Presentation';
import { ProjectsSection } from '@/components/sections/projects';
//import PortfolioSection from '../components/PortfolioSection';

function Home() {
  return (
    <div>
      <Header />
      <PresentationSection />
      <ProjectsSection />
      {/* <section className="intro">
        <h1>Seu Nome - Desenvolvedor Frontend</h1>
        <p>Seu resumo ou introdução pessoal.</p>
      </section> */}
    </div>
  );
}

export default Home;
