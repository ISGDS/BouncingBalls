import { Canvas } from './Canvas';

export class Ball {
    //ball settings
    protected canvas: Canvas;
    protected x: number;
    protected y: number;
    protected velX: number;
    protected velY: number;
    protected color: string;
    protected size: number;
    protected gravity: number;
    protected stopTimes: number;
    protected stopLimit: number;
    protected bounciness: number;
    protected friction: number;
  
    constructor(canvas: Canvas, x: number, y: number) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velX = this.getRandomVelocityX();
        this.velY = this.getRandomVelocityY();
        this.color = "black";
        this.size = 7.5;
        this.gravity = 15.5;
        this.stopTimes = 0;
        this.stopLimit = this.getRandomStopLimit();
        this.bounciness = 0.83;
        this.friction = 1000;
        this.size = 7.5;
    }
  
    //draw ball on screen
    public draw(): void {
        let context = this.canvas.getContext();
  
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
    }
  
    //update ball position
    public update(): void {
      if (this.velY === 0 && this.velX === 0) {
            this.stopTimes += 1;
        } else {
            this.stopTimes = 0;
        }
      
        if (this.stopTimes < this.stopLimit) {
            this.velY += this.gravity / 10;
            this.x += this.velX;
            this.y += this.velY;
              
            if (this.y> this.canvas.getHeight() - this.size) {
                this.y = this.canvas.getHeight() - this.size;
                this.velY = this.velY * (-1) * this.bounciness;
                this.velX /= this.friction;
            }
          
            if (this.x <= 0 + this.size) {
                this.x = this.size;
                this.velX *= (-1);
            } 
      }
    }
  
    //starting height force
    protected getRandomVelocityX(): number {
        return this.random(2, 12);
    }

    //starting width force
    protected getRandomVelocityY(): number {
        return this.random(2, 16);
    }

    //limit of bounces
    protected getRandomStopLimit(): number {
        return this.random(5, 10);
    }
  
    //random number generator function
    protected random(min: number, max: number): number {
        return Math.floor( Math.random() * (max - min) ) + min;
    }
}