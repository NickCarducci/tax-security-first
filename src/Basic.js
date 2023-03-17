import React from "react";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      onFactors: true,
      trigger: false,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.plaintiff = React.createRef();
    this.utility = React.createRef();
    this.cops = React.createRef();
  }
  componentDidMount = () => {
    this.handleScroll();
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
  };
  check = (pathname) => {
    if (pathname === "/plaintiff") {
      window.scroll(0, this.plaintiff.current.offsetTop);
    }
  };
  componentDidUpdate = (prevProps) => {
    const { pathname, basic } = this.props;
    if (
      this.props !== prevProps ||
      basic !== prevProps.basic ||
      pathname !== prevProps.pathname
    ) {
      this.check(pathname);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.starttime);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    return (
      <div
        style={{
          border: "1px solid rgb(200,200,200)",
          overflow: "hidden",
          //margin: "5px",
          fontFamily: "'Comfortaa', cursive",
          fontSize: "12px",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative",
          cursor: "pointer"
        }}
      >
        Doesn’t broad deflation beg for tax rate decreases?{space}
        <a
          //Is economic opportunity by price-skew access manipulation, usufructuary corpus regulation, or extra product duress exclusion inflationary?
          href="https://saverparty.quora.com/Are-there-any-reasons-why-universal-healthcare-is-bad-for-America-1"
        >
          In order for government debt to be constitutional,
          <h4 style={{ float: "right" }}>bankingisnot.biz</h4>should tax rates
          rise to cover preceding losses until prices deflate?
        </a>
        {space}Is a beneficial utility a substitute dynamic or deflationary
        technical good?
        {/*technical benefit utility */}
        <h4 style={{ float: "left", margin: "8px 10px" }}>thetaxparty.com</h4>
        <h3 style={{ margin: "4px 0px" }}>
          Reduce liabilities future and past; government and ssa benefactors to
          beneficiary by contractor context.
        </h3>
        <h4 style={{ margin: "4px 0px" }}>
          <a href="https://marginalism.uk">
            Is economic opportunity by price-skew access manipulation,
            usufructuary corpus regulation, or extra product duress exclusion
            inflationary?
          </a>
          {space}
          <i>
            Did personal debt come before probate court? Were there public lands
            when coinage was metal?
          </i>
        </h4>
        <i>
          I haven’t extrapolated mark to market bond value capital loss from
          current value, so I take the Fed remits interest at maturity, but
        </i>
        {space}
        <span
          style={{
            color: "grey",
            textDecoration: "line-through"
          }}
        >
          (a) is the (1) mark to market price being subpar not a larger factor
          to net losses than the (2) height of short term rates when the fed
          buys less treasuries because they are always buying less bonds while
          the private market covers to allow short term note and tbill rate
          rises? If the maturities weren’t being sold subpar, capital loss would
          make no operational loss. (b) If I’m right, is the resolution to buy
          short term or treat the dollar as a share of reserves and
          revenuedata.doi.gov, reduce debt by total to cash and make the
          government contractor accounts receivable for government debt
          contextual earmarks?
        </span>
        {space}[a]re the Federal Reserve’s earnings remittances due to the U.S.
        Treasury negative because they don’t have the money for bank deposits
        and reverse repo agreements or they are remitting interest at maturity
        on a mark to market subpar basis
        <span style={{ color: "firebrick" }}>
          /(In order for government debt to be constitutional, should tax rates
          rise to cover preceding losses until prices deflate?)
        </span>
        ?{space}
        <b>
          Are personal loan principals backed by a part of the borrower’s
          probationary estate or are uncollateralized loans worthless without a
          lien? Do lenders return debt service upon foreclosure
          <span style={{ color: "forestgreen" }}>
            /(Can they acclimate the future and the past{/*reduce */})
          </span>
          ? Do community property (vau.money:{space}
          <i style={{ color: "dodgerblue" }}>
            Did personal debt come before probate court?
          </i>
          ) probate states protect testamentary estate beneficiaries’ inheriting
          children, siblings, and a spouse from lien holders or personal
          creditors? Should probate
          <span style={{ color: "cornflowerblue" }}>
            /(government contractors' receivables)
          </span>
          {space}regard anything or context?
        </b>
        <h4>
          {/* <a href="https://www.ssa.gov/oact/ProgData/tsOps.html">
            <Cable
              style={{ width: "100%" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/8q8x8tw7rszq2q2/Screen%20Shot%202022-10-31%20at%208.58.03%20PM.png?raw=1"
              }
              float={"right"}
              title="tsOps - https://www.ssa.gov/oact/ProgData/tsOps.html"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            </a>*/}
        </h4>
        <div
          style={{
            position: "fixed", //salt bank vaults royalty stewardship
            right: "0px", //living commodities at the equator
            bottom: "0px",
            cursor: "pointer"
          }}
          //onClick={() => this.props.setBasic()}
        >
          <a href="https://multilevelcapital.com">multilevelcapital.com</a>
        </div>
      </div>
    );
  }
}

