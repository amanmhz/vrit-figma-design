import type { CardId } from './statsLayouts'

export interface StatCardContent {
  id: CardId
  count: string
  title: string
  description: string
  numberWidth: number
}

export const STAT_CARDS: StatCardContent[] = [
  {
    id: 'all',
    count: '23',
    title: 'All Courses',
    description: 'courses you’re powering through right now.',
    numberWidth: 200,
  },
  {
    id: 'upcoming',
    count: '05',
    title: 'Upcoming Courses',
    description: 'exciting new courses waiting to boost your skills.',
    numberWidth: 209,
  },
  {
    id: 'ongoing',
    count: '10',
    title: 'Ongoing Courses',
    description: 'currently happening—don’t miss out on the action!',
    numberWidth: 174,
  },
]
