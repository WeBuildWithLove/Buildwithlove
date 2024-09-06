import Layout from '@/layout'
import Hero from './Hero'
import PortfolioWorks from './PortfolioWorks'
import ElevateCard from '@/components/Home/ElevateCard'

const page = () => {
  return (
    <Layout>
        <Hero />
        <PortfolioWorks />
        <ElevateCard />
    </Layout>
  )
}

export default page