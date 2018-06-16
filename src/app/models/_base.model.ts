
import { JsonHelper } from './../helpers/json.helper';
import { IModel } from './_model.interface';

export class BaseModel implements IModel {

  constructor() { }

  $map(obj: any, data: any): void {

    Object.keys(obj).forEach(key => {
        const value = JsonHelper.GetValue(data, key, false);

        if (value !== undefined) {
            JsonHelper.UpdateNode(obj, key, value)
        }
    });

    console.log("$map", {
      obj: obj,
      data: data
    });
    
  }
}
