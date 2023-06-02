import { AGE, GENDER, REASON} from '../constants/stopSearchMetrics';

export type NumberOrString = number | string;

// Use the metric constants here
export type StopSearchMetric = typeof AGE | typeof GENDER | typeof REASON;
