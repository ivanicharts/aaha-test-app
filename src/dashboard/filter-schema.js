import f from './components/FilterTypes'; 

export default [
  {
    component: f.equality,
    name: 'f',
    label: 'Filters',
    fields: [
      { name: 'referrer.host', label: 'Host', defaultValue: 'm.facebook.com', defaultSelect: '!=' },
      { name: 'device_type', label: 'Device Type', defaultValue: 'mobile' }
    ]
  },
  { 
    component: f.list, 
    name: 'fields', 
    label: 'Fields', 
    defaultValue: 'published, title, segment.slug, segment.path, referrer.host' 
  },
  { component: f.list, name: 'enclosures', label: 'Enclosures', defaultValue: 'author' },
  { component: f.list, name: 'metrics', label: 'Metrics', defaultValue: 'hits, sessions, bounce-rate' },
  { component: f.number, name: 'limit', label: 'Limit', defaultValue: 5 },
  { component: f.date, name: 'from', label: 'From', min: -9, max: 9, defaultValue: -7, defaultSelect: 'd' },
  { component: f.date, name: 'interval', label: 'Interval', min: 0, max: 9, defaultValue: 1, defaultSelect: 'd' },
  { component: f.list, name: 'b', label: 'Breakdown', defaultValue: 'author.id, date, article.id' },
];
