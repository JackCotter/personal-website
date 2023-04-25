import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { githubUtils } from './api/githubUtils'

const inter = Inter({ subsets: ['latin'] })
const octo = githubUtils.login();

const commits = githubUtils.getCommits("JackCotter", "Draw.io")
console.log(commits)

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack&apos;s Site</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className={`main page`}> Welcome to my website </div>
      </main>
    </>
  )
}
