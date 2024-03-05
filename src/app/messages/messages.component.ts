import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgIf } from '@angular/common';
import { InOutPaneAnimation } from '../animation';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  animations: [ InOutPaneAnimation(500)]
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
