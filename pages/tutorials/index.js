import React from "react"
import Head from "next/head"
import matter from "gray-matter"
import Link from "next/link"
import path from "path"

const Index = ({ data}) => {
  const RealData = data.map((blog) => matter(blog))
  const ListItems = RealData.map((listItem) => listItem.data)

  return (
    <>
      <h1>My First Blog ✍ </h1>
      <div>
        <ul>
          {ListItems.map((blog, i) => (
            <li key={i}>
              <Link href={`/tutorials/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}



export async function getStaticProps() {
 
  const fs = require("fs")

  const path = require("path")

  const filesPath = path.join(process.cwd(),'/tutorials')

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