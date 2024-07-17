import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Question {
  question: string;
  options: { label: string; value: string }[];
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent {
  currentQuestionIndex = 0;
  showFeedback = false;
  feedbackMessage : Array<string> = [];

  constructor(private alertController: AlertController) {

  }

  questions: Question[] = [
    {
      question: 'What is the lady doing in the image?',
      options: [
        { label: 'A.', value: 'Lady is washing dishes.' },
        { label: 'B.', value: 'Lady is stealing cookie.' },
        { label: 'C.', value: 'Lady is calling someone.' },
      ],
    },
    // Add more questions as needed
    {
      question: 'What do you see on the floor?',
      options: [
        { label: 'A.', value: 'Dishes' },
        { label: 'B.', value: 'Cookies' },
        { label: 'C.', value: 'Water' }
      ],
    },
    {
      question: 'What are the kids doing?',
      options: [
        { label: 'A.', value: 'Kids are fighting' },
        { label: 'B.', value: 'Kids are sharing cookies' },
        { label: 'C.', value: 'Kids are studying' }
      ],
    },
    {
      question: 'What is happening to the stool?',
      options: [
        { label: 'A.', value: 'The tool is still.' },
        { label: 'B.', value: 'There is no stool.' },
        { label: 'C.', value: 'The stool is tipping over.' }
      ],
    },
    {
      question: 'Where is the cookie jar kept?',
      options: [
        { label: 'A.', value: 'The jar is too high.' },
        { label: 'B.', value: 'There is no cookie jar.' },
        { label: 'C.', value: 'The jar is at the floor.' }
      ],
    },
    {
      question: 'Is the lady watching over the kids?',
      options: [
        { label: 'A.', value: 'The lady is distracted.' },
        { label: 'B.', value: 'The lady is giving cookies to the kids.' },
        { label: 'C.', value: 'The lady is teaching the kids.' }
      ],
    },
    {
      question: 'Is the lady aware that water is spilling?',
      options: [
        { label: 'A.', value: 'The lady is aware the water is spilling.' },
        { label: 'B.', value: "The lady doesn't see it." },
        { label: 'C.', value: 'The lady is storing the water.' }
      ],
    },
    {
      question: 'Will the kid fall?',
      options: [
        { label: 'A.', value: 'The kid is on the ground already.' },
        { label: 'B.', value: "The kid will fall." },
        { label: 'C.', value: 'The kid will not fall.' }
      ],
    },
    {
      question: 'Did the kid take the cookies?',
      options: [
        { label: 'A.', value: 'The kid did not take the cookies.' },
        { label: 'B.', value: "The kid took the cookies." },
        { label: 'C.', value: 'There are no cookies.' }
      ],
    },
    {
      question: 'Mark the option that comes to your mind when you see this picture?',
      options: [
        { label: 'A.', value: 'What is lady doing with the dishes?' },
        { label: 'B.', value: "Where am I?" },
        { label: 'C.', value: 'Why am I seeing this picture?' }
      ],
    }
  ];

  async presentConsentAlert() {
    const alert = await this.alertController.create({
      header: 'Consent',
      message: 'Do you consent to submit your questionnaire results to a 3rd party API?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('User canceled the submission');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.submitQuestionnaire();
          }
        }
      ]
    });
    await alert.present();
  }


  get currentQuestion(): string {
    return this.questions[this.currentQuestionIndex].question;
  }

  get currentOptions() {
    return this.questions[this.currentQuestionIndex].options;
  }

  get isFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  onAnswerSelect(event: any) {
    const selectedValue = event.detail.value;
    this.feedbackMessage.push(selectedValue);
  }

  nextQuestion() {
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

  getConsent() {
    //alert
    this.presentConsentAlert();
  }

  submitQuestionnaire() {
    let res = this.feedbackMessage.join("");
    console.log(res);
    //api call integration here
    //redirect to result screen
  }
}