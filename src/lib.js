
const generateImageURL = (year, month, day) => {
  if (+month < 10) { month = '0' + +month }
  if (+day < 10) { day = '0' + +day }
  return  `http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/image/HQ/${year}/sstD_HQ${year}${month}${day}.png`
}

const generateHTMLHead = (year, month, day) => {
  if (+month < 10) { month = '0' + +month }
  if (+day < 10) { day = '0' + +day }
  return `<header>
    <meta property="og:title" content="日本近海の表層水温 - ${year}/${month}/${day}"/>
    <meta property="og:description" content="出典:気象庁ホームページ (http://www.data.jma.go.jp/kaiyou/data/db/kaikyo/daily/sst_HQ.html#kaisetu)" />
    <meta property="og:image" content="${generateImageURL(year, month, day)}" />
  </header>`
}

const generateHTMLBody = (year, month, day) => {
  if (+month < 10) { month = '0' + month }
  if (+day < 10) { day = '0' + day }
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

module.exports = { generateImageURL, generateHTMLHead, generateHTMLBody }
