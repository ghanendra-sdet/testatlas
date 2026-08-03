/**
 * Swizzled from @docusaurus/theme-classic's DocBreadcrumbs (safe swizzle:
 * a small, self-contained leaf component — not an internal or unsafe target).
 *
 * The only change from the original: strips a leading "NN " module-number
 * prefix (e.g. "03 Software Testing Principles" -> "Software Testing
 * Principles") from each breadcrumb label before rendering.
 *
 * Why this exists: sidebar_label frontmatter carries the module number so
 * learners can see their position in the curriculum in the sidebar. But
 * Docusaurus's breadcrumbs derive their label from that same sidebar_label,
 * so without this override, the number would leak into breadcrumbs too —
 * which is site navigation (and what Google reads for BreadcrumbList
 * structured data), not learning-progression navigation. See
 * VISUAL_STANDARDS.md's navigation policy: numbers live in the sidebar only.
 *
 * Everything else below is unchanged from Docusaurus's own implementation,
 * so this override stays trivial to keep in sync with upstream.
 */
import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';
import styles from './styles.module.css';

// Strips a leading "NN " sequence used only for sidebar module numbering.
function stripModuleNumber(label: string): string {
  return label.replace(/^\d{1,3}\s+/, '');
}

function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: {
  children: React.ReactNode;
  href: string | undefined;
  isLast: boolean;
}) {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return <span className={className}>{children}</span>;
  }
  return href ? (
    <Link className={className} href={href}>
      <span>{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

function BreadcrumbsItem({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <li
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}>
      {children}
    </li>
  );
}

export default function DocBreadcrumbs(): React.ReactNode {
  const rawBreadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!rawBreadcrumbs) {
    return null;
  }

  // De-numbered copy, used for both the visible breadcrumb trail and the
  // BreadcrumbList structured data — both should read cleanly to a learner
  // and to Google, with no sidebar-only numbering leaking through.
  const breadcrumbs = rawBreadcrumbs.map((item) => ({
    ...item,
    label: stripModuleNumber(item.label),
  }));

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      <nav
        className={clsx(
          ThemeClassNames.docs.docBreadcrumbs,
          styles.breadcrumbsContainer,
        )}
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.navAriaLabel',
          message: 'Breadcrumbs',
          description: 'The ARIA label for the breadcrumbs',
        })}>
        <ul className="breadcrumbs">
          {homePageRoute && <HomeBreadcrumbItem />}
          {breadcrumbs.map((item, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            const href =
              item.type === 'category' && item.linkUnlisted
                ? undefined
                : item.href;
            return (
              <BreadcrumbsItem key={idx} active={isLast}>
                <BreadcrumbsItemLink href={href} isLast={isLast}>
                  {item.label}
                </BreadcrumbsItemLink>
              </BreadcrumbsItem>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
