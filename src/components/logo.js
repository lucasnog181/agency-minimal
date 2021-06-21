/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

import Scr from '../assets/logo.png'

export default function Logo({ ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}

      {...rest}
    >

      <Image src={Scr} alt="Logo" />

    </Link>
  );
}
