import react from "react"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { GetStaticPaths, GetStaticProps } from 'next'
import css from '@styles/Home.module.scss'
import Head from 'next/head'

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  )
}

const Blog = ({ content, data }) => {
  const frontmatter = data

  return (
    <main className={css.Projectpage}>
      <Head>
          <title>{frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
      <ReactMarkdown escapeHtml={true} source={content} children={content} renderers={{ code: CodeBlock }}/>
    </main>
  )
}

export default Blog

Blog.getInitialProps = async (context) => {
  const { blog } = context.query
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../projects/${blog}.md`)
  const data = matter(content.default)

  return { ...data }
}
/*
export async function getStaticPaths() {
  // get the name of the md files
  const fs = require("fs");

  const path = require("path")

  const filesPath = path.join(process.cwd(),'/projects')

  const files = fs.readdirSync(filesPath, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));
  
  blogs.map(item => console.log(item.split('.').slice(0, -1).join('.')))

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((blog) => ({
    params: { blog :blog.split('.').slice(0, -1).join('.')},
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
*/