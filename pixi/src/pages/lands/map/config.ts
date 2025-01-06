import type { PointTuple } from './typings';

export const MAX_WIDTH = 3000;
export const MAX_HEIGHT = 3000;

export const OFFSET_X = MAX_WIDTH / 2;
export const OFFSET_Y = MAX_HEIGHT / 2;

export const COLOR = { divided: '#ffc069', current: '#b7eb8ffa', limit: '#0000', draw: '#4096ff' };

export const STAGE_LIMIT = new Map<
  string,
  { id: string; label: string; coordinates: PointTuple[] }
>([
  // [
  //   '0',
  //   {
  //     id: '0',
  //     label: '',
  //     coordinates: [
  //       [-1500, 1500],
  //       [1500, 1500],
  //       [1500, -1500],
  //       [-1500, -1500],
  //       [-1500, 1500],
  //     ],
  //   },
  // ],

  [
    'area-01',
    {
      id: 'area-01',
      label: 'area-01',
      coordinates: [
        [26, -724],
        [26, -973],
        [431, -973],
        [431, -972],
        [434, -972],
        [434, -971],
        [436, -971],
        [436, -970],
        [438, -970],
        [438, -969],
        [439, -969],
        [439, -968],
        [440, -968],
        [440, -967],
        [441, -967],
        [441, -966],
        [442, -966],
        [442, -965],
        [443, -965],
        [443, -964],
        [444, -964],
        [444, -961],
        [445, -961],
        [445, -724],
      ],
    },
  ],
  [
    'area-02',
    {
      id: 'area-02',
      label: 'area-02',
      coordinates: [
        [469, -724],
        [469, -959],
        [470, -959],
        [470, -962],
        [471, -962],
        [471, -964],
        [472, -964],
        [472, -966],
        [473, -966],
        [473, -967],
        [474, -967],
        [474, -968],
        [475, -968],
        [475, -969],
        [476, -969],
        [476, -970],
        [478, -970],
        [478, -971],
        [480, -971],
        [480, -972],
        [482, -972],
        [482, -973],
        [775, -973],
        [775, -724],
      ],
    },
  ],
]);