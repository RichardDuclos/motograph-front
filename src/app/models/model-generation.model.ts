import {Model} from './model.model';

export interface ModelGeneration {
  id?: number;
  name: string;
  startYear: number;
  endYear?: number;
  engineCc: number;
  horsePower: number;
  torque: number;
  weight: number;
  topSpeed: number;
  price: number;
  model: Model;
  imageUrl: string;

}
