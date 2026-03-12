import {
  PiArrowDownBold,
  PiArrowUpBold,
  PiBellBold,
  PiCalendar,
  PiCaretDoubleLeftBold,
  PiCaretDoubleRightBold,
  PiCaretLeftBold,
  PiCaretLineLeftBold,
  PiCaretLineRightBold,
  PiCaretRightBold,
  PiCaretUpDown,
  PiChartLineBold,
  PiChartScatterBold,
  PiCheckBold,
  PiDotsThreeOutlineVerticalFill,
  PiEmptyBold,
  PiEnvelopeSimpleBold,
  PiExclamationMarkBold,
  PiEyeBold,
  PiFloppyDiskBold,
  PiGearBold,
  PiGithubLogoBold,
  PiGoogleLogoBold,
  PiHouseBold,
  PiListBold,
  PiLockBold,
  PiMagnifyingGlassBold,
  PiMailbox,
  PiMailboxBold,
  PiMoneyBold,
  PiNumpadBold,
  PiPaintBrushBold,
  PiPencilBold,
  PiPhoneBold,
  PiPlusBold,
  PiQuestionMarkBold,
  PiSignInBold,
  PiSignOutBold,
  PiUserBold,
  PiUserPlus,
  PiXBold,
} from 'react-icons/pi';

export const IconMap = {
  signIn: <PiSignInBold size={'100%'} />,
  signOut: <PiSignOutBold size={'100%'} />,
  emailbox: <PiMailboxBold size={'100%'} />,
  email: <PiEnvelopeSimpleBold size={'100%'} />,
  lock: <PiLockBold size={'100%'} />,
  user: <PiUserBold size={'100%'} />,
  userPlus: <PiUserPlus size={'100%'} />,
  phone: <PiPhoneBold size={'100%'} />,
  search: <PiMagnifyingGlassBold size={'100%'} />,
  eyeOpen: <PiEyeBold size={'100%'} />,
  code: <PiNumpadBold size={'100%'} />,
  questionMark: <PiQuestionMarkBold size={'100%'} />,
  google: <PiGoogleLogoBold size={'100%'} />,
  github: <PiGithubLogoBold size={'100%'} />,
  checkMark: <PiCheckBold size={'100%'} />,
  menu: <PiListBold size={'100%'} />,
  settings: <PiGearBold size={'100%'} />,
  home: <PiHouseBold size={'100%'} />,
  chart: <PiChartLineBold size={'100%'} />,
  chartBar: <PiChartScatterBold size={'100%'} />,
  logo: <PiGoogleLogoBold size={'100%'} />,
  close: <PiXBold size={'100%'} />,
  warning: <PiExclamationMarkBold size={'100%'} />,
  menuDots: <PiDotsThreeOutlineVerticalFill size={'100%'} />,
  currency: <PiMoneyBold size={'100%'} />,
  caretLeft: <PiCaretLeftBold size={'100%'} />,
  caretRight: <PiCaretRightBold size={'100%'} />,
  caretLineRight: <PiCaretLineRightBold size={'100%'} />,
  caretLineLeft: <PiCaretLineLeftBold size={'100%'} />,
  skipRight: <PiCaretDoubleRightBold size={'100%'} />,
  skipLeft: <PiCaretDoubleLeftBold size={'100%'} />,
  plus: <PiPlusBold size={'100%'} />,
  save: <PiFloppyDiskBold size={'100%'} />,
  address: <PiMailbox size={'100%'} />,
  brush: <PiPaintBrushBold size={'100%'} />,
  pencil: <PiPencilBold size={'100%'} />,
  notification: <PiBellBold size={'100%'} />,
  dollar: <PiMoneyBold size={'100%'} />,
  calendar: <PiCalendar size={'100%'} />,
  upDownArrow: <PiCaretUpDown size={'100%'} />,
  upArrow: <PiArrowUpBold size={'100%'} />,
  downArrow: <PiArrowDownBold size={'100%'} />,
  list: <PiListBold size={'100%'} />,
  noType: <PiEmptyBold size={'100%'} />,
};

export interface IconProps {
  className?: string;
  iconType?: keyof typeof IconMap;
  iconSize?: '1rem' | '1.2rem' | '1.4rem' | '1.6rem' | '1.8rem' | '2rem';
}

export const Icons = (props: IconProps) => {
  const { className = '', iconSize = '1.4rem', iconType } = props;
  const currentIcon = IconMap[iconType || 'noType'];

  return (
    <span className={`icon block ${className}`} style={{ width: iconSize, height: iconSize }}>
      {currentIcon}
    </span>
  );
};

/* Tailwind include
    w-[1rem] w-[1.2rem] w-[1.4rem] w-[1.6rem] w-[1.8rem] w-[2rem]
*/
