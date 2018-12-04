import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-Thin.eot');
    src: url('fonts/AvertaStd-Thin.woff2') format('woff2'),
        url('fonts/AvertaStd-Thin.woff') format('woff'),
        url('fonts/AvertaStd-Thin.ttf') format('truetype'),
        url('fonts/AvertaStd-Thin.svg#AvertaStd-Thin') format('svg'),
        url('fonts/AvertaStd-Thin.eot?#iefix') format('embedded-opentype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-SemiboldItalic.eot');
    src: url('fonts/AvertaStd-SemiboldItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-SemiboldItalic.woff') format('woff'),
        url('fonts/AvertaStd-SemiboldItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-SemiboldItalic.svg#AvertaStd-SemiboldItalic') format('svg'),
        url('fonts/AvertaStd-SemiboldItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-Semibold.eot');
    src: url('fonts/AvertaStd-Semibold.woff2') format('woff2'),
        url('fonts/AvertaStd-Semibold.woff') format('woff'),
        url('fonts/AvertaStd-Semibold.ttf') format('truetype'),
        url('fonts/AvertaStd-Semibold.svg#AvertaStd-Semibold') format('svg'),
        url('fonts/AvertaStd-Semibold.eot?#iefix') format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-RegularItalic.eot');
    src: url('fonts/AvertaStd-RegularItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-RegularItalic.woff') format('woff'),
        url('fonts/AvertaStd-RegularItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-RegularItalic.svg#AvertaStd-RegularItalic') format('svg'),
        url('fonts/AvertaStd-RegularItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-Regular.eot');
    src: url('fonts/AvertaStd-Regular.woff2') format('woff2'),
        url('fonts/AvertaStd-Regular.woff') format('woff'),
        url('fonts/AvertaStd-Regular.ttf') format('truetype'),
        url('fonts/AvertaStd-Regular.svg#AvertaStd-Regular') format('svg'),
        url('fonts/AvertaStd-Regular.eot?#iefix') format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-LightItalic.eot');
    src: url('fonts/AvertaStd-LightItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-LightItalic.woff') format('woff'),
        url('fonts/AvertaStd-LightItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-LightItalic.svg#AvertaStd-LightItalic') format('svg'),
        url('fonts/AvertaStd-LightItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-Light.eot');
    src: url('fonts/AvertaStd-Light.woff2') format('woff2'),
        url('fonts/AvertaStd-Light.woff') format('woff'),
        url('fonts/AvertaStd-Light.ttf') format('truetype'),
        url('fonts/AvertaStd-Light.svg#AvertaStd-Light') format('svg'),
        url('fonts/AvertaStd-Light.eot?#iefix') format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-ExtrathinItalic.eot');
    src: url('fonts/AvertaStd-ExtrathinItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-ExtrathinItalic.woff') format('woff'),
        url('fonts/AvertaStd-ExtrathinItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-ExtrathinItalic.svg#AvertaStd-ExtrathinItalic') format('svg'),
        url('fonts/AvertaStd-ExtrathinItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-Extrathin.eot');
    src: url('fonts/AvertaStd-Extrathin.woff2') format('woff2'),
        url('fonts/AvertaStd-Extrathin.woff') format('woff'),
        url('fonts/AvertaStd-Extrathin.ttf') format('truetype'),
        url('fonts/AvertaStd-Extrathin.svg#AvertaStd-Extrathin') format('svg'),
        url('fonts/AvertaStd-Extrathin.eot?#iefix') format('embedded-opentype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-ExtraBoldItalic.eot');
    src: url('fonts/AvertaStd-ExtraBoldItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-ExtraBoldItalic.woff') format('woff'),
        url('fonts/AvertaStd-ExtraBoldItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-ExtraBoldItalic.svg#AvertaStd-ExtraBoldItalic') format('svg'),
        url('fonts/AvertaStd-ExtraBoldItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-ExtraBold.eot');
    src: url('fonts/AvertaStd-ExtraBold.woff2') format('woff2'),
        url('fonts/AvertaStd-ExtraBold.woff') format('woff'),
        url('fonts/AvertaStd-ExtraBold.ttf') format('truetype'),
        url('fonts/AvertaStd-ExtraBold.svg#AvertaStd-ExtraBold') format('svg'),
        url('fonts/AvertaStd-ExtraBold.eot?#iefix') format('embedded-opentype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-BoldItalic.eot');
    src: url('fonts/AvertaStd-BoldItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-BoldItalic.woff') format('woff'),
        url('fonts/AvertaStd-BoldItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-BoldItalic.svg#AvertaStd-BoldItalic') format('svg'),
        url('fonts/AvertaStd-BoldItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-Bold.eot');
    src: url('fonts/AvertaStd-Bold.woff2') format('woff2'),
        url('fonts/AvertaStd-Bold.woff') format('woff'),
        url('fonts/AvertaStd-Bold.ttf') format('truetype'),
        url('fonts/AvertaStd-Bold.svg#AvertaStd-Bold') format('svg'),
        url('fonts/AvertaStd-Bold.eot?#iefix') format('embedded-opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-BlackItalic.eot');
    src: url('fonts/AvertaStd-BlackItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-BlackItalic.woff') format('woff'),
        url('fonts/AvertaStd-BlackItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-BlackItalic.svg#AvertaStd-BlackItalic') format('svg'),
        url('fonts/AvertaStd-BlackItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-Black.eot');
    src: url('fonts/AvertaStd-Black.woff2') format('woff2'),
        url('fonts/AvertaStd-Black.woff') format('woff'),
        url('fonts/AvertaStd-Black.ttf') format('truetype'),
        url('fonts/AvertaStd-Black.svg#AvertaStd-Black') format('svg'),
        url('fonts/AvertaStd-Black.eot?#iefix') format('embedded-opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('fonts/AvertaStd-ThinItalic.eot');
    src: url('fonts/AvertaStd-ThinItalic.woff2') format('woff2'),
        url('fonts/AvertaStd-ThinItalic.woff') format('woff'),
        url('fonts/AvertaStd-ThinItalic.ttf') format('truetype'),
        url('fonts/AvertaStd-ThinItalic.svg#AvertaStd-ThinItalic') format('svg'),
        url('fonts/AvertaStd-ThinItalic.eot?#iefix') format('embedded-opentype');
    font-weight: 200;
    font-style: italic;
  }
`;
