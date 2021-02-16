/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

export declare class Person {
  name: string;
  age: number;
  constructor();
  constructor(name: string, age: number);
  talk: () => string;
}

export declare class Teacher extends Person {
  subject: string;
  constructor();
  constructor(name: string, age: number, subject: string);
}

export class Other {}
