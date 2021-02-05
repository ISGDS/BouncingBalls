import { VariableAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BallGenerator } from './classes/BallGenerator';
import { Loop } from './classes/Loop';
import { Canvas } from './classes/Canvas';
import { Ball } from './classes/Ball';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BouncingBalls';
  canvas:any
  ballGenerator:any;
  loop:any;

  ngOnInit(): void {
    this.canvas = new Canvas("my-canvas");
    this.ballGenerator = new BallGenerator(this.canvas);
    this.loop = new Loop(this.canvas, this.ballGenerator);
    this.loop.start();
  }

  //create ball on click
  createBall(event:any){
    let ball = new Ball(this.canvas, event.x, event.y);
    this.ballGenerator.add(ball);
    this.ballGenerator.draw();
    this.ballGenerator.update();
  }

}