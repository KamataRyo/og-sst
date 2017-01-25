require('should')()

const lib = require('../src/lib')

describe('test of HelperMethods', () => {

  describe('test of image URL generation', () => {

    it('should generate image url well', () => {
      const url = lib.generateImageURL('2017', '01', '25')
      url.includes('20170125').should.be.True()
    })
  })

  describe('test of Header generation', () => {

    it('should be <Header />', () => {
      const theHtml = lib.generateHTMLHead('2017', '01', '25')
      const length = theHtml.length
      theHtml.substr(0, 8).should.equal('<header>')
      theHtml.substr(length - 9, 9).should.equal('</header>')
    })

    it('should contain meta="og:image"', () => {
      const theHtml = lib.generateHTMLHead('2017', '01', '25').trim()
      theHtml.includes('property="og:image"').should.be.True()
    })
  })

  describe('test of body generation', () => {

    it('should be <body />', () => {
      const theHtml = lib.generateHTMLBody('2017', '01', '25')
      const length = theHtml.length
      theHtml.substr(0, 6).should.equal('<body>')
      theHtml.substr(length - 7, 7).should.equal('</body>')
    })

    it('should contain about reference', () => {
      const theHtml = lib.generateHTMLBody('2017', '01', '25')
      theHtml.includes('気象庁ホームページ').should.be.True()
    })
  })

  describe('test of validateParams', () => {

    it('Good params', () => {
      lib.validateParams({ year: '2015', month: '01',  day: '23' }).should.True()
    })

    it('Lack of year', () => {
      lib.validateParams({ month: '01', day: '23' }).should.False()
    })

    it('Lack of month', () => {
      lib.validateParams({ year: '2001', day: '23' }).should.False()
    })

    it('Lack of day', () => {
      lib.validateParams({ year: '2001', month: '01' }).should.False()
    });

    ['abc', 0, '123', '20156', '3000', '1500'].map(year => {
      it('illegal year: ' + year, () => {
        lib.validateParams({ year, month: '01',  day: '23' }).should.False()
      })
    });

    ['abc', 0, 5, '123', '20156', 13, '15'].map(month => {
      it('illegal month: ' + month, () => {
        lib.validateParams({ year: '2015', month,  day: '13' }).should.False()
      })
    });

    ['abc', 0, 8, '123', '20156', '32'].map(day => {
      it('illegal day: ' + day, () => {
        lib.validateParams({ year: '2015', month: '01',  day }).should.False()
      })
    })


  })
})
