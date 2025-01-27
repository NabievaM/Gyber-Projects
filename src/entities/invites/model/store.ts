import { createStore } from 'effector';
import { Invites } from './types';

export const $invites = createStore<Invites[]>([
  {
    id: 1,
    title: 'Project Manager "Gyber Projects"',
    lead: 'Maksim K',
  },
  {
    id: 2,
    title: 'SEO',
    lead: 'Roman',
  },
  {
    id: 3,
    title: 'FullStack developer',
    lead: 'Nabiyeva Mukhlis',
  },
]);
