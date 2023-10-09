function Title() {
  return (
    <div className='home-page'>
      <div className='container'>
        <h1>Dutch Comics</h1>
      </div>
      <div className='container description'>
        <p>
          Comic books in the Dutch language. <br />
          Many are translations of other countries' comics, <br />
          but many are home-grown as well. <br />
          app API &nbsp; -
          <a
            href='https://archive.org/details/dutchcomicbooks'
            alt='Internet Archive collection'
            target='_blank'
            rel='noopener noreferrer'
          >
            Internet Archive collection
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
