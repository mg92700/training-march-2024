import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { PostsService } from "../posts.service";

export const postResolver = (route: ActivatedRouteSnapshot) => {
    const id = Number.parseInt(route.paramMap.get('id')!);
    return inject(PostsService).getById(id);
}