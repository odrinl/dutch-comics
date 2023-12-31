function Title() {
  return (
    <div className='home-page'>
      <div className='container'>
        <h1>Dutch Comics</h1>
      </div>
      <div className='container description'>
        <p>
          <p style={{ lineHeight: '2.1rem', marginBottom: '-0.2rem' }}>
            Vintage comics in Dutch. <strong>10&nbsp;261 </strong>pdf files.{' '}
            <br />
            Many are <strong>translations</strong> of other countries' comics,
            but many are <strong>home-grown</strong>. <br />
          </p>
          <br />
          Source of information -&nbsp;
          <a
            href='https://archive.org/details/dutchcomicbooks'
            alt='Internet Archive collection'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>Internet Archive collection</strong>.
          </a>
          <br />
          <br />
          History of Dutch Comics ("stripverhaal")&nbsp;
          <a
            href='https://en.wikipedia.org/wiki/Dutch_comics'
            alt='Dutch Comics article in Wiki'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>in&nbsp;Wikipedia</strong>.
          </a>
        </p>
      </div>
      <figure className='container image'>
        <img
          src='https://www.lambiek.net/artists/image/artefacts/1970_tijdschriften/pepcrew.jpg'
          alt='pepcrew'
        />
      </figure>
    </div>
  );
}

export default Title;
