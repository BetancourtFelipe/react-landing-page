import { css } from '@emotion/react';
import { ReactComponent as Buyer } from './buyer.svg';
import { ReactComponent as CheckMark } from './checkmark.svg';
/** @jsxImportSource @emotion/react */
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Fees } from './lower-fees.svg';
import { ReactComponent as NoCard } from './no-card-needed.svg';
import { ReactComponent as Seller } from './seller.svg';
import { ReactComponent as SimpleApi } from './simple-api.svg';

const headerNavigation = css`
  background-size: 100%;
  box-sizing: border-box;
  justify-content: space-between;
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
  padding: 8px 8px;
`;

const navigationLinkStyles = css`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: auto;

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
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1px;
    }
  }
`;

const contactGreenButtonStyles = css`
  background-color: #79ce6d;
`;

const navigationContactStyles = css`
  border: 1px solid #697675;
  padding: 1px 5px;
  margin: 2px;
  font-family: Nunito Sans;
`;

const headingStyles = css`
  display: inline-block;
  width: 100%;
  max-width: 1000px;
  margin: 40px 495px;
  padding: 10px 70px;
  h1 {
    font-size: 45px;
    color: #131628;
    padding-left: 35px;
  }
  p {
    font-size: 22px;
    color: #697576;
    padding-left: 8px;
  }
`;

const mainStyles = css`
  display: grid;
  grid-template-columns: 4fr 4fr;
  justify-content: space-between;
  gap: 150px;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin: 100px 300px;
  padding: 30px 180px;
`;

const greenContactSection = css`
  padding: 74px;
  background-color: #44c897;
`;

const footerContactLink = css`
  padding: 700px;
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
              <a href="https://verify.as/index.html">
                <Logo />
              </a>{' '}
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
          <div>
            <h1>Instant bank payments.</h1>
            <p>Get paid directly to your bank account. No cards needed.</p>
          </div>
          <div>
            <ul css={navigationLinkStyles}>
              <li css={navigationContactStyles}>
                <a href=" " css={contactGreenButtonStyles}>
                  CONTACT US
                </a>
              </li>
              <li css={navigationContactStyles}>
                <a href=" ">LEARN MORE</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div>
          <div css={mainStyles}>
            <section>
              <Seller />
              <h2>Sellers</h2>
              <p>
                <CheckMark />
                No transaction fees
                <br />
                <CheckMark />
                No chargebacks
                <br />
                <CheckMark />
                Simple API: one integration, all the banks
                <br />
              </p>
            </section>

            <section>
              <Buyer />
              <h2>Buyers</h2>
              <p>
                <CheckMark />
                No credit card needed
                <br />
                <CheckMark />
                One click checkout <br />
                <CheckMark />
                Discounts at select sellers
                <br />
              </p>
            </section>
          </div>
          <section>
            <a css={navigationContactStyles} href=" ">
              Get Started
            </a>
          </section>
          <div css={mainStyles}>
            <section>
              <h2>Preview</h2>
              <p>
                NEW Verify Payments is an embeddable payment form for desktop
                and mobile devices. It works within your site — customers can
                pay instantly, without being redirected away to complete the
                transaction.
              </p>
            </section>
          </div>
          <h3>SELLERS</h3>
          <div css={mainStyles}>
            <NoCard />
            <section>
              <h3>No Cards Needed</h3>
              <p>
                Credit cards have notoriously low penetration in the Middle East
                region, with 80% of consumers opting to pay with cash instead.
                Verify is digital cash; it is as good as getting paid in cash,
                but without having to handle the physical notes yourself.
              </p>
            </section>
            <section>
              <h3>Simple API</h3>
              <p>
                We've integrated with the largest retail banks in the UAE and
                Bahrain, so you don't have to. Just integrate with the Verify
                API once, and you'll get access to all of the financial
                institutions on the Verify network. What's more is, as more
                banks join the network, you'll automatically get access to them
                with no extra work!
              </p>
            </section>
            <SimpleApi />
            <Fees />
            <section>
              <h3>Lower fees</h3>
              <p>
                No sign up fees, monthly fees, currency exchange fees or
                settlement fees. You can sign up with Verify for absolutely
                free, and start accepting payments immediately. If you're an
                individual without a Trade License, you can still process up to
                AED100,000 per year with no additional requirements.
              </p>
            </section>
          </div>
          <section css={greenContactSection}>
            <a css={footerContactLink}>CONTACT US</a>
          </section>
        </div>
      </main>
      <footer>FOOTER</footer>
    </>
  );
}

export default App;
