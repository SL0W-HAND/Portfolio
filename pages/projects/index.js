import React from "react"
import matter from "gray-matter"
import css from '@styles/Home.module.scss'
import ProjectCard from "@components/ProjectCard/ProjectCard"

const Index = ({ data}) => {
  const RealData = data.map((blog) => matter(blog))
  const ListItems = RealData.map((listItem) => listItem.data)

  return (
    <main className={css.Projects}>
      <h1>Projects 💻 </h1>
      <section>
          {ListItems.map((blog, i) => (
                <ProjectCard key={i} date={blog.date} link={`/projects/${blog.slug}`} description={blog.description} title={blog.title} cover_image={blog.cover_image}></ProjectCard>
          ))}
      </section>
    </main>
  )
}



export async function getStaticProps() {
 
  const fs = require("fs")

  const path = require("path")

  const filesPath = path.join(process.cwd(),'/projects')

  const files = fs.readdirSync(filesPath, "utf-8")

  const blogs = files.filter((fn) => fn.endsWith(".md"))

  const data = blogs.map((blog) => {
    const path = `${filesPath}/${blog}`
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    })

    return rawContent
  })

  return {
    props: {
      data: data,
    },
  }
}

export default Index