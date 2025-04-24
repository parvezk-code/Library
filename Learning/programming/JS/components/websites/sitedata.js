window.siteData = {
  navBarConfig: {
        config01: {
          logo: 'MySite',
          links: [
            { text: 'Home', url: '#' },
            { text: 'Products', url: '#' },
            { text: 'About', url: '#' }
          ]
        },
        config02: {
          logo: 'ARSHA',
          links: [
            { text: 'Home', url: '#home' },
            { text: 'About', url: '#about' },
            { text: 'Services', url: '#services' },
            { text: 'Portfolio', url: '#portfolio' },
            { text: 'Team', url: '#team' },
            { text: 'Pricing', url: '#pricing' },
            { text: 'Blog', url: '#blog' },
            { text: 'Dropdown', url: '#dropdown' }
          ],
          button: { text: 'Get Started', url: '#contact' }
        }
  },
  tickerConfig: {
    config01: {
      items: [
        { title: 'Mascenas nec', count: '8 Products' },
        { title: 'Aenean tellus', count: '4 Products' },
        { title: 'Donec quam', count: '12 Products' },
        { title: 'Phasellus leo', count: '4 Products' }
      ],
      interval: 2000,
      controls: true,
      speed: 1
    },
    config02: {
      items: [
        { title: 'New Arrivals', description: 'Just launched', image: 'img/new1.jpg' },
        { title: 'Top Sellers', description: 'Most popular', image: 'img/top1.jpg' },
        { title: 'Limited Edition', description: 'Only a few left!', image: 'img/limited1.jpg' },
        { title: 'Best Deals', description: 'Don’t miss out!', image: 'img/deals1.jpg' }
      ],
      interval: 3000,
      controls: true,
      speed: 1.5
    }
  },
  categoryConfig: {
    categories: [
      { name: 'Mascenas nec', count: 8 },
      { name: 'Aenean tellus', count: 4 },
      { name: 'Donec quam', count: 12 },
      { name: 'Phasellus leo', count: 4 },
      { name: 'Quisque rutrum', count: 2 },
      { name: 'Etiam ultricies', count: 4 }
    ]
  },
  footerConfig: {
    copyright: '© 2025 My Website',
    links: [
      { text: 'Privacy Policy', url: '#' },
      { text: 'Terms of Service', url: '#' }
    ]
  }
};
