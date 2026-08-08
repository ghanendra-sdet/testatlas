import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import BlogPostItem from '@theme/BlogPostItem';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItems';
import styles from './styles.module.css';

// Upstream BlogPostItems renders nothing at all when there are zero posts —
// confirmed on the live site as a blank content area under "Notes" with no
// message and no way back to the actual content. This is the smallest
// surgical addition: an honest empty state, not placeholder content.
function EmptyState(): ReactNode {
  return (
    <div className={styles.emptyState}>
      <h2>Nothing published here yet</h2>
      <p>
        The TestAtlas Blog will carry project updates and practical quality-engineering write-ups as they're
        published. In the meantime, the 223 modules across 11 learning paths are what&rsquo;s actually live today.
      </p>
      <Link className="button button--primary" to="/learning-paths/foundations/what-is-software-testing">
        Browse Learning Paths
      </Link>
    </div>
  );
}

export default function BlogPostItems({items, component: BlogPostItemComponent = BlogPostItem}: Props): ReactNode {
  if (items.length === 0) {
    return <EmptyState />;
  }
  return (
    <>
      {items.map(({content: BlogPostContent}) => (
        <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </>
  );
}
