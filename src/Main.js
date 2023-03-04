import React from "react";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
import Cable from "./Dropwire";

class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      //openAbomunista: true,
      //measure: "closedanarchymorals",
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
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
  check = (pathname) => {
    if (["/socialism", "/classes", "/class"].includes(pathname)) {
      window.scroll(0, this.props.socialism.current.offsetTop);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.starttime);
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
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
    //console.log(this.props.pathname);
    const laborpower = {
      transition: ".3s ease-in",
      fontSize: this.state.measure === "closedlaborpower" ? "" : 0
    };
    const globalpower = {
      transition: ".3s ease-in",
      fontSize: this.state.measure === "closedanarchymorals" ? "" : 0
    }; //a nice racist, 77 wabc
    const chastitycourt = {
      transition: ".3s ease-in",
      fontSize: this.state.measure === "closedchastitycourt" ? "" : 0
    };
    return (
      <div
        onMouseEnter={() => this.setState({ hoveringNatureControl: false })}
        style={{
          fontFamily: "'Comfortaa', cursive",
          border: "1px solid rgb(200,200,200)",
          overflow: "hidden",
          //margin: "5px",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <div
          style={{
            cursor: "pointer",
            position: "fixed",
            right: "0px",
            bottom: "0px"
          }}
          onClick={() => this.props.setBasic()}
        >
          less
          {/**cardiac problems: Is age not indicative towards death in derivative over blood pressure?
           Was Karl Marx murdered for complaining about social credit?*/}
        </div>
        real inflation velocity growth is giving away money, non-deflationary
        employment, private investment, any thing. Marginal benefit (variable)
        is marginal revenue (
        <a href="https://www.quora.com/In-economics-is-a-benefit-not-rent-as-well-as-income">
          constant
        </a>
        ) when hour is cost and supply complementary by{space}
        <a href="https://substitutivesupply.quora.com/Isn-t-the-geometric-mean-of-supply-substitutive-as-it-complements-demand">
          whole unit
        </a>
        {space}geometric mean.{space}
        <i>Isn't rent income by machine revenue?</i>
        {space}If ground rent is required for living as well, isn’t rent income
        as well as socially necessary labor?
        <br />
        <br />
        <div style={{ color: "grey", paddingLeft: "10px" }}>
          geometric mean value of the proportionate individual
          <br />
          <br />
          <div style={{ color: "grey", paddingLeft: "10px" }}>
            &bull;{space}
            <a style={{ color: "grey" }} href="https://realvelocity.asia">
              real inflation
            </a>
            {space} =={space}
            <span style={{ color: "darkgreen" }}>profits</span>
            {space}&{space}
            <a
              style={{ color: "grey" }}
              href="https://truncatedwholesaletax.com"
            >
              cost to revenue
            </a>
            <br />(
            <a style={{ color: "grey" }} href="https://commie.dev/banking">
              normal collateral labor
            </a>{" "}
            public{space}
            <a
              style={{ color: "grey" }}
              href="https://thumbprint.quora.com/Isn-t-representative-affinity-score-too-broad-specific-for-trademarking"
            >
              domain
            </a>
            {space}: interest inflation loitering{space}
            <i>obj.</i>
            {space}
            <a href="https://www.quora.com/Are-insurance-companies-profits-illegal/answer/Nick-Carducci">
              right
            </a>
            {space}to own)
            <br />
            <br />
            &bull;{space}
            <a style={{ color: "grey" }} href="https://froth.app">
              national accounting:
            </a>
            {space}private{space}
            <a style={{ color: "grey" }} href="https://vaults.biz">
              investment
            </a>
            {space}-{space}
            <span style={{ color: "cornflowerblue" }}>
              consumption expenditues
            </span>
            {space}-{space}
            <a style={{ color: "grey" }} href="https://commie.dev/taxes">
              government spending
            </a>
            <br />
            <br />
            &bull;{space}
            <span style={{ color: "firebrick" }}>
              net exports is not proper.
            </span>
            {space}
            <a style={{ color: "grey" }} href="https://2024nj.oil">
              fdi + imports
            </a>
            {space}helps the developed{space}
            <a style={{ color: "grey" }} href="https://saverparty.xyz/global">
              country
            </a>
            .
            <br />
            <br />
            &bull;{space}one man's non-deflationary job is another's real
            inflation.
            <br />
            <br />
            &nbsp; &nbsp; &bull;{space}one man’s extraordinary profit another’s
            socially necessary labor
            <br />
            <br />
            &bull;{space}treasury valued currency; metal circulative premium
            <br />
            <div
              style={{
                fontSize: "12px",
                backgroundColor: "gainsboro",
                color: "grey",
                padding: "10px",
                borderLeft: "2px solid cornflowerblue"
              }}
            >
              It would evidently be a great mistake to suppose that the capital
              of a community consists solely of its money. The merchant, the
              manufacturer, the cultivator, commonly have the least considerable
              portion of the value composing their capital invested in the form
              of money; nay, the more active their concern is, the smaller is
              their relative proportion of their capital so vested to the
              iesidue. The funds of the merchant are placed out in goods on
              their transit by land or water, or warehoused in different
              directions: the capital of the manufacturer chiefly consists of
              the raw material in different stages of progress, of tools,
              implements, and necessaries for his workmen: while that of the
              cultivator is vested in farming buildings, live stock, fences and
              enclosures. They all studiously avoid burthening themselves with
              more money than is sufficient for current use.
              <br />
              <br />
              We shall see, by-and-by, how capital, which is subject to a
              continual wear and consumption in the process of production, is
              continually replaced by the very operation of production; or
              rather, how its value, when destroyed under one form, reappears
              under another.
              <br />
              <br />
              At present it is enough to have a distinct conception, that,
              without it, industry could produce nothing. Capital must work, as
              it were, in concert with industry; and this concurrence is what I
              call the productive agency of capital.
            </div>
          </div>
          <h4>
            Why do economists consider both capital and property to be durable
            goods? Shouldn’t property pertain to substitutiveness and capital,
            assets already?
          </h4>
          Doesn’t private property prohibit individual liberty?{space}
          <i>
            Don’t capitalists use durable goods for capital and/or property to
            obfuscate labor and extensible machine capital income?
          </i>
          <div
            style={{
              fontSize: "12px",
              backgroundColor: "gainsboro",
              color: "grey",
              padding: "10px",
              borderLeft: "2px solid cornflowerblue"
            }}
          >
            DUGALD STEWART, however, is the first inquirer who has taught us to
            think and reason with accuracy on this subject, and it is to his
            observations on the Right of Property, contained in the supplement
            to the chapter,{space}
            <i>Of Justice</i>, in his work on the{space}
            <span style={{ textDecoration: "underline" }}>
              Philosophy of the Active and Moral Powers of Man
            </span>
            {space}that we must refer the reader who is desirous of possessing
            just and unanswerable arguments for the true foundations on which
            property rests. We must here content ourselves with extracting a few
            passages, which will exhibit this illustrious philosopher's views of
            the origin of the acquisition of property, which he traces to two
            distinct sources.
            <br />
            <div
              style={{
                backgroundColor: "white",
                color: "grey",
                padding: "10px",
                borderLeft: "2px solid cornflowerblue"
              }}
            >
              Is it to be enough to set foot on a plot of common ground, in
              order to be able to call yourself at once the master of it? Is it
              to be enough that a man has the strength to expel others{space}
              <a href="https://www.marxists.org/reference/subject/economics/rousseau/social-contract/ch01.htm#009">
                for a moment, in order
              </a>
              {space}to establish his right to prevent them from ever returning?
              How can a man or a people seize an immense territory and keep it
              from the rest of the world except by a punishable usurpation,
              since all others are being robbed, by such an act, of the place of
              habitation and the means of subsistence which nature gave them in
              common?
            </div>
            <div
              style={{
                backgroundColor: "gainsboro",
                color: "grey",
                padding: "10px",
                borderLeft: "2px solid cornflowerblue"
              }}
            >
              <i>
                It is necessary to distinguish carefully the complete right of
                {space}
                <a href="https://commie.dev/props">property</a>, which is
                founded on labour, from the transient right of possession which
                is acquired by mere priority of occupancy; thus, before the
                appropriation of land, if any individual had occupied a
                particular spot, for repose or shade, it would have been unjust
                to deprive him of possession of it. This, however, was only a
                transient right. The spot of ground would again become common,
                the moment the occupier had left it; that is, the right of
                possession would remain no longer than the act of possession.
                Cicero illustrates this happily by the similitude of a theatre.
                'Quemadmodum theatrum, cum commune sit, recte tamen dici potest
                ejus esse cum locum quem quisque occuparit.' The general
                conclusions which I deduce are these:
                <br />
                <div
                  style={{
                    backgroundColor: "gainsboro",
                    color: "grey",
                    padding: "10px",
                    borderLeft: "2px solid cornflowerblue"
                  }}
                >
                  1. That in every state of society labour, wherever it is
                  exerted, is understood to found a right of property.
                  <br />
                  2. That, according to natural law, labour is the only original
                  way of acquiring property.
                  <br />
                  3. That, according to natural law, mere occupancy founds only
                  a right of possession; and that, whenever it founds a complete
                  right of property, it owes its force to positive institutions.
                </div>
              </i>
            </div>
            After premising these leading propositions, he proceeds with what he
            terms a slight historical sketch of the different systems respecting
            the origin of property, from which we have only room to copy the
            following passage, which, however, contains this eminent author's
            views of the right of property, as recognised by the law of nature;
            and the right of property, as created by the municipal regulations,
            and demonstrating the futility of the attempts hitherto made to
            resolve all the different phenomena into one general principle.
            <br />
            <div
              style={{
                backgroundColor: "gainsboro",
                color: "grey",
                padding: "10px",
                borderLeft: "2px solid cornflowerblue"
              }}
            >
              <i>
                In such a state of things as that with which we are connected,
                the right of property must be understood to derive its origin
                from two distinct sources; the one is, that natural sentiment of
                the mind which establishes a moral connexion between labour and
                an exclusive enjoyment of the fruits of it; the other is the
                municipal institutions of the country where we live. These
                institutions everywhere take rise partly from ideas of natural
                justice and partly (perhaps chiefly) from ideas of supposed
                utility, - two principles which, when properly understood, are,
                I believe, always in harmony with each other, and which it ought
                to be the great aim of every legislator to reconcile to the
                utmost of his power. Among those questions, however, which fall
                under the cognizance of positive laws, there are many on which
                natural justice is entirely silent, and which, of consequence,
                inay be discussed on principles of utility solely.
                <br />
                <br />
                Such are most of the question concerning the regulation of the
                succession to a man's property after his death; of some of which
                it perhaps may be found that the determination ought to vary
                with the circumstances of the society, and which have certainly,
                in fact, been frequently determined by the caprice of the
                legislator, or by some principle ultimately resolvable into an
                accidental association of ideas. Indeed, various cases may be
                supposed in which it is not only useful, but necessary, that a
                rule should be fixed; while, at the same time, neither justice
                nor utility seem to be much interested in the particular
                decision.
              </i>
            </div>
            <br />
            Adam Smith has asserted, that the security afforded to property by
            the law. of England has more than counteracted the repeated faults
            and blunders of its government. It may be doubted, whether he would
            now adhere to that opinion. The industrious faculties are, of all
            kinds of property, the least questionable; being derived directly
            either from nature, or from personal assiduity. The property in them
            is of higher pretensions than that of the land, which may generally
            be traced up to an act of spoliation; for it is hardly possible to
            show an instance, in which its ownership has been legitimately
            transmitted from the first occupancy. It ranks higher than the right
            of the capitalist also; for even taking it for granted, that this
            latter has been acquired without any spoliation whatever, and by the
            gradual accumulations of ages, yet the succession to it could not
            have been established without the aid of legislation, which aid may
            have been granted on conditions. Yet, sacred as the property in the
            faculties of industry is, it is constantly infringed upon, not only
            in the flagrant abuse of personal slavery, but in many other points
            of more frequent occurrence.
            <div
              style={{
                backgroundColor: "gainsboro",
                color: "grey",
                padding: "10px",
                borderLeft: "2px solid cornflowerblue"
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  padding: "10px",
                  borderLeft: "2px solid cornflowerblue"
                }}
              >
                No (you’re right, the machine has no{space}
                <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/slavery-convention#article-1">
                  ownership rights
                </a>
                ), and this is getting personal/
                <i>
                  I have to write my own thoughts here because I diagnose{space}
                  <a href="https://www.google.com/search?btnG=Google+Search%21&as_sitesearch=www.marxists.org%2Farchive%2Fmarx%2F&as_epq=Social+capital">
                    social capital
                  </a>
                  {space}upon{space}
                  <a href="https://landlordliquidity.quora.com">
                    implausible use
                  </a>
                </i>
                , that is expiry (commodity) or rollover (Padrone). “Mechanism
                design” (
                <a href="https://economics.stackexchange.com/questions/25921/are-direct-mechanisms-always-truthful">
                  game theory
                </a>
                ) processes{space}
                <a href="https://virtualid.quora.com/Would-you-trade-options-if-you-knew-brokerages-sold-your-data">
                  honest
                </a>
                {space}and direct rules, so I Say{space}
                <a href="https://book.com.co">game-made</a>
                {space}risk is total (market) budget constraint
                (microeconomics), to which to “be comped” means to get marginal
                cost to revenue.{space}
                <a href="https://mattbruenig.com/2012/11/26/proudhon-hilariously-slamming-say/">
                  Noice
                </a>
                .
                <h3 style={{ margin: "4px 0px" }}>
                  <a href="https://commie.dev">commie.dev</a>
                </h3>
              </div>
              Who is entitled to the rent of the land? The producer of the land,
              without doubt. Who made the land? God. Then, proprietor,{space}
              <a href="https://www.quora.com/What-are-the-signs-that-something-is-actually-free-market-capitalism-at-work-and-not-cronyism-masquerading-as-capitalism/answer/Nick-Carducci">
                retire
              </a>
              !
            </div>
            A government is guilty of an invasion upon it, when it appropriates
            to itself a particular branch of industry, the business of exchange
            and brokerage for example; or when it sells the exclusive privilege
            of conducting it. It is still a greater violation to authorize a
            gendarme, commissary of police, or judge, to arrest and detain
            individuals at discretion, on the plea of public safety or security
            to the constituted authorities; thus depriving the individual of the
            fair and reasonable certainty of having his time and faculties at
            his own disposal, and of being able to complete what he may begin
            upon. What robber or despoiler could commit a more atrocious act of
            invasion upon the public security, certain as he is of being
            speedily put down, and counteracted by private as well as public
            opposition Probably, also, were it not for maritime wars,
            originating, sometimes in puerile vanity, and sometimes in national
            errors of self-interest, commerce would be the best purveyor of
            timber for ship-building; so that, in reality, the abuse of the
            interference of public authority, in respect to the growth of
            priyate timber, is only a consequence of a previous abuse of a more
            destructive and less excusable character.
          </div>
          <div
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "10px"
            }}
          >
            Commie may agree that Jevons would win in a pie eating contest and I
            dream of a society where I would be guillotined as a conservative.
            (Andreas Svensson quoting Proudhon) Socialists begrudge their
            non-deflationary{space}
            <a href="https://commie.dev">jobbery</a>
            {space}(Auberon Herbert) loss with unemployment benefits and
            capitalist profits with (non-developmentally) disabled nor injured
            social security. Kids should be free to work from nine and without
            property tax is clearly part of the United leftist front I hear
            about
          </div>
          <h4 style={{ margin: "4px 0px" }}>
            Doesn’t capital happen during and/or after the properties of
            industrial production?{space}
            {/**Don’t new businesses have a higher propensity to be investigated for insider trading? */}
          </h4>
          This real inflation is called the technology guild in our lexicon. The
          merchant and manufacturers are the most malleable in this variable
          capital.{space}
          <i>Deflation on loan.</i>
          <div
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "10px"
            }}
          >
            The contests about wages in Manufacture, pre-suppose manufacture,
            and are in no sense directed against its existence. The{space}
            <a href="https://www.marxists.org/archive/marx/works/1867-c1/ch15.htm#S5">
              opposition against the establishment of new manufactures
            </a>
            , proceeds from the guilds and privileged towns, not from the
            workpeople. …Its last words are: corporate guilds for manufacture;
            patriarchal relations in agriculture. …The money capital formed by
            means of usury and commerce was prevented from turning into
            industrial capital, in the country by the feudal constitution, in
            the towns by the guild organisation.
            <br />
            <br />
            For one thing, by keeping secrets in trade if the market is at a
            great distance from those who supply it, that is, by{space}
            <a href="https://www.marxists.org/archive/marx/works/1869/letters/69_11_29-abs.htm#a">
              concealing a price change
            </a>
            , its rise above the natural level [of fixed/constant no-more
            deflationary tech].
            <div
              style={{
                backgroundColor: "white",
                color: "grey",
                padding: "10px"
              }}
            >
              What produces a man's profit in the course of affairs within an
              unhampered market society is not his fellow citizen's plight and
              distress, but the fact that he alleviates or entirely removes what
              causes his fellow citizen's feeling of uneasiness. What hurts the
              sick is the plague, not the physician who treats the disease. The
              doctor's gain is not an outcome of the epidemics, but of the aid
              he hives to those affected. The ultimate source of profits is
              always the foresight of future conditions. Those who succeeded
              better than others in anticipating [p. 665] future events and in
              adjusting their activities to the future state of the market, reap
              profits because they are in a position to satisfy the most urgent
              needs of the public. The profits of those who have produced goods
              and services for which the buyers scramble are not the source of
              the losses of those who have brought to the market commodities in
              the purchase of which the public is not prepared to pay the full
              amount of production costs expended. These losses are caused by
              the lack of insight displayed in anticipating the future state of
              the market and the demand of the consumers. (Ludwig von Mises,
              {space}
              <a href="https://mises.org/library/human-action-0/html/pp/844">
                Human Action 1.4.24
              </a>
              )
            </div>
          </div>
          Service work is how the aristocracy becomes the bourgeoisie, albeit
          perhaps begrudgingly, however you’d not know it in the initial throws
          of opulence until globalization deludes our conditioning of growth to
          {space}
          <a href="https://leisuretoprefer.com/">leisure</a>.
          <div
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "10px"
            }}
          >
            Just as industrial capital realises only such profits as already
            exist in the value of commodities as surplus-value, so merchant's
            capital realises profits only because the entire surplus-value, or
            profit, has not as yet been fully realised in the price charged for
            the commodities by the industrial capitalist. …Merchant’s capital,
            therefore, participates in{space}
            <a href="https://www.marxists.org/archive/marx/works/1894-c3/ch17.htm">
              levelling surplus-value to average profit
            </a>
            , although it does not take part in its production.
          </div>
          <div
            style={{
              fontSize: "12px",
              backgroundColor: "cadetblue",
              color: "white",
              padding: "10px"
            }}
          >
            <div
              style={{
                borderLeft: "2px solid white",
                backgroundColor: "cornflowerblue",
                color: "white",
                padding: "10px"
              }}
            >
              On the other hand the supply must constantly be renewed, because
              it is
              {space}
              <a href="https://www.marxists.org/archive/marx/works/1885-c2/ch06.htm#1.3">
                constantly being drawn on
              </a>
              . This renewal cannot come from anywhere in the last instance
              except from production, from a supply of commodities. It is
              immaterial whether this comes from abroad or not. …With the
              development of commodity exchange between different national
              spheres of circulation, the function{space}
              <a href="https://www.marxists.org/archive/marx/works/1859/critique-pol-economy/ch02_3b.htm">
                which world money fulfils as means of payment for settling
              </a>
              {space}international balances develops also. …As money develops
              into international money, so the commodity-owner becomes a
              cosmopolitan. The cosmopolitan relations of men to one another
              originally comprise only their relations as commodity-owners.
              Commodities as such are indifferent to all religious, political,
              national and linguistic barriers. Their universal language is
              price and their common bond is money. But together with the
              development of international money as against national coins,
              there develops the commodity-owner's cosmopolitanism, a cult of
              practical reason, in opposition to the traditional religious,
              national and other prejudices which impede the metabolic process
              of mankind
            </div>
            <br />
            <div
              style={{
                backgroundColor: "gainsboro",
                color: "grey", //Is regularity in elections good enough?
                padding: "10px",
                borderLeft: "2px solid orange"
              }}
            >
              Sometimes the public maintains establishments of productive
              industry for instance, the porcelain manufacture of Sevres, the
              Gobelin tapestry, the salt-works of Lorraine and of the Jura, & c,
              in France. When concerns of this kind bring more than their
              expenditure, which is but rarely the case, they furnish part of
              the national revenue, and must by no means be classed among the
              items of national charge. -{space}
              <a href="mailto:sayists@icloud.com">r/sayists</a>
            </div>
            Isn’t durable good electronic funds tax duty-free anything and
            especially paycheck to paycheck perishables.
            <br />
            Isn't an international legal institution declarative of a
            prosecution from a default war crime?
            <br />
            <br />
            Economists measure recessions by real GDP growth, which would be
            null but for shrinkflation by survey, cost to revenue employee
            benefits and general layoffs.
          </div>
          <br />
          If you call yourself anarchocommunist you are communist primarily with
          an anarchy Adjective.{space}
          <i>
            This means any anarchism is abrogated to befit your interests in
            accordance with theanarchistlibrary.org
          </i>
          {space}
          publications.{space}
          <b>
            <i>Kevin Carson, Robert Graham, and Auberon Herbert</i>
            {space}have spoken about the Anarchist Treatise with the State
          </b>
          {space}that is{space}
          <a href="https://commie.dev/banking">communism</a>.
          <br />
          <div
            ref={this.props.socialism}
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "10px"
            }}
          >
            True socialism, which claims to be based on “science”, is primarily
            another esoteric science;{space}
            <i>
              its theoretical literature is intended only for those who are
              initiated into the mysteries of the “thinking mind”. But it has an
              exoteric literature as well; the very fact that it is concerned
              with social, exoteric relations means that it must carry on some
              form of propaganda. In this exoteric literature it no longer
              appeals to the German “thinking mind” but to the German
              “sentiment”.
            </i>
            {space}This is all the easier since true socialism, which is no
            longer concerned with real human beings but with “Man”, has lost all
            revolutionary enthusiasm and proclaims instead the universal love of
            mankind. It turns as a result not to the Proletarians but to the two
            most numerous classes of men in Germany, to the petty bourgeoisie
            with its philanthropic illusions and to the ideologists of this very
            same petty bourgeoisie.
            <br />
            They innocently take on{space}
            <a href="https://www.marxists.org/archive/marx/works/1845/german-ideology/ch04a.htm">
              trust (the illusion), cherished by some of these literary party
              representatives, that it is a question of the “most reasonable”
              social order
            </a>
            {space}
            and not the needs of a particular class and a particular time.
          </div>
          Transformative justice is to suspend disutility as the objective rule,
          as what is lost.
          <div
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "10px"
            }}
          >
            I hope to get my Office of the Comptroller of the Currency{space}
            <span
              style={{
                textDecoration: "line-through"
              }}
            >
              charter
            </span>
            {space}(supplier
            {space /**local parties fetter, audit node address data */}
            <a href="https://www.banknet.gov/register/default.aspx">
              of information
            </a>
            ) application back{space}
            <a href="https://www.law.cornell.edu/cfr/text/12/5.20">this week</a>
            {space}so I can alpha test transaction fee stood banking
            (vau.money), still on the
            {space}
            <a href="https://marginalism.uk/cops">backs</a>
            {space}of MasterCard and Digital Ocean (hibit.cc) though. Whatever
            is intractable is not extractable, as a pyramid scheme non-ponzi
            would otherwise be. Equal (operational) measure (and game-made risk)
            is Hadith, I press. would like everyones’ thoughts on pipe and
            sunnah on industrial diversity in capital return, I would hope to
            find. A sense of random sampling in a jury, if you will
          </div>
          Material duty to the public good stakeholder stewardship.
          <div
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "10px"
            }}
          >
            Slavery is the status or condition of a person over whom any or all
            of the powers attaching to the right of ownership are exercised.
          </div>
          <br />
          r/Anarchy101 •Posted by u/Snipercow78:{space}
          <i>A Marxist argument towards anarchism</i>
          {space}Hi, I was wondering about how you would respond to certain
          Marxist arguments against anarchy Such as this one. Fredrick Engels
          argues against Anarchism on the basis that authority is needed to
          carry out a revolution against capitalism and the organization of
          society. How would an anarchist respond to this?
          <br />
          <br />
          Sup gang. Anarchy is
          {space}
          <a href="https://theanarchistlibrary.org/library/william-gillis-anti-engels-or-anti-anti-duhring-aktion?v=1636526185#toc9">
            economic
          </a>
          . *As technology.*
          <br />
          {/**"experimental not spiritual of atomic theory", "indigeonous ways of knowing" */}
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            Combatting power requires combating dishonesty and various
            impediments to the sharing, flow, and processing of information more
            generally.
          </div>
          <br />
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            Any specific individual anti-abuser partisan might get crushed,
            jumped, or run out, but the overall strategy wins.{space}
            <i>
              Sacrificing for one another can grow from a few individuals – or
              even one – into a hegemonic strategy.
            </i>
          </div>
          <br />
          Founders embrace modicum agitation{space}
          <i>
            nearly at all{space}
            <b>socially-borne</b>
            {space}
            costs to themselves
          </i>
          . This doesn’t mean the state is required to tamper this calamity,
          because{space}
          <a href="https://www.academia.edu/43983270/Quiescence_of_American_Citizenry_over_Political_Inequality_Rebellion_by_the_Internet">
            we have the internet
          </a>
          . Surely capitalism as contractual tension, investment labor shorting
          housing labor is not the only social-arc to assuage.
          <hr />
          I’m not sure where this started from, potentially with 2020 *young*
          (?) republicans no like state repressive power on masks{space}
          <a href="https://reddit.com/r/2020haters">and the like</a>.{space}
          <a href="https://www.quora.com/unanswered/What-s-the-history-on-the-Grand-Old-Party-and-the-Communists-in-America">
            Anyone know the history on the Grand Old Party and the Communists in
            America?
          </a>
          . Anyway,{space}
          <i>this is a pattern:</i>
          {space}
          <a href="https://draintheswamp.quora.com/Wouldn-t-you-prefer-to-save-money-over-America">
            Save
          </a>
          {space}
          America =={space}
          <a href="https://revenuedata.doi.gov">Revenue Data</a>
          {space}Department of the
          {space}
          <a href="https://draintheswamp.quora.com/Wouldn-t-abolishing-the-Bureau-of-Land-Management-actually-save-money-in-national-accounting-terms-even-though-it-makes">
            Interior
          </a>
          {space}
          Bureau of Land Management UT NM WY{space}
          <a href="https://2024nj.com/oil">leases</a>. This is “why” we have QE.
          So unless Trump wants to stop this profit (the cause of real economic
          growth at no deflation nor equality commensurate gain), he is not
          commie.{space}
          <i>He is a fish!</i>
          <br />
          <br />
          This tort is best met with a quote from Proudhon (1841) about
          r/sayists (1821)
          <br />
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            Who is entitled to the rent of the land? The producer of the land,
            without doubt.{space}
            <a href="https://theanarchistlibrary.org/library/pierre-joseph-proudhon-what-is-property-an-inquiry-into-the-principle-of-right-and-of-governmen">
              Who made the land? God. Then, proprietor, retire!
            </a>
          </div>
          <br />
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            I’m unsure what Proudhon was actually saying here,{space}
            <i>
              but{space}
              <a href="https://www.marxists.org/archive/marx/works/1847/poverty-philosophy/ch02d.htm">
                taken out of context
              </a>
              {space}
              at least
            </i>
            , I agree with Marx (as usual):
          </div>
          <br />
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            According to M. Proudhon, “improvement in the use of the land” – a
            consequence “of the perfecting of industry” – causes the continual
            rise in rent. On the contrary, this improvement causes its periodic
            fall.
          </div>
          <br />
          Curiously, landed property describes this phenomenon.
          <br />
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            It is necessary to distinguish carefully the complete right of
            {space}
            <a href="https://mises.org/library/treatise-political-economy">
              property
            </a>
            , which is founded on labour, from the transient right of possession
            which is acquired by mere priority of occupancy; thus, before the
            appropriation of land, if any individual had occupied a particular
            spot, for repose or shade, it would have been unjust to deprive him
            of possession of it.
            <br />
            <br />A man who cultivates his own garden at his own expense, is at
            once the possessor of land, capital, and industry, and exclusively
            enjoys the profits of proprietor/capitalist/laborer. …Indeed, the
            tenant himself may improve the ground at his own expense; but he
            only derives the profit from this capital for the duration of his
            lease, with the expiry of which it remains with the proprietor of
            the land. (Jean-Baptiste Say, A Treatise on Political Economy, 1821)
          </div>
          <br />
          Say likely got this from Rousseau, as property right ethics so
          translate for substitutive supply:
          <br />
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            Is it to be enough to set foot on a plot of common ground, in order
            to be able to call yourself at once the master of it? Is it to be
            enough that a man has the strength to expel others{space}
            <a href="https://www.marxists.org/reference/subject/economics/rousseau/social-contract/ch01.htm#009">
              for a moment, in order
            </a>
            {space}
            to establish his right to prevent them from ever returning? How can
            a man or a people seize an immense territory and keep it from the
            rest of the world except by a punishable usurpation, since all
            others are being robbed, by such an act, of the place of habitation
            and the means of subsistence which nature gave them in common? (Jean
            Jacques Rousseau, The Social Contract, 1762)
          </div>
          <br />
          All in all, Marxists believe the disutility of deflationary investment
          and labor capital is crowded out by social capital, and{space}
          <i>
            the capitalist cycle makes non-deflationary jobs and long term
            layoffs in seriatim
          </i>
          .
          <br />
          <br />
          Please show your professor bankingisnot.biz for more.
          <h2>Criticisms of Occupy Wall Street?</h2>
          {/* 
          u/acebush1
          tl;dr: Are there anarchist critiques of the Occupy movement out there?
          <br />
          <br />
          I’m new to anarchism and leftism in general and as I’ve started
          getting involved in my local community I’ve begun to debate anarchism
          with some MLs who are seasoned organizers. Their aversion to anarchism
          stems from their experience in the Occupy movement, and problems it
          had which they believe were directly tied to its anarchist roots.
          <br />
          <br />
          They cited things like an inability to make decisions and get things
          done, as well as a kind of “hidden” hierarchy whereby some individuals
          were able to wield inordinate amounts of influence by networking and
          using preexisting connections, and also the rules and procedures
          happened to benefit some people more than others. These people were
          effectively able to set the agenda and shut out anyone who disagreed
          with them from the decision making process.
          <br />
          <br />
          They said that local unions were barred from participating because
          they were organized hierarchically. This especially pissed them off
          because those unions were primarily made up of women of color, and the
          influential Occupy organizers were primarily affluent white people.
          <br />
          <br />
          They also cited weird dogmatic rules like no megaphones being allowed
          because amplification = hierarchy or something. They said that when
          the police came to clear out the encampment there was no ability to
          coordinate a response because there wasn’t time to call a general
          assembly.
          <br />
          <br />
          Basically, from the ML’s perspective, all these anarchist principles
          served to do was obfuscate hierarchy instead of eliminating it, and
          without clear “leaders” there was no one to criticize and no way to
          address problems. They came away with a view of anarchism as being an
          ideology for arrogant white middle class people who want to condescend
          to other leftists without actually committing to revolution.
          <br />
          <br />
          I don’t think I agree that these things are necessarily endemic to
          anarchism, but I wouldn’t be surprised if the Occupy movement did have
          these problems as a result of arrogant white people trying to tell
          everyone what to do.
          <br />
          <br />
          Are there anarchist critiques of the Occupy movement that can give a
          different perspective on these problems?
          <br />
          (Also is this the right sub for this?)
          <br />
          <br />*/}
          Are you a node, or are you a{space}
          <i>
            <b>local</b>
            {space}storage
          </i>
          {space}node? Here’s my favorite adjoiner in{space}
          <i>
            <a href="https://theanarchistlibrary.org/library/crimethinc-from-democracy-to-freedom">
              From Democracy To Freedom
            </a>
          </i>
          , 2016 by CrimethInc.:
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            Anarchists frustrated by the contradictions of democratic discourse
            have sometimes withdrawn to organize themselves according to
            preexisting affinity alone. Yet segregation breeds stagnation and
            fractiousness. It is better to organize on the basis of our
            conditions and needs so we come into contact with all the others who
            share them. Only when we understand ourselves as nodes within
            dynamic collectivities, rather than discrete entities possessed of
            static interests, can we make sense of the rapid metamorphoses that
            people undergo in the course of experiences like the Occupy
            movement—and the tremendous power of the encounter to transform us
            if we open ourselves to it.
            {/* (CrimethInc.,{space}
            <i>
              <a href="https://theanarchistlibrary.org/library/crimethinc-from-democracy-to-freedom">
                From Democracy To Freedom
              </a>
            </i>
            , 2016)*/}
          </div>
          <br />
          With deficit spending, isn’t the maximum tax receipts when the tax
          rate is zero?{space}
          <i>
            Why are you so angry about deficits obviously causing higher profits
          </i>
          ,{space}
          <span style={{ textDecoration: "line-through" }}>Arthur Laffer</span>
          {space}Mike Jenkins?
          <br />
          <br />
          {/*Absolutely not. You can’t just go willy nilly shoving the curve to the
          left or the right. If you do that, you’re inventing mathematics out of
          this air. Throwing any old damn terms into the equation, just because
          you felt like it. If you redefine the maximum to the y intercept, then
          half of your money (or whatever fraction is to the left of the max) is
          worth LESS THAN ZERO.
          <br />
          <br />
          That wouldn’t even get you through 7th grade math. Your junior high
          school teacher would flunk you out and hold you back a year. You can
          only do that when there’s no clearly defined origin, and in this case,
          there is a very clearly defined origin. It’s the last dollar bill in
          your wallet, and when that dollar goes away, you’re flat broke. That
          origin is just as rigid as the ground under your feet
          <br />
          <br />*/}
          But it should be drawn with its maximum at the y-intercept of x=0 in
          terms of tax rate to most elastic part of y, tax receipts. *The public
          deficit, either QE or “private investment”, begets investment labor
          shorting housing labor. We call this crowding out, but I can’t find
          where David Ricardo even mentions the words equivalence nor{space}
          <a href="https://en.wikipedia.org/wiki/Crowding_out_(economics)">
            crowding out
          </a>
          .
          <br />
          <a href="https://www.quora.com/unanswered/Isn-t-shorting-a-rewording-of-David-Ricardo-s-crowding-out-Where-exactly-did-Ricardian-equivalence-and-or-crowding-out-get-mentioned-in-his-writings">
            <i>
              Isn’t shorting a rewording of David Ricardo’s crowding out? Where
              exactly did Ricardian equivalence and/or crowding out get
              mentioned in his writings?
            </i>
          </a>
          <br />
          <br />
          Has anybody every attempted to write down the equation for the Laffer
          Curve, based on more fundamental principles of Macro- or
          Micro-Economics? If so, who was it, and where can I read up on the
          current state of the art?
          <br />
          <br />
          The Laffer Curve{space}
          <b
            style={{
              backgroundColor: "grey",
              color: "white"
            }}
          >
            is a fundamental principle. However, it is not always fundamental
            and does more harm than{space}
            <a href="https://leisuretoprefer.com">good</a>
          </b>
          ,{space}
          <i>
            the deficit generates the tax receipts of the Laffer Curve, and
            otherwise fundamentally the tax rate has no bearing on the revenue
            if the value added of the government as a share of gross product is
            normal. Fundamentally, the tax revenue is maximized{space}
            <b
              style={{
                backgroundColor: "grey",
                color: "white"
              }}
            >
              at a certain rate from private production
            </b>
            .
          </i>
          <br />
          The level of government production is not at issue but the types are.
          Moreover, the government maintains{space}
          <i>
            an increasing growth point-benefit at-market utility-price by{space}
            <b
              style={{
                backgroundColor: "grey",
                color: "white"
              }}
            >
              the deficit
            </b>
            {space}and its{space}
            <b
              style={{
                backgroundColor: "grey",
                color: "white"
              }}
            >
              loitering/new money from private investment in the treasury
              debit/QE
            </b>
          </i>
          . To put government spending against the rate of taxation with no
          bearing of normality of taxation for the free rider immutable
          plaintiff durable truncated wholesale tax nor deficit spending
          describes revenue as a price making venture as opposed to a
          product-making consumer complementary and total budget constraints
          instead.{space}
          <a href="https://www.quora.com/unanswered/Why-do-the-Census-poverty-measures-impute-mortgages-as-costs-while-the-Bureau-of-Labor-Statistics-impute-rents-as-product">
            Why do the Census poverty measures impute mortgages as costs while
            the Bureau of Labor Statistics impute rents as product?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/Doesn-t-the-monetarist-envisage-the-day-of-perishable-circulation-being-duty-free">
            Doesn’t the monetarist envisage the day of perishable circulation
            being duty-free?
          </a>
          {/*The Laffer Curve does not do more harm than good. That comment is the
          diametric, rectilinear opposite of the truth. DENIALISM OF THE LAFFER
          CURVE (of which there there is obviously a huge amount, as you can
          clearly see from the torrential flood of wrong answers to my question)
          does more harm than good*/}
        </div>
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => {
  //console.log(ref.current);
  return (
    <App
      /*anarchy={ref.current.anarchy}*/
      {...["socialism"].reduce(
        (refs, field) => ({ ...refs, [field]: ref.current[field] }),
        {}
      )}
      {...props}
    />
  );
});
