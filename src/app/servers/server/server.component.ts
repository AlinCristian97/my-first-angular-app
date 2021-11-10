import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //     (params: Params) =>  {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );

    // resolver approach (especially important for async tasks)
    // using observable approach because the 'server' can change while we already are on the page
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']; //'server' must match the property name used in app-routing
      }
    );

  }

  onAdded() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
