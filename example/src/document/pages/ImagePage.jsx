import React from 'react'

import { DocumentDemoImage } from '../demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Image

Image 用于在对话流中显示图片。图片显示在对话流中时是缩略状态。可以使用 ImagePreviewer 为其赋予预览交互。  

以下是基本的使用例子：

<Demo />
`

export default class LoadingDemo extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo: DocumentDemoImage }
      }}
    >{ md }</Markdown>
  }
}