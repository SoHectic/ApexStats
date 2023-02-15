import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface WeaponData{
  category: string;
  name: string;
  ammoType: string;
  limbDmg: number;
  bodyDmg: number;
  headDmg: number;
  magCap: string;
  btk: string;
  RPM: number;
  DPS: number;
  dmgPerMagBody: number;
  dmgPerMagHead: number;
}

const ELEMENT_DATA: WeaponData[] = [
  {category: 'Assault Rifle',name: 'R-301',ammoType: 'Light', limbDmg: 10, bodyDmg: 13, headDmg: 21, magCap: "18/20/25/28", btk: "12/14/16/18", RPM: 810, DPS: 176, dmgPerMagBody: 364, dmgPerMagHead: 588},
  {category: 'Assault Rifle',name: 'VK-47 Flatline',ammoType: 'Heavy', limbDmg: 14, bodyDmg: 18, headDmg: 29, magCap: "20/25/28/30", btk: "9/10/12/13", RPM: 600, DPS: 180, dmgPerMagBody: 540, dmgPerMagHead: 870},
  {category: 'Assault Rifle',name: 'Hemlock',ammoType: 'Heavy', limbDmg: 17, bodyDmg: 23, headDmg: 38, magCap: "30", btk: "7/8/9/10", RPM: 414, DPS: 159, dmgPerMagBody: 690, dmgPerMagHead: 1140},
  {category: 'Assault Rifle',name: 'Nemesis',ammoType: 'Energy', limbDmg: 13, bodyDmg: 17, headDmg: 27, magCap: "20/24/28/32", btk: "9/11/12/14", RPM: 667, DPS: 189, dmgPerMagBody: 544, dmgPerMagHead: 864},
  {category: 'Assault Rifle',name: 'Havoc',ammoType: 'Energy', limbDmg: 14, bodyDmg: 18, headDmg: 29, magCap: "24/28/32/36", btk: "9/10/12/13", RPM: 672, DPS: 202, dmgPerMagBody: 648, dmgPerMagHead: 1044},
  {category: 'Assault Rifle',name: 'Havoc Turbo',ammoType: 'Energy', limbDmg: 13, bodyDmg: 17, headDmg: 27, magCap: "24/28/32/36", btk: "9/10/12/13", RPM: 672, DPS: 202, dmgPerMagBody: 612, dmgPerMagHead: 972},
  {category: 'SMG',name: 'Alternator',ammoType: 'Light', limbDmg: 13, bodyDmg: 16, headDmg: 22, magCap: "19/22/25/27", btk: "10/11/13/15", RPM: 600, DPS: 160, dmgPerMagBody: 432, dmgPerMagHead: 594},
  {category: 'SMG',name: 'R-99',ammoType: 'Light', limbDmg: 10, bodyDmg: 12, headDmg: 17, magCap: "20/22/25/28", btk: "13/15/17/19", RPM: 1080, DPS: 216, dmgPerMagBody: 336, dmgPerMagHead: 476},
  {category: 'SMG',name: 'Car',ammoType: 'Light / Heavy', limbDmg: 10, bodyDmg: 13, headDmg: 18, magCap: "19/21/23/26", btk: "12/14/16/18", RPM: 930, DPS: 202, dmgPerMagBody: 338, dmgPerMagHead: 468},
  {category: 'SMG',name: 'Prowler',ammoType: 'Heavy', limbDmg: 12, bodyDmg: 15, headDmg: 21, magCap: "20/25/30/35", btk: "10/12/14/15", RPM: 667, DPS: 167, dmgPerMagBody: 525, dmgPerMagHead: 735},
  {category: 'SMG',name: 'Volt',ammoType: 'Energy', limbDmg: 12, bodyDmg: 15, headDmg: 21, magCap: "19/21/23/26", btk: "10/12/14/15", RPM: 720, DPS: 180, dmgPerMagBody: 390,dmgPerMagHead: 546},
  {category: 'LMG',name: 'Devotion',ammoType: 'Energy', limbDmg: 13, bodyDmg: 15, headDmg: 21, magCap: "36/40/44/48", btk: "10/12/14/15", RPM: 900, DPS: 225, dmgPerMagBody: 720, dmgPerMagHead: 1008},
  {category: 'LMG',name: 'L-Star*',ammoType: 'Energy', limbDmg: 14, bodyDmg: 17, headDmg: 24, magCap: "Overheats", btk: "9/11/12/14", RPM: 600, DPS: 170, dmgPerMagBody: 510, dmgPerMagHead: 750},
  {category: 'LMG',name: 'Spitfire',ammoType: 'Light', limbDmg: 15, bodyDmg: 18, headDmg: 25, magCap: "35/40/45/50", btk: "9/10/12/13", RPM: 540, DPS: 162, dmgPerMagBody: 900,dmgPerMagHead: 1250},
  {category: 'LMG',name: 'Rampage Revved Up',ammoType: 'Heavy', limbDmg: 22, bodyDmg: 26, headDmg: 36, magCap: "28/32/34/40", btk: "6/7/8/9", RPM: 390, DPS: 169, dmgPerMagBody: 1040,dmgPerMagHead: 1440},
  {category: 'LMG',name: 'Rampage',ammoType: 'Heavy', limbDmg: 22, bodyDmg: 26, headDmg: 36, magCap: "28/32/34/40", btk: "6/7/8/9", RPM: 300, DPS: 130, dmgPerMagBody: 1040,dmgPerMagHead: 1440},
  {category: 'Marksman',name: 'G7 Scout',ammoType: 'Light', limbDmg: 24, bodyDmg: 32, headDmg: 50, magCap: "10/15/18/20", btk: "5/6/7/8", RPM: 240, DPS: 128, dmgPerMagBody: 640,dmgPerMagHead: 1000},
  {category: 'Marksman',name: 'Triple Take',ammoType: 'Energy', limbDmg: 57, bodyDmg: 63, headDmg: 102, magCap: "18/21/24/27", btk: "3/3/4/4", RPM: 81, DPS: 85, dmgPerMagBody: 567,dmgPerMagHead: 918},
  {category: 'Marksman',name: '30-30',ammoType: 'Heavy', limbDmg: 36, bodyDmg: 42, headDmg: 67, magCap: "6/8/10/12", btk: "4/5/5/6", RPM: 139, DPS: 97, dmgPerMagBody: 504,dmgPerMagHead: 804},
  {category: 'Marksman',name: '30-30 Charged',ammoType: 'Heavy', limbDmg: 48, bodyDmg: 57, headDmg: 91, magCap: "6/8/10/12", btk: "3/4/4/4", RPM: 139, DPS: 97, dmgPerMagBody: 684,dmgPerMagHead: 1092},
  {category: 'Marksman',name: '30-30 SP',ammoType: 'Heavy', limbDmg: 36, bodyDmg: 42, headDmg: 79, magCap: "6/8/10/12", btk: "4/5/5/6", RPM: 139, DPS: 97, dmgPerMagBody: 504,dmgPerMagHead: 948},
  {category: 'Marksman',name: '30-30 Charged SP',ammoType: 'Heavy', limbDmg: 48, bodyDmg: 57, headDmg: 107, magCap: "6/8/10/12", btk: "3/4/4/4", RPM: 139, DPS: 97, dmgPerMagBody: 684,dmgPerMagHead: 1284},
  {category: 'Marksman',name: 'Bocek Shatter Caps',ammoType: 'Air Drop', limbDmg: 84, bodyDmg: 84, headDmg: 98, magCap: "1", btk: "2/3/3/3", RPM: 180, DPS: 129, dmgPerMagBody: 84,dmgPerMagHead: 98},
  {category: 'Marksman',name: 'Bocek',ammoType: 'Air Drop', limbDmg: 63, bodyDmg: 70, headDmg: 112, magCap: "1", btk: "3/3/3/4", RPM: 180, DPS: 107, dmgPerMagBody: 70,dmgPerMagHead: 112},
  {category: 'Sniper',name: 'Charge Rifle',ammoType: 'Sniper', limbDmg: 90, bodyDmg: 90, headDmg: 114, magCap: "8", btk: "2/2/3/3", RPM: 26, DPS: 39, dmgPerMagBody: 360,dmgPerMagHead: 456},
  {category: 'Sniper',name: 'Sentinel',ammoType: 'Sniper', limbDmg: 63, bodyDmg: 70, headDmg: 126, magCap: "4/5/6/7", btk: "3/3/3/4", RPM: 38, DPS: 44, dmgPerMagBody: 490,dmgPerMagHead: 882},
  {category: 'Sniper',name: 'Sentinel Amped',ammoType: 'Sniper', limbDmg: 79, bodyDmg: 88, headDmg: 158, magCap: "4/5/6/7", btk: "2/2/3/3", RPM: 38, DPS: 58, dmgPerMagBody: 616,dmgPerMagHead: 1106},
  {category: 'Sniper',name: 'Longbow',ammoType: 'Sniper', limbDmg: 44, bodyDmg: 55, headDmg: 106, magCap: "6/8/10/12", btk: "3/4/4/5", RPM: 78, DPS: 72, dmgPerMagBody: 660,dmgPerMagHead: 1272},
  {category: 'Sniper',name: 'Longbow SP',ammoType: 'Sniper', limbDmg: 44, bodyDmg: 55, headDmg: 121, magCap: "6/8/10/12", btk: "3/4/4/5", RPM: 78, DPS: 72, dmgPerMagBody: 660,dmgPerMagHead: 1452},
  {category: 'Sniper',name: 'Kraber',ammoType: 'Air Drop', limbDmg: 112, bodyDmg: 140, headDmg: 252, magCap: "4", btk: "2/2/2/2", RPM: 25, DPS: 58, dmgPerMagBody: 560,dmgPerMagHead: 1008},
  {category: 'Shotgun',name: 'Eva-8',ammoType: 'Shotgun', limbDmg: 56, bodyDmg: 56, headDmg: 64, magCap: "8", btk: "3/4/4/5", RPM: 138, DPS: 129, dmgPerMagBody: 448,dmgPerMagHead: 512},
  {category: 'Shotgun',name: 'Mastiff',ammoType: 'Shotgun', limbDmg: 88, bodyDmg: 88, headDmg: 104, magCap: "5", btk: "2/2/3/3", RPM: 66, DPS: 97, dmgPerMagBody: 440,dmgPerMagHead: 520},
  {category: 'Shotgun',name: 'Mozambique',ammoType: 'Shotgun', limbDmg: 45, bodyDmg: 45, headDmg: 54, magCap: "6", btk: "4/4/5/5", RPM: 132, DPS: 99, dmgPerMagBody: 270,dmgPerMagHead: 324},
  {category: 'Shotgun',name: 'Peacekeeper',ammoType: 'Shotgun', limbDmg: 99, bodyDmg: 99, headDmg: 121, magCap: "5", btk: "2/2/2/3", RPM: 44, DPS: 73, dmgPerMagBody: 495,dmgPerMagHead: 605},
  {category: 'Pistol',name: 'RE-45 Disruptor',ammoType: 'Air Drop', limbDmg: 16, bodyDmg: 18, headDmg: 26, magCap: "25", btk: "11/13/15/17", RPM: 780, DPS: 234, dmgPerMagBody: 450,dmgPerMagHead: 650},
  {category: 'Pistol',name: 'RE-45',ammoType: 'Light', limbDmg: 13, bodyDmg: 14, headDmg: 20, magCap: "25", btk: "11/13/15/17", RPM: 780, DPS: 182, dmgPerMagBody: 350,dmgPerMagHead: 500},
  {category: 'Pistol',name: 'P2020',ammoType: 'Light', limbDmg: 16, bodyDmg: 18, headDmg: 25, magCap: "14/16/18/21", btk: "9/10/12/14", RPM: 420, DPS: 126, dmgPerMagBody: 588,dmgPerMagHead: 525},
  {category: 'Pistol',name: 'Wingman',ammoType: 'Sniper', limbDmg: 41, bodyDmg: 45, headDmg: 86, magCap: "6/7/8/9", btk: "4/4/5/5", RPM: 156, DPS: 117, dmgPerMagBody: 405,dmgPerMagHead: 774},
  {category: 'Pistol',name: 'Wingman SP',ammoType: 'Sniper', limbDmg: 41, bodyDmg: 45, headDmg: 99, magCap: "6/7/8/9", btk: "4/4/5/5", RPM: 156, DPS: 117, dmgPerMagBody: 405,dmgPerMagHead: 891}
];

@Component({
  selector: 'app-weapon-table',
  templateUrl: './weapon-table.component.html',
  styleUrls: ['./weapon-table.component.css']
})
export class WeaponTableComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'category',
    'name',
    'ammoType',
    'limbDmg',
    'bodyDmg',
    'headDmg',
    'magCap',
    'btk',
    'RPM',
    'DPS',
    'dmgPerMagBody',
    'dmgPerMagHead'
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

