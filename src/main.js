import './style.css'

import { asset, route } from './utils/path.js';

console.log('BASE:', import.meta.env.BASE_URL);
console.log('IMAGE:', asset('images/logoindex4.jpg'));
console.log('ROUTE:', route('food.html'));