import * as f from './filter-types'; 

export default [
  {
    type: f.equality,
    name: 'f',
    label: 'Filters',
    fields: [
      { name: 'referrer.host', label: 'Host' },
      { name: 'device_type', label: 'Device Type' }
    ]
  },
  { type: f.list, name: 'fields' },
  { type: f.input, name: 'enclosures' },
  { type: f.list, name: 'metrics' },
  { type: f.number, name: 'limit' },
  { type: f.date, name: 'from' },
  { type: f.date, name: 'interval' },
  { type: f.list, name: 'b', label: 'Breakdown' },
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