// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../../pages_/project/[id]'
import ns0 from '../../../locales/ru/common.json'
import ns1 from '../../../locales/ru/footer.json'
import ns2 from '../../../locales/ru/header.json'
import ns3 from '../../../locales/ru/project.json'

const namespaces = { 'common': ns0, 'footer': ns1, 'header': ns2, 'project': ns3 }

export default function Page(p){
  return (
    <I18nProvider lang="ru" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'ru'})
}





export * from '../../../pages_/project/[id]'
