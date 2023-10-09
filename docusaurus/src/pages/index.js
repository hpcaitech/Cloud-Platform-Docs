import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Landing from "@site/src/components/Landing";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ColossalAI Platform Documentation"
    >
      <main>
        <div className="min-w-screen min-h-screen">
          <Landing />
        </div>
      </main>
    </Layout>
  );
}
