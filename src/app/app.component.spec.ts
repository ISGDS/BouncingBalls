import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Ball } from './classes/Ball';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BouncingBalls'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BouncingBalls');
  });

  it('canvas id should be my-canvas', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas.id).toEqual('my-canvas');
  });

  it('div id should be container', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const div = fixture.nativeElement.querySelector('div');
    expect(div.id).toEqual('container');
  });

  it('AppComponent should be initialized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spyOnMethod).toHaveBeenCalled();
  });

  it('CreateBall function test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'createBall');
    const event = new MouseEvent('click'); 
    component.createBall(event);
    expect(spyOnMethod).toHaveBeenCalled();
  });

});
