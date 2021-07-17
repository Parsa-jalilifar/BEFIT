import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../../shared/services/manager.service'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plans = [];

  constructor(_managerService: ManagerService) {

    _managerService.getMemberShipPlans().subscribe(response => this.plans = response)

  }

  ngOnInit(): void {
  }

}
