import f from './components/FilterTypes'; 

export default [
  {
    component: f.equality,
    name: 'f',
    label: 'Filters',
    fields: [
      { name: 'referrer.host', label: 'Host' },
      { name: 'device_type', label: 'Device Type' }
    ]
  },
  { component: f.list, name: 'fields', label: 'Fields' },
  { component: f.input, name: 'enclosures', label: 'Enclosures' },
  { component: f.list, name: 'metrics', label: 'Metrics' },
  { component: f.number, name: 'limit', label: 'Limit' },
  { component: f.date, name: 'from', label: 'From' },
  { component: f.date, name: 'interval', label: 'Interval' },
  { component: f.list, name: 'b', label: 'Breakdown' },
];

// ? f=referrer.host!=m.facebook.com;
//   device_type==mobile;
//   &fields=published,title,segment.slug,segment.path,referrer.host
//   &enclosures=author
//   &metrics=hits,sessions,bounce-rate
//   &limit=5
//   &from=-7d
//   &interval=1d
//   &b=author.id,date,article.id