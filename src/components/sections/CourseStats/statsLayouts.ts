export type CardId = 'all' | 'upcoming' | 'ongoing'
export type StatsState = 'default' | 'hoverUpcoming' | 'hoverOngoing' | 'upcoming' | 'ongoing'

export interface CardLayout {
  x: number
  width: number
  textColor: string
  ellipse: { x: number; y: number; size: number }
  number: { x: number; y: number }
  plus: { x: number; y: number; color: string }
  titleGroup: { x: number; y: number; width: number; rotate: number }
  icons: { x: number; y: number; opacity: number }
}

export interface HintLayout {
  label: { x: number; y: number }
  arrow: { x: number; y: number; matrix: [number, number, number, number] }
}

export type StateLayout = Record<CardId, CardLayout> & { hint?: HintLayout }

export const STATS_WIDTH = 1216
export const STATS_HEIGHT = 461
export const CARD_HEIGHT = 461
export const COLLAPSED_WIDTH = 280

export const STATS_LAYOUTS: Record<StatsState, StateLayout> = {
  default: {
    all: { x: 0, width: 592, textColor: '#f9ebec', ellipse: { x: -8, y: 453, size: 15 }, number: { x: 75, y: 283 }, plus: { x: 262, y: 275, color: '#ffffff' }, titleGroup: { x: 299, y: 303, width: 218, rotate: 0 }, icons: { x: 66, y: 126, opacity: 1 } },
    upcoming: { x: 624, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 35.5, y: 283 }, plus: { x: 228, y: 259, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: -514, y: 126, opacity: 0 } },
    ongoing: { x: 936, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 53, y: 283 }, plus: { x: 210, y: 259, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: -463, y: 126, opacity: 0 } },
  },
  hoverUpcoming: {
    all: { x: 0, width: 592, textColor: '#f9ebec', ellipse: { x: -8, y: 453, size: 15 }, number: { x: 75, y: 283 }, plus: { x: 262, y: 275, color: '#ffffff' }, titleGroup: { x: 299, y: 303, width: 218, rotate: 0 }, icons: { x: 66, y: 126, opacity: 1 } },
    upcoming: { x: 624, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 35.5, y: 283 }, plus: { x: 228, y: 264, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: -514, y: 126, opacity: 0 } },
    ongoing: { x: 936, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 53, y: 283 }, plus: { x: 215, y: 269, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: -463, y: 126, opacity: 0 } },
    hint: { label: { x: 759, y: -53 }, arrow: { x: 769.94, y: 15.91, matrix: [0.99807, 0.06209, 0.06209, -0.99807] } },
  },
  hoverOngoing: {
    all: { x: 0, width: 592, textColor: '#f9ebec', ellipse: { x: -8, y: 453, size: 15 }, number: { x: 75, y: 283 }, plus: { x: 262, y: 275, color: '#ffffff' }, titleGroup: { x: 299, y: 303, width: 218, rotate: 0 }, icons: { x: 66, y: 126, opacity: 1 } },
    upcoming: { x: 624, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 35.5, y: 283 }, plus: { x: 235, y: 263, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: -514, y: 126, opacity: 0 } },
    ongoing: { x: 936, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 53, y: 283 }, plus: { x: 223, y: 271, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: -463, y: 126, opacity: 0 } },
    hint: { label: { x: 1049, y: -50 }, arrow: { x: 1061.94, y: 17.91, matrix: [0.99807, 0.06209, 0.06209, -0.99807] } },
  },
  upcoming: {
    all: { x: 0, width: 280, textColor: '#c33241', ellipse: { x: -174, y: -53, size: 648 }, number: { x: 40, y: 283 }, plus: { x: 230, y: 271, color: '#c33241' }, titleGroup: { x: 91, y: 259, width: 218, rotate: -90 }, icons: { x: 739, y: 126, opacity: 0 } },
    upcoming: { x: 312, width: 592, textColor: '#f9ebec', ellipse: { x: -34, y: 441, size: 44 }, number: { x: 43, y: 289 }, plus: { x: 244, y: 273, color: '#ffffff' }, titleGroup: { x: 276, y: 306, width: 278, rotate: 0 }, icons: { x: 66, y: 129, opacity: 1 } },
    ongoing: { x: 936, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 53, y: 283 }, plus: { x: 206, y: 259, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: -663, y: 126, opacity: 0 } },
  },
  ongoing: {
    all: { x: 0, width: 280, textColor: '#c33241', ellipse: { x: -174, y: -53, size: 648 }, number: { x: 40, y: 283 }, plus: { x: 223, y: 271, color: '#c33241' }, titleGroup: { x: 91, y: 259, width: 218, rotate: -90 }, icons: { x: 280, y: 126, opacity: 0 } },
    upcoming: { x: 312, width: 280, textColor: '#c33241', ellipse: { x: -122, y: -71, size: 596 }, number: { x: 35.5, y: 283 }, plus: { x: 228, y: 259, color: '#c33241' }, titleGroup: { x: 71, y: 259, width: 218, rotate: -90 }, icons: { x: 366, y: 126, opacity: 0 } },
    ongoing: { x: 624, width: 592, textColor: '#f9ebec', ellipse: { x: -11, y: 450, size: 22 }, number: { x: 71, y: 291 }, plus: { x: 228, y: 279, color: '#ffffff' }, titleGroup: { x: 269, y: 307, width: 251, rotate: 0 }, icons: { x: 66, y: 130, opacity: 1 } },
  },
}
