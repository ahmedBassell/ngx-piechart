import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-piechart',
  templateUrl: './ngx-piechart.component.html',
  styleUrls: ['./ngx-piechart.component.scss']
})
export class NgxPiechartComponent implements OnInit {
  @Input() data: [{any}];
  @Input() radius: number;
  @Input() margin: number;
  width: string;
  height: string;
  origin: {x: number, y: number};
  arcs: any[];
  total: number;
  constructor() { }

  ngOnInit() {
    this.setDefaults();
    let angles = this._calculateAngles(this.data);
    let ArchPoints = this._calculateArcPoints(this.data);
  }

  setDefaults() {
    this.arcs = [];
    this.radius = this.radius || 200;
    this.margin = this.margin || 10;
    this.origin = {
      x: this.radius,
      y: this.radius,
    };
    this.width = ((2 * this.radius) + (2 * this.margin)) + 'px';
    this.height = ((2 * this.radius) + (2 * this.margin)) + 'px';
  }

  _calculateArcPoints(data) {
    let archPoints = [];
    archPoints.push({
      x: this.radius,
      y: 0,
    });

    let startAngle = 0;
    let endAngle;
    let startX = this.origin.x;
    let startY = this.origin.y;

    for (let item of data) {
      endAngle = (startAngle + item.angle) % 360;
      startAngle += 8;
      // endAngle -=5;

      let arc = this._describeArc(startX, startY, this.radius, startAngle, endAngle, item.color);
      this.arcs.push(arc);

      startAngle = endAngle;
    }
  }

  _describeArc(x, y, radius, startAngle, endAngle, color){
    let start = this._polarToCartesian(x, y, radius, startAngle);
    let end = this._polarToCartesian(x, y, radius, endAngle);
    let arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    let d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, arcSweep, 1, end.x, end.y,
        // "L", x,y,
        // "L", start.x, start.y
    ].join(" ");

    return {
      d: d,
      end: end,
      color: color,
    };
  }

  _calculateAngles(data) {
    let angles = [];
    let total = this._getTotal(data);
    this.total = total;
    for(let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let angle = (dataItem.value / total) * 360.0;
      dataItem.angle = angle;
      dataItem.percentage = ((dataItem.value / total) * 100.0).toFixed(2) + '%';
      angles.push(angle);
    }

    return angles;
  }

  _getTotal(data) {
    return data.reduce((a, b) => ({ value : a.value + b.value })).value;
  }

  _polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)) + this.margin,
      y: centerY + (radius * Math.sin(angleInRadians)) + this.margin,
    };
  }

}
