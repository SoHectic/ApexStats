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
  {category: 'Assault Rifle',name: 'R-301',ammoType: 'Light', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Assault Rifle',name: 'VK-47 Flatline',ammoType: 'Heavy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Assault Rifle',name: 'Hemlock',ammoType: 'Heavy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Assault Rifle',name: 'Nemesis',ammoType: 'Energy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Assault Rifle',name: 'Havoc',ammoType: 'Energy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sub Machine Gun',name: 'Alternator',ammoType: 'Light', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sub Machine Gun',name: 'R-99',ammoType: 'Light', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sub Machine Gun',name: 'Car',ammoType: 'Light / Heavy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sub Machine Gun',name: 'Prowler',ammoType: 'Heavy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sub Machine Gun',name: 'Volt',ammoType: 'Energy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Light Machine Gun',name: 'Devotion',ammoType: 'Energy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Light Machine Gun',name: 'L-Star',ammoType: 'Energy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Light Machine Gun',name: 'Spitfire',ammoType: 'Light', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Light Machine Gun',name: 'Rampage',ammoType: 'Heavy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Marksman Rifle',name: 'G7 Scout',ammoType: 'Light', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Marksman Rifle',name: 'Triple Take',ammoType: 'Energy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Marksman Rifle',name: '30-30',ammoType: 'Heavy', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Marksman Rifle',name: 'Bocek',ammoType: 'Air Drop', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sniper Rifle',name: 'Charge Rifle',ammoType: 'Sniper', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sniper Rifle',name: 'Sentinel',ammoType: 'Sniper', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sniper Rifle',name: 'Longbow',ammoType: 'Sniper', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Sniper Rifle',name: 'Kraber',ammoType: 'Air Drop', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Shotgun',name: 'Eva-8',ammoType: 'Shotgun', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Shotgun',name: 'Mastiff',ammoType: 'Shotgun', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Shotgun',name: 'Mozambique',ammoType: 'Shotgun', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Shotgun',name: 'Peacekeeper',ammoType: 'Shotgun', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Pistol',name: 'RE-45',ammoType: 'Air Drop', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Pistol',name: 'P2020',ammoType: 'Light', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Pistol',name: 'Wingman',ammoType: 'Sniper', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
  {category: 'Special',name: 'Throwing Knife',ammoType: 'Air Drop', limbDmg: 0, bodyDmg: 0, headDmg: 0, magCap: [], btk: 0},
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

