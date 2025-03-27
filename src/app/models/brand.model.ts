import {Model} from './model.model';

export interface Brand {
  id?: number;
  name: string;
  models: Model[];
}
