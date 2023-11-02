import React from "react";
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Olá Mundo</h1>
      <div>
        <p>Paragrafo 1</p>
        <p>Paragrafo 2</p>
      </div>
    </Layout>
  )
}

export default IndexPage;

export const Head = () => <title>Index</title>