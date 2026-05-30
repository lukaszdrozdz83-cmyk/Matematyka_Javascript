export class FunctionData {
    constructor(func, color = "red", name = "f(x)") {
        this.func = func;
        this.color = color;
        this.name = name;
    }
}

export class Chart {

    legend = false;

    constructor(canvasId, {
        pixelsPerUnit = 20, // ile px = 1 jednostka
        unitScale = 1,      // ile "wartości" ma 1 jednostka osi
        precision = 0
    } = {}) {

        this.canvas = document.getElementById(canvasId);

        if (!this.canvas) {
            throw new Error(`Canvas "${canvasId}" not found`);
        }

        this.ctx = this.canvas.getContext("2d");

        this.pixelsPerUnit = pixelsPerUnit;
        this.unitScale = unitScale;
        this.precision = precision;

        this.functions = [];

        this.offsetX = 0;
        this.offsetY = 0;

        this.initInteraction();
    }

    addFunction(funcData) {
        this.functions.push(funcData);
    }

    setFunctions(funcs) {
        this.functions = funcs;
    }

    clear() {
        this.functions = [];
    }

    showLegend() {
        this.legend = true;
    }

    draw() {

        const { width, height } = this.canvas;

        this.centerX = width / 2 + this.offsetX;
        this.centerY = height / 2 + this.offsetY;

        this.ctx.clearRect(0, 0, width, height);

        this.drawGrid();
        this.drawAxes();
        this.drawNumbers();

        for (const f of this.functions) {
            this.drawFunction(f);
        }

        if(this.legend) {
            this.drawLegend();
        }
    }

    // ================= GRID =================

    drawGrid() {

        const { width, height } = this.canvas;

        this.ctx.strokeStyle = "#e6e6e6";
        this.ctx.lineWidth = 1;

        const step = this.pixelsPerUnit;

        // pion
        for (let x = this.centerX % step; x <= width; x += step) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, height);
            this.ctx.stroke();
        }

        // poziom
        for (let y = this.centerY % step; y <= height; y += step) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(width, y);
            this.ctx.stroke();
        }
    }

    // ================= AXES =================

    drawAxes() {

        const { width, height } = this.canvas;

        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;

        this.ctx.beginPath();

        this.ctx.moveTo(0, this.centerY);
        this.ctx.lineTo(width, this.centerY);

        this.ctx.moveTo(this.centerX, 0);
        this.ctx.lineTo(this.centerX, height);

        this.ctx.stroke();
    }

    // ================= NUMBERS =================

    drawNumbers() {

        const { width, height } = this.canvas;

        this.ctx.fillStyle = "black";
        this.ctx.font = "12px Arial";

        const step = this.pixelsPerUnit;

        // X
        const xStart = Math.floor((0 - this.centerX) / step);
        const xEnd = Math.ceil((width - this.centerX) / step);

        for (let i = xStart; i <= xEnd; i++) {

            const x = this.centerX + i * step;

            this.ctx.beginPath();
            this.ctx.moveTo(x, this.centerY - 4);
            this.ctx.lineTo(x, this.centerY + 4);
            this.ctx.stroke();

            if (i !== 0) {
                this.ctx.fillText(
                    (i * this.unitScale).toFixed(this.precision),
                    x - 10,
                    this.centerY + 18
                );
            }
        }

        // Y
        const yStart = Math.floor((this.centerY - height) / step);
        const yEnd = Math.ceil(this.centerY / step);

        for (let i = yStart; i <= yEnd; i++) {

            const y = this.centerY - i * step;

            this.ctx.beginPath();
            this.ctx.moveTo(this.centerX - 4, y);
            this.ctx.lineTo(this.centerX + 4, y);
            this.ctx.stroke();

            if (i !== 0) {
                this.ctx.fillText(
                    (i * this.unitScale).toFixed(this.precision),
                    this.centerX + 8,
                    y + 4
                );
            }
        }
    }

    // ================= FUNCTION =================

    drawFunction(f) {

        const { width } = this.canvas;

        this.ctx.strokeStyle = f.color;
        this.ctx.lineWidth = 2;

        this.ctx.beginPath();

        let first = true;

        for (let px = 0; px <= width; px++) {

            // px -> matematyka
            const x =
                ((px - this.centerX) / this.pixelsPerUnit)
                * this.unitScale;

            const y = f.func(x);

            if (!isFinite(y)) {
                first = true;
                continue;
            }

            const py =
                this.centerY -
                (y / this.unitScale) * this.pixelsPerUnit;

            if (first) {
                this.ctx.moveTo(px, py);
                first = false;
            } else {
                this.ctx.lineTo(px, py);
            }
        }

        this.ctx.stroke();
    }

    // ================= LEGEND =================

    drawLegend() {

        const x = 20;
        const y = 20;

        const w = 180;
        const h = this.functions.length * 25 + 20;

        this.ctx.fillStyle = "rgba(255,255,255,0.9)";
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, w, h, 10);
        this.ctx.fill();

        this.ctx.strokeStyle = "#999";
        this.ctx.stroke();

        for (let i = 0; i < this.functions.length; i++) {

            const f = this.functions[i];

            const yy = y + 25 + i * 25;

            this.ctx.strokeStyle = f.color;
            this.ctx.lineWidth = 3;

            this.ctx.beginPath();
            this.ctx.moveTo(x + 10, yy);
            this.ctx.lineTo(x + 40, yy);
            this.ctx.stroke();

            this.ctx.fillStyle = "black";
            this.ctx.font = "10px Arial";

            this.ctx.fillText(f.name, x + 50, yy + 5);
        }
    }

    // ================= INTERACTION =================

    initInteraction() {

        // zoom
        this.canvas.addEventListener("wheel", (e) => {

            e.preventDefault();

            const factor = 1.1;

            if (e.deltaY < 0) {
                this.pixelsPerUnit *= factor;
            } else {
                this.pixelsPerUnit /= factor;
            }

            this.pixelsPerUnit = Math.max(10, this.pixelsPerUnit);

            this.draw();
        });

        // drag
        let dragging = false;
        let lx = 0;
        let ly = 0;

        this.canvas.addEventListener("mousedown", (e) => {
            dragging = true;
            lx = e.clientX;
            ly = e.clientY;
        });

        window.addEventListener("mouseup", () => {
            dragging = false;
        });

        window.addEventListener("mousemove", (e) => {

            if (!dragging) return;

            this.offsetX += e.clientX - lx;
            this.offsetY += e.clientY - ly;

            lx = e.clientX;
            ly = e.clientY;

            this.draw();
        });
    }
}