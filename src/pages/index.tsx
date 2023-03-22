import {Link} from 'umi'
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <Link to='/login'>去login</Link>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
