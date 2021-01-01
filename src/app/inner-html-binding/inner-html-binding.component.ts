import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './inner-html-binding.component.html',
  styleUrls: ['./inner-html-binding.component.scss']
})
export class InnerHtmlBindingComponent implements OnInit {
htmlSnippet = 'Template <script>alert("Owned")</script> <b>Syntax</b>';
  constructor() { }

  ngOnInit(): void {
  }

}
