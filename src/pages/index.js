import * as React from "react"
import HighlitTextLine1 from "../components/HighlitTextLine1"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>fuck</div>
      <div>
        Ciao a tutti<HighlitTextLine1 color="red">belli</HighlitTextLine1> e
        anche
        <HighlitTextLine1 color="red">brutti</HighlitTextLine1>
      </div>
    </Layout>
  )
}

export default IndexPage
