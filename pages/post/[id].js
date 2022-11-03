// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_/post/[id]'
import ns0 from '../../locales/az/common.json'
import ns1 from '../../locales/az/footer.json'
import ns2 from '../../locales/az/header.json'
import ns3 from '../../locales/az/post.json'

const namespaces = { 'common': ns0, 'footer': ns1, 'header': ns2, 'post': ns3 }

export default function Page(p){
  return (
    <I18nProvider lang="az" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'az'})
}





export * from '../../pages_/post/[id]'
