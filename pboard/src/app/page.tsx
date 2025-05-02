import Header from '@/components/header.tsx'

export default function Home() {
  return (
    <>
        <title>My Dashboard</title>
        <meta name='description' content='created with Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <main className='bg-gray-100 min-h-screen'>
            <Header />
        </main>
    </>
  );
}
