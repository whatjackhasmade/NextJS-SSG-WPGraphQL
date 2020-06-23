import React from "react"
import { CoreParagraphBlockAttributesV3 } from "wjhm"

type ParagraphProps = CoreParagraphBlockAttributesV3 & {
  children?: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => <p>{children}</p>

export default Paragraph
