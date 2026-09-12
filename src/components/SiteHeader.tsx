import { useState } from 'react'
import { content } from '../data/content'

type NavigationLinksProps = {
  onNavigate?: () => void
}

function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  return (
    <>
      {content.navigation.map((item) => (
        <a key={item.href} href={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      ))}
    </>
  )
}

function SiteHeader() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href="#top" aria-label="EN STUDIO トップへ">
          EN STUDIO
        </a>
        <nav className="site-header__desktop-nav" aria-label="メインナビゲーション">
          <NavigationLinks />
        </nav>
        <button
          className="site-header__menu-button"
          type="button"
          aria-expanded={isMobileNavigationOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileNavigationOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setIsMobileNavigationOpen((isOpen) => !isOpen)}
        >
          MENU
        </button>
        <nav
          className="site-header__mobile-nav"
          id="mobile-navigation"
          aria-label="モバイルナビゲーション"
          hidden={!isMobileNavigationOpen}
        >
          <NavigationLinks onNavigate={() => setIsMobileNavigationOpen(false)} />
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
