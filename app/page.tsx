import Form from './components/Form'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center relative">
      <h1 className="text-5xl font-bold text-center mt-8">Decimal to Binary Converter</h1>
      <Form />
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
    </main>
  );
}
