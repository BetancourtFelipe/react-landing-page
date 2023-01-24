/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headerNavigation = css`
  background-size: 100%;
  box-sizing: border-box;
`;

const noticeSectionStyles = css`
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

const navigationLinkStyles = css`
  list-style-type: none;
  display: flex;
  gap: 9px;
  margin: 0;
  li {
    :hover {
      > a {
        color: #4bc16b;
      }
    }
    > a {
      text-decoration: none;
      color: #2d3748;
      font-weight: 400;
      font-size: 1rem;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const navigationContactStyles = css`
  border: 1px solid #697675;
`;

const headingStyles = css`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 30px;
`;

function App() {
  return (
    <>
      <header css={headerNavigation}>
        <section css={noticeSectionStyles}>
          <strong css={highlightedTextStyles}>NEW</strong>
          <span>
            Get the latest project updates, delivered right to your inbox!
            <a href="https://updates.verify.as/">Subscribe here →</a>
          </span>
        </section>
        <div css={wrapperStyles}>
          <div css={navigationStyles}>
            <div css={navigationStyles}>
              <a href="https://verify.as/index.html">..."logo"</a>{' '}
              <p>PAYMENT</p>
            </div>
            <nav>
              <ul css={navigationLinkStyles}>
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
                <li css={navigationContactStyles}>
                  <a href=" ">CONTACT US</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div css={headingStyles}>
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
