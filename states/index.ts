import { atom } from 'recoil';
import { v1 } from 'uuid';

export const modeState = atom<'day' | 'night'>({
  key: `modeState/${v1()}`,
  default: 'night',
});
