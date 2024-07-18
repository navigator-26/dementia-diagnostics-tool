import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { QuestionerData } from '../providers/questioner.service';
@Component({
  selector: 'app-personalized',
  templateUrl: './personalized.component.html',
  styleUrl: './personalized.component.css'
})
export class PersonalizedComponent {
  currentQuestionIndex = 0;
  questions: any = [];
  selectedAnswers:any = [];
  showFeedback = false;
  currentScore = 0;
  constructor(private alertController: AlertController,
    public httpClient: HttpClient,public router:Router, public questionerData: QuestionerData, ) {

  }

  ionViewWillEnter() {
    this.getPersonalizedQuestions();
  }

   getPersonalizedQuestions() {
     this.questionerData.getPersonalizedQuestions().subscribe((questionsData: any[]) => {
      this.questions = questionsData;
    });
  }

  get currentQuestion(): string {
    return this.questions[this.currentQuestionIndex].question;
  }

  get currentOptions() {
    return this.questions[this.currentQuestionIndex].options;
  }

  get currentQuestionSet() {
    return this.questions[this.currentQuestionIndex];
  }

  get isFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  onAnswerSelect(event: any, questionset) {
    if (event.detail.value === questionset.correctAnswer) {
        this.currentScore = this.currentScore + questionset.score;
    } 
    console.log('current score===', this.currentScore)
  }

  nextQuestion() {
    console.log('currentIndex===',this.currentQuestionIndex)

    if (!this.isLastQuestion) {
      this.currentQuestionIndex++;
      this.showFeedback = false; // Reset feedback
    } else {
      this.showFeedback = true;
    }
  }

  prevQuestion() {
    if (!this.isFirstQuestion) {
      this.currentQuestionIndex--;
      this.showFeedback = false; // Reset feedback
    }
  }

  submitQuestionnaire() {
  //  let res = this.selectedAnswers.join("");
  //  console.log(res);
   // this.sendPostRequest(res);

    //api call integration here
    //redirect to result screen
  }
}
