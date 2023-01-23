/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const noticeSectionStyle = css`
  max-width: 1080px;
  margin: 1em auto;
  background-color: #c7f0e5;
  padding: 1em 2em;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #41c780;
  width: 100%;

  span {
    color: grey;
  }
  a {
    color: grey;
  }
`;

function App() {
  return (
    <div>
      <section css={noticeSectionStyle}>
        <strong>NEW</strong>
        <span>
          Get the latest project updates, delivered right to your inbox!
          <a href="https://updates.verify.as/">Subscribe here →</a>
        </span>
      </section>
      <header>
        <div>
          <div></div>
          <nav></nav>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
