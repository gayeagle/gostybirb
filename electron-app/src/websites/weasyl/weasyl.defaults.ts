import { DefaultWeasylOptions } from './weasyl.interface';

export const WEASYL_DEFAULT_FILE_SUBMISSION_OPTIONS: DefaultWeasylOptions = {
  notify: true,
  critique: false,
  folder: null,
  category: null,
  tags: {
    extendDefault: true,
    value: [],
  },
  description: {
    overwriteDefault: false,
    value: '',
  },
  rating: null,
  useThumbnail: true,
};
