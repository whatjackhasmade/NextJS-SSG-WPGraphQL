import { css } from "styled-components"

const exportedCSS = css`
  @font-face {
    font-family: "SuisseIntl";
    src: url("/fonts/SuisseIntl-Regular.eot?#iefix"); /* IE9 Compat Modes */
    src: url("/fonts/SuisseIntl-Regular.eot") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/SuisseIntl-Regular.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/SuisseIntl-Regular.woff")
        format("woff"),
      /* Pretty Modern Browsers */ url("/fonts/SuisseIntl-Regular.ttf")
        format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "SuisseIntl";
    src: url("/fonts/SuisseIntl-Italic.eot?#iefix"); /* IE9 Compat Modes */
    src: url("/fonts/SuisseIntl-Italic.eot") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/SuisseIntl-Italic.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/SuisseIntl-Italic.woff")
        format("woff"),
      /* Pretty Modern Browsers */ url("/fonts/SuisseIntl-Italic.ttf")
        format("truetype");
    font-style: italic;
    font-weight: normal;
  }

  @font-face {
    font-family: "SuisseIntl";
    src: url("/fonts/SuisseIntl-Medium.eot?#iefix"); /* IE9 Compat Modes */
    src: url("/fonts/SuisseIntl-Medium.eot") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/SuisseIntl-Medium.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/SuisseIntl-Medium.woff")
        format("woff"),
      /* Pretty Modern Browsers */ url("/fonts/SuisseIntl-Medium.ttf")
        format("truetype");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "SuisseIntl";
    src: url("/fonts/SuisseIntl-Bold.eot?#iefix"); /* IE9 Compat Modes */
    src: url("/fonts/SuisseIntl-Bold.eot") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/SuisseIntl-Bold.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/SuisseIntl-Bold.woff")
        format("woff"),
      /* Pretty Modern Browsers */ url("/fonts/SuisseIntl-Bold.ttf")
        format("truetype");
    font-style: normal;
    font-weight: bold;
  }

  @font-face {
    font-family: "SuisseIntl";
    src: url("/fonts/SuisseIntl-Black.eot?#iefix"); /* IE9 Compat Modes */
    src: url("/fonts/SuisseIntl-Black.eot") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/SuisseIntl-Black.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/SuisseIntl-Black.woff")
        format("woff"),
      /* Pretty Modern Browsers */ url("/fonts/SuisseIntl-Black.ttf")
        format("truetype");
    font-style: normal;
    font-weight: 900;
  }
`

export default exportedCSS
