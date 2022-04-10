import { libWrapper } from "./lib/shim.js";

Hooks.on("init", () => {
    libWrapper.register("circular-token-borders", "Token.prototype._refreshBorder", function _circleRefreshBorder() {
        this.border.clear();
        const borderColor = this._getBorderColor();
        if( !borderColor ) return;
        const t = CONFIG.Canvas.objectBorderThickness;
        const h = Math.round(t / 2);
        const wRadius = this.w / 2;
        const hRadius = this.h / 2;
        this.border.lineStyle(t, 0x000000, 0.8).drawEllipse(wRadius, hRadius, wRadius + h, hRadius + h);
        this.border.lineStyle(h, borderColor, 1.0).drawEllipse(wRadius, hRadius, wRadius + h, hRadius + h);
    }, "OVERRIDE");
});