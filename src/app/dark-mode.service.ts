import { Injectable, Renderer2,RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private renderer: Renderer2;
  private colorScheme: string;
  
  constructor(private rendererFactory:RendererFactory2) { 
    this.renderer = rendererFactory.createRenderer(null, null);
    this.colorScheme = 'light';
  }

  setColorScheme(scheme:string): void{
    this.colorScheme = scheme;
    this.renderer.setAttribute(document.body, 'data-color-scheme', scheme)
  }
  load(): void{
    const savedColorScheme = localStorage.getItem('colorScheme');
    if (savedColorScheme){
      this.colorScheme = savedColorScheme;
    }
    this.setColorScheme(this.colorScheme);
  }
  toggleDarkMode(): void{
    this.colorScheme=this.colorScheme === 'dark' ? 'light' :'dark';
    this.setColorScheme(this.colorScheme);
    localStorage.setItem('colorScheme',this.colorScheme);
  }
}
