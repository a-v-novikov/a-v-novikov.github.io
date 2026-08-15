import { render } from 'preact'
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { Content } from './content/Content';
import { createRoot } from 'preact/compat/client';

function App() {
  return (
    <div id="app" class="p-6 h-full flex flex-col bg-[url(../assets/branch.svg)] bg-top bg-no-repeat bg-size-[100%_auto]">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

render(<App />, document.getElementById('root')!);
