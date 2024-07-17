import { Component } from '@angular/core';

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
  feedbackMessage = '';

  questions: Question[] = [
    {
      question: 'What do you see in the image?',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ],
    },
    // Add more questions as needed
    {
      question: 'What color is the object?',
      options: [
        { label: 'Red', value: '1' },
        { label: 'Blue', value: '2' },
        { label: 'Green', value: '3' },
      ],
    },
  ];

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
    this.showFeedback = true;
    this.feedbackMessage = `You selected: ${selectedValue}`;
    // Additional logic can be added here
  }

  nextQuestion() {
    if (!this.isLastQuestion) {
      this.currentQuestionIndex++;
      this.showFeedback = false; // Reset feedback
    }
  }

  prevQuestion() {
    if (!this.isFirstQuestion) {
      this.currentQuestionIndex--;
      this.showFeedback = false; // Reset feedback
    }
  }
}
