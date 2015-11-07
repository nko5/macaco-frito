export default {
  map: {
    'name': 'map1',
    'coords': [
      [14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
      [14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
      [14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
      [14, 14, 14, 1, 14, 14, 1, 14, 14, 14],
      [14, 14, 14, 1, 14, 14, 1, 14, 14, 14],
      [14, 14, 14, 1, 14, 14, 1, 14, 14, 14],
      [14, 14, 14, 1, 14, 14, 1, 14, 14, 14],
      [14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
      [14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
      [14, 14, 14, 14, 14, 14, 14, 14, 14, 14]
    ],
    'terrain_types': {
      'walk': [14],
      'wall': [1]
    },
    'max_players': 4
  },

  players: [
    { pos: { x: 1, y: 1 } },
    { pos: { x: 2, y: 6 } }
  ],

  actions: [
    { type: 'empty' },
    { type: 'empty' },
    { type: 'empty' },
    { type: 'empty' },
    { type: 'empty' },
    { type: 'empty' }
  ],

  availableActions: [
    { type: 'up' },
    { type: 'down' },
    { type: 'left' },
    { type: 'right' },
    { type: 'beam' },
    { type: 'blast' },
    { type: 'shield' }
  ]
}