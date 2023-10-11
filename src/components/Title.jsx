function Title() {
  return (
    <div className='home-page'>
      <div className='container'>
        <h1>Dutch Comics</h1>
      </div>
      <div className='container description'>
        <p>
          Vintage comics in Dutch. 10&nbsp;261&nbsp;pdf&nbsp;files. <br />
          Many are translations of other&nbsp;countries'&nbsp;comics, <br />
          but many are&nbsp;home-grown. <br />
          Source of information -&nbsp;
          <a
            href='https://archive.org/details/dutchcomicbooks'
            alt='Internet Archive collection'
            target='_blank'
            rel='noopener noreferrer'
          >
            Internet&nbsp;Archive&nbsp;collection
          </a>
          <br />
          History of Dutch Comics ("stripverhaal") &nbsp;
          <a
            href='https://en.wikipedia.org/wiki/Dutch_comics'
            alt='Dutch Comics article in Wiki'
            target='_blank'
            rel='noopener noreferrer'
          >
            in&nbsp;Wikipedia
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
