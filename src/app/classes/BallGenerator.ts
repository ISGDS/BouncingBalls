import { Canvas } from './Canvas';
import { Ball } from './Ball';

export class BallGenerator {
  protected canvas: Canvas;
  protected balls: Ball[] = [];

  constructor(canvas: Canvas) {
      this.canvas = canvas;
  }

  protected add(ball: Ball): void {
      this.balls.push(ball);
  }

  public getAll(): Ball[] {
      return this.balls;
  }
}