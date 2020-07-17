const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/about.js"))),
  "component---src-pages-blogs-fosstalk-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/blogs/fosstalk.js"))),
  "component---src-pages-blogs-gnomeasia-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/blogs/gnomeasia.js"))),
  "component---src-pages-blogs-incubate-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/blogs/incubate.js"))),
  "component---src-pages-blogs-mediawiki-setup-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/blogs/mediawikiSetup.js"))),
  "component---src-pages-blogs-mysql-err-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/blogs/mysqlErr.js"))),
  "component---src-pages-blogs-python-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/blogs/python.js"))),
  "component---src-pages-blogs-visit-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/blogs/visit.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/index.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/home/sevagen/Desktop/personal-blog/src/pages/project.js")))
}

