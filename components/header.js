'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { navigation, site } from '@/lib/site-data';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  function handleSearchSubmit(event) {
    event.preventDefault();

    if (search.trim()) {
      router.push('/products/#catalog');
      setSearch('');
      setMenuOpen(false);
      return;
    }

    router.push('/products/');
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link className="brand-mark" href="/">
          <Image
            alt={`${site.shortName} logo`}
            className="brand-logo"
            height={72}
            priority
            src={site.logoPath}
            width={72}
          />
          <div className="brand-copy">
            <span>{site.shortName}</span>
            <strong>{site.name}</strong>
          </div>
        </Link>

        <form className="site-search" onSubmit={handleSearchSubmit}>
          <input
            aria-label="Search equipment"
            name="search"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search equipment, systems, parts..."
            type="search"
            value={search}
          />
          <button type="submit">Search</button>
        </form>

        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          {navigation.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href.replace(/\/$/, ''));

            return (
              <Link
                className={active ? 'is-active' : ''}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="header-cta" href="/contact/" onClick={() => setMenuOpen(false)}>
            Request Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
