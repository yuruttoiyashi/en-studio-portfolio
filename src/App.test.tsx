import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('EN STUDIO portfolio shell', () => {
  it('shows the studio name and the approved tagline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'EN STUDIO' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'EN STUDIO' })).toHaveTextContent(
      'ご縁をつなぐ、Web制作。',
    )
  })

  it('shows all three published works with clear external links', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'MOOD.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '癒し処 結月' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'もふもふ日和' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /MOOD\..*公開サイト/ })).toHaveAttribute(
      'href',
      'https://mood-salon-five.vercel.app',
    )
    expect(screen.getByRole('link', { name: /癒し処 結月.*公開サイト/ })).toHaveAttribute(
      'href',
      'https://yuzuki-site-cehl.vercel.app/',
    )
    expect(screen.getByRole('link', { name: /もふもふ日和.*公開サイト/ })).toHaveAttribute(
      'href',
      'https://mofumofu-biyori.vercel.app/',
    )
  })

  it('explains the service range, process, and safe consultation path', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByText('店舗・サロンサイト')).toBeInTheDocument()
    expect(screen.getByText('企業サイト')).toBeInTheDocument()
    expect(screen.getByText('採用サイト')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Process' })).toBeInTheDocument()
    expect(screen.getByText('ヒアリング')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About EN STUDIO' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /メール/ })).toBeNull()
  })

  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menuButton = screen.getByRole('button', { name: 'メニューを開く' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    const mobileNavigation = screen.getByRole('navigation', { name: 'モバイルナビゲーション' })
    expect(mobileNavigation).toBeInTheDocument()
    await user.click(within(mobileNavigation).getByRole('link', { name: 'Works' }))
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
