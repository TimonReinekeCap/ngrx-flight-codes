import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CodesService } from "../services/codes.service";
import { loadCodes, loadCodesFailed, loadCodesSuccess } from "./codes.actions";

@Injectable()
export class CodesEffects {
  loadCodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCodes),
      switchMap(() => this.codesService.getCodes()
        .pipe(
          map((codes) => loadCodesSuccess({codes})),
          catchError(() => of(loadCodesFailed())),
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private codesService: CodesService
  ) {}
}
