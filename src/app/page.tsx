import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-16">
      <div className="flex flex-col place-items-center">
        <Image
          className="relative"
          src="/os.webp"
          alt="Onchain Squad"
          width={600}
          height={600}
          quality={100}
          priority
          unoptimized
        />

        <form action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4Mzk2NTA3LCJhZGRyZXNzX2Jvb2tfaWQiOjQ4MzgwNywibGFuZyI6ImVuIn0=" method="post" target='_blank'>
          <div className='flex flex-col text-neutral-content items-center text-center gap-8'>
            <h1 className='text-2xl font-bold'>
              Soon™️
            </h1>

            <div className='flex flex-col gap-4'>
              <input className='input input-bordered input-sm w-72' name="email" type="email" placeholder='Enter your email..' required />
              <input type="hidden" name="sender" value="wesley@useweb3.xyz" />
              <input type="hidden" name="name" value="" />
              <button className='btn btn-primary btn-sm w-72'>Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
