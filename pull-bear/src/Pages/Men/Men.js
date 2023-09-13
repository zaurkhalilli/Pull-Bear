import React from 'react'
import App from '../../App'
import Layout from '../../Layout/Layout'
import Navbar from '../../Layout/Navbar/Navbar'
import Menjeans from '../../Components/MenJeans/Menjeans'
import Mencoats from '../../Components/MenCoats/Mencoats'
const Men = () => {
  return (
    <div>
        <Layout>
          <Menjeans/>
          <Mencoats/>
        </Layout>
    </div>
  )
}

export default Men
