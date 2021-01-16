module.exports = {
  siteUrl: 'https://spato.com.br',
  generateRobotsTxt: true, // (optional)
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://spato.com.br/server-sitemap.xml' // <==== Add here
    ]
  }
}
