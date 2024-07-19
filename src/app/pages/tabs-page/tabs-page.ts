import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ChatbotService } from '../../providers/chatbot.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  @ViewChild(IonModal) modal: IonModal;

  messages: any = [{type: 'sent', text: "Hello, Hope you are doing good! I am here to help you today! Please select any one option from below.Do you need help for using this app?"}];

 // messages: Array<{ sender: string, text: string }> = [];

  
  constructor(private chatbotService: ChatbotService, private router: Router,) {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
   // this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
     // this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  isCheckArray(val) {
    return Array.isArray(val)
  }


  onMessageClicked(event: Event, index, message) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    console.log(event, index);
    if(index === 0) {
      this.messages.push({type: 'sent', text:[ 
        {"option": "Yes"},
        {"option": "No"}

      ]} );
    }

    if(index === 1) {
      if(message === "Yes") {
        this.messages.push({type: 'sent', text:[ 
          {"option": "Standardised"},
          {"option": "Personalised"}
  
        ]});
      } else {
        this.messages.push({type: 'sent', text:"All right.Would you like to listen to some good music?"});
        
      }
    }

    if(index === 2) {
      if(message === "Standardised") {
        this.modal.dismiss(null, 'cancel');
        this.router.navigateByUrl('/questionnaire');
      } else if(message === "Personalised") {
        this.modal.dismiss(null, 'cancel');
        this.router.navigateByUrl('/personalized');
      } else {
        this.messages.push({type: 'sent', text:"https://www.youtube.com/watch?v=vxaotJE1K-s"});
      }
     
    }



    // if(index === 2) {
    //   if(message === "Yes") {
    //     this.messages.push({type: 'sent', text:[ 
    //       {"option": "Standardised"},
    //       {"option": "Personalised"}
  
    //     ]});
    //   } else {
    //     this.messages.push({type: 'sent', text:"All right.Would you like to listen to some good music?"});
        
    //   }
    // }

    // if(index === 2) {
    //   if(message === "I'm happy to help. I'm Angela, your virtual advisor. What would you like to do today?") {
    //     this.messages.push({type: 'sent', text:[ 
    //       {"option": "Decide if it's time for senior care"},
    //       {"option": "Decide if it's time for senior care"}
    //     ]});
    //   } else {
    //     this.messages.push({type: 'sent', text:"Thank you"});
        
    //   }
    // }
  }

  // async sendMessage(userMessage : string | undefined) {
  //   if (userMessage.trim()) {
  //     this.messages.push({ sender: 'user', text: userMessage });
  //     try {
  //       const response = await this.chatbotService.sendMessage(userMessage);
  //       this.messages.push({ sender: 'bot', text: response.reply });
  //     } catch (error) {
  //       this.messages.push({ sender: 'bot', text: 'Sorry, there was an error.' });
  //     }
  //     userMessage = '';
  //   }
  // }


}
