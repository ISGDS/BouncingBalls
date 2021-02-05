export class Canvas {
    protected canvas: HTMLCanvasElement;
  
    constructor(private id: string) {
        this.canvas = <HTMLCanvasElement> document.getElementById(id);
        this.canvas.width = window.innerWidth - 40;
        this.canvas.height = window.innerHeight - 40;
    }
  
    //canvas 2d rendering context for rendering objects(balls)
    public getContext(): CanvasRenderingContext2D {
        return <CanvasRenderingContext2D> this.canvas.getContext('2d');
    }
  
    public getWidth(): number {
        return this.canvas.width;
    }
  
    public getHeight(): number {
        return this.canvas.height;
    }
  }