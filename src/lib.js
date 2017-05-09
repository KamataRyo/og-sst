/**
 * [validateParams description]
 * @param  {[type]} arg [description]
 * @return {[type]}     [description]
 */
const validateParams = arg => {
  const now = new Moment()
  if (
    now.year()      !== +arg.year  ||
    now.month() + 1 !== +arg.month ||
    now.date()      !== +arg.date
  ) {
    return false
  } else {
    return {
      year: arg.year,
      month: arg.month,
      date: arg.day
    }
  }
}

const generateImageURL = arg => {
  return `http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/image/HQ/${year}/sstD_HQ${year}${month}${day}.png`
}

const generateHTMLHead = (year, month, day) => {
  return `<header>
    <meta property="og:title" content="日本近海の表層水温 - ${year}/${month}/${day}"/>
    <meta property="og:description" content="日本近海の表層水温コンターマップをシェアするサービスです。" />
    <meta property="og:image" content="${generateImageURL(year, month, day)}" />
  </header>`
}

const generateHTMLBody = (year, month, day) => {
  return `<body>
  <h1>${year}/${month}/${day}の日本近海の表層水温</h1>
  <img src="${generateImageURL(year, month, day)}" alt="" />
  <p>このサイトは気象庁ホームページのコンテンツを利用して作成しています。</p>
  <dl>
    <dt>出典</dt>
    <dd>気象庁ホームページ | 日別海面水温<br><a href="http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/sst_HQ.html#kaisetu">http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/sst_HQ.html#kaisetu</a></dd>
  </dl>
  </body>`

}

module.exports = {
  validateParams,
  generateImageURL,
  generateHTMLHead,
  generateHTMLBody
}
