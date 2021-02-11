import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'subgraphs',
    imageUrl: 'img/triangle.svg',
    description: (
      <>
        An index of all Foundation market data and information that is easily accessible via a GraphQL API.
      </>
    ),
    linkUrl: 'docs/subgraphs'
  },
  {
    title: 'contracts',
    imageUrl: 'img/circle.svg',
    description: (
      <>
        Foundation’s smart contracts on the Ethereum blockchain.
      </>
    ),
    linkUrl: 'docs/contracts'
  },
  {
    title: 'npm package',
    imageUrl: 'img/square.svg',
    description: (
      <>
        A lightweight package giving you everything you need to start building experiences on top of Foundation.
      </>
    ),
    linkUrl: ''
  },
];

function Feature({imageUrl, title, description, linkUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  // TODO: Add 'coming soon' label conditional on title
  // for contracts and npm package for now
  return (
      <div className={clsx('col col--4', styles.feature)}>
            <Link to={useBaseUrl(linkUrl)}>

        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        </Link>
      </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Docs Home`}
      description="Foundation Docs">
      <header className={clsx('hero')}>
        <div className="container">
          <h1 className="hero__title">Our community is creating the building blocks of the new creative economy. Join us.</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              get started
            </Link>
          </div>
        </div> 
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
