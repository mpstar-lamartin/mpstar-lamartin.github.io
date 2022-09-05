import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/blog"
                    >
                        Actualité de la classe
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
        >
            <HomepageHeader />
            <main><br></br>
                <center>
                    <details><summary>Emploi du temps</summary><iframe src={require('./edt.pdf').default} width="100%" height="900"></iframe></details>
                    <br></br>
                    <details><summary>Colloscope</summary><iframe src={require('./edt.pdf').default} width="100%" height="900"></iframe></details>
                </center>
            </main>
        </Layout>
    );
}
