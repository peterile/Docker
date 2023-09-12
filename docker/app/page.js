import Image from 'next/image'

export default function Home() {
  return (
        <main className="flex flex-col items-center justify-between p-24">
          <h1 className="text-2xl">Our Class Introduction</h1>
          <h2 style={{ fontSize: "2.5rem" }}> Welcome to Docker</h2>
          <img
            src="https://www.loctechng.com/images/about12.jpg"
            alt="Mr Lawson"
            width={200}
            height={200}
          />
        </main>
  )
}
