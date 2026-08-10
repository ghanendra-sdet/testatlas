import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import type {Props} from '@theme/DocSidebar/Desktop';

import styles from './styles.module.css';

/**
 * The collapse toggle is scoped to individual Learning Paths module
 * content pages only — not the Learning Paths landing page, not
 * auto-generated category index pages (/learning-paths/category/...),
 * and not the Resources/Project sections. Those are short, navigational
 * pages where losing the sidebar isn't useful; it's the long module
 * articles where reclaiming the width actually helps readability.
 *
 * Matches "/learning-paths/<module>/<page>" and requires the segment
 * right after "learning-paths" not be "category". Uses the path prop
 * (not a hook) so it works identically in production under any baseUrl.
 */
function isLearningPathContentPage(path: string): boolean {
  const match = path.match(/\/learning-paths\/([^/]+)\/([^/]+)/);
  if (!match) return false;
  const [, firstSegment] = match;
  return firstSegment !== 'category';
}

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}: Props) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();

  const showCollapseButton = hideable && isLearningPathContentPage(path);

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <Content path={path} sidebar={sidebar} />
      {showCollapseButton && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
