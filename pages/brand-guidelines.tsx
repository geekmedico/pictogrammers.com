import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import cx from 'clsx';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';

import TableOfContents from '../components/Docs/TableOfContents/TableOfContents';
import Heading from '../components/Docs/Heading';

import PictogrammersLogoSvg from '../assets/brand/logos/pictogrammers-full.svg';
import MDILogoSvg from '../assets/libraries/mdi.svg';
import MDLLogoSvg from '../assets/libraries/mdl.svg';
import PictogrammersMonogram from '../assets/brand/logos/pictogrammers-monogram.png';
import PictogrammersLogo from '../assets/brand/logos/pictogrammers-full.png';
import PictogrammersLogoBlack from '../assets/brand/logos/pictogrammers-full-black.png';
import PictogrammersLogoWhite from '../assets/brand/logos/pictogrammers-full-white.png';
import ClearingSpace from '../assets/brand/clearing-space.png';
import ClearingSpaceGuide from '../assets/brand/clearing-space-guide.png';
import ClearingSpaceMonogram from '../assets/brand/clearing-space-monogram.png';
import ClearingSpaceMonogramGuide from '../assets/brand/clearing-space-monogram-guide.png';
import Wordmark from '../assets/brand/wordmark.png';
import GuidanceBusyBack from '../assets/brand/busy-back.png';
import GuidanceAlterColor from '../assets/brand/alter-color.png';
import GuidanceWordmarkRecreate from '../assets/brand/wordmark-recreate.png';
import GuidanceWordmarkReplace from '../assets/brand/wordmark-replace.png';
import GuidanceAdjustedSize from '../assets/brand/adjusted-size.png';
import GuidanceDistorted from '../assets/brand/distorted.png';
import GuidanceShadowed from '../assets/brand/shadowed.png';
import GuidanceCropped from '../assets/brand/cropped.png';

import classes from '../styles/pages/docs.module.scss';
import brandClasses from '../styles/pages/brand-guidelines.module.scss';

const Heading2 = Heading(2);

