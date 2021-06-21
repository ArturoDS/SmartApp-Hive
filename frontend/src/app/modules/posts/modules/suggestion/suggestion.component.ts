import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CreationUtils } from 'src/app/shared/interfaces/posts/creation-utils';
import { CreateSuggestion } from 'src/app/shared/interfaces/posts/suggestion/create-suggestion';

export enum SuggestionSteps {
  CREATE_QUESTION = 0,
  CREATE_SETTINGS = 1,
  PREVIEW = 2
};

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss'],
})
export class SuggestionComponent implements OnInit {

  public step: SuggestionSteps = SuggestionSteps.CREATE_QUESTION;

  public steps = SuggestionSteps;

  private userId: string;
  public createSuggestionVm: CreateSuggestion;
  public picture: any = null;

  public utils: CreationUtils;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userProfileId');
    this.createSuggestionVm = {
      authorId: this.userId
    };
    this.utils = {pictureSelected: false};
  }

  applyChanges(event: CreateSuggestion) {
    this.createSuggestionVm = event;
  }

  setPicture(picture: any) {
    this.picture = picture;
  }

  onDiscard() {
    if (this.step === SuggestionSteps.PREVIEW) {
      this.previousStep();
      return;
    }
    this.router.navigate(['../../newPost'], { relativeTo: this.activatedRoute });
  }

  nextStep() {
    switch(this.step) {
      case SuggestionSteps.CREATE_QUESTION: 
        if (!this.createSuggestionVm.content) {
          this.showMissingDataToast();
          break;
        }
        this.step++;
        break;
      case SuggestionSteps.CREATE_SETTINGS: 
        if (!(this.createSuggestionVm.publicationDate && this.createSuggestionVm.endDate && this.createSuggestionVm.targetGroupsIds)) {
          this.showMissingDataToast();
          break;
        }
        this.step++;
        break;
      default: 
        console.warn("we should not see this...");
    }
  }

  private async showMissingDataToast() {
    const toast = await this.toastCtrl.create({
      message: this.translateService.instant('commons.missingData'),
      position: 'top',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  previousStep() {
    if (this.step === SuggestionSteps.CREATE_QUESTION) {
      this.onDiscard();
      return;
    }
    this.step--;
  }

}
