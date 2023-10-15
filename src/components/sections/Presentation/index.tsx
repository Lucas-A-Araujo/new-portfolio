import Image from 'next/image';
import Link from 'next/link';
import styles from './Presentation.module.css';

import GithubImg from '../../../../public/github.svg';


export function PresentationSection() {

  return (
    <section className={styles.intro} id="presentation">
            <div className={styles.info}>
                <h1>
                    Desenvolvedor Front-end
                </h1>
                <div>
                    <Link href="https://www.linkedin.com/in/lucas-alves-476b281aa" target="_blank">
                        <Image alt="Linkdin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            width="40" height="40" />
                    </Link>
                    <Link href="https://github.com/Lucas-A-Araujo">
                        <Image alt="Github" src={GithubImg}
                            width="40" height="40" />
                    </Link>
                </div>
            </div>
        </section>
  );
}