const PostPage: NextPage = () => {
  const title = 'Brand Guidelines';
  const description = 'When using the Pictogrammers name and logo, follow these important guidelines.';
  const path = 'brand-guidelines';
  const toc = [
    { content: 'Logo', lvl: 2, slug: 'logo' },
    { content: 'Color', lvl: 2, slug: 'color' },
    { content: 'Clearing Space', lvl: 2, slug: 'clearing-space' },
    { content: 'Logo on Color', lvl: 2, slug: 'logo-on-color' },
    { content: 'Wordmark', lvl: 2, slug: 'wordmark' },
    { content: 'Monogram', lvl: 2, slug: 'monogram' },
    { content: 'Icon Library Logos', lvl: 2, slug: 'icon-library-logos' },
    { content: 'Guidance', lvl: 2, slug: 'guidance' }
  ];

  return (
    <div className={classes.root}>
      <Head>
        <title>{`${title} - Docs - Pictogrammers`}</title>
        <meta content={`${title} - Pictogrammers`} name='title' key='title' />
        {description && <meta content={description} name='description' key='description' />}

        <meta content={`${title} - Pictogrammers`} property='og:title' key='og:title' />
        {description && <meta content={description} property='og:description' key='og:description' />}
        <meta content='article' property='og:type' key='og:type' />
        <meta content={`https://pictogrammers.com/${path}`} property='og:url' key='og:url' />

        <meta content={`${title} - Docs - Pictogrammers`} name='twitter:title' key='twitter:title' />
        {description && <meta content={description} name='twitter:description' key='twitter:description' />}
      </Head>
      <Paper className={classes.container}>
        <article className={classes.main} role='main'>
          <h1>Brand Guidelines</h1>
          <div className={brandClasses.content}>
            <section className={brandClasses.logo}>
              <Heading2>Logo</Heading2>
              <PictogrammersLogoSvg className={brandClasses.pictogrammers} />
              <p>The Pictogrammers logo is the central visual identity for the Pictogrammers Icon Group. The monogram was created by <Link href='https://fosstodon.org/@templarian'>Austin Andrews</Link> in 2020. The following year, the wordmark was added by <Link href='https://hachyderm.io/@mririgoyen'>Michael Irigoyen</Link>, completing the logo.</p>
              <Link href='/pictogrammers-brand-assets.zip' passHref>
                <Button
                  className={brandClasses.button}
                  endIcon={<Icon path={mdiArrowDown} size={1} />}
                  variant='contained'
                >
                  Download Logo Assets
                </Button>
              </Link>                
            </section>

            <section>
              <Heading2>Color</Heading2>
              <p>Our primary color palette is Pictogrammers Purple on a white background.</p>
              <div className={brandClasses.swatches}>
                <div className={cx(brandClasses.swatch, brandClasses.purple)}>
                  <h3>Pictogrammers Purple</h3>
                  <div className={brandClasses.values}>
                    <p>HEX<br />#520065</p>
                    <p>RGB<br />82 0 101</p>
                    <p>CMYK<br />78 100 24 22</p>
                  </div>
                </div>
                <div className={cx(brandClasses.swatch, brandClasses.white)}>
                  <h3>White</h3>
                  <div className={brandClasses.values}>
                    <p>HEX<br />#FFF</p>
                    <p>RGB<br />255 255 255</p>
                    <p>CMYK<br />0 0 0 0</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <Heading2>Clearing Space</Heading2>
              <p>The minimum clearing space of the logo is the width of the P in Pictorgrammers.</p>
              <div className={brandClasses.space}>
                <div className={brandClasses.spaceLogos}>
                  <Image
                    alt='Pictogrammers logo with clearing space guides'
                    height={220}
                    src={ClearingSpaceGuide}
                    width={592}
                  />
                  <Image
                    alt='Pictogrammers logo with clearing space example'
                    height={220}
                    src={ClearingSpace}
                    width={592}
                  />
                </div>
                <div className={brandClasses.spaceMonos}>
                  <Image
                    alt='Pictogrammers monogram with clearing space guides'
                    height={220}
                    src={ClearingSpaceMonogramGuide}
                    width={205}
                  />
                  <Image
                    alt='Pictogrammers monogram with clearing space example'
                    height={220}
                    src={ClearingSpaceMonogram}
                    width={205}
                  />
                </div>
              </div>
            </section>

            <section>
              <Heading2>Logo on Color</Heading2>
              <p>In some situations, the logo can be used on a colored background as long as there is a 5:1 contrast ratio. Anything less is not recommended. <Link href='https://webaim.org/resources/contrastchecker/' target='_blank'>Check color contrasts here.</Link></p>
              <div className={brandClasses.logoOnColor}>
                <Image
                  alt='Pictogrammers Logo on White Background'
                  className={brandClasses.backWhite}
                  height={126}
                  src={PictogrammersLogo}
                  width={402}
                />
                <Image
                  alt='Pictogrammers Logo on Yellow Background'
                  className={brandClasses.backYellow}
                  height={126}
                  src={PictogrammersLogo}
                  width={402}
                />
                <Image
                  alt='Pictogrammers Logo on Purple Background'
                  className={brandClasses.backPurple}
                  height={126}
                  src={PictogrammersLogo}
                  width={402}
                />
                <Image
                  alt='Pictogrammers Logo on Green Background'
                  className={brandClasses.backGreen}
                  height={126}
                  src={PictogrammersLogo}
                  width={402}
                />
              </div>
              <p>In cases where the logo must display or print in a single color, there is an entirely white or black logo.</p>
              <div className={brandClasses.logoOnColor}>
                <Image
                  alt='Pictogrammers Logo in Black on White Background'
                  className={brandClasses.backWhite}
                  height={126}
                  src={PictogrammersLogoBlack}
                  width={402}
                />
                <Image
                  alt='Pictogrammers Logo in White on Black Background'
                  className={brandClasses.backBlack}
                  height={126}
                  src={PictogrammersLogoWhite}
                  width={402}
                />
              </div>
            </section>

            <section>
              <Heading2>Wordmark</Heading2>
              <p>The Pictogrammers wordmark may exist without the monogram. The typeface used to set the logo wordmark is <Link href='https://manropefont.com/' target='_blank'>Manrope</Link>. The wordmark is optically kerned and its uppercase &quot;P&quot; is customized to mirror the monogram.</p>
              <figure className={brandClasses.wordmark}>
                <Image
                  alt='Manual kerning and custom P vs. Manrope'
                  height={200}
                  src={Wordmark}
                  width={580}
                />
                <figcaption>
                  <span>Manual kerning and custom &quot;P&quot;</span> vs. Manrope
                </figcaption>
              </figure>
            </section>

            <section>
              <Heading2>Monogram</Heading2>
              <p>We use the monogram for our GitHub account, social media profile images, and as our &quot;favicon&quot; on our official site. The monogram may be used in cases where the association with Pictogrammers is clearly evident.</p>
              <div className={brandClasses.monogramSizes}>
                <figure className={brandClasses.size128}>
                  <Image
                    alt='Pictogrammers monogram at 128px'
                    height={377}
                    src={PictogrammersMonogram}
                    width={346}
                  />
                  <figcaption>128px</figcaption>
                </figure>
                <figure className={brandClasses.size64}>
                  <Image
                    alt='Pictogrammers monogram at 64px'
                    height={377}
                    src={PictogrammersMonogram}
                    width={346}
                  />
                  <figcaption>64px</figcaption>
                </figure>
                <figure className={brandClasses.size32}>
                  <Image
                    alt='Pictogrammers monogram at 32px'
                    height={377}
                    src={PictogrammersMonogram}
                    width={346}
                  />
                  <figcaption>32px</figcaption>
                </figure>
                <figure className={brandClasses.size16}>
                  <Image
                    alt='Pictogrammers monogram at 16px'
                    height={377}
                    src={PictogrammersMonogram}
                    width={346}
                  />
                  <figcaption>16px</figcaption>
                </figure>
              </div>
            </section>

            <section>
              <Heading2>Icon Library Logos</Heading2>
              <p>Each of our icon libraries maintain their own visual identity in terms of logo and color. Please show them the same care and respect as the Pictogrammers monogram.</p>
              <div className={cx(brandClasses.library, brandClasses.mdi)}>
                <MDILogoSvg title='Material Design Icons logo' />
                <div className={brandClasses.swatch}>
                  <h3>Material Design Icons</h3>
                  <div className={brandClasses.values}>
                    <p>HEX<br />#2196F3</p>
                    <p>RGB<br />33 150 243</p>
                    <p>CMYK<br />82 36 0 5</p>
                  </div>
                </div>
              </div>
              <div className={cx(brandClasses.library, brandClasses.mdl)}>
                <MDLLogoSvg title='Material Design Icons Light logo' />
                <div className={brandClasses.swatch}>
                  <h3>Material Design Light</h3>
                  <div className={brandClasses.values}>
                    <p>HEX<br />#5A88AD</p>
                    <p>RGB<br />90 136 173</p>
                    <p>CMYK<br />33 15 0 32</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <Heading2>Guidance</Heading2>
              <p>Please maintain consistency of our brand by not misusing the Pictogrammers logo, monogram, wordmark, or any of our various icon library logos. If you have a question about whether your use of our logo is accepted, please <Link href='https://fosstodon.org/@pictogrammers' rel='me' target='_blank'>get in touch</Link>.
              </p>
              <div className={brandClasses.rules}>
                <figure>
                  <Image
                    alt='Pictogrammers logo on a busy background'
                    height={120}
                    src={GuidanceBusyBack}
                    width={400}
                  />
                  <figcaption>Do not place the logo on busy backgrounds.</figcaption>
                </figure>
                <figure>
                  <Image
                    alt='Pictogrammers logo with altered colors'
                    height={120}
                    src={GuidanceAlterColor}
                    width={400}
                  />
                  <figcaption>Do not alter the logo colors.</figcaption>
                </figure>
                <figure>
                  <Image
                    alt='Pictogrammers logo with recreated wordmark'
                    height={120}
                    src={GuidanceWordmarkRecreate}
                    width={400}
                  />
                  <figcaption>Do not recreate the wordmark in Manrope.</figcaption>
                </figure>
                <figure>
                  <Image
                    alt='Pictogrammers logo with manipulated wordmark'
                    height={120}
                    src={GuidanceWordmarkReplace}
                    width={400}
                  />
                  <figcaption>Do not change the typeface or manipulate the wordmark.</figcaption>
                </figure>
                <figure>
                  <Image
                    alt='Pictogrammers logo with adjusted sizes'
                    height={120}
                    src={GuidanceAdjustedSize}
                    width={400}
                  />
                  <figcaption>Do not adjust or reconfigure the size or placement of any logo elements.</figcaption>
                </figure>
                <figure>
                  <Image
                    alt='Pictogrammers logo with distortions'
                    height={120}
                    src={GuidanceDistorted}
                    width={400}
                  />
                  <figcaption>Do not rotate, skew, stretch, or distort the logo.</figcaption>
                </figure>
                <figure>
                  <Image
                    alt='Pictogrammers logo with a shadow'
                    height={120}
                    src={GuidanceShadowed}
                    width={400}
                  />
                  <figcaption>Do not apply bevel, shadow, or other effects to the logo.</figcaption>
                </figure>
                <figure>
                  <Image
                    alt='Pictogrammers logo with a section cropped'
                    height={120}
                    src={GuidanceCropped}
                    width={400}
                  />
                  <figcaption>Do not cut the logo.</figcaption>
                </figure>
              </div>
            </section>
          </div>
        </article>
        <aside>
            <div className={classes.sidenav}>
              <TableOfContents toc={toc} />
            </div>
          </aside>
      </Paper>
    </div>
  );
};

export default PostPage;
