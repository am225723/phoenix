import { describe, expect, it } from 'vitest';
import { brand, navItems, products } from './data.js';

describe('Fixed Star Comics ecommerce data', () => {
  it('has the required brand assets for Vercel public folder', () => {
    expect(brand.logo).toBe('/fsclogo.png');
    expect(brand.background).toBe('/background.png');
  });

  it('has all required storefront pages', () => {
    const paths = navItems.map((item) => item.path);
    expect(paths).toEqual(expect.arrayContaining(['/', '/shop', '/collections', '/universe', '/about', '/contact']));
  });

  it('has unique products with valid ecommerce fields', () => {
    const ids = new Set(products.map((product) => product.id));
    expect(ids.size).toBe(products.length);
    expect(products.length).toBeGreaterThanOrEqual(6);
    expect(products.every((product) => product.title && product.category && product.format && product.price >= 0)).toBe(true);
  });

  it('has one featured product for the homepage', () => {
    expect(products.filter((product) => product.featured)).toHaveLength(1);
  });
});
