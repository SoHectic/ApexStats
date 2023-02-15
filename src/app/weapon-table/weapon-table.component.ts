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
  magCap: string[];
  btk: number;
}

const ELEMENT_DATA: WeaponData[] = [
  {category: 'Assault Rifle',name: 'R-301',ammoType: 'Light', limbDmg: 10, bodyDmg: 13, headDmg: 21, magCap: ["No Mag: 18", "Gray: 20", "Blue: 25", "Purple/Gold: 28"], btk: 0},
  {category: 'Assault Rifle',name: 'VK-47 Flatline',ammoType: 'Heavy', limbDmg: 14, bodyDmg: 18, headDmg: 29, magCap: ["No Mag: 20", "Gray: 25", "Blue: 28", "Purple/Gold: 30"], btk: 0},
  {category: 'Assault Rifle',name: 'Hemlock',ammoType: 'Heavy', limbDmg: 17, bodyDmg: 23, headDmg: 38, magCap: ["Base: 30"], btk: 0},
  {category: 'Assault Rifle',name: 'Nemesis',ammoType: 'Energy', limbDmg: 13, bodyDmg: 17, headDmg: 27, magCap: ["No Mag: 20", "Gray: 24", "Blue: 28", "Purple/Gold: 32"], btk: 0},
  {category: 'Assault Rifle',name: 'Havoc',ammoType: 'Energy', limbDmg: 14, bodyDmg: 18, headDmg: 29, magCap: ["No Mag: 24", "Gray: 28", "Blue: 32", "Purple/Gold: 36"], btk: 0},
  {category: 'Sub Machine Gun',name: 'Alternator',ammoType: 'Light', limbDmg: 13, bodyDmg: 16, headDmg: 22, magCap: ["No Mag: 19", "Gray: 22", "Blue: 25", "Purple/Gold: 27"], btk: 0},
  {category: 'Sub Machine Gun',name: 'R-99',ammoType: 'Light', limbDmg: 10, bodyDmg: 12, headDmg: 17, magCap: ["No Mag: 20", "Gray: 22", "Blue: 25", "Purple/Gold: 28"], btk: 0},
  {category: 'Sub Machine Gun',name: 'Car',ammoType: 'Light / Heavy', limbDmg: 10, bodyDmg: 13, headDmg: 18, magCap: ["No Mag: 19", "Gray: 21", "Blue: 23", "Purple/Gold: 26"], btk: 0},
  {category: 'Sub Machine Gun',name: 'Prowler',ammoType: 'Heavy', limbDmg: 12, bodyDmg: 15, headDmg: 21, magCap: ["No Mag: 20", "Gray: 25", "Blue: 30", "Purple/Gold: 35"], btk: 0},
  {category: 'Sub Machine Gun',name: 'Volt',ammoType: 'Energy', limbDmg: 12, bodyDmg: 15, headDmg: 21, magCap: ["No Mag: 19", "Gray: 21", "Blue: 23", "Purple/Gold: 26"], btk: 0},
  {category: 'Light Machine Gun',name: 'Devotion',ammoType: 'Energy', limbDmg: 13, bodyDmg: 15, headDmg: 21, magCap: ["No Mag: 36", "Gray: 40", "Blue: 44", "Purple/Gold: 48"], btk: 0},
  {category: 'Light Machine Gun',name: 'L-Star',ammoType: 'Energy', limbDmg: 14, bodyDmg: 17, headDmg: 24, magCap: ["Overheats  "], btk: 0},
  {category: 'Light Machine Gun',name: 'Spitfire',ammoType: 'Light', limbDmg: 15, bodyDmg: 18, headDmg: 25, magCap: ["No Mag: 35", "Gray: 40", "Blue: 45", "Purple/Gold: 50"], btk: 0},
  {category: 'Light Machine Gun',name: 'Rampage',ammoType: 'Heavy', limbDmg: 22, bodyDmg: 26, headDmg: 36, magCap: ["No Mag: 28", "Gray: 32", "Blue: 34", "Purple/Gold: 40"], btk: 0},
  {category: 'Marksman Rifle',name: 'G7 Scout',ammoType: 'Light', limbDmg: 24, bodyDmg: 32, headDmg: 50, magCap: ["No Mag: 10", "Gray: 15", "Blue: 18", "Purple/Gold: 20"], btk: 0},
  {category: 'Marksman Rifle',name: 'Triple Take',ammoType: 'Energy', limbDmg: 19, bodyDmg: 21, headDmg: 34, magCap: ["No Mag: 18", "Gray: 21", "Blue: 24", "Purple/Gold: 27"], btk: 0},
  {category: 'Marksman Rifle',name: '30-30*',ammoType: 'Heavy', limbDmg: 48, bodyDmg: 57, headDmg: 91, magCap: ["No Mag: 6", "Gray: 8", "Blue: 10", "Purple/Gold: 12"], btk: 0},
  {category: 'Marksman Rifle',name: 'Bocek',ammoType: 'Air Drop', limbDmg: 63, bodyDmg: 70, headDmg: 112, magCap: ["Base: 1"], btk: 0},
  {category: 'Sniper Rifle',name: 'Charge Rifle',ammoType: 'Sniper', limbDmg: 90, bodyDmg: 90, headDmg: 114, magCap: ["Base: 8"], btk: 0},
  {category: 'Sniper Rifle',name: 'Sentinel',ammoType: 'Sniper', limbDmg: 63, bodyDmg: 70, headDmg: 126, magCap: ["No Mag: 4", "Gray: 5", "Blue: 6", "Purple/Gold: 7"], btk: 0},
  {category: 'Sniper Rifle',name: 'Longbow',ammoType: 'Sniper', limbDmg: 44, bodyDmg: 55, headDmg: 106, magCap: ["No Mag: 6", "Gray: 8", "Blue: 10", "Purple/Gold: 12"], btk: 0},
  {category: 'Sniper Rifle',name: 'Kraber',ammoType: 'Air Drop', limbDmg: 112, bodyDmg: 140, headDmg: 252, magCap: ["Base: 4"], btk: 0},
  {category: 'Shotgun',name: 'Eva-8',ammoType: 'Shotgun', limbDmg: 7, bodyDmg: 7, headDmg: 8, magCap: ["Base: 8"], btk: 0},
  {category: 'Shotgun',name: 'Mastiff',ammoType: 'Shotgun', limbDmg: 11, bodyDmg: 11, headDmg: 13, magCap: ["Base: 5"], btk: 0},
  {category: 'Shotgun',name: 'Mozambique',ammoType: 'Shotgun', limbDmg: 15, bodyDmg: 15, headDmg: 18, magCap: ["Base: 6"], btk: 0},
  {category: 'Shotgun',name: 'Peacekeeper',ammoType: 'Shotgun', limbDmg: 9, bodyDmg: 9, headDmg: 11, magCap: ["Base: 5"], btk: 0},
  {category: 'Pistol',name: 'RE-45',ammoType: 'Air Drop', limbDmg: 13, bodyDmg: 14, headDmg: 20, magCap: ["Base: 25"], btk: 0},
  {category: 'Pistol',name: 'P2020',ammoType: 'Light', limbDmg: 16, bodyDmg: 18, headDmg: 25, magCap: ["No Mag: 14", "Gray: 16", "Blue: 18", "Purple/Gold: 21"], btk: 0},
  {category: 'Pistol',name: 'Wingman',ammoType: 'Sniper', limbDmg: 41, bodyDmg: 45, headDmg: 86, magCap: ["No Mag: 6", "Gray: 7", "Blue: 8", "Purple/Gold: 9"], btk: 0},
  {category: 'Special',name: 'Throwing Knife',ammoType: 'Air Drop', limbDmg: 100, bodyDmg: 100, headDmg: 260, magCap: ["Base: 1"], btk: 0},
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
    'btk'
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

