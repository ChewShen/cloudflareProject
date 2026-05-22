import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('app');
  
  // 1. Create a reactive signal to hold your database notes array
  protected readonly notes = signal<any[]>([]);

  // 2. This runs automatically when the page loads
  async ngOnInit() {
    try {
      const response = await fetch('/api/notes');
      const data = await response.json();
      
      // 3. Update the signal with the notes data from your D1 database
      this.notes.set(data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  }
}