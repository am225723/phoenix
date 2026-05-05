import React, { useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { brand, collections, money, navItems, products } from './data.js';

function Icon({ name }) {
  const paths = {
    bag: 'M6.5 8.5h11l-1 11h-9l-1-11Z M9 8.5a3 3 0 0 1 6 0',
    star: 'm12 3 2.7 5.9 6.3.7-4.7 4.3 1.3 6.1-5.6-3.1L6.4 20l1.3-6.1L3 9.6l6.3-.7L12 3Z',
    arrow: 'M5 12h14 m-6-6 6 6-6 6',
    search: 'm21 21-4.4-4.4 M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z',
    mail: 'M4 6h16v12H4z m0 1 8 6 8-6',
    user: 'M20 21a8 8 0 0 0-16 0 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
    menu: 'M4 7h16 M4 12h16 M4 17h16',
    close: 'M6 6l12 12 M18 6 6 18',
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name] || paths.star} /></svg>;
}

function ScrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Layout({ cart, children }) {
  const [open, setOpen] = useState(false);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const close = () => { setOpen(false); ScrollTop(); };

  return (
    <>
      <div className="site-bg" />
      <header className="header">
        <Link to="/" onClick={close} className="brand-link">
          <img src={brand.logo} alt="Fixed Star Comics logo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span>FIXED STAR COMICS</span>
        </Link>
        <nav className="desktop-nav">
          {navItems.slice(1).map((item) => <NavLink key={item.path} to={item.path}>{item.label}</NavLink>)}
        </nav>
        <div className="desktop-actions">
          <Link to="/account" className="icon-button" aria-label="Account"><Icon name="user" /></Link>
          <Link to="/cart" className="cart-pill"><Icon name="bag" /> Cart ({count})</Link>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Open menu"><Icon name={open ? 'close' : 'menu'} /></button>
      </header>
      {open && <nav className="mobile-nav">{navItems.map((item) => <NavLink key={item.path} to={item.path} onClick={close}>{item.label}</NavLink>)}<Link to="/cart" onClick={close}>Cart ({count})</Link></nav>}
      {children}
      <Footer />
    </>
  );
}

function PageHero({ eyebrow, title, description }) {
  return <section className="page-hero reveal"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description && <p className="lead">{description}</p>}</section>;
}

function Glass({ children, className = '' }) {
  return <div className={`glass ${className}`}>{children}</div>;
}

function ProductImage({ product, tall = true }) {
  return <div className={`product-image ${tall ? 'tall' : ''}`}><img src={brand.background} alt={product?.title || 'Phoenix Rebirth artwork'} onError={(e) => { e.currentTarget.style.display = 'none'; }} /><div className="card-frame" /><div className="card-title"><strong>{product?.shortTitle || 'Phoenix Rebirth'}</strong><span>{product?.format || 'Digital artifact'}</span></div></div>;
}

function ProductCard({ product, addToCart }) {
  return <article className="product-card"><Link to={`/product/${product.id}`} onClick={ScrollTop} className="product-card-image"><img src={brand.background} alt={product.title} onError={(e) => { e.currentTarget.style.display = 'none'; }} /><span>{product.badge}</span></Link><div className="product-card-body"><p className="eyebrow small">{product.category}</p><Link to={`/product/${product.id}`} onClick={ScrollTop} className="product-title">{product.title}</Link><p>{product.description}</p><div className="product-row"><strong>{money(product.price)}</strong><button onClick={() => addToCart(product)}>Add</button></div></div></article>;
}

function Home({ addToCart }) {
  const featured = products.find((p) => p.featured);
  return <main><section className="hero"><div className="hero-inner reveal"><p className="hero-chip"><Icon name="star" /> Founders Collection</p><h1>{brand.tagline}</h1><p>{brand.subtagline}</p><div className="button-row"><Link to="/shop" className="button primary">Shop the Founders Collection <Icon name="arrow" /></Link><Link to="/universe" className="button secondary">Enter the Universe</Link></div></div></section><section className="section grid-two"><Glass><p className="eyebrow">Featured collection</p><h2>Founders Collection</h2><p>The first official release from the Phoenix Rebirth universe.</p><Link to="/collections" className="button secondary">Explore Collection</Link></Glass><BundleMockup /></section><Divider /><section className="section grid-two"><ProductImage product={featured} /><div className="copy-block"><p className="eyebrow">Featured product</p><h2>Phoenix Rebirth Tarot — Major Arcana Founders Collection <span>(Digital)</span></h2><p>A premium digital collection for rebirth, transformation, and spiritual insight.</p><Badges /><div className="buy-row"><strong>{money(featured.price)}</strong><button onClick={() => addToCart(featured)} className="button primary"><Icon name="bag" /> Add to Cart</button><Link to={`/product/${featured.id}`} className="button secondary">View Details</Link></div></div></section><ShopPreview addToCart={addToCart} /><AboutPreview /><Closing /></main>;
}

