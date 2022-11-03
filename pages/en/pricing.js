// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C, * as _rest from '../../pages_/pricing'
import ns0 from '../../locales/en/common.json'
import ns1 from '../../locales/en/footer.json'
import ns2 from '../../locales/en/header.json'
import ns3 from '../../locales/en/pricing.json'

const namespaces = { 'common': ns0, 'footer': ns1, 'header': ns2, 'pricing': ns3 }

export default function Page(p){
  return (
    <I18nProvider lang="en" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'en'})
}

export const getStaticProps = ctx => _rest.getStaticProps({ ...ctx, lang: 'en' })



export * from '../../pages_/pricing'
