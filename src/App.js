/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const noticeSectionStyle = css`
  display: flex;
  max-width: 1080px;
  margin: 1.4em auto;
  background-color: #c7f0e5;
  padding: 1em 2em;
  border-radius: 5px;
  border: 1px solid #41c780;
  width: 100%;

  span {
    color: grey;
  }
  a {
    color: grey;
  }
  strong {
    background: linear-gradient(to bottom, #93e6aa, #3fc775);
    color: white;
    border: #41c990;
    border-radius: 5px;
    padding: 2px 6px;
    font-size: small;
  }
`;

const headerHomeHeader = css`
  background-size: 100%;
  box-sizing: border-box;
`;

function App() {
  return (
    <>
      <section css={noticeSectionStyle}>
        <strong>NEW</strong>
        <span>
          Get the latest project updates, delivered right to your inbox!
          <a href="https://updates.verify.as/">Subscribe here →</a>
        </span>
      </section>
      <header css={headerHomeHeader}>
        <div>
          <div>
            <a href="https://verify.as/index.html">..."logo"</a>
            <span>PAYMENT</span>
          </div>
          <nav>
            <ul>
              <li>
                <a href=" ">Home</a>
              </li>
              <li>
                <a href=" ">How it Works</a>
              </li>
              <li>
                <a href=" ">Pricing</a>
              </li>
              <li>
                <a href=" ">Documentation</a>
              </li>
              <li>
                <a href=" ">CONTACT US</a>
              </li>
            </ul>
          </nav>
          <div>
            <h1>Instant bank payments.</h1>
            <p>Get paid directly to your bank account. No cards needed.</p>
            <div>
              <a href=" ">CONTACT US</a>
              <a href=" ">LEARN MORE</a>
            </div>
          </div>
        </div>
      </header>

      <main>MAIN</main>
      <footer>FOOTER</footer>
    </>
  );
}

export default App;
