import { HTMLCanvasElement, CanvasRenderingContext2D, WebGLRenderingContext } from './constructor'
import HTMLElement from './HTMLElement'
import document from './document'

let hasModifiedCanvasPrototype = false
let hasInit2DContextConstructor = false
let hasInitWebGLContextConstructor = false

export default function Canvas() {
  const canvas = wx.createCanvas()

  canvas.type = 'canvas'

  canvas.__proto__.__proto__ = new HTMLElement('canvas')

  const _getContext = canvas.getContext

  canvas.getBoundingClientRect = () => {
    const ret = {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
    return ret
  }

  canvas.mrChildren = [];

  canvas.onUpdate = function(callback) {
    this._updateCallback = callback;
  }

  canvas.update = function() {
    if (this._updateCallback){
      this._updateCallback(this);
    }
  }

  canvas.handleEvent = function(opt) {
    if (!this.mrChildren){
      return;
    }

    for (let i = 0; i < this.mrChildren.length; i++){
      const e = this.mrChildren[i];
      if (e.hitTest){
        const b = e.hitTest(opt);
        if (b){
          e.handleEvent(opt);
          break;
        }
      }
    }
  }

  return canvas
}
