import {mat4, vec2, vec3, vec4} from "gl-matrix";

//wraps the vec3 functions so that they are easier to deal with
export class VecMath {
  public static pi = 3.14159;

  public static ident(): mat4 {
    let identity: mat4;
    mat4.identity(identity);
    return identity;
  }
  public static id: mat4 = mat4.fromValues(1,0,0,0, 0,1,0,0, 0,0, 1,0, 0,0,0, 1);

  public static degreeToRad(deg: number): number {
    return deg * this.pi /360 ;
  }

  public static convertToVec3(a: vec3 | number[] | number): vec3 {
    if (typeof a == 'number') {
      return vec3.fromValues(a, a, a);
    }
    else if( Array.isArray(a) && a.length == 3) {
      return vec3.fromValues(a[0], a[1], a[2]);
    }

    return a as vec3;
  }


  public static add(a: vec3 | number[] | number, b: vec3 | number[] | number) {
    let out: vec3 = vec3.create();
    return vec3.add(out, this.convertToVec3(a), this.convertToVec3(b));
  }

  public static multiply(a: vec3, b: vec3 | number[] | number): vec3 {
    let out: vec3 = vec3.create();
    console.log(this.convertToVec3(a));
    console.log(this.convertToVec3(b));
    return vec3.multiply(out, this.convertToVec3(a), this.convertToVec3(b));
  }


  //this assumes that both the line and the point are normalized
  public static rotateAroundVector(point: vec3, vector: vec3, degree: number): vec3  {
    let start: vec4 = vec4.fromValues(point[0], point[1], point[2], 1);
    let result: vec4 = vec4.create();
    let rot: mat4 = mat4.create();
    mat4.rotate(rot, this.id, this.degreeToRad(degree), vector);
    vec4.transformMat4(result, start, rot);

    return vec3.fromValues(result[0], result[1], result[2]);

    //   //see http://paulbourke.net/geometry/rotate/
    //   let a = vector[0];
    //   let b = vector[1];
    //   let c = vector[2];
    //   let d = vec2.len(vec2.fromValues(b, c));
    //
    //
    //   let rot1: mat4;
    //   let rot1inverse: mat4;
    //   if(d == 0.0) {
    //     mat4.identity(rot1);
    //     mat4.identity(rot1inverse);
    //   }
    //   else {
    //     rot1: mat4.from
    //   }
    // }
  }

}