import { render } from 'preact'
import { Header } from './common/Header.tsx';
import { Footer } from './common/Footer.tsx';
import { Content } from './content/Content.tsx';

function App() {
  return (
    <div id="app" class="p-6 h-full flex flex-col bg-[url(/assets/branch.svg)] bg-top bg-no-repeat bg-size-[100%_auto]">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

render(<App />, document.getElementById('root')!);