function BundleMockup() {
  return <div className="bundle"><div className="mock comic"><img src={brand.background} alt="Comic mockup" /></div><div className="mock tarot"><img src={brand.background} alt="Tarot mockup" /></div><div className="mock box"><img src={brand.logo} alt="Fixed Star symbol" /></div></div>;
}

function Divider() { return <div className="divider"><span /><Icon name="star" /><span /></div>; }
function Badges() { return <div className="badges"><span>Digital download</span><span>Secure checkout</span><span>Founders release</span></div>; }

function ShopPreview({ addToCart }) {
  return <section className="section"><div className="center-copy"><p className="eyebrow">Ecommerce shop</p><h2>Shop the Mythos</h2><p>Tarot, comics, digital collections, and collectible art designed as artifacts of personal empowerment.</p></div><div className="product-grid four">{products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} addToCart={addToCart} />)}</div><div className="center"><Link to="/shop" className="button secondary">View Full Shop</Link></div></section>;
}

function Shop({ addToCart }) {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const categories = useMemo(() => ['All', ...new Set(products.map((p) => p.category))], []);
  const filtered = products.filter((p) => (filter === 'All' || p.category === filter) && `${p.title} ${p.category} ${p.description}`.toLowerCase().includes(query.toLowerCase()));
  return <main><PageHero eyebrow="Ecommerce shop" title="Shop the Mythos" description="Explore tarot, comics, symbolic tools, digital collections, and collectible creations designed to awaken truth, rebirth, and personal power." /><section className="section"><Glass className="shop-tools"><label><Icon name="search" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tarot, comics, art..." /></label><div>{categories.map((c) => <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'active' : ''}>{c}</button>)}</div></Glass><div className="product-grid">{filtered.map((p) => <ProductCard key={p.id} product={p} addToCart={addToCart} />)}</div></section></main>;
}

