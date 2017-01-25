require('should')()

const lib = require('../src/lib')

describe('test of HelperMethods', () => {

  describe('test of image URL generation', () => {

    it('should generate image url well', () => {
      const url = lib.generateImageURL(2017, 1, 25)
      url.includes('20170125').should.be.True()
    })
  })

  describe('test of Header generation', () => {

    it('should be <Header />', () => {
      const theHtml = lib.generateHTMLHead(2017, 1, 25)
      const length = theHtml.length
      theHtml.substr(0, 8).should.equal('<header>')
      theHtml.substr(length - 9, 9).should.equal('</header>')
    })

    it('should contain meta="og:image"', () => {
      const theHtml = lib.generateHTMLHead(2017, 1, 25).trim()
      theHtml.includes('property="og:image"').should.be.True()
    })
  })

  describe('test of body generation', () => {

    it('should be <body />', () => {
      const theHtml = lib.generateHTMLBody(2017, 1, 25)
      const length = theHtml.length
      theHtml.substr(0, 6).should.equal('<body>')
      theHtml.substr(length - 7, 7).should.equal('</body>')
    })

    it('should contain about reference', () => {
      const theHtml = lib.generateHTMLBody(2017, 1, 25)
      theHtml.includes('気象庁ホームページ').should.be.True()
    })
  })
})
