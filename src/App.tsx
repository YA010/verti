import Formcontent from "./formPage.tsx"
export default function App() {
  return (
    <main className="">
      <header className="flex h-24 bg-light-green">
        <img src="/logo.png" height={64} className="h-16 m-auto" />
      </header>
      <Formcontent/>
    </main>
  );
}
