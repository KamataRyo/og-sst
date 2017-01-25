const validateParams = arg => {
  const { year, month, day } = arg
  if (!(year && month && day)) {
    return false
  }
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return false
  }

  if (`${year}`.length !== 4) {
    return false
  }
  if (`${month}`.length !== 2) {
    return false
  }
  if (`${day}`.length !== 2) {
    return false
  }

  if (+year < 1950 || 2100 < +year) {
    return false
  }
  if (12 < +month) {
    return false
  }
  if (31 < +day) {
    return false
  }
  return true
}

const generateImageURL = (year, month, day) => `http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/image/HQ/${year}/sstD_HQ${year}${month}${day}.png`

const generateHTMLHead = (year, month, day) => {
  return `<header>
    <meta property="og:title" content="日本近海の表層水温 - ${year}/${month}/${day}"/>
    <meta property="og:description" content="出典:気象庁ホームページ (http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/sst_HQ.html#kaisetu)" />
    <meta property="og:image" content="${generateImageURL(year, month, day)}" />
  </header>`
}

const generateHTMLBody = (year, month, day) => {
  return `<body>
  <h1>${year}/${month}/${day}の日本近海の表層水温</h1>
  <img src="${generateImageURL(year, month, day)}" alt="" />
  <p>このサイトは、気象庁ホームページのコンテンツを利用して作成しています。</p>
  <dl>
    <dt>出典</dt>
    <dd>気象庁ホームページ|日別海面水温 (<<a href="http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/sst_HQ.html#kaisetu">http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/sst_HQ.html#kaisetu</a>>)</dd>
  </dl>
  </body>`

}

module.exports = {
  validateParams,
  generateImageURL,
  generateHTMLHead,
  generateHTMLBody
}
