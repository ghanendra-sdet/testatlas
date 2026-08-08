import {useEffect} from 'react';
import type {ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';

// Safe wrapper swizzle (no internal component logic touched). After every
// route change, bring the active sidebar link into view if it's scrolled
// out of the sidebar's visible area — mainly for deep links (search results,
// external links) that land far down an 11-path sidebar.
function useAutoScrollActiveSidebarItem(): void {
  const location = useLocation();

  useEffect(() => {
    // No docs sidebar on this page (e.g. homepage, blog) — nothing to do.
    const sidebar = document.querySelector<HTMLElement>('.theme-doc-sidebar-container');
    if (!sidebar) {
      return;
    }
    const activeLink = document.querySelector<HTMLElement>(
      '.theme-doc-sidebar-menu .menu__link--active',
    );
    if (!activeLink) {
      return;
    }
    // The sidebar's actual scroll container is <nav class="menu">, not the
    // outer aside (which just grows to fit its content, overflow: visible).
    const container = activeLink.closest<HTMLElement>('nav.menu');
    if (!container) {
      return;
    }
    // Mobile sidebar closed (off-canvas) or otherwise not rendered — skip,
    // there's nothing visible to scroll.
    if (container.offsetParent === null) {
      return;
    }
    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const isVisible = linkRect.top >= containerRect.top && linkRect.bottom <= containerRect.bottom;
    if (isVisible) {
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    activeLink.scrollIntoView({
      // "nearest" scrolls the minimum distance needed rather than
      // re-centering — matters once there are many more paths and the
      // active item is only barely out of view.
      block: 'nearest',
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [location.pathname]);
}

export default function Root({children}: {children: ReactNode}): ReactNode {
  useAutoScrollActiveSidebarItem();
  return <>{children}</>;
}
