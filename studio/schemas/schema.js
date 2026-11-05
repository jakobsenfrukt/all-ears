import general from './documents/general.js'
import frontpage from './documents/frontpage.js'
import artist from './documents/artist.js'
import event from './documents/event.js'
import about from './documents/about.js'
import tickets from './documents/tickets.js'

import body from './objects/body.js'
import figure from './objects/figure.js'
import lead from './objects/lead.js'
import social from './objects/social.js'
import ticketItem from './objects/ticketItem.js'

export const schemaTypes = [
  // documents
  general,
  frontpage,
  artist,
  event,
  about,
  tickets,
  // objects
  body,
  figure,
  lead,
  social,
  ticketItem,
]
