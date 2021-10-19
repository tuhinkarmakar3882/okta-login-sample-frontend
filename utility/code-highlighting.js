import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'
import python from 'highlight.js/lib/languages/python'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import hljs from 'highlight.js/lib/core'

const codeHighlighter = hljs
codeHighlighter.registerLanguage('javascript', javascript)
codeHighlighter.registerLanguage('python', python)
codeHighlighter.registerLanguage('xml', xml)
codeHighlighter.registerLanguage('bash', bash)
codeHighlighter.registerLanguage('json', json)
codeHighlighter.registerLanguage('css', css)
codeHighlighter.registerLanguage('scss', scss)

export default codeHighlighter
