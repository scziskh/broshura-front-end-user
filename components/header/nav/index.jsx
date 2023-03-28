import styled from 'styled-components';
import { builder } from '../../../helpers/builders/navigation';
import LangItem from './item.lang';
import MenuItem from './item.menu';
import ToggleItem from './item.toggle';

const HeaderNav = (props) => {
  const mainGroup = builder.GROUP_MAIN;
  const trackGroup = builder.GROUP_TRACK;
  const langGroup = builder.GROUP_LANG;

  const { text } = props;

  const keysMainItems = Object.keys(mainGroup);
  const itemsMain = keysMainItems.map((item) => {
    const { name, href } = mainGroup[item];
    return <MenuItem key={item} name={text?.[name]} href={href} />;
  });

  const keysTrackItems = Object.keys(trackGroup);
  const itemsTrack = keysTrackItems.map((item) => {
    const { name, href } = trackGroup[item];
    return <MenuItem key={item} name={text?.[name]} href={href} bordered />;
  });

  const keysLangItems = Object.keys(langGroup);
  const itemsLang = keysLangItems.map((item) => {
    const { name, locale } = langGroup[item];
    return <LangItem key={item} name={text?.[name]} locale={locale} />;
  });

  return (
    <Wrapper>
      <ToggleItem />
      <ul className="noLS">
        {itemsMain}
        {itemsTrack}
        <LangWrapper>{itemsLang}</LangWrapper>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  & {
    position: absolute;
    right: 0;
    display: flex;
    top: 36px;
    ul {
      display: flex;
      gap: 10px;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 980px) {
    & {
      z-index: 120;
      position: fixed;
      top: 0;
      left: 0;
      ul {
        display: block;
        position: fixed;
        visibility: hidden;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 360px;
        height: 100%;
        padding: 64px 0;
        text-align: center;
        background-color: var(--black);
        transition-duration: var(--transition);
        z-index: 99;
        box-shadow: var(--blackShadow);
        a {
          margin-bottom: 24px;
        }
      }
    }
  }
`;

const LangWrapper = styled.div`
  & {
    display: inline-flex;
    margin-left: 15px;
  }
  @media screen and (max-width: 980px) {
    & {
      position: absolute;
      bottom: calc(100% - 100vh);
      right: 50%;
      transform: translateX(50%);
      margin-left: 0;
    }
  }
`;

export default HeaderNav;
