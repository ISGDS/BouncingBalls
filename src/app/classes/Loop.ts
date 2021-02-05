import { BallGenerator } from './BallGenerator';
import { Canvas } from './Canvas';

export class Loop {
    protected canvas: Canvas;
    protected ballGenerator: BallGenerator;
  
    constructor(canvas: Canvas, ballGenerator: BallGenerator) {
        this.canvas = canvas;
        this.ballGenerator = ballGenerator;
    }
  
    //start and continue the animation for the canvas and the balls
    public start(): void {
        this.canvas.getContext().fillStyle = 'rgba(255,255,255,0.7)';
        this.canvas.getContext().fillRect(0,0, this.canvas.getWidth(), this.canvas.getHeight());
  
        for(let ball of this.ballGenerator.getAll()) {
            ball.draw();
            ball.update();
        }
  
        requestAnimationFrame(this.start.bind(this));
    }
  }
  