import { Injectable } from '@angular/core';

@Injectable()
export class LogrosService {

  constructor() { }

  all() : ILogro[] {
    return [
      {
        id: 1,
        title: 'Logré algo muy interesante',
        description: 'Bacon ipsum dolor amet meatloaf pastrami turkey'
      },{
        id: 2,
        title: 'Logré otra cosa muy interesante',
        description: 'Bacon ipsum dolor amet venison spare ribs strip steak bacon rump filet mignon pork chop kielbasa shankle tongue hamburger shank short loin chuck landjaeger. Flank kielbasa doner, pastrami biltong ribeye pancetta drumstick leberkas frankfurter pork belly rump. Tenderloin pork tail meatloaf frankfurter rump swine corned beef tri-tip. Pork loin shoulder alcatra spare ribs biltong shankle porchetta strip steak pork belly short loin swine capicola bacon'
      },{
        id: 3,
        title: 'Logré algo aún más interesante',
        description: 'Bacon ipsum dolor amet venison spare ribs strip steak bacon rump filet mignon pork chop kielbasa shankle tongue hamburger shank short loin chuck landjaeger. Flank kielbasa doner, pastrami biltong ribeye pancetta drumstick leberkas frankfurter pork belly rump. Tenderloin pork tail meatloaf frankfurter rump swine corned beef tri-tip. Pork loin shoulder alcatra spare ribs biltong shankle porchetta strip steak pork belly short loin swine capicola bacon'
      }
    ];
  }
}


// id, title, description

interface ILogro {
  id: number;
  title: string;
  description?: string;
}
