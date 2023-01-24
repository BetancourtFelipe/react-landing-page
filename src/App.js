/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headerNavigation = css`
  background-size: 100%;
  box-sizing: border-box;
`;

const noticeSectionStyle = css`
  display: flex;
  max-width: 1080px;
  margin: 1em auto;
  background-color: #c7f0e5;
  padding: 16px 40px;
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

const highlightedTextStyles = css`
  color: #71e8df;
  font-weight: 700;
  background: linear-gradient(to bottom, #93e6aa, #3fc775);
  color: white;
  border: #41c990;
  border-radius: 5px;
  padding: 2px 6px;
  font-size: small;
`;

const wrapperStyles = css`
  max-width: 1248px;
  margin: auto;
`;

const navigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 8px;
`;

const navigationMenuStyles = css`
  list-style-type: none;
  display: flex;
  gap: 12px;
  margin: 0;
  li {
    border-bottom: 2px solid transparent;

    :hover {
      text-decoration: none;
      border-bottom: 2px solid #5a67d8;

      > a {
        color: #5a67d8;
      }
    }
    > a {
      text-decoration: none;
      color: #2d3748;
      font-weight: 600;
      font-size: 1rem;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

function App() {
  return (
    <>
      <header css={headerNavigation}>
        <section css={noticeSectionStyle}>
          <strong css={highlightedTextStyles}>NEW</strong>
          <span>
            Get the latest project updates, delivered right to your inbox!
            <a href="https://updates.verify.as/">Subscribe here →</a>
          </span>
        </section>
        <div css={wrapperStyles}>
          <div css={navigationStyles}>
            <div>
              <a href="https://verify.as/index.html">..."logo"</a>
              <p>PAYMENT</p>
            </div>
            <nav css={navigationMenuStyles}>
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
          </div>
        </div>
        <div>
          <h1>Instant bank payments.</h1>
          <p>Get paid directly to your bank account. No cards needed.</p>
          <div>
            <a href=" ">CONTACT US</a>
            <a href=" ">LEARN MORE</a>
          </div>
        </div>
      </header>

      <main>MAIN</main>
      <footer>FOOTER</footer>
    </>
  );
}

export default App;
