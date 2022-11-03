// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C, * as _rest from '../pages_/blog'
import ns0 from '../locales/az/common.json'
import ns1 from '../locales/az/footer.json'
import ns2 from '../locales/az/header.json'
import ns3 from '../locales/az/blog.json'

const namespaces = { 'common': ns0, 'footer': ns1, 'header': ns2, 'blog': ns3 }

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

export const getStaticProps = ctx => _rest.getStaticProps({ ...ctx, lang: 'az' })



export * from '../pages_/blog'
