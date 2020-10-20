import React from "react"
import styled from "styled-components"
import HeroSection from "../components/Hero"

import Layout from "../components/layout"
import Section from "../components/Section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Section
      title="About Me"
      description="STUDIO株式会社のコミュニティーマネージャーを行いつつ、 フリーランスのマーケターとしても活躍中。 オンラインでの情報発信も行いながら、実際に対面できるイベントを大事にしている。 STUDIOではワークショップやイベントの定期開催をしており、 『日本一のユーザー愛が強く、ユーザーとの距離が近いコミュニティー』形成を目指している。"
      social
    />
    <Section
      title="Works"
      // description="STUDIO株式会社のコミュニティーマネージャーを行いつつ、 フリーランスのマーケターとしても活躍中。 オンラインでの情報発信も行いながら、実際に対面できるイベントを大事にしている。 STUDIOではワークショップやイベントの定期開催をしており、 『日本一のユーザー愛が強く、ユーザーとの距離が近いコミュニティー』形成を目指している。"
    />
    <Section
      title="Skills"
      // description="STUDIO株式会社のコミュニティーマネージャーを行いつつ、 フリーランスのマーケターとしても活躍中。 オンラインでの情報発信も行いながら、実際に対面できるイベントを大事にしている。 STUDIOではワークショップやイベントの定期開催をしており、 『日本一のユーザー愛が強く、ユーザーとの距離が近いコミュニティー』形成を目指している。"
      skills
    />
  </Layout>
)

export default IndexPage
