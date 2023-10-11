function Title() {
  return (
    <div className='home-page'>
      <div className='container'>
        <h1>Dutch Comics</h1>
      </div>
      <div className='container description'>
        <p>
          Vintage comics in Dutch. 10 261 pdf files. <br />
          Many are translations of other countries' comics, <br />
          but many are home-grown. <br />
          Source of information -&nbsp;
          <a
            href='https://archive.org/details/dutchcomicbooks'
            alt='Internet Archive collection'
            target='_blank'
            rel='noopener noreferrer'
          >
            Internet Archive collection
          </a>
          <br />
          History of Dutch Comics ("stripverhaal") &nbsp;
          <a
            href='https://en.wikipedia.org/wiki/Dutch_comics'
            alt='Dutch Comics article in Wiki'
            target='_blank'
            rel='noopener noreferrer'
          >
            in Wikipedia
          </a>
        </p>
      </div>
      <div className='container image'>
        <img
          src='https://www.lambiek.net/artists/image/artefacts/1970_tijdschriften/pepcrew.jpg'
          alt='pepcrew'
        />
      </div>
    </div>
  );
}

export default Title;
