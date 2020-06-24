import React from "react"
import { AcfCodeBlockFields } from "wjhm"

const Code = (props: AcfCodeBlockFields) => {
  const { code, language } = props
  return (
    <pre className={`language-${language}`}>
      <code>{code}</code>
    </pre>
  )
}

export default Code