function Product({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  return <main><section className="section product-detail"><ProductImage product={product} /><div><Link to="/shop" className="back-link">← Back to Shop</Link><p className="eyebrow">{product.category} / {product.format}</p><h1>{product.title}</h1><p>{product.longDescription}</p><Badges /><Glass className="included"><h2>Included</h2><ul>{product.includes.map((item) => <li key={item}><Icon name="star" /> {item}</li>)}</ul></Glass><div className="buy-row"><strong>{money(product.price)}</strong><button onClick={() => addToCart(product)} className="button primary"><Icon name="bag" /> Add to Cart</button></div></div></section><section className="section"><h2>Related artifacts</h2><div className="product-grid three">{related.map((p) => <ProductCard key={p.id} product={p} addToCart={addToCart} />)}</div></section></main>;
}

function Collections() { return <main><PageHero eyebrow="Collections" title="Founders, tools, and mythic releases" description="Each collection is designed as a doorway into the Fixed Star Comics mythos — part story, part symbolic artifact, part personal transformation tool." /><section className="section collection-grid">{collections.map((c) => <Glass key={c.id} className="collection-card"><p className="eyebrow small">{c.eyebrow}</p><h2>{c.title}</h2><p>{c.description}</p><Link to="/shop" className="button secondary">Shop Collection</Link></Glass>)}</section><Closing /></main>; }

function Universe() { return <main><PageHero eyebrow="Phoenix Rebirth universe" title="A symbolic world of fire, shadow, and renewal" description="Through comics, tarot, and collectible creations, the Phoenix Rebirth universe invites you into a mythic journey of self-remembering and personal power." /><section className="section"><div className="grid-two"><Glass><h2>The Mythic Arc</h2><p>Phoenix Rebirth follows the path of transformation: alignment, belief, activation, receiving, possession, readiness, commitment, and trust.</p></Glass><Glass><h2>The Artifacts</h2><p>Tarot cards, comics, digital prints, and reflection tools operate as story objects — designed to be collected, contemplated, and used as mirrors for inner transformation.</p></Glass></div><div className="word-grid">{['Align','Believe','Activate','Receive','Possess','Ready','Commit','Trust'].map((w) => <span key={w}><Icon name="star" />{w}</span>)}</div></section></main>; }

function About() { return <main><PageHero eyebrow="About" title="Fixed Star Comics creates artifacts of becoming" description="A mythic art and storytelling brand for seekers, storytellers, collectors, and visionaries." /><section className="section"><Glass className="about-main"><h2>About Fixed Star Comics</h2><p>Fixed Star Comics creates mythic stories, symbolic tools, and transformative art for seekers, storytellers, collectors, and visionaries. Rooted in the Phoenix Rebirth universe, our work blends tarot, comics, archetypal storytelling, and collectible design into artifacts of personal empowerment. Each release is designed to invite reflection, awaken truth, and honor the process of becoming.</p></Glass><div className="collection-grid"><Glass><h2>Mythic Stories</h2><p>Narratives built around archetypes, thresholds, transformation, and personal power.</p></Glass><Glass><h2>Symbolic Tools</h2><p>Tarot, reflection pages, sigils, and artifacts designed to invite inner work.</p></Glass><Glass><h2>Transformative Art</h2><p>Cinematic, collectible imagery for awakening, rebirth, and creative identity.</p></Glass></div></section></main>; }

function Contact() { return <main><PageHero eyebrow="Contact" title="Connect with Fixed Star Comics" description="For collaborations, wholesale, licensing, press, or questions about digital products, send a transmission below." /><section className="section grid-two"><Glass><h2>Contact details</h2><p><b>Email:</b> hello@fixedstarcomics.com</p><p><b>Support:</b> Digital downloads, account access, and order help</p><p><b>Social:</b> Instagram / TikTok / YouTube placeholders</p></Glass><Glass><h2>Send a message</h2><form className="form"><input placeholder="Name" /><input type="email" placeholder="Email" /><textarea placeholder="Message" /><button type="button" className="button primary">Send Message</button></form></Glass></section></main>; }

function Cart({ cart, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <main><PageHero eyebrow="Cart" title="Your selected artifacts" description="Review your digital items before heading to checkout." /><section className="section">{cart.length === 0 ? <Glass className="empty"><h2>Your cart is empty</h2><p>Begin with tarot, comics, symbolic tools, or collectible art.</p><Link to="/shop" className="button primary">Shop Now</Link></Glass> : <div className="cart-layout"><div className="cart-items">{cart.map((item) => <Glass key={item.id} className="cart-item"><img src={brand.background} alt={item.title} /><div><p className="eyebrow small">{item.format}</p><h2>{item.title}</h2><p>{money(item.price)}</p></div><div className="qty"><button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div><button onClick={() => removeFromCart(item.id)} className="remove">Remove</button></Glass>)}</div><Glass className="summary"><h2>Order Summary</h2><p><span>Subtotal</span><b>{money(subtotal)}</b></p><p><span>Digital delivery</span><b>Free</b></p><p className="total"><span>Total</span><b>{money(subtotal)}</b></p><button className="button primary">Checkout</button><small>Checkout button placeholder for Shopify, Stripe, or Gumroad integration.</small></Glass></div>}</section></main>;
}

function Account() { return <main><PageHero eyebrow="Account" title="Collector portal" description="A placeholder page for login, digital downloads, saved products, and order history." /><section className="section"><Glass className="login"><h2>Sign in</h2><form className="form"><input type="email" placeholder="Email" /><input type="password" placeholder="Password" /><button type="button" className="button primary">Sign In</button></form></Glass></section></main>; }
function AboutPreview() { return <section className="section"><Glass className="about-main"><h2>About Fixed Star Comics</h2><p>Fixed Star Comics creates mythic stories, symbolic tools, and transformative art for seekers, storytellers, collectors, and visionaries.</p><Link to="/about" className="button primary">Read About the Brand</Link></Glass></section>; }
function Closing() { return <section className="closing"><h2>Transformation begins when you fully become who you are.</h2><Link to="/shop" className="button secondary">Begin with the Founders Collection</Link></section>; }
function Footer() { return <footer className="footer"><div><img src={brand.logo} alt="Fixed Star Comics logo" onError={(e) => { e.currentTarget.style.display = 'none'; }} /><p>Mythic stories, symbolic tools, and transformative art for seekers, storytellers, collectors, and visionaries.</p><div>{navItems.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}</div></div><Glass><h2><Icon name="mail" /> Receive transmissions</h2><p>Join the list for new releases, founders drops, tarot updates, and Phoenix Rebirth universe notes.</p><form className="newsletter"><input type="email" placeholder="Email address" /><button type="button">Sign Up</button></form></Glass><small>Copyright © Fixed Star Comics. All rights reserved.</small></footer>; }

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart((items) => { const found = items.find((item) => item.id === product.id); return found ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }]; });
  const updateQuantity = (id, quantity) => setCart((items) => items.flatMap((item) => item.id !== id ? [item] : quantity <= 0 ? [] : [{ ...item, quantity }]));
  const removeFromCart = (id) => setCart((items) => items.filter((item) => item.id !== id));

  return <Layout cart={cart}><Routes><Route path="/" element={<Home addToCart={addToCart} />} /><Route path="/shop" element={<Shop addToCart={addToCart} />} /><Route path="/product/:id" element={<Product addToCart={addToCart} />} /><Route path="/collections" element={<Collections />} /><Route path="/universe" element={<Universe />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} /><Route path="/account" element={<Account />} /><Route path="*" element={<Home addToCart={addToCart} />} /></Routes></Layout>;
}
