import { createGlobalStyle } from "styled-components"

import boxSizing from "css/setup/box-sizing"
import fonts from "css/setup/fonts"
import offset from "css/setup/offset"
import scrollbar from "css/setup/scrollbar"
import variables from "css/setup/variables"

import anchor from "css/base/anchor"
import body from "css/base/body"
import button from "css/base/button"
import code from "css/base/code"
import heading from "css/base/heading"
import html from "css/base/html"
import image from "css/base/image"
import main from "css/base/main"
import video from "css/base/video"

import mailtoui from "css/components/mailtoui"
import slick from "css/components/slick"
import wrapper from "css/components/wrapper"

import wpImage from "css/components/wordpress/image"
import wpYouTube from "css/components/wordpress/youtube"

const GlobalStyle = createGlobalStyle`
	${variables};

	${boxSizing};
	${fonts};
	${offset};
	${scrollbar};

	${anchor};
	${body};
	${button};
	${code};
	${heading};
	${html};
	${image};
	${main};
	${video};

	${mailtoui};
	${slick};
	${wrapper};

	${wpImage};
	${wpYouTube};
`

export default GlobalStyle
