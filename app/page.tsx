import Form from './components/Form'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mt-8">Decimal to Binary Converter</h1>
      <Form />
    </main>
  );
}
