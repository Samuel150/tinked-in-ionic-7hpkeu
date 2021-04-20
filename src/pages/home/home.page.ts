import { AfterViewInit, Component, Inject } from "@angular/core";
//import { JobPostCard, JobPostModel } from "../../model/job-post.card";
import { NavigationI } from "../../model/interfaces/navigation-i.model";
import { NavController } from "@ionic/angular";
import { RecommendationService } from "../../services/recommendation/recommendation.service";
import { ClientService } from "../../services/client/client.service";
import { AbstractClientService } from "../../services/client/abstract-client.service";
import { AbstractRecommendationService } from "../../services/recommendation/abstract-recommendation.service";
import { AbstractLinkedInService } from "../../services/linked-in/abstract-linked-in.service";
import { RecommendationModel } from "../../model/recommendation.model";
import { LinkedInService } from "../../services/linked-in/linked-in.service";
//import { UserModel } from "../../model/user.model";
import { IUser } from "../../model/interfaces";
import { IJobPostCard, IJobPost } from "../../model/interfaces";
import { MockClientService } from "../../services/client/mock-client.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  providers: [
    { provide: AbstractClientService, useClass: ClientService },
    { provide: AbstractRecommendationService, useClass: RecommendationService },
    { provide: AbstractLinkedInService, useClass: LinkedInService }
  ]
})
export class HomePage implements AfterViewInit, NavigationI {
  currentUser: IUser;
  recommendations: RecommendationModel;
  cards: Array<IJobPostCard> = [];

  constructor(
    private navCtrl: NavController,
    @Inject(AbstractLinkedInService)
    private linkedInService: AbstractLinkedInService,
    @Inject(AbstractClientService) private clientService: AbstractClientService,
    @Inject(AbstractRecommendationService)
    private recommendationService: AbstractRecommendationService
  ) {
    this.cards = [];
    this.clientService.postLike(null);
  }

  ngAfterViewInit(): void {
    this.currentUser = this.linkedInService.login(null);
    if (this.currentUser.isUserCandidate()) {
      this.getCards();
    }
  }

  getCards() {
    this.recommendationService
      .getRecommendations(this.currentUser)
      .subscribe(data => {
        this.recommendations = data;
        this.cards = data.getCards();
      });
  }

  back() {}

  goToChat() {
    this.navCtrl.navigateForward("chat").then();
  }

  goToHome() {
    this.navCtrl.navigateForward("guide").then();
  }

  goToProfile() {
    this.navCtrl.navigateForward("profile").then();
  }

  like(card: IJobPostCard) {
    this.clientService.postLike(this.mapJobPostCardToJobPostModel(card));
    this.updateRecommendationHistory(
      this.currentUser,
      new Date().getTime(),
      card.uuid,
      null,
      null
    );
  }

  dislike(card: IJobPostCard) {
    this.clientService.disLike(this.mapJobPostCardToJobPostModel(card));
    this.updateRecommendationHistory(
      this.currentUser,
      new Date().getTime(),
      null,
      card.uuid,
      null
    );
  }

  passed(card: IJobPostCard) {
    this.clientService.passed(this.mapJobPostCardToJobPostModel(card));
    this.updateRecommendationHistory(
      this.currentUser,
      new Date().getTime(),
      null,
      null,
      card.uuid
    );
  }

  mapJobPostCardToJobPostModel(card: IJobPostCard): IJobPost {
    return this.recommendations.recommendedPosts.find(
      rec => rec.uuid === card.uuid
    );
  }

  updateRecommendationHistory(
    user: IUser,
    timestamp: number,
    likeUuid: string,
    disLikeUuid: string,
    passedUuid: string
  ) {
    const history = this.recommendationService.getHistory(user.uuid);
    if (likeUuid) {
      history.likes.add(likeUuid);
    }

    if (disLikeUuid) {
      history.disLikes.add(disLikeUuid);
      this.sendNotification();
    }

    if (passedUuid) {
      if (!history.passed.has(passedUuid)) {
        history.passed.set(passedUuid, 0);
      }
      history.passed.set(passedUuid, history.passed.get(passedUuid) + 1);
    }
    history.lastActionTimestamp = timestamp;
  }

  sendNotification() {
    //TODO send notification
  }
}
