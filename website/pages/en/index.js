const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div className="hero">
        <div className="inner">
          <img
            className="logo"
            src={`${baseUrl}img/shyft-logo-white.svg`}
            alt="Shyft Logo"
          />
          <h1 className="title">{siteConfig.title}</h1>
          <h2>{siteConfig.tagline}</h2>

          <PromoSection>
            <Button href={docUrl('docs.html')}>Getting Started</Button>
            <Button href={docUrl('api.html')}>API Reference</Button>
          </PromoSection>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;

    const Features = () => (
      <Container className="featureSection" align="right">
        <div className="intro">
          <h2>How Shyft can help you and your project?</h2>
          <p>
            Shyft was developed 🖥 and battle-tested ⚔️ alongside numerous
            real-life projects. Features were build 🏗 based on actual use-cases
            💼. Shyft takes care of the simple and the complex parts in your
            project so you can focus 🔬 on the actual business case.
          </p>
        </div>

        <GridBlock
          align="left"
          layout="threeColumn"
          className="featureGrid"
          contents={[
            {
              title: '<span>Source of Truth</span>',
              content:
                'Keep type definitions, validation rules, permissions settings and documentation in one place - the model.',
            },
            {
              title: '<span>Generators</span>',
              content:
                'Generate a strict GraphQL layer and persistence layer from the same model.',
            },
            {
              title: '<span>Permissions</span>',
              content:
                'Shyft comes with a powerful permission framework. From simple role-based access to complex data-driven access rules - Shyft has got you covered.',
            },

            {
              title: '<span>Filters</span>',
              content:
                'Combine `AND` and `OR` filters, apply deeply nested selectors or write your own pre-filtering code - Shyft has it all.',
            },
            {
              title: '<span>Workflows</span>',
              content:
                'Build complex business workflows with fine-grained control over access and input fields.',
            },
            {
              title: '<span>Pagination</span>',
              content:
                'Go with a traditional limit/offset-based approach or jump onto the cursor-based pagination train.',
            },

            {
              title: '<span>Hooks</span>',
              content:
                'Define your own hooks on input and output to modify data as needed.',
            },
            {
              title: '<span>Performance</span>',
              content:
                'Shyft uses the popular [DataLoader](https://github.com/graphql/dataloader) utility to fetch data in a performant manner.',
            },
            {
              title: '<span>CRUD+</span>',
              content:
                "Every entity is equipped with standard mutations. Replace them or add new ones - it's up to you.",
            },

            {
              title: '<span>Validation</span>',
              content:
                'Shyft lets you bring your own validation framework to check input fields.',
            },
            {
              title: '<span>I18n Inside</span>',
              content:
                'We baked internationalization into Shyft right from the start.',
            },
            {
              title: '<span>TypeScript</span>',
              content: 'Enjoy an awesome DX powered by TypeScript.',
            },

            {
              title: '<span>Actions</span>',
              content:
                'For more complex data fetching and mutation jobs Shyft provides a place to build your own queries and mutations.',
            },
            {
              title: '<span>Relay Connections</span>',
              content:
                'Move inside the graph from relation to relation using the convenient Relay standard.',
            },
            {
              title: '<span>More</span>',
              content:
                'There is even more: hidden fields, dynamic field resolvers, mock data, migrations, ...',
            },
          ]}
        />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
