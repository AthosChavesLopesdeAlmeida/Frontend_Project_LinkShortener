'use client'
import LinkShortener from "./components/linkShortener"

const Page = () => {
  return (
    <div className="w-screen h-screen bg-[#312F2F] gap-10 flex flex-col items-center justify-center">
      <h1 className="text-white text-xl font-bold">Encurtador de URL</h1>
      <LinkShortener/>
    </div>
  )
}

export default Page