import {v4} from 'uuid';

export interface Task {
  id?: string;
  title: string;
  description: string;
  completed?: boolean;
}