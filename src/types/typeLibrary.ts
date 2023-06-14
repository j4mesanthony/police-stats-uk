import { AGE, GENDER, REASON} from '../constants/stopSearchMetrics';

export type NumberOrString = number | string;

export type StopSearchMetric = typeof AGE | typeof GENDER | typeof REASON;

export type VoidMethod = () => void;