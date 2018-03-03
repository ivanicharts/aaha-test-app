import axios from 'axios';

import { STATS_URL } from './constants';

export const getStats = () => axios.get(STATS_URL)
