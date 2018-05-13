import { TeamsResponse, Standard, PlayerResponse } from './../models';
import { Team } from '../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbaService } from './../nba.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  westTeams: Standard[];
  eastTeams: Standard[];

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {

    this.route.params.subscribe(res => {
      console.log(res.year);

      this.nbaService.getAllTeams(2017).subscribe(data => {
        console.log('teams', data);
        const teams = data.league.standard;
        this.eastTeams = teams.filter(team => team.isNBAFranchise === true && team.confName === 'East');
        this.westTeams = teams.filter(team => team.isNBAFranchise === true && team.confName === 'West');
      });
    });
  }

  public goToTeamDetail(id: number) {
    this.router.navigate(['/teamdetails', id]);
  }

  ngOnInit() {
  }
}
