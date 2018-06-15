
import { JsonHelper } from './../helpers/json.helper';

export class BaseModel {

  constructor() { }

  $map(obj: any, data: any): void {
    Object.keys(obj).forEach(key => {
        const value = JsonHelper.GetValue(data, key, false);

        console.log(key, value);

        if (value !== undefined) {
            JsonHelper.UpdateNode(obj, key, value)
        }
    });
  }
}
