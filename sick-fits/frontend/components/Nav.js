import Link from 'next/link';
import SideBarStyles from './styles/SideBarStyles';

export default function Nav() {
  return (
    <nav>
      <SideBarStyles>
        <Link href="/">NOWOŚCI</Link>
        <Link href="/">PROMOCJE</Link>
        <Link href="/">Wszystkie</Link>
        <Link href="/">Bambino</Link>
        <Link href="/">Bambino Family</Link>
        <Link href="/">Eucerin</Link>
        <Link href="/">Nivea baby</Link>
        <Link href="/">Nivea bath care men</Link>
        <Link href="/">Nivea bath care women</Link>
        <Link href="/">nivea body</Link>
        <Link href="/">nivea creams</Link>
        <Link href="/">nivea deo men</Link>
        <Link href="/">nivea deo women</Link>
        <Link href="/">nivea face men after shave</Link>
        <Link href="/">nivea face men care</Link>
        <Link href="/">nivea face men shaving</Link>
      </SideBarStyles>
    </nav>
  );
}
