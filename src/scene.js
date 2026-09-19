import {
  $ as e,
  A as t,
  At as n,
  B as r,
  Bt as i,
  C as a,
  Ct as o,
  D as s,
  Dt as c,
  E as l,
  F as u,
  Ft as d,
  G as f,
  H as p,
  Ht as m,
  I as h,
  It as g,
  J as _,
  K as v,
  L as y,
  Lt as b,
  M as x,
  Mt as S,
  N as C,
  Nt as w,
  O as T,
  Ot as E,
  P as ee,
  Pt as te,
  Q as D,
  R as ne,
  Rt as re,
  S as ie,
  St as O,
  T as ae,
  Tt as k,
  U as oe,
  Ut as se,
  V as ce,
  Vt as A,
  W as le,
  Wt as ue,
  X as j,
  Y as de,
  Z as fe,
  _ as pe,
  _t as me,
  a as M,
  at as N,
  b as P,
  bt as he,
  c as F,
  ct as I,
  d as ge,
  dt as _e,
  et as ve,
  f as ye,
  ft as be,
  g as xe,
  gt as Se,
  h as Ce,
  ht as we,
  i as Te,
  it as L,
  j as Ee,
  jt as De,
  k as Oe,
  kt as ke,
  l as R,
  lt as Ae,
  m as je,
  mt as Me,
  n as Ne,
  nt as z,
  o as Pe,
  ot as Fe,
  p as Ie,
  pt as Le,
  q as Re,
  r as B,
  rt as ze,
  s as Be,
  st as Ve,
  t as V,
  tt as H,
  u as He,
  ut as Ue,
  v as We,
  vt as Ge,
  w as Ke,
  wt as qe,
  x as U,
  xt as W,
  y as Je,
  yt as Ye,
  z as Xe,
  zt as Ze,
} from "./math-COP00n3K.js";
var Qe = {
    name: `CopyShader`,
    uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`,
  },
  $e = class {
    constructor() {
      ((this.isPass = !0),
        (this.enabled = !0),
        (this.needsSwap = !0),
        (this.clear = !1),
        (this.renderToScreen = !1));
    }
    setSize() {}
    render() {
      console.error(
        `THREE.Pass: .render() must be implemented in derived pass.`,
      );
    }
    dispose() {}
  },
  et = new be(-1, 1, 1, -1, 0, 1),
  tt = new (class extends pe {
    constructor() {
      (super(),
        this.setAttribute(
          `position`,
          new Oe([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3),
        ),
        this.setAttribute(`uv`, new Oe([0, 2, 0, 0, 2, 0], 2)));
    }
  })(),
  nt = class {
    constructor(e) {
      this._mesh = new z(tt, e);
    }
    dispose() {
      this._mesh.geometry.dispose();
    }
    render(e) {
      e.render(this._mesh, et);
    }
    get material() {
      return this._mesh.material;
    }
    set material(e) {
      this._mesh.material = e;
    }
  },
  rt = class extends $e {
    constructor(e, t = `tDiffuse`) {
      (super(),
        (this.textureID = t),
        (this.uniforms = null),
        (this.material = null),
        e instanceof E
          ? ((this.uniforms = e.uniforms), (this.material = e))
          : e &&
            ((this.uniforms = Ze.clone(e.uniforms)),
            (this.material = new E({
              name: e.name === void 0 ? `unspecified` : e.name,
              defines: Object.assign({}, e.defines),
              uniforms: this.uniforms,
              vertexShader: e.vertexShader,
              fragmentShader: e.fragmentShader,
            }))),
        (this._fsQuad = new nt(this.material)));
    }
    render(e, t, n) {
      (this.uniforms[this.textureID] &&
        (this.uniforms[this.textureID].value = n.texture),
        (this._fsQuad.material = this.material),
        this.renderToScreen
          ? (e.setRenderTarget(null), this._fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this._fsQuad.render(e)));
    }
    dispose() {
      (this.material.dispose(), this._fsQuad.dispose());
    }
  },
  it = class extends $e {
    constructor(e, t) {
      (super(),
        (this.scene = e),
        (this.camera = t),
        (this.clear = !0),
        (this.needsSwap = !1),
        (this.inverse = !1));
    }
    render(e, t, n) {
      let r = e.getContext(),
        i = e.state;
      (i.buffers.color.setMask(!1),
        i.buffers.depth.setMask(!1),
        i.buffers.color.setLocked(!0),
        i.buffers.depth.setLocked(!0));
      let a, o;
      (this.inverse ? ((a = 0), (o = 1)) : ((a = 1), (o = 0)),
        i.buffers.stencil.setTest(!0),
        i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE),
        i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295),
        i.buffers.stencil.setClear(o),
        i.buffers.stencil.setLocked(!0),
        e.setRenderTarget(n),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        e.setRenderTarget(t),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        i.buffers.color.setLocked(!1),
        i.buffers.depth.setLocked(!1),
        i.buffers.color.setMask(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.stencil.setLocked(!1),
        i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295),
        i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP),
        i.buffers.stencil.setLocked(!0));
    }
  },
  at = class extends $e {
    constructor() {
      (super(), (this.needsSwap = !1));
    }
    render(e) {
      (e.state.buffers.stencil.setLocked(!1),
        e.state.buffers.stencil.setTest(!1));
    }
  },
  ot = class {
    constructor(e, t) {
      if (
        ((this.renderer = e),
        (this._pixelRatio = e.getPixelRatio()),
        t === void 0)
      ) {
        let n = e.getSize(new i());
        ((this._width = n.width),
          (this._height = n.height),
          (t = new ue(
            this._width * this._pixelRatio,
            this._height * this._pixelRatio,
            { type: x },
          )),
          (t.texture.name = `EffectComposer.rt1`));
      } else ((this._width = t.width), (this._height = t.height));
      ((this.renderTarget1 = t),
        (this.renderTarget2 = t.clone()),
        (this.renderTarget2.texture.name = `EffectComposer.rt2`),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2),
        (this.renderToScreen = !0),
        (this.passes = []),
        (this.copyPass = new rt(Qe)),
        (this.copyPass.material.blending = 0),
        (this.timer = new b()));
    }
    swapBuffers() {
      let e = this.readBuffer;
      ((this.readBuffer = this.writeBuffer), (this.writeBuffer = e));
    }
    addPass(e) {
      (this.passes.push(e),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio,
        ));
    }
    insertPass(e, t) {
      (this.passes.splice(t, 0, e),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio,
        ));
    }
    removePass(e) {
      let t = this.passes.indexOf(e);
      t !== -1 && this.passes.splice(t, 1);
    }
    isLastEnabledPass(e) {
      for (let t = e + 1; t < this.passes.length; t++)
        if (this.passes[t].enabled) return !1;
      return !0;
    }
    render(e) {
      (this.timer.update(), e === void 0 && (e = this.timer.getDelta()));
      let t = this.renderer.getRenderTarget(),
        n = !1;
      for (let t = 0, r = this.passes.length; t < r; t++) {
        let r = this.passes[t];
        if (r.enabled !== !1) {
          if (
            ((r.renderToScreen =
              this.renderToScreen && this.isLastEnabledPass(t)),
            r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
            r.needsSwap)
          ) {
            if (n) {
              let t = this.renderer.getContext(),
                n = this.renderer.state.buffers.stencil;
              (n.setFunc(t.NOTEQUAL, 1, 4294967295),
                this.copyPass.render(
                  this.renderer,
                  this.writeBuffer,
                  this.readBuffer,
                  e,
                ),
                n.setFunc(t.EQUAL, 1, 4294967295));
            }
            this.swapBuffers();
          }
          it !== void 0 &&
            (r instanceof it ? (n = !0) : r instanceof at && (n = !1));
        }
      }
      this.renderer.setRenderTarget(t);
    }
    reset(e) {
      if (e === void 0) {
        let t = this.renderer.getSize(new i());
        ((this._pixelRatio = this.renderer.getPixelRatio()),
          (this._width = t.width),
          (this._height = t.height),
          (e = this.renderTarget1.clone()),
          e.setSize(
            this._width * this._pixelRatio,
            this._height * this._pixelRatio,
          ));
      }
      (this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        (this.renderTarget1 = e),
        (this.renderTarget2 = e.clone()),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2));
    }
    setSize(e, t) {
      ((this._width = e), (this._height = t));
      let n = this._width * this._pixelRatio,
        r = this._height * this._pixelRatio;
      (this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r));
      for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
    }
    setPixelRatio(e) {
      ((this._pixelRatio = e), this.setSize(this._width, this._height));
    }
    dispose() {
      (this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        this.copyPass.dispose());
    }
  },
  st = class extends $e {
    constructor(e, t, n = null, r = null, i = null) {
      (super(),
        (this.scene = e),
        (this.camera = t),
        (this.overrideMaterial = n),
        (this.clearColor = r),
        (this.clearAlpha = i),
        (this.clear = !0),
        (this.clearDepth = !1),
        (this.needsSwap = !1),
        (this.isRenderPass = !0),
        (this._oldClearColor = new U()));
    }
    render(e, t, n) {
      let r = e.autoClear;
      e.autoClear = !1;
      let i, a;
      (this.overrideMaterial !== null &&
        ((a = this.scene.overrideMaterial),
        (this.scene.overrideMaterial = this.overrideMaterial)),
        this.clearColor !== null &&
          (e.getClearColor(this._oldClearColor),
          e.setClearColor(this.clearColor, e.getClearAlpha())),
        this.clearAlpha !== null &&
          ((i = e.getClearAlpha()), e.setClearAlpha(this.clearAlpha)),
        this.clearDepth == 1 && e.clearDepth(),
        e.setRenderTarget(this.renderToScreen ? null : n),
        this.clear === !0 &&
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        e.render(this.scene, this.camera),
        this.clearColor !== null && e.setClearColor(this._oldClearColor),
        this.clearAlpha !== null && e.setClearAlpha(i),
        this.overrideMaterial !== null && (this.scene.overrideMaterial = a),
        (e.autoClear = r));
    }
  },
  ct = {
    name: `LuminosityHighPassShader`,
    uniforms: {
      tDiffuse: { value: null },
      luminosityThreshold: { value: 1 },
      smoothWidth: { value: 1 },
      defaultColor: { value: new U(0) },
      defaultOpacity: { value: 0 },
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
  },
  lt = class e extends $e {
    constructor(e, t = 1, n, r) {
      (super(),
        (this.strength = t),
        (this.radius = n),
        (this.threshold = r),
        (this.resolution = e === void 0 ? new i(256, 256) : new i(e.x, e.y)),
        (this.clearColor = new U(0, 0, 0)),
        (this.needsSwap = !1),
        (this.renderTargetsHorizontal = []),
        (this.renderTargetsVertical = []),
        (this.nMips = 5));
      let a = Math.round(this.resolution.x / 2),
        o = Math.round(this.resolution.y / 2);
      ((this.renderTargetBright = new ue(a, o, { type: x })),
        (this.renderTargetBright.texture.name = `UnrealBloomPass.bright`),
        (this.renderTargetBright.texture.generateMipmaps = !1));
      for (let e = 0; e < this.nMips; e++) {
        let t = new ue(a, o, { type: x });
        ((t.texture.name = `UnrealBloomPass.h` + e),
          (t.texture.generateMipmaps = !1),
          this.renderTargetsHorizontal.push(t));
        let n = new ue(a, o, { type: x });
        ((n.texture.name = `UnrealBloomPass.v` + e),
          (n.texture.generateMipmaps = !1),
          this.renderTargetsVertical.push(n),
          (a = Math.round(a / 2)),
          (o = Math.round(o / 2)));
      }
      let s = ct;
      ((this.highPassUniforms = Ze.clone(s.uniforms)),
        (this.highPassUniforms.luminosityThreshold.value = r),
        (this.highPassUniforms.smoothWidth.value = 0.01),
        (this.materialHighPassFilter = new E({
          uniforms: this.highPassUniforms,
          vertexShader: s.vertexShader,
          fragmentShader: s.fragmentShader,
        })),
        (this.separableBlurMaterials = []));
      let c = [6, 10, 14, 18, 22];
      ((a = Math.round(this.resolution.x / 2)),
        (o = Math.round(this.resolution.y / 2)));
      for (let e = 0; e < this.nMips; e++)
        (this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),
          (this.separableBlurMaterials[e].uniforms.invSize.value = new i(
            1 / a,
            1 / o,
          )),
          (a = Math.round(a / 2)),
          (o = Math.round(o / 2)));
      ((this.compositeMaterial = this._getCompositeMaterial(this.nMips)),
        (this.compositeMaterial.uniforms.blurTexture1.value =
          this.renderTargetsVertical[0].texture),
        (this.compositeMaterial.uniforms.blurTexture2.value =
          this.renderTargetsVertical[1].texture),
        (this.compositeMaterial.uniforms.blurTexture3.value =
          this.renderTargetsVertical[2].texture),
        (this.compositeMaterial.uniforms.blurTexture4.value =
          this.renderTargetsVertical[3].texture),
        (this.compositeMaterial.uniforms.blurTexture5.value =
          this.renderTargetsVertical[4].texture),
        (this.compositeMaterial.uniforms.bloomStrength.value = t),
        (this.compositeMaterial.uniforms.bloomRadius.value = 0.1));
      let l = [1, 0.8, 0.6, 0.4, 0.2];
      ((this.compositeMaterial.uniforms.bloomFactors.value = l),
        (this.bloomTintColors = [
          new A(1, 1, 1),
          new A(1, 1, 1),
          new A(1, 1, 1),
          new A(1, 1, 1),
          new A(1, 1, 1),
        ]),
        (this.compositeMaterial.uniforms.bloomTintColors.value =
          this.bloomTintColors),
        (this.copyUniforms = Ze.clone(Qe.uniforms)),
        (this.blendMaterial = new E({
          uniforms: this.copyUniforms,
          vertexShader: Qe.vertexShader,
          fragmentShader: Qe.fragmentShader,
          premultipliedAlpha: !0,
          blending: 2,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
        })),
        (this._oldClearColor = new U()),
        (this._oldClearAlpha = 1),
        (this._basic = new ze()),
        (this._fsQuad = new nt(null)));
    }
    dispose() {
      for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
        this.renderTargetsHorizontal[e].dispose();
      for (let e = 0; e < this.renderTargetsVertical.length; e++)
        this.renderTargetsVertical[e].dispose();
      this.renderTargetBright.dispose();
      for (let e = 0; e < this.separableBlurMaterials.length; e++)
        this.separableBlurMaterials[e].dispose();
      (this.compositeMaterial.dispose(),
        this.blendMaterial.dispose(),
        this._basic.dispose(),
        this._fsQuad.dispose());
    }
    setSize(e, t) {
      let n = Math.round(e / 2),
        r = Math.round(t / 2);
      this.renderTargetBright.setSize(n, r);
      for (let e = 0; e < this.nMips; e++)
        (this.renderTargetsHorizontal[e].setSize(n, r),
          this.renderTargetsVertical[e].setSize(n, r),
          (this.separableBlurMaterials[e].uniforms.invSize.value = new i(
            1 / n,
            1 / r,
          )),
          (n = Math.round(n / 2)),
          (r = Math.round(r / 2)));
    }
    render(t, n, r, i, a) {
      (t.getClearColor(this._oldClearColor),
        (this._oldClearAlpha = t.getClearAlpha()));
      let o = t.autoClear;
      ((t.autoClear = !1),
        t.setClearColor(this.clearColor, 0),
        a && t.state.buffers.stencil.setTest(!1),
        this.renderToScreen &&
          ((this._fsQuad.material = this._basic),
          (this._basic.map = r.texture),
          t.setRenderTarget(null),
          t.clear(),
          this._fsQuad.render(t)),
        (this.highPassUniforms.tDiffuse.value = r.texture),
        (this.highPassUniforms.luminosityThreshold.value = this.threshold),
        (this._fsQuad.material = this.materialHighPassFilter),
        t.setRenderTarget(this.renderTargetBright),
        t.clear(),
        this._fsQuad.render(t));
      let s = this.renderTargetBright;
      for (let n = 0; n < this.nMips; n++)
        ((this._fsQuad.material = this.separableBlurMaterials[n]),
          (this.separableBlurMaterials[n].uniforms.colorTexture.value =
            s.texture),
          (this.separableBlurMaterials[n].uniforms.direction.value =
            e.BlurDirectionX),
          t.setRenderTarget(this.renderTargetsHorizontal[n]),
          t.clear(),
          this._fsQuad.render(t),
          (this.separableBlurMaterials[n].uniforms.colorTexture.value =
            this.renderTargetsHorizontal[n].texture),
          (this.separableBlurMaterials[n].uniforms.direction.value =
            e.BlurDirectionY),
          t.setRenderTarget(this.renderTargetsVertical[n]),
          t.clear(),
          this._fsQuad.render(t),
          (s = this.renderTargetsVertical[n]));
      ((this._fsQuad.material = this.compositeMaterial),
        (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
        (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
        (this.compositeMaterial.uniforms.bloomTintColors.value =
          this.bloomTintColors),
        t.setRenderTarget(this.renderTargetsHorizontal[0]),
        t.clear(),
        this._fsQuad.render(t),
        (this._fsQuad.material = this.blendMaterial),
        (this.copyUniforms.tDiffuse.value =
          this.renderTargetsHorizontal[0].texture),
        a && t.state.buffers.stencil.setTest(!0),
        this.renderToScreen
          ? (t.setRenderTarget(null), this._fsQuad.render(t))
          : (t.setRenderTarget(r), this._fsQuad.render(t)),
        t.setClearColor(this._oldClearColor, this._oldClearAlpha),
        (t.autoClear = o));
    }
    _getSeparableBlurMaterial(e) {
      let t = [],
        n = e / 3;
      for (let r = 0; r < e; r++)
        t.push((0.39894 * Math.exp((-0.5 * r * r) / (n * n))) / n);
      return new E({
        defines: { KERNEL_RADIUS: e },
        uniforms: {
          colorTexture: { value: null },
          invSize: { value: new i(0.5, 0.5) },
          direction: { value: new i(0.5, 0.5) },
          gaussianCoefficients: { value: t },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`,
      });
    }
    _getCompositeMaterial(e) {
      return new E({
        defines: { NUM_MIPS: e },
        uniforms: {
          blurTexture1: { value: null },
          blurTexture2: { value: null },
          blurTexture3: { value: null },
          blurTexture4: { value: null },
          blurTexture5: { value: null },
          bloomStrength: { value: 1 },
          bloomFactors: { value: null },
          bloomTintColors: { value: null },
          bloomRadius: { value: 0 },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`,
      });
    }
  };
((lt.BlurDirectionX = new i(1, 0)), (lt.BlurDirectionY = new i(0, 1)));
var ut = {
    name: `OutputShader`,
    uniforms: { tDiffuse: { value: null }, toneMappingExposure: { value: 1 } },
    vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`,
  },
  dt = class extends $e {
    constructor() {
      (super(),
        (this.isOutputPass = !0),
        (this.uniforms = Ze.clone(ut.uniforms)),
        (this.material = new o({
          name: ut.name,
          uniforms: this.uniforms,
          vertexShader: ut.vertexShader,
          fragmentShader: ut.fragmentShader,
        })),
        (this._fsQuad = new nt(this.material)),
        (this._outputColorSpace = null),
        (this._toneMapping = null));
    }
    render(e, t, n) {
      ((this.uniforms.tDiffuse.value = n.texture),
        (this.uniforms.toneMappingExposure.value = e.toneMappingExposure),
        (this._outputColorSpace !== e.outputColorSpace ||
          this._toneMapping !== e.toneMapping) &&
          ((this._outputColorSpace = e.outputColorSpace),
          (this._toneMapping = e.toneMapping),
          (this.material.defines = {}),
          ie.getTransfer(this._outputColorSpace) === `srgb` &&
            (this.material.defines.SRGB_TRANSFER = ``),
          this._toneMapping === 1
            ? (this.material.defines.LINEAR_TONE_MAPPING = ``)
            : this._toneMapping === 2
              ? (this.material.defines.REINHARD_TONE_MAPPING = ``)
              : this._toneMapping === 3
                ? (this.material.defines.CINEON_TONE_MAPPING = ``)
                : this._toneMapping === 4
                  ? (this.material.defines.ACES_FILMIC_TONE_MAPPING = ``)
                  : this._toneMapping === 6
                    ? (this.material.defines.AGX_TONE_MAPPING = ``)
                    : this._toneMapping === 7
                      ? (this.material.defines.NEUTRAL_TONE_MAPPING = ``)
                      : this._toneMapping === 5 &&
                        (this.material.defines.CUSTOM_TONE_MAPPING = ``),
          (this.material.needsUpdate = !0)),
        this.renderToScreen === !0
          ? (e.setRenderTarget(null), this._fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this._fsQuad.render(e)));
    }
    dispose() {
      (this.material.dispose(), this._fsQuad.dispose());
    }
  },
  ft = {
    fogColor: 6847621,
    fogDensity: 0.006,
    exposure: 1.02,
    environmentIntensity: 0.78,
    environmentPosition: [0, 1.15, -0.45],
    environmentSize: 256,
  };
function pt(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    s = e[0].morphTargetsRelative,
    c = new pe(),
    l = 0;
  for (let u = 0; u < e.length; ++u) {
    let d = e[u],
      f = 0;
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
        ),
        null
      );
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. All geometries must have compatible attributes; make sure "` +
              e +
              `" attribute exists among all geometries, or in none of them.`,
          ),
          null
        );
      (a[e] === void 0 && (a[e] = []), a[e].push(d.attributes[e]), f++);
    }
    if (f !== r.size)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. Make sure all geometries have the same number of attributes.`,
        ),
        null
      );
    if (s !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. .morphTargetsRelative must be consistent throughout all geometries.`,
        ),
        null
      );
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `.  .morphAttributes must be consistent throughout all geometries.`,
          ),
          null
        );
      (o[e] === void 0 && (o[e] = []), o[e].push(d.morphAttributes[e]));
    }
    if (t) {
      let e;
      if (n) e = d.index.count;
      else if (d.attributes.position !== void 0)
        e = d.attributes.position.count;
      else
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. The geometry must have either an index or a position attribute`,
          ),
          null
        );
      (c.addGroup(l, e, u), (l += e));
    }
  }
  if (n) {
    let t = 0,
      n = [];
    for (let r = 0; r < e.length; ++r) {
      let i = e[r].index;
      for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
      t += e[r].attributes.position.count;
    }
    c.setIndex(n);
  }
  for (let e in a) {
    let t = mt(a[e]);
    if (!t)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
            e +
            ` attribute.`,
        ),
        null
      );
    c.setAttribute(e, t);
  }
  for (let e in o) {
    let t = o[e][0].length;
    if (t === 0) break;
    ((c.morphAttributes = c.morphAttributes || {}),
      (c.morphAttributes[e] = []));
    for (let n = 0; n < t; ++n) {
      let t = [];
      for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n]);
      let r = mt(t);
      if (!r)
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
              e +
              ` morphAttribute.`,
          ),
          null
        );
      c.morphAttributes[e].push(r);
    }
  }
  return c;
}
function mt(e) {
  let t,
    n,
    r,
    i = -1,
    a = 0;
  for (let o = 0; o < e.length; ++o) {
    let s = e[o];
    if ((t === void 0 && (t = s.array.constructor), t !== s.array.constructor))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`,
        ),
        null
      );
    if ((n === void 0 && (n = s.itemSize), n !== s.itemSize))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`,
        ),
        null
      );
    if ((r === void 0 && (r = s.normalized), r !== s.normalized))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`,
        ),
        null
      );
    if ((i === -1 && (i = s.gpuType), i !== s.gpuType))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`,
        ),
        null
      );
    a += s.count * n;
  }
  let o = new t(a),
    s = new xe(o, n, r),
    c = 0;
  for (let t = 0; t < e.length; ++t) {
    let r = e[t];
    if (r.isInterleavedBufferAttribute) {
      let e = c / n;
      for (let t = 0, i = r.count; t < i; t++)
        for (let i = 0; i < n; i++) {
          let n = r.getComponent(t, i);
          s.setComponent(t + e, i, n);
        }
    } else o.set(r.array, c);
    c += r.count * n;
  }
  return (i !== void 0 && (s.gpuType = i), s);
}
function ht(e, t) {
  if (t === 0)
    return (
      console.warn(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`,
      ),
      e
    );
  if (t === 2 || t === 1) {
    let n = e.getIndex();
    if (n === null) {
      let t = [],
        r = e.getAttribute(`position`);
      if (r !== void 0) {
        for (let e = 0; e < r.count; e++) t.push(e);
        (e.setIndex(t), (n = e.getIndex()));
      } else
        return (
          console.error(
            `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`,
          ),
          e
        );
    }
    let r = n.count - 2,
      i = [];
    if (t === 2)
      for (let e = 1; e <= r; e++)
        (i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1)));
    else
      for (let e = 0; e < r; e++)
        e % 2 == 0
          ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2)))
          : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
    i.length / 3 !== r &&
      console.error(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`,
      );
    let a = e.clone();
    return (a.setIndex(i), a.clearGroups(), a);
  } else
    return (
      console.error(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,
        t,
      ),
      e
    );
}
var gt = new A();
function G(e, t, n, r, i, a) {
  let o = (2 * Math.PI * i) / 4,
    s = Math.max(a - 2 * i, 0),
    c = Math.PI / 4;
  (gt.copy(t), (gt[r] = 0), gt.normalize());
  let l = (0.5 * o) / (o + s),
    u = 1 - gt.angleTo(e) / c;
  return Math.sign(gt[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
}
var _t = class e extends Ce {
    constructor(e = 1, t = 1, n = 1, r = 2, i = 0.1) {
      let a = r * 2 + 1;
      if (
        ((i = Math.min(e / 2, t / 2, n / 2, i)),
        super(1, 1, 1, a, a, a),
        (this.type = `RoundedBoxGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          segments: r,
          radius: i,
        }),
        a === 1)
      )
        return;
      let o = this.toNonIndexed();
      ((this.index = null),
        (this.attributes.position = o.attributes.position),
        (this.attributes.normal = o.attributes.normal),
        (this.attributes.uv = o.attributes.uv));
      let s = new A(),
        c = new A(),
        l = new A(e, t, n).divideScalar(2).subScalar(i),
        u = this.attributes.position.array,
        d = this.attributes.normal.array,
        f = this.attributes.uv.array,
        p = u.length / 6,
        m = new A(),
        h = 0.5 / a;
      for (let r = 0, a = 0; r < u.length; r += 3, a += 2)
        switch (
          (s.fromArray(u, r),
          c.copy(s),
          (c.x -= Math.sign(c.x) * h),
          (c.y -= Math.sign(c.y) * h),
          (c.z -= Math.sign(c.z) * h),
          c.normalize(),
          (u[r + 0] = l.x * Math.sign(s.x) + c.x * i),
          (u[r + 1] = l.y * Math.sign(s.y) + c.y * i),
          (u[r + 2] = l.z * Math.sign(s.z) + c.z * i),
          (d[r + 0] = c.x),
          (d[r + 1] = c.y),
          (d[r + 2] = c.z),
          Math.floor(r / p))
        ) {
          case 0:
            (m.set(1, 0, 0),
              (f[a + 0] = G(m, c, `z`, `y`, i, n)),
              (f[a + 1] = 1 - G(m, c, `y`, `z`, i, t)));
            break;
          case 1:
            (m.set(-1, 0, 0),
              (f[a + 0] = 1 - G(m, c, `z`, `y`, i, n)),
              (f[a + 1] = 1 - G(m, c, `y`, `z`, i, t)));
            break;
          case 2:
            (m.set(0, 1, 0),
              (f[a + 0] = 1 - G(m, c, `x`, `z`, i, e)),
              (f[a + 1] = G(m, c, `z`, `x`, i, n)));
            break;
          case 3:
            (m.set(0, -1, 0),
              (f[a + 0] = 1 - G(m, c, `x`, `z`, i, e)),
              (f[a + 1] = 1 - G(m, c, `z`, `x`, i, n)));
            break;
          case 4:
            (m.set(0, 0, 1),
              (f[a + 0] = 1 - G(m, c, `x`, `y`, i, e)),
              (f[a + 1] = 1 - G(m, c, `y`, `x`, i, t)));
            break;
          case 5:
            (m.set(0, 0, -1),
              (f[a + 0] = G(m, c, `x`, `y`, i, e)),
              (f[a + 1] = 1 - G(m, c, `y`, `x`, i, t)));
            break;
        }
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.depth, t.segments, t.radius);
    }
  },
  vt = 0.0235,
  yt = 0.742;
function K(e) {
  return [1, 3, 6, 8, 10].includes(e % 12);
}
function q(e) {
  let t = 0;
  for (let n = 21; n < e; n++) K(n) || t++;
  return -0.611 + t * vt + (K(e) ? -0.0015 : vt * 0.5);
}
function bt(e, t, n = 1) {
  let r = K(e),
    i = n * (r ? 0.028 : 0.033),
    a = r ? 0.0115 : 0.008,
    o = yt + (r ? 0.012 : -0.008),
    s = (t + 0.002 - a * Math.sin(i)) / Math.cos(i);
  return o + a * Math.cos(i) - s * Math.sin(i);
}
function xt(e = 0) {
  let t = new ke();
  return (
    t.moveTo(-0.752 + e, -0.015 + e),
    t.lineTo(0.752 - e, -0.015 + e),
    t.lineTo(0.752 - e, 0.57),
    t.bezierCurveTo(0.75 - e, 0.92, 0.35 - e, 1.02, 0.32 - e, 1.57),
    t.bezierCurveTo(0.3 - e, 2.13, 0.07, 2.48, -0.33, 2.48 - e),
    t.bezierCurveTo(-0.58, 2.48 - e, -0.752 + e, 2.32, -0.752 + e, 2.1),
    t.closePath(),
    t
  );
}
function St(e, t, n, r, i) {
  let a = new s(e, {
    depth: t,
    steps: 1,
    bevelEnabled: !0,
    bevelSize: 0.007,
    bevelThickness: 0.006,
    bevelSegments: 3,
    curveSegments: 48,
  });
  a.rotateX(-Math.PI / 2);
  let o = new z(a, n);
  return (
    (o.position.y = r),
    (o.castShadow = !0),
    (o.receiveShadow = !0),
    i.add(o),
    o
  );
}
function J(e, t, n, r, i, a, o, s, c = 0.005) {
  let l = new z(new _t(t, n, r, 2, c), s);
  return (
    l.position.set(i, a, o),
    (l.castShadow = !0),
    (l.receiveShadow = !0),
    e.add(l),
    l
  );
}
function Ct(e) {
  let t = `/assets/materials/spruce.png`,
    n;
  if (typeof Image > `u`) n = new d();
  else {
    let r,
      i,
      a = new Promise((e, t) => {
        ((r = e), (i = t));
      });
    ((n = new g().load(t, () => r(), void 0, i)), e.push(a));
  }
  return (
    (n.userData.sourcePath = `public` + t),
    (n.colorSpace = k),
    (n.wrapS = n.wrapT = qe),
    n.repeat.set(1.8, 1.4),
    (n.anisotropy = 8),
    n
  );
}
function wt(e, t) {
  let n = new Set();
  for (let e of t) e.traverse((e) => n.add(e));
  e.updateMatrixWorld(!0);
  let r = e.matrixWorld.clone().invert(),
    i = new Map(),
    a = new Map();
  e.traverseVisible((e) => {
    let t = e;
    if (
      !t.isMesh ||
      t.isInstancedMesh ||
      t.isSkinnedMesh ||
      n.has(t) ||
      Array.isArray(t.material)
    )
      return;
    let r = t.material,
      o = t.geometry;
    if (
      r.transparent ||
      !r.visible ||
      t.morphTargetInfluences ||
      o.drawRange.start !== 0 ||
      o.drawRange.count !== 1 / 0 ||
      t.matrixWorld.determinant() <= 0
    )
      return;
    let s = Object.entries(o.attributes)
        .map(
          ([e, t]) =>
            `${e}:${t.itemSize}:${t.normalized}:${t.array.constructor.name}`,
        )
        .sort()
        .join(`,`),
      c = [
        r.uuid,
        t.castShadow,
        t.receiveShadow,
        t.renderOrder,
        t.layers.mask,
        s,
      ].join(`/`);
    a.set(t, a.size);
    let l = i.get(c) ?? [];
    (l.push(t), i.set(c, l));
  });
  let o = new Set();
  for (let t of i.values()) {
    if (t.length < 2) continue;
    let n = t.some((e) => e.geometry.index !== null),
      i = t.map((e) => {
        let t = e.geometry
          .clone()
          .applyMatrix4(new H().multiplyMatrices(r, e.matrixWorld));
        return (
          n &&
            !t.index &&
            t.setIndex(
              Array.from({ length: t.attributes.position.count }, (e, t) => t),
            ),
          t
        );
      }),
      s = pt(i, !1);
    if ((i.forEach((e) => e.dispose()), !s)) continue;
    let c = t[0],
      l = new z(s, c.material);
    l.name = `Static piano parts`;
    let u = 0,
      d = 0;
    ((l.userData.sourceParts = t.map((e) => {
      let t = e.geometry.attributes.position.count,
        n = e.geometry.index?.count ?? t,
        i = {
          name: e.name,
          geometry: e.geometry.type,
          sourceOrder: a.get(e),
          vertexStart: u,
          vertexCount: t,
          indexStart: d,
          indexCount: n,
          localMatrix: new H().multiplyMatrices(r, e.matrixWorld).toArray(),
        };
      return ((u += t), (d += n), i);
    })),
      (l.castShadow = c.castShadow),
      (l.receiveShadow = c.receiveShadow),
      (l.renderOrder = c.renderOrder),
      (l.layers.mask = c.layers.mask),
      s.computeBoundingBox(),
      s.computeBoundingSphere(),
      e.add(l));
    for (let e of t) (o.add(e.geometry), e.removeFromParent());
  }
  e.traverse((e) => {
    let t = e;
    t.geometry && o.delete(t.geometry);
  });
  for (let e of o) e.dispose();
}
var Tt = class {
    constructor() {
      ((this.pendingTextures = []),
        (this.group = new Ee()),
        (this.keys = new Map()),
        (this.pedals = []),
        (this.damperRest = []),
        (this.damperDummy = new _e()),
        (this.active = []),
        (this.keyMatrix = new H()));
      let e = new L({
          color: 592911,
          metalness: 0.025,
          roughness: 0.2,
          clearcoat: 1,
          clearcoatRoughness: 0.095,
        }),
        t = new L({
          color: 1579291,
          metalness: 0.03,
          roughness: 0.23,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
        }),
        n = new N({
          color: 14075300,
          map: Ct(this.pendingTextures),
          roughness: 0.5,
        }),
        r = new N({ color: 12884821, metalness: 0.9, roughness: 0.29 }),
        o = new N({ color: 11704157, metalness: 0.58, roughness: 0.43 }),
        c = new N({ color: 5903392, roughness: 1 }),
        l = new N({ color: 1577486, roughness: 0.8 }),
        u = new L({ color: 15920866, roughness: 0.23, clearcoat: 0.4 }),
        d = new L({ color: 1053461, roughness: 0.19, clearcoat: 0.8 });
      (St(xt(), 0.09, l, 0.635, this.group),
        St(xt(0.04), 0.034, n, 0.78, this.group));
      let f = xt(),
        p = xt(0.035);
      (f.holes.push(new Le(p.getPoints(72))), St(f, 0.2, e, 0.745, this.group));
      let m = xt(0.085),
        h = xt(0.2);
      (m.holes.push(new Le(h.getPoints(72))),
        St(m, 0.026, o, 0.83, this.group));
      let g = xt(0.2).getPoints(160),
        _ = (e) => {
          let t = -e,
            n = [];
          for (let e = 0; e < g.length; e++) {
            let r = g[e],
              i = g[(e + 1) % g.length];
            ((r.y <= t && i.y > t) || (i.y <= t && r.y > t)) &&
              n.push(r.x + ((i.x - r.x) * (t - r.y)) / (i.y - r.y));
          }
          return [Math.min(...n), Math.max(...n)];
        };
      for (let e = 0; e < 4; e++) {
        let t = -0.47 - e * 0.43,
          n = new i(_(t)[0] - 0.028, t),
          r = new i(_(t - 0.085)[1] + 0.028, t - 0.085),
          a = r.clone().sub(n).normalize(),
          c = new i(-a.y, a.x),
          l = [];
        for (let e of [-1, 1]) {
          let t = [
            n.clone().addScaledVector(c, e * 0.047),
            n
              .clone()
              .addScaledVector(a, 0.08)
              .addScaledVector(c, e * 0.026),
            r
              .clone()
              .addScaledVector(a, -0.08)
              .addScaledVector(c, e * 0.026),
            r.clone().addScaledVector(c, e * 0.047),
          ];
          l.push(...(e === 1 ? t.reverse() : t));
        }
        let u = new ke();
        (l.forEach((e, t) => (t ? u.lineTo(e.x, -e.y) : u.moveTo(e.x, -e.y))),
          u.closePath());
        let d = new s(u, {
          depth: 0.0175,
          steps: 1,
          bevelEnabled: !0,
          bevelSize: 0.0035,
          bevelThickness: 0.004,
          bevelSegments: 3,
        });
        d.rotateX(-Math.PI / 2);
        let f = new z(d, o);
        ((f.name = `Connected cast plate web ` + e),
          (f.position.y = 0.829),
          (f.castShadow = !0),
          (f.receiveShadow = !0),
          this.group.add(f));
      }
      let b = Array.from({ length: 88 }, (e, t) => {
        let n = t < 27,
          r = n ? t / 26 : (t - 27) / 60,
          i = R(-0.624 + t * 0.0142, n ? 0.895 : 0.86, -0.235),
          a = n
            ? R(-0.39 + r * 0.5, 0.891, -2.25 + r * 0.98)
            : R(-0.545 + r * 1.04, 0.856, -1.76 + r ** 0.72 * 1.32);
        return {
          midi: t + 21,
          bass: n,
          start: i,
          end: a,
          copies: t < 15 ? 1 : t < 27 ? 2 : 3,
        };
      });
      for (let e of [!0, !1]) {
        let t = new z(
          new re(
            new Je(
              b
                .filter((t) => t.bass === e)
                .map((t) => t.end.clone().add(R(0, e ? -0.0255 : -0.0195, 0))),
            ),
            100,
            e ? 0.025 : 0.019,
            8,
            !1,
          ),
          n,
        );
        ((t.name = e ? `Raised bass bridge` : `Tenor and treble bridge`),
          (t.castShadow = !0),
          this.group.add(t));
      }
      let x = [],
        S = [],
        C = [],
        T = [],
        E = [],
        ee = (e, t, n) => {
          let r = t.clone().sub(e),
            i = new a(n, n, r.length(), 5, 1, !0);
          return (
            i.applyQuaternion(
              new W().setFromUnitVectors(R(0, 1, 0), r.normalize()),
            ),
            i.translate(...e.clone().add(t).multiplyScalar(0.5).toArray()),
            i
          );
        };
      for (let e of b) {
        let t = e.end.clone().sub(e.start).normalize(),
          n = R(-t.z, 0, t.x).normalize();
        for (let r = 0; r < e.copies; r++) {
          let i = n.clone().multiplyScalar((r - (e.copies - 1) / 2) * 0.0031),
            a = e.start.clone().add(i),
            o = e.end.clone().add(i),
            s = o.clone().addScaledVector(t, 0.065);
          (e.bass ? S : x).push(ee(a, s, e.bass ? 0.00112 : 36e-5));
          let c = a.clone().addScaledVector(t, -0.045 - r * 0.015);
          if ((T.push(c), E.push(s), e.bass)) {
            let e = a.distanceTo(o),
              r = Math.ceil(e / 0.0042),
              i = t.clone().cross(n).normalize();
            for (let e = 0; e < r; e++) {
              let s = e * 0.91,
                c = a.clone().lerp(o, e / r),
                l = c
                  .clone()
                  .addScaledVector(n, Math.cos(s) * 0.00123)
                  .addScaledVector(i, Math.sin(s) * 0.00123),
                u = c
                  .clone()
                  .addScaledVector(t, 0.0022)
                  .addScaledVector(n, -Math.cos(s) * 0.00123)
                  .addScaledVector(i, -Math.sin(s) * 0.00123);
              C.push(...l.toArray(), ...u.toArray());
            }
          }
        }
        if (e.midi <= 87) {
          let n = e.start.clone().lerp(e.end, 0.16);
          this.damperRest.push({
            midi: e.midi,
            p: n,
            angle: Math.atan2(-t.x, -t.z),
          });
        }
      }
      for (let [e, t, n] of [
        [
          x,
          new N({ color: 11120812, metalness: 0.95, roughness: 0.25 }),
          `Individual steel strings`,
        ],
        [
          S,
          new N({ color: 11039566, metalness: 0.93, roughness: 0.39 }),
          `Copper-wound bass strings`,
        ],
      ]) {
        let r = new z(pt(e), t);
        ((r.name = n),
          (r.castShadow = !0),
          this.group.add(r),
          e.forEach((e) => e.dispose()));
      }
      let te = new pe();
      te.setAttribute(`position`, new Oe(C, 3));
      let D = new v(
        te,
        new le({ color: 7820860, transparent: !0, opacity: 0.5 }),
      );
      ((D.name = `Bass winding ridges`), this.group.add(D));
      let ne = new y(
          new a(0.0024, 0.0027, 0.015, 8),
          new N({ color: 7041136, metalness: 0.94, roughness: 0.3 }),
          T.length,
        ),
        ie = new y(new a(0.0018, 0.002, 0.009, 7), r, E.length),
        O = new _e();
      for (let e = 0; e < T.length; e++)
        (O.position.copy(T[e]).add(R(0, 0.004, 0)),
          O.updateMatrix(),
          ne.setMatrixAt(e, O.matrix),
          O.position.copy(E[e]).add(R(0, -0.001, 0)),
          O.updateMatrix(),
          ie.setMatrixAt(e, O.matrix));
      ((ne.name = `Tuning pin for each string`),
        (ie.name = `Hitch pins beyond each bridge`),
        (ne.castShadow = !0),
        this.group.add(ne, ie));
      let oe = this.damperRest.length,
        se = new L({ color: 2104086, roughness: 0.36, clearcoat: 0.2 }),
        ce = new N({ color: 14076855, roughness: 1 });
      ((this.damperCaps = new y(new _t(0.012, 0.008, 0.043, 1, 0.002), se, oe)),
        (this.damperFelts = new y(
          new _t(0.01, 0.009, 0.038, 1, 0.001),
          ce,
          oe,
        )),
        (this.damperStems = new y(new a(9e-4, 9e-4, 0.09, 5), r, oe)),
        (this.damperCaps.name = `Moving damper heads`),
        (this.damperFelts.name = `Moving damper felts`),
        (this.damperStems.name = `Damper wires`));
      for (let e of [this.damperCaps, this.damperFelts, this.damperStems])
        (e.instanceMatrix.setUsage(ae),
          (e.castShadow = !0),
          (e.frustumCulled = !1),
          this.group.add(e));
      this.updateDampers(0);
      for (let e = 0; e < 19; e++) {
        let t = e < 9,
          n = t ? -0.675 : 0.6 - (e - 9) * 0.08,
          i = t ? -0.28 - e * 0.245 : -0.32 - (e - 9) * 0.174,
          s = new z(new a(0.01, 0.01, 0.0025, 16), o);
        (s.position.set(n, 0.862, i), this.group.add(s));
        let c = new z(new a(0.006, 0.006, 0.005, 6), r);
        (c.position.set(n, 0.866, i), this.group.add(c));
      }
      (J(this.group, 1.48, 0.078, 0.35, 0, 0.675, 0.105, e, 0.012),
        J(this.group, 1.26, 0.018, 0.02, 0, 0.744, 0.12, c, 0.002));
      for (let e = 21; e <= 108; e++) {
        let t = K(e),
          n = q(e),
          r = new Ee();
        r.position.set(n, yt - (t ? -0.012 : 0.008), -0.002);
        let i = new z(
          new _t(
            t ? 0.0145 : 0.0227,
            t ? 0.023 : 0.016,
            t ? 0.094 : 0.279,
            2,
            t ? 0.002 : 0.0014,
          ),
          t ? d : u,
        );
        (i.position.set(0, 0, t ? 0.179 : 0.1395),
          (i.visible = !1),
          (i.castShadow = !0),
          (i.receiveShadow = !0),
          r.add(i),
          this.group.add(r),
          this.keys.set(e, {
            midi: e,
            x: n,
            black: t,
            pivot: r,
            mesh: i,
            contact: R(n, yt + (t ? 0.022 : 0), t ? 0.207 : 0.251),
          }));
      }
      let A = this.keys.get(21),
        ue = this.keys.get(22);
      ((this.whiteKeyBatch = new y(A.mesh.geometry, u, 52)),
        (this.blackKeyBatch = new y(ue.mesh.geometry, d, 36)),
        (this.whiteKeyBatch.name = `52 independently moving white keys`),
        (this.blackKeyBatch.name = `36 independently moving black keys`));
      for (let e of [this.whiteKeyBatch, this.blackKeyBatch])
        (e.instanceMatrix.setUsage(ae),
          (e.castShadow = !0),
          (e.receiveShadow = !0),
          (e.frustumCulled = !1),
          this.group.add(e));
      (this.updateKeyInstances(),
        J(this.group, 0.08, 0.128, 0.372, -0.694, 0.728, 0.1, e, 0.012),
        J(this.group, 0.08, 0.128, 0.372, 0.694, 0.728, 0.1, e, 0.012),
        J(this.group, 1.3, 0.133, 0.055, 0, 0.807, 0.1, e, 0.005),
        J(this.group, 1.39, 0.008, 0.006, 0, 0.686, 0.292, r, 0.002),
        J(this.group, 1.34, 0.012, 0.205, 0, 0.886, 0.007, t, 0.004));
      let j = document.createElement(`canvas`);
      ((j.width = 512), (j.height = 96));
      let de = j.getContext(`2d`);
      (de.clearRect(0, 0, 512, 96),
        (de.fillStyle = `#bc9e66`),
        (de.font = `32px Georgia`),
        (de.textAlign = `center`),
        de.fillText(`D A Y B R E A K`, 256, 55));
      let fe = new We(j);
      fe.colorSpace = k;
      let me = new z(
        new Se(0.205, 0.039),
        new ze({ map: fe, transparent: !0, depthWrite: !1 }),
      );
      (me.position.set(0, 0.829, 0.1292), this.group.add(me));
      let M = new Ee();
      (M.position.set(-0.75, 0.963, 0), this.group.add(M));
      let P = St(xt(), 0.035, e, 0, M);
      ((P.position.x = 0.75), (M.rotation.z = 0.44));
      let he = new L({
          name: `Lid interior soft satin lacquer`,
          color: 1053463,
          metalness: 0,
          roughness: 0.48,
          clearcoat: 0.15,
          clearcoatRoughness: 0.3,
        }),
        F = St(xt(0.034), 0.009, he, -0.006, M);
      F.position.x = 0.75;
      let I = R(1.38, -0.019, -0.79);
      (J(M, 0.037, 0.011, 0.043, I.x, -0.0115, I.z, t, 0.003),
        M.updateWorldMatrix(!0, !1));
      let ge = M.localToWorld(I.clone());
      Be(this.group, R(0.55, 0.94, -0.78), ge, 0.01, t, 0.011, 12);
      for (let e of [-0.4, -1.65])
        J(this.group, 0.04, 0.014, 0.075, -0.752, 0.956, e, r, 0.002);
      for (let [t, n] of [
        [-0.637, 0.015],
        [0.637, 0.015],
        [-0.29, -2.05],
      ]) {
        let i = new z(new a(0.036, 0.055, 0.565, 5), e);
        (i.position.set(t, 0.36, n),
          (i.castShadow = !0),
          this.group.add(i),
          J(this.group, 0.108, 0.071, 0.112, t, 0.638, n, e, 0.01),
          J(this.group, 0.06, 0.061, 0.055, t, 0.066, n, r, 0.005));
        for (let e of [-0.026, 0.026]) {
          let i = new z(new a(0.031, 0.031, 0.012, 20), r);
          ((i.rotation.z = Math.PI / 2),
            i.position.set(t + e, 0.034, n),
            this.group.add(i));
        }
      }
      (Be(this.group, R(-0.13, 0.67, -0.09), R(-0.1, 0.105, 0), 0.017, e),
        Be(this.group, R(0.13, 0.67, -0.09), R(0.1, 0.105, 0), 0.017, e),
        J(this.group, 0.292, 0.055, 0.095, 0, 0.116, 0.005, e, 0.009));
      for (let e = 0; e < 3; e++) {
        let t = new Ee();
        (t.position.set((e - 1) * 0.072, 0.07, 0.025),
          J(t, 0.043, 0.013, 0.142, 0, 0, 0.064, r, 0.005),
          this.pedals.push(t),
          this.group.add(t),
          Be(
            this.group,
            R((e - 1) * 0.072, 0.115, -0.01),
            R((e - 1) * 0.072, 0.61, -0.05),
            0.004,
            r,
            0.004,
            7,
          ));
      }
      let ve = new N({ color: 1250583, roughness: 0.64 });
      J(this.group, 0.6, 0.075, 0.335, 0, 0.46, 0.76, ve, 0.023);
      for (let e = 0; e < 3; e++)
        for (let n = 0; n < 2; n++) {
          let r = new z(new w(0.006, 10, 5), t);
          ((r.scale.y = 0.22),
            r.position.set((e - 1) * 0.158, 0.498, 0.685 + n * 0.15),
            this.group.add(r));
        }
      J(this.group, 0.588, 0.035, 0.318, 0, 0.413, 0.76, e, 0.006);
      for (let t of [-0.251, 0.251])
        for (let n of [0.632, 0.888])
          (Be(this.group, R(t, 0.045, n), R(t, 0.419, n), 0.019, e, 0.023, 7),
            J(this.group, 0.043, 0.027, 0.043, t, 0.019, n, r, 0.004));
      wt(this.group, [
        ...this.pedals,
        ...[...this.keys.values()].map((e) => e.pivot),
      ]);
    }
    update(e, t, n) {
      this.active = [];
      for (let e of this.keys.values()) e.pivot.rotation.x = 0;
      for (let n of t) {
        let t = e - n.time,
          r = 0.048 - 0.031 * V((n.velocity - 0.3) / 0.6);
        if (t < -r || t > n.duration + 0.1) continue;
        let i = this.keys.get(n.midi);
        if (!i) continue;
        let a =
          t < 0
            ? V(1 + t / r)
            : t < n.duration
              ? 1
              : 1 - V((t - n.duration) / 0.1);
        ((i.pivot.rotation.x = Math.max(
          i.pivot.rotation.x,
          a * (i.black ? 0.028 : 0.033),
        )),
          t >= 0 && t < n.duration && this.active.push(n.midi));
      }
      ((this.pedals[2].rotation.x = n * 0.16),
        this.updateDampers(n),
        this.updateKeyInstances());
    }
    updateKeyInstances() {
      if (!this.whiteKeyBatch || !this.blackKeyBatch) return;
      let e = 0,
        t = 0;
      for (let n of this.keys.values())
        (n.pivot.updateMatrix(),
          n.mesh.updateMatrix(),
          this.keyMatrix.multiplyMatrices(n.pivot.matrix, n.mesh.matrix),
          (n.black ? this.blackKeyBatch : this.whiteKeyBatch).setMatrixAt(
            n.black ? t++ : e++,
            this.keyMatrix,
          ));
      ((this.whiteKeyBatch.instanceMatrix.needsUpdate = !0),
        (this.blackKeyBatch.instanceMatrix.needsUpdate = !0));
    }
    updateDampers(e) {
      if (!(!this.damperCaps || !this.damperFelts || !this.damperStems)) {
        for (let t = 0; t < this.damperRest.length; t++) {
          let n = this.damperRest[t],
            r = this.keys.get(n.midi),
            i = r ? r.pivot.rotation.x / (r.black ? 0.028 : 0.033) : 0,
            a = 0.011 * Math.max(e, V(i)),
            o = this.damperDummy;
          (o.rotation.set(0, n.angle, 0),
            o.position.copy(n.p).add(R(0, 0.015 + a, 0)),
            o.updateMatrix(),
            this.damperCaps.setMatrixAt(t, o.matrix),
            (o.position.y -= 0.008),
            o.updateMatrix(),
            this.damperFelts.setMatrixAt(t, o.matrix),
            o.position.copy(n.p).add(R(0, -0.04 + a, 0.018)),
            o.updateMatrix(),
            this.damperStems.setMatrixAt(t, o.matrix));
        }
        for (let e of [this.damperCaps, this.damperFelts, this.damperStems])
          e.instanceMatrix.needsUpdate = !0;
      }
    }
    contact(e, t) {
      let n = this.keys.get(e),
        r = t ?? (n.black ? 0.207 : 0.251),
        i = n.pivot.rotation.x / (n.black ? 0.028 : 0.033);
      return R(n.x, bt(e, r, i), r);
    }
    whenReady() {
      return Promise.all(this.pendingTextures);
    }
  },
  Et = {
    sourceScoreSha256: `44ef4cdc314ecd2e926cca116433210c5e8b603b84856c6393fdd1f6aa462c2f`,
    supportedIndexGaps: [
      { hi: 0, fi: 1, previousEnd: 0, next: `p00003`, nextTime: 1.165846 },
      {
        hi: 0,
        fi: 1,
        previous: `p00003`,
        previousEnd: 1.911077,
        next: `p00016`,
        nextTime: 4.987657,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00016`,
        previousEnd: 5.723151,
        next: `p00021`,
        nextTime: 7.280744,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00021`,
        previousEnd: 8.025975,
        next: `p00030`,
        nextTime: 9.603821,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00030`,
        previousEnd: 9.979821,
        next: `p00038`,
        nextTime: 12.391821,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00039`,
        previousEnd: 12.749658,
        next: `p00046`,
        nextTime: 13.81217,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00047`,
        previousEnd: 14.472844,
        next: `p00054`,
        nextTime: 15.539346,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00054`,
        previousEnd: 15.860174,
        next: `p00061`,
        nextTime: 16.918656,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00106`,
        previousEnd: 26.613345,
        next: `p00109`,
        nextTime: 27.115756,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00111`,
        previousEnd: 27.781411000000002,
        next: `p00118`,
        nextTime: 28.839894,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00120`,
        previousEnd: 29.392067,
        next: `p00125`,
        nextTime: 30.231233,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00136`,
        previousEnd: 32.674311,
        next: `p00144`,
        nextTime: 34.854985,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00140`,
        previousEnd: 34.063977,
        next: `p00152`,
        nextTime: 36.275334,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00144`,
        previousEnd: 35.049341999999996,
        next: `p00151`,
        nextTime: 36.262334,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00152`,
        previousEnd: 36.608171,
        next: `p00162`,
        nextTime: 38.360338,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00162`,
        previousEnd: 38.689166,
        next: `p00170`,
        nextTime: 39.739649,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00170`,
        previousEnd: 40.357316,
        next: `p00179`,
        nextTime: 41.824653,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00174`,
        previousEnd: 41.020021,
        next: `p00186`,
        nextTime: 43.195001,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00188`,
        previousEnd: 43.905893,
        next: `p00198`,
        nextTime: 46.086568,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00200`,
        previousEnd: 46.772242000000006,
        next: `p00209`,
        nextTime: 48.191591,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00209`,
        previousEnd: 48.516428000000005,
        next: `p00215`,
        nextTime: 49.578921,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00228`,
        previousEnd: 52.321561,
        next: `p00240`,
        nextTime: 54.426584,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00242`,
        previousEnd: 55.067518,
        next: `p00251`,
        nextTime: 57.31815,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00251`,
        previousEnd: 57.533486,
        next: `p00270`,
        nextTime: 61.111498,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00311`,
        previousEnd: 69.44229,
        next: `p00319`,
        nextTime: 70.500773,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00338`,
        previousEnd: 74.25622800000001,
        next: `p00345`,
        nextTime: 75.310011,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00339`,
        previousEnd: 74.513399,
        next: `p00344`,
        nextTime: 75.297011,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00346`,
        previousEnd: 75.89270900000001,
        next: `p00364`,
        nextTime: 79.524964,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00364`,
        previousEnd: 79.79744099999999,
        next: `p00372`,
        nextTime: 80.8971,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00366`,
        previousEnd: 79.85947300000001,
        next: `p00373`,
        nextTime: 80.9101,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00372`,
        previousEnd: 81.14509199999999,
        next: `p00381`,
        nextTime: 82.597815,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00381`,
        previousEnd: 82.910894,
        next: `p00392`,
        nextTime: 84.620287,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00391`,
        previousEnd: 84.946366,
        next: `p00400`,
        nextTime: 85.652184,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00400`,
        previousEnd: 86.09982000000001,
        next: `p00413`,
        nextTime: 87.701139,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00436`,
        previousEnd: 92.14815,
        next: `p00444`,
        nextTime: 93.251941,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00508`,
        previousEnd: 104.532324,
        next: `p00519`,
        nextTime: 106.245617,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00532`,
        previousEnd: 108.928229,
        next: `p00541`,
        nextTime: 109.986988,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00540`,
        previousEnd: 110.328929,
        next: `p00546`,
        nextTime: 111.058812,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00546`,
        previousEnd: 111.748694,
        next: `p00550`,
        nextTime: 113.202284,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00557`,
        previousEnd: 116.096297,
        next: `p00561`,
        nextTime: 116.843189,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00564`,
        previousEnd: 119.370533,
        next: `p00578`,
        nextTime: 121.984295,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00591`,
        previousEnd: 126.067044,
        next: `p00600`,
        nextTime: 128.626388,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00608`,
        previousEnd: 132.243293,
        next: `p00614`,
        nextTime: 132.999001,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00619`,
        previousEnd: 134.493988,
        next: `p00645`,
        nextTime: 140.305883,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00624`,
        previousEnd: 136.23962600000002,
        next: `p00631`,
        nextTime: 137.452547,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00641`,
        previousEnd: 139.915942,
        next: `p00649`,
        nextTime: 141.351706,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00650`,
        previousEnd: 141.693647,
        next: `p00676`,
        nextTime: 147.921607,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00667`,
        previousEnd: 145.27853100000002,
        next: `p00709`,
        nextTime: 156.945984,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00693`,
        previousEnd: 153.76038300000002,
        next: `p00721`,
        nextTime: 159.181206,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00709`,
        previousEnd: 157.29235400000002,
        next: `p00716`,
        nextTime: 158.427465,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00720`,
        previousEnd: 159.424607,
        next: `p00729`,
        nextTime: 160.501539,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00721`,
        previousEnd: 159.43365,
        next: `p00730`,
        nextTime: 160.514539,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00730`,
        previousEnd: 160.831873,
        next: `p00738`,
        nextTime: 161.847873,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00738`,
        previousEnd: 162.109752,
        next: `p00760`,
        nextTime: 165.151902,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00742`,
        previousEnd: 162.781958,
        next: `p00751`,
        nextTime: 164.142565,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00760`,
        previousEnd: 165.589235,
        next: `p00766`,
        nextTime: 166.160902,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00766`,
        previousEnd: 166.41217899999998,
        next: `p00774`,
        nextTime: 167.155402,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00783`,
        previousEnd: 168.86903999999998,
        next: `p00799`,
        nextTime: 171.243856,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00800`,
        previousEnd: 171.873523,
        next: `p00831`,
        nextTime: 176.201552,
        earlyRelease: [176.02, 176.065],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00816`,
        previousEnd: 174.147977,
        next: `p00825`,
        nextTime: 175.218052,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00825`,
        previousEnd: 175.530018,
        next: `p00836`,
        nextTime: 177.214552,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00831`,
        previousEnd: 176.510885,
        next: `p00857`,
        nextTime: 180.618339,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00836`,
        previousEnd: 177.47032099999998,
        next: `p00854`,
        nextTime: 180.02815,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00857`,
        previousEnd: 180.883241,
        next: `p00867`,
        nextTime: 181.960173,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00858`,
        previousEnd: 180.967173,
        next: `p00866`,
        nextTime: 181.648839,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00866`,
        previousEnd: 181.949173,
        next: `p00877`,
        nextTime: 183.306506,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00867`,
        previousEnd: 182.200589,
        next: `p00880`,
        nextTime: 183.623176,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00886`,
        previousEnd: 185.26052800000002,
        next: `p00895`,
        nextTime: 185.947369,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00904`,
        previousEnd: 187.262202,
        next: `p00915`,
        nextTime: 188.610535,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00905`,
        previousEnd: 187.494856,
        next: `p00914`,
        nextTime: 188.589035,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00915`,
        previousEnd: 189.063501,
        next: `p00924`,
        nextTime: 190.067811,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00951`,
        previousEnd: 194.34476,
        next: `p00961`,
        nextTime: 195.693174,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00961`,
        previousEnd: 195.95318,
        next: `p00967`,
        nextTime: 196.676685,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00965`,
        previousEnd: 196.88501300000001,
        next: `p00985`,
        nextTime: 200.016507,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00985`,
        previousEnd: 200.337335,
        next: `p00989`,
        nextTime: 201.05099,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00988`,
        previousEnd: 201.392818,
        next: `p00991`,
        nextTime: 202.098473,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00990`,
        previousEnd: 202.30112400000002,
        next: `p00997`,
        nextTime: 203.514044,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p01002`,
        previousEnd: 204.931616,
        next: `p01016`,
        nextTime: 207.150738,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p01016`,
        previousEnd: 207.83344499999998,
        next: `p01026`,
        nextTime: 210.132445,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p01018`,
        previousEnd: 208.077964,
        next: `p01048`,
        nextTime: 218.143564,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p01036`,
        previousEnd: 213.22210700000002,
        next: `p01046`,
        nextTime: 217.286999,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p01046`,
        previousEnd: 218.132564,
        next: `p01061`,
        nextTime: 224.107593,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p01051`,
        previousEnd: 219.85869499999998,
        next: `p01057`,
        nextTime: 221.704641,
      },
      {
        hi: 0,
        fi: 1,
        previous: `p01057`,
        previousEnd: 222.633022,
        nextTime: 233.144228,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p01066`,
        previousEnd: 228.89211699999998,
        nextTime: 233.144228,
      },
    ],
    curves: [
      {
        hi: 1,
        fi: 3,
        previous: `p00739`,
        previousEnd: 162.084383,
        next: `p00741`,
        nextTime: 162.186543,
        knots: [
          [162.084383, 0, 0, 0, 0],
          [162.090383, 4, 0, 5, 0],
          [162.096383, 8, 0, 5, 0],
          [162.102383, 12, 0, 5, 0],
          [162.108383, 12, 0, 5, 0],
          [162.114383, 14, 0, 5, 0],
          [162.117, 16.104597754101285, 0, 5, 0],
          [162.120383, 16, 0, 5, 0],
          [162.126383, 16, 0, 5, 0],
          [162.132383, 16, 0, 5, 0],
          [162.138383, 16, 0, 5, 0],
          [162.144383, 16, 0, 5, 0],
          [162.150383, 16, 1, 5, 0],
          [162.156383, 18.026626345515538, 2, 5, 0],
          [
            162.162383, 23.469143595294025, 4, 3.8266963413145825,
            -1.3066336198996695,
          ],
          [162.168383, 23.5, 7, 0.5, -6.125],
          [162.174383, 12.307215521396621, 4, -5.5, -6.125],
          [
            162.180383, 4.589617275715273, 2, -2.356238282719648,
            -2.623992633028699,
          ],
          [162.186543, 0, 0, 0, 0],
        ],
        mode: `hermite-controls`,
      },
      {
        hi: 1,
        fi: 4,
        previous: `p00727`,
        previousEnd: 160.490539,
        next: `p00743`,
        nextTime: 162.507213,
        knots: [
          [162.084383, 0, 0, 0, 0],
          [162.125, 0, -8.5, 0, 0],
          [162.195, 0, -8.5, 0, 0],
          [162.25, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 3,
        previous: `p00739`,
        previousEnd: 162.084383,
        next: `p00741`,
        nextTime: 162.186543,
        knots: [
          [162.168, 0, 0, 0, 0],
          [162.172, 0, 0, -1.2, 0],
          [162.176, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00535`,
        previousEnd: 109.290138,
        next: `p00543`,
        nextTime: 110.352929,
        knots: [
          [109.52, 0, 0, 0, 0],
          [109.59, 20, -30, 0, 0],
          [109.627, 20, -30, 0, 0],
          [109.72, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 3,
        previous: `p00533`,
        previousEnd: 108.94122899999999,
        next: `p00554`,
        nextTime: 114.308845,
        knots: [
          [109.52, 0, 0, 0, 0],
          [109.59, 20, -30, 0, 0],
          [109.627, 20, -30, 0, 0],
          [109.72, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 4,
        previous: `p00529`,
        previousEnd: 108.60831999999999,
        next: `p00572`,
        nextTime: 120.484094,
        knots: [
          [109.52, 0, 0, 0, 0],
          [109.59, 20, -30, 0, 0],
          [109.627, 20, -30, 0, 0],
          [109.72, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 4,
        previous: `p00299`,
        previousEnd: 66.54,
        next: `p00309`,
        nextTime: 68.448307,
        knots: [
          [68.32, 0, 0, 0, 0],
          [68.37, 0, -6.5, 0, 0],
          [68.41, 0, -6.5, 0, 0],
          [68.448307, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00331`,
        previousEnd: 73.22488200000001,
        next: `p00347`,
        nextTime: 75.663838,
        knots: [
          [73.803, 0, 0, 0, 0],
          [73.873, 25, -30, 0, 0],
          [73.91, 25, -30, 0, 0],
          [74.003, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 3,
        previous: `p00327`,
        previousEnd: 72.210155,
        next: `p00359`,
        nextTime: 77.76975,
        knots: [
          [73.803, 0, 0, 0, 0],
          [73.873, 25, -30, 0, 0],
          [73.91, 25, -30, 0, 0],
          [74.003, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 4,
        previous: `p00324`,
        previousEnd: 71.86124600000001,
        next: `p00340`,
        nextTime: 74.284528,
        knots: [
          [73.803, 0, 0, 0, 0],
          [73.873, 25, -30, 0, 0],
          [73.91, 25, -30, 0, 0],
          [74.003, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00216`,
        previousEnd: 49.883542,
        next: `p00225`,
        nextTime: 51.325059,
        knots: [
          [49.883542, 0, 0, 0, 0],
          [49.916, 30, 10, 0, 0],
          [50.025, 30, 10, 0, 0],
          [50.1, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00216`,
        previousEnd: 49.883542,
        next: `p00225`,
        nextTime: 51.325059,
        knots: [
          [51.035, 0, 0, 0, 0],
          [51.1, 30, 10, 0, 0],
          [51.255, 30, 10, 0, 0],
          [51.325059, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00196`,
        previousEnd: 45.364676,
        next: `p00208`,
        nextTime: 47.864754,
        phase: `arrival`,
        knots: [
          [47.574695, 0, 0, 0, 0],
          [47.639694999999996, 30, 10, 0, 0],
          [47.794695, 30, 10, 0, 0],
          [47.864754, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00210`,
        previousEnd: 48.878265,
        next: `p00216`,
        nextTime: 49.591921,
        phase: `arrival`,
        knots: [
          [49.301862, 0, 0, 0, 0],
          [49.366862, 30, 10, 0, 0],
          [49.521862, 30, 10, 0, 0],
          [49.591921, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00225`,
        previousEnd: 51.636886000000004,
        next: `p00238`,
        nextTime: 53.753909,
        phase: `release`,
        knots: [
          [51.636886000000004, 0, 0, 0, 0],
          [51.669344, 30, 10, 0, 0],
          [51.778344000000004, 30, 10, 0, 0],
          [51.85334400000001, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00225`,
        previousEnd: 51.636886000000004,
        next: `p00238`,
        nextTime: 53.753909,
        phase: `arrival`,
        knots: [
          [53.46385, 0, 0, 0, 0],
          [53.52885, 30, 10, 0, 0],
          [53.68385, 30, 10, 0, 0],
          [53.753909, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00243`,
        previousEnd: 55.112269,
        next: `p00248`,
        nextTime: 55.906367,
        phase: `release`,
        knots: [
          [55.112269, 0, 0, 0, 0],
          [55.144726999999996, 30, 10, 0, 0],
          [55.253727, 30, 10, 0, 0],
          [55.328727, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00243`,
        previousEnd: 55.112269,
        next: `p00248`,
        nextTime: 55.906367,
        phase: `arrival`,
        knots: [
          [55.616308000000004, 0, 0, 0, 0],
          [55.681308, 30, 10, 0, 0],
          [55.836308, 30, 10, 0, 0],
          [55.906367, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00248`,
        previousEnd: 56.226813,
        next: `p00253`,
        nextTime: 57.34665,
        phase: `release`,
        knots: [
          [56.226813, 0, 0, 0, 0],
          [56.259271, 30, 10, 0, 0],
          [56.368271, 30, 10, 0, 0],
          [56.443271, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00238`,
        previousEnd: 54.427584,
        next: `p00243`,
        nextTime: 54.82203,
        phase: `short`,
        knots: [
          [54.427584, 0, 0, 0, 0],
          [54.460042, 32, 10, 0, 0],
          [54.751971, 32, 10, 0, 0],
          [54.82203, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00159`,
        previousEnd: 38.307160999999994,
        next: `p00193`,
        nextTime: 44.322339,
        mode: `blend-neutral`,
        neutralQuaternions: [
          [
            -0.2762930395446723, 0.1365210712106369, 0.12026087606524592,
            0.9436956774952034,
          ],
          [
            0.06361965835094452, -0.11735854297876358, -0.004792043007910252,
            0.9910381436347961,
          ],
          [
            0.060644280165433884, -0.1304895579814911, 0.02646058425307274,
            0.9892394542694092,
          ],
        ],
        knots: [
          [42.8, 0, 0, 0, 0],
          [42.95, 1, 0, 0, 0],
          [43.14, 1, 0, 0, 0],
          [43.22, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 3,
        previous: `p00181`,
        previousEnd: 42.498327,
        next: `p00203`,
        nextTime: 46.809242,
        mode: `blend-neutral`,
        neutralQuaternions: [
          [
            -0.2060403938413461, -0.009142301903174645, 0.23557759268265066,
            0.9497194584301932,
          ],
          [
            0.07044843584299088, -0.12179498374462128, -0.032598771154880524,
            0.9895151853561401,
          ],
          [
            0.05818096548318863, 0.04452133551239967, 0.03224598243832588,
            0.9967913627624512,
          ],
        ],
        knots: [
          [42.8, 0, 0, 0, 0],
          [42.95, 1, 0, 0, 0],
          [43.14, 1, 0, 0, 0],
          [43.22, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 4,
        previous: `p00177`,
        previousEnd: 41.800653,
        next: `p00187`,
        nextTime: 43.220001,
        mode: `blend-neutral`,
        neutralQuaternions: [
          [
            -0.08311336992970998, -0.04568482241115004, 0.30048948478678583,
            0.9490580303152146,
          ],
          [
            0.08494481444358826, 0.0019918798934668303, -0.020155522972345352,
            0.9961798191070557,
          ],
          [
            -0.0011939916294068098, -0.09410761296749115, 0.012900157831609249,
            0.9954777359962463,
          ],
        ],
        knots: [
          [42.8, 0, 0, 0, 0],
          [42.95, 1, 0, 0, 0],
          [43.14, 1, 0, 0, 0],
          [43.22, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 3,
        previous: `p00401`,
        previousEnd: 86.658911,
        next: `p00423`,
        nextTime: 89.480345,
        knots: [
          [89.2, 0, 0, 0, 0],
          [89.25, 6, 0, 0, 0],
          [89.32, 13, 0, 0, 0],
          [89.35, 15, 0, 0, 0],
          [89.4, 25, 0, 0, 0],
          [89.43, 32, 0, 0, 0],
          [89.44, 30, 0, 0, 0],
          [89.45, 30.5, -0.5, 0.25, 0],
          [89.46, 29, 0, 0, 0],
          [89.47, 19, 0, 0, 0],
          [89.480345, 0, 0, 0, 0],
        ],
        mode: `hermite-controls`,
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00421`,
        previousEnd: 89.455345,
        next: `p00436`,
        nextTime: 91.884804,
        knots: [
          [90.77, 0, 0, 0, 0],
          [90.81, 0, 7, 0, 0],
          [90.845, 0, 7, 0, 0],
          [90.88, 0, 0, 0, 0],
        ],
        mode: `hermite-controls`,
      },
      {
        hi: 1,
        fi: 4,
        previous: `p00415`,
        previousEnd: 88.357021,
        next: `p00418`,
        nextTime: 88.407021,
        knots: [
          [88.357021, 0, 0, 0, 0],
          [88.369521, -7, -2.5, 30, 5.75],
          [88.38202100000001, -17, -5.25, 32.75, 13],
          [88.394521, -6, 18.5, 5, 7.75],
          [88.407021, 0, 0, 0, 0],
        ],
        mode: `hermite-controls`,
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00014`,
        previousEnd: 4.596909999999999,
        next: `p00020`,
        nextTime: 6.909129,
        knots: [
          [6.045, 0, 0, 0, 0],
          [6.09, 7, 2, 0, 0],
          [6.14, 7, 2, 0, 0],
          [6.2, 0, 2, 0, 0],
          [6.25, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00014`,
        previousEnd: 4.596909999999999,
        next: `p00020`,
        nextTime: 6.909129,
        knots: [
          [6.62, 0, 0, 0, 0],
          [6.65, 0, 1.5, 0, 0],
          [6.68, 0, 1.5, 0, 0],
          [6.72, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00020`,
        previousEnd: 7.277744,
        next: `p00025`,
        nextTime: 8.44759,
        knots: [
          [7.3, 0, 0, 0, 0],
          [7.39, 0, 1.5, 0, 0],
          [8.24, 0, 1.5, 0, 0],
          [8.36, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00029`,
        previousEnd: 9.992821,
        next: `p00035`,
        nextTime: 10.816821,
        knots: [
          [10.52, 0, 0, 0, 0],
          [10.55, 0, 1.5, 0, 0],
          [10.59, 0, 1.5, 0, 0],
          [10.63, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00035`,
        previousEnd: 11.600821,
        next: `p00048`,
        nextTime: 14.170007,
        knots: [
          [11.600821, 0, 0, 0, 0],
          [11.623, 16, 6, 0, 0],
          [11.64, 16, 6, 0, 0],
          [11.665, 10, 3, 0, 0],
          [11.7, 3, 0.5, 0, 0],
          [11.75, 3, 0.5, 0, 0],
          [11.8, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00035`,
        previousEnd: 11.600821,
        next: `p00048`,
        nextTime: 14.170007,
        knots: [
          [11.78, 0, 0, 0, 0],
          [11.94, 39, 19, 0, 0],
          [12.55, 39, 19, 0, 0],
          [12.67, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 1,
        previous: `p00032`,
        previousEnd: 10.400821,
        next: `p00039`,
        nextTime: 12.416821,
        knots: [
          [12.27, 0, 0, 0, 0],
          [12.335, 5, 9, 0, 0],
          [12.39, 5, 9, 0, 0],
          [12.4, 5.8, 12, 0, 0],
          [12.416821, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 3,
        previous: `p00037`,
        previousEnd: 12.392821000000001,
        next: `p00055`,
        nextTime: 15.561346,
        knots: [
          [12.392821, 0, 0, 0, 0],
          [12.407, 14, 0, 0, 0],
          [12.46, 14, 0, 0, 0],
          [12.55, 0, 0, 0, 0],
        ],
      },
      {
        hi: 1,
        fi: 2,
        previous: `p00035`,
        previousEnd: 11.600821,
        next: `p00048`,
        nextTime: 14.170007,
        mode: `blend-neutral`,
        neutralQuaternions: [
          [
            0.5610708249567082, -0.10308313162103591, 0.14441421811976862,
            -0.8085282517492416,
          ],
          [
            -0.6526968604538277, 0.08786973545253006, -0.024127603022017358,
            -0.7521193886252441,
          ],
          [
            -0.32664437613395736, 0.13590556528759443, 0.07445155150693741,
            -0.9323572812328205,
          ],
        ],
        knots: [
          [12.4, 0],
          [12.525, 1],
          [12.55, 1],
          [12.76, 0],
        ],
      },
      {
        hi: 0,
        fi: 2,
        previous: `p00297`,
        previousEnd: 66.26495000000001,
        next: `p00330`,
        nextTime: 72.554064,
        knots: [
          [70.878428, 0, 0, 0, 0],
          [70.968428, 20, 20, 0, 0],
          [71.48839600000001, 20, 20, 0, 0],
          [71.568396, 0, 0, 0, 0],
        ],
      },
      {
        hi: 0,
        fi: 3,
        previous: `p00303`,
        previousEnd: 68.264293,
        next: `p00332`,
        nextTime: 72.894973,
        knots: [
          [70.878428, 0, 0, 0, 0],
          [70.968428, 20, 20, 0, 0],
          [71.48839600000001, 20, 20, 0, 0],
          [71.568396, 0, 0, 0, 0],
        ],
      },
      {
        hi: 0,
        fi: 4,
        previous: `p00315`,
        previousEnd: 70.123345,
        next: `p00352`,
        nextTime: 76.664321,
        knots: [
          [70.878428, 0, 0, 0, 0],
          [70.968428, 20, 20, 0, 0],
          [71.48839600000001, 20, 20, 0, 0],
          [71.568396, 0, 0, 0, 0],
        ],
      },
      {
        hi: 0,
        fi: 1,
        previous: `p00322`,
        previousEnd: 71.448396,
        next: `p00325`,
        nextTime: 71.531337,
        knots: [
          [71.448396, 0, 0, 0, 0],
          [71.46139600000001, 4, -4, 16, 0],
          [71.475396, 4, -4, 16, 0],
          [71.508396, 0, 0, 0, 0],
        ],
      },
    ],
  },
  Dt = (e) => ((e = Math.min(1, Math.max(0, e))), e * e * (3 - 2 * e));
function Ot(e, t, n, r, i) {
  return (
    e.hi === t &&
    e.fi === n &&
    e.previous === r?.id &&
    e.next === i?.id &&
    Math.abs(e.previousEnd - (r ? r.time + r.duration : 0)) < 1e-7 &&
    (!i || Math.abs(e.nextTime - i.time) < 1e-7)
  );
}
function kt(e, t, n) {
  if (!n) return;
  let r = e.parent.getWorldQuaternion(new W()),
    i = new W().setFromAxisAngle(t, (n * Math.PI) / 180);
  (e.quaternion.premultiply(r.clone().invert().multiply(i).multiply(r)),
    e.updateWorldMatrix(!1, !0));
}
function At(e, t, n, r, i, a, o, s) {
  let c = t === `L` ? 0 : 1;
  if (n === 1) {
    let t = Et.supportedIndexGaps.find((e) => Ot(e, c, n, o, s));
    if (t) {
      let n =
        Dt((a.y - yt - 0.005) / 0.004) *
        Dt((a.z - 0.244) / 0.008) *
        Dt((e - t.previousEnd) / 0.25) *
        Dt((t.nextTime - e) / 0.32) *
        (t.earlyRelease
          ? 1 -
            Dt(
              (e - t.earlyRelease[0]) / (t.earlyRelease[1] - t.earlyRelease[0]),
            )
          : 1);
      kt(r[0], new A(1, 0, 0), 5 * n);
    }
  }
  for (let t of Et.curves) {
    if (
      !Ot(t, c, n, o, s) ||
      e <= t.knots[0][0] ||
      e >= t.knots[t.knots.length - 1][0]
    )
      continue;
    let a = 1;
    for (; t.knots[a][0] < e; ) a++;
    let l = t.knots[a - 1],
      u = t.knots[a],
      d = u[0] - l[0],
      f = (e - l[0]) / d,
      p = Dt(f);
    if (t.mode === `blend-neutral`) {
      let e = l[1] + (u[1] - l[1]) * p;
      if (!t.neutralQuaternions || t.neutralQuaternions.length !== 3)
        throw Error(`Missing bound neutral joint triple`);
      r.forEach((n, r) => {
        (n.quaternion.slerp(new W().fromArray(t.neutralQuaternions[r]), e),
          n.updateWorldMatrix(!1, !0));
      });
      continue;
    }
    let m = t.knots[Math.max(0, a - 2)],
      h = t.knots[Math.min(t.knots.length - 1, a + 1)],
      g = l.slice(1).map((e, n) => {
        if (t.mode !== `hermite-controls`) return e + (u[n + 1] - e) * p;
        let r =
            a === 1
              ? (t.firstTangent?.[n] ?? 0)
              : (u[n + 1] - m[n + 1]) / (u[0] - m[0]),
          i =
            a === t.knots.length - 1
              ? (t.lastTangent?.[n] ?? 0)
              : (h[n + 1] - l[n + 1]) / (h[0] - l[0]);
        return (
          (2 * f ** 3 - 3 * f * f + 1) * e +
          (f ** 3 - 2 * f * f + f) * d * r +
          (-2 * f ** 3 + 3 * f * f) * u[n + 1] +
          (f ** 3 - f * f) * d * i
        );
      }),
      _ = i.getWorldQuaternion(new W()),
      v = new A(-1, 0, 0).applyQuaternion(_),
      y = new A(0, 0, -1).applyQuaternion(_);
    (kt(r[0], v, g[0]),
      kt(r[0], y, g[1]),
      kt(r[1], v, g[2]),
      kt(r[2], v, g[3]));
  }
}
function jt(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    Mt(e, r, function (e, r) {
      (t.set(r, e), n.set(e, r));
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return;
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones;
      ((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e);
        })),
        r.bind(r.skeleton, r.bindMatrix));
    }),
    r
  );
}
function Mt(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    Mt(e.children[r], t.children[r], n);
}
var Nt = class extends fe {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new Rt(e);
      }),
      this.register(function (e) {
        return new zt(e);
      }),
      this.register(function (e) {
        return new Jt(e);
      }),
      this.register(function (e) {
        return new Yt(e);
      }),
      this.register(function (e) {
        return new Xt(e);
      }),
      this.register(function (e) {
        return new Vt(e);
      }),
      this.register(function (e) {
        return new Ht(e);
      }),
      this.register(function (e) {
        return new Ut(e);
      }),
      this.register(function (e) {
        return new Wt(e);
      }),
      this.register(function (e) {
        return new Lt(e);
      }),
      this.register(function (e) {
        return new Gt(e);
      }),
      this.register(function (e) {
        return new Bt(e);
      }),
      this.register(function (e) {
        return new qt(e);
      }),
      this.register(function (e) {
        return new Kt(e);
      }),
      this.register(function (e) {
        return new Ft(e);
      }),
      this.register(function (e) {
        return new Zt(e, X.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Zt(e, X.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Qt(e);
      }));
  }
  load(e, t, n, r) {
    let i = this,
      a;
    if (this.resourcePath !== ``) a = this.resourcePath;
    else if (this.path !== ``) {
      let t = D.extractUrlBase(e);
      a = D.resolveURL(t, this.path);
    } else a = D.extractUrlBase(e);
    this.manager.itemStart(e);
    let o = function (t) {
        (r ? r(t) : console.error(t),
          i.manager.itemError(e),
          i.manager.itemEnd(e));
      },
      s = new T(this.manager);
    (s.setPath(this.path),
      s.setResponseType(`arraybuffer`),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (n) {
          try {
            i.parse(
              n,
              a,
              function (n) {
                (t(n), i.manager.itemEnd(e));
              },
              o,
            );
          } catch (e) {
            o(e);
          }
        },
        n,
        o,
      ));
  }
  setDRACOLoader(e) {
    return ((this.dracoLoader = e), this);
  }
  setKTX2Loader(e) {
    return ((this.ktx2Loader = e), this);
  }
  setMeshoptDecoder(e) {
    return ((this.meshoptDecoder = e), this);
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, r) {
    let i,
      a = {},
      o = {},
      s = new TextDecoder();
    if (typeof e == `string`) i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (s.decode(new Uint8Array(e, 0, 4)) === $t) {
        try {
          a[X.KHR_BINARY_GLTF] = new nn(e);
        } catch (e) {
          r && r(e);
          return;
        }
        i = JSON.parse(a[X.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(s.decode(e));
    else i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      r &&
        r(
          Error(
            `THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`,
          ),
        );
      return;
    }
    let c = new On(i, {
      path: t || this.resourcePath || ``,
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let e = 0; e < this.pluginCallbacks.length; e++) {
      let t = this.pluginCallbacks[e](c);
      (t.name ||
        console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),
        (o[t.name] = t),
        (a[t.name] = !0));
    }
    if (i.extensionsUsed)
      for (let e = 0; e < i.extensionsUsed.length; ++e) {
        let t = i.extensionsUsed[e],
          n = i.extensionsRequired || [];
        switch (t) {
          case X.KHR_MATERIALS_UNLIT:
            a[t] = new It();
            break;
          case X.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new rn(i, this.dracoLoader);
            break;
          case X.KHR_TEXTURE_TRANSFORM:
            a[t] = new an();
            break;
          case X.KHR_MESH_QUANTIZATION:
            a[t] = new on();
            break;
          default:
            n.indexOf(t) >= 0 &&
              o[t] === void 0 &&
              console.warn(`THREE.GLTFLoader: Unknown extension "` + t + `".`);
        }
      }
    (c.setExtensions(a), c.setPlugins(o), c.parse(n, r));
  }
  parseAsync(e, t) {
    let n = this;
    return new Promise(function (r, i) {
      n.parse(e, t, r, i);
    });
  }
};
function Pt() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, n) {
      e[t] = n;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    },
  };
}
function Y(e, t, n) {
  let r = e.json.materials[t];
  return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
var X = {
    KHR_BINARY_GLTF: `KHR_binary_glTF`,
    KHR_DRACO_MESH_COMPRESSION: `KHR_draco_mesh_compression`,
    KHR_LIGHTS_PUNCTUAL: `KHR_lights_punctual`,
    KHR_MATERIALS_CLEARCOAT: `KHR_materials_clearcoat`,
    KHR_MATERIALS_DISPERSION: `KHR_materials_dispersion`,
    KHR_MATERIALS_IOR: `KHR_materials_ior`,
    KHR_MATERIALS_SHEEN: `KHR_materials_sheen`,
    KHR_MATERIALS_SPECULAR: `KHR_materials_specular`,
    KHR_MATERIALS_TRANSMISSION: `KHR_materials_transmission`,
    KHR_MATERIALS_IRIDESCENCE: `KHR_materials_iridescence`,
    KHR_MATERIALS_ANISOTROPY: `KHR_materials_anisotropy`,
    KHR_MATERIALS_UNLIT: `KHR_materials_unlit`,
    KHR_MATERIALS_VOLUME: `KHR_materials_volume`,
    KHR_TEXTURE_BASISU: `KHR_texture_basisu`,
    KHR_TEXTURE_TRANSFORM: `KHR_texture_transform`,
    KHR_MESH_QUANTIZATION: `KHR_mesh_quantization`,
    KHR_MATERIALS_EMISSIVE_STRENGTH: `KHR_materials_emissive_strength`,
    EXT_MATERIALS_BUMP: `EXT_materials_bump`,
    EXT_TEXTURE_WEBP: `EXT_texture_webp`,
    EXT_TEXTURE_AVIF: `EXT_texture_avif`,
    EXT_MESHOPT_COMPRESSION: `EXT_meshopt_compression`,
    KHR_MESHOPT_COMPRESSION: `KHR_meshopt_compression`,
    EXT_MESH_GPU_INSTANCING: `EXT_mesh_gpu_instancing`,
  },
  Ft = class {
    constructor(e) {
      ((this.parser = e),
        (this.name = X.KHR_LIGHTS_PUNCTUAL),
        (this.cache = { refs: {}, uses: {} }));
    }
    _markDefs() {
      let e = this.parser,
        t = this.parser.json.nodes || [];
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n];
        r.extensions &&
          r.extensions[this.name] &&
          r.extensions[this.name].light !== void 0 &&
          e._addNodeRef(this.cache, r.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      let t = this.parser,
        n = `light:` + e,
        r = t.cache.get(n);
      if (r) return r;
      let i = t.json,
        a = (((i.extensions && i.extensions[this.name]) || {}).lights || [])[e],
        o,
        s = new U(16777215);
      a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], j);
      let c = a.range === void 0 ? 0 : a.range;
      switch (a.type) {
        case `directional`:
          ((o = new Ke(s)), o.target.position.set(0, 0, -1), o.add(o.target));
          break;
        case `point`:
          ((o = new me(s)), (o.distance = c));
          break;
        case `spot`:
          ((o = new te(s)),
            (o.distance = c),
            (a.spot = a.spot || {}),
            (a.spot.innerConeAngle =
              a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle),
            (a.spot.outerConeAngle =
              a.spot.outerConeAngle === void 0
                ? Math.PI / 4
                : a.spot.outerConeAngle),
            (o.angle = a.spot.outerConeAngle),
            (o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
            o.target.position.set(0, 0, -1),
            o.add(o.target));
          break;
        default:
          throw Error(`THREE.GLTFLoader: Unexpected light type: ` + a.type);
      }
      return (
        o.position.set(0, 0, 0),
        bn(o, a),
        a.intensity !== void 0 && (o.intensity = a.intensity),
        (o.name = t.createUniqueName(a.name || `light_` + e)),
        (r = Promise.resolve(o)),
        t.cache.add(n, r),
        r
      );
    }
    getDependency(e, t) {
      if (e === `light`) return this._loadLight(t);
    }
    createNodeAttachment(e) {
      let t = this,
        n = this.parser,
        r = n.json.nodes[e],
        i = ((r.extensions && r.extensions[this.name]) || {}).light;
      return i === void 0
        ? null
        : this._loadLight(i).then(function (e) {
            return n._getNodeRef(t.cache, i, e);
          });
    }
  },
  It = class {
    constructor() {
      this.name = X.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return ze;
    }
    extendParams(e, t, n) {
      let r = [];
      ((e.color = new U(1, 1, 1)), (e.opacity = 1));
      let i = t.pbrMetallicRoughness;
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          let t = i.baseColorFactor;
          (e.color.setRGB(t[0], t[1], t[2], j), (e.opacity = t[3]));
        }
        i.baseColorTexture !== void 0 &&
          r.push(n.assignTexture(e, `map`, i.baseColorTexture, k));
      }
      return Promise.all(r);
    }
  },
  Lt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_EMISSIVE_STRENGTH));
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      return (
        n === null ||
          (n.emissiveStrength !== void 0 &&
            (t.emissiveIntensity = n.emissiveStrength)),
        Promise.resolve()
      );
    }
  },
  Rt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_CLEARCOAT));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      if (
        (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor),
        n.clearcoatTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `clearcoatMap`, n.clearcoatTexture),
          ),
        n.clearcoatRoughnessFactor !== void 0 &&
          (t.clearcoatRoughness = n.clearcoatRoughnessFactor),
        n.clearcoatRoughnessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `clearcoatRoughnessMap`,
              n.clearcoatRoughnessTexture,
            ),
          ),
        n.clearcoatNormalTexture !== void 0 &&
          (r.push(
            this.parser.assignTexture(
              t,
              `clearcoatNormalMap`,
              n.clearcoatNormalTexture,
            ),
          ),
          n.clearcoatNormalTexture.scale !== void 0))
      ) {
        let e = n.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new i(e, e);
      }
      return Promise.all(r);
    }
  },
  zt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_DISPERSION));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      return (
        n === null ||
          (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion),
        Promise.resolve()
      );
    }
  },
  Bt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_IRIDESCENCE));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor),
        n.iridescenceTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `iridescenceMap`,
              n.iridescenceTexture,
            ),
          ),
        n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor),
        t.iridescenceThicknessRange === void 0 &&
          (t.iridescenceThicknessRange = [100, 400]),
        n.iridescenceThicknessMinimum !== void 0 &&
          (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum),
        n.iridescenceThicknessMaximum !== void 0 &&
          (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum),
        n.iridescenceThicknessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `iridescenceThicknessMap`,
              n.iridescenceThicknessTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Vt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_SHEEN));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      if (
        ((t.sheenColor = new U(0, 0, 0)),
        (t.sheenRoughness = 0),
        (t.sheen = 1),
        n.sheenColorFactor !== void 0)
      ) {
        let e = n.sheenColorFactor;
        t.sheenColor.setRGB(e[0], e[1], e[2], j);
      }
      return (
        n.sheenRoughnessFactor !== void 0 &&
          (t.sheenRoughness = n.sheenRoughnessFactor),
        n.sheenColorTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `sheenColorMap`,
              n.sheenColorTexture,
              k,
            ),
          ),
        n.sheenRoughnessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `sheenRoughnessMap`,
              n.sheenRoughnessTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Ht = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_TRANSMISSION));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.transmissionFactor !== void 0 &&
          (t.transmission = n.transmissionFactor),
        n.transmissionTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `transmissionMap`,
              n.transmissionTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Ut = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_VOLUME));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      ((t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor),
        n.thicknessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `thicknessMap`, n.thicknessTexture),
          ),
        (t.attenuationDistance = n.attenuationDistance || 1 / 0));
      let i = n.attenuationColor || [1, 1, 1];
      return (
        (t.attenuationColor = new U().setRGB(i[0], i[1], i[2], j)),
        Promise.all(r)
      );
    }
  },
  Wt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_IOR));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      return (
        n === null || (t.ior = n.ior === void 0 ? 1.5 : n.ior),
        Promise.resolve()
      );
    }
  },
  Gt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_SPECULAR));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      ((t.specularIntensity =
        n.specularFactor === void 0 ? 1 : n.specularFactor),
        n.specularTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `specularIntensityMap`,
              n.specularTexture,
            ),
          ));
      let i = n.specularColorFactor || [1, 1, 1];
      return (
        (t.specularColor = new U().setRGB(i[0], i[1], i[2], j)),
        n.specularColorTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `specularColorMap`,
              n.specularColorTexture,
              k,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Kt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.EXT_MATERIALS_BUMP));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        (t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor),
        n.bumpTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `bumpMap`, n.bumpTexture)),
        Promise.all(r)
      );
    }
  },
  qt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_MATERIALS_ANISOTROPY));
    }
    getMaterialType(e) {
      return Y(this.parser, e, this.name) === null ? null : L;
    }
    extendMaterialParams(e, t) {
      let n = Y(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.anisotropyStrength !== void 0 &&
          (t.anisotropy = n.anisotropyStrength),
        n.anisotropyRotation !== void 0 &&
          (t.anisotropyRotation = n.anisotropyRotation),
        n.anisotropyTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `anisotropyMap`, n.anisotropyTexture),
          ),
        Promise.all(r)
      );
    }
  },
  Jt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.KHR_TEXTURE_BASISU));
    }
    loadTexture(e) {
      let t = this.parser,
        n = t.json,
        r = n.textures[e];
      if (!r.extensions || !r.extensions[this.name]) return null;
      let i = r.extensions[this.name],
        a = t.options.ktx2Loader;
      if (!a) {
        if (
          n.extensionsRequired &&
          n.extensionsRequired.indexOf(this.name) >= 0
        )
          throw Error(
            `THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`,
          );
        return null;
      }
      return t.loadTextureImage(e, i.source, a);
    }
  },
  Yt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.EXT_TEXTURE_WEBP));
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader;
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri);
        e !== null && (s = e);
      }
      return n.loadTextureImage(e, a.source, s);
    }
  },
  Xt = class {
    constructor(e) {
      ((this.parser = e), (this.name = X.EXT_TEXTURE_AVIF));
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader;
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri);
        e !== null && (s = e);
      }
      return n.loadTextureImage(e, a.source, s);
    }
  },
  Zt = class {
    constructor(e, t) {
      ((this.name = t), (this.parser = e));
    }
    loadBufferView(e) {
      let t = this.parser.json,
        n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        let e = n.extensions[this.name],
          r = this.parser.getDependency(`buffer`, e.buffer),
          i = this.parser.options.meshoptDecoder;
        if (!i || !i.supported) {
          if (
            t.extensionsRequired &&
            t.extensionsRequired.indexOf(this.name) >= 0
          )
            throw Error(
              `THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`,
            );
          return null;
        }
        return r.then(function (t) {
          let n = e.byteOffset || 0,
            r = e.byteLength || 0,
            a = e.count,
            o = e.byteStride,
            s = new Uint8Array(t, n, r);
          return i.decodeGltfBufferAsync
            ? i
                .decodeGltfBufferAsync(a, o, s, e.mode, e.filter)
                .then(function (e) {
                  return e.buffer;
                })
            : i.ready.then(function () {
                let t = new ArrayBuffer(a * o);
                return (
                  i.decodeGltfBuffer(
                    new Uint8Array(t),
                    a,
                    o,
                    s,
                    e.mode,
                    e.filter,
                  ),
                  t
                );
              });
        });
      } else return null;
    }
  },
  Qt = class {
    constructor(e) {
      ((this.name = X.EXT_MESH_GPU_INSTANCING), (this.parser = e));
    }
    createNodeMesh(e) {
      let t = this.parser.json,
        n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
        return null;
      let r = t.meshes[n.mesh];
      for (let e of r.primitives)
        if (
          e.mode !== Z.TRIANGLES &&
          e.mode !== Z.TRIANGLE_STRIP &&
          e.mode !== Z.TRIANGLE_FAN &&
          e.mode !== void 0
        )
          return null;
      let i = n.extensions[this.name].attributes,
        a = [],
        o = {};
      for (let e in i)
        a.push(
          this.parser
            .getDependency(`accessor`, i[e])
            .then((t) => ((o[e] = t), o[e])),
        );
      return a.length < 1
        ? null
        : (a.push(this.parser.createNodeMesh(e)),
          Promise.all(a).then((e) => {
            let t = e.pop(),
              n = t.isGroup ? t.children : [t],
              r = e[0].count,
              i = [];
            for (let e of n) {
              let t = new H(),
                n = new A(),
                a = new W(),
                s = new A(1, 1, 1),
                c = new y(e.geometry, e.material, r);
              for (let e = 0; e < r; e++)
                (o.TRANSLATION && n.fromBufferAttribute(o.TRANSLATION, e),
                  o.ROTATION && a.fromBufferAttribute(o.ROTATION, e),
                  o.SCALE && s.fromBufferAttribute(o.SCALE, e),
                  c.setMatrixAt(e, t.compose(n, a, s)));
              for (let t in o)
                if (t === `_COLOR_0`) {
                  let e = o[t];
                  c.instanceColor = new h(e.array, e.itemSize, e.normalized);
                } else
                  t !== `TRANSLATION` &&
                    t !== `ROTATION` &&
                    t !== `SCALE` &&
                    e.geometry.setAttribute(t, o[t]);
              (_e.prototype.copy.call(c, e),
                this.parser.assignFinalMaterial(c),
                i.push(c));
            }
            return t.isGroup ? (t.clear(), t.add(...i), t) : i[0];
          }));
    }
  },
  $t = `glTF`,
  en = 12,
  tn = { JSON: 1313821514, BIN: 5130562 },
  nn = class {
    constructor(e) {
      ((this.name = X.KHR_BINARY_GLTF),
        (this.content = null),
        (this.body = null));
      let t = new DataView(e, 0, en),
        n = new TextDecoder();
      if (
        ((this.header = {
          magic: n.decode(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== $t)
      )
        throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);
      if (this.header.version < 2)
        throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);
      let r = this.header.length - en,
        i = new DataView(e, en),
        a = 0;
      for (; a < r; ) {
        let t = i.getUint32(a, !0);
        a += 4;
        let r = i.getUint32(a, !0);
        if (((a += 4), r === tn.JSON)) {
          let r = new Uint8Array(e, en + a, t);
          this.content = n.decode(r);
        } else if (r === tn.BIN) {
          let n = en + a;
          this.body = e.slice(n, n + t);
        }
        a += t;
      }
      if (this.content === null)
        throw Error(`THREE.GLTFLoader: JSON content not found.`);
    }
  },
  rn = class {
    constructor(e, t) {
      if (!t)
        throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);
      ((this.name = X.KHR_DRACO_MESH_COMPRESSION),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload());
    }
    decodePrimitive(e, t) {
      let n = this.json,
        r = this.dracoLoader,
        i = e.extensions[this.name].bufferView,
        a = e.extensions[this.name].attributes,
        o = {},
        s = {},
        c = {};
      for (let e in a) {
        let t = mn[e] || e.toLowerCase();
        o[t] = a[e];
      }
      for (let t in e.attributes) {
        let r = mn[t] || t.toLowerCase();
        if (a[t] !== void 0) {
          let i = n.accessors[e.attributes[t]];
          ((c[r] = un[i.componentType].name), (s[r] = i.normalized === !0));
        }
      }
      return t.getDependency(`bufferView`, i).then(function (e) {
        return new Promise(function (t, n) {
          r.decodeDracoFile(
            e,
            function (e) {
              for (let t in e.attributes) {
                let n = e.attributes[t],
                  r = s[t];
                r !== void 0 && (n.normalized = r);
              }
              t(e);
            },
            o,
            c,
            j,
            n,
          );
        });
      });
    }
  },
  an = class {
    constructor() {
      this.name = X.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0
        ? e
        : ((e = e.clone()),
          t.texCoord !== void 0 && (e.channel = t.texCoord),
          t.offset !== void 0 && e.offset.fromArray(t.offset),
          t.rotation !== void 0 && (e.rotation = t.rotation),
          t.scale !== void 0 && e.repeat.fromArray(t.scale),
          (e.needsUpdate = !0),
          e);
    }
  },
  on = class {
    constructor() {
      this.name = X.KHR_MESH_QUANTIZATION;
    }
  },
  sn = class extends r {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r * 3 + r;
      for (let e = 0; e !== r; e++) t[e] = n[i + e];
      return t;
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = o * 2,
        c = o * 3,
        l = r - t,
        u = (n - t) / l,
        d = u * u,
        f = d * u,
        p = e * c,
        m = p - c,
        h = -2 * f + 3 * d,
        g = f - d,
        _ = 1 - h,
        v = g - d + u;
      for (let e = 0; e !== o; e++) {
        let t = a[m + e + o],
          n = a[m + e + s] * l,
          r = a[p + e + o],
          c = a[p + e] * l;
        i[e] = _ * t + v * n + h * r + g * c;
      }
      return i;
    }
  },
  cn = new W(),
  ln = class extends sn {
    interpolate_(e, t, n, r) {
      let i = super.interpolate_(e, t, n, r);
      return (cn.fromArray(i).normalize().toArray(i), i);
    }
  },
  Z = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  un = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  dn = { 9728: Ve, 9729: Re, 9984: Ae, 9985: de, 9986: I, 9987: _ },
  fn = { 33071: P, 33648: Fe, 10497: qe },
  pn = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  mn = {
    POSITION: `position`,
    NORMAL: `normal`,
    TANGENT: `tangent`,
    TEXCOORD_0: `uv`,
    TEXCOORD_1: `uv1`,
    TEXCOORD_2: `uv2`,
    TEXCOORD_3: `uv3`,
    COLOR_0: `color`,
    WEIGHTS_0: `skinWeight`,
    JOINTS_0: `skinIndex`,
  },
  hn = {
    scale: `scale`,
    translation: `position`,
    rotation: `quaternion`,
    weights: `morphTargetInfluences`,
  },
  gn = { CUBICSPLINE: void 0, LINEAR: p, STEP: ce },
  _n = { OPAQUE: `OPAQUE`, MASK: `MASK`, BLEND: `BLEND` };
function vn(e) {
  return (
    e.DefaultMaterial === void 0 &&
      (e.DefaultMaterial = new N({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: 0,
      })),
    e.DefaultMaterial
  );
}
function yn(e, t, n) {
  for (let r in n.extensions)
    e[r] === void 0 &&
      ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
      (t.userData.gltfExtensions[r] = n.extensions[r]));
}
function bn(e, t) {
  t.extras !== void 0 &&
    (typeof t.extras == `object`
      ? Object.assign(e.userData, t.extras)
      : console.warn(
          `THREE.GLTFLoader: Ignoring primitive type .extras, ` + t.extras,
        ));
}
function xn(e, t, n) {
  let r = !1,
    i = !1,
    a = !1;
  for (let e = 0, n = t.length; e < n; e++) {
    let n = t[e];
    if (
      (n.POSITION !== void 0 && (r = !0),
      n.NORMAL !== void 0 && (i = !0),
      n.COLOR_0 !== void 0 && (a = !0),
      r && i && a)
    )
      break;
  }
  if (!r && !i && !a) return Promise.resolve(e);
  let o = [],
    s = [],
    c = [];
  for (let l = 0, u = t.length; l < u; l++) {
    let u = t[l];
    if (r) {
      let t =
        u.POSITION === void 0
          ? e.attributes.position
          : n.getDependency(`accessor`, u.POSITION);
      o.push(t);
    }
    if (i) {
      let t =
        u.NORMAL === void 0
          ? e.attributes.normal
          : n.getDependency(`accessor`, u.NORMAL);
      s.push(t);
    }
    if (a) {
      let t =
        u.COLOR_0 === void 0
          ? e.attributes.color
          : n.getDependency(`accessor`, u.COLOR_0);
      c.push(t);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(s), Promise.all(c)]).then(
    function (t) {
      let n = t[0],
        o = t[1],
        s = t[2];
      return (
        r && (e.morphAttributes.position = n),
        i && (e.morphAttributes.normal = o),
        a && (e.morphAttributes.color = s),
        (e.morphTargetsRelative = !0),
        e
      );
    },
  );
}
function Sn(e, t) {
  if ((e.updateMorphTargets(), t.weights !== void 0))
    for (let n = 0, r = t.weights.length; n < r; n++)
      e.morphTargetInfluences[n] = t.weights[n];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    let n = t.extras.targetNames;
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {};
      for (let t = 0, r = n.length; t < r; t++)
        e.morphTargetDictionary[n[t]] = t;
    } else
      console.warn(
        `THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`,
      );
  }
}
function Cn(e) {
  let t,
    n = e.extensions && e.extensions[X.KHR_DRACO_MESH_COMPRESSION];
  if (
    ((t = n
      ? `draco:` + n.bufferView + `:` + n.indices + `:` + wn(n.attributes)
      : e.indices + `:` + wn(e.attributes) + `:` + e.mode),
    e.targets !== void 0)
  )
    for (let n = 0, r = e.targets.length; n < r; n++)
      t += `:` + wn(e.targets[n]);
  return t;
}
function wn(e) {
  let t = ``,
    n = Object.keys(e).sort();
  for (let r = 0, i = n.length; r < i; r++) t += n[r] + `:` + e[n[r]] + `;`;
  return t;
}
function Tn(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw Error(
        `THREE.GLTFLoader: Unsupported normalized accessor component type.`,
      );
  }
}
function En(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0
    ? `image/jpeg`
    : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0
      ? `image/webp`
      : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0
        ? `image/ktx2`
        : `image/png`;
}
var Dn = new H(),
  On = class {
    constructor(e = {}, t = {}) {
      ((this.json = e),
        (this.extensions = {}),
        (this.plugins = {}),
        (this.options = t),
        (this.cache = new Pt()),
        (this.associations = new Map()),
        (this.primitiveCache = {}),
        (this.nodeCache = {}),
        (this.meshCache = { refs: {}, uses: {} }),
        (this.cameraCache = { refs: {}, uses: {} }),
        (this.lightCache = { refs: {}, uses: {} }),
        (this.sourceCache = {}),
        (this.textureCache = {}),
        (this.nodeNamesUsed = {}));
      let n = !1,
        r = -1,
        i = !1,
        a = -1;
      if (typeof navigator < `u` && navigator.userAgent !== void 0) {
        let e = navigator.userAgent;
        n = /^((?!chrome|android).)*safari/i.test(e) === !0;
        let t = e.match(/Version\/(\d+)/);
        ((r = n && t ? parseInt(t[1], 10) : -1),
          (i = e.indexOf(`Firefox`) > -1),
          (a = i ? e.match(/Firefox\/([0-9]+)\./)[1] : -1));
      }
      (typeof createImageBitmap > `u` || (n && r < 17) || (i && a < 98)
        ? (this.textureLoader = new g(this.options.manager))
        : (this.textureLoader = new u(this.options.manager)),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        (this.fileLoader = new T(this.options.manager)),
        this.fileLoader.setResponseType(`arraybuffer`),
        this.options.crossOrigin === `use-credentials` &&
          this.fileLoader.setWithCredentials(!0));
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      let n = this,
        r = this.json,
        i = this.extensions;
      (this.cache.removeAll(),
        (this.nodeCache = {}),
        this._invokeAll(function (e) {
          return e._markDefs && e._markDefs();
        }),
        Promise.all(
          this._invokeAll(function (e) {
            return e.beforeRoot && e.beforeRoot();
          }),
        )
          .then(function () {
            return Promise.all([
              n.getDependencies(`scene`),
              n.getDependencies(`animation`),
              n.getDependencies(`camera`),
            ]);
          })
          .then(function (t) {
            let a = {
              scene: t[0][r.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: r.asset,
              parser: n,
              userData: {},
            };
            return (
              yn(i, a, r),
              bn(a, r),
              Promise.all(
                n._invokeAll(function (e) {
                  return e.afterRoot && e.afterRoot(a);
                }),
              ).then(function () {
                for (let e of a.scenes) e.updateMatrixWorld();
                e(a);
              })
            );
          })
          .catch(t));
    }
    _markDefs() {
      let e = this.json.nodes || [],
        t = this.json.skins || [],
        n = this.json.meshes || [];
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n].joints;
        for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
      }
      for (let t = 0, r = e.length; t < r; t++) {
        let r = e[t];
        (r.mesh !== void 0 &&
          (this._addNodeRef(this.meshCache, r.mesh),
          r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)),
          r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera));
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 &&
        (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      let r = n.clone(),
        i = (e, t) => {
          let n = this.associations.get(e);
          n != null && this.associations.set(t, n);
          for (let [n, r] of e.children.entries()) i(r, t.children[n]);
        };
      return (i(n, r), (r.name += `_instance_` + e.uses[t]++), r);
    }
    _invokeOne(e) {
      let t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        let r = e(t[n]);
        if (r) return r;
      }
      return null;
    }
    _invokeAll(e) {
      let t = Object.values(this.plugins);
      t.unshift(this);
      let n = [];
      for (let r = 0; r < t.length; r++) {
        let i = e(t[r]);
        i && n.push(i);
      }
      return n;
    }
    getDependency(e, t) {
      let n = e + `:` + t,
        r = this.cache.get(n);
      if (!r) {
        switch (e) {
          case `scene`:
            r = this.loadScene(t);
            break;
          case `node`:
            r = this._invokeOne(function (e) {
              return e.loadNode && e.loadNode(t);
            });
            break;
          case `mesh`:
            r = this._invokeOne(function (e) {
              return e.loadMesh && e.loadMesh(t);
            });
            break;
          case `accessor`:
            r = this.loadAccessor(t);
            break;
          case `bufferView`:
            r = this._invokeOne(function (e) {
              return e.loadBufferView && e.loadBufferView(t);
            });
            break;
          case `buffer`:
            r = this.loadBuffer(t);
            break;
          case `material`:
            r = this._invokeOne(function (e) {
              return e.loadMaterial && e.loadMaterial(t);
            });
            break;
          case `texture`:
            r = this._invokeOne(function (e) {
              return e.loadTexture && e.loadTexture(t);
            });
            break;
          case `skin`:
            r = this.loadSkin(t);
            break;
          case `animation`:
            r = this._invokeOne(function (e) {
              return e.loadAnimation && e.loadAnimation(t);
            });
            break;
          case `camera`:
            r = this.loadCamera(t);
            break;
          default:
            if (
              ((r = this._invokeOne(function (n) {
                return n != this && n.getDependency && n.getDependency(e, t);
              })),
              !r)
            )
              throw Error(`Unknown type: ` + e);
            break;
        }
        this.cache.add(n, r);
      }
      return r;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        let n = this,
          r = this.json[e + (e === `mesh` ? `es` : `s`)] || [];
        ((t = Promise.all(
          r.map(function (t, r) {
            return n.getDependency(e, r);
          }),
        )),
          this.cache.add(e, t));
      }
      return t;
    }
    loadBuffer(e) {
      let t = this.json.buffers[e],
        n = this.fileLoader;
      if (t.type && t.type !== `arraybuffer`)
        throw Error(
          `THREE.GLTFLoader: ` + t.type + ` buffer type is not supported.`,
        );
      if (t.uri === void 0 && e === 0)
        return Promise.resolve(this.extensions[X.KHR_BINARY_GLTF].body);
      let r = this.options;
      return new Promise(function (e, i) {
        n.load(D.resolveURL(t.uri, r.path), e, void 0, function () {
          i(Error(`THREE.GLTFLoader: Failed to load buffer "` + t.uri + `".`));
        });
      });
    }
    loadBufferView(e) {
      let t = this.json.bufferViews[e];
      return this.getDependency(`buffer`, t.buffer).then(function (e) {
        let n = t.byteLength || 0,
          r = t.byteOffset || 0;
        return e.slice(r, r + n);
      });
    }
    loadAccessor(e) {
      let t = this,
        n = this.json,
        r = this.json.accessors[e];
      if (r.bufferView === void 0 && r.sparse === void 0) {
        let e = pn[r.type],
          t = un[r.componentType],
          n = r.normalized === !0,
          i = new t(r.count * e);
        return Promise.resolve(new xe(i, e, n));
      }
      let i = [];
      return (
        r.bufferView === void 0
          ? i.push(null)
          : i.push(this.getDependency(`bufferView`, r.bufferView)),
        r.sparse !== void 0 &&
          (i.push(
            this.getDependency(`bufferView`, r.sparse.indices.bufferView),
          ),
          i.push(this.getDependency(`bufferView`, r.sparse.values.bufferView))),
        Promise.all(i).then(function (e) {
          let i = e[0],
            a = pn[r.type],
            o = un[r.componentType],
            s = o.BYTES_PER_ELEMENT,
            c = s * a,
            l = r.byteOffset || 0,
            u =
              r.bufferView === void 0
                ? void 0
                : n.bufferViews[r.bufferView].byteStride,
            d = r.normalized === !0,
            f,
            p;
          if (u && u !== c) {
            let e = Math.floor(l / u),
              n =
                `InterleavedBuffer:` +
                r.bufferView +
                `:` +
                r.componentType +
                `:` +
                e +
                `:` +
                r.count,
              c = t.cache.get(n);
            (c ||
              ((f = new o(i, e * u, (r.count * u) / s)),
              (c = new ne(f, u / s)),
              t.cache.add(n, c)),
              (p = new Xe(c, a, (l % u) / s, d)));
          } else
            ((f = i === null ? new o(r.count * a) : new o(i, l, r.count * a)),
              (p = new xe(f, a, d)));
          if (r.sparse !== void 0) {
            let t = pn.SCALAR,
              n = un[r.sparse.indices.componentType],
              s = r.sparse.indices.byteOffset || 0,
              c = r.sparse.values.byteOffset || 0,
              l = new n(e[1], s, r.sparse.count * t),
              u = new o(e[2], c, r.sparse.count * a);
            (i !== null &&
              (p = new xe(p.array.slice(), p.itemSize, p.normalized)),
              (p.normalized = !1));
            for (let e = 0, t = l.length; e < t; e++) {
              let t = l[e];
              if (
                (p.setX(t, u[e * a]),
                a >= 2 && p.setY(t, u[e * a + 1]),
                a >= 3 && p.setZ(t, u[e * a + 2]),
                a >= 4 && p.setW(t, u[e * a + 3]),
                a >= 5)
              )
                throw Error(
                  `THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`,
                );
            }
            p.normalized = d;
          }
          return p;
        })
      );
    }
    loadTexture(e) {
      let t = this.json,
        n = this.options,
        r = t.textures[e].source,
        i = t.images[r],
        a = this.textureLoader;
      if (i.uri) {
        let e = n.manager.getHandler(i.uri);
        e !== null && (a = e);
      }
      return this.loadTextureImage(e, r, a);
    }
    loadTextureImage(e, t, n) {
      let r = this,
        i = this.json,
        a = i.textures[e],
        o = i.images[t],
        s = (o.uri || o.bufferView) + `:` + a.sampler;
      if (this.textureCache[s]) return this.textureCache[s];
      let c = this.loadImageSource(t, n)
        .then(function (t) {
          ((t.flipY = !1),
            (t.name = a.name || o.name || ``),
            t.name === `` &&
              typeof o.uri == `string` &&
              o.uri.startsWith(`data:image/`) === !1 &&
              (t.name = o.uri));
          let n = (i.samplers || {})[a.sampler] || {};
          return (
            (t.magFilter = dn[n.magFilter] || 1006),
            (t.minFilter = dn[n.minFilter] || 1008),
            (t.wrapS = fn[n.wrapS] || 1e3),
            (t.wrapT = fn[n.wrapT] || 1e3),
            (t.generateMipmaps =
              !t.isCompressedTexture &&
              t.minFilter !== 1003 &&
              t.minFilter !== 1006),
            r.associations.set(t, { textures: e }),
            t
          );
        })
        .catch(function () {
          return null;
        });
      return ((this.textureCache[s] = c), c);
    }
    loadImageSource(e, t) {
      let n = this,
        r = this.json,
        i = this.options;
      if (this.sourceCache[e] !== void 0)
        return this.sourceCache[e].then((e) => e.clone());
      let a = r.images[e],
        o = self.URL || self.webkitURL,
        s = a.uri || ``,
        c = !1;
      if (a.bufferView !== void 0)
        s = n.getDependency(`bufferView`, a.bufferView).then(function (e) {
          c = !0;
          let t = new Blob([e], { type: a.mimeType });
          return ((s = o.createObjectURL(t)), s);
        });
      else if (a.uri === void 0)
        throw Error(
          `THREE.GLTFLoader: Image ` + e + ` is missing URI and bufferView`,
        );
      let l = Promise.resolve(s)
        .then(function (e) {
          return new Promise(function (n, r) {
            let a = n;
            (t.isImageBitmapLoader === !0 &&
              (a = function (e) {
                let t = new d(e);
                ((t.needsUpdate = !0), n(t));
              }),
              t.load(D.resolveURL(e, i.path), a, void 0, r));
          });
        })
        .then(function (e) {
          return (
            c === !0 && o.revokeObjectURL(s),
            bn(e, a),
            (e.userData.mimeType = a.mimeType || En(a.uri)),
            e
          );
        })
        .catch(function (e) {
          throw (
            console.error(`THREE.GLTFLoader: Couldn't load texture`, s),
            e
          );
        });
      return ((this.sourceCache[e] = l), l);
    }
    assignTexture(e, t, n, r) {
      let i = this;
      return this.getDependency(`texture`, n.index).then(function (a) {
        if (!a) return null;
        if (
          (n.texCoord !== void 0 &&
            n.texCoord > 0 &&
            ((a = a.clone()), (a.channel = n.texCoord)),
          i.extensions[X.KHR_TEXTURE_TRANSFORM])
        ) {
          let e =
            n.extensions === void 0
              ? void 0
              : n.extensions[X.KHR_TEXTURE_TRANSFORM];
          if (e) {
            let t = i.associations.get(a);
            ((a = i.extensions[X.KHR_TEXTURE_TRANSFORM].extendTexture(a, e)),
              i.associations.set(a, t));
          }
        }
        return (r !== void 0 && (a.colorSpace = r), (e[t] = a), a);
      });
    }
    assignFinalMaterial(t) {
      let n = t.geometry,
        r = t.material,
        i = n.attributes.tangent === void 0,
        a = n.attributes.color !== void 0,
        o = n.attributes.normal === void 0;
      if (t.isPoints) {
        let t = `PointsMaterial:` + r.uuid,
          n = this.cache.get(t);
        (n ||
          ((n = new Ye()),
          e.prototype.copy.call(n, r),
          n.color.copy(r.color),
          (n.map = r.map),
          (n.sizeAttenuation = !1),
          this.cache.add(t, n)),
          (r = n));
      } else if (t.isLine) {
        let t = `LineBasicMaterial:` + r.uuid,
          n = this.cache.get(t);
        (n ||
          ((n = new le()),
          e.prototype.copy.call(n, r),
          n.color.copy(r.color),
          (n.map = r.map),
          this.cache.add(t, n)),
          (r = n));
      }
      if (i || a || o) {
        let e = `ClonedMaterial:` + r.uuid + `:`;
        (i && (e += `derivative-tangents:`),
          a && (e += `vertex-colors:`),
          o && (e += `flat-shading:`));
        let t = this.cache.get(e);
        (t ||
          ((t = r.clone()),
          a && (t.vertexColors = !0),
          o && (t.flatShading = !0),
          i &&
            (t.normalScale && (t.normalScale.y *= -1),
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
          this.cache.add(e, t),
          this.associations.set(t, this.associations.get(r))),
          (r = t));
      }
      t.material = r;
    }
    getMaterialType() {
      return N;
    }
    loadMaterial(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        a = n.materials[e],
        o,
        s = {},
        c = a.extensions || {},
        l = [];
      if (c[X.KHR_MATERIALS_UNLIT]) {
        let e = r[X.KHR_MATERIALS_UNLIT];
        ((o = e.getMaterialType()), l.push(e.extendParams(s, a, t)));
      } else {
        let n = a.pbrMetallicRoughness || {};
        if (
          ((s.color = new U(1, 1, 1)),
          (s.opacity = 1),
          Array.isArray(n.baseColorFactor))
        ) {
          let e = n.baseColorFactor;
          (s.color.setRGB(e[0], e[1], e[2], j), (s.opacity = e[3]));
        }
        (n.baseColorTexture !== void 0 &&
          l.push(t.assignTexture(s, `map`, n.baseColorTexture, k)),
          (s.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor),
          (s.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor),
          n.metallicRoughnessTexture !== void 0 &&
            (l.push(
              t.assignTexture(s, `metalnessMap`, n.metallicRoughnessTexture),
            ),
            l.push(
              t.assignTexture(s, `roughnessMap`, n.metallicRoughnessTexture),
            )),
          (o = this._invokeOne(function (t) {
            return t.getMaterialType && t.getMaterialType(e);
          })),
          l.push(
            Promise.all(
              this._invokeAll(function (t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, s);
              }),
            ),
          ));
      }
      a.doubleSided === !0 && (s.side = 2);
      let u = a.alphaMode || _n.OPAQUE;
      if (
        (u === _n.BLEND
          ? ((s.transparent = !0), (s.depthWrite = !1))
          : ((s.transparent = !1),
            u === _n.MASK &&
              (s.alphaTest = a.alphaCutoff === void 0 ? 0.5 : a.alphaCutoff)),
        a.normalTexture !== void 0 &&
          o !== ze &&
          (l.push(t.assignTexture(s, `normalMap`, a.normalTexture)),
          (s.normalScale = new i(1, 1)),
          a.normalTexture.scale !== void 0))
      ) {
        let e = a.normalTexture.scale;
        s.normalScale.set(e, e);
      }
      if (
        (a.occlusionTexture !== void 0 &&
          o !== ze &&
          (l.push(t.assignTexture(s, `aoMap`, a.occlusionTexture)),
          a.occlusionTexture.strength !== void 0 &&
            (s.aoMapIntensity = a.occlusionTexture.strength)),
        a.emissiveFactor !== void 0 && o !== ze)
      ) {
        let e = a.emissiveFactor;
        s.emissive = new U().setRGB(e[0], e[1], e[2], j);
      }
      return (
        a.emissiveTexture !== void 0 &&
          o !== ze &&
          l.push(t.assignTexture(s, `emissiveMap`, a.emissiveTexture, k)),
        Promise.all(l).then(function () {
          let n = new o(s);
          return (
            a.name && (n.name = a.name),
            bn(n, a),
            t.associations.set(n, { materials: e }),
            a.extensions && yn(r, n, a),
            n
          );
        })
      );
    }
    createUniqueName(e) {
      let t = he.sanitizeNodeName(e || ``);
      return t in this.nodeNamesUsed
        ? t + `_` + ++this.nodeNamesUsed[t]
        : ((this.nodeNamesUsed[t] = 0), t);
    }
    loadGeometries(e) {
      let t = this,
        n = this.extensions,
        r = this.primitiveCache;
      function i(e) {
        return n[X.KHR_DRACO_MESH_COMPRESSION]
          .decodePrimitive(e, t)
          .then(function (n) {
            return An(n, e, t);
          });
      }
      let a = [];
      for (let n = 0, o = e.length; n < o; n++) {
        let o = e[n],
          s = Cn(o),
          c = r[s];
        if (c) a.push(c.promise);
        else {
          let e;
          ((e =
            o.extensions && o.extensions[X.KHR_DRACO_MESH_COMPRESSION]
              ? i(o)
              : An(new pe(), o, t)),
            (r[s] = { primitive: o, promise: e }),
            a.push(e));
        }
      }
      return Promise.all(a);
    }
    loadMesh(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        i = n.meshes[e],
        a = i.primitives,
        o = [];
      for (let e = 0, t = a.length; e < t; e++) {
        let t =
          a[e].material === void 0
            ? vn(this.cache)
            : this.getDependency(`material`, a[e].material);
        o.push(t);
      }
      return (
        o.push(t.loadGeometries(a)),
        Promise.all(o).then(function (n) {
          let o = n.slice(0, n.length - 1),
            s = n[n.length - 1],
            c = [];
          for (let n = 0, l = s.length; n < l; n++) {
            let l = s[n],
              u = a[n],
              d,
              p = o[n];
            if (
              u.mode === Z.TRIANGLES ||
              u.mode === Z.TRIANGLE_STRIP ||
              u.mode === Z.TRIANGLE_FAN ||
              u.mode === void 0
            )
              ((d = i.isSkinnedMesh === !0 ? new De(l, p) : new z(l, p)),
                d.isSkinnedMesh === !0 && d.normalizeSkinWeights(),
                u.mode === Z.TRIANGLE_STRIP
                  ? (d.geometry = ht(d.geometry, 1))
                  : u.mode === Z.TRIANGLE_FAN &&
                    (d.geometry = ht(d.geometry, 2)));
            else if (u.mode === Z.LINES) d = new v(l, p);
            else if (u.mode === Z.LINE_STRIP) d = new oe(l, p);
            else if (u.mode === Z.LINE_LOOP) d = new f(l, p);
            else if (u.mode === Z.POINTS) d = new Ge(l, p);
            else
              throw Error(
                `THREE.GLTFLoader: Primitive mode unsupported: ` + u.mode,
              );
            (Object.keys(d.geometry.morphAttributes).length > 0 && Sn(d, i),
              (d.name = t.createUniqueName(i.name || `mesh_` + e)),
              bn(d, i),
              u.extensions && yn(r, d, u),
              t.assignFinalMaterial(d),
              c.push(d));
          }
          for (let n = 0, r = c.length; n < r; n++)
            t.associations.set(c[n], { meshes: e, primitives: n });
          if (c.length === 1) return (i.extensions && yn(r, c[0], i), c[0]);
          let l = new Ee();
          (i.extensions && yn(r, l, i), t.associations.set(l, { meshes: e }));
          for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
          return l;
        })
      );
    }
    loadCamera(e) {
      let t,
        n = this.json.cameras[e],
        r = n[n.type];
      if (!r) {
        console.warn(`THREE.GLTFLoader: Missing camera parameters.`);
        return;
      }
      return (
        n.type === `perspective`
          ? (t = new Me(
              ve.radToDeg(r.yfov),
              r.aspectRatio || 1,
              r.znear || 1,
              r.zfar || 2e6,
            ))
          : n.type === `orthographic` &&
            (t = new be(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)),
        n.name && (t.name = this.createUniqueName(n.name)),
        bn(t, n),
        Promise.resolve(t)
      );
    }
    loadSkin(e) {
      let t = this.json.skins[e],
        r = [];
      for (let e = 0, n = t.joints.length; e < n; e++)
        r.push(this._loadNodeShallow(t.joints[e]));
      return (
        t.inverseBindMatrices === void 0
          ? r.push(null)
          : r.push(this.getDependency(`accessor`, t.inverseBindMatrices)),
        Promise.all(r).then(function (e) {
          let r = e.pop(),
            i = e,
            a = [],
            o = [];
          for (let e = 0, n = i.length; e < n; e++) {
            let n = i[e];
            if (n) {
              a.push(n);
              let t = new H();
              (r !== null && t.fromArray(r.array, e * 16), o.push(t));
            } else
              console.warn(
                `THREE.GLTFLoader: Joint "%s" could not be found.`,
                t.joints[e],
              );
          }
          return new n(a, o);
        })
      );
    }
    loadAnimation(e) {
      let t = this.json,
        n = this,
        r = t.animations[e],
        i = r.name ? r.name : `animation_` + e,
        a = [],
        o = [],
        s = [],
        c = [],
        l = [];
      for (let e = 0, t = r.channels.length; e < t; e++) {
        let t = r.channels[e],
          n = r.samplers[t.sampler],
          i = t.target,
          u = i.node,
          d = r.parameters === void 0 ? n.input : r.parameters[n.input],
          f = r.parameters === void 0 ? n.output : r.parameters[n.output];
        i.node !== void 0 &&
          (a.push(this.getDependency(`node`, u)),
          o.push(this.getDependency(`accessor`, d)),
          s.push(this.getDependency(`accessor`, f)),
          c.push(n),
          l.push(i));
      }
      return Promise.all([
        Promise.all(a),
        Promise.all(o),
        Promise.all(s),
        Promise.all(c),
        Promise.all(l),
      ]).then(function (e) {
        let t = e[0],
          a = e[1],
          o = e[2],
          s = e[3],
          c = e[4],
          l = [];
        for (let e = 0, r = t.length; e < r; e++) {
          let r = t[e],
            i = a[e],
            u = o[e],
            d = s[e],
            f = c[e];
          if (r === void 0) continue;
          r.updateMatrix && r.updateMatrix();
          let p = n._createAnimationTracks(r, i, u, d, f);
          if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
        }
        let u = new ye(i, void 0, l);
        return (bn(u, r), u);
      });
    }
    createNodeMesh(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e];
      return r.mesh === void 0
        ? null
        : n.getDependency(`mesh`, r.mesh).then(function (e) {
            let t = n._getNodeRef(n.meshCache, r.mesh, e);
            return (
              r.weights !== void 0 &&
                t.traverse(function (e) {
                  if (e.isMesh)
                    for (let t = 0, n = r.weights.length; t < n; t++)
                      e.morphTargetInfluences[t] = r.weights[t];
                }),
              t
            );
          });
    }
    loadNode(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e],
        i = n._loadNodeShallow(e),
        a = [],
        o = r.children || [];
      for (let e = 0, t = o.length; e < t; e++)
        a.push(n.getDependency(`node`, o[e]));
      let s =
        r.skin === void 0
          ? Promise.resolve(null)
          : n.getDependency(`skin`, r.skin);
      return Promise.all([i, Promise.all(a), s]).then(function (e) {
        let t = e[0],
          n = e[1],
          r = e[2];
        r !== null &&
          t.traverse(function (e) {
            e.isSkinnedMesh && e.bind(r, Dn);
          });
        for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
        if (t.userData.pivot !== void 0 && n.length > 0) {
          let e = t.userData.pivot,
            r = n[0];
          ((t.pivot = new A().fromArray(e)),
            (t.position.x -= e[0]),
            (t.position.y -= e[1]),
            (t.position.z -= e[2]),
            r.position.set(0, 0, 0),
            delete t.userData.pivot);
        }
        return t;
      });
    }
    _loadNodeShallow(e) {
      let t = this.json,
        n = this.extensions,
        r = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      let i = t.nodes[e],
        a = i.name ? r.createUniqueName(i.name) : ``,
        o = [],
        s = r._invokeOne(function (t) {
          return t.createNodeMesh && t.createNodeMesh(e);
        });
      return (
        s && o.push(s),
        i.camera !== void 0 &&
          o.push(
            r.getDependency(`camera`, i.camera).then(function (e) {
              return r._getNodeRef(r.cameraCache, i.camera, e);
            }),
          ),
        r
          ._invokeAll(function (t) {
            return t.createNodeAttachment && t.createNodeAttachment(e);
          })
          .forEach(function (e) {
            o.push(e);
          }),
        (this.nodeCache[e] = Promise.all(o).then(function (t) {
          let o;
          if (
            ((o =
              i.isBone === !0
                ? new Ie()
                : t.length > 1
                  ? new Ee()
                  : t.length === 1
                    ? t[0]
                    : new _e()),
            o !== t[0])
          )
            for (let e = 0, n = t.length; e < n; e++) o.add(t[e]);
          if (
            (i.name && ((o.userData.name = i.name), (o.name = a)),
            bn(o, i),
            i.extensions && yn(n, o, i),
            i.matrix !== void 0)
          ) {
            let e = new H();
            (e.fromArray(i.matrix), o.applyMatrix4(e));
          } else
            (i.translation !== void 0 && o.position.fromArray(i.translation),
              i.rotation !== void 0 && o.quaternion.fromArray(i.rotation),
              i.scale !== void 0 && o.scale.fromArray(i.scale));
          if (!r.associations.has(o)) r.associations.set(o, {});
          else if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
            let e = r.associations.get(o);
            r.associations.set(o, { ...e });
          }
          return ((r.associations.get(o).nodes = e), o);
        })),
        this.nodeCache[e]
      );
    }
    loadScene(t) {
      let n = this.extensions,
        r = this.json.scenes[t],
        i = this,
        a = new Ee();
      (r.name && (a.name = i.createUniqueName(r.name)),
        bn(a, r),
        r.extensions && yn(n, a, r));
      let o = r.nodes || [],
        s = [];
      for (let e = 0, t = o.length; e < t; e++)
        s.push(i.getDependency(`node`, o[e]));
      return Promise.all(s).then(function (t) {
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e];
          n.parent === null ? a.add(n) : a.add(jt(n));
        }
        return (
          (i.associations = ((t) => {
            let n = new Map();
            for (let [t, r] of i.associations)
              (t instanceof e || t instanceof d) && n.set(t, r);
            return (
              t.traverse((e) => {
                let t = i.associations.get(e);
                t != null && n.set(e, t);
              }),
              n
            );
          })(a)),
          a
        );
      });
    }
    _createAnimationTracks(e, t, n, r, i) {
      let a = [],
        o = e.name ? e.name : e.uuid,
        s = [];
      hn[i.path] === hn.weights
        ? e.traverse(function (e) {
            e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid);
          })
        : s.push(o);
      let c;
      switch (hn[i.path]) {
        case hn.weights:
          c = Ue;
          break;
        case hn.rotation:
          c = O;
          break;
        case hn.translation:
        case hn.scale:
          c = se;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              c = Ue;
              break;
            default:
              c = se;
              break;
          }
          break;
      }
      let l = r.interpolation === void 0 ? p : gn[r.interpolation],
        u = this._getArrayFromAccessor(n);
      for (let e = 0, n = s.length; e < n; e++) {
        let n = new c(s[e] + `.` + hn[i.path], t.array, u, l);
        (r.interpolation === `CUBICSPLINE` &&
          this._createCubicSplineTrackInterpolant(n),
          a.push(n));
      }
      return a;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        let e = Tn(t.constructor),
          n = new Float32Array(t.length);
        for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
        t = n;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      ((e.createInterpolant = function (e) {
        return new (this instanceof O ? ln : sn)(
          this.times,
          this.values,
          this.getValueSize() / 3,
          e,
        );
      }),
        (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0));
    }
  };
function kn(e, t, n) {
  let r = t.attributes,
    i = new je();
  if (r.POSITION !== void 0) {
    let e = n.json.accessors[r.POSITION],
      t = e.min,
      a = e.max;
    if (t !== void 0 && a !== void 0) {
      if (
        (i.set(new A(t[0], t[1], t[2]), new A(a[0], a[1], a[2])), e.normalized)
      ) {
        let t = Tn(un[e.componentType]);
        (i.min.multiplyScalar(t), i.max.multiplyScalar(t));
      }
    } else {
      console.warn(
        `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
      );
      return;
    }
  } else return;
  let a = t.targets;
  if (a !== void 0) {
    let e = new A(),
      t = new A();
    for (let r = 0, i = a.length; r < i; r++) {
      let i = a[r];
      if (i.POSITION !== void 0) {
        let r = n.json.accessors[i.POSITION],
          a = r.min,
          o = r.max;
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            r.normalized)
          ) {
            let e = Tn(un[r.componentType]);
            t.multiplyScalar(e);
          }
          e.max(t);
        } else
          console.warn(
            `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
          );
      }
    }
    i.expandByVector(e);
  }
  e.boundingBox = i;
  let o = new S();
  (i.getCenter(o.center),
    (o.radius = i.min.distanceTo(i.max) / 2),
    (e.boundingSphere = o));
}
function An(e, t, n) {
  let r = t.attributes,
    i = [];
  function a(t, r) {
    return n.getDependency(`accessor`, t).then(function (t) {
      e.setAttribute(r, t);
    });
  }
  for (let t in r) {
    let n = mn[t] || t.toLowerCase();
    n in e.attributes || i.push(a(r[t], n));
  }
  if (t.indices !== void 0 && !e.index) {
    let r = n.getDependency(`accessor`, t.indices).then(function (t) {
      e.setIndex(t);
    });
    i.push(r);
  }
  return (
    ie.workingColorSpace !== `srgb-linear` &&
      `COLOR_0` in r &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`,
      ),
    bn(e, t),
    kn(e, t, n),
    Promise.all(i).then(function () {
      return t.targets === void 0 ? e : xn(e, t.targets, n);
    })
  );
}
function jn(e) {
  let t = new Map(
    e.hands.map((e) => [
      e.side,
      e.knots.map((e) => ({
        ...e,
        p: new A().fromArray(e.position),
        q: new W().fromArray(e.quaternion),
      })),
    ]),
  );
  return (e, n) => {
    let r = t.get(e);
    if (!r?.length) throw Error(`Missing ${e} wrist trajectory.`);
    let i = Ne(r, n, (e) => e.time),
      a = r[Math.max(0, i - 1)],
      o = r[Math.min(i, r.length - 1)];
    if (a === o) return { position: a.p.clone(), q: a.q.clone() };
    let s = o.moveStart ?? a.time,
      c = o.moveEnd ?? o.time,
      l = Math.max(0, Math.min(1, (n - s) / Math.max(1e-6, c - s))),
      u = l * l * l * (10 + l * (-15 + 6 * l)),
      d = a.p.clone().lerp(o.p, u);
    return (
      o.arcLift && (d.y += o.arcLift * 16 * u * u * (1 - u) * (1 - u)),
      { position: d, q: a.q.clone().slerp(o.q, u) }
    );
  };
}
var Mn = 1e-5,
  Nn = 233.144228,
  Pn = new Int16Array([
    0, 0, 0, 0, -8, -5, 0, 0, -17, -21, -2, -1, -17, -45, -4, -5, -9, -75, -6,
    -11, 6, -111, -6, -21, 22, -148, -4, -35, 38, -183, 1, -52, 50, -209, 7,
    -71, 58, -227, 14, -90, 63, -231, 21, -107, 64, -212, 27, -119, 60, -182,
    32, -126, 47, -158, 34, -125, 25, -140, 33, -119, -6, -126, 29, -111, -46,
    -114, 20, -101, -92, -105, 6, -91, -141, -99, -13, -83, -189, -82, -35, -75,
    -233, -74, -61, -67, -271, -98, -87, -61, -346, -138, -115, -60, -391, -178,
    -146, -66, -366, -208, -175, -77, -333, -201, -195, -91, -292, -211, -204,
    -103, -244, -234, -202, -113, -195, -264, -190, -124, -149, -296, -171,
    -137, -111, -327, -149, -152, -82, -369, -124, -168, -63, -437, -100, -189,
    -64, -497, -80, -214, -125, -525, -67, -243, -136, -510, -64, -270, -115,
    -458, -66, -287, -108, -418, -67, -293, -114, -393, -68, -288, -134, -375,
    -69, -278, -168, -362, -73, -266, -214, -352, -82, -253, -269, -339, -97,
    -242, -328, -310, -117, -231, -383, -275, -143, -218, -470, -251, -174,
    -204, -534, -253, -211, -189, -517, -290, -247, -179, -487, -329, -274,
    -177, -445, -359, -289, -182, -395, -383, -291, -192, -343, -406, -282,
    -206, -293, -426, -264, -220, -251, -444, -241, -235, -219, -466, -215,
    -249, -197, -513, -190, -264, -191, -568, -168, -282, -198, -603, -150,
    -305, -198, -599, -138, -327, -207, -555, -131, -343, -225, -509, -128,
    -349, -252, -471, -130, -344, -288, -437, -137, -332, -332, -404, -149,
    -316, -380, -373, -166, -297, -429, -343, -187, -277, -475, -289, -212,
    -255, -514, -222, -238, -231, -579, -176, -266, -203, -635, -174, -298,
    -175, -614, -216, -328, -153, -584, -271, -349, -143, -545, -311, -359,
    -145, -500, -341, -359, -156, -452, -365, -348, -171, -406, -386, -331,
    -188, -366, -399, -309, -205, -335, -366, -284, -218, -314, -299, -260,
    -223, -308, -245, -239, -216, -361, -237, -224, -202, -384, -279, -219,
    -187, -360, -320, -220, -181, -350, -318, -220, -182, -352, -290, -220,
    -184, -368, -249, -221, -183, -396, -201, -223, -175, -437, -153, -230,
    -162, -486, -109, -242, -143, -539, -72, -260, -121, -608, -43, -284, -97,
    -730, -23, -316, -74, -776, -14, -357, -54, -740, -15, -397, -38, -693, -25,
    -424, -27, -639, -44, -435, -21, -580, -70, -432, -21, -522, -99, -416, -26,
    -470, -132, -392, -35, -430, -163, -364, -48, -404, -256, -334, -66, -392,
    -443, -307, -97, -391, -588, -285, -148, -396, -606, -269, -210, -405, -507,
    -259, -262, -419, -353, -254, -287, -438, -250, -254, -281, -464, -196,
    -259, -254, -498, -174, -267, -219, -536, -171, -280, -185, -577, -182,
    -297, -158, -618, -178, -317, -139, -655, -126, -339, -124, -687, -79, -363,
    -108, -749, -86, -387, -91, -786, -156, -415, -80, -761, -263, -440, -83,
    -728, -338, -456, -101, -687, -387, -462, -130, -639, -420, -458, -163,
    -589, -444, -444, -195, -542, -463, -424, -223, -500, -477, -399, -247,
    -467, -480, -373, -266, -444, -474, -347, -279, -447, -467, -324, -287,
    -501, -460, -309, -291, -496, -453, -304, -292, -474, -439, -302, -290,
    -466, -414, -300, -286, -470, -382, -298, -278, -487, -346, -297, -266,
    -516, -309, -299, -251, -557, -273, -305, -233, -604, -230, -318, -213,
    -653, -179, -336, -191, -701, -133, -359, -166, -779, -105, -386, -140,
    -806, -109, -418, -116, -785, -141, -448, -99, -753, -168, -467, -91, -709,
    -191, -475, -91, -657, -214, -472, -97, -603, -237, -458, -107, -551, -260,
    -437, -119, -506, -281, -410, -132, -471, -298, -382, -145, -446, -310,
    -354, -158, -441, -317, -329, -170, -436, -317, -309, -180, -431, -310,
    -295, -186, -437, -297, -284, -190, -452, -278, -279, -190, -476, -256,
    -278, -186, -509, -231, -282, -179, -547, -206, -292, -168, -588, -181,
    -307, -156, -628, -135, -325, -142, -664, -74, -347, -124, -691, -26, -369,
    -101, -709, -12, -391, -76, -715, -39, -410, -54, -709, -85, -425, -42,
    -691, -122, -435, -40, -662, -156, -438, -47, -625, -188, -434, -60, -581,
    -219, -424, -76, -533, -243, -407, -95, -485, -232, -386, -111, -441, -362,
    -361, -128, -407, -468, -335, -157, -392, -493, -309, -194, -374, -475,
    -287, -229, -363, -402, -267, -253, -367, -312, -253, -258, -384, -264,
    -243, -247, -411, -240, -239, -227, -447, -228, -242, -205, -489, -222,
    -252, -184, -533, -220, -267, -168, -574, -220, -287, -156, -621, -223,
    -309, -147, -725, -232, -337, -143, -773, -245, -373, -142, -725, -261,
    -407, -144, -666, -282, -427, -149, -603, -307, -432, -156, -536, -334,
    -422, -166, -472, -362, -400, -179, -413, -390, -371, -194, -367, -416,
    -337, -209, -334, -442, -303, -225, -314, -489, -272, -243, -304, -545,
    -245, -263, -300, -580, -224, -287, -301, -576, -209, -310, -306, -536,
    -199, -327, -317, -489, -194, -334, -334, -453, -193, -330, -358, -423,
    -196, -319, -387, -399, -203, -304, -420, -379, -214, -287, -455, -360,
    -228, -271, -487, -290, -245, -254, -515, -178, -264, -230, -553, -104,
    -283, -196, -615, -111, -305, -159, -598, -194, -328, -131, -559, -294,
    -344, -122, -512, -352, -350, -131, -458, -383, -345, -152, -399, -400,
    -331, -177, -342, -410, -308, -200, -290, -417, -280, -220, -246, -421,
    -250, -235, -212, -415, -219, -246, -190, -406, -190, -252, -218, -397,
    -166, -255, -255, -388, -153, -254, -222, -376, -147, -251, -197, -356,
    -142, -246, -185, -327, -136, -239, -187, -294, -130, -229, -202, -259,
    -126, -215, -231, -224, -125, -199, -271, -191, -129, -180, -317, -148,
    -140, -160, -363, -98, -156, -138, -417, -55, -177, -114, -500, -33, -203,
    -89, -498, -47, -234, -67, -463, -85, -259, -53, -416, -116, -273, -49,
    -358, -144, -274, -52, -294, -170, -263, -61, -231, -196, -242, -73, -174,
    -222, -214, -88, -126, -251, -182, -104, -89, -353, -149, -123, -64, -484,
    -119, -153, -59, -561, -92, -196, -51, -550, -71, -241, -44, -464, -55,
    -274, -47, -364, -44, -287, -59, -304, -37, -279, -81, -270, -35, -258,
    -111, -250, -38, -233, -147, -240, -46, -209, -187, -236, -59, -188, -226,
    -223, -76, -172, -261, -227, -95, -160, -300, -245, -116, -152, -373, -274,
    -140, -150, -368, -309, -166, -154, -328, -337, -187, -164, -280, -355,
    -196, -177, -223, -384, -194, -191, -162, -419, -181, -206, -101, -456,
    -159, -224, -46, -491, -131, -243, 0, -507, -100, -263, 36, -499, -68, -281,
    60, -488, -38, -293, 43, -491, -13, -300, -5, -512, 2, -305, 23, -539, 8,
    -311, 49, -534, 13, -318, 62, -515, 18, -323, 60, -488, 24, -324, 45, -457,
    28, -320, 16, -425, 29, -311, -25, -396, 24, -298, -74, -368, 14, -283,
    -127, -338, -3, -266, -231, -310, -27, -248, -334, -292, -62, -231, -313,
    -291, -102, -215, -253, -309, -132, -203, -186, -331, -146, -197, -116,
    -349, -144, -197, -48, -365, -128, -201, 14, -381, -102, -208, 64, -394,
    -70, -217, 99, -406, -36, -226, 121, -413, -4, -235, 132, -409, 23, -242,
    132, -405, 45, -247, 124, -410, 59, -251, 127, -419, 69, -253, 128, -420,
    74, -256, 123, -404, 77, -257, 111, -380, 78, -256, 91, -352, 76, -251, 63,
    -321, 71, -242, 30, -290, 62, -230, -6, -263, 49, -215, -41, -239, 33, -199,
    -73, -212, 15, -183, -111, -182, -4, -166, -189, -163, -26, -149, -187,
    -163, -52, -134, -147, -185, -72, -122, -100, -217, -82, -118, -48, -247,
    -81, -120, 7, -273, -69, -128, 59, -297, -49, -139, 104, -319, -24, -153,
    140, -339, 3, -167, 166, -356, 30, -182, 184, -399, 54, -196, 188, -457, 75,
    -213, 137, -499, 89, -235, 120, -506, 93, -258, 149, -470, 92, -277, 165,
    -413, 93, -285, 170, -376, 95, -282, 163, -351, 97, -271, 143, -334, 99,
    -257, 111, -320, 96, -242, 68, -310, 89, -228, 19, -300, 76, -216, -29,
    -282, 57, -205, -79, -262, 35, -195, -166, -250, 8, -184, -179, -256, -24,
    -175, -147, -287, -51, -170, -105, -322, -68, -170, -55, -352, -72, -177,
    -1, -379, -65, -188, 51, -403, -49, -202, 98, -427, -26, -218, 136, -447, 0,
    -233, 164, -463, 26, -248, 183, -475, 51, -262, 189, -481, 73, -274, 184,
    -481, 89, -284, 187, -476, 100, -291, 184, -466, 107, -294, 173, -451, 111,
    -295, 154, -433, 111, -292, 126, -412, 108, -286, 92, -390, 100, -278, 52,
    -366, 87, -267, 9, -343, 71, -255, -32, -325, 51, -242, -69, -503, 29, -235,
    -99, -801, 7, -259, -122, -899, -16, -321, -134, -805, -36, -389, -133,
    -612, -52, -431, -120, -418, -64, -432, -95, -344, -70, -400, -62, -358,
    -69, -354, -22, -417, -62, -315, 20, -494, -49, -292, 62, -571, -31, -289,
    99, -573, -10, -301, 127, -513, 12, -314, 148, -501, 34, -320, 114, -572,
    52, -323, 98, -688, 61, -336, 125, -786, 66, -363, 133, -792, 70, -399, 128,
    -775, 74, -431, 110, -747, 76, -454, 79, -715, 74, -465, 38, -682, 68, -466,
    -12, -644, 55, -459, -66, -662, 37, -447, -120, -712, 14, -439, -247, -756,
    -15, -439, -363, -768, -57, -447, -342, -720, -104, -457, -293, -657, -140,
    -457, -231, -639, -160, -449, -159, -650, -162, -438, -82, -676, -149, -429,
    -9, -708, -124, -427, 55, -774, -90, -432, 103, -854, -53, -448, 131, -915,
    -16, -475, 99, -942, 16, -507, 23, -932, 34, -538, 42, -889, 38, -559, 63,
    -862, 38, -568, 69, -844, 39, -568, 59, -827, 39, -562, 28, -810, 38, -553,
    -25, -781, 32, -541, -98, -743, 18, -527, -186, -705, -4, -510, -306, -684,
    -37, -491, -491, -694, -85, -473, -534, -716, -147, -461, -515, -733, -205,
    -455, -473, -749, -248, -455, -404, -766, -271, -459, -316, -786, -274,
    -466, -217, -809, -257, -476, -119, -880, -226, -490, -32, -984, -183, -513,
    32, -1069, -134, -548, 48, -1105, -86, -592, 65, -1080, -46, -632, 73,
    -1022, -14, -658, 58, -977, 9, -667, 19, -935, 22, -662, -46, -892, 23,
    -648, -135, -844, 11, -627, -244, -784, -15, -601, -363, -725, -54, -570,
    -479, -678, -105, -536, -630, -656, -166, -503, -831, -665, -241, -473,
    -843, -675, -326, -453, -796, -689, -396, -440, -723, -718, -441, -435,
    -624, -759, -458, -438, -503, -807, -449, -449, -375, -850, -417, -467,
    -254, -878, -368, -489, -155, -903, -308, -512, -91, -929, -243, -534, -156,
    -960, -186, -555, -261, -984, -151, -577, -206, -972, -137, -595, -179,
    -939, -129, -607, -192, -889, -122, -609, -241, -827, -121, -600, -325,
    -757, -129, -582, -438, -664, -149, -553, -569, -561, -185, -514, -703,
    -469, -236, -467, -874, -416, -300, -415, -1065, -421, -384, -367, -1077,
    -450, -476, -330, -1038, -476, -552, -307, -970, -504, -601, -297, -873,
    -536, -620, -298, -754, -569, -613, -306, -627, -568, -582, -319, -508,
    -565, -533, -330, -411, -596, -473, -340, -352, -662, -408, -353, -349,
    -736, -348, -373, -341, -757, -300, -399, -352, -715, -266, -422, -391,
    -657, -245, -435, -454, -585, -238, -434, -540, -501, -247, -418, -642,
    -408, -271, -390, -752, -336, -309, -352, -860, -321, -360, -311, -976,
    -321, -419, -275, -1185, -314, -492, -246, -1273, -285, -582, -225, -1221,
    -219, -666, -205, -1144, -202, -720, -184, -1049, -235, -743, -166, -935,
    -300, -737, -158, -810, -379, -707, -163, -685, -483, -658, -181, -577,
    -626, -595, -216, -501, -752, -527, -268, -476, -825, -460, -330, -597,
    -840, -408, -391, -669, -792, -385, -440, -631, -740, -380, -468, -620,
    -697, -381, -478, -636, -656, -384, -474, -679, -613, -389, -460, -749,
    -561, -401, -439, -840, -494, -423, -413, -941, -427, -456, -382, -1042,
    -381, -501, -347, -1202, -380, -559, -313, -1297, -423, -633, -288, -1275,
    -465, -705, -275, -1232, -507, -758, -274, -1162, -554, -786, -283, -1067,
    -603, -789, -300, -953, -652, -770, -323, -832, -729, -731, -351, -719,
    -838, -677, -387, -629, -938, -614, -432, -593, -992, -549, -484, -587,
    -987, -491, -534, -577, -931, -445, -569, -595, -878, -412, -586, -638,
    -824, -394, -587, -704, -766, -390, -574, -788, -703, -402, -551, -883,
    -628, -429, -520, -978, -561, -468, -483, -1064, -510, -518, -444, -1150,
    -481, -574, -404, -1285, -484, -637, -370, -1309, -494, -706, -345, -1266,
    -507, -762, -329, -1204, -543, -796, -321, -1119, -596, -805, -324, -1015,
    -657, -793, -336, -897, -708, -760, -358, -780, -721, -711, -383, -678,
    -719, -651, -406, -603, -730, -585, -425, -632, -765, -522, -440, -728,
    -816, -479, -456, -681, -827, -456, -475, -644, -800, -441, -491, -640,
    -746, -428, -498, -668, -674, -420, -494, -724, -591, -418, -477, -806,
    -492, -428, -448, -901, -391, -452, -408, -999, -307, -488, -360, -1127,
    -254, -537, -309, -1269, -246, -602, -261, -1271, -260, -675, -223, -1233,
    -282, -733, -197, -1169, -316, -768, -184, -1077, -360, -778, -183, -961,
    -402, -765, -192, -833, -441, -730, -207, -708, -566, -678, -229, -601,
    -714, -613, -267, -531, -811, -543, -321, -512, -838, -477, -379, -485,
    -754, -421, -427, -482, -655, -378, -452, -507, -575, -347, -452, -557,
    -504, -331, -433, -630, -438, -331, -403, -720, -369, -346, -365, -816,
    -339, -376, -325, -909, -371, -418, -289, -1034, -417, -470, -266, -1232,
    -451, -538, -257, -1265, -451, -621, -258, -1187, -403, -691, -261, -1089,
    -407, -730, -260, -971, -455, -737, -261, -833, -528, -716, -268, -685,
    -610, -671, -285, -542, -704, -608, -313, -421, -829, -531, -353, -334,
    -938, -450, -406, -309, -1003, -373, -467, -438, -1024, -314, -525, -475,
    -985, -285, -572, -419, -937, -273, -600, -392, -897, -265, -609, -392,
    -860, -258, -606, -422, -822, -254, -593, -483, -778, -256, -574, -571,
    -721, -269, -550, -674, -662, -294, -522, -779, -620, -332, -490, -965,
    -621, -384, -460, -1076, -661, -456, -437, -1033, -697, -528, -425, -960,
    -731, -579, -425, -854, -766, -602, -433, -717, -803, -596, -447, -560,
    -838, -564, -466, -402, -866, -509, -487, -260, -886, -437, -508, -148,
    -900, -355, -528, -92, -907, -273, -545, -78, -904, -201, -558, -51, -883,
    -144, -566, -54, -844, -100, -568, -86, -790, -72, -561, -143, -725, -59,
    -546, -225, -653, -63, -522, -324, -580, -81, -490, -431, -778, -114, -461,
    -536, -1033, -160, -468, -633, -1079, -213, -511, -729, -963, -272, -560,
    -760, -757, -332, -582, -746, -538, -383, -565, -696, -456, -417, -516,
    -612, -475, -432, -456, -496, -550, -425, -406, -358, -646, -398, -379,
    -211, -738, -351, -376, -66, -828, -288, -396, 64, -903, -215, -431, 130,
    -961, -137, -474, 45, -1007, -70, -520, 91, -1011, -25, -563, 182, -994, 12,
    -595, 221, -966, 46, -615, 215, -929, 76, -623, 169, -886, 97, -620, 84,
    -828, 103, -607, -31, -750, 93, -585, -162, -683, 64, -555, -303, -649, 18,
    -519, -552, -669, -47, -486, -663, -719, -133, -463, -607, -744, -218, -453,
    -514, -772, -277, -454, -382, -807, -304, -462, -219, -846, -297, -476, -45,
    -878, -260, -495, 120, -894, -198, -515, 259, -911, -120, -534, 363, -935,
    -34, -552, 387, -967, 49, -569, 273, -999, 113, -587, 298, -985, 148, -604,
    361, -947, 171, -615, 385, -897, 191, -617, 375, -835, 208, -607, 331, -766,
    218, -588, 252, -694, 217, -560, 145, -632, 202, -525, 21, -605, 172, -487,
    -217, -607, 124, -453, -522, -622, 46, -427, -535, -628, -55, -411, -423,
    -612, -142, -401, -284, -619, -193, -394, -121, -651, -205, -392, 53, -696,
    -180, -396, 220, -747, -127, -407, 362, -798, -52, -426, 469, -875, 32,
    -451, 539, -958, 116, -485, 561, -1016, 190, -525, 446, -1038, 245, -566,
    390, -1012, 270, -601, 449, -953, 278, -622, 482, -905, 282, -627, 490,
    -861, 288, -619, 469, -819, 293, -602, 418, -779, 293, -580, 337, -738, 285,
    -554, 231, -684, 264, -527, 114, -622, 231, -497, -49, -580, 184, -464,
    -295, -582, 117, -433, -304, -621, 35, -410, -224, -676, -35, -400, -112,
    -725, -78, -402, 28, -771, -88, -415, 182, -815, -68, -436, 331, -857, -22,
    -461, 460, -896, 42, -488, 559, -943, 116, -516, 628, -991, 191, -546, 645,
    -1028, 259, -576, 616, -1041, 311, -606, 611, -1018, 345, -629, 617, -971,
    366, -641, 601, -923, 378, -642, 562, -871, 381, -631, 499, -816, 375, -612,
    415, -760, 359, -586, 312, -690, 331, -555, 200, -634, 291, -519, 93, -609,
    242, -482, -8, -613, 186, -450, -109, -637, 126, -426, -125, -657, 66, -413,
    -92, -657, 17, -408, -23, -683, -13, -408, 75, -725, -22, -414, 192, -775,
    -9, -426, 316, -827, 24, -445, 433, -873, 72, -469, 535, -911, 132, -497,
    611, -936, 195, -525, 631, -949, 256, -550, 623, -948, 305, -571, 640, -930,
    341, -586, 644, -898, 366, -593, 617, -853, 383, -590, 563, -798, 388, -579,
    482, -737, 381, -560, 379, -672, 361, -534, 261, -650, 327, -502, 140, -722,
    280, -476, 29, -810, 223, -465, -60, -844, 160, -472, -119, -808, 97, -486,
    -140, -729, 41, -493, -122, -697, -4, -489, -67, -710, -33, -479, 18, -750,
    -43, -471, 123, -803, -34, -471, 237, -808, -6, -479, 346, -765, 36, -486,
    445, -749, 90, -488, 525, -793, 148, -488, 485, -883, 203, -495, 441, -963,
    240, -514, 508, -967, 265, -541, 530, -940, 285, -566, 514, -893, 301, -581,
    465, -833, 309, -583, 384, -766, 307, -572, 273, -692, 290, -550, 143, -665,
    257, -520, -3, -675, 209, -490, -306, -701, 142, -468, -554, -717, 44, -455,
    -523, -682, -66, -449, -424, -644, -154, -442, -297, -650, -204, -432, -146,
    -684, -215, -426, 17, -734, -192, -426, 170, -788, -141, -435, 299, -869,
    -72, -454, 389, -956, 6, -484, 435, -1019, 82, -523, 363, -1046, 145, -565,
    224, -1034, 178, -602, 252, -982, 186, -626, 274, -938, 185, -636, 266,
    -895, 181, -632, 227, -851, 176, -618, 155, -806, 165, -598, 51, -751, 145,
    -573, -81, -691, 112, -543, -224, -640, 65, -511, -412, -616, 3, -477, -667,
    -635, -80, -449, -695, -667, -177, -430, -643, -697, -262, -422, -554, -731,
    -318, -423, -431, -767, -341, -432, -286, -804, -332, -447, -137, -838,
    -296, -466, -1, -928, -240, -489, 106, -1050, -171, -524, 172, -1141, -98,
    -571, 174, -1173, -32, -625, 178, -1136, 20, -672, 165, -1060, 56, -700,
    124, -998, 78, -706, 55, -942, 84, -696, -40, -888, 74, -674, -157, -834,
    48, -645, -289, -777, 7, -611, -423, -752, -48, -576, -544, -747, -114,
    -544, -702, -755, -187, -519, -894, -773, -272, -502, -884, -763, -362,
    -493, -819, -763, -432, -488, -728, -792, -472, -486, -612, -838, -481,
    -490, -477, -891, -464, -502, -341, -941, -423, -521, -217, -990, -365,
    -546, -120, -1035, -298, -575, -64, -1071, -229, -606, -147, -1098, -169,
    -636, -253, -1106, -136, -663, -203, -1082, -124, -683, -183, -1049, -119,
    -694, -199, -1006, -116, -694, -249, -957, -118, -685, -333, -902, -129,
    -667, -446, -839, -151, -642, -576, -773, -188, -610, -707, -718, -239,
    -575, -883, -690, -305, -538, -1067, -696, -388, -505, -1072, -712, -480,
    -481, -1031, -731, -554, -466, -960, -757, -600, -461, -860, -787, -618,
    -463, -738, -817, -609, -472, -611, -810, -576, -484, -494, -808, -526,
    -494, -398, -843, -464, -503, -341, -910, -399, -516, -339, -980, -340,
    -536, -331, -994, -292, -563, -344, -955, -258, -586, -385, -905, -238,
    -598, -451, -843, -233, -598, -540, -771, -243, -584, -645, -689, -268,
    -559, -757, -589, -308, -524, -866, -487, -360, -479, -988, -404, -421,
    -427, -1199, -365, -495, -374, -1279, -369, -588, -326, -1221, -383, -671,
    -290, -1142, -402, -725, -267, -1044, -431, -745, -256, -928, -469, -738,
    -255, -802, -511, -706, -263, -676, -580, -655, -279, -568, -697, -592,
    -305, -492, -813, -522, -345, -469, -878, -455, -396, -495, -878, -400,
    -446, -509, -813, -362, -485, -540, -747, -340, -503, -589, -687, -333,
    -503, -655, -626, -339, -488, -737, -562, -358, -464, -830, -488, -389,
    -432, -927, -405, -431, -393, -1017, -332, -482, -350, -1097, -285, -538,
    -306, -1233, -281, -600, -265, -1299, -310, -670, -233, -1260, -339, -733,
    -214, -1205, -381, -774, -208, -1127, -436, -790, -212, -1029, -500, -784,
    -227, -916, -565, -757, -251, -801, -638, -714, -282, -696, -713, -657,
    -319, -616, -776, -594, -361, -610, -814, -531, -403, -722, -821, -484,
    -441, -707, -791, -460, -469, -665, -750, -446, -485, -656, -700, -435,
    -488, -678, -640, -428, -479, -731, -574, -427, -459, -809, -498, -436,
    -431, -904, -418, -458, -396, -1004, -347, -493, -356, -1114, -301, -541,
    -313, -1274, -294, -603, -273, -1309, -314, -678, -241, -1279, -343, -743,
    -222, -1226, -384, -786, -214, -1146, -434, -803, -217, -1043, -490, -798,
    -230, -924, -546, -770, -251, -805, -653, -725, -280, -699, -780, -667,
    -320, -622, -871, -601, -373, -600, -901, -537, -429, -581, -864, -482,
    -477, -576, -794, -438, -507, -598, -734, -408, -516, -645, -676, -391,
    -508, -714, -616, -390, -489, -799, -552, -404, -461, -893, -509, -433,
    -427, -984, -521, -473, -395, -1063, -547, -523, -371, -1172, -563, -578,
    -357, -1287, -562, -643, -351, -1265, -520, -709, -347, -1211, -518, -756,
    -341, -1134, -559, -779, -338, -1033, -625, -778, -341, -913, -696, -755,
    -355, -784, -760, -712, -378, -661, -844, -654, -409, -557, -925, -586,
    -449, -495, -989, -515, -494, -578, -1033, -452, -541, -621, -1017, -413,
    -582, -555, -979, -390, -610, -525, -940, -372, -624, -530, -897, -358,
    -624, -567, -850, -348, -614, -634, -797, -348, -595, -726, -733, -361,
    -570, -830, -670, -388, -539, -983, -627, -431, -504, -1208, -625, -497,
    -470, -1256, -647, -585, -444, -1193, -672, -663, -428, -1107, -700, -712,
    -421, -995, -731, -729, -424, -859, -766, -715, -433, -708, -801, -677,
    -448, -560, -859, -617, -467, -432, -967, -543, -494, -340, -1075, -462,
    -533, -308, -1136, -383, -583, -318, -1135, -318, -633, -314, -1072, -269,
    -670, -330, -1009, -237, -686, -365, -955, -220, -685, -419, -902, -216,
    -670, -491, -847, -225, -646, -578, -792, -247, -616, -671, -745, -280,
    -582, -760, -710, -323, -548, -841, -687, -372, -516, -1e3, -682, -429,
    -488, -1074, -689, -496, -467, -1009, -697, -557, -453, -922, -726, -595,
    -446, -807, -771, -605, -447, -667, -826, -588, -458, -513, -882, -547,
    -477, -360, -933, -486, -502, -226, -976, -411, -532, -121, -1012, -330,
    -563, -87, -1039, -249, -593, -207, -1058, -187, -621, -198, -1053, -152,
    -644, -129, -1030, -130, -659, -99, -992, -111, -665, -104, -944, -94, -661,
    -145, -889, -84, -648, -219, -828, -83, -627, -320, -764, -96, -598, -436,
    -706, -124, -565, -560, -664, -167, -529, -784, -648, -226, -494, -886,
    -654, -306, -465, -833, -669, -384, -445, -746, -695, -437, -433, -623,
    -730, -460, -431, -469, -770, -452, -437, -299, -811, -415, -451, -134,
    -888, -355, -471, 10, -1013, -277, -502, 119, -1117, -192, -548, 168, -1159,
    -108, -602, 187, -1136, -35, -652, 211, -1059, 22, -685, 207, -992, 64,
    -696, 175, -936, 92, -688, 118, -884, 104, -668, 35, -833, 100, -640, -67,
    -777, 81, -608, -179, -748, 48, -573, -287, -750, 2, -542, -395, -763, -53,
    -518, -608, -785, -118, -503, -667, -793, -196, -497, -578, -780, -264,
    -495, -463, -801, -305, -495, -317, -844, -313, -499, -151, -897, -290,
    -510, 20, -943, -240, -528, 177, -972, -170, -551, 306, -999, -87, -575,
    402, -1032, 0, -598, 413, -1072, 82, -622, 296, -1113, 141, -647, 327,
    -1106, 173, -672, 385, -1078, 193, -689, 406, -1038, 211, -697, 392, -989,
    225, -694, 344, -934, 232, -681, 263, -874, 229, -659, 153, -805, 213, -630,
    24, -737, 180, -595, -228, -691, 130, -557, -529, -679, 48, -520, -530,
    -691, -54, -489, -413, -714, -141, -468, -270, -737, -191, -457, -104, -762,
    -201, -456, 71, -788, -175, -461, 237, -815, -119, -472, 377, -836, -44,
    -485, 479, -847, 41, -500, 543, -848, 124, -513, 560, -845, 197, -523, 541,
    -837, 253, -530, 542, -821, 291, -533, 530, -789, 314, -531, 503, -743, 326,
    -523, 457, -686, 327, -509, 393, -622, 318, -487, 311, -556, 298, -459, 215,
    -511, 269, -427, 117, -706, 229, -401, 24, -902, 182, -408, -76, -914, 130,
    -444, -153, -788, 74, -479, -158, -599, 21, -490, -130, -439, -20, -468,
    -66, -398, -46, -424, 27, -433, -52, -376, 141, -508, -38, -341, 264, -598,
    -5, -326, 385, -692, 43, -332, 495, -788, 102, -358, 586, -867, 167, -398,
    606, -919, 231, -444, 515, -942, 279, -491, 560, -928, 307, -529, 623, -903,
    329, -555, 645, -873, 350, -569, 633, -838, 368, -571, 587, -798, 379, -564,
    510, -756, 379, -549, 404, -701, 365, -529, 277, -636, 335, -504, 146, -579,
    289, -473, -52, -554, 230, -440, -242, -571, 151, -411, -216, -611, 67,
    -391, -147, -646, -1, -384, -43, -682, -41, -386, 89, -719, -49, -397, 231,
    -756, -29, -413, 367, -791, 15, -433, 483, -817, 76, -454, 571, -837, 145,
    -476, 626, -863, 213, -496, 633, -894, 274, -515, 643, -910, 320, -534, 644,
    -894, 354, -550, 622, -859, 376, -559, 578, -810, 386, -559, 511, -749, 384,
    -549, 422, -680, 368, -529, 315, -609, 340, -501, 200, -551, 299, -467, 88,
    -543, 248, -431, -11, -555, 189, -401, -113, -559, 127, -380, -187, -543,
    64, -366, -176, -507, 7, -354, -131, -500, -36, -342, -55, -532, -58, -334,
    46, -586, -59, -332, 160, -649, -40, -340, 276, -660, -3, -357, 382, -647,
    47, -374, 470, -662, 105, -387, 538, -721, 165, -400, 562, -803, 221, -418,
    546, -858, 267, -445, 549, -836, 299, -474, 525, -797, 319, -494, 472, -746,
    327, -503, 394, -688, 322, -499, 294, -625, 303, -483, 178, -562, 270, -459,
    55, -559, 224, -430, -75, -592, 167, -405, -369, -629, 96, -391, -575, -641,
    -1, -387, -510, -592, -103, -387, -393, -552, -179, -382, -255, -563, -216,
    -374, -101, -606, -215, -369, 58, -666, -182, -371, 206, -733, -125, -384,
    327, -833, -52, -407, 410, -936, 27, -443, 448, -1006, 101, -490, 360,
    -1034, 161, -540, 221, -1016, 190, -583, 252, -963, 193, -611, 272, -920,
    189, -622, 263, -880, 183, -619, 223, -839, 176, -606, 151, -797, 164, -587,
    45, -740, 143, -563, -88, -674, 110, -535, -232, -618, 62, -502, -429, -594,
    -1, -468, -680, -620, -85, -438, -697, -662, -183, -419, -642, -696, -267,
    -412, -550, -730, -322, -416, -425, -765, -343, -427, -278, -801, -332,
    -444, -128, -843, -295, -464, 9, -940, -237, -489, 117, -1059, -166, -525,
    180, -1144, -93, -574, 178, -1168, -26, -628, 178, -1122, 25, -673, 162,
    -1053, 60, -698, 119, -995, 80, -703, 48, -941, 84, -693, -48, -886, 73,
    -671, -166, -829, 46, -642, -298, -760, 4, -608, -431, -693, -52, -570,
    -553, -643, -119, -529, -719, -626, -192, -490, -905, -646, -279, -458,
    -886, -667, -369, -437, -819, -693, -438, -426, -726, -731, -476, -426,
    -608, -779, -484, -434, -474, -831, -465, -450, -339, -869, -423, -473,
    -220, -885, -365, -498, -128, -898, -298, -520, -78, -918, -230, -540, -173,
    -952, -173, -558, -271, -980, -143, -576, -217, -968, -133, -593, -197,
    -932, -128, -604, -212, -880, -126, -605, -263, -814, -128, -596, -347,
    -741, -138, -576, -459, -653, -160, -546, -588, -562, -197, -507, -719,
    -485, -248, -462, -900, -442, -313, -413, -1078, -443, -397, -370, -1077,
    -460, -488, -336, -1034, -481, -561, -314, -962, -509, -606, -304, -861,
    -544, -623, -304, -739, -580, -612, -312, -612, -620, -578, -326, -493,
    -751, -527, -348, -399, -903, -465, -386, -347, -995, -400, -442, -348,
    -1007, -341, -502, -341, -924, -295, -550, -355, -821, -262, -572, -396,
    -742, -243, -569, -462, -676, -238, -549, -550, -616, -249, -517, -654,
    -556, -274, -479, -765, -484, -314, -438, -873, -414, -366, -395, -999,
    -364, -427, -352, -1214, -360, -502, -312, -1282, -391, -595, -281, -1220,
    -424, -677, -263, -1137, -460, -729, -258, -1037, -503, -748, -262, -919,
    -552, -738, -276, -790, -601, -704, -295, -664, -660, -652, -320, -557,
    -751, -587, -351, -483, -845, -516, -390, -465, -910, -449, -436, -494,
    -927, -395, -482, -508, -886, -358, -519, -541, -836, -337, -540, -592,
    -784, -331, -546, -659, -725, -338, -537, -741, -659, -358, -517, -835,
    -584, -390, -489, -931, -500, -433, -453, -1021, -424, -485, -411, -1102,
    -372, -541, -366, -1242, -361, -603, -324, -1299, -380, -674, -290, -1259,
    -402, -736, -267, -1202, -439, -776, -257, -1122, -489, -791, -257, -1022,
    -548, -784, -269, -908, -608, -756, -289, -792, -659, -711, -316, -689,
    -702, -654, -347, -610, -737, -590, -378, -614, -766, -527, -407, -729,
    -783, -481, -434, -707, -773, -459, -456, -666, -740, -446, -469, -658,
    -689, -436, -473, -681, -624, -429, -465, -734, -549, -428, -447, -812,
    -468, -437, -418, -907, -400, -459, -382, -1007, -352, -495, -342, -1121,
    -326, -543, -304, -1277, -322, -606, -270, -1306, -320, -680, -244, -1276,
    -332, -744, -226, -1222, -370, -786, -216, -1142, -424, -803, -217, -1038,
    -489, -796, -228, -919, -557, -768, -249, -800, -645, -722, -279, -695,
    -733, -664, -318, -620, -796, -598, -363, -663, -823, -536, -408, -745,
    -806, -493, -446, -687, -761, -470, -472, -650, -715, -452, -482, -646,
    -665, -437, -479, -674, -608, -427, -465, -732, -546, -425, -443, -814,
    -467, -434, -413, -911, -386, -457, -377, -1008, -322, -494, -336, -1146,
    -296, -543, -294, -1279, -319, -610, -258, -1270, -356, -683, -235, -1229,
    -395, -739, -224, -1161, -440, -771, -226, -1064, -491, -779, -237, -946,
    -533, -762, -256, -817, -556, -725, -278, -692, -633, -671, -302, -585,
    -740, -605, -334, -521, -834, -534, -375, -503, -889, -468, -422, -477,
    -846, -413, -467, -478, -783, -370, -495, -506, -721, -341, -504, -560,
    -655, -327, -497, -636, -586, -329, -477, -728, -507, -346, -447, -826,
    -408, -378, -408, -919, -311, -421, -362, -1058, -243, -475, -311, -1254,
    -227, -547, -262, -1268, -256, -632, -221, -1182, -291, -701, -195, -1080,
    -327, -736, -183, -958, -368, -740, -184, -818, -413, -716, -194, -670,
    -460, -668, -211, -530, -495, -602, -233, -416, -517, -525, -257, -338,
    -533, -444, -279, -319, -545, -369, -298, -334, -552, -309, -314, -332,
    -544, -266, -326, -350, -509, -239, -332, -385, -453, -225, -330, -438,
    -383, -225, -319, -510, -306, -236, -297, -595, -244, -258, -267, -687,
    -602, -292, -246, -780, -980, -335, -280, -866, -1036, -385, -364, -949,
    -861, -439, -448, -974, -556, -494, -488, -961, -260, -539, -469, -916,
    -169, -570, -405, -839, -213, -582, -328, -733, -330, -575, -266, -605,
    -470, -548, -235, -466, -602, -503, -238, -327, -727, -444, -270, -200,
    -828, -373, -322, -141, -907, -298, -384, -229, -970, -233, -448, -174,
    -983, -190, -506, -81, -973, -154, -552, -41, -952, -120, -583, -46, -922,
    -89, -599, -93, -885, -67, -603, -177, -836, -60, -596, -289, -788, -70,
    -580, -414, -759, -98, -559, -548, -756, -143, -536, -780, -783, -207, -518,
    -871, -812, -292, -508, -820, -816, -372, -506, -733, -837, -427, -508,
    -608, -870, -451, -515, -451, -911, -443, -527, -279, -952, -405, -544,
    -113, -989, -344, -565, 30, -1028, -266, -588, 139, -1062, -180, -613, 159,
    -1087, -96, -638, 39, -1102, -32, -662, 73, -1082, 4, -681, 139, -1047, 28,
    -691, 166, -1004, 50, -691, 157, -953, 67, -682, 113, -898, 79, -664, 34,
    -841, 79, -639, -72, -794, 65, -609, -194, -764, 35, -578, -334, -748, -9,
    -548, -587, -752, -73, -523, -668, -755, -157, -505, -606, -759, -236, -493,
    -506, -784, -290, -487, -367, -822, -311, -488, -200, -869, -299, -497, -24,
    -905, -257, -512, 140, -935, -192, -532, 276, -976, -111, -554, 376, -1021,
    -23, -579, 381, -1063, 59, -605, 266, -1091, 119, -633, 309, -1063, 153,
    -657, 370, -1024, 175, -671, 392, -978, 195, -673, 380, -927, 212, -665,
    333, -871, 221, -647, 252, -811, 220, -622, 142, -736, 204, -591, 14, -651,
    173, -553, -252, -592, 122, -511, -543, -581, 39, -469, -530, -611, -63,
    -434, -410, -659, -149, -413, -264, -701, -196, -407, -96, -739, -204, -412,
    80, -777, -175, -426, 245, -814, -117, -445, 383, -845, -41, -467, 484,
    -879, 44, -491, 546, -920, 128, -514, 560, -956, 201, -539, 517, -977, 255,
    -564, 491, -967, 288, -585, 498, -919, 305, -599, 488, -867, 313, -600, 460,
    -811, 313, -591, 410, -751, 307, -572, 339, -690, 293, -545, 248, -626, 270,
    -513, 147, -584, 236, -477, 47, -579, 194, -443, -67, -592, 143, -416, -187,
    -609, 85, -397, -200, -615, 25, -388, -153, -602, -24, -383, -72, -619, -54,
    -381, 37, -660, -60, -383, 164, -713, -43, -392, 296, -770, -6, -408, 419,
    -833, 48, -432, 525, -910, 112, -462, 606, -978, 180, -500, 636, -1017, 245,
    -540, 624, -1019, 299, -578, 636, -982, 337, -606, 650, -940, 364, -621,
    634, -901, 383, -622, 592, -861, 392, -613, 525, -820, 389, -597, 434, -778,
    375, -576, 325, -720, 346, -551, 208, -659, 306, -521, 97, -615, 254, -489,
    -88, -610, 193, -458, -245, -646, 117, -433, -193, -685, 41, -420, -109,
    -720, -16, -419, 3, -761, -44, -426, 136, -805, -42, -441, 275, -851, -14,
    -462, 406, -894, 36, -487, 515, -928, 99, -514, 597, -952, 168, -540, 646,
    -968, 235, -565, 581, -980, 292, -585, 488, -983, 323, -602, 547, -966, 334,
    -614, 582, -933, 342, -619, 586, -888, 350, -616, 560, -833, 355, -604, 502,
    -772, 355, -584, 414, -712, 344, -557, 299, -655, 321, -526, 169, -607, 283,
    -491, 31, -573, 232, -457, -206, -557, 165, -425, -309, -555, 80, -399,
    -266, -566, -1, -379, -188, -590, -60, -368, -76, -625, -90, -365, 58, -665,
    -90, -371, 197, -705, -62, -383, 323, -660, -13, -398, 425, -568, 49, -404,
    500, -563, 116, -397, 549, -668, 180, -390, 572, -801, 236, -398, 572, -871,
    281, -426, 548, -843, 312, -460, 500, -791, 328, -485, 430, -722, 329, -496,
    339, -642, 316, -490, 231, -556, 288, -470, 114, -479, 247, -437, -2, -475,
    195, -400, -125, -498, 136, -367, -413, -509, 63, -345, -589, -489, -32,
    -330, -505, -415, -129, -318, -379, -371, -197, -301, -237, -386, -226,
    -282, -82, -439, -218, -269, 74, -510, -179, -267, 217, -589, -119, -279,
    333, -707, -45, -304, 410, -824, 34, -346, 442, -903, 106, -398, 343, -933,
    163, -454, 210, -910, 189, -502, 245, -855, 191, -533, 263, -810, 185, -546,
    253, -768, 179, -544, 212, -726, 171, -532, 138, -683, 158, -512, 32, -629,
    137, -488, -100, -573, 103, -460, -243, -528, 54, -430, -446, -511, -9,
    -399, -690, -535, -93, -373, -698, -570, -191, -357, -641, -605, -273, -352,
    -548, -645, -326, -357, -422, -688, -345, -369, -274, -732, -333, -388,
    -125, -775, -295, -411, 9, -842, -236, -437, 113, -925, -166, -469, 171,
    -993, -93, -508, 167, -1025, -28, -549, 169, -1005, 22, -586, 153, -958, 56,
    -610, 109, -910, 75, -619, 37, -857, 79, -614, -60, -798, 67, -598, -178,
    -733, 40, -574, -310, -661, -3, -542, -442, -602, -59, -505, -562, -562,
    -126, -466, -734, -544, -199, -430, -912, -552, -286, -399, -886, -554,
    -375, -378, -818, -570, -442, -364, -725, -607, -479, -359, -607, -657,
    -486, -363, -473, -714, -466, -376, -339, -761, -423, -397, -220, -794,
    -365, -422, -130, -821, -298, -448, -83, -848, -230, -473, -188, -877, -174,
    -496, -276, -892, -145, -518, -221, -874, -136, -536, -202, -836, -132,
    -545, -219, -783, -129, -545, -270, -719, -131, -534, -355, -646, -142,
    -513, -467, -553, -164, -483, -596, -456, -201, -443, -726, -374, -253,
    -396, -913, -333, -318, -347, -1082, -344, -403, -303, -1075, -372, -493,
    -270, -1031, -401, -565, -251, -958, -434, -608, -244, -856, -473, -623,
    -248, -734, -512, -611, -260, -606, -535, -576, -276, -489, -582, -525,
    -295, -396, -653, -462, -318, -347, -722, -397, -347, -351, -765, -339,
    -380, -343, -742, -293, -412, -358, -686, -261, -433, -400, -623, -243,
    -439, -467, -552, -239, -431, -555, -474, -250, -409, -659, -390, -277,
    -378, -769, -298, -317, -338, -875, -212, -369, -292, -1005, -146, -429,
    -243, -1220, -114, -505, -194, -1277, -117, -598, -153, -1213, -135, -679,
    -123, -1130, -168, -728, -105, -1030, -214, -746, -99, -913, -272, -735,
    -105, -785, -335, -700, -121, -661, -456, -648, -147, -558, -642, -583,
    -190, -489, -794, -514, -252, -476, -853, -448, -327, -504, -819, -396,
    -395, -517, -719, -360, -441, -549, -639, -341, -458, -599, -576, -335,
    -453, -665, -520, -343, -433, -747, -466, -363, -404, -840, -413, -395,
    -370, -936, -420, -438, -337, -1026, -460, -489, -312, -1108, -492, -545,
    -298, -1250, -504, -608, -295, -1298, -483, -678, -297, -1257, -457, -739,
    -297, -1197, -487, -778, -296, -1116, -551, -791, -300, -1014, -633, -782,
    -312, -898, -719, -753, -336, -780, -833, -707, -372, -675, -947, -648,
    -420, -597, -1029, -583, -478, -608, -1068, -520, -538, -721, -1064, -474,
    -590, -692, -1025, -452, -628, -652, -989, -438, -647, -646, -954, -428,
    -652, -671, -915, -421, -646, -727, -874, -420, -631, -809, -821, -431,
    -611, -908, -763, -454, -585, -1009, -713, -491, -555, -1128, -688, -541,
    -523, -1286, -705, -607, -495, -1306, -734, -683, -476, -1272, -762, -747,
    -468, -1215, -795, -787, -468, -1130, -831, -802, -477, -1022, -868, -793,
    -491, -900, -898, -763, -510, -778, -950, -715, -531, -673, -1022, -654,
    -557, -600, -1087, -587, -590, -582, -1122, -522, -626, -564, -1110, -467,
    -660, -563, -1070, -425, -684, -589, -1026, -395, -693, -641, -975, -381,
    -690, -714, -917, -382, -676, -802, -850, -399, -652, -897, -769, -429,
    -621, -988, -690, -472, -582, -1068, -632, -524, -539, -1187, -612, -581,
    -495, -1291, -629, -648, -459, -1260, -643, -713, -433, -1203, -666, -759,
    -419, -1123, -701, -779, -415, -1019, -746, -776, -420, -897, -788, -750,
    -433, -769, -815, -706, -452, -648, -849, -646, -473, -549, -891, -578,
    -495, -498, -936, -507, -520, -598, -977, -447, -546, -622, -967, -411,
    -571, -558, -932, -391, -589, -532, -885, -374, -596, -538, -827, -360,
    -592, -578, -761, -352, -576, -647, -689, -353, -551, -739, -645, -367,
    -518, -841, -641, -395, -485, -1007, -657, -438, -458, -1224, -673, -507,
    -440, -1251, -662, -595, -430, -1186, -626, -671, -422, -1099, -633, -716,
    -414, -984, -671, -729, -409, -845, -725, -713, -412, -694, -786, -672,
    -424, -547, -861, -611, -445, -424, -951, -536, -477, -337, -1025, -454,
    -517, -329, -1067, -377, -563, -467, -1076, -321, -605, -470, -1040, -293,
    -638, -415, -1001, -280, -656, -389, -963, -270, -659, -392, -923, -261,
    -653, -426, -881, -256, -638, -490, -835, -258, -617, -580, -780, -271,
    -592, -684, -730, -297, -563, -794, -697, -336, -532, -993, -701, -391,
    -503, -1071, -730, -465, -482, -1022, -757, -535, -471, -944, -788, -582,
    -470, -832, -822, -601, -476, -690, -859, -591, -489, -531, -891, -555,
    -506, -374, -922, -496, -526, -236, -981, -422, -548, -129, -1049, -340,
    -575, -85, -1101, -259, -608, -66, -1120, -189, -642, -42, -1085, -133,
    -671, -48, -1041, -92, -687, -82, -993, -65, -689, -142, -939, -54, -679,
    -226, -879, -59, -660, -327, -810, -79, -633, -435, -747, -113, -599, -537,
    -700, -160, -561, -640, -675, -214, -524, -837, -678, -278, -492, -881,
    -686, -354, -468, -801, -687, -420, -452, -695, -709, -457, -443, -559,
    -747, -464, -442, -401, -795, -442, -449, -234, -845, -393, -464, -76, -888,
    -325, -485, 56, -927, -244, -511, 154, -960, -158, -537, 158, -987, -77,
    -564, 35, -1004, -18, -588, 73, -992, 14, -609, 135, -962, 34, -621, 159,
    -919, 52, -624, 148, -866, 68, -617, 102, -807, 77, -601, 22, -741, 75,
    -577, -86, -672, 60, -546, -209, -610, 29, -509, -355, -568, -17, -471,
    -606, -558, -82, -435, -672, -572, -167, -406, -608, -592, -245, -386, -507,
    -622, -297, -377, -368, -660, -316, -377, -202, -703, -303, -386, -28, -722,
    -260, -401, 133, -703, -194, -417, 265, -692, -114, -427, 361, -722, -27,
    -434, 394, -792, 54, -444, 414, -860, 122, -461, 432, -858, 174, -484, 422,
    -826, 212, -504, 385, -773, 235, -514, 323, -704, 243, -511, 236, -625, 236,
    -495, 130, -537, 213, -468, 15, -478, 177, -432, -99, -468, 128, -393, -349,
    -478, 66, -360, -584, -481, -20, -336, -523, -463, -117, -319, -376, -420,
    -188, -306, -215, -421, -218, -292, -44, -456, -210, -283, 127, -511, -168,
    -281, 283, -573, -101, -290, 410, -641, -20, -309, 502, -749, 66, -337, 558,
    -857, 148, -379, 557, -927, 217, -429, 420, -946, 264, -481, 392, -901, 280,
    -523, 447, -833, 282, -546, 476, -782, 284, -551, 480, -739, 287, -541, 456,
    -701, 290, -523, 401, -665, 288, -501, 316, -625, 278, -476, 209, -572, 256,
    -449, 91, -516, 220, -420, -94, -486, 171, -390, -317, -502, 101, -363,
    -296, -551, 20, -345, -213, -608, -46, -340, -96, -660, -84, -348, 47, -711,
    -90, -365, 201, -760, -65, -390, 347, -807, -16, -418, 472, -852, 50, -448,
    568, -908, 125, -480, 631, -964, 200, -514, 639, -1005, 266, -548, 610,
    -1015, 315, -581, 610, -983, 347, -607, 615, -934, 366, -620, 596, -885,
    377, -620, 553, -833, 379, -608, 488, -779, 372, -588, 400, -722, 355, -561,
    295, -646, 325, -529, 183, -588, 284, -493, 77, -563, 234, -455, -27, -572,
    177, -422, -122, -607, 116, -399, -125, -628, 57, -388, -85, -635, 10, -385,
    -11, -665, -17, -387, 91, -710, -22, -396, 211, -762, -6, -411, 334, -814,
    29, -432, 450, -860, 80, -458, 548, -897, 141, -486, 617, -921, 205, -515,
    627, -932, 264, -540, 620, -928, 311, -561, 640, -908, 344, -575, 640, -873,
    368, -580, 609, -826, 383, -577, 551, -770, 387, -564, 468, -707, 378, -544,
    362, -643, 356, -516, 242, -581, 320, -483, 119, -527, 271, -447, 7, -484,
    212, -410, -79, -456, 148, -375, -133, -447, 85, -345, -147, -455, 29, -321,
    -124, -480, -14, -306, -66, -519, -41, -300, 21, -568, -48, -304, 126, -614,
    -37, -317, 238, -426, -7, -329, 348, -375, 36, -319, 446, -601, 90, -308,
    523, -807, 149, -325, 573, -907, 206, -371, 593, -896, 258, -429, 582, -787,
    299, -473, 540, -677, 326, -492, 469, -571, 336, -484, 373, -469, 329, -455,
    259, -373, 305, -412, 136, -268, 266, -359, 13, -168, 214, -300, -123, -93,
    152, -239, -436, -60, 75, -181, -630, -74, -28, -132, -538, -100, -134, -98,
    -392, -130, -207, -79, -235, -171, -237, -73, -70, -222, -227, -79, 94,
    -280, -185, -94, 244, -370, -119, -117, 363, -551, -40, -153, 441, -738, 43,
    -210, 464, -847, 120, -286, 425, -851, 179, -363, 399, -752, 217, -423, 361,
    -652, 237, -452, 306, -577, 241, -453, 232, -511, 231, -436, 138, -449, 208,
    -406, 22, -387, 173, -370, -109, -374, 126, -332, -245, -409, 68, -300,
    -375, -443, 0, -281, -609, -458, -78, -273, -776, -448, -173, -272, -723,
    -407, -267, -271, -638, -426, -336, -268, -522, -488, -370, -269, -377,
    -573, -371, -279, -216, -666, -342, -301, -57, -768, -288, -336, 81, -872,
    -217, -381, 185, -954, -137, -436, 205, -1006, -58, -492, 42, -1030, 1,
    -545, 32, -1012, 27, -587, 94, -982, 39, -615, 110, -944, 48, -628, 82,
    -897, 54, -627, 9, -842, 54, -616, -107, -771, 41, -595, -259, -684, 11,
    -565, -432, -602, -38, -526, -622, -548, -107, -483, -926, -548, -199, -440,
    -1035, -582, -318, -407, -1001, -612, -429, -388, -930, -648, -510, -381,
    -818, -690, -552, -384, -669, -737, -558, -397, -498, -778, -531, -416,
    -329, -826, -477, -440, -184, -897, -402, -468, -82, -971, -318, -502, -64,
    -1023, -235, -540, -60, -1032, -167, -579, -65, -992, -116, -608, -109,
    -940, -84, -624, -189, -875, -71, -624, -302, -797, -78, -610, -442, -706,
    -106, -583, -596, -583, -153, -544, -749, -446, -219, -493, -885, -326,
    -298, -430, -1046, -260, -386, -362, -1236, -271, -486, -299, -1232, -309,
    -591, -252, -1172, -345, -670, -224, -1086, -387, -715, -212, -970, -437,
    -727, -214, -829, -488, -709, -228, -677, -553, -666, -249, -530, -749,
    -603, -283, -410, -946, -527, -340, -342, -1045, -445, -418, -349, -1046,
    -372, -498, -347, -948, -314, -559, -369, -828, -274, -587, -423, -737,
    -252, -584, -507, -660, -248, -560, -617, -588, -263, -522, -745, -515,
    -297, -478, -878, -434, -348, -430, -1003, -359, -414, -380, -1154, -310,
    -490, -330, -1382, -308, -584, -285, -1448, -340, -697, -252, -1382, -372,
    -795, -232, -1291, -418, -853, -226, -1178, -477, -872, -232, -1040, -546,
    -858, -249, -885, -615, -817, -275, -728, -672, -754, -308, -595, -716,
    -674, -344, -506, -749, -586, -379, -500, -773, -503, -412, -539, -785,
    -436, -439, -566, -770, -392, -460, -619, -724, -370, -472, -691, -652,
    -367, -472, -779, -560, -382, -458, -881, -456, -412, -430, -990, -432,
    -457, -391, -1099, -606, -514, -360, -1194, -731, -579, -357, -1279, -699,
    -648, -374, -1346, -558, -718, -388, -1362, -370, -782, -380, -1354, -273,
    -831, -347, -1322, -277, -864, -302, -1266, -344, -879, -263, -1184, -443,
    -875, -242, -1080, -544, -853, -244, -962, -640, -815, -266, -841, -723,
    -762, -303, -742, -790, -699, -349, -795, -844, -634, -397, -848, -869,
    -588, -443, -746, -855, -556, -481, -693, -819, -526, -507, -693, -765,
    -498, -517, -741, -697, -478, -514, -829, -616, -471, -496, -943, -549,
    -484, -468, -1066, -507, -517, -433, -1183, -487, -569, -398, -1351, -488,
    -638, -367, -1453, -493, -727, -344, -1437, -488, -813, -328, -1398, -520,
    -876, -318, -1332, -578, -910, -318, -1234, -651, -916, -329, -1110, -729,
    -898, -351, -970, -831, -857, -384, -833, -935, -797, -428, -721, -1013,
    -724, -481, -703, -1051, -647, -536, -831, -1048, -584, -585, -801, -1005,
    -548, -619, -741, -957, -524, -636, -724, -905, -504, -637, -747, -845,
    -488, -626, -806, -778, -482, -603, -897, -703, -488, -572, -1006, -628,
    -511, -535, -1117, -567, -551, -493, -1249, -536, -607, -451, -1409, -549,
    -681, -413, -1424, -574, -767, -387, -1390, -610, -837, -373, -1328, -658,
    -880, -371, -1234, -716, -895, -380, -1109, -767, -883, -400, -961, -803,
    -847, -424, -807, -900, -789, -453, -669, -1017, -715, -493, -576, -1104,
    -631, -543, -550, -1148, -548, -598, -518, -1109, -477, -647, -515, -1049,
    -421, -678, -549, -989, -382, -688, -614, -924, -361, -681, -707, -853,
    -361, -660, -818, -770, -381, -629, -935, -694, -420, -589, -1043, -643,
    -473, -544, -1201, -622, -539, -501, -1407, -636, -627, -464, -1431, -648,
    -730, -439, -1342, -642, -812, -422, -1230, -668, -854, -414, -1091, -718,
    -858, -413, -924, -782, -830, -423, -739, -849, -773, -443, -557, -904,
    -694, -471, -405, -948, -598, -504, -303, -985, -495, -538, -317, -1017,
    -398, -570, -507, -1045, -330, -600, -511, -1042, -301, -627, -459, -1012,
    -291, -645, -439, -963, -285, -652, -452, -899, -281, -646, -500, -824,
    -282, -629, -584, -732, -290, -601, -695, -630, -312, -562, -817, -537,
    -349, -514, -961, -476, -400, -461, -1184, -471, -473, -411, -1225, -497,
    -564, -370, -1170, -525, -644, -345, -1079, -563, -693, -333, -947, -611,
    -709, -333, -776, -664, -692, -345, -582, -732, -645, -365, -387, -889,
    -572, -397, -216, -1062, -480, -450, -95, -1164, -378, -522, -61, -1176,
    -278, -597, -30, -1102, -194, -656, -11, -1002, -128, -686, -30, -923, -80,
    -688, -82, -853, -52, -669, -167, -787, -43, -638, -280, -719, -55, -599,
    -412, -641, -86, -555, -546, -561, -134, -508, -667, -500, -196, -459, -848,
    -481, -268, -413, -1048, -515, -358, -375, -998, -557, -453, -352, -890,
    -603, -520, -344, -746, -657, -550, -349, -564, -717, -542, -365, -356,
    -777, -499, -390, -145, -843, -427, -421, 45, -959, -333, -459, 195, -1078,
    -225, -509, 282, -1151, -116, -569, 298, -1169, -19, -628, 328, -1122, 58,
    -675, 329, -1061, 115, -702, 295, -1003, 153, -708, 229, -943, 171, -697,
    131, -878, 170, -675, 5, -806, 149, -644, -137, -766, 110, -607, -278, -767,
    54, -570, -409, -776, -14, -541, -662, -787, -94, -521, -810, -781, -193,
    -509, -713, -743, -288, -500, -578, -754, -350, -492, -402, -801, -370,
    -488, -193, -866, -350, -492, 27, -924, -294, -508, 234, -974, -209, -532,
    408, -1040, -105, -562, 536, -1106, 7, -597, 569, -1164, 114, -637, 421,
    -1205, 194, -679, 438, -1183, 238, -716, 515, -1144, 265, -740, 545, -1098,
    287, -749, 533, -1046, 306, -745, 479, -988, 316, -730, 383, -924, 314,
    -705, 247, -847, 295, -673, 86, -772, 257, -634, -246, -729, 195, -591,
    -648, -732, 91, -551, -663, -761, -45, -520, -498, -792, -161, -502, -302,
    -823, -227, -497, -78, -856, -238, -501, 154, -891, -201, -512, 371, -924,
    -125, -528, 550, -963, -24, -548, 678, -1050, 90, -573, 756, -1151, 200,
    -607, 767, -1223, 296, -652, 739, -1241, 367, -701, 731, -1191, 413, -740,
    705, -1123, 439, -761, 664, -1063, 449, -762, 604, -1004, 446, -748, 521,
    -943, 430, -723, 417, -881, 401, -690, 295, -815, 361, -652, 170, -770, 309,
    -612, 52, -744, 248, -573, -181, -746, 178, -539, -381, -767, 89, -514,
    -284, -773, -2, -500, -147, -791, -65, -493, 20, -831, -89, -493, 207, -884,
    -73, -502, 396, -942, -24, -520, 566, -999, 51, -545, 702, -1051, 142, -575,
    800, -1096, 238, -609, 854, -1131, 329, -644, 768, -1157, 401, -676, 663,
    -1162, 440, -704, 735, -1140, 455, -725, 776, -1105, 464, -736, 782, -1059,
    473, -736, 754, -1004, 480, -725, 690, -944, 480, -705, 588, -870, 469,
    -678, 452, -773, 442, -642, 294, -674, 398, -597, 107, -601, 336, -547,
    -207, -596, 253, -496, -278, -650, 147, -456, -206, -708, 49, -434, -88,
    -762, -18, -429, 70, -810, -45, -439, 252, -858, -34, -459, 432, -905, 11,
    -485, 589, -947, 83, -515, 710, -974, 168, -545, 793, -992, 258, -572, 815,
    -1003, 340, -596, 817, -1005, 404, -615, 824, -992, 451, -628, 766, -959,
    481, -635, 714, -906, 491, -632, 665, -836, 486, -619, 586, -756, 470, -596,
    482, -672, 442, -563, 359, -626, 402, -524, 227, -661, 349, -486, 100, -722,
    287, -461, -32, -754, 218, -451, -162, -730, 142, -452, -180, -653, 68,
    -451, -144, -629, 7, -442, -63, -663, -32, -432, 57, -727, -45, -428, 201,
    -803, -30, -435, 351, -828, 9, -453, 489, -840, 68, -474, 606, -880, 139,
    -495, 696, -946, 215, -518, 640, -1026, 285, -547, 572, -1071, 330, -583,
    650, -1041, 357, -617, 677, -1001, 378, -639, 662, -953, 395, -647, 607,
    -900, 404, -642, 512, -841, 400, -627, 379, -763, 380, -602, 216, -680, 341,
    -568, 20, -614, 283, -528, -400, -595, 197, -486, -705, -623, 68, -450,
    -648, -648, -78, -426, -498, -669, -190, -414, -317, -699, -250, -412, -111,
    -736, -257, -418, 105, -778, -219, -430, 305, -824, -146, -449, 466, -906,
    -50, -473, 573, -999, 54, -506, 612, -1071, 154, -549, 574, -1098, 234,
    -594, 544, -1063, 287, -633, 497, -1007, 316, -657, 427, -950, 324, -663,
    335, -886, 314, -654, 216, -814, 287, -632, 73, -732, 245, -601, -87, -654,
    186, -561, -249, -594, 114, -517, -400, -552, 31, -472, -655, -538, -62,
    -431, -849, -546, -173, -398, -787, -542, -283, -375, -686, -568, -362,
    -360, -548, -620, -400, -355, -379, -688, -400, -362, -193, -758, -365,
    -381, -15, -801, -301, -408, 135, -829, -219, -439, 243, -857, -128, -468,
    267, -895, -39, -496, 88, -946, 27, -523, 58, -961, 55, -550, 119, -935, 66,
    -572, 130, -884, 72, -584, 94, -814, 75, -583, 13, -731, 70, -568, -112,
    -634, 53, -540, -272, -571, 18, -502, -449, -548, -36, -460, -638, -548,
    -109, -423, -936, -558, -205, -394, -1055, -544, -325, -374, -1021, -516,
    -439, -359, -949, -535, -521, -347, -835, -585, -564, -342, -682, -652,
    -570, -347, -508, -724, -542, -364, -335, -822, -487, -391, -188, -925,
    -411, -431, -83, -999, -325, -480, -115, -1035, -241, -532, -286, -1029,
    -184, -578, -247, -977, -159, -610, -200, -925, -146, -624, -202, -871,
    -137, -622, -249, -812, -133, -608, -340, -750, -138, -584, -470, -675,
    -158, -552, -625, -595, -197, -515, -784, -529, -255, -472, -975, -497,
    -330, -429, -1206, -520, -429, -391, -1236, -557, -541, -366, -1198, -595,
    -636, -354, -1126, -640, -697, -354, -1019, -692, -724, -366, -879, -741,
    -718, -385, -724, -766, -684, -409, -571, -869, -627, -436, -440, -1011,
    -553, -475, -358, -1116, -471, -529, -354, -1162, -394, -590, -345, -1121,
    -332, -645, -362, -1039, -286, -679, -413, -966, -258, -688, -495, -895,
    -250, -678, -605, -823, -262, -653, -733, -742, -293, -618, -869, -645,
    -342, -574, -996, -549, -407, -524, -1143, -480, -483, -469, -1373, -470,
    -577, -417, -1449, -501, -691, -375, -1386, -527, -790, -348, -1296, -559,
    -850, -335, -1183, -603, -871, -334, -1047, -655, -859, -344, -891, -709,
    -819, -363, -733, -798, -757, -389, -594, -924, -677, -426, -500, -1037,
    -589, -477, -487, -1100, -504, -537, -527, -1099, -435, -594, -556, -1038,
    -389, -636, -609, -981, -365, -657, -681, -923, -361, -659, -770, -860,
    -376, -645, -873, -790, -406, -621, -984, -716, -451, -587, -1092, -669,
    -508, -548, -1187, -639, -573, -509, -1283, -621, -643, -474, -1425, -623,
    -720, -445, -1442, -611, -801, -423, -1399, -616, -865, -408, -1335, -658,
    -902, -399, -1246, -724, -912, -401, -1130, -800, -897, -415, -996, -865,
    -860, -441, -860, -922, -805, -474, -739, -975, -735, -511, -659, -1022,
    -658, -549, -736, -1065, -585, -586, -836, -1085, -539, -622, -770, -1064,
    -516, -650, -736, -1024, -500, -667, -743, -968, -488, -671, -788, -900,
    -482, -662, -867, -816, -485, -640, -971, -715, -504, -607, -1086, -615,
    -539, -563, -1196, -539, -589, -512, -1356, -513, -655, -459, -1461, -536,
    -740, -414, -1445, -558, -824, -383, -1405, -589, -885, -365, -1338, -630,
    -917, -361, -1241, -678, -923, -367, -1116, -727, -904, -383, -974, -787,
    -863, -405, -835, -865, -802, -435, -720, -942, -728, -471, -671, -991,
    -649, -513, -658, -995, -577, -553, -641, -954, -517, -583, -659, -902,
    -473, -598, -709, -837, -447, -599, -786, -759, -439, -584, -883, -669,
    -451, -557, -991, -571, -481, -519, -1096, -472, -528, -472, -1188, -387,
    -585, -419, -1289, -330, -650, -364, -1425, -315, -724, -313, -1428, -324,
    -803, -272, -1378, -353, -863, -244, -1306, -403, -895, -230, -1206, -469,
    -900, -231, -1078, -535, -880, -245, -932, -577, -837, -268, -783, -654,
    -775, -298, -652, -757, -699, -334, -565, -850, -615, -379, -547, -911,
    -534, -430, -520, -895, -466, -478, -519, -844, -413, -512, -552, -782,
    -377, -528, -617, -709, -359, -526, -708, -626, -361, -508, -817, -534,
    -382, -478, -932, -480, -420, -439, -1039, -468, -473, -398, -1191, -473,
    -538, -363, -1401, -479, -624, -337, -1434, -459, -726, -319, -1349, -421,
    -810, -305, -1239, -441, -854, -292, -1102, -503, -860, -286, -937, -588,
    -833, -292, -754, -680, -779, -312, -573, -792, -701, -346, -419, -913,
    -606, -393, -314, -1007, -503, -452, -318, -1059, -407, -515, -506, -1070,
    -337, -572, -519, -1032, -306, -616, -464, -989, -295, -640, -441, -943,
    -289, -648, -450, -893, -284, -642, -495, -838, -283, -625, -576, -774,
    -291, -600, -685, -706, -311, -568, -807, -647, -346, -532, -946, -615,
    -396, -494, -1173, -631, -467, -460, -1224, -666, -558, -437, -1168, -701,
    -638, -426, -1078, -745, -689, -426, -946, -796, -706, -436, -774, -849,
    -690, -455, -578, -892, -643, -481, -382, -944, -570, -509, -211, -1015,
    -478, -541, -86, -1085, -375, -578, -48, -1134, -275, -619, -16, -1141,
    -189, -659, 4, -1103, -122, -689, -14, -1057, -73, -704, -67, -1001, -44,
    -705, -153, -934, -34, -693, -267, -858, -46, -669, -400, -770, -77, -635,
    -535, -697, -126, -593, -657, -645, -188, -548, -829, -624, -260, -503,
    -1035, -636, -349, -466, -997, -635, -444, -440, -894, -650, -513, -422,
    -754, -689, -545, -414, -576, -745, -540, -417, -370, -809, -501, -431,
    -159, -869, -431, -454, 32, -925, -338, -484, 184, -974, -232, -518, 274,
    -1012, -123, -553, 162, -1039, -30, -587, 83, -1041, 27, -616, 186, -1012,
    58, -637, 238, -967, 83, -647, 245, -908, 105, -644, 208, -838, 121, -630,
    126, -760, 126, -604, 4, -693, 115, -570, -144, -652, 86, -532, -304, -630,
    37, -494, -590, -628, -34, -461, -798, -630, -134, -436, -744, -621, -241,
    -419, -641, -645, -321, -407, -486, -695, -362, -405, -286, -759, -361,
    -412, -63, -819, -321, -430, 154, -872, -247, -456, 339, -936, -150, -488,
    479, -999, -40, -524, 527, -1050, 68, -563, 385, -1083, 153, -601, 397,
    -1060, 202, -635, 483, -1017, 233, -656, 520, -965, 259, -663, 513, -903,
    281, -656, 463, -836, 296, -637, 371, -763, 297, -609, 240, -682, 282, -572,
    83, -608, 246, -530, -234, -561, 188, -485, -646, -556, 87, -443, -678,
    -577, -46, -410, -517, -611, -163, -390, -324, -651, -231, -382, -103, -697,
    -245, -386, 129, -746, -211, -399, 347, -795, -137, -420, 527, -844, -37,
    -445, 658, -919, 75, -475, 736, -1001, 186, -512, 748, -1063, 282, -554,
    719, -1082, 353, -597, 712, -1047, 400, -632, 689, -991, 426, -652, 650,
    -935, 437, -656, 592, -874, 434, -645, 511, -807, 419, -623, 409, -738, 392,
    -593, 289, -669, 353, -556, 164, -617, 302, -516, 46, -584, 242, -476, -177,
    -574, 173, -440, -391, -584, 86, -411, -302, -591, -6, -392, -168, -614,
    -70, -382, -4, -660, -96, -380, 181, -720, -83, -388, 369, -786, -36, -406,
    539, -851, 37, -433, 676, -896, 127, -466, 775, -923, 222, -499, 830, -942,
    312, -531, 752, -961, 385, -557, 638, -976, 424, -579, 709, -971, 439, -597,
    754, -941, 449, -608, 763, -890, 458, -610, 738, -825, 466, -601, 677, -751,
    467, -582, 578, -669, 457, -552, 446, -577, 432, -514, 292, -492, 390, -469,
    113, -433, 330, -421, -200, -417, 249, -373, -289, -440, 145, -335, -222,
    -473, 47, -310, -108, -515, -21, -299, 47, -565, -52, -301, 227, -620, -43,
    -313, 407, -676, 1, -334, 565, -728, 70, -362, 689, -769, 155, -392, 775,
    -797, 243, -423, 800, -808, 325, -451, 801, -803, 391, -473, 813, -778, 439,
    -488, 799, -736, 471, -493, 758, -677, 489, -488, 690, -605, 493, -473, 594,
    -524, 481, -448, 473, -441, 453, -413, 334, -498, 409, -375, 191, -766, 351,
    -359, 56, -881, 282, -382, -54, -796, 206, -422, -126, -597, 130, -445,
    -153, -385, 61, -434, -132, -298, 6, -393, -66, -323, -30, -340, 38, -411,
    -42, -297, 169, -527, -31, -277, 309, -529, 3, -279, 445, -438, 56, -286,
    569, -461, 122, -287, 671, -615, 195, -293, 635, -807, 266, -320, 566, -942,
    314, -373, 651, -957, 344, -438, 684, -923, 370, -495, 671, -858, 391, -533,
    615, -773, 403, -547, 520, -676, 402, -539, 387, -589, 383, -513, 226, -551,
    345, -476, 25, -542, 288, -438, -572, -553, 195, -405, -867, -546, 41, -382,
    -722, -484, -127, -363, -514, -460, -246, -344, -296, -489, -298, -327, -69,
    -551, -291, -319, 158, -629, -237, -323, 367, -726, -148, -342, 536, -847,
    -37, -375, 644, -952, 79, -424, 670, -1016, 187, -481, 486, -1039, 267,
    -537, 320, -1008, 297, -583, 339, -960, 293, -612, 335, -911, 277, -622,
    307, -856, 257, -617, 250, -795, 236, -601, 153, -723, 210, -575, 14, -641,
    174, -541, -156, -565, 124, -500, -348, -516, 58, -457, -701, -518, -32,
    -415, -896, -556, -154, -384, -854, -589, -279, -366, -769, -634, -374,
    -361, -632, -688, -426, -368, -449, -749, -435, -385, -238, -817, -405,
    -411, -27, -930, -341, -446, 154, -1059, -251, -493, 282, -1155, -149, -553,
    307, -1194, -48, -618, 311, -1170, 36, -674, 313, -1114, 98, -710, 271,
    -1061, 138, -725, 188, -1002, 157, -723, 64, -933, 153, -706, -99, -853,
    126, -678, -289, -755, 74, -640, -486, -658, 1, -593, -668, -582, -91, -540,
    -905, -551, -197, -487, -1163, -572, -326, -441, -1152, -591, -462, -408,
    -1076, -625, -566, -390, -961, -681, -625, -385, -805, -751, -641, -394,
    -613, -827, -619, -415, -408, -887, -564, -447, -217, -934, -482, -484, -67,
    -978, -383, -521, -1, -1021, -280, -558, -199, -1064, -194, -593, -285,
    -1074, -152, -626, -197, -1045, -136, -651, -172, -989, -126, -663, -205,
    -910, -119, -661, -294, -815, -121, -643, -434, -692, -138, -610, -611,
    -550, -176, -562, -800, -416, -236, -500, -990, -320, -319, -429, -1267,
    -296, -427, -359, -1373, -324, -561, -301, -1345, -355, -683, -260, -1288,
    -399, -768, -239, -1190, -456, -812, -234, -1050, -521, -819, -244, -879,
    -554, -793, -264, -696, -581, -738, -288, -530, -638, -661, -313, -410,
    -723, -568, -343, -392, -810, -475, -379, -385, -839, -396, -420, -389,
    -799, -336, -456, -439, -732, -297, -477, -527, -638, -280, -479, -649,
    -523, -287, -463, -793, -390, -317, -428, -945, -293, -371, -378, -1087,
    -244, -443, -321, -1236, -209, -528, -267, -1471, -173, -633, -220, -1546,
    -123, -761, -179, -1496, -57, -871, -141, -1420, -64, -937, -107, -1318,
    -129, -963, -84, -1185, -231, -955, -77, -1024, -353, -918, -91, -850, -523,
    -857, -126, -692, -700, -775, -184, -578, -830, -680, -260, -579, -895,
    -585, -343, -798, -897, -515, -419, -838, -845, -487, -474, -794, -791,
    -483, -506, -789, -730, -485, -515, -821, -660, -490, -507, -891, -577,
    -500, -485, -993, -473, -522, -451, -1114, -364, -558, -406, -1235, -276,
    -610, -353, -1373, -235, -677, -298, -1531, -265, -765, -250, -1551, -311,
    -864, -216, -1524, -365, -943, -201, -1474, -434, -991, -202, -1394, -515,
    -1010, -218, -1279, -600, -1002, -246, -1134, -709, -970, -286, -977, -843,
    -915, -336, -833, -964, -842, -399, -749, -1038, -756, -469, -741, -1052,
    -672, -535, -718, -1008, -600, -586, -731, -955, -545, -616, -784, -890,
    -510, -625, -869, -811, -496, -616, -978, -717, -506, -591, -1099, -606,
    -539, -554, -1216, -501, -591, -505, -1318, -416, -658, -448, -1410, -362,
    -733, -390, -1544, -356, -816, -337, -1570, -362, -905, -295, -1534, -386,
    -975, -267, -1479, -444, -1015, -253, -1397, -527, -1028, -254, -1283, -622,
    -1015, -272, -1141, -692, -980, -304, -987, -728, -923, -342, -842, -760,
    -849, -380, -741, -804, -762, -416, -831, -866, -678, -449, -941, -914,
    -621, -484, -858, -902, -591, -516, -811, -850, -569, -538, -812, -764,
    -551, -544, -858, -655, -539, -532, -943, -523, -539, -502, -1054, -378,
    -556, -455, -1175, -245, -593, -392, -1290, -146, -647, -321, -1462, -100,
    -720, -250, -1545, -103, -814, -188, -1524, -126, -902, -141, -1482, -174,
    -962, -113, -1409, -244, -992, -103, -1300, -324, -994, -111, -1155, -372,
    -969, -132, -986, -504, -920, -163, -818, -676, -848, -210, -681, -802,
    -760, -274, -633, -861, -665, -345, -599, -824, -578, -410, -577, -731,
    -506, -453, -601, -639, -451, -468, -664, -542, -418, -459, -761, -436,
    -409, -431, -882, -322, -423, -388, -1011, -247, -461, -335, -1133, -223,
    -517, -280, -1303, -223, -589, -233, -1572, -239, -694, -197, -1595, -224,
    -830, -174, -1503, -183, -934, -157, -1378, -210, -985, -143, -1224, -291,
    -989, -138, -1037, -402, -957, -148, -820, -523, -893, -175, -591, -681,
    -800, -219, -386, -859, -684, -283, -249, -991, -556, -364, -251, -1056,
    -431, -451, -514, -1064, -340, -529, -593, -1008, -304, -587, -557, -950,
    -300, -619, -546, -892, -307, -628, -560, -830, -317, -619, -607, -762,
    -328, -597, -692, -680, -346, -566, -806, -594, -374, -526, -935, -522,
    -416, -481, -1084, -488, -473, -434, -1340, -521, -554, -393, -1393, -574,
    -661, -367, -1324, -622, -753, -357, -1219, -682, -808, -361, -1063, -750,
    -823, -378, -854, -821, -799, -406, -610, -885, -741, -441, -363, -937,
    -650, -480, -152, -978, -534, -519, -15, -1008, -405, -557, 9, -1026, -281,
    -590, 38, -1020, -178, -616, 42, -986, -100, -633, 1, -925, -47, -638, -78,
    -839, -20, -629, -193, -735, -19, -606, -337, -622, -41, -568, -496, -738,
    -87, -525, -653, -947, -152, -506, -793, -997, -231, -520, -937, -898, -319,
    -545, -1002, -717, -411, -554, -991, -527, -490, -532, -934, -471, -546,
    -487, -826, -510, -573, -436, -667, -603, -570, -397, -465, -712, -537,
    -383, -239, -821, -473, -394, -11, -922, -384, -426, 192, -1002, -274, -473,
    274, -1064, -155, -527, 128, -1110, -54, -581, 224, -1103, 12, -629, 368,
    -1072, 67, -662, 428, -1025, 121, -680, 418, -963, 169, -682, 344, -888,
    202, -669, 210, -783, 212, -643, 30, -673, 196, -603, -176, -590, 151, -553,
    -441, -563, 77, -499, -829, -608, -33, -453, -882, -649, -174, -424, -794,
    -685, -299, -411, -644, -735, -379, -411, -430, -797, -408, -424, -166,
    -859, -386, -446, 108, -890, -319, -475, 355, -907, -215, -505, 547, -938,
    -87, -531, 663, -989, 48, -557, 554, -1053, 167, -585, 451, -1077, 241,
    -615, 571, -1050, 283, -642, 633, -993, 316, -657, 643, -912, 344, -658,
    603, -813, 365, -641, 512, -702, 373, -609, 372, -599, 362, -564, 192, -531,
    328, -511, -211, -498, 267, -456, -881, -499, 144, -409, -918, -491, -43,
    -372, -680, -477, -210, -345, -408, -501, -304, -327, -115, -558, -323,
    -319, 181, -635, -276, -324, 457, -719, -178, -344, 685, -805, -46, -375,
    847, -917, 103, -417, 937, -1018, 248, -470, 943, -1079, 372, -529, 743,
    -1098, 455, -586, 622, -1064, 484, -630, 672, -1001, 482, -656, 699, -939,
    472, -663, 705, -873, 463, -652, 679, -804, 455, -629, 614, -733, 445, -597,
    505, -658, 427, -558, 358, -579, 395, -514, 188, -515, 346, -468, -145,
    -493, 276, -422, -522, -522, 167, -385, -449, -571, 36, -361, -286, -630,
    -68, -353, -72, -695, -122, -360, 177, -765, -120, -380, 431, -836, -69,
    -410, 655, -904, 21, -447, 828, -971, 137, -489, 946, -1035, 261, -534,
    1001, -1087, 378, -579, 972, -1115, 473, -622, 931, -1110, 535, -658, 936,
    -1071, 571, -683, 924, -1020, 590, -693, 886, -957, 597, -689, 817, -883,
    592, -672, 716, -801, 574, -643, 582, -695, 541, -605, 423, -599, 491, -557,
    256, -538, 426, -504, 98, -520, 348, -452, -83, -546, 259, -409, -146, -577,
    164, -382, -106, -593, 82, -367, -9, -639, 26, -364, 139, -706, 3, -373,
    319, -782, 15, -392, 508, -853, 60, -422, 683, -904, 132, -458, 828, -939,
    222, -497, 930, -964, 319, -532, 951, -983, 411, -563, 941, -997, 482, -589,
    970, -982, 534, -609, 977, -938, 571, -619, 945, -870, 595, -618, 875, -784,
    604, -603, 765, -686, 596, -576, 618, -593, 568, -536, 444, -583, 520, -491,
    259, -637, 453, -452, 57, -687, 368, -430, -126, -689, 268, -422, -183,
    -630, 164, -419, -176, -582, 72, -412, -108, -600, 5, -401, 14, -659, -31,
    -395, 176, -738, -32, -399, 352, -780, -1, -415, 521, -739, 58, -435, 670,
    -718, 136, -447, 791, -772, 225, -455, 821, -879, 314, -469, 687, -987, 381,
    -496, 751, -1002, 419, -534, 812, -970, 447, -569, 818, -910, 471, -590,
    775, -830, 488, -594, 685, -737, 492, -581, 547, -642, 479, -552, 368, -591,
    443, -513, 160, -575, 385, -472, -439, -588, 293, -436, -969, -600, 128,
    -410, -869, -553, -78, -392, -638, -520, -239, -376, -387, -546, -322, -361,
    -118, -611, -331, -354, 157, -697, -280, -360, 413, -794, -184, -381, 622,
    -915, -57, -417, 762, -1026, 82, -467, 817, -1100, 215, -528, 678, -1134,
    319, -589, 433, -1120, 369, -641, 433, -1073, 372, -676, 429, -1021, 355,
    -691, 400, -960, 332, -690, 338, -890, 306, -674, 232, -811, 275, -647, 80,
    -720, 234, -610, -110, -632, 178, -565, -319, -568, 104, -515, -666, -558,
    8, -466, -960, -600, -125, -427, -933, -637, -270, -404, -845, -683, -384,
    -396, -702, -739, -451, -401, -502, -803, -469, -418, -267, -865, -441,
    -444, -29, -957, -375, -478, 178, -1077, -278, -522, 330, -1178, -164, -578,
    379, -1232, -49, -640, 368, -1230, 48, -698, 372, -1177, 120, -739, 329,
    -1123, 167, -759, 242, -1062, 190, -760, 113, -991, 187, -746, -56, -911,
    160, -719, -255, -819, 107, -681, -461, -745, 30, -636, -653, -690, -66,
    -587, -856, -661, -175, -539, -1148, -669, -303, -498, -1186, -666, -445,
    -468, -1111, -678, -560, -448, -1e3, -724, -629, -438, -846, -792, -653,
    -440, -653, -870, -637, -455, -442, -934, -585, -483, -242, -981, -505,
    -517, -80, -1022, -405, -554, 14, -1061, -298, -590, -126, -1105, -204,
    -624, -294, -1131, -150, -657, -209, -1112, -131, -684, -173, -1066, -121,
    -701, -195, -999, -116, -703, -272, -914, -117, -691, -400, -808, -131,
    -664, -570, -678, -165, -623, -758, -549, -221, -568, -942, -449, -299,
    -503, -1206, -412, -400, -436, -1372, -437, -530, -378, -1355, -463, -658,
    -337, -1305, -500, -753, -313, -1217, -550, -806, -305, -1087, -609, -822,
    -311, -921, -649, -803, -329, -736, -675, -754, -351, -561, -743, -680,
    -376, -424, -848, -590, -407, -383, -942, -495, -448, -387, -979, -411,
    -496, -381, -932, -346, -537, -421, -862, -301, -562, -502, -771, -279,
    -566, -617, -661, -281, -551, -757, -536, -307, -517, -909, -390, -355,
    -467, -1055, -243, -424, -402, -1189, -121, -506, -328, -1419, -51, -605,
    -250, -1557, -43, -731, -179, -1529, -60, -853, -124, -1451, -95, -934, -87,
    -1350, -156, -970, -70, -1218, -237, -968, -70, -1056, -330, -936, -88,
    -875, -436, -877, -120, -703, -558, -796, -165, -572, -671, -699, -221,
    -526, -749, -598, -284, -573, -776, -511, -345, -605, -745, -449, -395,
    -662, -694, -413, -426, -744, -623, -403, -438, -843, -533, -415, -432,
    -956, -427, -447, -408, -1076, -324, -496, -370, -1193, -271, -560, -323,
    -1294, -239, -633, -275, -1387, -204, -711, -232, -1527, -167, -796, -195,
    -1557, -118, -887, -162, -1520, -114, -958, -132, -1465, -171, -1e3, -111,
    -1382, -270, -1013, -106, -1269, -389, -1002, -119, -1129, -517, -967, -151,
    -977, -671, -911, -201, -837, -805, -838, -268, -740, -891, -753, -343,
    -833, -932, -671, -417, -950, -918, -617, -479, -872, -871, -590, -521,
    -830, -816, -572, -542, -835, -747, -557, -544, -885, -667, -548, -529,
    -973, -570, -551, -501, -1087, -463, -571, -461, -1208, -366, -611, -411,
    -1322, -299, -668, -356, -1493, -290, -743, -303, -1587, -326, -841, -261,
    -1564, -365, -934, -235, -1521, -423, -997, -226, -1451, -497, -1028, -231,
    -1346, -580, -1030, -251, -1206, -660, -1006, -283, -1043, -724, -958, -322,
    -884, -775, -888, -365, -759, -814, -802, -406, -725, -842, -710, -444,
    -712, -850, -628, -477, -709, -822, -562, -500, -747, -760, -516, -512,
    -818, -669, -492, -508, -914, -555, -492, -487, -1027, -442, -514, -450,
    -1146, -613, -556, -410, -1256, -870, -616, -400, -1346, -922, -686, -429,
    -1429, -785, -761, -465, -1472, -545, -835, -477, -1473, -323, -897, -449,
    -1451, -269, -942, -393, -1404, -328, -966, -332, -1327, -450, -970, -289,
    -1220, -554, -955, -275, -1084, -632, -919, -285, -928, -722, -865, -313,
    -770, -833, -793, -355, -702, -953, -709, -409, -823, -1048, -633, -473,
    -746, -1061, -580, -538, -627, -1035, -535, -590, -580, -984, -490, -623,
    -600, -913, -450, -635, -679, -826, -424, -628, -802, -727, -419, -604,
    -948, -637, -439, -566, -1118, -573, -486, -520, -1470, -564, -574, -472,
    -1583, -574, -715, -432, -1527, -573, -851, -404, -1430, -595, -935, -385,
    -1303, -644, -967, -377, -1138, -712, -958, -382, -932, -789, -914, -399,
    -701, -860, -840, -428, -479, -924, -737, -464, -313, -978, -616, -504,
    -253, -1020, -490, -545, -467, -1051, -385, -584, -615, -1052, -332, -617,
    -569, -1018, -319, -641, -551, -963, -319, -652, -556, -888, -324, -647,
    -594, -798, -332, -629, -669, -694, -345, -596, -776, -583, -369, -552,
    -902, -483, -406, -498, -1037, -410, -458, -439, -1275, -388, -531, -382,
    -1372, -403, -630, -335, -1323, -432, -724, -302, -1240, -482, -786, -284,
    -1109, -549, -810, -283, -927, -626, -799, -296, -704, -713, -754, -323,
    -465, -848, -677, -362, -247, -991, -573, -417, -82, -1086, -453, -485, -30,
    -1115, -330, -555, 4, -1078, -224, -613, 34, -1011, -139, -649, 17, -946,
    -76, -661, -44, -874, -38, -654, -145, -793, -24, -632, -281, -703, -35,
    -598, -439, -634, -71, -554, -600, -608, -128, -509, -745, -597, -202, -467,
    -955, -590, -289, -434, -1178, -587, -398, -409, -1130, -558, -511, -391,
    -1014, -578, -592, -377, -852, -643, -629, -371, -639, -732, -621, -378,
    -388, -828, -573, -400, -127, -926, -489, -437, 108, -1025, -375, -485, 292,
    -1105, -245, -540, 381, -1158, -111, -599, 208, -1189, 0, -653, 168, -1174,
    64, -698, 288, -1137, 102, -727, 344, -1089, 133, -740, 344, -1028, 160,
    -737, 290, -958, 179, -721, 180, -868, 183, -693, 22, -764, 166, -654, -167,
    -669, 126, -606, -383, -609, 61, -552, -771, -617, -35, -500, -906, -658,
    -166, -461, -825, -693, -292, -438, -688, -737, -379, -430, -487, -789,
    -416, -436, -231, -844, -402, -452, 46, -874, -342, -476, 305, -925, -244,
    -502, 515, -1018, -119, -533, 657, -1114, 18, -573, 695, -1180, 147, -621,
    725, -1183, 253, -670, 742, -1136, 333, -706, 718, -1077, 388, -725, 657,
    -1002, 420, -725, 558, -914, 428, -709, 421, -816, 412, -677, 253, -709,
    374, -634, 71, -603, 315, -580, -206, -520, 235, -520, -871, -493, 112,
    -461, -990, -486, -73, -409, -722, -501, -243, -370, -405, -536, -336, -345,
    -91, -589, -347, -336, 208, -653, -291, -340, 477, -722, -184, -358, 700,
    -786, -44, -385, 861, -838, 109, -419, 953, -876, 257, -455, 974, -901, 383,
    -490, 915, -914, 474, -520, 867, -909, 528, -544, 819, -878, 552, -559, 761,
    -822, 554, -563, 693, -744, 540, -555, 607, -652, 513, -534, 498, -553, 475,
    -500, 368, -505, 427, -457, 230, -688, 368, -421, 93, -838, 300, -416, -63,
    -826, 224, -436, -185, -700, 142, -455, -190, -523, 62, -454, -141, -413, 0,
    -428, -37, -412, -37, -387, 112, -478, -44, -349, 291, -578, -20, -329, 480,
    -689, 33, -331, 657, -806, 109, -356, 808, -911, 202, -399, 919, -984, 302,
    -454, 890, -1021, 395, -511, 780, -1024, 457, -561, 887, -992, 493, -598,
    961, -955, 524, -618, 983, -913, 555, -624, 959, -858, 580, -618, 890, -791,
    594, -600, 775, -709, 592, -573, 617, -614, 568, -537, 426, -527, 521, -493,
    197, -464, 451, -444, -205, -455, 351, -397, -319, -491, 220, -359, -280,
    -542, 93, -336, -179, -610, -3, -330, 42, -685, -53, -340, 287, -758, -50,
    -364, 526, -826, 1, -398, 729, -879, 90, -437, 881, -916, 201, -477, 980,
    -945, 317, -514, 1e3, -981, 423, -547, 1001, -1014, 505, -577, 994, -1023,
    563, -604, 914, -993, 596, -624, 850, -913, 605, -632, 785, -813, 595, -623,
    688, -712, 571, -598, 562, -614, 533, -558, 416, -590, 481, -511, 261, -633,
    416, -469, 94, -680, 340, -441, -87, -689, 253, -428, -161, -638, 160, -423,
    -204, -571, 74, -414, -212, -584, 3, -401, -77, -646, -45, -392, 105, -736,
    -58, -394, 307, -813, -34, -412, 502, -813, 24, -438, 673, -823, 106, -463,
    808, -881, 204, -486, 882, -977, 304, -513, 761, -1084, 386, -550, 759,
    -1100, 434, -595, 818, -1066, 464, -634, 823, -1017, 487, -658, 784, -956,
    501, -665, 700, -885, 503, -656, 572, -801, 489, -634, 400, -708, 455, -600,
    199, -629, 398, -557, -257, -598, 315, -510, -927, -630, 168, -468, -926,
    -653, -37, -440, -698, -652, -214, -423, -447, -675, -315, -415, -179, -720,
    -338, -415, 98, -778, -299, -425, 361, -839, -210, -444, 584, -904, -88,
    -471, 741, -976, 51, -504, 820, -1042, 188, -543, 784, -1089, 303, -585,
    658, -1106, 378, -626, 567, -1070, 410, -658, 498, -1019, 411, -675, 411,
    -953, 391, -677, 303, -874, 355, -663, 167, -782, 307, -637, 2, -684, 246,
    -598, -183, -626, 171, -551, -368, -603, 84, -504, -572, -602, -16, -462,
    -781, -613, -127, -431, -831, -593, -243, -410, -792, -593, -340, -394,
    -701, -640, -404, -386, -556, -714, -431, -388, -367, -801, -421, -404,
    -157, -906, -376, -434, 49, -1021, -302, -478, 224, -1113, -207, -534, 327,
    -1165, -102, -595, 314, -1175, -5, -651, 298, -1145, 69, -694, 325, -1102,
    121, -719, 297, -1054, 155, -727, 213, -996, 171, -721, 76, -930, 166, -702,
    -106, -847, 136, -673, -317, -761, 81, -636, -530, -692, 0, -591, -735,
    -655, -100, -545, -1059, -674, -223, -503, -1186, -707, -370, -474, -1131,
    -729, -504, -458, -1039, -773, -595, -454, -902, -835, -638, -461, -721,
    -905, -638, -480, -513, -965, -601, -508, -306, -1003, -531, -542, -130,
    -1034, -438, -576, -10, -1067, -333, -608, -73, -1108, -233, -638, -287,
    -1144, -168, -667, -230, -1133, -141, -694, -178, -1091, -129, -711, -185,
    -1025, -121, -715, -249, -940, -119, -705, -365, -836, -128, -680, -526,
    -721, -156, -640, -712, -635, -206, -589, -896, -586, -279, -534, -1135,
    -576, -373, -481, -1355, -596, -496, -440, -1362, -577, -629, -410, -1320,
    -589, -733, -390, -1241, -635, -796, -380, -1120, -702, -820, -382, -959,
    -771, -809, -397, -775, -829, -767, -422, -594, -894, -698, -454, -443,
    -958, -610, -491, -381, -1013, -514, -531, -570, -1054, -432, -572, -624,
    -1038, -388, -608, -543, -990, -368, -632, -520, -926, -354, -640, -549,
    -846, -344, -633, -628, -754, -343, -610, -750, -657, -357, -574, -899,
    -600, -390, -530, -1054, -575, -445, -484, -1297, -575, -523, -444, -1519,
    -587, -641, -413, -1540, -557, -777, -392, -1486, -543, -884, -375, -1408,
    -584, -945, -363, -1297, -658, -965, -362, -1149, -750, -952, -375, -970,
    -848, -909, -402, -786, -954, -840, -443, -630, -1044, -750, -495, -544,
    -1106, -650, -552, -672, -1141, -558, -608, -845, -1140, -503, -656, -803,
    -1108, -485, -690, -785, -1062, -482, -707, -803, -1002, -484, -709, -856,
    -930, -492, -696, -945, -839, -508, -670, -1059, -732, -538, -633, -1181,
    -631, -583, -585, -1298, -562, -644, -530, -1469, -556, -722, -476, -1557,
    -596, -819, -433, -1539, -629, -910, -406, -1501, -673, -973, -395, -1436,
    -729, -1005, -398, -1336, -792, -1009, -414, -1203, -859, -988, -439, -1047,
    -956, -943, -473, -892, -1063, -877, -517, -768, -1146, -796, -571, -734,
    -1183, -708, -628, -719, -1164, -629, -678, -712, -1116, -565, -711, -748,
    -1061, -519, -725, -820, -992, -495, -722, -920, -909, -494, -703, -1038,
    -808, -517, -671, -1160, -694, -561, -627, -1271, -587, -622, -573, -1361,
    -507, -694, -512, -1483, -475, -773, -452, -1575, -489, -862, -401, -1553,
    -502, -944, -363, -1508, -543, -999, -341, -1440, -608, -1025, -334, -1341,
    -689, -1024, -343, -1211, -768, -999, -367, -1059, -817, -953, -400, -906,
    -851, -886, -437, -776, -889, -804, -472, -749, -937, -715, -506, -912,
    -989, -642, -539, -895, -997, -602, -571, -825, -961, -577, -595, -804,
    -892, -557, -606, -829, -799, -542, -601, -897, -684, -536, -579, -998,
    -550, -544, -540, -1117, -416, -572, -485, -1235, -302, -618, -420, -1376,
    -231, -682, -350, -1527, -217, -767, -284, -1537, -229, -863, -232, -1506,
    -263, -938, -195, -1449, -321, -982, -177, -1358, -396, -997, -177, -1228,
    -464, -984, -192, -1068, -562, -946, -219, -895, -716, -885, -260, -737,
    -850, -804, -318, -642, -921, -710, -385, -619, -929, -617, -451, -579,
    -858, -537, -500, -582, -779, -474, -525, -627, -694, -430, -526, -709,
    -598, -409, -508, -820, -494, -412, -474, -947, -396, -439, -428, -1075,
    -352, -487, -376, -1189, -338, -552, -326, -1463, -345, -637, -286, -1609,
    -344, -764, -257, -1553, -301, -890, -236, -1441, -297, -966, -219, -1301,
    -355, -992, -208, -1129, -451, -976, -209, -925, -566, -927, -227, -698,
    -700, -847, -262, -475, -894, -741, -318, -301, -1064, -617, -395, -218,
    -1160, -487, -487, -374, -1186, -375, -577, -596, -1145, -313, -648, -566,
    -1077, -297, -691, -543, -1021, -301, -707, -543, -966, -309, -703, -573,
    -910, -319, -686, -639, -848, -333, -659, -741, -778, -355, -625, -866,
    -715, -389, -586, -995, -674, -439, -545, -1219, -683, -506, -507, -1398,
    -738, -604, -481, -1356, -779, -709, -469, -1269, -829, -783, -471, -1137,
    -888, -816, -485, -950, -952, -811, -508, -716, -1012, -768, -539, -463,
    -1058, -691, -575, -230, -1091, -585, -611, -48, -1115, -459, -645, 24,
    -1133, -329, -674, 36, -1142, -214, -699, 63, -1125, -124, -717, 42, -1079,
    -59, -725, -21, -1009, -20, -722, -121, -917, -6, -705, -255, -810, -18,
    -675, -412, -805, -54, -633, -574, -1053, -111, -604, -725, -1202, -186,
    -616, -869, -1174, -271, -653, -986, -1026, -364, -684, -1001, -803, -452,
    -684, -966, -668, -521, -650, -880, -654, -562, -597, -743, -716, -574,
    -545, -556, -815, -554, -511, -336, -919, -504, -503, -102, -1023, -425,
    -520, 118, -1110, -322, -557, 286, -1172, -204, -607, 219, -1218, -88, -659,
    155, -1233, -6, -708, 331, -1211, 53, -746, 429, -1177, 108, -769, 451,
    -1131, 160, -777, 406, -1074, 201, -772, 300, -1e3, 223, -754, 139, -912,
    220, -725, -59, -834, 188, -686, -272, -790, 128, -642, -646, -804, 37,
    -600, -891, -851, -94, -569, -830, -874, -233, -552, -711, -911, -337, -548,
    -525, -959, -391, -555, -279, -1013, -393, -571, -3, -1055, -346, -595, 263,
    -1092, -258, -623, 485, -1137, -139, -652, 645, -1188, -4, -683, 667, -1236,
    128, -716, 492, -1265, 226, -750, 544, -1239, 280, -779, 634, -1193, 316,
    -796, 667, -1133, 347, -799, 649, -1059, 372, -787, 582, -976, 386, -762,
    463, -881, 384, -726, 297, -780, 361, -680, 84, -693, 314, -626, -402, -649,
    232, -569, -798, -650, 94, -518, -738, -672, -73, -479, -536, -704, -204,
    -454, -292, -745, -270, -444, -15, -795, -271, -447, 268, -849, -216, -461,
    522, -902, -116, -484, 721, -970, 13, -512, 854, -1059, 153, -548, 923,
    -1139, 285, -592, 907, -1185, 393, -641, 884, -1182, 468, -686, 867, -1130,
    514, -718, 830, -1075, 538, -732, 775, -1013, 544, -730, 697, -944, 534,
    -713, 591, -867, 510, -685, 459, -784, 472, -648, 309, -711, 419, -604, 159,
    -655, 352, -558, -20, -624, 275, -512, -380, -629, 180, -472, -420, -641,
    63, -443, -268, -656, -37, -425, -81, -699, -94, -417, 139, -762, -101,
    -421, 372, -834, -62, -437, 590, -909, 15, -463, 771, -979, 119, -499, 904,
    -1042, 235, -540, 989, -1092, 349, -584, 973, -1127, 448, -626, 806, -1142,
    512, -664, 836, -1123, 537, -694, 903, -1085, 549, -711, 928, -1032, 560,
    -715, 914, -967, 571, -706, 860, -892, 576, -685, 762, -807, 569, -654, 621,
    -705, 547, -613, 444, -605, 505, -564, 247, -530, 442, -509, -119, -510,
    354, -455, -328, -542, 233, -410, -263, -582, 109, -381, -142, -630, 13,
    -368, 37, -685, -37, -370, 253, -746, -38, -385, 474, -808, 5, -409, 670,
    -866, 83, -440, 823, -913, 183, -475, 929, -944, 291, -511, 967, -959, 393,
    -543, 966, -954, 475, -569, 984, -927, 535, -586, 972, -880, 576, -593, 930,
    -813, 599, -588, 856, -730, 606, -570, 748, -636, 594, -541, 608, -538, 563,
    -501, 442, -444, 514, -453, 266, -358, 447, -399, 102, -290, 365, -344, -32,
    -249, 274, -291, -119, -238, 181, -245, -151, -256, 97, -210, -127, -298,
    29, -188, -49, -359, -14, -181, 74, -433, -30, -189, 230, -486, -18, -209,
    401, -294, 23, -228, 566, -52, 86, -218, 708, -21, 166, -179, 817, -199,
    255, -140, 890, -459, 342, -131, 922, -634, 420, -163, 914, -663, 482, -221,
    865, -602, 523, -278, 774, -485, 541, -314, 643, -335, 535, -321, 479, -174,
    504, -298, 293, -52, 450, -251, 104, -212, 375, -198, -130, -386, 283, -172,
    -486, -393, 168, -175, -530, -251, 32, -184, -450, -40, -85, -175, -338,
    106, -163, -139, -194, 106, -198, -87, -27, 19, -192, -42, 143, -112, -152,
    -19, 298, -255, -88, -24, 424, -417, -8, -56, 516, -627, 77, -114, 576,
    -795, 158, -196, 561, -876, 228, -289, 393, -872, 271, -377, 405, -792, 283,
    -441, 438, -713, 284, -474, 427, -656, 282, -481, 376, -609, 277, -470, 285,
    -567, 264, -449, 157, -530, 239, -423, -1, -472, 199, -394, -172, -389, 141,
    -362, -333, -315, 67, -325, -549, -293, -19, -286, -746, -346, -122, -254,
    -704, -447, -226, -238, -615, -529, -303, -242, -490, -594, -344, -262,
    -338, -650, -348, -293, -177, -699, -320, -328, -27, -739, -267, -364, 95,
    -805, -196, -400, 181, -961, -119, -441, 228, -1112, -45, -497, 214, -1183,
    18, -567, 189, -1156, 63, -633, 159, -1033, 89, -677, 105, -914, 100, -688,
    31, -827, 95, -671, -61, -762, 77, -637, -167, -710, 45, -595, -279, -669,
    1, -551, -390, -619, -52, -508, -490, -598, -111, -469, -570, -605, -174,
    -437, -686, -633, -236, -415, -783, -677, -301, -405, -734, -706, -361,
    -406, -664, -721, -401, -414, -579, -757, -416, -426, -481, -803, -410,
    -443, -381, -852, -384, -464, -288, -898, -345, -488, -212, -930, -297,
    -515, -157, -935, -247, -541, -127, -930, -198, -562, -174, -930, -159,
    -576, -279, -942, -138, -586, -254, -953, -135, -594, -229, -945, -137,
    -601, -228, -917, -139, -603, -250, -877, -141, -600, -298, -829, -146,
    -590, -368, -778, -157, -573, -456, -729, -178, -551, -552, -684, -209,
    -524, -645, -649, -250, -496, -780, -626, -300, -468, -890, -615, -361,
    -443, -876, -612, -423, -423, -839, -619, -471, -408, -780, -634, -499,
    -400, -702, -654, -506, -397, -614, -677, -495, -399, -526, -682, -468,
    -406, -450, -637, -431, -411, -390, -660, -387, -412, -348, -755, -342,
    -416, -324, -850, -301, -434, -318, -899, -266, -463, -331, -847, -241,
    -493, -362, -775, -225, -511, -410, -710, -221, -512, -473, -649, -228,
    -499, -547, -591, -245, -476, -626, -538, -273, -446, -704, -491, -309,
    -413, -775, -454, -351, -380, -878, -429, -397, -348, -1047, -422, -453,
    -321, -1070, -422, -520, -300, -1002, -431, -575, -285, -926, -451, -607,
    -277, -840, -482, -614, -276, -746, -518, -599, -281, -652, -557, -568,
    -293, -567, -596, -525, -309, -500, -730, -476, -332, -457, -936, -425,
    -374, -439, -1081, -380, -440, -441, -1109, -342, -518, -458, -1029, -316,
    -584, -486, -889, -301, -618, -524, -793, -297, -619, -572, -732, -303,
    -598, -630, -693, -317, -564, -696, -667, -340, -527, -765, -639, -370,
    -493, -834, -585, -406, -461, -896, -541, -445, -430, -952, -540, -487,
    -401, -1054, -591, -531, -380, -1077, -671, -579, -373, -1038, -726, -618,
    -382, -986, -770, -641, -401, -919, -811, -647, -426, -840, -850, -636,
    -454, -756, -886, -612, -483, -674, -916, -576, -511, -603, -928, -532,
    -536, -548, -931, -486, -557, -528, -932, -441, -573, -612, -939, -406,
    -584, -632, -940, -390, -592, -591, -926, -383, -597, -576, -895, -378,
    -597, -583, -851, -373, -591, -613, -799, -371, -579, -664, -744, -374,
    -559, -732, -682, -386, -534, -811, -613, -408, -503, -889, -550, -440,
    -467, -981, -506, -480, -430, -1096, -495, -529, -394, -1103, -509, -584,
    -365, -1072, -528, -629, -346, -1022, -548, -657, -336, -953, -573, -666,
    -335, -869, -600, -658, -340, -780, -626, -633, -349, -694, -650, -596,
    -362, -621, -667, -551, -377, -565, -675, -503, -391, -546, -673, -456,
    -403, -537, -661, -417, -411, -527, -636, -386, -414, -535, -601, -364,
    -412, -561, -556, -351, -403, -604, -504, -348, -388, -661, -448, -354,
    -368, -727, -392, -371, -342, -797, -338, -396, -312, -862, -288, -429,
    -280, -918, -250, -467, -248, -959, -226, -506, -218, -983, -217, -543,
    -191, -987, -222, -574, -171, -972, -241, -597, -157, -939, -269, -611,
    -151, -887, -305, -612, -153, -821, -346, -603, -162, -743, -304, -582,
    -175, -661, -477, -551, -187, -585, -789, -513, -225, -517, -894, -469,
    -297, -462, -848, -424, -375, -425, -740, -380, -432, -413, -563, -342,
    -454, -426, -462, -312, -441, -463, -419, -293, -408, -518, -405, -286,
    -368, -586, -404, -293, -331, -660, -406, -312, -303, -732, -404, -342,
    -282, -796, -383, -378, -268, -920, -366, -421, -256, -1064, -371, -476,
    -247, -1041, -396, -538, -241, -958, -436, -583, -241, -867, -462, -604,
    -248, -765, -479, -599, -259, -658, -504, -574, -271, -552, -547, -532,
    -286, -458, -607, -480, -304, -386, -658, -422, -327, -340, -710, -365,
    -355, -316, -756, -314, -384, -322, -780, -272, -414, -356, -770, -244,
    -441, -361, -721, -229, -458, -372, -669, -222, -463, -397, -620, -222,
    -456, -452, -571, -229, -439, -509, -522, -243, -417, -555, -475, -264,
    -390, -607, -469, -290, -362, -657, -545, -318, -341, -700, -629, -349,
    -336, -748, -668, -380, -347, -778, -646, -411, -364, -760, -566, -437,
    -376, -723, -535, -454, -375, -666, -556, -460, -369, -590, -605, -452,
    -364, -501, -667, -432, -368, -405, -730, -399, -381, -310, -835, -357,
    -405, -222, -959, -308, -444, -160, -1049, -255, -495, -210, -1088, -208,
    -552, -228, -1065, -176, -603, -155, -1002, -154, -636, -114, -964, -134,
    -649, -103, -942, -114, -649, -119, -927, -97, -640, -162, -916, -88, -629,
    -228, -902, -89, -616, -312, -863, -101, -603, -402, -811, -127, -586, -496,
    -771, -162, -566, -653, -772, -210, -544, -691, -817, -268, -527, -642,
    -865, -320, -521, -569, -896, -353, -526, -473, -919, -363, -537, -360,
    -938, -351, -552, -242, -954, -320, -568, -132, -968, -274, -583, -35,
    -1022, -218, -598, 42, -1116, -157, -620, 86, -1201, -98, -653, 95, -1237,
    -47, -695, 114, -1207, -7, -733, 115, -1134, 23, -756, 99, -1077, 43, -761,
    66, -1029, 53, -750, 15, -986, 53, -730, -51, -944, 43, -704, -126, -895,
    23, -675, -206, -818, -6, -642, -279, -740, -42, -605, -353, -697, -83,
    -564, -489, -708, -129, -526, -500, -760, -181, -499, -434, -798, -223,
    -486, -351, -828, -245, -486, -250, -858, -246, -495, -138, -889, -226,
    -509, -24, -920, -189, -527, 79, -930, -140, -546, 165, -916, -83, -563,
    230, -907, -24, -573, 261, -918, 30, -579, 181, -952, 73, -585, 162, -982,
    96, -593, 219, -966, 108, -603, 248, -932, 119, -609, 252, -887, 130, -608,
    231, -835, 138, -599, 186, -780, 141, -581, 117, -727, 135, -557, 32, -677,
    119, -528, -64, -623, 91, -497, -265, -579, 50, -464, -447, -555, -13, -432,
    -413, -552, -86, -404, -316, -575, -143, -383, -205, -606, -171, -372, -82,
    -634, -170, -370, 41, -661, -144, -376, 153, -688, -99, -387, 245, -712,
    -43, -400, 310, -733, 17, -416, 350, -763, 74, -432, 369, -802, 123, -449,
    369, -831, 163, -468, 338, -836, 189, -487, 331, -806, 203, -502, 325, -753,
    209, -508, 308, -705, 210, -503, 277, -661, 206, -489, 234, -619, 197, -469,
    179, -580, 182, -446, 115, -540, 161, -420, 49, -475, 134, -393, -12, -406,
    103, -363, -66, -367, 69, -330, -126, -378, 33, -299, -137, -433, -2, -277,
    -108, -487, -30, -269, -60, -525, -46, -274, 6, -561, -48, -287, 85, -596,
    -37, -305, 170, -630, -14, -327, 253, -661, 20, -349, 328, -695, 61, -371,
    392, -747, 106, -394, 433, -797, 150, -420, 434, -822, 190, -447, 430, -811,
    220, -471, 446, -761, 241, -487, 445, -708, 257, -491, 425, -664, 266, -483,
    387, -624, 268, -467, 332, -586, 262, -446, 263, -550, 248, -422, 185, -514,
    224, -398, 105, -469, 192, -373, 31, -428, 154, -347, -85, -408, 111, -322,
    -200, -417, 60, -300, -163, -453, 8, -285, -101, -488, -30, -280, -23, -524,
    -49, -284, 68, -562, -47, -295, 163, -601, -27, -311, 252, -640, 8, -331,
    328, -674, 51, -354, 387, -701, 98, -377, 428, -719, 144, -398, 437, -730,
    185, -418, 348, -735, 214, -434, 328, -729, 225, -446, 372, -710, 227, -452,
    392, -680, 230, -453, 391, -642, 233, -448, 368, -599, 236, -437, 323, -554,
    234, -420, 256, -510, 225, -399, 172, -469, 207, -375, 80, -436, 179, -349,
    -10, -413, 141, -325, -162, -402, 94, -302, -257, -402, 36, -284, -223,
    -412, -21, -271, -166, -431, -63, -264, -89, -459, -84, -263, 3, -491, -84,
    -268, 97, -526, -65, -279, 185, -559, -32, -293, 258, -537, 10, -309, 314,
    -495, 56, -318, 352, -552, 101, -322, 373, -666, 141, -333, 379, -756, 174,
    -356, 372, -781, 198, -390, 349, -699, 213, -419, 312, -625, 218, -432, 260,
    -562, 214, -428, 195, -506, 201, -411, 121, -458, 179, -386, 42, -417, 149,
    -356, -36, -421, 112, -327, -106, -492, 71, -307, -266, -570, 24, -302,
    -447, -610, -36, -311, -416, -588, -103, -328, -326, -505, -155, -339, -229,
    -451, -181, -337, -123, -438, -180, -326, -14, -465, -158, -313, 87, -530,
    -118, -306, 172, -624, -69, -312, 233, -748, -15, -333, 267, -883, 36, -373,
    278, -980, 81, -429, 193, -1016, 112, -491, 116, -979, 123, -545, 138, -894,
    119, -577, 144, -839, 112, -587, 130, -804, 104, -581, 80, -782, 96, -565,
    19, -764, 82, -546, -47, -747, 61, -527, -130, -719, 34, -509, -219, -686,
    -1, -491, -315, -662, -42, -472, -479, -664, -93, -455, -529, -694, -153,
    -443, -495, -728, -208, -438, -441, -756, -246, -442, -366, -782, -264,
    -451, -275, -805, -262, -464, -179, -827, -241, -479, -90, -847, -206, -494,
    -13, -921, -163, -511, 44, -1040, -116, -538, 71, -1139, -70, -579, 65,
    -1174, -32, -628, 67, -1135, -3, -673, 51, -1052, 16, -699, 18, -992, 25,
    -704, -34, -945, 24, -694, -102, -905, 14, -673, -185, -868, -7, -647, -277,
    -825, -38, -619, -372, -750, -78, -588, -459, -676, -125, -553, -545, -637,
    -176, -515, -686, -657, -232, -480, -710, -717, -293, -457, -667, -761,
    -344, -448, -607, -794, -376, -452, -531, -826, -387, -465, -443, -858,
    -378, -482, -352, -889, -354, -502, -268, -918, -317, -524, -199, -938,
    -273, -545, -148, -954, -227, -564, -133, -967, -184, -582, -230, -975,
    -151, -596, -265, -969, -139, -608, -227, -946, -137, -615, -215, -912,
    -137, -615, -228, -871, -136, -608, -266, -824, -138, -594, -327, -774,
    -146, -575, -408, -716, -162, -550, -504, -630, -189, -520, -602, -536,
    -226, -483, -706, -462, -273, -439, -855, -438, -329, -394, -889, -474,
    -394, -356, -862, -514, -450, -331, -813, -540, -489, -320, -744, -561,
    -506, -320, -661, -580, -504, -327, -572, -599, -485, -337, -488, -581,
    -452, -347, -419, -563, -410, -354, -366, -595, -365, -357, -345, -665,
    -322, -364, -349, -731, -286, -380, -343, -746, -259, -402, -355, -685,
    -240, -421, -386, -620, -230, -428, -433, -551, -230, -422, -496, -480,
    -239, -403, -571, -409, -259, -375, -652, -343, -288, -340, -731, -285,
    -325, -302, -808, -240, -368, -262, -965, -212, -418, -225, -1078, -201,
    -482, -193, -1041, -201, -547, -168, -972, -216, -593, -151, -892, -245,
    -614, -142, -802, -284, -611, -142, -707, -330, -589, -149, -616, -378,
    -552, -164, -539, -423, -506, -185, -484, -462, -456, -209, -454, -491,
    -407, -234, -447, -507, -365, -258, -455, -510, -333, -278, -476, -498,
    -312, -293, -507, -473, -302, -302, -549, -437, -303, -303, -602, -392,
    -312, -296, -664, -342, -330, -282, -732, -288, -356, -263, -801, -162,
    -389, -236, -865, -87, -426, -197, -920, -107, -467, -157, -962, -159, -507,
    -127, -988, -206, -545, -111, -996, -222, -577, -109, -987, -215, -601,
    -113, -961, -231, -616, -119, -918, -263, -621, -127, -860, -304, -615,
    -138, -792, -348, -599, -153, -718, -384, -573, -172, -645, -408, -539,
    -193, -582, -424, -499, -213, -590, -437, -460, -230, -645, -442, -430,
    -245, -594, -438, -412, -257, -556, -414, -396, -263, -548, -376, -381,
    -264, -568, -328, -369, -257, -612, -275, -364, -243, -677, -219, -368,
    -223, -755, -153, -383, -197, -838, -85, -410, -166, -916, -32, -447, -131,
    -1036, -8, -492, -96, -1103, -22, -548, -66, -1083, -57, -601, -46, -1045,
    -93, -639, -38, -986, -134, -658, -39, -910, -179, -659, -49, -824, -226,
    -643, -66, -736, -272, -613, -88, -657, -313, -572, -113, -592, -346, -526,
    -139, -553, -367, -479, -164, -545, -376, -436, -186, -530, -372, -401,
    -203, -529, -354, -375, -215, -545, -324, -357, -219, -579, -285, -348,
    -217, -629, -238, -350, -207, -691, -189, -361, -191, -759, -141, -382,
    -169, -828, -99, -411, -145, -889, -67, -446, -119, -938, -48, -485, -94,
    -971, -43, -523, -72, -985, -52, -558, -56, -980, -75, -585, -46, -956,
    -111, -604, -43, -913, -155, -612, -48, -854, -207, -608, -61, -782, -242,
    -593, -80, -700, -97, -567, -94, -618, -127, -532, -94, -541, -297, -490,
    -98, -477, -451, -444, -121, -430, -544, -398, -163, -407, -532, -355, -212,
    -409, -459, -320, -251, -436, -397, -295, -270, -484, -340, -283, -272,
    -548, -286, -284, -260, -621, -236, -298, -239, -695, -192, -323, -212,
    -765, -156, -357, -184, -844, -132, -397, -156, -1007, -122, -445, -131,
    -1067, -124, -507, -111, -999, -137, -563, -98, -913, -135, -596, -90, -817,
    -128, -604, -86, -713, -132, -588, -83, -606, -163, -555, -82, -506, -234,
    -507, -88, -423, -335, -452, -104, -364, -518, -394, -136, -329, -698, -340,
    -190, -314, -790, -293, -262, -314, -768, -257, -335, -326, -642, -232,
    -386, -347, -522, -217, -405, -378, -447, -212, -396, -429, -399, -216,
    -370, -503, -365, -230, -337, -555, -340, -253, -303, -606, -320, -281,
    -273, -654, -354, -312, -248, -695, -414, -344, -236, -767, -461, -377,
    -237, -851, -483, -413, -247, -815, -472, -450, -261, -757, -455, -475,
    -272, -683, -480, -483, -279, -594, -531, -474, -288, -495, -593, -449,
    -302, -394, -656, -411, -322, -300, -728, -363, -350, -221, -830, -310,
    -385, -160, -924, -256, -429, -165, -982, -205, -480, -249, -992, -170,
    -529, -211, -946, -152, -566, -163, -900, -140, -587, -140, -867, -127,
    -592, -143, -841, -114, -586, -170, -817, -106, -574, -221, -795, -104,
    -559, -293, -751, -112, -542, -378, -679, -131, -521, -463, -605, -160,
    -493, -588, -566, -200, -461, -710, -588, -252, -429, -680, -654, -307,
    -409, -621, -699, -349, -403, -537, -730, -370, -409, -432, -754, -369,
    -422, -317, -775, -347, -438, -202, -792, -307, -455, -98, -825, -256, -471,
    -11, -917, -197, -491, 53, -1026, -137, -522, 74, -1097, -82, -564, 89,
    -1099, -37, -609, 101, -1025, -1, -644, 95, -949, 24, -658, 71, -891, 40,
    -653, 29, -840, 45, -634, -29, -792, 40, -608, -100, -746, 26, -577, -177,
    -670, 1, -544, -254, -566, -31, -505, -321, -482, -70, -460, -430, -459,
    -112, -413, -528, -505, -162, -373, -477, -578, -210, -350, -405, -623,
    -242, -344, -313, -662, -254, -352, -206, -700, -244, -369, -93, -736, -216,
    -390, 16, -766, -172, -414, 112, -776, -119, -436, 188, -800, -61, -456,
    242, -837, -4, -475, 222, -876, 47, -495, 141, -904, 80, -516, 186, -878,
    96, -535, 228, -832, 107, -545, 245, -784, 119, -545, 237, -735, 129, -535,
    204, -685, 135, -517, 147, -637, 134, -493, 70, -588, 124, -465, -20, -534,
    102, -435, -154, -486, 68, -403, -389, -459, 17, -372, -455, -453, -54,
    -344, -368, -478, -120, -323, -263, -507, -163, -311, -145, -533, -175,
    -308, -21, -557, -161, -313, 98, -582, -125, -322, 201, -604, -73, -335,
    280, -624, -14, -348, 333, -707, 46, -364, 366, -880, 100, -393, 368, -1019,
    145, -442, 355, -1056, 177, -505, 357, -993, 198, -560, 350, -857, 211,
    -591, 333, -755, 216, -592, 304, -690, 216, -570, 263, -647, 210, -536, 208,
    -619, 197, -499, 144, -601, 178, -464, 77, -586, 152, -434, 13, -621, 120,
    -411, -47, -688, 86, -401, -189, -750, 46, -405, -235, -783, -2, -421, -166,
    -779, -44, -442, -85, -758, -69, -458, 10, -773, -72, -469, 113, -810, -56,
    -479, 214, -855, -23, -491, 305, -902, 21, -508, 379, -945, 72, -529, 434,
    -1011, 124, -554, 472, -1088, 173, -586, 458, -1147, 214, -624, 366, -1172,
    240, -664, 385, -1147, 248, -699, 422, -1092, 252, -719, 439, -1054, 256,
    -725, 435, -1026, 261, -719, 409, -1004, 264, -706, 362, -986, 262, -690,
    293, -970, 252, -674, 208, -935, 233, -657, 116, -879, 204, -638, 19, -824,
    165, -615, -143, -802, 116, -589, -181, -823, 58, -565, -132, -874, 6, -550,
    -62, -906, -29, -547, 26, -925, -41, -553, 123, -938, -32, -563, 220, -948,
    -6, -575, 307, -954, 34, -586, 377, -956, 80, -596, 430, -993, 129, -604,
    465, -1078, 175, -618, 466, -1163, 214, -643, 470, -1201, 244, -677, 469,
    -1171, 264, -711, 451, -1088, 277, -731, 418, -1020, 282, -733, 371, -965,
    278, -719, 309, -915, 266, -694, 236, -868, 246, -664, 157, -825, 217, -631,
    78, -788, 182, -597, 7, -768, 141, -566, -53, -761, 98, -539, -119, -760,
    55, -518, -139, -763, 14, -503, -118, -768, -20, -494, -77, -783, -42, -490,
    -17, -811, -49, -490, 55, -846, -43, -497, 133, -882, -24, -508, 210, -909,
    6, -525, 277, -861, 43, -540, 331, -825, 83, -546, 373, -850, 122, -545,
    392, -927, 159, -548, 379, -1013, 188, -561, 381, -1025, 209, -585, 366,
    -985, 222, -607, 331, -940, 227, -619, 279, -893, 223, -619, 211, -845, 210,
    -609, 133, -796, 188, -591, 47, -727, 158, -566, -39, -646, 119, -535, -153,
    -579, 75, -497, -391, -553, 18, -457, -471, -568, -56, -422, -391, -593,
    -126, -397, -296, -607, -171, -383, -188, -618, -188, -378, -73, -631, -178,
    -378, 42, -644, -146, -382, 143, -657, -99, -389, 224, -732, -43, -398, 277,
    -866, 14, -419, 297, -977, 66, -457, 271, -1017, 107, -507, 251, -974, 134,
    -552, 227, -871, 148, -580, 191, -795, 151, -583, 142, -736, 145, -569, 77,
    -686, 130, -543, -2, -641, 106, -512, -94, -595, 74, -479, -189, -562, 35,
    -445, -280, -549, -12, -415, -382, -549, -63, -390, -557, -565, -122, -372,
    -579, -582, -189, -363, -522, -584, -245, -360, -447, -608, -279, -360,
    -353, -648, -289, -366, -248, -696, -278, -378, -142, -746, -247, -396, -47,
    -788, -203, -419, 29, -815, -152, -444, 80, -833, -99, -468, 72, -850, -51,
    -490, -44, -867, -19, -509, -47, -872, -8, -525, -14, -858, -7, -536, -10,
    -828, -6, -542, -31, -786, -7, -540, -79, -738, -11, -530, -151, -686, -22,
    -513, -246, -618, -42, -490, -353, -545, -74, -460, -462, -483, -117, -425,
    -641, -451, -172, -388, -771, -459, -243, -354, -747, -483, -315, -329,
    -697, -505, -370, -315, -623, -528, -402, -311, -528, -552, -409, -313,
    -424, -578, -395, -321, -323, -602, -362, -333, -236, -686, -318, -349,
    -172, -810, -267, -375, -140, -901, -217, -416, -148, -920, -174, -463,
    -147, -868, -142, -503, -159, -771, -120, -524, -191, -699, -109, -523,
    -241, -639, -108, -506, -309, -588, -117, -480, -392, -541, -138, -448,
    -484, -485, -168, -414, -576, -468, -208, -380, -660, -486, -256, -351,
    -764, -515, -307, -332, -908, -545, -367, -324, -906, -550, -431, -324,
    -857, -532, -481, -327, -791, -550, -510, -330, -707, -590, -517, -335,
    -613, -642, -504, -346, -517, -690, -475, -363, -431, -731, -434, -384,
    -362, -792, -385, -409, -315, -855, -336, -439, -337, -905, -291, -472,
    -441, -935, -263, -507, -425, -902, -254, -536, -397, -861, -251, -554,
    -394, -822, -249, -558, -416, -784, -249, -553, -463, -745, -252, -539,
    -532, -704, -263, -521, -619, -652, -283, -498, -713, -600, -314, -471,
    -860, -565, -357, -443, -1058, -562, -419, -415, -1088, -582, -496, -394,
    -1035, -603, -564, -381, -965, -624, -606, -376, -878, -646, -622, -378,
    -777, -671, -615, -385, -672, -695, -587, -396, -575, -716, -544, -408,
    -498, -733, -492, -422, -449, -743, -437, -436, -442, -746, -387, -448,
    -463, -738, -348, -456, -472, -714, -322, -461, -494, -678, -307, -460,
    -530, -631, -303, -452, -579, -575, -308, -437, -642, -515, -323, -416,
    -714, -453, -346, -388, -791, -522, -378, -360, -867, -743, -416, -351,
    -935, -832, -460, -374, -1001, -762, -506, -410, -1034, -608, -551, -431,
    -1035, -425, -591, -424, -1016, -340, -621, -391, -977, -341, -637, -345,
    -920, -393, -640, -305, -848, -469, -630, -281, -768, -552, -607, -277,
    -686, -644, -574, -291, -609, -723, -534, -321, -555, -778, -489, -360,
    -609, -809, -447, -401, -629, -813, -420, -438, -567, -796, -403, -467,
    -539, -774, -386, -484, -543, -746, -371, -491, -575, -712, -360, -490,
    -632, -674, -358, -481, -709, -629, -368, -466, -796, -581, -389, -445,
    -884, -541, -423, -421, -1008, -522, -467, -396, -1130, -531, -526, -374,
    -1121, -551, -589, -359, -1083, -574, -638, -351, -1023, -602, -667, -351,
    -942, -632, -674, -357, -848, -665, -662, -368, -749, -687, -632, -382,
    -658, -690, -590, -398, -583, -701, -540, -411, -536, -731, -487, -423,
    -529, -770, -439, -437, -517, -794, -399, -453, -517, -780, -370, -468,
    -536, -748, -351, -478, -573, -701, -341, -479, -626, -644, -343, -471,
    -691, -580, -355, -454, -765, -517, -378, -429, -838, -499, -409, -400,
    -903, -505, -447, -372, -989, -508, -490, -352, -1103, -497, -540, -337,
    -1091, -459, -593, -325, -1040, -433, -633, -313, -972, -448, -654, -300,
    -887, -488, -654, -293, -790, -542, -635, -295, -688, -581, -601, -305,
    -594, -617, -555, -321, -516, -665, -502, -342, -461, -716, -447, -366,
    -489, -767, -397, -393, -566, -799, -364, -423, -523, -771, -347, -449,
    -487, -737, -336, -465, -477, -699, -325, -470, -492, -658, -316, -466,
    -531, -614, -313, -454, -592, -566, -317, -435, -669, -560, -332, -413,
    -754, -601, -357, -394, -924, -655, -396, -386, -1075, -691, -456, -389,
    -1057, -684, -525, -399, -989, -640, -579, -407, -902, -641, -607, -409,
    -796, -671, -609, -410, -679, -717, -588, -415, -560, -769, -548, -426,
    -453, -827, -493, -443, -369, -912, -432, -469, -314, -987, -369, -504,
    -319, -1033, -313, -544, -427, -1045, -273, -584, -422, -1009, -257, -615,
    -378, -967, -250, -633, -356, -935, -244, -636, -355, -907, -237, -631,
    -377, -882, -232, -619, -424, -856, -233, -603, -492, -820, -241, -586,
    -572, -778, -259, -566, -655, -746, -288, -544, -805, -741, -328, -522,
    -907, -768, -383, -505, -867, -798, -439, -496, -802, -823, -480, -496,
    -713, -846, -498, -501, -603, -867, -493, -512, -481, -887, -467, -524,
    -362, -899, -423, -538, -257, -930, -367, -551, -173, -992, -305, -567,
    -122, -1057, -243, -590, -113, -1097, -187, -619, -94, -1090, -143, -648,
    -90, -1040, -110, -668, -105, -994, -88, -676, -140, -948, -76, -671, -192,
    -901, -75, -657, -259, -852, -85, -635, -337, -794, -105, -608, -417, -741,
    -135, -577, -489, -705, -173, -544, -585, -691, -215, -513, -731, -702,
    -265, -487, -712, -714, -322, -470, -639, -716, -364, -459, -547, -735,
    -385, -455, -436, -764, -381, -456, -314, -800, -357, -463, -191, -837,
    -314, -476, -81, -866, -258, -492, 10, -891, -196, -511, 74, -914, -132,
    -530, 65, -934, -74, -549, -30, -950, -35, -566, 4, -941, -15, -581, 51,
    -916, -2, -590, 71, -881, 10, -592, 65, -840, 21, -586, 32, -794, 27, -573,
    -25, -745, 27, -554, -105, -690, 16, -530, -197, -635, -6, -502, -294, -593,
    -39, -471, -478, -577, -85, -440, -569, -587, -147, -414, -519, -604, -208,
    -396, -444, -624, -250, -387, -341, -648, -268, -385, -219, -675, -261,
    -390, -89, -702, -232, -399, 32, -705, -184, -411, 135, -718, -125, -422,
    214, -758, -61, -434, 256, -812, 1, -449, 263, -859, 55, -470, 282, -859,
    96, -493, 284, -817, 127, -510, 266, -772, 148, -517, 229, -721, 158, -513,
    174, -666, 157, -500, 102, -609, 146, -478, 20, -551, 123, -450, -64, -488,
    92, -419, -163, -433, 52, -384, -382, -398, 1, -348, -493, -388, -68, -316,
    -402, -406, -136, -290, -283, -432, -179, -274, -156, -461, -191, -268, -26,
    -491, -175, -270, 99, -523, -135, -279, 209, -555, -81, -293, 295, -588,
    -18, -309, 355, -707, 46, -331, 390, -867, 104, -367, 389, -968, 153, -421,
    371, -973, 187, -481, 370, -893, 209, -528, 360, -775, 221, -549, 340, -697,
    226, -545, 307, -644, 224, -523, 261, -607, 216, -492, 201, -578, 201, -459,
    131, -556, 179, -428, 58, -558, 150, -401, -9, -605, 116, -383, -96, -657,
    78, -377, -255, -695, 32, -383, -248, -704, -21, -396, -173, -683, -64,
    -409, -82, -690, -85, -419, 23, -724, -84, -427, 134, -770, -62, -437, 240,
    -821, -23, -453, 333, -870, 27, -474, 407, -937, 82, -500, 461, -1021, 137,
    -532, 484, -1088, 188, -572, 401, -1121, 226, -615, 359, -1108, 243, -653,
    409, -1055, 248, -678, 436, -1014, 253, -688, 440, -984, 258, -685, 422,
    -959, 263, -674, 380, -936, 263, -659, 314, -915, 257, -641, 229, -876, 240,
    -624, 133, -824, 213, -603, 35, -776, 175, -579, -137, -761, 127, -554,
    -211, -787, 65, -532, -168, -830, 7, -519, -100, -859, -34, -517, -11, -881,
    -52, -523, 93, -900, -47, -533, 199, -916, -23, -546, 297, -930, 17, -559,
    377, -939, 66, -572, 435, -941, 118, -582, 469, -935, 168, -590, 466, -922,
    211, -595, 470, -900, 242, -596, 467, -869, 264, -591, 447, -830, 277, -582,
    410, -786, 281, -567, 356, -739, 276, -547, 287, -690, 262, -524, 206, -641,
    239, -497, 120, -589, 207, -468, 36, -539, 167, -437, -38, -500, 123, -405,
    -94, -473, 77, -375, -129, -457, 33, -349, -139, -450, -6, -326, -124, -450,
    -35, -309, -86, -457, -53, -298, -29, -470, -58, -291, 43, -488, -50, -290,
    122, -491, -31, -293, 205, -498, -1, -293, 279, -909, 37, -314, 334, -1106,
    79, -384, 372, -1071, 120, -476, 396, -931, 158, -546, 398, -713, 189, -575,
    379, -535, 211, -558, 340, -462, 223, -511, 282, -449, 224, -452, 208, -463,
    213, -399, 123, -488, 191, -358, 34, -512, 158, -334, -51, -524, 118, -322,
    -158, -528, 72, -318, -390, -545, 14, -320, -474, -572, -59, -325, -384,
    -607, -128, -335, -279, -650, -172, -349, -168, -690, -186, -367, -55, -727,
    -173, -388, 54, -763, -139, -411, 148, -797, -91, -435, 220, -829, -37,
    -458, 265, -873, 18, -482, 284, -922, 67, -507, 282, -959, 106, -534, 237,
    -969, 133, -561, 204, -943, 144, -582, 187, -898, 145, -593, 157, -856, 139,
    -592, 112, -814, 128, -582, 51, -770, 111, -565, -26, -726, 87, -543, -115,
    -668, 56, -518, -210, -625, 17, -489, -301, -609, -28, -459, -389, -617,
    -78, -434, -481, -639, -131, -417, -506, -652, -184, -408, -494, -651, -229,
    -405, -456, -673, -260, -405, -392, -710, -274, -410, -308, -754, -272,
    -421, -212, -801, -253, -437, -113, -849, -220, -459, -20, -901, -177, -485,
    56, -946, -128, -514, 45, -975, -78, -544, -63, -983, -44, -572, -7, -959,
    -28, -593, 50, -925, -15, -605, 67, -886, -1, -606, 46, -841, 12, -598, -13,
    -793, 18, -582, -107, -742, 12, -560, -231, -685, -8, -533, -373, -643, -46,
    -503, -514, -625, -100, -473, -711, -628, -169, -446, -890, -645, -257,
    -427, -882, -655, -349, -417, -839, -664, -424, -412, -763, -695, -470,
    -412, -658, -739, -487, -419, -533, -790, -476, -433, -405, -842, -443,
    -453, -287, -903, -392, -478, -193, -987, -331, -511, -129, -1062, -266,
    -550, -175, -1106, -207, -594, -314, -1106, -172, -635, -272, -1052, -161,
    -665, -231, -995, -156, -677, -226, -945, -152, -674, -257, -899, -149,
    -660, -323, -853, -152, -637, -421, -810, -165, -610, -543, -771, -193,
    -581, -675, -739, -236, -552, -799, -719, -293, -525, -973, -715, -362,
    -501, -1111, -725, -447, -483, -1093, -738, -532, -472, -1047, -762, -596,
    -468, -973, -794, -633, -470, -874, -831, -643, -479, -758, -867, -628,
    -493, -639, -880, -592, -511, -537, -809, -542, -524, -457, -811, -482,
    -527, -399, -927, -422, -531, -363, -1062, -365, -550, -352, -1147, -317,
    -588, -369, -1120, -281, -633, -414, -1058, -259, -666, -482, -993, -252,
    -680, -569, -924, -261, -676, -671, -852, -287, -658, -776, -781, -326,
    -628, -878, -715, -376, -590, -969, -658, -434, -549, -1098, -620, -497,
    -507, -1298, -608, -574, -469, -1320, -601, -664, -438, -1237, -604, -736,
    -415, -1142, -623, -774, -400, -1035, -652, -781, -394, -918, -690, -760,
    -396, -799, -729, -719, -405, -692, -767, -663, -421, -610, -809, -598,
    -440, -560, -892, -532, -465, -544, -989, -473, -498, -553, -1052, -426,
    -540, -579, -1054, -393, -584, -616, -994, -376, -617, -662, -922, -373,
    -631, -717, -858, -382, -628, -782, -798, -401, -610, -857, -739, -429,
    -583, -936, -684, -465, -550, -1013, -615, -508, -513, -1084, -525, -555,
    -473, -1142, -463, -604, -429, -1227, -457, -654, -386, -1321, -505, -709,
    -353, -1294, -571, -762, -335, -1244, -612, -800, -334, -1179, -654, -816,
    -344, -1097, -700, -812, -362, -1003, -747, -791, -386, -905, -793, -754,
    -413, -814, -835, -706, -442, -739, -876, -652, -472, -686, -912, -595,
    -501, -697, -936, -544, -529, -832, -944, -510, -553, -826, -923, -500,
    -572, -771, -881, -499, -581, -745, -832, -496, -580, -748, -777, -490,
    -569, -780, -718, -486, -549, -839, -657, -488, -522, -920, -595, -501,
    -490, -1012, -521, -526, -454, -1102, -450, -564, -414, -1202, -399, -612,
    -373, -1334, -387, -673, -333, -1345, -415, -741, -302, -1310, -455, -797,
    -283, -1254, -495, -830, -277, -1177, -538, -841, -282, -1083, -582, -830,
    -296, -978, -625, -801, -316, -877, -665, -756, -339, -788, -700, -702,
    -364, -721, -741, -642, -390, -692, -786, -584, -417, -699, -815, -535,
    -443, -684, -808, -497, -468, -686, -766, -471, -484, -708, -713, -454,
    -489, -750, -651, -448, -482, -809, -581, -452, -464, -881, -507, -468,
    -436, -960, -435, -496, -402, -1037, -369, -532, -363, -1104, -315, -576,
    -321, -1166, -279, -622, -281, -1282, -265, -674, -245, -1305, -268, -730,
    -216, -1258, -290, -777, -197, -1195, -328, -803, -187, -1114, -378, -807,
    -188, -1016, -435, -792, -199, -908, -494, -759, -219, -802, -522, -711,
    -245, -708, -479, -654, -268, -635, -493, -593, -283, -584, -587, -532,
    -297, -553, -695, -477, -320, -542, -763, -431, -354, -552, -729, -396,
    -390, -583, -668, -375, -415, -632, -601, -366, -423, -698, -527, -371,
    -416, -774, -453, -389, -395, -855, -376, -418, -364, -932, -343, -456,
    -328, -999, -356, -500, -293, -1129, -375, -550, -267, -1311, -383, -615,
    -251, -1299, -361, -692, -242, -1206, -314, -750, -233, -1099, -324, -776,
    -223, -972, -375, -771, -217, -827, -449, -740, -220, -672, -532, -686,
    -235, -526, -642, -615, -263, -406, -779, -532, -306, -326, -890, -447,
    -362, -334, -948, -369, -426, -504, -952, -315, -485, -514, -897, -294,
    -529, -455, -844, -289, -553, -426, -798, -285, -558, -427, -752, -280,
    -549, -461, -704, -276, -531, -530, -653, -280, -507, -625, -598, -294,
    -478, -736, -548, -322, -447, -855, -518, -364, -415, -1070, -525, -424,
    -386, -1152, -558, -505, -365, -1100, -594, -581, -356, -1017, -638, -632,
    -357, -897, -688, -652, -367, -744, -742, -641, -386, -570, -791, -602,
    -410, -397, -860, -538, -439, -243, -972, -457, -476, -125, -1074, -366,
    -523, -79, -1129, -276, -577, -62, -1130, -199, -629, -35, -1071, -138,
    -667, -41, -1013, -93, -684, -76, -958, -64, -684, -141, -903, -51, -670,
    -232, -846, -56, -646, -342, -783, -78, -616, -460, -760, -115, -582, -571,
    -773, -166, -551, -683, -791, -225, -528, -901, -809, -296, -515, -948,
    -799, -380, -510, -859, -769, -452, -506, -740, -784, -493, -502, -588,
    -829, -499, -501, -410, -888, -473, -508, -221, -949, -418, -524, -42,
    -1028, -341, -550, 108, -1118, -249, -586, 218, -1188, -151, -630, 219,
    -1227, -59, -678, 74, -1234, 7, -723, 118, -1193, 41, -755, 190, -1153, 63,
    -772, 220, -1114, 83, -774, 211, -1074, 101, -766, 162, -1032, 111, -749,
    74, -984, 111, -726, -47, -928, 95, -699, -186, -878, 61, -668, -351, -849,
    11, -636, -638, -863, -62, -606, -709, -893, -158, -586, -634, -917, -247,
    -576, -517, -944, -305, -575, -358, -973, -326, -582, -168, -1004, -309,
    -594, 29, -1017, -260, -610, 209, -1052, -184, -626, 359, -1134, -92, -646,
    466, -1221, 6, -676, 502, -1279, 99, -716, 522, -1288, 175, -758, 537,
    -1231, 234, -791, 523, -1178, 275, -805, 481, -1126, 299, -804, 411, -1072,
    307, -789, 315, -1015, 298, -766, 196, -957, 272, -735, 65, -886, 230, -699,
    -68, -814, 175, -659, -372, -769, 104, -616, -650, -760, 2, -576, -564,
    -773, -112, -543, -376, -804, -194, -522, -179, -830, -227, -512, 19, -856,
    -212, -513, 210, -882, -160, -520, 377, -907, -81, -532, 509, -928, 13,
    -546, 599, -978, 110, -563, 651, -1083, 199, -586, 659, -1182, 274, -622,
    619, -1230, 327, -669, 609, -1212, 359, -714, 595, -1134, 375, -744, 572,
    -1063, 381, -752, 534, -1003, 378, -743, 478, -949, 367, -721, 402, -897,
    348, -691, 310, -849, 320, -656, 208, -800, 282, -621, 107, -770, 237, -585,
    7, -759, 185, -553, -241, -774, 123, -528, -322, -795, 44, -512, -206, -808,
    -27, -505, -73, -825, -69, -504, 80, -859, -76, -509, 241, -903, -50, -520,
    396, -950, 2, -537, 529, -995, 72, -559, 631, -1018, 151, -584, 700, -1021,
    231, -608, 735, -1020, 302, -627, 651, -1034, 358, -641, 524, -1059, 384,
    -653, 592, -1066, 387, -664, 645, -1044, 388, -673, 667, -1005, 392, -676,
    658, -954, 399, -671, 616, -896, 403, -656, 540, -837, 399, -634, 433, -772,
    383, -605, 303, -702, 352, -571, 164, -642, 306, -532, -106, -613, 243,
    -493, -316, -616, 153, -458, -246, -638, 57, -432, -138, -663, -15, -417, 2,
    -689, -52, -412, 161, -717, -51, -416, 321, -746, -18, -425, 465, -775, 40,
    -439, 578, -795, 113, -454, 657, -805, 191, -470, 703, -806, 265, -484, 694,
    -802, 326, -495, 682, -790, 370, -501, 684, -766, 399, -503, 666, -726, 415,
    -499, 629, -672, 421, -489, 571, -609, 417, -471, 491, -540, 402, -446, 392,
    -471, 376, -414, 279, -410, 338, -378, 165, -573, 290, -347, 57, -778, 234,
    -345, -68, -801, 171, -374, -152, -686, 105, -406, -155, -518, 42, -417,
    -125, -372, -7, -400, -60, -338, -37, -362, 32, -377, -46, -321, 142, -456,
    -34, -292, 259, -548, -3, -282, 370, -581, 43, -291, 467, -548, 99, -307,
    546, -555, 159, -320, 564, -634, 218, -333, 427, -749, 260, -354, 446, -834,
    278, -389, 526, -829, 288, -429, 560, -792, 301, -461, 555, -738, 315, -480,
    512, -674, 326, -482, 433, -602, 326, -471, 318, -547, 312, -448, 177, -526,
    282, -419, 6, -525, 233, -392, -554, -540, 154, -370, -860, -540, 13, -356,
    -723, -487, -143, -345, -516, -468, -254, -333, -307, -497, -302, -322, -96,
    -556, -295, -317, 116, -631, -243, -324, 319, -736, -159, -344, 491, -852,
    -54, -379, 610, -947, 58, -428, 634, -1002, 165, -483, 438, -1016, 242,
    -536, 323, -987, 273, -578, 328, -951, 273, -603, 310, -907, 260, -613, 273,
    -854, 242, -609, 208, -788, 219, -594, 105, -705, 191, -569, -38, -617, 152,
    -534, -211, -542, 99, -491, -464, -504, 28, -446, -841, -525, -74, -405,
    -911, -548, -206, -376, -866, -579, -327, -359, -772, -625, -412, -355,
    -622, -685, -454, -363, -421, -753, -452, -381, -192, -859, -411, -410, 32,
    -989, -336, -453, 217, -1100, -236, -509, 310, -1163, -126, -574, 322,
    -1171, -23, -636, 358, -1134, 60, -682, 345, -1093, 122, -710, 280, -1040,
    161, -719, 164, -972, 175, -712, -3, -884, 162, -692, -213, -774, 120, -657,
    -445, -663, 50, -611, -668, -570, -47, -555, -932, -517, -164, -496, -1255,
    -520, -312, -442, -1282, -521, -477, -399, -1216, -548, -610, -370, -1109,
    -607, -691, -355, -948, -691, -721, -357, -734, -782, -707, -376, -486,
    -859, -653, -409, -241, -929, -565, -451, -39, -995, -451, -497, 42, -1056,
    -325, -545, -213, -1109, -220, -592, -269, -1114, -166, -635, -158, -1077,
    -140, -668, -131, -1009, -120, -684, -179, -913, -107, -681, -299, -787,
    -107, -659, -484, -625, -127, -617, -708, -453, -176, -556, -934, -305,
    -256, -479, -1187, -219, -364, -394, -1456, -221, -508, -313, -1494, -245,
    -671, -250, -1464, -286, -803, -208, -1399, -351, -886, -188, -1288, -436,
    -923, -189, -1124, -491, -921, -207, -917, -502, -883, -232, -694, -556,
    -814, -259, -498, -680, -718, -290, -402, -820, -606, -334, -403, -907,
    -497, -390, -380, -892, -408, -447, -417, -828, -342, -490, -508, -724,
    -303, -509, -644, -585, -296, -503, -812, -419, -319, -472, -991, -269,
    -373, -417, -1159, -157, -453, -347, -1312, -68, -552, -272, -1614, -3,
    -680, -198, -1693, 55, -852, -131, -1645, 114, -996, -72, -1560, 98, -1075,
    -23, -1449, 15, -1101, 8, -1303, -113, -1089, 17, -1116, -272, -1046, -1,
    -892, -479, -975, -46, -666, -682, -875, -118, -494, -830, -753, -211, -490,
    -906, -625, -310, -796, -911, -526, -400, -903, -870, -486, -467, -906,
    -814, -488, -507, -937, -740, -506, -522, -991, -645, -533, -515, -1071,
    -525, -567, -489, -1175, -383, -609, -446, -1291, -245, -663, -387, -1399,
    -141, -728, -319, -1539, -107, -806, -248, -1649, -147, -903, -189, -1647,
    -194, -1001, -149, -1623, -266, -1071, -130, -1576, -362, -1109, -133,
    -1497, -475, -1120, -154, -1376, -603, -1106, -194, -1216, -763, -1069,
    -249, -1036, -917, -1008, -322, -875, -1029, -924, -405, -817, -1082, -827,
    -490, -794, -1069, -733, -563, -777, -1028, -653, -613, -815, -969, -592,
    -640, -900, -887, -557, -645, -1017, -781, -551, -629, -1152, -648, -575,
    -596, -1285, -512, -626, -545, -1399, -392, -698, -481, -1489, -303, -781,
    -411, -1609, -268, -872, -341, -1669, -267, -972, -282, -1647, -282, -1056,
    -238, -1608, -344, -1107, -211, -1546, -442, -1129, -204, -1449, -560,
    -1126, -219, -1313, -652, -1099, -253, -1144, -716, -1050, -298, -967, -776,
    -978, -346, -824, -844, -886, -395, -891, -923, -788, -443, -1041, -976,
    -715, -493, -953, -962, -673, -537, -893, -901, -643, -567, -892, -800,
    -618, -577, -944, -666, -601, -564, -1042, -500, -599, -528, -1167, -323,
    -619, -470, -1297, -164, -661, -395, -1419, -50, -724, -308, -1585, -2,
    -810, -222, -1641, -2, -917, -148, -1624, -32, -1009, -93, -1587, -98,
    -1068, -60, -1521, -194, -1096, -50, -1413, -276, -1096, -62, -1259, -404,
    -1070, -91, -1068, -628, -1018, -140, -869, -818, -941, -215, -721, -919,
    -841, -306, -679, -941, -734, -396, -625, -857, -633, -466, -616, -762,
    -549, -505, -665, -658, -487, -512, -761, -541, -453, -494, -893, -409,
    -450, -455, -1042, -284, -477, -400, -1187, -201, -533, -336, -1314, -148,
    -610, -270, -1592, -132, -713, -211, -1699, -127, -864, -164, -1657, -89,
    -1003, -129, -1561, -112, -1081, -102, -1429, -199, -1105, -88, -1254, -327,
    -1089, -94, -1029, -472, -1039, -121, -757, -661, -955, -171, -472, -876,
    -838, -245, -238, -1035, -692, -341, -144, -1114, -534, -445, -416, -1131,
    -397, -541, -613, -1082, -324, -612, -589, -1020, -304, -654, -595, -953,
    -308, -669, -625, -875, -323, -662, -686, -784, -343, -638, -785, -676,
    -372, -601, -914, -566, -412, -551, -1055, -476, -466, -494, -1215, -433,
    -536, -434, -1490, -473, -633, -382, -1549, -528, -763, -348, -1481, -581,
    -872, -333, -1372, -656, -934, -335, -1203, -746, -949, -354, -958, -841,
    -923, -387, -650, -930, -855, -431, -327, -1007, -748, -483, -51, -1068,
    -604, -537, 102, -1112, -440, -590, 118, -1133, -282, -637, 148, -1122,
    -152, -674, 121, -1081, -56, -698, 42, -1010, 3, -705, -83, -910, 27, -696,
    -246, -781, 16, -668, -438, -721, -25, -624, -636, -833, -95, -581, -817,
    -914, -186, -558, -986, -873, -292, -553, -1127, -752, -406, -547, -1150,
    -581, -515, -526, -1116, -509, -600, -487, -1028, -536, -653, -442, -875,
    -626, -670, -408, -656, -741, -650, -397, -386, -856, -594, -410, -92, -966,
    -502, -445, 184, -1057, -378, -496, 374, -1126, -233, -555, 236, -1183, -94,
    -615, 236, -1188, 3, -669, 453, -1156, 77, -710, 557, -1102, 148, -732, 568,
    -1028, 213, -736, 497, -931, 263, -722, 349, -800, 286, -690, 136, -662,
    276, -641, -118, -556, 229, -579, -437, -513, 146, -512, -926, -556, 16,
    -452, -1027, -593, -160, -411, -939, -633, -322, -389, -778, -696, -430,
    -384, -528, -776, -474, -395, -205, -848, -456, -421, 145, -889, -381, -454,
    459, -929, -257, -490, 699, -987, -99, -526, 826, -1060, 71, -564, 665,
    -1129, 218, -605, 601, -1140, 307, -647, 739, -1102, 361, -680, 800, -1032,
    404, -697, 799, -932, 441, -695, 739, -808, 465, -673, 617, -672, 471, -632,
    435, -559, 452, -576, 199, -479, 406, -511, -589, -446, 313, -446, -1125,
    -436, 122, -390, -984, -410, -117, -345, -689, -418, -297, -311, -352, -474,
    -378, -291, 11, -563, -371, -287, 372, -668, -290, -301, 690, -775, -152,
    -333, 933, -908, 23, -380, 1087, -1035, 211, -442, 1153, -1116, 384, -514,
    1042, -1148, 518, -584, 806, -1135, 587, -642, 825, -1074, 601, -681, 853,
    -1008, 595, -696, 859, -932, 584, -692, 835, -846, 572, -671, 772, -754,
    558, -636, 659, -654, 537, -591, 495, -555, 501, -538, 294, -476, 447, -481,
    -71, -443, 369, -424, -661, -475, 241, -376, -645, -521, 68, -344, -428,
    -582, -81, -330, -148, -659, -164, -334, 181, -747, -172, -354, 515, -838,
    -112, -387, 802, -926, 2, -431, 1014, -1011, 154, -482, 1148, -1084, 317,
    -538, 1203, -1138, 468, -593, 1164, -1166, 587, -645, 1117, -1157, 662,
    -687, 1115, -1119, 703, -715, 1090, -1062, 723, -727, 1038, -988, 726, -722,
    953, -897, 715, -702, 830, -785, 689, -668, 666, -656, 645, -621, 471, -553,
    582, -562, 268, -492, 501, -498, 53, -482, 402, -438, -159, -514, 289, -391,
    -179, -527, 173, -360, -107, -569, 77, -343, 40, -643, 18, -342, 247, -735,
    3, -356, 483, -830, 33, -386, 713, -906, 103, -427, 909, -963, 204, -474,
    1057, -1006, 322, -521, 1123, -1039, 442, -565, 1112, -1064, 543, -603,
    1131, -1060, 616, -634, 1161, -1019, 669, -655, 1145, -948, 706, -661, 1087,
    -852, 726, -651, 983, -736, 727, -624, 830, -623, 706, -582, 632, -586, 661,
    -530, 406, -607, 591, -481, 153, -630, 496, -445, -109, -617, 379, -421,
    -212, -554, 248, -404, -222, -519, 126, -385, -151, -555, 32, -368, -6,
    -635, -24, -360, 194, -734, -35, -368, 416, -758, -4, -391, 629, -710, 65,
    -414, 814, -725, 161, -429, 958, -831, 272, -445, 979, -971, 384, -472, 832,
    -1071, 466, -517, 923, -1069, 513, -568, 989, -1023, 549, -610, 992, -944,
    580, -632, 940, -841, 601, -633, 830, -718, 606, -612, 662, -610, 589, -572,
    438, -540, 545, -521, 110, -498, 471, -467, -833, -496, 338, -417, -1159,
    -479, 102, -378, -969, -424, -156, -346, -674, -430, -332, -318, -352, -494,
    -405, -301, -11, -595, -390, -299, 327, -713, -306, -316, 632, -856, -170,
    -354, 865, -994, -1, -410, 1005, -1098, 178, -481, 1002, -1156, 339, -556,
    720, -1170, 447, -624, 590, -1137, 484, -676, 577, -1087, 478, -706, 532,
    -1020, 454, -716, 459, -936, 421, -707, 345, -835, 380, -682, 177, -714,
    329, -641, -42, -594, 262, -588, -290, -500, 175, -526, -659, -467, 64,
    -462, -1082, -507, -91, -407, -1104, -545, -274, -370, -1022, -598, -427,
    -352, -874, -670, -523, -352, -650, -755, -558, -368, -362, -844, -537,
    -398, -51, -966, -465, -441, 228, -1100, -352, -498, 435, -1205, -211, -567,
    508, -1259, -63, -641, 500, -1257, 66, -707, 511, -1213, 162, -754, 460,
    -1162, 227, -778, 351, -1096, 260, -783, 187, -1013, 260, -770, -30, -909,
    227, -741, -283, -801, 161, -699, -542, -708, 65, -645, -774, -636, -57,
    -587, -1059, -601, -199, -529, -1341, -608, -368, -479, -1328, -599, -542,
    -441, -1243, -630, -671, -415, -1112, -698, -741, -404, -924, -789, -758,
    -409, -682, -881, -730, -432, -415, -954, -661, -469, -165, -1016, -557,
    -513, 28, -1073, -430, -559, 62, -1127, -296, -606, -230, -1177, -193, -651,
    -250, -1177, -144, -692, -158, -1138, -123, -721, -148, -1070, -109, -734,
    -210, -977, -103, -729, -341, -855, -110, -706, -530, -701, -138, -664,
    -752, -541, -193, -604, -971, -408, -277, -529, -1235, -339, -389, -448,
    -1478, -353, -537, -374, -1496, -376, -698, -317, -1461, -417, -823, -280,
    -1390, -479, -898, -264, -1272, -558, -929, -267, -1100, -609, -921, -286,
    -886, -651, -879, -312, -660, -756, -804, -344, -468, -898, -704, -388,
    -393, -1009, -590, -445, -397, -1047, -482, -508, -380, -999, -395, -563,
    -425, -922, -332, -596, -523, -816, -298, -604, -664, -683, -295, -588,
    -835, -529, -323, -549, -1015, -396, -381, -491, -1180, -299, -465, -422,
    -1349, -227, -566, -349, -1640, -191, -701, -282, -1697, -150, -876, -224,
    -1645, -102, -1016, -175, -1554, -130, -1088, -137, -1436, -219, -1109,
    -114, -1283, -349, -1092, -114, -1088, -506, -1045, -138, -856, -699, -968,
    -188, -623, -879, -863, -262, -451, -1007, -736, -354, -481, -1073, -604,
    -449, -800, -1077, -507, -533, -886, -1044, -471, -595, -904, -994, -475,
    -632, -945, -927, -498, -646, -1007, -841, -529, -639, -1092, -728, -568,
    -615, -1197, -594, -615, -573, -1311, -464, -672, -518, -1417, -371, -740,
    -452, -1562, -357, -821, -385, -1655, -411, -920, -332, -1647, -456, -1015,
    -298, -1620, -523, -1080, -284, -1569, -608, -1115, -290, -1484, -704,
    -1122, -313, -1356, -821, -1104, -350, -1189, -975, -1063, -404, -1005,
    -1119, -998, -474, -849, -1214, -911, -555, -804, -1250, -812, -636, -779,
    -1223, -718, -703, -769, -1178, -638, -746, -816, -1123, -580, -765, -907,
    -1050, -549, -765, -1029, -957, -547, -747, -1167, -844, -575, -713, -1299,
    -737, -630, -666, -1412, -647, -705, -609, -1500, -581, -790, -548, -1624,
    -566, -883, -491, -1670, -561, -984, -443, -1644, -570, -1065, -408, -1603,
    -625, -1113, -387, -1535, -714, -1131, -383, -1432, -815, -1124, -398,
    -1288, -888, -1095, -429, -1114, -941, -1042, -469, -935, -993, -966, -512,
    -802, -1054, -871, -556, -908, -1127, -772, -600, -1035, -1166, -703, -645,
    -936, -1146, -663, -684, -883, -1090, -634, -709, -890, -1001, -610, -716,
    -950, -882, -595, -702, -1054, -732, -596, -668, -1183, -570, -619, -614,
    -1313, -424, -665, -543, -1440, -326, -732, -462, -1602, -303, -823, -382,
    -1642, -310, -931, -316, -1623, -339, -1020, -268, -1583, -398, -1076, -240,
    -1512, -481, -1100, -234, -1398, -555, -1096, -246, -1235, -655, -1067,
    -273, -1036, -811, -1011, -316, -836, -955, -930, -376, -702, -1044, -827,
    -449, -670, -1065, -718, -521, -617, -1007, -618, -579, -617, -930, -536,
    -611, -673, -835, -478, -618, -776, -719, -448, -601, -910, -584, -450,
    -565, -1060, -460, -482, -511, -1204, -371, -541, -447, -1338, -308, -620,
    -381, -1622, -285, -729, -320, -1699, -264, -884, -269, -1648, -225, -1017,
    -228, -1547, -252, -1088, -197, -1408, -339, -1106, -180, -1227, -464,
    -1085, -183, -995, -603, -1030, -209, -718, -761, -942, -257, -435, -914,
    -821, -324, -212, -1032, -672, -405, -151, -1104, -513, -490, -458, -1135,
    -382, -568, -610, -1116, -318, -630, -589, -1074, -302, -670, -597, -1014,
    -309, -689, -630, -935, -324, -687, -695, -838, -346, -668, -797, -722,
    -376, -633, -929, -604, -417, -585, -1070, -508, -473, -526, -1254, -464,
    -545, -464, -1479, -493, -646, -409, -1494, -529, -765, -370, -1439, -581,
    -859, -349, -1342, -655, -912, -346, -1184, -743, -924, -361, -956, -840,
    -898, -390, -668, -1004, -834, -436, -364, -1187, -733, -503, -101, -1311,
    -599, -590, 41, -1358, -445, -683, 74, -1337, -297, -763, 135, -1270, -172,
    -815, 134, -1210, -75, -837, 74, -1146, -10, -837, -42, -1074, 22, -820,
    -206, -989, 21, -789, -405, -882, -14, -747, -615, -770, -79, -695, -805,
    -678, -169, -635, -1031, -640, -278, -572, -1319, -680, -413, -518, -1306,
    -714, -561, -482, -1189, -757, -671, -463, -1016, -817, -726, -461, -772,
    -890, -727, -474, -463, -963, -679, -500, -126, -1058, -584, -536, 187,
    -1170, -450, -584, 429, -1265, -286, -643, 547, -1322, -114, -707, 568,
    -1334, 40, -767, 611, -1300, 161, -812, 600, -1257, 249, -838, 536, -1201,
    305, -846, 422, -1128, 328, -837, 257, -1036, 321, -813, 48, -932, 282,
    -775, -180, -842, 214, -727, -399, -775, 120, -672, -678, -743, 7, -617,
    -1059, -759, -138, -569, -1045, -747, -303, -534, -891, -764, -431, -509,
    -671, -819, -497, -497, -378, -896, -500, -499, -38, -959, -445, -517, 300,
    -971, -339, -543, 586, -985, -191, -569, 793, -1044, -21, -593, 879, -1138,
    151, -623, 682, -1230, 287, -662, 655, -1253, 363, -708, 776, -1225, 407,
    -747, 824, -1165, 442, -772, 813, -1077, 471, -777, 743, -967, 488, -762,
    612, -839, 487, -727, 421, -706, 462, -676, 158, -591, 410, -612, -704,
    -538, 305, -542, -1153, -524, 98, -477, -990, -525, -147, -424, -669, -554,
    -322, -386, -312, -608, -395, -366, 61, -682, -376, -364, 421, -764, -284,
    -378, 735, -854, -137, -407, 973, -984, 45, -449, 1121, -1116, 237, -507,
    1178, -1211, 412, -576, 1133, -1247, 546, -648, 1080, -1212, 630, -708,
    1015, -1149, 672, -746, 936, -1084, 683, -759, 845, -1007, 670, -752, 736,
    -918, 638, -729, 601, -820, 591, -692, 440, -759, 530, -645, 265, -761, 455,
    -597, 93, -777, 368, -558, -261, -787, 267, -531, -599, -781, 135, -515,
    -461, -724, -7, -502, -243, -734, -107, -490, 26, -799, -145, -482, 327,
    -892, -121, -488, 620, -994, -41, -510, 868, -1102, 80, -548, 1052, -1209,
    227, -600, 1173, -1292, 379, -663, 1214, -1338, 516, -728, 1055, -1357, 615,
    -787, 1010, -1334, 662, -833, 1097, -1296, 683, -860, 1133, -1256, 699,
    -870, 1126, -1207, 713, -866, 1078, -1147, 721, -850, 981, -1069, 717, -824,
    830, -969, 696, -788, 627, -870, 652, -742, 390, -808, 583, -688, -81, -828,
    482, -637, -385, -902, 336, -599, -341, -960, 175, -582, -255, -1012, 42,
    -584, 0, -1057, -38, -600, 311, -1110, -52, -624, 617, -1163, -2, -655, 875,
    -1201, 101, -689, 1063, -1228, 238, -723, 1183, -1250, 386, -754, 1215,
    -1275, 521, -781, 1219, -1301, 626, -806, 1216, -1305, 700, -828, 1133,
    -1281, 743, -844, 1062, -1221, 757, -849, 986, -1141, 748, -841, 872, -1049,
    721, -819, 720, -958, 677, -783, 539, -902, 615, -738, 343, -874, 536, -690,
    117, -858, 441, -647, -109, -842, 329, -612, -182, -809, 211, -583, -249,
    -812, 102, -559, -221, -860, 12, -543, -28, -928, -44, -541, 213, -1005,
    -53, -553, 467, -1011, -14, -577, 701, -993, 67, -599, 895, -1024, 177,
    -616, 1037, -1110, 302, -635, 1030, -1213, 423, -664, 893, -1272, 508, -705,
    975, -1247, 556, -747, 1013, -1198, 590, -776, 994, -1129, 614, -787, 926,
    -1043, 626, -780, 804, -939, 621, -755, 625, -819, 594, -715, 394, -703,
    541, -662, 2, -623, 459, -600, -959, -631, 309, -538, -1173, -650, 57, -489,
    -946, -644, -198, -454, -635, -663, -360, -432, -302, -713, -418, -423, 43,
    -783, -390, -427, 379, -860, -295, -444, 677, -943, -150, -474, 901, -1028,
    25, -514, 1030, -1101, 206, -561, 1026, -1154, 365, -612, 890, -1175, 476,
    -660, 763, -1148, 530, -698, 662, -1099, 540, -721, 537, -1029, 518, -727,
    391, -939, 473, -715, 216, -828, 409, -687, 10, -738, 328, -645, -218, -681,
    230, -595, -445, -640, 117, -544, -713, -608, -10, -498, -951, -576, -155,
    -457, -986, -541, -301, -422, -930, -568, -418, -394, -810, -643, -491,
    -379, -621, -745, -517, -381, -373, -857, -497, -403, -98, -975, -435, -444,
    162, -1078, -336, -499, 371, -1152, -211, -562, 396, -1197, -78, -626, 143,
    -1216, 24, -682, 225, -1194, 78, -726, 351, -1150, 116, -752, 377, -1087,
    150, -760, 316, -1006, 177, -751, 174, -903, 187, -727, -43, -768, 169,
    -686, -311, -629, 118, -631, -593, -525, 30, -564, -983, -497, -94, -495,
    -1309, -544, -268, -436, -1318, -589, -461, -396, -1263, -646, -615, -378,
    -1153, -720, -708, -378, -979, -805, -746, -396, -743, -889, -733, -428,
    -473, -982, -676, -470, -216, -1073, -581, -522, -18, -1145, -460, -578,
    -17, -1191, -329, -635, -307, -1202, -230, -686, -274, -1168, -183, -724,
    -181, -1111, -158, -744, -170, -1033, -139, -746, -233, -934, -128, -730,
    -365, -809, -131, -697, -555, -690, -156, -648, -776, -600, -210, -588,
    -993, -542, -294, -525, -1275, -524, -406, -466, -1494, -531, -558, -418,
    -1496, -513, -716, -382, -1456, -547, -836, -358, -1378, -622, -906, -348,
    -1250, -719, -931, -356, -1068, -802, -918, -380, -845, -911, -870, -418,
    -617, -1030, -790, -469, -428, -1125, -685, -531, -423, -1189, -569, -597,
    -687, -1212, -477, -659, -656, -1173, -431, -708, -571, -1116, -406, -736,
    -559, -1044, -387, -743, -613, -955, -374, -731, -728, -847, -375, -702,
    -887, -725, -398, -659, -1065, -608, -446, -602, -1296, -525, -522, -538,
    -1633, -527, -651, -475, -1688, -545, -835, -425, -1642, -551, -986, -390,
    -1566, -586, -1069, -369, -1462, -650, -1098, -362, -1319, -735, -1090,
    -372, -1127, -830, -1050, -396, -889, -945, -980, -435, -645, -1057, -880,
    -488, -464, -1145, -755, -550, -459, -1195, -623, -615, -543, -1191, -511,
    -672, -647, -1162, -437, -714, -785, -1116, -406, -737, -928, -1050, -417,
    -743, -1066, -961, -461, -731, -1198, -846, -529, -703, -1317, -728, -612,
    -659, -1417, -623, -704, -604, -1496, -546, -795, -541, -1614, -523, -887,
    -480, -1669, -523, -984, -428, -1644, -528, -1064, -389, -1601, -578, -1111,
    -365, -1534, -661, -1130, -358, -1431, -764, -1123, -370, -1288, -862,
    -1093, -399, -1113, -951, -1040, -443, -934, -1028, -965, -495, -797, -1092,
    -870, -550, -892, -1143, -770, -604, -1053, -1165, -700, -653, -966, -1140,
    -664, -692, -912, -1085, -639, -715, -916, -1002, -620, -719, -973, -893,
    -608, -705, -1074, -755, -611, -671, -1201, -602, -634, -619, -1331, -463,
    -681, -552, -1451, -365, -747, -476, -1612, -340, -837, -400, -1662, -353,
    -945, -336, -1647, -383, -1038, -290, -1614, -443, -1096, -265, -1555, -528,
    -1124, -260, -1458, -623, -1124, -274, -1319, -755, -1101, -306, -1147,
    -917, -1053, -358, -968, -1053, -982, -428, -842, -1128, -891, -507, -816,
    -1140, -792, -583, -775, -1091, -702, -640, -777, -1032, -627, -672, -831,
    -956, -574, -682, -927, -861, -548, -670, -1051, -745, -551, -641, -1186,
    -644, -583, -596, -1313, -585, -641, -543, -1417, -541, -716, -489, -1518,
    -502, -801, -439, -1641, -484, -897, -396, -1649, -439, -995, -360, -1613,
    -456, -1066, -331, -1555, -532, -1103, -313, -1462, -643, -1110, -314,
    -1327, -718, -1092, -334, -1148, -788, -1048, -367, -942, -893, -979, -408,
    -745, -1014, -886, -460, -647, -1128, -775, -523, -851, -1203, -672, -592,
    -873, -1190, -607, -657, -761, -1144, -567, -703, -716, -1076, -534, -727,
    -735, -987, -506, -728, -813, -875, -491, -709, -938, -768, -494, -672,
    -1087, -690, -522, -622, -1269, -644, -577, -568, -1609, -663, -678, -517,
    -1686, -669, -840, -480, -1640, -631, -983, -453, -1554, -647, -1063, -432,
    -1433, -711, -1091, -422, -1264, -804, -1078, -426, -1035, -905, -1031,
    -448, -749, -1039, -951, -486, -449, -1176, -834, -544, -211, -1271, -688,
    -615, -170, -1318, -528, -690, -497, -1329, -397, -757, -603, -1290, -332,
    -805, -583, -1241, -314, -832, -592, -1185, -316, -839, -626, -1117, -328,
    -829, -694, -1035, -347, -805, -801, -936, -376, -769, -936, -836, -417,
    -722, -1078, -761, -474, -667, -1278, -742, -548, -612, -1533, -805, -657,
    -567, -1538, -847, -790, -540, -1459, -890, -891, -531, -1334, -950, -941,
    -537, -1140, -1020, -946, -556, -869, -1091, -908, -586, -543, -1162, -829,
    -624, -217, -1233, -708, -669, 43, -1293, -554, -717, 149, -1336, -384,
    -766, 83, -1356, -230, -811, 48, -1340, -118, -847, 53, -1306, -46, -869, 4,
    -1254, -4, -877, -92, -1186, 10, -869, -232, -1096, -1, -848, -408, -1010,
    -37, -814, -602, -951, -99, -770, -786, -914, -182, -723, -987, -895, -283,
    -680, -1176, -889, -400, -643, -1199, -859, -520, -613, -1137, -875, -614,
    -590, -1015, -929, -669, -578, -820, -1006, -681, -579, -556, -1082, -650,
    -596, -248, -1147, -578, -626, 59, -1204, -466, -664, 323, -1254, -324,
    -706, 433, -1299, -166, -748, 225, -1341, -31, -790, 306, -1334, 55, -827,
    483, -1299, 120, -852, 558, -1245, 183, -863, 548, -1173, 238, -858, 461,
    -1077, 276, -838, 300, -951, 287, -802, 78, -825, 267, -751, -177, -737,
    211, -688, -561, -722, 119, -624, -1007, -779, -26, -570, -1019, -803, -205,
    -535, -910, -838, -357, -518, -722, -891, -450, -516, -445, -957, -477,
    -528, -103, -1006, -443, -551, 249, -1055, -352, -580, 552, -1123, -214,
    -614, 772, -1197, -47, -653, 839, -1259, 124, -697, 623, -1294, 259, -743,
    646, -1266, 335, -782, 768, -1212, 383, -806, 816, -1139, 423, -812, 803,
    -1047, 456, -799, 731, -939, 476, -770, 595, -816, 477, -725, 399, -693,
    453, -668, 93, -593, 399, -601, -828, -569, 284, -533, -1163, -574, 65,
    -475, -959, -585, -178, -431, -626, -619, -342, -403, -261, -677, -401,
    -391, 114, -751, -371, -396, 471, -830, -269, -416, 778, -921, -115, -448,
    1007, -1052, 72, -492, 1147, -1184, 266, -552, 1191, -1275, 438, -624, 1137,
    -1307, 567, -697, 1084, -1266, 646, -757, 1015, -1207, 684, -793, 932,
    -1145, 691, -805, 839, -1074, 674, -798, 727, -993, 640, -775, 589, -902,
    590, -740, 425, -823, 527, -695, 249, -772, 449, -645, 75, -741, 361, -596,
    -327, -748, 256, -554, -611, -770, 118, -524, -440, -765, -22, -505, -211,
    -802, -116, -495, 68, -870, -146, -496, 372, -954, -114, -511, 662, -1041,
    -27, -540, 901, -1124, 100, -580, 1074, -1198, 249, -629, 1184, -1252, 400,
    -681, 1201, -1279, 534, -731, 1017, -1294, 624, -774, 1004, -1277, 662,
    -807, 1088, -1246, 679, -826, 1120, -1212, 692, -832, 1111, -1160, 705,
    -827, 1058, -1088, 712, -811, 956, -990, 706, -784, 798, -868, 683, -743,
    590, -750, 636, -691, 340, -672, 565, -629, -167, -677, 459, -568, -410,
    -734, 306, -520, -367, -788, 145, -493, -265, -843, 15, -486, 6, -897, -60,
    -494, 321, -962, -67, -515, 627, -1024, -10, -545, 881, -1079, 98, -581,
    1064, -1129, 238, -620, 1177, -1171, 387, -659, 1198, -1204, 521, -697,
    1202, -1215, 622, -730, 1189, -1194, 693, -756, 1096, -1151, 732, -770,
    1032, -1081, 741, -770, 954, -990, 730, -755, 837, -887, 701, -726, 684,
    -788, 656, -683, 503, -723, 593, -632, 307, -685, 513, -579, -2, -666, 416,
    -531, -489, -661, 285, -492, -493, -634, 123, -461, -402, -649, -17, -438,
    -221, -708, -110, -426, 72, -792, -141, -428, 379, -883, -109, -447, 658,
    -927, -23, -478, 878, -946, 102, -512, 1030, -980, 245, -545, 1120, -1043,
    387, -576, 1040, -1125, 505, -611, 870, -1171, 573, -650, 922, -1150, 599,
    -687, 933, -1101, 608, -712, 901, -1028, 610, -720, 828, -937, 602, -710,
    706, -832, 581, -684, 531, -750, 544, -644, 310, -700, 485, -596, -136,
    -681, 399, -549, -1031, -703, 243, -510, -1153, -681, -6, -482, -915, -634,
    -242, -459, -610, -649, -384, -440, -277, -713, -427, -429, 71, -805, -389,
    -432, 410, -911, -287, -452, 704, -1038, -137, -490, 918, -1152, 41, -545,
    1033, -1232, 222, -611, 968, -1274, 377, -677, 673, -1276, 469, -736, 609,
    -1243, 493, -778, 586, -1196, 483, -801, 535, -1134, 457, -805, 453, -1058,
    423, -793, 325, -963, 380, -767, 143, -855, 325, -727, -88, -751, 253, -676,
    -344, -677, 161, -618, -776, -670, 41, -561, -1113, -717, -126, -515, -1082,
    -749, -308, -486, -985, -798, -449, -474, -816, -862, -530, -478, -572,
    -934, -551, -496, -271, -1010, -517, -525, 39, -1111, -434, -565, 304,
    -1216, -311, -616, 487, -1296, -165, -676, 523, -1336, -18, -738, 524,
    -1327, 103, -792, 520, -1291, 192, -829, 454, -1245, 249, -848, 330, -1184,
    274, -849, 151, -1106, 265, -834, -79, -1006, 224, -806, -338, -898, 149,
    -764, -595, -799, 45, -711, -821, -725, -83, -652, -1145, -702, -231, -593,
    -1358, -714, -407, -543, -1309, -717, -575, -506, -1214, -755, -690, -483,
    -1069, -821, -747, -476, -866, -904, -753, -485, -614, -980, -714, -509,
    -346, -1038, -636, -544, -106, -1088, -525, -584, 65, -1137, -394, -625, 12,
    -1187, -263, -665, -272, -1225, -173, -705, -215, -1214, -134, -740, -145,
    -1170, -116, -763, -153, -1097, -104, -770, -233, -1e3, -100, -760, -379,
    -874, -112, -732, -579, -722, -146, -686, -804, -571, -209, -623, -1021,
    -453, -300, -548, -1311, -404, -419, -469, -1498, -419, -575, -399, -1490,
    -439, -731, -346, -1447, -483, -844, -314, -1366, -548, -909, -301, -1234,
    -625, -930, -307, -1050, -666, -913, -326, -830, -724, -863, -353, -608,
    -843, -782, -387, -434, -974, -676, -434, -393, -1065, -562, -493, -385,
    -1075, -458, -555, -383, -1020, -377, -603, -441, -939, -320, -629, -552,
    -832, -294, -631, -702, -700, -298, -609, -878, -553, -334, -567, -1056,
    -436, -398, -508, -1216, -349, -487, -439, -1428, -288, -593, -370, -1675,
    -258, -741, -307, -1691, -207, -915, -254, -1625, -176, -1039, -209, -1528,
    -220, -1097, -174, -1402, -320, -1108, -157, -1239, -452, -1083, -163,
    -1034, -616, -1029, -192, -797, -809, -945, -248, -572, -976, -834, -327,
    -428, -1085, -704, -421, -549, -1134, -575, -514, -850, -1123, -492, -593,
    -885, -1084, -469, -647, -910, -1033, -478, -677, -956, -965, -503, -685,
    -1023, -879, -537, -674, -1114, -765, -577, -646, -1224, -636, -626, -603,
    -1337, -517, -687, -546, -1444, -443, -758, -481, -1596, -457, -842, -419,
    -1657, -511, -944, -372, -1642, -559, -1033, -346, -1610, -628, -1091, -338,
    -1551, -713, -1118, -349, -1456, -805, -1119, -375, -1317, -916, -1096,
    -415, -1142, -1048, -1049, -469, -959, -1166, -978, -536, -823, -1244, -886,
    -610, -798, -1272, -786, -681, -766, -1246, -694, -739, -772, -1207, -619,
    -775, -831, -1152, -567, -791, -932, -1078, -543, -788, -1060, -981, -549,
    -769, -1199, -870, -584, -734, -1328, -767, -645, -685, -1434, -680, -723,
    -628, -1527, -620, -811, -568, -1646, -610, -907, -512, -1665, -596, -1006,
    -466, -1636, -613, -1079, -431, -1589, -674, -1119, -411, -1514, -763,
    -1131, -409, -1401, -859, -1119, -426, -1248, -932, -1084, -458, -1068,
    -992, -1025, -500, -893, -1051, -944, -545, -790, -1110, -846, -590, -959,
    -1171, -751, -636, -1014, -1187, -690, -680, -916, -1157, -654, -715, -878,
    -1094, -626, -734, -898, -1002, -604, -734, -970, -881, -593, -715, -1083,
    -732, -599, -676, -1214, -577, -627, -619, -1342, -445, -679, -547, -1482,
    -367, -751, -468, -1625, -362, -848, -393, -1639, -374, -955, -333, -1615,
    -411, -1036, -292, -1569, -477, -1084, -272, -1488, -562, -1101, -272,
    -1362, -635, -1091, -289, -1189, -729, -1055, -320, -986, -854, -993, -363,
    -791, -975, -906, -419, -689, -1058, -800, -484, -656, -1072, -692, -549,
    -609, -1026, -596, -599, -624, -958, -519, -628, -692, -865, -467, -634,
    -804, -747, -444, -618, -945, -608, -453, -582, -1096, -497, -493, -529,
    -1235, -424, -557, -467, -1383, -372, -641, -404, -1600, -343, -750, -347,
    -1659, -304, -886, -299, -1610, -263, -998, -258, -1524, -300, -1060, -226,
    -1400, -393, -1077, -209, -1226, -520, -1058, -214, -997, -663, -1007, -241,
    -734, -835, -923, -291, -482, -992, -809, -363, -295, -1103, -670, -449,
    -308, -1160, -527, -537, -602, -1169, -418, -614, -608, -1134, -368, -671,
    -541, -1086, -347, -704, -522, -1023, -337, -715, -550, -945, -332, -707,
    -629, -850, -335, -683, -755, -741, -352, -646, -909, -636, -388, -596,
    -1067, -558, -446, -539, -1299, -538, -527, -482, -1492, -579, -642, -435,
    -1476, -616, -766, -404, -1414, -671, -858, -391, -1304, -746, -905, -394,
    -1130, -831, -912, -413, -885, -910, -878, -445, -592, -1002, -807, -488,
    -297, -1103, -698, -538, -53, -1191, -559, -597, 49, -1250, -406, -658, 90,
    -1261, -264, -716, 140, -1231, -146, -759, 123, -1186, -57, -784, 48, -1121,
    0, -791, -81, -1038, 24, -781, -257, -931, 14, -754, -460, -826, -29, -713,
    -665, -741, -101, -661, -846, -678, -196, -604, -1112, -653, -309, -549,
    -1339, -656, -450, -503, -1281, -638, -592, -467, -1157, -667, -689, -442,
    -972, -733, -731, -430, -714, -822, -721, -435, -397, -911, -663, -457, -64,
    -984, -560, -493, 231, -1045, -419, -535, 451, -1099, -253, -581, 482,
    -1149, -86, -626, 236, -1192, 42, -670, 301, -1187, 113, -709, 423, -1147,
    159, -735, 466, -1079, 198, -746, 440, -988, 230, -739, 348, -875, 247,
    -715, 188, -747, 243, -674, -25, -622, 212, -619, -267, -522, 150, -553,
    -662, -471, 56, -485, -1044, -474, -89, -424, -1021, -491, -260, -377, -906,
    -536, -397, -347, -711, -608, -476, -335, -430, -694, -492, -343, -90, -767,
    -449, -366, 256, -876, -353, -401, 550, -1005, -212, -451, 759, -1110, -45,
    -512, 838, -1171, 124, -580, 868, -1169, 269, -642, 905, -1117, 380, -687,
    891, -1051, 459, -709, 831, -969, 508, -711, 725, -867, 527, -692, 570,
    -750, 517, -657, 370, -642, 479, -608, 144, -574, 413, -550, -158, -537,
    321, -492, -791, -532, 186, -440, -1032, -525, -12, -400, -826, -497, -209,
    -370, -520, -521, -332, -348, -175, -593, -367, -338, 184, -692, -324, -344,
    520, -800, -217, -368, 794, -912, -65, -407, 989, -1032, 113, -461, 1105,
    -1130, 289, -526, 1134, -1192, 443, -595, 939, -1222, 550, -659, 822, -1201,
    594, -711, 896, -1154, 602, -744, 931, -1097, 602, -757, 932, -1027, 601,
    -752, 892, -946, 599, -732, 806, -855, 590, -699, 666, -755, 568, -656, 476,
    -664, 527, -605, 247, -602, 463, -549, -255, -601, 368, -496, -559, -640,
    222, -455, -448, -677, 64, -430, -266, -730, -56, -422, -12, -795, -114,
    -428, 290, -868, -108, -448, 590, -942, -42, -478, 844, -1034, 71, -518,
    1030, -1143, 213, -566, 1149, -1236, 362, -625, 1180, -1290, 497, -688,
    1180, -1291, 601, -745, 1193, -1246, 674, -787, 1175, -1195, 722, -808,
    1128, -1134, 748, -810, 1048, -1060, 753, -797, 930, -974, 738, -770, 769,
    -861, 703, -730, 575, -725, 646, -679, 366, -599, 567, -616, 140, -520, 470,
    -546, -299, -527, 348, -478, -395, -576, 197, -427, -246, -624, 61, -396,
    -44, -684, -25, -385, 206, -755, -51, -392, 478, -833, -19, -413, 730, -909,
    62, -447, 934, -977, 177, -488, 1080, -1030, 311, -533, 1165, -1065, 442,
    -577, 1170, -1080, 555, -616, 1180, -1068, 638, -647, 1182, -1029, 696,
    -666, 1152, -965, 732, -671, 1089, -877, 748, -662, 988, -771, 744, -636,
    844, -653, 719, -597, 658, -535, 672, -544, 444, -426, 602, -483, 225, -332,
    511, -417, 32, -266, 403, -350, -107, -239, 286, -289, -177, -251, 173,
    -240, -174, -298, 76, -207, -97, -371, 7, -192, 44, -461, -28, -196, 233,
    -512, -25, -218, 449, -526, 14, -243, 661, -800, 87, -280, 839, -992, 184,
    -346, 975, -1047, 295, -431, 1065, -1028, 405, -510, 1108, -907, 505, -564,
    1106, -779, 584, -584, 1057, -675, 638, -572, 960, -578, 664, -539, 811,
    -481, 661, -491, 614, -382, 628, -436, 381, -307, 566, -375, 140, -319, 477,
    -318, -207, -362, 363, -275, -758, -401, 208, -251, -854, -401, 11, -241,
    -654, -359, -163, -237, -423, -367, -268, -233, -162, -437, -299, -233, 114,
    -540, -267, -244, 373, -656, -186, -270, 585, -767, -69, -311, 733, -894,
    64, -365, 815, -1010, 195, -430, 828, -1086, 307, -501, 633, -1119, 385,
    -569, 459, -1100, 410, -625, 511, -1032, 401, -661, 521, -964, 383, -673,
    489, -893, 365, -667, 410, -819, 345, -645, 282, -747, 316, -612, 110, -674,
    274, -572, -92, -601, 214, -527, -296, -545, 134, -481, -544, -526, 36,
    -437, -851, -559, -86, -401, -850, -614, -221, -379, -744, -671, -330, -374,
    -590, -728, -392, -383, -397, -786, -406, -403, -187, -839, -376, -431, 11,
    -885, -312, -463, 171, -951, -224, -497, 281, -1059, -126, -536, 337, -1154,
    -30, -584, 313, -1197, 51, -638, 269, -1173, 108, -687, 223, -1088, 139,
    -717, 151, -1009, 149, -725, 56, -940, 140, -712, -55, -878, 114, -686,
    -178, -821, 72, -652, -303, -769, 18, -614, -420, -711, -45, -574, -520,
    -666, -113, -534, -602, -644, -182, -497, -751, -660, -251, -466, -798,
    -702, -323, -447, -720, -735, -382, -439, -627, -769, -414, -443, -521,
    -806, -420, -454, -410, -843, -402, -470, -306, -878, -365, -490, -218,
    -900, -317, -513, -156, -903, -263, -533, -119, -902, -210, -549, -119,
    -907, -164, -561, -224, -923, -133, -570, -277, -935, -125, -578, -249,
    -920, -128, -585, -238, -893, -134, -588, -245, -855, -139, -584, -274,
    -811, -144, -575, -325, -763, -153, -559, -396, -699, -168, -537, -480,
    -619, -191, -508, -568, -543, -223, -473, -692, -497, -265, -434, -832,
    -497, -319, -396, -830, -526, -380, -367, -794, -546, -429, -349, -737,
    -560, -460, -341, -663, -572, -471, -340, -577, -585, -463, -344, -491,
    -580, -439, -350, -414, -551, -403, -353, -354, -548, -361, -353, -315,
    -588, -318, -353, -315, -652, -278, -358, -315, -702, -248, -372, -320,
    -673, -227, -389, -341, -627, -214, -401, -378, -574, -210, -403, -429,
    -513, -214, -393, -494, -449, -228, -375, -567, -383, -251, -348, -642,
    -336, -282, -316, -713, -349, -319, -285, -841, -380, -363, -261, -986,
    -395, -419, -248, -974, -382, -482, -242, -906, -329, -530, -237, -832,
    -308, -555, -228, -751, -326, -558, -219, -665, -367, -541, -214, -583,
    -419, -511, -216, -513, -471, -470, -227, -461, -559, -426, -247, -431,
    -672, -382, -278, -428, -760, -344, -321, -511, -797, -318, -369, -571,
    -777, -311, -413, -540, -711, -315, -442, -523, -666, -320, -453, -522,
    -638, -324, -450, -539, -618, -326, -440, -574, -601, -330, -426, -627,
    -585, -340, -411, -694, -552, -356, -397, -765, -512, -380, -380, -844,
    -482, -412, -362, -975, -483, -453, -344, -1009, -519, -505, -330, -976,
    -562, -551, -326, -928, -594, -581, -330, -863, -621, -593, -340, -787,
    -645, -588, -355, -707, -666, -567, -370, -631, -684, -535, -386, -567,
    -741, -496, -403, -519, -842, -453, -426, -496, -933, -413, -459, -502,
    -970, -378, -500, -498, -941, -353, -538, -504, -865, -335, -562, -524,
    -806, -326, -567, -556, -758, -323, -558, -601, -715, -329, -539, -655,
    -675, -342, -515, -716, -634, -362, -488, -778, -590, -389, -460, -834,
    -561, -421, -431, -894, -550, -456, -405, -1003, -559, -496, -384, -1014,
    -581, -541, -371, -971, -592, -578, -365, -916, -611, -599, -364, -848,
    -641, -603, -369, -772, -676, -591, -378, -693, -714, -565, -392, -620,
    -744, -530, -410, -559, -734, -489, -428, -515, -704, -446, -440, -496,
    -683, -406, -445, -568, -694, -376, -445, -597, -733, -362, -445, -556,
    -752, -357, -450, -535, -737, -352, -456, -533, -701, -348, -459, -550,
    -654, -344, -456, -587, -600, -344, -445, -639, -543, -350, -426, -704,
    -475, -365, -401, -772, -410, -388, -370, -851, -360, -418, -336, -975,
    -338, -459, -301, -994, -347, -508, -271, -958, -364, -550, -250, -905,
    -380, -577, -238, -835, -398, -585, -234, -754, -417, -576, -235, -669,
    -438, -552, -241, -589, -433, -517, -249, -522, -501, -475, -258, -471,
    -640, -430, -277, -448, -752, -387, -312, -448, -788, -350, -358, -435,
    -738, -322, -401, -435, -608, -302, -425, -449, -519, -289, -423, -477,
    -458, -283, -403, -518, -415, -285, -373, -569, -383, -295, -339, -627,
    -358, -312, -307, -687, -318, -336, -278, -745, -271, -366, -250, -873,
    -240, -402, -223, -979, -240, -451, -199, -937, -277, -502, -181, -859,
    -332, -537, -175, -773, -372, -550, -180, -681, -404, -541, -192, -588,
    -431, -515, -209, -500, -455, -476, -227, -426, -475, -429, -246, -372,
    -488, -379, -263, -339, -492, -332, -277, -329, -492, -291, -289, -343,
    -488, -259, -297, -343, -479, -239, -301, -344, -461, -226, -302, -354,
    -432, -219, -299, -373, -396, -217, -291, -403, -355, -220, -279, -444,
    -311, -229, -262, -493, -268, -242, -242, -544, -244, -262, -219, -595,
    -593, -286, -209, -643, -940, -313, -252, -693, -1012, -343, -340, -712,
    -879, -372, -429, -702, -614, -398, -477, -675, -361, -416, -471, -628,
    -281, -423, -423, -566, -312, -418, -361, -492, -399, -403, -309, -413,
    -507, -377, -282, -334, -604, -343, -281, -262, -705, -303, -302, -199,
    -803, -259, -341, -163, -878, -216, -391, -216, -930, -180, -444, -193,
    -953, -157, -495, -148, -935, -140, -535, -127, -924, -123, -562, -129,
    -916, -109, -578, -152, -909, -98, -586, -193, -901, -95, -588, -251, -893,
    -100, -587, -318, -887, -115, -583, -387, -882, -138, -579, -472, -882,
    -169, -575, -611, -890, -209, -571, -617, -895, -258, -570, -562, -901,
    -299, -570, -489, -911, -322, -572, -401, -923, -326, -575, -304, -934,
    -310, -580, -207, -944, -279, -586, -120, -950, -237, -593, -52, -925, -188,
    -597, -3, -925, -139, -598, 31, -972, -94, -600, 53, -1033, -55, -608, 63,
    -1073, -23, -624, 59, -1056, 1, -644, 41, -1013, 16, -658, 11, -971, 23,
    -661, -32, -928, 21, -654, -84, -885, 11, -640, -141, -843, -6, -620, -199,
    -804, -30, -595, -252, -790, -58, -570, -296, -798, -89, -548, -400, -814,
    -121, -533, -472, -821, -161, -524, -414, -807, -199, -520, -344, -790,
    -222, -516, -261, -796, -227, -513, -168, -819, -214, -511, -74, -848, -186,
    -513, 15, -880, -147, -520, 88, -889, -100, -532, 144, -867, -52, -542, 182,
    -842, -6, -547, 191, -838, 35, -547, 116, -870, 63, -546, 121, -910, 76,
    -549, 155, -908, 82, -557, 170, -887, 88, -563, 167, -856, 93, -566, 146,
    -819, 96, -562, 106, -780, 95, -552, 49, -742, 88, -536, -19, -709, 72,
    -517, -92, -713, 48, -497, -243, -751, 15, -482, -381, -793, -35, -477,
    -349, -812, -90, -481, -268, -796, -132, -488, -177, -767, -152, -493, -78,
    -767, -149, -494, 20, -783, -126, -493, 110, -807, -89, -495, 183, -833,
    -43, -500, 236, -857, 5, -508, 270, -898, 51, -520, 289, -967, 91, -538,
    283, -1027, 123, -563, 207, -1054, 143, -593, 211, -1031, 147, -621, 240,
    -967, 148, -638, 254, -919, 148, -640, 255, -888, 151, -631, 240, -869, 152,
    -615, 208, -856, 151, -598, 160, -847, 145, -581, 101, -835, 133, -567, 36,
    -790, 113, -554, -26, -712, 86, -536, -136, -652, 54, -512, -205, -650, 13,
    -484, -164, -712, -27, -461, -108, -792, -55, -454, -37, -846, -65, -462,
    41, -877, -59, -481, 122, -897, -39, -504, 196, -911, -7, -526, 258, -920,
    31, -546, 307, -925, 71, -562, 342, -942, 110, -575, 358, -971, 145, -586,
    344, -995, 172, -599, 334, -996, 190, -613, 341, -962, 201, -622, 337, -903,
    207, -623, 319, -853, 210, -614, 289, -810, 208, -596, 245, -770, 200, -573,
    191, -732, 187, -548, 130, -698, 167, -521, 68, -657, 142, -495, 11, -638,
    112, -469, -37, -649, 79, -447, -89, -675, 46, -432, -98, -704, 14, -426,
    -77, -714, -12, -428, -40, -704, -27, -432, 12, -714, -31, -437, 73, -738,
    -23, -442, 139, -768, -6, -450, 204, -799, 20, -461, 263, -826, 52, -475,
    313, -848, 86, -491, 349, -861, 121, -507, 356, -867, 153, -521, 345, -864,
    177, -533, 351, -851, 194, -540, 351, -830, 205, -543, 334, -801, 211, -541,
    303, -767, 212, -533, 258, -728, 207, -520, 201, -687, 194, -503, 135, -645,
    174, -482, 67, -605, 148, -459, 2, -570, 116, -434, -53, -543, 81, -410,
    -93, -524, 45, -387, -115, -516, 11, -367, -117, -519, -17, -351, -101,
    -531, -38, -341, -69, -552, -50, -336, -24, -578, -51, -337, 31, -606, -44,
    -343, 90, -633, -27, -353, 150, -626, -4, -366, 205, -512, 25, -371, 251,
    -498, 57, -364, 284, -582, 88, -354, 303, -663, 118, -356, 306, -702, 142,
    -369, 292, -657, 160, -387, 263, -583, 170, -396, 219, -511, 171, -392, 164,
    -444, 164, -375, 101, -384, 147, -349, 34, -332, 123, -317, -32, -289, 93,
    -283, -92, -257, 59, -250, -177, -236, 22, -220, -341, -227, -23, -194,
    -380, -228, -77, -174, -295, -245, -124, -161, -212, -266, -150, -155, -130,
    -292, -155, -155, -52, -321, -140, -161, 17, -351, -113, -172, 71, -381,
    -78, -185, 107, -409, -40, -201, 125, -433, -6, -218, 128, -454, 23, -235,
    123, -609, 45, -255, 114, -854, 59, -297, 103, -986, 66, -367, 90, -957, 68,
    -444, 72, -802, 66, -499, 47, -604, 61, -515, 17, -486, 52, -494, -21, -434,
    39, -450, -66, -424, 24, -401, -115, -436, 4, -357, -165, -460, -19, -325,
    -213, -488, -45, -307, -256, -493, -73, -299, -297, -494, -101, -298, -394,
    -520, -130, -300, -419, -571, -165, -308, -378, -638, -194, -322, -330,
    -695, -212, -345, -276, -724, -216, -372, -219, -751, -207, -400, -163,
    -776, -189, -425, -114, -798, -165, -449, -76, -816, -137, -469, -49, -831,
    -108, -487, -33, -841, -82, -502, -26, -854, -61, -515, -68, -870, -45,
    -526, -147, -878, -41, -536, -124, -868, -48, -545, -101, -838, -55, -549,
    -93, -800, -59, -546, -100, -766, -60, -537, -124, -735, -62, -524, -165,
    -706, -67, -507, -221, -679, -77, -488, -288, -656, -94, -469, -358, -634,
    -119, -451, -423, -601, -150, -433, -500, -565, -186, -415, -608, -539,
    -227, -396, -603, -532, -272, -378, -565, -554, -308, -363, -516, -584,
    -329, -356, -459, -604, -334, -355, -398, -619, -325, -360, -341, -631,
    -306, -368, -293, -640, -280, -377, -257, -645, -251, -385, -232, -647,
    -222, -392, -218, -654, -196, -398, -217, -688, -175, -404, -232, -735,
    -160, -414, -234, -762, -151, -429, -242, -748, -147, -444, -259, -692,
    -146, -453, -286, -635, -150, -452, -322, -585, -157, -440, -367, -540,
    -170, -421, -418, -499, -187, -397, -472, -462, -209, -371, -524, -432,
    -236, -345, -571, -409, -265, -320, -610, -393, -295, -298, -685, -387,
    -325, -279, -746, -388, -360, -265, -715, -396, -393, -256, -676, -410,
    -415, -251, -630, -429, -424, -250, -578, -451, -421, -254, -525, -475,
    -408, -262, -477, -498, -387, -272, -437, -518, -361, -284, -407, -534,
    -334, -296, -387, -505, -308, -308, -377, -462, -285, -312, -372, -502,
    -267, -311, -374, -587, -254, -314, -382, -653, -245, -328, -397, -668,
    -241, -350, -421, -600, -241, -368, -454, -539, -246, -375, -495, -489,
    -257, -369, -540, -446, -272, -354, -588, -409, -292, -333, -636, -379,
    -316, -310, -679, -356, -342, -287, -717, -338, -370, -265, -803, -315,
    -399, -246, -907, -293, -436, -228, -884, -281, -477, -213, -818, -289,
    -506, -200, -753, -318, -518, -192, -689, -351, -513, -191, -631, -375,
    -495, -197, -581, -392, -469, -206, -546, -405, -439, -217, -526, -416,
    -409, -229, -520, -423, -382, -239, -523, -427, -362, -248, -530, -428,
    -348, -255, -541, -535, -339, -263, -558, -733, -337, -287, -560, -852,
    -338, -335, -561, -837, -341, -392, -568, -717, -345, -436, -580, -550,
    -348, -450, -600, -447, -354, -434, -627, -397, -361, -398, -659, -378,
    -371, -356, -695, -378, -385, -318, -731, -388, -401, -288, -764, -403,
    -420, -269, -792, -421, -441, -258, -820, -469, -461, -256, -895, -588,
    -483, -267, -911, -709, -510, -294, -872, -783, -532, -337, -830, -793,
    -544, -384, -783, -744, -544, -422, -735, -721, -534, -445, -688, -734,
    -516, -457, -647, -765, -493, -464, -616, -801, -468, -472, -595, -836,
    -442, -484, -581, -866, -419, -498, -573, -887, -400, -515, -569, -873,
    -385, -531, -609, -836, -375, -541, -660, -806, -375, -542, -632, -801,
    -381, -537, -610, -828, -386, -531, -599, -853, -387, -529, -600, -855,
    -385, -531, -613, -845, -384, -534, -638, -827, -384, -536, -675, -807,
    -389, -534, -719, -787, -399, -529, -765, -768, -415, -521, -805, -750,
    -436, -511, -841, -736, -459, -500, -922, -727, -486, -490, -952, -719,
    -518, -480, -912, -712, -546, -471, -867, -707, -562, -464, -816, -705,
    -565, -458, -763, -704, -557, -453, -712, -702, -538, -450, -667, -700,
    -514, -447, -633, -696, -486, -445, -610, -692, -459, -443, -595, -684,
    -434, -441, -585, -672, -413, -438, -579, -643, -396, -433, -576, -651,
    -383, -427, -575, -691, -374, -422, -578, -725, -368, -425, -585, -727,
    -365, -432, -600, -683, -365, -439, -621, -631, -368, -438, -646, -583,
    -374, -429, -676, -540, -384, -412, -707, -503, -396, -391, -737, -472,
    -412, -368, -764, -446, -429, -345, -787, -428, -447, -323, -806, -416,
    -464, -304, -871, -412, -482, -288, -903, -414, -505, -276, -861, -420,
    -526, -269, -816, -430, -536, -265, -766, -445, -536, -264, -714, -461,
    -525, -267, -663, -479, -506, -273, -619, -496, -481, -280, -583, -511,
    -453, -289, -557, -523, -426, -299, -539, -531, -401, -308, -526, -523,
    -379, -316, -517, -463, -361, -319, -511, -444, -347, -314, -506, -485,
    -336, -307, -506, -546, -328, -306, -511, -588, -323, -314, -524, -558,
    -321, -326, -543, -508, -322, -333, -567, -463, -327, -332, -595, -423,
    -335, -322, -625, -388, -346, -307, -655, -359, -361, -288, -682, -335,
    -377, -268, -704, -318, -394, -249, -745, -309, -411, -232, -845, -306,
    -433, -218, -858, -310, -462, -207, -785, -324, -486, -201, -714, -340,
    -495, -199, -645, -356, -489, -201, -581, -372, -469, -206, -528, -389,
    -441, -214, -488, -405, -409, -222, -464, -420, -376, -232, -455, -433,
    -348, -242, -455, -444, -325, -251, -458, -452, -308, -260, -459, -457,
    -298, -268, -456, -459, -292, -274, -449, -451, -288, -279, -441, -451,
    -285, -281, -434, -471, -281, -283, -430, -485, -278, -286, -431, -479,
    -275, -291, -437, -459, -273, -293, -448, -419, -273, -292, -463, -389,
    -274, -284, -481, -366, -278, -273, -499, -350, -285, -260, -517, -338,
    -293, -247, -534, -329, -302, -235, -547, -324, -312, -224, -557, -323,
    -322, -216, -576, -325, -332, -210, -649, -330, -344, -207, -639, -338,
    -360, -205, -588, -349, -373, -206, -536, -362, -375, -209, -483, -377,
    -367, -214, -433, -393, -351, -220, -388, -409, -328, -228, -352, -425,
    -302, -236, -327, -439, -276, -245, -311, -452, -252, -255, -302, -462,
    -232, -264, -294, -469, -215, -272, -286, -473, -203, -279, -276, -474,
    -193, -285, -267, -467, -185, -289, -259, -475, -178, -292, -255, -486,
    -172, -294, -255, -486, -167, -297, -260, -471, -164, -299, -271, -444,
    -163, -298, -285, -415, -164, -293, -303, -391, -167, -284, -322, -372,
    -173, -272, -342, -357, -181, -260, -360, -346, -191, -248, -376, -338,
    -201, -237, -388, -333, -212, -228, -396, -332, -222, -220, -445, -335,
    -232, -215, -503, -341, -247, -212, -455, -350, -263, -211, -401, -361,
    -271, -212, -346, -375, -269, -216, -291, -391, -257, -221, -241, -407,
    -236, -228, -198, -423, -211, -236, -166, -439, -184, -245, -144, -453,
    -158, -254, -131, -465, -135, -263, -122, -475, -116, -272, -114, -481,
    -101, -281, -105, -484, -89, -288, -96, -484, -80, -293, -86, -480, -72,
    -297, -80, -474, -65, -299, -78, -464, -60, -299, -80, -452, -56, -297, -88,
    -438, -53, -293, -101, -421, -53, -287, -118, -404, -55, -280, -137, -387,
    -60, -271, -157, -371, -67, -262, -177, -356, -76, -252, -196, -344, -87,
    -243, -211, -335, -98, -233, -222, -329, -108, -225, -228, -326, -118, -218,
    -229, -311, -126, -212, -223, -227, -132, -203, -212, -172, -135, -187,
    -195, -192, -135, -166, -172, -257, -132, -152, -145, -335, -125, -150,
    -115, -388, -115, -162, -82, -414, -102, -182, -48, -424, -86, -205, -15,
    -426, -69, -224, 17, -424, -50, -240, 45, -419, -31, -250, 69, -413, -12,
    -256, 88, -404, 7, -258, 75, -321, 22, -256, 18, -199, 31, -240, 45, -154,
    32, -211, 73, -194, 32, -180, 92, -272, 36, -160, 101, -327, 41, -156, 101,
    -308, 47, -162, 90, -276, 52, -169, 67, -242, 54, -171, 34, -209, 51, -167,
    -4, -180, 44, -157, -41, -156, 31, -145, -73, -138, 15, -130, -112, -127,
    -4, -116, -286, -119, -29, -104, -360, -119, -70, -93, -248, -135, -110,
    -86, -115, -153, -129, -83, -5, -168, -123, -85, 83, -183, -95, -90, 149,
    -198, -56, -96, 191, -213, -12, -104, 208, -229, 30, -113, 201, -245, 64,
    -122, 174, -261, 88, -132, 139, -278, 100, -142, 107, -294, 101, -152, 85,
    -310, 94, -162, 76, -324, 84, -172, 79, -335, 73, -182, 90, -343, 65, -191,
    104, -347, 61, -199, 117, -346, 60, -205, 128, -345, 62, -209, 135, -342,
    67, -212, 138, -334, 72, -213, 138, -325, 76, -212, 135, -316, 79, -210,
    129, -309, 81, -206, 121, -307, 82, -202, 112, -308, 80, -199, 103, -313,
    77, -196, 94, -320, 74, -195, 87, -328, 69, -196, 80, -336, 64, -198, 75,
    -344, 60, -201, 73, -352, 55, -205, 72, -360, 52, -209, 74, -367, 49, -214,
    78, -375, 48, -219, 84, -383, 47, -224, 93, -391, 49, -229, 103, -399, 51,
    -234, 115, -408, 55, -239, 128, -417, 60, -244, 141, -425, 66, -249, 155,
    -433, 72, -255, 169, -441, 80, -260, 182, -448, 88, -265, 195, -454, 96,
    -270, 205, -458, 104, -275, 215, -461, 112, -279, 222, -462, 119, -282, 227,
    -462, 125, -285, 229, -461, 131, -286, 229, -457, 135, -287, 227, -453, 138,
    -287, 222, -447, 140, -286, 215, -440, 140, -284, 207, -432, 138, -282, 197,
    -424, 136, -278, 186, -416, 132, -274, 174, -407, 127, -269, 161, -399, 121,
    -265, 149, -391, 114, -260, 138, -385, 108, -254, 127, -379, 100, -250, 118,
    -375, 93, -245, 111, -372, 87, -241, 105, -371, 81, -238, 102, -371, 75,
    -235, 101, -373, 71, -234, 102, -377, 68, -233, 106, -382, 66, -233, 111,
    -388, 65, -234, 119, -395, 66, -237, 128, -403, 68, -239, 138, -411, 71,
    -243, 150, -419, 75, -247, 162, -427, 81, -252, 173, -435, 87, -256, 185,
    -441, 93, -261, 195, -447, 100, -266, 205, -452, 107, -270, 212, -455, 114,
    -274, 217, -457, 120, -278, 219, -457, 125, -281, 219, -456, 129, -283, 216,
    -453, 132, -284, 211, -448, 133, -284, 204, -442, 133, -283, 194, -435, 132,
    -281, 182, -427, 129, -279, 169, -418, 124, -275, 154, -409, 118, -271, 138,
    -399, 111, -266, 122, -391, 103, -261, 106, -383, 95, -255, 91, -376, 86,
    -250, 77, -370, 76, -245, 65, -366, 67, -240, 55, -364, 58, -236, 47, -363,
    50, -233, 42, -364, 43, -230, 39, -367, 37, -229, 38, -371, 32, -228, 40,
    -376, 29, -229, 44, -382, 27, -230, 49, -390, 26, -233, 56, -397, 27, -236,
    64, -405, 29, -239, 72, -413, 32, -243, 80, -420, 36, -248, 87, -426, 40,
    -252, 94, -431, 44, -257, 98, -435, 49, -261, 101, -438, 53, -265, 102,
    -439, 56, -268, 101, -439, 59, -270, 97, -437, 61, -272, 91, -434, 61, -273,
    82, -430, 60, -273, 72, -424, 58, -272, 59, -418, 54, -270, 45, -411, 49,
    -267, 30, -403, 42, -264, 14, -396, 35, -260, -3, -388, 27, -256, -19, -381,
    18, -252, -35, -375, 8, -247, -49, -370, -1, -243, -63, -365, -11, -239,
    -74, -362, -20, -235, -84, -361, -29, -232, -92, -360, -37, -229, -97, -361,
    -44, -227, -101, -363, -50, -226, -102, -366, -54, -226, -102, -369, -58,
    -226, -64, -396, -60, -228, -1, -434, -54, -233, 23, -448, -42, -243, 26,
    -448, -26, -253, 18, -441, -13, -262, 5, -433, -4, -268, -10, -424, 1, -270,
    -23, -416, 1, -270, -35, -410, -2, -267, -45, -405, -8, -264, -54, -401,
    -13, -261, -61, -398, -20, -257, -67, -397, -26, -254, -72, -395, -31, -252,
    -76, -394, -36, -250, -80, -394, -40, -248, -84, -394, -43, -247, -88, -393,
    -47, -246, -91, -393, -49, -246, -95, -393, -52, -246, -98, -393, -54, -245,
    -102, -393, -57, -245, -105, -392, -59, -245, -108, -392, -61, -245, -112,
    -392, -63, -245, -115, -392, -65, -245, -118, -392, -67, -245, -122, -392,
    -69, -245, -125, -392, -71, -244, -128, -391, -73, -244, -131, -391, -75,
    -244, -134, -391, -77, -244, -137, -391, -79, -244, -140, -391, -81, -244,
    -143, -391, -83, -244, -146, -391, -85, -244, -149, -390, -87, -244, -151,
    -390, -89, -244, -154, -390, -90, -244, -157, -390, -92, -243, -159, -390,
    -94, -243, -162, -390, -95, -243, -164, -390, -97, -243, -166, -390, -99,
    -243, -169, -389, -100, -243, -171, -389, -102, -243, -173, -389, -103,
    -243, -175, -389, -105, -243, -177, -389, -106, -243, -179, -389, -107,
    -243, -181, -389, -109, -243, -183, -389, -110, -243, -184, -389, -111,
    -243, -186, -389, -112, -242, -187, -388, -113, -242, -189, -388, -114,
    -242, -190, -388, -115, -242, -191, -388, -116, -242, -192, -388, -117,
    -242, -193, -388, -118, -242, -194, -388, -119, -242, -195, -388, -119,
    -242, -195, -388, -120, -242, -196, -388, -120, -242, -196, -388, -121,
    -242, -197, -388, -121, -242, -198, -388, -122, -242, -200, -388, -122,
    -242, -201, -388, -123, -242, -202, -388, -123, -242, -202, -388, -124,
    -242, -203, -388, -124, -242, -203, -388, -125, -242, -203, -388, -125,
    -242, -204, -388, -126, -242, -204, -388, -126, -242, -204, -388, -126,
    -242, -204, -388, -126, -242, -204, -388, -126, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242, -204, -388, -127, -242, -204, -388, -127,
    -242, -204, -388, -127, -242,
  ]);
function Fn(e, t) {
  let n = [`Ponytail1`, `Ponytail2`].map((n) => ({
      bone: e.get(n),
      rest: t.get(n),
    })),
    r = new W(),
    i = new l(0, 0, 0, `XYZ`);
  return (e) => {
    let t = Math.max(0, Math.min(Nn, e)) * 30,
      a = Math.min(Pn.length / 4 - 1, Math.floor(t)),
      o = Math.min(Pn.length / 4 - 1, a + 1),
      s = t - a;
    for (let e = 0; e < n.length; e++) {
      let { bone: t, rest: c } = n[e];
      if (!t || !c) continue;
      let l = e * 2,
        u = (Pn[a * 4 + l] * (1 - s) + Pn[o * 4 + l] * s) * Mn,
        d = (Pn[a * 4 + l + 1] * (1 - s) + Pn[o * 4 + l + 1] * s) * Mn;
      (r.setFromEuler(i.set(u, 0, d)), t.quaternion.copy(c).multiply(r));
    }
  };
}
var In = [`Thumb`, `Index`, `Middle`, `Ring`, `Pinky`],
  Ln = [0.027, 0.0243, 0.023, 0.0244, 0.0188],
  Rn = new W().setFromRotationMatrix(
    new H().makeBasis(R(-1, 0, 0), R(0, 0, -1), R(0, -1, 0)),
  );
function Q(e) {
  return e.getWorldPosition(new A());
}
function zn(e, t) {
  let n = e.parent.getWorldQuaternion(new W());
  (e.quaternion.copy(n.invert().multiply(t)), e.updateWorldMatrix(!1, !0));
}
function Bn(e, t, n) {
  let r = Q(e),
    i = Q(t).sub(r).normalize(),
    a = n.clone().sub(r).normalize(),
    o = e.getWorldQuaternion(new W());
  zn(e, new W().setFromUnitVectors(i, a).multiply(o));
}
function Vn(e, t, n, r, i) {
  let a = t.clone().sub(e),
    o = V(a.length(), 1e-4, n + r - 1e-5);
  a.normalize();
  let s = (n * n - r * r + o * o) / (2 * o),
    c = Math.sqrt(Math.max(1e-7, n * n - s * s)),
    l = i.clone().sub(e);
  return (
    l.addScaledVector(a, -l.dot(a)).normalize(),
    e.clone().addScaledVector(a, s).addScaledVector(l, c)
  );
}
function Hn(e) {
  let t = [
      [-0.145, 0.002, 0.005],
      [-0.138, 0.023, 0.022],
      [-0.119, 0.04, 0.034],
      [-0.08, 0.047, 0.043],
      [-0.03, 0.044, 0.054],
      [0.016, 0.039, 0.075],
      [0.058, 0.035, 0.1],
      [0.1, 0.033, 0.096],
      [0.126, 0.029, 0.077],
      [0.137, 0.01, 0.039],
      [0.139, 0.001, 0.005],
    ],
    n = [],
    r = [];
  for (let e = 0; e < t.length; e++)
    for (let i = 0; i <= 24; i++) {
      let [a, o, s] = t[e],
        c = (i / 24) * Math.PI;
      if (
        (n.push(Math.cos(c) * o, -0.029 + Math.sin(c) ** 0.72 * s, a), e && i)
      ) {
        let t = e * 25 + i;
        r.push(t, t - 1, t - 24 - 1, t - 1, t - 24 - 2, t - 24 - 1);
      }
    }
  let a = new pe();
  (a.setAttribute(`position`, new Oe(n, 3)),
    a.setIndex(r),
    a.computeVertexNormals());
  let o = new z(a, e);
  ((o.castShadow = !0), (o.receiveShadow = !0));
  let c = [
      ...t.map(([e, t]) => new i(t + 0.002, e)),
      ...t
        .slice()
        .reverse()
        .map(([e, t]) => new i(-t - 0.002, e)),
    ],
    l = new ke();
  (l.moveTo(c[0].x, c[0].y), l.splineThru(c.slice(1)), l.closePath());
  let u = new s(l, {
    depth: 0.007,
    steps: 1,
    bevelEnabled: !0,
    bevelSize: 0.001,
    bevelThickness: 0.001,
    bevelSegments: 2,
    curveSegments: 4,
  });
  (u.rotateX(Math.PI / 2), u.translate(0, -0.029, 0));
  let d = new N({ color: 1513241, roughness: 0.73 }),
    f = new z(u, d);
  ((f.castShadow = !0), o.add(f));
  let p = new z(
    new re(
      new Je(
        c.map((e) => R(e.x, -0.027, e.y)),
        !0,
        `centripetal`,
      ),
      100,
      0.00105,
      5,
      !0,
    ),
    new N({ color: 3156774, roughness: 0.65 }),
  );
  o.add(p);
  let m = new z(
    new re(
      new Je(
        Array.from({ length: 18 }, (e, t) => {
          let n = 0.14 + ((Math.PI - 0.28) * t) / 17;
          return R(
            Math.cos(n) * 0.0425,
            -0.028 + Math.sin(n) ** 0.72 * 0.058,
            -0.018,
          );
        }),
      ),
      30,
      75e-5,
      5,
      !1,
    ),
    d,
  );
  return (o.add(m), o);
}
var Un = class {
  constructor() {
    ((this.torsoEnvelopeZ = 0),
      (this.openingPalmFrame = 0),
      (this.chordPalmFrame = 0),
      (this.group = new Ee()),
      (this.bones = new Map()),
      (this.rest = new Map()),
      (this.hands = []),
      (this.contacts = []),
      (this.head = R(0, 1.28, 0.64)),
      (this.ready = !1),
      (this.poseCache = new Map()),
      (this.blinkMeshes = []),
      (this.shoes = new Map()));
  }
  async load(e, t) {
    ((this.score = e),
      (this.model =
        t ?? (await new Nt().loadAsync(`/assets/pianist.glb`)).scene),
      this.group.add(this.model),
      (this.model.rotation.y = Math.PI),
      this.model.position.set(0, -0.344, 0.75),
      this.model.traverse((e) => {
        if (e.isBone) {
          let t = e;
          (this.bones.set(t.name, t),
            this.rest.set(t.name, t.quaternion.clone()));
        }
        if (e.isMesh) {
          let t = e;
          if (t.name === `Human` && t.geometry.index) {
            let e = t.geometry.index.array;
            t.geometry = t.geometry.clone();
            let n = t.geometry.attributes.position,
              r = [];
            for (let t = 0; t < e.length; t += 3)
              Math.max(n.getY(e[t]), n.getY(e[t + 1]), n.getY(e[t + 2])) <
                0.145 || r.push(e[t], e[t + 1], e[t + 2]);
            t.geometry.setIndex(r);
          }
          ((t.castShadow = !0), (t.receiveShadow = !0), (t.frustumCulled = !1));
          let n = Array.isArray(t.material) ? t.material : [t.material];
          for (let e of n) {
            let t = e;
            (t.map && (t.map.anisotropy = 4),
              t.normalMap && (t.normalMap.anisotropy = 4));
          }
          t.morphTargetDictionary && this.blinkMeshes.push(t);
        }
      }),
      this.model.updateMatrixWorld(!0));
    for (let t of [`L`, `R`]) {
      let n = t === `L` ? `Left` : `Right`,
        r = [];
      for (let e = 0; e < 5; e++) {
        let t = [1, 2, 3].map((t) => this.bones.get(n + `Hand` + In[e] + t));
        if (t.some((e) => !e))
          throw Error(`The performer finger rig is incomplete.`);
        let i = new _e();
        ((i.name = n + In[e] + `Contact`),
          i.position.set(0, Ln[e], 0),
          t[2].add(i),
          r.push({
            bones: t,
            tip: i,
            lengths: [t[1].position.length(), t[2].position.length(), Ln[e]],
            rest: t.map((e) => e.quaternion.clone()),
            frameOffsets: [],
            palmNormal: R(-1, 0, 0),
          }));
      }
      let i = this.bones.get(n + `Hand`),
        a = i.getWorldQuaternion(new W());
      zn(i, Rn);
      for (let [e, t] of r.entries()) {
        if (e === 0) {
          let e = Q(t.bones[1]).sub(Q(t.bones[0])).normalize(),
            n = Q(t.bones[2]).sub(Q(t.bones[1])).normalize();
          t.palmNormal.copy(
            n.cross(e).normalize().applyQuaternion(Rn.clone().invert()),
          );
        }
        let n = t.palmNormal.clone().applyQuaternion(Rn);
        t.frameOffsets = t.bones.map((r, i) => {
          let a = Q(i < 2 ? t.bones[i + 1] : t.tip)
              .sub(Q(r))
              .normalize(),
            o =
              e === 0
                ? n.clone().addScaledVector(a, -n.dot(a)).normalize()
                : a
                    .clone()
                    .cross(R(0, 1, 0))
                    .normalize();
          return new W()
            .setFromRotationMatrix(
              new H().makeBasis(o, a, o.clone().cross(a).normalize()),
            )
            .invert()
            .multiply(r.getWorldQuaternion(new W()))
            .normalize();
        });
      }
      zn(i, a);
      let o = e.notes.filter((e) => e.hand === t);
      this.hands.push({
        side: t,
        wrist: this.bones.get(n + `Hand`),
        upper: this.bones.get(n + `Arm`),
        lower: this.bones.get(n + `ForeArm`),
        fingers: r,
        notes: o,
        fingerNotes: Array.from({ length: 5 }, (e, t) =>
          o.filter((e) => e.finger === t + 1),
        ),
        plan: [],
      });
    }
    let n = new L({
      color: 1513241,
      roughness: 0.45,
      metalness: 0,
      clearcoat: 0.18,
      clearcoatRoughness: 0.32,
    });
    for (let e of [`Left`, `Right`]) {
      let t = Hn(n);
      ((t.name = e + ` concert shoe`), this.group.add(t), this.shoes.set(e, t));
    }
    if (
      ((this.hairMotion = Fn(this.bones, this.rest)),
      this.posture(0, 0.5, 0),
      e.wristMotion)
    )
      this.wristMotion = jn(e.wristMotion);
    else for (let e of this.hands) this.planHand(e);
    this.ready = !0;
  }
  resetBone(e) {
    let t = this.bones.get(e);
    return (
      t && (t.quaternion.copy(this.rest.get(e)), t.updateWorldMatrix(!1, !0)),
      t
    );
  }
  posture(e, t, n) {
    if (!this.model) return;
    let r = this.score?.harmony ?? [],
      i = Math.max(0, Ne(r, e, (e) => e.time) - 1),
      a = r[i],
      o = a
        ? V((e - a.time) / a.duration)
        : ((e * (this.score?.bpm ?? 90)) / 240) % 1,
      s = ((i % 4) + o) / 4,
      c = ((o * 4) % 1) * Math.PI * 2,
      l = Math.sin(s * Math.PI * 2 - 0.45),
      u = 0.5 - 0.5 * Math.cos(s * Math.PI * 2),
      d = 0,
      f = 0,
      p = 0,
      m = 0,
      h = 0;
    for (let t of this.score?.notes ?? []) {
      let n = e - t.time;
      if (n < -0.55 || n > 1) continue;
      let r =
        Math.exp(-(((n + 0.12) / 0.38) ** 2)) *
        t.velocity *
        F((n + 0.55) / 0.18) *
        (1 - F((n - 0.55) / 0.45));
      ((d += q(t.midi) * r),
        (f += r),
        (t.role === `melody` || t.hand === `R`) &&
          ((p += q(t.midi) * r), (m += r)),
        n > -0.09 &&
          n < 0.6 &&
          (h +=
            t.velocity *
            (t.role === `bass` ? 1.35 : t.role === `melody` ? 0.8 : 0.28) *
            Math.exp(-(((n - 0.07) / 0.16) ** 2)) *
            F((n + 0.09) / 0.07) *
            (1 - F((n - 0.42) / 0.18))));
    }
    ((d /= f + 0.22), (p /= m + 0.16));
    let g = 1 - Math.exp(-h * 0.38),
      _ = this.score ? 1 - F((e - this.score.duration + 6) / 4) : 1;
    this.model.position.set(V(d * 0.048, -0.02, 0.02), -0.344, 0.75);
    for (let e of [
      `Hips`,
      `Spine`,
      `Spine1`,
      `Spine2`,
      `Neck`,
      `Head`,
      `LeftShoulder`,
      `RightShoulder`,
      `LeftUpLeg`,
      `RightUpLeg`,
      `LeftLeg`,
      `RightLeg`,
      `LeftFoot`,
      `RightFoot`,
      `LeftToeBase`,
      `RightToeBase`,
    ])
      this.resetBone(e);
    let v = this.bones.get(`Spine`),
      y = this.bones.get(`Spine1`),
      b = this.bones.get(`Head`);
    (v.rotateX(0.17 + (0.043 * l + 0.02 * g) * t * _),
      v.rotateZ(V(-d * 0.12, -0.055, 0.055) + 0.019 * l * t),
      y.rotateX(0.064 + 0.008 * Math.sin(c - 0.55) * t * _),
      y.rotateY(V(-p * 0.055, -0.022, 0.022)),
      this.bones.get(`Spine2`)?.rotateZ(0.009 * Math.sin(c - 0.25) * t * _),
      b.rotateX(
        0.105 +
          0.025 * u * t +
          0.018 * Math.sin(s * Math.PI * 2 - 0.7) * t * _ +
          0.012 * Math.sin(c - 0.82) * t * _,
      ),
      b.rotateY(V(-p * 0.34, -0.13, 0.13)),
      b.rotateZ(-l * 0.012 * t),
      this.bones.get(`LeftShoulder`)?.rotateZ(0.009 * g * t),
      this.bones.get(`RightShoulder`)?.rotateZ(-0.009 * g * t),
      this.model.updateMatrixWorld(!0),
      (this.torsoEnvelopeZ =
        (Q(this.bones.get(`LeftArm`)).z + Q(this.bones.get(`RightArm`)).z) /
        2));
    for (let e of [`Left`, `Right`]) {
      let t = this.bones.get(e + `Shoulder`);
      zn(
        t,
        new W()
          .setFromAxisAngle(R(0, 1, 0), e === `Left` ? -0.32 : 0.43)
          .multiply(t.getWorldQuaternion(new W())),
      );
    }
    for (let e of [`Left`, `Right`]) {
      let t = e === `Left` ? -1 : 1,
        r = this.bones.get(e + `UpLeg`),
        i = this.bones.get(e + `Leg`),
        a = this.bones.get(e + `Foot`),
        o = this.bones.get(e + `ToeBase`),
        s = R(t * 0.095, 0.038, e === `Right` ? 0.35 : 0.38),
        c = R(
          t * 0.095,
          e === `Right` ? 0.107 - n * 0.016 : 0.038,
          e === `Right` ? 0.11 : 0.14,
        ),
        l = c.clone().sub(s).normalize(),
        u = l.clone().negate(),
        d = u
          .clone()
          .cross(R(1, 0, 0))
          .normalize(),
        f = this.shoes.get(e);
      f &&
        (f.position.copy(s).lerp(c, 0.5),
        f.quaternion.setFromRotationMatrix(
          new H().makeBasis(R(1, 0, 0), d, u),
        ));
      let p = Q(r),
        m = s.clone().addScaledVector(l, 0.032).addScaledVector(d, 0.055),
        h = R(t * 0.17, 0.58, 0.18);
      (Bn(r, i, Vn(p, m, i.position.length(), a.position.length(), h)),
        Bn(i, a, m),
        Bn(a, o, m.clone().addScaledVector(l, 0.12)),
        o.quaternion.copy(this.rest.get(e + `ToeBase`)));
    }
    this.head.copy(Q(b));
    let x = (e + 2.3) % 4.9,
      S = x < 0.14 ? Math.sin((x / 0.14) * Math.PI) : 0;
    for (let e of this.blinkMeshes) {
      let n = e.morphTargetDictionary,
        r = e.morphTargetInfluences;
      if (!r) continue;
      let i = (e, t) => {
        let i = n[e];
        i !== void 0 && (r[i] = t);
      };
      for (let e of [`eyeBlinkLeft`, `eyeBlinkRight`, `eyes_closed`, `blink`])
        i(e, S);
      let a = 0.023 + 0.023 * t * u;
      (i(`mouthSmileLeft`, a),
        i(`mouthSmileRight`, a * 0.94),
        i(`browInnerUp`, 0.014 + 0.012 * u * t));
      let o = 0.55 + 0.08 * u;
      (i(`eyeLookDownLeft`, o),
        i(`eyeLookDownRight`, o),
        i(`eyeSquintLeft`, 0.02 * t),
        i(`eyeSquintRight`, 0.02 * t));
    }
    this.hairMotion?.(e);
  }
  contactDepth(e, t, n) {
    return V(
      e - (n === 0 ? 0.051 : n === 4 ? 0.039 : n === 1 ? 0.055 : 0.065),
      t ? 0.166 : 0.239,
      t ? 0.211 : 0.269,
    );
  }
  fingerPoints(e, t, n, r, i, a = 0) {
    let [o, s, c] = n.lengths,
      l = r === 0 ? 0.35 : 0.48,
      u = r === 0 ? 1.56 : 1.52,
      d = (e) =>
        Math.hypot(
          o + s * Math.cos(e) + c * Math.cos((1 + l) * e),
          s * Math.sin(e) + c * Math.sin((1 + l) * e),
        ),
      f = t.clone().sub(e),
      p = V(f.length(), d(u), o + s + c - 3e-5),
      m = f.lengthSq() > 1e-8 ? f.normalize() : R(0, 0, -1),
      h = 0,
      g = u;
    for (let e = 0; e < 17; e++) {
      let e = (h + g) / 2;
      d(e) > p ? (h = e) : (g = e);
    }
    let _ = (h + g) / 2,
      v = -Math.atan2(
        -s * Math.sin(_) - c * Math.sin((1 + l) * _),
        o + s * Math.cos(_) + c * Math.cos((1 + l) * _),
      ),
      y;
    if (r === 0) {
      let e = i ?? n.bones[0].parent.getWorldQuaternion(new W()),
        t = n.palmNormal.clone().applyQuaternion(e);
      ((y = t.addScaledVector(m, -t.dot(m))),
        y.lengthSq() < 1e-8 && y.copy(R(0, 1, 0).applyQuaternion(e)).cross(m),
        y.normalize());
    } else {
      let r = m
          .clone()
          .cross(R(0, 1, 0))
          .normalize(),
        a = R(1, 0, 0).addScaledVector(m, -m.x).normalize(),
        o = Math.hypot(t.x - e.x, t.z - e.z);
      if (
        ((y = a.lerp(r, F((o - 0.004) / 0.024)).normalize()),
        this.openingPalmFrame > 0)
      ) {
        let e = i ?? n.bones[0].parent.getWorldQuaternion(new W()),
          t = R(-1, 0, 0).applyQuaternion(e),
          r = t.addScaledVector(m, -t.dot(m));
        r.lengthSq() > 1e-6 &&
          y.lerp(r.normalize(), this.openingPalmFrame).normalize();
      }
      if (this.chordPalmFrame > 0) {
        let e = i ?? n.bones[0].parent.getWorldQuaternion(new W()),
          t = R(-1, 0, 0).applyQuaternion(e),
          r = t.addScaledVector(m, -t.dot(m));
        r.lengthSq() > 1e-8 &&
          y.lerp(r.normalize(), this.chordPalmFrame).normalize();
      }
    }
    r === 0 && a !== 0 && y.applyAxisAngle(m, a);
    let b = y.clone().cross(m).normalize(),
      x = (e, t) =>
        m
          .clone()
          .multiplyScalar(Math.cos(e) * t)
          .addScaledVector(b, Math.sin(e) * t),
      S = e.clone().add(x(v, o)),
      C = S.clone().add(x(v - _, s));
    return {
      pip: S,
      dip: C,
      tip: C.clone().add(x(v - (1 + l) * _, c)),
      normal: y,
      min: d(u),
    };
  }
  planHand(e) {
    let t = [];
    for (let n of e.notes) {
      let e = t.at(-1);
      e && n.time - e.time < 0.045
        ? (e.notes.push(n), (e.end = Math.max(e.end, n.time + n.duration)))
        : t.push({ time: n.time, end: n.time + n.duration, notes: [n] });
    }
    let n =
      e.side === `L`
        ? [0.07, 0.032, 0.008, -0.022, -0.055]
        : [-0.07, -0.032, -0.008, 0.022, 0.055];
    e.plan = t.map((r, i) => {
      let a = e.notes.filter(
          (e) =>
            e.time < r.time &&
            e.time + e.duration > r.time + 0.025 &&
            !r.notes.some((t) => t.finger === e.finger),
        ),
        o = [...r.notes, ...a],
        s = [t[i + 1], t[i - 1]].filter(
          (e) => e && Math.abs(e.time - r.time) < 0.56,
        );
      for (let t of s)
        for (let n of t.notes) {
          if (o.some((e) => e.finger === n.finger || e.midi === n.midi))
            continue;
          let t = [...o, n].sort((e, t) => e.midi - t.midi);
          t.at(-1).midi - t[0].midi > 12 ||
            t.some(
              (n, r) =>
                r > 0 &&
                (e.side === `L`
                  ? n.finger >= t[r - 1].finger
                  : n.finger <= t[r - 1].finger),
            ) ||
            o.push(n);
        }
      let c = o.reduce((e, t) => e + q(t.midi) - n[t.finger - 1], 0) / o.length;
      return {
        ...r,
        pose: this.handPose(
          e,
          o,
          c,
          o.some((e) => K(e.midi)),
        ),
      };
    });
  }
  plannedPose(e, t) {
    if (this.wristMotion) return this.wristMotion(e.side, t);
    let n = Ne(e.plan, t, (e) => e.time),
      r = e.plan[Math.max(0, n - 1)],
      i = e.plan[Math.min(n, e.plan.length - 1)];
    if (r === i)
      return { position: r.pose.position.clone(), q: r.pose.q.clone() };
    let a = i.time - r.end,
      o =
        a > 0
          ? Math.max(r.end, i.time - 0.46)
          : Math.max(r.time, i.time - Math.min(0.18, (i.time - r.time) * 0.66)),
      s = i.time - 0.004,
      c = F((t - o) / Math.max(0.001, s - o)),
      l = r.pose.position.clone().lerp(i.pose.position, c);
    return (
      a > 0.09 && (l.y += Math.sin(c * Math.PI) * 0.007),
      { position: l, q: r.pose.q.clone().slerp(i.pose.q, c) }
    );
  }
  handPose(e, t, n, r) {
    let i =
        e.side +
        t
          .map(
            (e) =>
              `${e.midi}/${e.finger}/${(e.contactLift ?? 0.002).toFixed(4)}/${e.contactZ ?? ``}/${e.thumbOpposition ?? 0}`,
          )
          .sort()
          .join(`,`),
      a = this.poseCache.get(i);
    if (a) return a;
    let o = e.side === `L` ? 1 : -1,
      s = [n, r ? 0.772 : 0.757, r ? 0.379 : 0.412, o * 0.055, 0.035, 0],
      c = [
        [-0.61, 0.61],
        [0.738, 0.797],
        [0.295, 0.447],
        [-0.19, 0.19],
        [-0.09, 0.15],
        [-0.15, 0.15],
      ],
      u = [...s],
      d = Q(e.upper),
      f = (e) =>
        new W().setFromEuler(new l(e[4], e[5], e[3], `YXZ`)).multiply(Rn),
      p = (n) => {
        let r = f(n),
          i = R(n[0], n[1], n[2]),
          a = 0;
        for (let n of t) {
          let t = n.finger - 1,
            o = e.fingers[t],
            s = o.bones[0].position.clone().applyQuaternion(r).add(i),
            c = K(n.midi),
            l = n.contactZ ?? this.contactDepth(s.z, c, t),
            u = R(q(n.midi), bt(n.midi, l) + (n.contactLift ?? 0.002), l),
            d = o.lengths.reduce((e, t) => e + t, 0),
            f = u.distanceTo(s),
            p = this.fingerPoints(s, u, o, t, r, n.thumbOpposition ?? 0);
          (t > 0 &&
            (a +=
              Math.max(0, p.pip.z - s.z + 0.003) ** 2 * 400 +
              Math.max(0, p.pip.y - s.y - 0.025) ** 2 * 60),
            (a +=
              Math.max(0, f - d * 0.985) ** 2 * 15e3 +
              Math.max(0, p.min + 0.001 - f) ** 2 * 15e3),
            (a +=
              (f - d * 0.88) ** 2 * 18 +
              Math.max(0, u.y + 0.013 - s.y) ** 2 * 250));
        }
        return (
          (a += Math.max(0, i.distanceTo(d) - 0.49) ** 2 * 18e3),
          (a +=
            (n[0] - u[0]) ** 2 * 0.14 +
            (n[1] - u[1]) ** 2 * 0.18 +
            (n[2] - u[2]) ** 2 * 0.06),
          (a +=
            (n[3] - o * 0.055) ** 2 * 0.007 +
            (n[4] - 0.035) ** 2 * 0.006 +
            n[5] ** 2 * 0.014),
          a
        );
      },
      m = p(s);
    for (let e of [1, 0.5, 0.25, 0.1, 0.035])
      for (let t = 0; t < 4; t++) {
        let t = !1;
        for (let n = 0; n < 6; n++) {
          let r = [0.028, 0.012, 0.03, 0.16, 0.16, 0.16][n] * e;
          for (let e of [-1, 1]) {
            let i = s[n];
            s[n] = V(i + r * e, ...c[n]);
            let a = p(s);
            a < m ? ((m = a), (t = !0)) : (s[n] = i);
          }
        }
        if (!t) break;
      }
    let h = { position: R(s[0], s[1], s[2]), q: f(s) };
    return (this.poseCache.set(i, h), h);
  }
  update(e, t, n, r, i) {
    if (this.ready) {
      ((this.contacts = []), this.posture(e, i, r));
      for (let t of this.hands) {
        ((this.openingPalmFrame =
          t.side === `R`
            ? F((e - 6.0390358363389325) / 0.1) * (1 - F((e - 11.7) / 0.25))
            : 0),
          (this.chordPalmFrame =
            t.side === `R`
              ? F((e - 198.348852) / 0.32133300000000986) *
                (1 - F((e - 199.66868) / 0.35782700000001455))
              : 0));
        let r = t.notes.filter((t) => t.time <= e && t.time + t.duration > e),
          i = this.plannedPose(t, e),
          a = i.position.clone(),
          o = t.side === `L` ? `Left` : `Right`;
        for (let e of [o + `Arm`, o + `ForeArm`, o + `Hand`]) this.resetBone(e);
        let s = Q(t.upper),
          c = t.lower.position.length(),
          u = t.wrist.position.length(),
          d = a.clone().sub(s),
          f = V(d.length(), 1e-4, c + u - 1e-5);
        d.normalize();
        let p = (c * c - u * u + f * f) / (2 * f),
          m = Math.sqrt(Math.max(1e-7, c * c - p * p)),
          h = s.clone().addScaledVector(d, p),
          g = t.side === `L` ? -1 : 1,
          _ = a
            .clone()
            .addScaledVector(
              t.fingers[2].bones[0].position
                .clone()
                .normalize()
                .applyQuaternion(i.q),
              -u,
            )
            .sub(h);
        _.addScaledVector(d, -_.dot(d)).normalize();
        let v = R(g, 0, 0);
        v.addScaledVector(d, -v.dot(d)).normalize();
        let y = Math.atan2(d.dot(_.clone().cross(v)), _.dot(v)),
          b = (e) =>
            h.clone().addScaledVector(_.clone().applyAxisAngle(d, y * e), m),
          x = (e) => {
            for (let n = -4; n <= 8; n++) {
              let r =
                  n < 0
                    ? s
                        .clone()
                        .lerp(e, 1 + n * (t.side === `L` ? 0.1265 : 0.115))
                    : e.clone().lerp(a, n / 8),
                i = this.torsoEnvelopeZ - 0.009 + (1.05 - r.y) * 0.16;
              if (
                ((r.x - this.model.position.x) / 0.23) ** 2 +
                  ((r.z - i) / 0.195) ** 2 <
                1
              )
                return !1;
            }
            return !0;
          },
          S = 0,
          C = 1;
        if (x(b(0))) C = 0;
        else
          for (let e = 0; e < 24; e++) {
            let e = (S + C) / 2;
            x(b(e)) ? (C = e) : (S = e);
          }
        let w = b(C);
        (Bn(t.upper, t.lower, w), Bn(t.lower, t.wrist, a), zn(t.wrist, i.q));
        for (let a = 0; a < 5; a++) {
          let o = t.fingers[a];
          o.bones.forEach((e, t) => {
            (e.quaternion.copy(o.rest[t]), e.updateWorldMatrix(!1, !0));
          });
          let s = (s) => {
            let c = Ne(s, e, (e) => e.time),
              u = s[Math.max(0, c - 1)],
              d = s[Math.min(c, s.length - 1)],
              f = r.find((e) => e.finger === a + 1),
              p,
              m = Q(o.bones[0]),
              h = o.lengths.reduce((e, t) => e + t, 0),
              g = m
                .clone()
                .add(
                  R(
                    a === 0 ? (t.side === `L` ? 1 : -1) * h * 0.35 : 0,
                    -h * 0.19,
                    -h * (a === 0 ? 0.81 : 0.9),
                  ),
                );
            g.y = Math.max(
              g.y,
              yt +
                (a === 0
                  ? B(0.027, 0.011, F((g.z - 0.23) / 0.03))
                  : B(0.027, 0.011, F((g.z - 0.237) / 0.026))),
            );
            let _ = (e) => {
              let t = n.contact(
                e.midi,
                e.contactZ ?? this.contactDepth(m.z, K(e.midi), a),
              );
              return ((t.y += e.contactLift ?? 0.002), t);
            };
            if (f) p = _(f);
            else {
              let t = u && u.time + u.duration <= e ? u : void 0,
                n = d && d.time >= e ? d : void 0,
                r = t ? t.time + t.duration : -10,
                i = n?.time ?? 1e6,
                o = i - r;
              if (t && n && o < 0.5) {
                let i = V((e - r) / Math.max(0.001, o)),
                  s = F(i);
                ((p = _(t).lerp(_(n), s)),
                  (p.y +=
                    a === 0
                      ? Math.sin(i * Math.PI) * Math.min(0.043, 0.014 + o * 0.1)
                      : Math.sin(i * Math.PI) ** 2 *
                        Math.min(0.018, o * 0.065)));
              } else {
                if (((p = g.clone()), t)) {
                  let n = 1 - F((e - r) / 0.19);
                  p.lerp(_(t), n);
                }
                if (n) {
                  let t = F(1 - (i - e) / 0.27);
                  p.lerp(_(n), t);
                }
              }
            }
            if (!f) {
              let t = p.clone().sub(m),
                n = h,
                r = this.fingerPoints(m, g, o, a).min + 0.008,
                i = 1 - F((t.length() - r) / 0.014),
                s = F((t.z + n * 0.22) / 0.035),
                c = F((Math.abs(t.x) - n * 0.62) / 0.025),
                l = u ? e - u.time - u.duration : 100,
                f = d ? d.time - e : 100;
              p.lerp(g, Math.max(i, s, c) * F(Math.min(l, f) / 0.07));
            }
            if (!f && a === 0) {
              let r = (e, t, n, r = 0) => {
                  let i = o.bones[0].position.clone().applyQuaternion(t).add(e),
                    s = this.fingerPoints(i, n, o, a, t, r),
                    c = [i, s.pip, s.dip, s.tip],
                    l = o.bones.map((e, t) => {
                      let n = c[t + 1].clone().sub(c[t]).normalize(),
                        r = s.normal;
                      return new W()
                        .setFromRotationMatrix(
                          new H().makeBasis(
                            r,
                            n,
                            r.clone().cross(n).normalize(),
                          ),
                        )
                        .multiply(o.frameOffsets[t]);
                    });
                  return l.map((e, n) =>
                    (n === 0 ? t : l[n - 1]).clone().invert().multiply(e),
                  );
                },
                s = o.rest.map((e) => e.clone());
              if (
                (s[0].premultiply(
                  new W().setFromEuler(
                    new l(
                      -0.85,
                      t.side === `L` ? -0.3 : 0.3,
                      t.side === `L` ? 0.3 : -0.3,
                      `XYZ`,
                    ),
                  ),
                ),
                t.side === `R` && e >= 6.0390358363389325 && e <= 12.392821)
              ) {
                let n =
                    F((e - 6.0390358363389325) / 0.1) *
                    (1 - F((e - 11.36) / 0.24)),
                  a = r(
                    Q(t.wrist),
                    i.q,
                    R(
                      q(62) +
                        0.01525 *
                          F((e - 10.95) / 0.18) *
                          (1 - F((e - 11.43) / 0.24)),
                      0.757,
                      0.267,
                    ),
                  );
                s.forEach((e, t) => e.slerp(a[t], n));
              }
              let c = (i, s) => {
                  let c = Xn(i, s, this.plannedPose(t, s)),
                    l = o.bones[0].position
                      .clone()
                      .applyQuaternion(c.q)
                      .add(c.position),
                    u = i.contactZ ?? this.contactDepth(l.z, K(i.midi), a),
                    d = R(
                      q(i.midi),
                      (t.side === `R` &&
                      e >= 6.0390358363389325 &&
                      e <= 12.392821
                        ? n.contact(i.midi, u).y
                        : bt(i.midi, u, 1)) + (i.contactLift ?? 0.002),
                      u,
                    );
                  return r(c.position, c.q, d, i.thumbOpposition ?? 0);
                },
                f = u && u.time + u.duration <= e ? u : void 0,
                p = d && d.time >= e ? d : void 0,
                m = f ? f.time + f.duration : -10,
                g = p?.time ?? 1e6,
                _ = g - m,
                v = s.map((e) => e.clone());
              if (f && p && _ < 0.5) {
                let t = V((e - m) / Math.max(0.001, _)),
                  n = F(t),
                  r = c(f, m),
                  i = c(p, g),
                  a = Math.sin(t * Math.PI) ** 2 * F(_ / 0.22) * 0.35;
                v = r.map((e, t) => e.slerp(i[t], n).slerp(s[t], a));
              } else {
                if (f) {
                  let t = c(f, m),
                    n = 1 - F((e - m) / 0.22);
                  v.forEach((e, r) => e.slerp(t[r], n));
                }
                if (p) {
                  let t = c(p, g),
                    n = F(1 - (g - e) / 0.3);
                  v.forEach((e, r) => e.slerp(t[r], n));
                }
              }
              let y = (e) => Math.sin(V(e) * Math.PI) ** 2,
                b =
                  f && p && _ < 0.5
                    ? y((e - m) / _) * F(_ / 0.22)
                    : Math.max(
                        f ? y((e - m) / 0.22) : 0,
                        p ? y((g - e) / 0.3) : 0,
                      );
              if (
                (v[0].premultiply(
                  new W().setFromEuler(
                    new l(0, 0, (t.side === `L` ? 1 : -1) * 0.5 * b, `XYZ`),
                  ),
                ),
                t.side === `R` &&
                  f?.id === `p00112` &&
                  p?.id === `p00142` &&
                  Math.abs(m - 27.794411) < 1e-7 &&
                  Math.abs(g - 34.166094) < 1e-7 &&
                  e > m &&
                  e < g)
              ) {
                let n = Q(t.wrist),
                  s = o.bones[0].position
                    .clone()
                    .applyQuaternion(i.q)
                    .add(n)
                    .clone()
                    .add(
                      R(0.2, 0.45, 0.2).multiplyScalar(h).applyQuaternion(i.q),
                    ),
                  l = r(n, i.q, s),
                  u = (e, n) => {
                    let i = Xn(e, n, this.plannedPose(t, n)),
                      s = o.bones[0].position
                        .clone()
                        .applyQuaternion(i.q)
                        .add(i.position),
                      c = e.contactZ ?? this.contactDepth(s.z, K(e.midi), a),
                      l = R(
                        q(e.midi),
                        bt(e.midi, c, 1) + (e.contactLift ?? 0.002) + 0.015,
                        c,
                      );
                    return r(i.position, i.q, l, e.thumbOpposition ?? 0);
                  },
                  d = c(f, m),
                  _ = c(p, g),
                  y = u(f, m),
                  b = u(p, g),
                  x = e - m,
                  S = g - e,
                  C = F((x - 0.1) / 0.4),
                  w = F(1 - (S - 0.04) / 0.4);
                v = d.map((e, t) =>
                  e
                    .slerp(y[t], F(x / 0.1))
                    .slerp(l[t], C)
                    .slerp(b[t], w)
                    .slerp(_[t], F(1 - S / 0.04)),
                );
              }
              let x = [
                {
                  name: `g95`,
                  previous: `p00451`,
                  next: `p00459`,
                  end: 95.039182,
                  start: 95.94507,
                  target: [0.2, 0.45, -0.1],
                  release: 0.22,
                  arrival: 0.22,
                  ramp: 0.1,
                  arrivalRamp: 0.04,
                  releaseLift: 0.03,
                  arrivalLift: 0.03,
                },
              ].find(
                (e) =>
                  e.previous === f?.id &&
                  e.next === p?.id &&
                  Math.abs(m - e.end) < 1e-7 &&
                  Math.abs(g - e.start) < 1e-7,
              );
              if (x && f && p && t.side === `R` && e > m && e < g) {
                let n = Q(t.wrist),
                  s = o.bones[0].position
                    .clone()
                    .applyQuaternion(i.q)
                    .add(n)
                    .clone()
                    .add(
                      R(...x.target)
                        .multiplyScalar(h)
                        .applyQuaternion(i.q),
                    ),
                  l = r(n, i.q, s, x.opposition ?? 0),
                  u = (e, n, i) => {
                    let s = Xn(e, n, this.plannedPose(t, n)),
                      c = o.bones[0].position
                        .clone()
                        .applyQuaternion(s.q)
                        .add(s.position),
                      l = e.contactZ ?? this.contactDepth(c.z, K(e.midi), a),
                      u = R(
                        q(e.midi),
                        bt(e.midi, l, 1) + (e.contactLift ?? 0.002) + i,
                        l,
                      );
                    return r(s.position, s.q, u, e.thumbOpposition ?? 0);
                  },
                  d = c(f, m),
                  _ = c(p, g),
                  y = u(f, m, x.releaseLift ?? 0.015),
                  b = u(p, g, x.arrivalLift ?? 0.015),
                  S = e - m,
                  C = g - e,
                  w = x.ramp ?? 0.1,
                  T = x.arrivalRamp ?? w,
                  E = F((S - w) / (x.release ?? 0.4)),
                  ee = F(1 - (C - T) / (x.arrival ?? 0.4));
                v = d.map((e, t) =>
                  e
                    .slerp(y[t], F(S / w))
                    .slerp(l[t], E)
                    .slerp(b[t], ee)
                    .slerp(_[t], F(1 - C / T)),
                );
              }
              o.bones.forEach((e, t) => {
                (e.quaternion.copy(v[t]), e.updateWorldMatrix(!1, !0));
              });
              return;
            }
            let v = p.clone(),
              y = this.fingerPoints(
                m,
                p,
                o,
                a,
                void 0,
                f?.thumbOpposition ?? 0,
              ),
              b = [m, y.pip, y.dip, y.tip];
            if (!f && a > 0) {
              let r = (e, t, n, r = 0) => {
                  let i = o.bones[0].position.clone().applyQuaternion(t).add(e),
                    s = this.fingerPoints(i, n, o, a, t, r),
                    c = [i, s.pip, s.dip, s.tip],
                    l = o.bones.map((e, t) => {
                      let n = c[t + 1].clone().sub(c[t]).normalize(),
                        r = s.normal;
                      return new W()
                        .setFromRotationMatrix(
                          new H().makeBasis(
                            r,
                            n,
                            r.clone().cross(n).normalize(),
                          ),
                        )
                        .multiply(o.frameOffsets[t]);
                    });
                  return l.map((e, n) =>
                    (n === 0 ? t : l[n - 1]).clone().invert().multiply(e),
                  );
                },
                s = r(Q(t.wrist), i.q, g),
                c =
                  t.side === `R`
                    ? F((e - 6.0390358363389325) / 0.1) *
                      (1 - F((e - 11.36) / 0.24))
                    : 0;
              if (c > 0) {
                let e = [62, 64, 67, 69, 71][a],
                  n = R(
                    q(e),
                    yt + 0.016,
                    [0.267, 0.245, 0.224, 0.235, 0.257][a],
                  ),
                  o = r(Q(t.wrist), i.q, n);
                s.forEach((e, t) => e.slerp(o[t], c));
              }
              let l = (i, s) => {
                  let c = Xn(i, s, this.plannedPose(t, s)),
                    l = o.bones[0].position
                      .clone()
                      .applyQuaternion(c.q)
                      .add(c.position),
                    u = i.contactZ ?? this.contactDepth(l.z, K(i.midi), a),
                    d = R(
                      q(i.midi),
                      B(
                        bt(i.midi, u, 1),
                        n.contact(i.midi, u).y,
                        t.side === `R`
                          ? F((e - 6.0390358363389325) / 0.1) *
                              (1 - F((e - 12.5) / 0.25))
                          : 0,
                      ) + (i.contactLift ?? 0.002),
                      u,
                    );
                  return r(c.position, c.q, d, i.thumbOpposition ?? 0);
                },
                f = u && u.time + u.duration <= e ? u : void 0,
                h = d && d.time >= e ? d : void 0,
                _ = f ? f.time + f.duration : -10,
                v = h?.time ?? 1e6,
                y = v - _,
                b = s.map((e) => e.clone());
              if (f && h && y < 0.5) {
                let t = V((e - _) / Math.max(0.001, y)),
                  n = F(t),
                  r = l(f, _),
                  i = l(h, v),
                  a = Math.sin(t * Math.PI) ** 2 * F(y / 0.16) * 0.55;
                b = r.map((e, t) => e.slerp(i[t], n).slerp(s[t], a));
              } else {
                if (f) {
                  let t = l(f, _),
                    n = 1 - F((e - _) / 0.19);
                  b.forEach((e, r) => e.slerp(t[r], n));
                }
                if (h) {
                  let t = l(h, v),
                    n = F(1 - (v - e) / 0.27);
                  b.forEach((e, r) => e.slerp(t[r], n));
                }
              }
              let x = (e) => {
                  let t = o.bones[1].position
                      .clone()
                      .applyQuaternion(e[0])
                      .normalize(),
                    n = o.rest[0].angleTo(e[0]);
                  return Math.min(
                    F((1.4 - n) / 0.25),
                    F((t.y - 0.25) / 0.2),
                    F((0.65 + t.z) / 0.2),
                    F((0.85 - Math.abs(t.x)) / 0.2),
                  );
                },
                S = Math.min(x(s), x(b)),
                C = {
                  p00322: {
                    time: 71.178428,
                    duration: 0.269968,
                    contactZ: null,
                    contactLift: 0.0062824555694730895,
                  },
                },
                w = (e, n, r) => {
                  let i = x(l(e, n)),
                    o =
                      t.side === `L` &&
                      a === 1 &&
                      e.contactZ === 0.28 &&
                      e.contactLift === 0.002
                        ? C[e.id]
                        : void 0;
                  if (!o || e.time !== o.time || e.duration !== o.duration)
                    return i;
                  let s = { ...e, contactLift: o.contactLift };
                  return (
                    o.contactZ === null
                      ? delete s.contactZ
                      : (s.contactZ = o.contactZ),
                    B(x(l(s, n)), i, r)
                  );
                };
              if (
                (f &&
                  (S = Math.min(
                    S,
                    w(
                      f,
                      _,
                      f && h && y < 0.5
                        ? 1 - F((e - _) / Math.max(0.001, y))
                        : 1 - F((e - _) / 0.19),
                    ),
                  )),
                h)
              ) {
                let n = w(
                  h,
                  v,
                  F(
                    f && h && y < 0.5
                      ? (e - _) / Math.max(0.001, y)
                      : 1 - (v - e) / 0.27,
                  ),
                );
                (t.side === `R` &&
                  a === 1 &&
                  f?.id === `p00285` &&
                  h.id === `p00302` &&
                  Math.abs(_ - 64.184354) < 1e-7 &&
                  Math.abs(v - 67.016236) < 1e-7 &&
                  (n = B(0.14897594070608658, n, F((e - 65.7) / 0.2))),
                  (S = Math.min(S, n)));
              }
              S = B(S, 1, c);
              let T = r(Q(t.wrist), i.q, p);
              (o.bones.forEach((e, t) => {
                (e.quaternion.copy(T[t].slerp(b[t], S)),
                  e.updateWorldMatrix(!1, !0));
              }),
                At(e, t.side, a, o.bones, t.wrist, m, f, h));
              return;
            }
            for (let e = 0; e < 3; e++) {
              let t = b[e + 1].clone().sub(b[e]).normalize(),
                n = y.normal,
                r;
              ((r = new W()
                .setFromRotationMatrix(
                  new H().makeBasis(n, t, n.clone().cross(t).normalize()),
                )
                .multiply(o.frameOffsets[e])),
                zn(o.bones[e], r));
            }
            f &&
              e >= f.time &&
              e < f.time + f.duration &&
              this.contacts.push({
                hand: t.side,
                finger: a + 1,
                midi: f.midi,
                error: Q(o.tip).distanceTo(v),
              });
          };
          s(t.fingerNotes[a]);
          let c = Zn(t, a, e);
          if (c && !r.some((e) => e.finger === a + 1)) {
            let e = o.bones.map((e) => e.quaternion.clone());
            (s(c.notes),
              o.bones.forEach((t, n) => {
                (t.quaternion.slerp(e[n], 1 - c.weight),
                  t.updateWorldMatrix(!1, !0));
              }));
          }
        }
      }
    }
  }
};
function Wn(e, t, n) {
  let r = F((t - 106.65) / 0.13) * (1 - F((t - 107.35) / 0.2));
  if (r === 0) return;
  let i = e.hands[1];
  for (let a = 1; a < 5; a++) {
    if (
      i.notes.some(
        (e) => e.finger === a + 1 && e.time <= t && e.time + e.duration > t,
      )
    )
      continue;
    let o = i.fingers[a],
      s = i.fingerNotes[a],
      c,
      l;
    for (let e of s)
      if (e.time + e.duration <= t) c = e;
      else if (e.time >= t) {
        l = e;
        break;
      }
    let u = (t, r) => {
        let s = e.plannedPose(i, r),
          c = o.bones[0].position.clone().applyQuaternion(s.q).add(s.position),
          l = t.contactZ ?? e.contactDepth(c.z, K(t.midi), a),
          u = R(
            q(t.midi),
            n.contact(t.midi, l).y + (t.contactLift ?? 0.002),
            l,
          ),
          d = e.fingerPoints(c, u, o, a, s.q),
          f = [c, d.pip, d.dip, d.tip],
          p = o.bones.map((e, t) => {
            let n = f[t + 1].clone().sub(f[t]).normalize(),
              r = d.normal;
            return new W()
              .setFromRotationMatrix(
                new H().makeBasis(r, n, r.clone().cross(n).normalize()),
              )
              .multiply(o.frameOffsets[t]);
          });
        return p.map((e, t) =>
          (t === 0 ? s.q : p[t - 1]).clone().invert().multiply(e),
        );
      },
      d = o.rest.map((e) => e.clone());
    if (a === 1 && c && l && [`p00519`, `p00524`].includes(c.id)) {
      let e = c.time + c.duration,
        n = l.time - e,
        r = (t - e) / n,
        i = u(c, e),
        a = u(l, l.time);
      ((d = i.map((e, t) => e.slerp(a[t], F(r)))),
        d[0].premultiply(
          new W().setFromAxisAngle(
            R(-1, 0, 0),
            (Math.sin(r * Math.PI) ** 2 * 0 * Math.PI) / 180,
          ),
        ),
        d[0].premultiply(
          new W().setFromAxisAngle(
            R(0, 0, -1),
            (Math.sin(r * Math.PI) ** 2 * 0 * Math.PI) / 180,
          ),
        ));
    } else {
      let e = c ? t - c.time - c.duration : 100,
        n = l ? l.time - t : 100,
        r = F(e / 0.19) * F(n / 0.27),
        a = o.rest.map((e) => e.clone()),
        s = i.wrist.getWorldQuaternion(new W()),
        u = R(-1, 0, 0).applyQuaternion(s),
        f = s.clone();
      for (let e = 0; e < 3; e++) {
        let t = [30, -35, -20][e],
          n = u.clone().applyQuaternion(f.clone().invert());
        (a[e].premultiply(new W().setFromAxisAngle(n, (t * Math.PI) / 180)),
          f.multiply(a[e]));
      }
      d.forEach((e, t) => e.copy(o.bones[t].quaternion).slerp(a[t], r));
    }
    o.bones.forEach((e, t) => {
      (e.quaternion.slerp(d[t], r), e.updateWorldMatrix(!1, !0));
    });
  }
}
var Gn = (e) => (
  (e = Math.max(0, Math.min(1, e))),
  e * e * e * (10 + e * (-15 + 6 * e))
);
function Kn(e, t) {
  if (t <= 65.9 || t >= 67.016236) return;
  let n = e.hands[1];
  for (let e of [1, 3]) {
    if (
      n.notes.some(
        (n) => n.finger === e + 1 && n.time <= t && n.time + n.duration > t,
      )
    )
      continue;
    let r, i;
    for (let a of n.fingerNotes[e])
      if (a.time + a.duration <= t) r = a;
      else if (a.time >= t) {
        i = a;
        break;
      }
    if (!r || !i) continue;
    let a = 0;
    if (
      (e === 1 &&
        r.id === `p00285` &&
        i.id === `p00302` &&
        (a = 10 * Gn((t - 65.9) / 0.13) * Gn((i.time - t) / 0.27)),
      e === 3 &&
        r.id === `p00296` &&
        i.id === `p00301` &&
        (a = 15 * Gn((t - r.time - r.duration) / 0.1) * Gn((i.time - t) / 0.1)),
      !a)
    )
      continue;
    let o = n.fingers[e].bones[0],
      s = n.wrist.getWorldQuaternion(new W()),
      c = R(-1, 0, 0).applyQuaternion(s),
      l = o.parent.getWorldQuaternion(new W()),
      u = new W().setFromAxisAngle(c, (a * Math.PI) / 180);
    (o.quaternion.premultiply(l.clone().invert().multiply(u).multiply(l)),
      o.updateWorldMatrix(!1, !0));
  }
}
function qn(e, t, n) {
  for (let r of [
    {
      hi: 0,
      begin: 159.007812,
      arrival: 159.153206,
      end: 159.374607,
      finish: 159.501539,
      lanes: [
        [1, 50],
        [2, 47],
        [3, 45],
      ],
    },
    {
      hi: 1,
      begin: 158.981206,
      arrival: 159.09974459071665,
      end: 159.65,
      finish: 159.9,
      lanes: [
        [0, 67],
        [1, 69],
        [2, 71],
        [3, 72],
        [4, 74],
      ],
    },
  ]) {
    let i =
      F((t - r.begin) / (r.arrival - r.begin)) *
      (1 - F((t - r.end) / (r.finish - r.end)));
    if (!i) continue;
    let a = e.hands[r.hi],
      o = a.wrist.getWorldQuaternion(new W());
    for (let [s, c] of r.lanes) {
      let l = a.fingerNotes[s];
      if (l.some((e) => e.time <= t && e.time + e.duration > t)) continue;
      let u = l.filter((e) => e.time + e.duration <= t).at(-1),
        d = l.find((e) => e.time >= t),
        f = u ? t - u.time - u.duration : 100,
        p = d ? d.time - t : 100,
        m = i * F(f / 0.09) * F(p / 0.12),
        h = a.fingers[s],
        g = Q(h.bones[0]),
        _ = h.lengths.reduce((e, t) => e + t, 0),
        v = g.z - _ * 0.75,
        y = n.contact(c, v);
      ((y.y += 0.024),
        r.hi === 1
          ? (t > 159.188206 && (y.x += Q(a.wrist).x - 0.0796966666666667),
            s === 1 && (y.x -= 0.006))
          : t > 159.159706 && (y.x += Q(a.wrist).x + 0.218));
      let b = e.fingerPoints(g, y, h, s, o, s === 0 ? 1.1 : 0),
        x = [g, b.pip, b.dip, b.tip],
        S = h.bones.map((e, t) => {
          let n = x[t + 1].clone().sub(x[t]).normalize(),
            r = b.normal;
          return new W()
            .setFromRotationMatrix(
              new H().makeBasis(r, n, r.clone().cross(n).normalize()),
            )
            .multiply(h.frameOffsets[t]);
        }),
        C = S.map((e, t) =>
          (t === 0 ? o : S[t - 1]).clone().invert().multiply(e),
        );
      h.bones.forEach((e, t) => {
        (e.quaternion.slerp(C[t], m), e.updateWorldMatrix(!1, !0));
      });
    }
  }
}
function Jn(e, t, n) {
  if (t < 158.95 || t > 159.85) return;
  let r = new Set([`p00719`, `p00720`, `p00721`, `p00722`, `p00723`]),
    i = new Set([...r, `p00724`, `p00725`]);
  for (let a of e.hands) {
    let o = a.wrist.getWorldQuaternion(new W());
    for (let s = 0; s < 5; s++) {
      let c = a.fingerNotes[s];
      if (c.some((e) => e.time <= t && e.time + e.duration > t)) continue;
      let l = c.filter((e) => e.time + e.duration <= t).at(-1),
        u = c.find((e) => e.time >= t),
        d = l ? t - l.time - l.duration : 100,
        f = u ? u.time - t : 100,
        p = u && i.has(u.id) && f < 0.2,
        m = l && r.has(l.id) && d < 0.18;
      if (!p && !m) continue;
      let h = a.fingers[s],
        g = Q(h.bones[0]),
        _ = h.lengths.reduce((e, t) => e + t, 0),
        v = (t) => {
          let r = t.contactZ ?? e.contactDepth(g.z, K(t.midi), s),
            i = n.contact(t.midi, r);
          return ((i.y += t.contactLift ?? 0.002), i);
        },
        y,
        b,
        x = 0;
      if (p && l && u.time - l.time - l.duration < 0.5) {
        let e = V(d / (u.time - l.time - l.duration));
        ((y = v(l).lerp(v(u), F(e))),
          (y.y += 0.03 * Math.sin(e * Math.PI) ** 2),
          (b = 1),
          (x = B(l.thumbOpposition ?? 0, u.thumbOpposition ?? 0, F(e))));
      } else if (p)
        ((y = v(u)),
          (y.y += 0.02 * F(f / 0.12)),
          (b = F((0.2 - f) / 0.08)),
          (x = u.thumbOpposition ?? 0));
      else {
        let e = a.side === `L` ? [55, 50, 47, 45, 43] : [67, 69, 71, 72, 74],
          t = g.z - _ * 0.75,
          r = n.contact(e[s], t);
        ((r.y += 0.024),
          (r.x +=
            Q(a.wrist).x - (a.side === `L` ? -0.218 : 0.0796966666666667)),
          a.side === `R` && s === 1 && (r.x -= 0.006));
        let i = V(d / 0.09);
        ((y = v(l).lerp(r, F(i))),
          (y.y += 0.006 * Math.sin(i * Math.PI) ** 2),
          (b = (1 - F((d - 0.11) / 0.07)) * F(f / 0.07)),
          (x = l.thumbOpposition ?? 0));
      }
      let S = e.fingerPoints(g, y, h, s, o, x),
        C = [g, S.pip, S.dip, S.tip],
        w = h.bones.map((e, t) => {
          let n = C[t + 1].clone().sub(C[t]).normalize(),
            r = S.normal;
          return new W()
            .setFromRotationMatrix(
              new H().makeBasis(r, n, r.clone().cross(n).normalize()),
            )
            .multiply(h.frameOffsets[t]);
        }),
        T = w.map((e, t) =>
          (t === 0 ? o : w[t - 1]).clone().invert().multiply(e),
        );
      h.bones.forEach((e, t) => {
        (e.quaternion.slerp(T[t], b), e.updateWorldMatrix(!1, !0));
      });
    }
  }
}
var Yn = [
  {
    id: `p00720`,
    time: 159.159706,
    duration: 0.264901,
    midi: 55,
    velocity: 0.683,
    hand: `L`,
    finger: 2,
    role: `bass`,
    bar: 57,
    beat: 0,
    contactLift: 0.0017201214246451856,
    writtenDuration: 0.313833,
    contactZ: 0.2414034716186579,
    idleAnchors: [
      {
        at: 159.159706,
        position: [
          -0.19510754537537695, 0.7588795809836498, 0.34487155656591056,
        ],
        quaternion: [
          0.17296534487421944, -0.7110521538193679, 0.6623988981720683,
          -0.16036060526765847,
        ],
      },
      {
        at: 159.424607,
        position: [
          -0.19510754537537695, 0.7588795809836498, 0.34487155656591056,
        ],
        quaternion: [
          0.17296534487421944, -0.7110521538193679, 0.6623988981720683,
          -0.16036060526765847,
        ],
      },
    ],
  },
  {
    id: `p00721`,
    time: 159.181206,
    duration: 0.252444,
    midi: 67,
    velocity: 0.6307,
    hand: `R`,
    finger: 2,
    role: `harmony`,
    bar: 57,
    beat: 0,
    contactLift: 0.003008,
    writtenDuration: 0.306866,
    idleAnchors: [
      {
        at: 159.181206,
        position: [0.09721, 0.7397400000000001, 0.382],
        quaternion: [
          -0.0589776940544944, -0.7484566234347281, 0.6579472775970895,
          0.05864890743465325,
        ],
      },
      {
        at: 159.43365,
        position: [0.10730768570061214, 0.7408699222769795, 0.3837008513148194],
        quaternion: [
          -0.05183493996380477, -0.7428683384703474, 0.6654196489056265,
          0.05173452954813588,
        ],
      },
    ],
  },
  {
    id: `p00722`,
    time: 159.184706,
    duration: 0.243389,
    midi: 71,
    velocity: 0.6307,
    hand: `R`,
    finger: 4,
    role: `harmony`,
    bar: 57,
    beat: 0,
    contactLift: 0.002391,
    writtenDuration: 0.303366,
    idleAnchors: [
      {
        at: 159.184706,
        position: [0.09721, 0.7397400000000001, 0.382],
        quaternion: [
          -0.0589776940544944, -0.7484566234347281, 0.6579472775970895,
          0.05864890743465325,
        ],
      },
      {
        at: 159.428095,
        position: [
          0.10436887638637647, 0.7405410720621478, 0.38320583910763434,
        ],
        quaternion: [
          -0.05391480524781695, -0.744509034631941, 0.6632576058339886,
          0.05374792488897258,
        ],
      },
    ],
  },
];
function Xn(e, t, n) {
  let r = e.idleAnchors?.find((e) => Math.abs(e.at - t) < 1e-7);
  return r ? { position: R(...r.position), q: new W(...r.quaternion) } : n;
}
function Zn(e, t, n) {
  if (t === 0) return null;
  let r = (
    e.side === `L`
      ? { 1: [159.5, 160.501539] }
      : {
          1: [153.760383, 160.514539],
          2: [159.5, 160.856873],
          3: [159.5, 161.181206],
        }
  )[t];
  if (!r || n <= r[0] || n >= r[1]) return null;
  let i = 1 - F((n - 158.9) / 0.1) * (1 - F((n - 159.5) / 0.15));
  if (i === 0) return null;
  let a = e.fingerNotes[t].filter(
    (e) => ![`p00720`, `p00721`, `p00722`].includes(e.id),
  );
  return (
    a.push(...Yn.filter((n) => n.hand === e.side && n.finger === t + 1)),
    a.sort((e, t) => e.time - t.time),
    { notes: a, weight: i }
  );
}
var Qn = [
    [
      [
        [
          -0.40613338630231355, 0.4113140131804842, -0.27687052021717007,
          -0.7676061281160192,
        ],
        [
          0.1254311655985068, -0.3921618546555416, -0.017886395379045544,
          -0.9111291193392078,
        ],
        [
          -0.03514591727872629, 0.38360495494492125, -0.027215067278424765,
          0.9224268461102552,
        ],
      ],
      [
        [
          -0.2906210851990639, -0.10480000460865235, 0.126151449968551,
          0.9426781823838808,
        ],
        [
          0.3233492956033822, 0.13684209250449186, -0.07606353817330648,
          0.933238347322026,
        ],
        [
          0.1617389982798334, 0.0536138962705241, -0.005029968809412114,
          0.9853632558482714,
        ],
      ],
      [
        [
          -0.2283862451867844, 0.004500699331975562, 0.08125296562965906,
          0.9701636059404573,
        ],
        [
          0.35334545698389686, 0.10854521263601344, -0.013060826186461077,
          0.9290825257542901,
        ],
        [
          0.1682869492465458, 0.14207505600314357, 0.0383559554141534,
          0.9746912341143024,
        ],
      ],
      [
        [
          -0.23408671678453347, 0.15493270621663774, 0.044919801061728985,
          0.9587395251276551,
        ],
        [
          0.33824304569833746, 0.11282420377904973, 0.09665379304757857,
          0.9292579756815929,
        ],
        [
          0.16020236034801977, -0.03079839570338569, 0.061746211675091756,
          0.9846695221772612,
        ],
      ],
      [
        [
          0.06642902098985004, 0.20474065054358198, -0.36445592418849226,
          0.9060023897178726,
        ],
        [
          0.02479879847762828, -0.00198983679085699, 0.0059003202687395945,
          0.9996730697404719,
        ],
        [
          0.011576852448071545, 0.09737967617296545, 0.003954395439951771,
          0.9951721147181268,
        ],
      ],
    ],
    [
      [
        [
          0.7001514348659952, -0.23526500381163287, 0.21139717588868553,
          0.6401168489134532,
        ],
        [
          -0.5341323694917186, 0.33286812551864586, 0.07616764637156118,
          0.7733691954823918,
        ],
        [
          -0.15666274942597538, 0.37637129810142117, -0.12131252218541042,
          0.9050329833043433,
        ],
      ],
      [
        [
          -0.5001616041549686, 0.0494390338561648, 0.0188502465430991,
          0.864314069524565,
        ],
        [
          0.5134193863460182, 0.12325957084012798, -0.12077548164429294,
          0.8406074559233787,
        ],
        [
          0.26339955293392, 0.05240945082069659, -0.008191382822971056,
          0.9632272972805185,
        ],
      ],
      [
        [
          -0.35985941695241364, 0.1643649846354873, -0.20689033294345616,
          0.8948082101228975,
        ],
        [
          0.4397500869743118, 0.10420188024123092, -0.016255027742749922,
          0.8919067233928439,
        ],
        [
          0.2115476319516354, 0.14080369362908515, 0.04821621391975027,
          0.9659695212538058,
        ],
      ],
      [
        [
          -0.2885492497480288, 0.3009397387278099, -0.30040324283149755,
          0.8578650748998704,
        ],
        [
          0.36889204405232046, 0.1113046849536565, 0.10541174062132139,
          0.9167433075193141,
        ],
        [
          0.17530533278563162, -0.03070593566173744, 0.06756743666886354,
          0.9817127010047569,
        ],
      ],
      [
        [
          -0.05886786937654078, 0.24108508579678886, -0.6676017079591636,
          0.7019405351533912,
        ],
        [
          -0.39055220023384346, 0.00182341484957177, -0.09293356651484176,
          -0.9158760867418813,
        ],
        [
          0.18641564860485965, 0.09547865364739382, 0.06367746201405719,
          0.975744953091923,
        ],
      ],
    ],
  ],
  $n = [
    [-0.9483243939951909, 0.18243419888476753, 0.25961239031716216],
    [-0.9015569994607036, 0.3509972413050483, 0.25297410923752794],
    [-0.8832877274761183, 0.3968122657803761, 0.24968540802767045],
  ];
function er(e, t) {
  if (t <= 158.99 || t >= 159.153206) return;
  let n = e.hands[0],
    r = F((t - 158.99) / 0.1632060000000024);
  for (let e of [1, 2, 3])
    n.fingerNotes[e].some((e) => e.time <= t && e.time + e.duration > t) ||
      n.fingers[e].bones.forEach((n, i) => {
        (n.quaternion
          .fromArray(Qn[0][e][i])
          .slerp(new W().fromArray(Qn[1][e][i]), r),
          i === 0 &&
            n.quaternion.premultiply(
              new W().setFromAxisAngle(
                R(...$n[e - 1]),
                0.1 *
                  Math.sin((Math.PI * (t - 158.99)) / 0.1632060000000024) ** 2,
              ),
            ),
          n.updateWorldMatrix(!1, !0));
      });
}
var tr = [
  {
    fi: 3,
    keys: [
      {
        time: 159.157206,
        q: [
          [
            0.05308168066748613, -0.16502704442185318, 0.08162137975622426,
            0.9814715279383264,
          ],
          [
            -0.3919313653894685, 0.11006023472254448, 0.1119942366648432,
            -0.9064953615494259,
          ],
          [
            0.18676993378812043, 0.030629087976703134, -0.07198782746846986,
            0.9792837196128947,
          ],
        ],
      },
      {
        time: 159.188206,
        q: [
          [
            -0.24266998079680285, -0.13000710992282966, -0.11416375320953007,
            0.9545554352664807,
          ],
          [
            0.48976857965029724, -0.1037197887864201, -0.13995124383139296,
            0.8542731373228805,
          ],
          [
            -0.23675504021610172, -0.03023868171391142, 0.09125382424595094,
            -0.966801640783137,
          ],
        ],
      },
      {
        time: 159.23,
        q: [
          [
            -0.2205429575437884, -0.13388981017367144, -0.09957307450855318,
            0.9609992369608367,
          ],
          [
            -0.47832647836539666, 0.10455548448248438, 0.13668166050740505,
            -0.8611562311451559,
          ],
          [
            0.2307831774006128, 0.03029045985993107, -0.08895206085408607,
            0.9684570945272495,
          ],
        ],
      },
    ],
  },
  {
    fi: 1,
    keys: [
      {
        time: 158.9,
        q: [
          [
            -0.3429068903120357, 0.14993055442210307, -0.07517525822413229,
            0.9242750532055626,
          ],
          [
            0.2523003892423614, -0.14012153169984592, 0.059350099286582386,
            0.9556087251887746,
          ],
          [
            0.12545482399939506, -0.053901496848158974, 0.003900908716345121,
            0.9906263163695963,
          ],
        ],
      },
      {
        time: 159.025,
        q: [
          [
            0.3333193081143983, -0.2514691898290095, 0.31416743621029153,
            -0.8526196750726479,
          ],
          [
            0.31546848527233345, -0.13724930838383106, 0.07420939936428539,
            0.9360209544631639,
          ],
          [
            0.15768119861399, -0.05365081785416641, 0.004902915400812391,
            0.9860193663249254,
          ],
        ],
      },
      {
        time: 159.145,
        q: [
          [
            0.3652257496112859, -0.20062586796927875, 0.2788090095869269,
            -0.8652311579746814,
          ],
          [
            0.47813080369039773, -0.12637218039115633, 0.1124731395320755,
            0.8618415164456619,
          ],
          [
            -0.24384948181020372, 0.05268943696125242, -0.007582123571743246,
            -0.9683510545539487,
          ],
        ],
      },
      {
        time: 159.178206,
        q: [
          [
            -0.267446381240784, 0.1729160383399506, -0.2798714611124851,
            0.9056734796804237,
          ],
          [
            0.4835732684627423, -0.1259113367133296, 0.11375339311410616,
            0.8586986636011209,
          ],
          [
            0.24684017634201955, -0.052648272705985044, 0.007675112439710113,
            0.9675945325256623,
          ],
        ],
      },
      {
        time: 159.23,
        q: [
          [
            -0.26744643027281934, 0.17291597599195044, -0.2798713256791762,
            0.9056735189750915,
          ],
          [
            0.4835732684627423, -0.12591133671332952, 0.11375339311410607,
            0.8586986636011209,
          ],
          [
            0.24684017634202032, -0.052648272705985086, 0.007675112439710224,
            0.9675945325256621,
          ],
        ],
      },
    ],
  },
  {
    fi: 2,
    keys: [
      {
        time: 158.9,
        q: [
          [
            -0.298035321708347, 0.04684927016543237, -0.03114633406254389,
            0.9528955865012876,
          ],
          [
            0.34205198332153797, -0.10903130791089777, 0.012644501695782892,
            0.9332484830836356,
          ],
          [
            0.16272828328248592, -0.1422180746022649, -0.03709035038880198,
            0.9756627649881876,
          ],
        ],
      },
      {
        time: 159.025,
        q: [
          [
            0.34107088214763076, -0.13566212083774154, 0.248235913194706,
            -0.896462702298477,
          ],
          [
            0.436182694727443, -0.10440326136147499, 0.01612407479747724,
            0.8936356248770074,
          ],
          [
            -0.20973371264656315, 0.14086446000850114, 0.04780424717056861,
            -0.9663765972116966,
          ],
        ],
      },
      {
        time: 159.145,
        q: [
          [
            0.2955614690412654, -0.07595211608127506, 0.21491125578044346,
            -0.9277326413651845,
          ],
          [
            0.5068434201554386, -0.10000767758209485, 0.018736068855900595,
            0.8560123664957187,
          ],
          [
            -0.24624091943168647, 0.13956526989022358, 0.05612529563274157,
            -0.9574637832461572,
          ],
        ],
      },
      {
        time: 159.184706,
        q: [
          [
            -0.0063242127116780456, -0.004709516583380979, 0.21466656645232027,
            -0.9766555686284903,
          ],
          [
            0.5848118582432895, -0.09409488308665802, 0.02161817179029804,
            0.8054029381613897,
          ],
          [
            -0.28819276265552335, 0.13779604893960598, 0.06568733874084161,
            -0.9453265864664635,
          ],
        ],
      },
    ],
  },
  {
    fi: 4,
    keys: [
      {
        time: 158.9,
        q: [
          [
            -0.12906549296428332, -0.14356823268425467, 0.011687647874870657,
            0.9811185759004664,
          ],
          [
            0.30129436729918996, 0.0018904738524308587, -0.07169647328838846,
            0.95083003005816,
          ],
          [
            -0.14248129923612057, 0.09627720717746482, 0.048670199498526016,
            -0.9839009047799825,
          ],
        ],
      },
      {
        time: 159.025,
        q: [
          [
            0.5558213655200244, 0.13625789931744267, -0.07369397643427651,
            -0.8167408372509678,
          ],
          [
            0.6192704939835354, 0.0015330425644796593, -0.14736059352746544,
            0.771224066362764,
          ],
          [
            -0.30772896694631224, 0.0920942847990818, 0.10511756867199076,
            -0.9411545156699779,
          ],
        ],
      },
      {
        time: 159.157206,
        q: [
          [
            -0.0861046514486227, 0.42564157905044325, -0.09466599658545433,
            -0.895797751727652,
          ],
          [
            -0.35531199510496914, -0.001850867426634678, 0.08455030379591791,
            -0.9309141794437787,
          ],
          [
            -0.16891383858969258, 0.09582339732124309, 0.05769935101913702,
            -0.9792633849849872,
          ],
        ],
      },
      {
        time: 159.188206,
        q: [
          [
            -0.28063031141137557, 0.21917868142575894, 0.10184418212206889,
            -0.9288891786399995,
          ],
          [
            -0.35531199510496914, -0.001850867426634678, 0.08455030379591791,
            -0.9309141794437787,
          ],
          [
            -0.16891383858969258, 0.09582339732124309, 0.05769935101913702,
            -0.9792633849849872,
          ],
        ],
      },
    ],
  },
];
function nr(e, t) {
  let n = e.hands[1];
  for (let e of tr) {
    let r = e.keys;
    if (
      t <= r[0].time ||
      t >= r[r.length - 1].time ||
      n.fingerNotes[e.fi].some((e) => e.time <= t && e.time + e.duration > t)
    )
      continue;
    let i = r.findIndex((e) => e.time >= t),
      a = r[i - 1],
      o = r[i],
      s = F((t - a.time) / (o.time - a.time));
    n.fingers[e.fi].bones.forEach((e, t) => {
      (e.quaternion.fromArray(a.q[t]).slerp(new W().fromArray(o.q[t]), s),
        e.updateWorldMatrix(!1, !0));
    });
  }
}
var rr = [
  {
    side: `L`,
    previous: `p00717`,
    previousEnd: 159.007812,
    next: `p00720`,
    nextTime: 159.159706,
    knots: [
      {
        time: 159.08,
        q: [
          [
            0.19935835458720774, -0.4196751987049543, 0.42625898791429834,
            0.7761650899061974,
          ],
          [
            -0.022386235424429746, 0.395246957756256, 0.0031919725427519696,
            0.9182965262698277,
          ],
          [
            -0.006259220784274655, 0.38397240656393794, -0.004846495068616674,
            0.9233106327982048,
          ],
        ],
      },
      {
        time: 159.13,
        q: [
          [
            0.5620542039160664, -0.2769894797373483, 0.31088211543283334,
            0.714649705509443,
          ],
          [
            -0.4240288510849169, 0.35724738164610315, 0.06046673019373966,
            0.830010612157632,
          ],
          [
            -0.12200164193253055, 0.3793856211469744, -0.09447244929809656,
            0.9122812648280736,
          ],
        ],
      },
    ],
  },
  {
    side: `R`,
    previous: `p00691`,
    previousEnd: 153.403546,
    next: `p00721`,
    nextTime: 159.181206,
    knots: [
      {
        time: 159.1,
        q: [
          [
            0.18688507747278701, 0.7973211164992682, -0.2306614847161606,
            0.5254981326012201,
          ],
          [
            -0.022389795241872096, -0.3952463993713896, -0.0031899699078017443,
            0.9182966867766469,
          ],
          [
            -0.006259353783984123, -0.38397274011256916, 0.00484516080351069,
            0.9233105001880144,
          ],
        ],
      },
      {
        time: 159.15,
        q: [
          [
            0.5516408272269527, 0.6964898785337075, -0.2088449786164586,
            0.40862945320633737,
          ],
          [
            -0.46224644901314527, -0.3496051679406468, -0.06592091961876159,
            0.8122554273629368,
          ],
          [
            -0.13379335310863122, -0.37844725132301854, 0.10359902855682862,
            0.9100243172092065,
          ],
        ],
      },
    ],
  },
  {
    side: `L`,
    previous: `p00720`,
    previousEnd: 159.374607,
    next: `p00737`,
    nextTime: 161.826373,
    knots: [
      {
        time: 159.42,
        q: [
          [
            0.4934638535603837, -0.2987731452669487, 0.21870653326946157,
            0.7870168251641851,
          ],
          [
            -0.427454107032563, 0.3565958001468686, 0.060955176407105884,
            0.8284967641263227,
          ],
          [
            -0.12304937501645613, 0.37930580509522405, -0.09528376878523673,
            0.9120893382422604,
          ],
        ],
      },
      {
        time: 159.47,
        q: [
          [
            0.12984643104048182, -0.4097100518784169, 0.356798093873369,
            0.8294411974904541,
          ],
          [
            -0.022386235424430023, 0.39524695775625623, 0.0031919725427518725,
            0.9182965262698279,
          ],
          [
            -0.006259220784272879, 0.38397240656393755, -0.0048464950686158415,
            0.9233106327982055,
          ],
        ],
      },
    ],
  },
];
function ir(e, t) {
  for (let n of rr) {
    let r = n.knots[0],
      i = n.knots[n.knots.length - 1];
    if (t < r.time || t > i.time) continue;
    let a = e.hands.find((e) => e.side === n.side),
      o = a.fingerNotes[0];
    if (o.some((e) => e.time <= t && e.time + e.duration > t)) continue;
    let s = o.filter((e) => e.time + e.duration <= t).at(-1),
      c = o.find((e) => e.time >= t);
    if (
      s?.id !== n.previous ||
      c?.id !== n.next ||
      Math.abs(s.time + s.duration - n.previousEnd) > 1e-7 ||
      Math.abs(c.time - n.nextTime) > 1e-7
    )
      continue;
    let l = 1;
    for (; l < n.knots.length - 1 && t > n.knots[l].time; ) l++;
    let u = n.knots[l - 1],
      d = n.knots[l],
      f = V((t - u.time) / (d.time - u.time)),
      p = f * f * f * (10 + f * (-15 + 6 * f));
    a.fingers[0].bones.forEach((e, t) => {
      let n = new W().fromArray(u.q[t]),
        r = new W().fromArray(d.q[t]);
      (e.quaternion.copy(n.slerp(r, p)), e.updateWorldMatrix(!1, !0));
    });
  }
}
var ar = [
  [
    0.4131036044501331, 0.65746541850643, -0.35640774368231043,
    0.5196711996077494,
  ],
  [
    -0.48850149643925833, -0.3438646331371362, -0.06966535475332468,
    0.7989181061918433,
  ],
  [
    -0.14203256974801562, -0.3777384330960695, 0.10997893281324457,
    0.908319910400604,
  ],
];
function or(e, t) {
  if (t <= 159.5 || t >= 163.525895) return;
  let n = e.hands[1],
    r = n.fingerNotes[0],
    i = r.filter((e) => e.time + e.duration <= t).at(-1),
    a = r.find((e) => e.time >= t);
  if (
    i?.id !== `p00721` ||
    a?.id !== `p00750` ||
    Math.abs(i.time + i.duration - 159.38365) > 1e-7 ||
    Math.abs(a.time - 163.825895) > 1e-7
  )
    return;
  let o = F((t - 159.5) / 0.16) * (1 - F((t - 163.225895) / 0.3));
  n.fingers[0].bones.forEach((e, t) => {
    (e.quaternion.slerp(new W().fromArray(ar[t]), o),
      e.updateWorldMatrix(!1, !0));
  });
}
var sr = class extends Un {
    plannedPose(e, t) {
      let n = super.plannedPose(e, t);
      if (
        (e.side === `L` &&
          t > 159.374607 &&
          t < 159.498539 &&
          (n.position.y +=
            0.005 *
            Math.sin((Math.PI * (t - 159.374607)) / 0.12393199999999638) ** 2),
        e.side === `R`)
      ) {
        let e =
          Gn((t - 66.18) / 0.12194999999999823) *
          (1 - Gn((t - 66.54) / 0.12809299999999268));
        n.position.x -= 0.035 * e;
        for (let [e, r, i, a] of [
          [106.81, 106.919774, 0.02, 0.024],
          [107.18, 107.269683, 0.024, 0],
        ]) {
          if (t <= e || t >= r) continue;
          let o = (t - e) / (r - e),
            s = Math.sin(o * Math.PI) ** 2;
          ((n.position.y += i * s), (n.position.z += a * s));
        }
      }
      return n;
    }
    update(e, t, n, r, i) {
      (super.update(e, t, n, r, i),
        Wn(this, e, n),
        Kn(this, e),
        qn(this, e, n),
        Jn(this, e, n),
        er(this, e),
        nr(this, e),
        ir(this, e),
        or(this, e));
    }
  },
  cr = class e extends z {
    constructor(t, n = {}) {
      (super(t),
        (this.isReflector = !0),
        (this.type = `Reflector`),
        (this.forceUpdate = !1),
        (this.camera = new Me()));
      let r = this,
        i = n.color === void 0 ? new U(8355711) : new U(n.color),
        a = n.textureWidth || 512,
        o = n.textureHeight || 512,
        s = n.clipBias || 0,
        c = n.shader || e.ReflectorShader,
        l = n.multisample === void 0 ? 4 : n.multisample,
        u = new we(),
        d = new A(),
        f = new A(),
        p = new A(),
        h = new H(),
        g = new A(0, 0, -1),
        _ = new m(),
        v = new A(),
        y = new A(),
        b = new m(),
        S = new H(),
        C = this.camera,
        w = new ue(a, o, { samples: l, type: x }),
        T = new E({
          name: c.name === void 0 ? `unspecified` : c.name,
          uniforms: Ze.clone(c.uniforms),
          fragmentShader: c.fragmentShader,
          vertexShader: c.vertexShader,
        });
      ((T.uniforms.tDiffuse.value = w.texture),
        (T.uniforms.color.value = i),
        (T.uniforms.textureMatrix.value = S),
        (this.material = T),
        (this.onBeforeRender = function (e, t, n) {
          if (
            (f.setFromMatrixPosition(r.matrixWorld),
            p.setFromMatrixPosition(n.matrixWorld),
            h.extractRotation(r.matrixWorld),
            d.set(0, 0, 1),
            d.applyMatrix4(h),
            v.subVectors(f, p),
            v.dot(d) > 0 && this.forceUpdate === !1)
          )
            return;
          (v.reflect(d).negate(),
            v.add(f),
            h.extractRotation(n.matrixWorld),
            g.set(0, 0, -1),
            g.applyMatrix4(h),
            g.add(p),
            y.subVectors(f, g),
            y.reflect(d).negate(),
            y.add(f),
            C.position.copy(v),
            C.up.set(0, 1, 0),
            C.up.applyMatrix4(h),
            C.up.reflect(d),
            C.lookAt(y),
            (C.far = n.far),
            C.updateMatrixWorld(),
            C.projectionMatrix.copy(n.projectionMatrix),
            S.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
            S.multiply(C.projectionMatrix),
            S.multiply(C.matrixWorldInverse),
            S.multiply(r.matrixWorld),
            u.setFromNormalAndCoplanarPoint(d, f),
            u.applyMatrix4(C.matrixWorldInverse),
            _.set(u.normal.x, u.normal.y, u.normal.z, u.constant));
          let i = C.projectionMatrix;
          ((b.x = (Math.sign(_.x) + i.elements[8]) / i.elements[0]),
            (b.y = (Math.sign(_.y) + i.elements[9]) / i.elements[5]),
            (b.z = -1),
            (b.w = (1 + i.elements[10]) / i.elements[14]),
            _.multiplyScalar(2 / _.dot(b)),
            (i.elements[2] = _.x),
            (i.elements[6] = _.y),
            (i.elements[10] = _.z + 1 - s),
            (i.elements[14] = _.w),
            (r.visible = !1));
          let a = e.getRenderTarget(),
            o = e.xr.enabled,
            c = e.shadowMap.autoUpdate;
          ((e.xr.enabled = !1),
            (e.shadowMap.autoUpdate = !1),
            e.setRenderTarget(w),
            e.state.buffers.depth.setMask(!0),
            e.autoClear === !1 && e.clear(),
            e.render(t, C),
            (e.xr.enabled = o),
            (e.shadowMap.autoUpdate = c),
            e.setRenderTarget(a));
          let l = n.viewport;
          (l !== void 0 && e.state.viewport(l),
            (r.visible = !0),
            (this.forceUpdate = !1));
        }),
        (this.getRenderTarget = function () {
          return w;
        }),
        (this.dispose = function () {
          (w.dispose(), r.material.dispose());
        }));
    }
  };
cr.ReflectorShader = {
  name: `ReflectorShader`,
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
  },
  vertexShader: `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,
  fragmentShader: `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`,
};
function lr(e, t, n, r) {
  let i;
  if (typeof Image > `u`) i = new d();
  else {
    let t,
      n,
      a = new Promise((e, r) => {
        ((t = e), (n = r));
      });
    ((i = new g().load(e, () => t(), void 0, n)), r.push(a));
  }
  return (
    (i.userData.sourcePath = `public` + e),
    (i.colorSpace = k),
    (i.wrapS = i.wrapT = qe),
    i.repeat.set(t, n),
    (i.anisotropy = 8),
    i
  );
}
function $(e, t, n, r, i, a = 0.008) {
  let o = new z(new _t(n[0], n[1], n[2], 2, a), i);
  return (
    (o.name = t),
    o.position.set(r[0], r[1], r[2]),
    (o.castShadow = !0),
    (o.receiveShadow = !0),
    e.add(o),
    o
  );
}
function ur(e, t, n, r, i) {
  let a = new y(n, r, i.length),
    o = new _e();
  return (
    (a.name = t),
    i.forEach((e, t) => {
      (o.position.set(...e.p),
        o.scale.set(...(e.s ?? [1, 1, 1])),
        o.rotation.set(0, e.r ?? 0, 0),
        e.q && o.quaternion.fromArray(e.q),
        o.updateMatrix(),
        a.setMatrixAt(t, o.matrix),
        e.c && a.setColorAt(t, e.c));
    }),
    (a.castShadow = !0),
    (a.receiveShadow = !0),
    e.add(a),
    a
  );
}
var dr = class {
    constructor(e, t) {
      ((this.pendingTextures = []),
        (this.group = new Ee()),
        (this.beams = []),
        (this.lights = []),
        (this.ribs = []));
      let n = (e, t, n) => lr(e, t, n, this.pendingTextures);
      ((this.group.name = `Daybreak recital pavilion`), e.add(this.group));
      let r = n(`/assets/materials/walnut.png`, 1, 1),
        i = n(`/assets/materials/limestone.png`, 1.5, 1.5),
        o = new L({
          name: `Satin walnut`,
          color: 11574150,
          map: r,
          roughness: 0.46,
          metalness: 0,
          clearcoat: 0.2,
          clearcoatRoughness: 0.39,
        }),
        s = new N({
          name: `Honed limestone`,
          color: 12039855,
          map: i,
          roughness: 0.81,
        }),
        c = new N({ name: `Shadow joints`, color: 2368809, roughness: 0.87 }),
        u = new N({
          name: `Brushed bronze frames`,
          color: 5063993,
          metalness: 0.8,
          roughness: 0.35,
        }),
        d = new N({
          name: `Acoustic plaster`,
          color: 13157819,
          roughness: 0.92,
        }),
        f = new L({
          name: `Window glass`,
          color: 12768209,
          roughness: 0.07,
          metalness: 0,
          transparent: !0,
          opacity: 0.1,
          depthWrite: !1,
          clearcoat: 1,
          side: 2,
        }),
        p = new ze({
          name: `Warm concealed lighting`,
          color: new U(1.3, 0.95, 0.61),
          toneMapped: !0,
        });
      $(
        this.group,
        `Floor structure`,
        [15.5, 0.24, 13.5],
        [0, -0.142, -1.2],
        c,
        0.008,
      );
      let m = [];
      for (let e = 0; e < 50; e++)
        for (let t = 0; t < 8; t++) {
          let n = -7.55 + e * 0.27,
            r = -7.6 + t * 1.9 + (e % 2) * 0.95;
          if (r > 7.1) continue;
          let i = new U().setRGB(
            0.79 + M(e * 39 + t) * 0.15,
            0.77 + M(e * 39 + t) * 0.13,
            0.72 + M(e * 39 + t) * 0.12,
          );
          m.push({ p: [r + 0.948, -0.014, n + 0.134], c: i });
        }
      (ur(
        this.group,
        `Individual walnut floorboards`,
        new _t(1.8985, 0.03, 0.2685, 1, 7e-4),
        o,
        m,
      ),
        (this.reflector = new cr(new Se(5.4, 5.4), {
          textureWidth: t ? 512 : 1024,
          textureHeight: t ? 512 : 1024,
          color: 1906449,
          clipBias: 0.006,
          multisample: 0,
        })),
        (this.reflector.name = `Subtle floor sheen`),
        (this.reflector.rotation.x = -Math.PI / 2),
        this.reflector.position.set(0, 0.0025, -0.55));
      let h = this.reflector.material;
      ((h.transparent = !0),
        (h.depthWrite = !1),
        (h.fragmentShader = h.fragmentShader.replace(
          `vec4 base = texture2DProj( tDiffuse, vUv );`,
          `vec4 base=texture2DProj(tDiffuse,vUv);vec2 d=vec2(.003,.003)*vUv.w;base+=texture2DProj(tDiffuse,vUv+vec4(d,0.,0.));base+=texture2DProj(tDiffuse,vUv-vec4(d,0.,0.));base/=3.;`,
        )),
        (h.fragmentShader = h.fragmentShader.replace(
          `gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );`,
          `gl_FragColor = vec4( blendOverlay( base.rgb, color ), 0.085 );`,
        )),
        this.group.add(this.reflector),
        $(
          this.group,
          `Rear foundation`,
          [15.4, 0.4, 0.65],
          [0, 0.12, -7.05],
          s,
          0.012,
        ),
        $(
          this.group,
          `Rear lintel`,
          [15.4, 0.6, 0.68],
          [0, 4.65, -7.05],
          s,
          0.02,
        ));
      for (let e = 0; e < 7; e++) {
        let t = -7.2 + e * 2.4;
        if (
          ($(
            this.group,
            `Window pier ` + e,
            [0.31, 4.3, 0.7],
            [t, 2.2, -7.02],
            s,
            0.018,
          ),
          e < 6)
        ) {
          let n = t + 1.2;
          ($(
            this.group,
            `Window sill ` + e,
            [2.12, 0.055, 0.82],
            [n, 0.335, -7.02],
            s,
            0.01,
          ),
            $(
              this.group,
              `Window head ` + e,
              [2.08, 0.035, 0.1],
              [n, 4.32, -6.98],
              u,
              0.003,
            ));
          let r = $(
            this.group,
            `Glazing ` + e,
            [2.04, 3.95, 0.014],
            [n, 2.33, -7],
            f,
            0.001,
          );
          r.castShadow = !1;
          for (let t of [-1.027, 1.027])
            $(
              this.group,
              `Bronze jamb ` + e,
              [0.035, 3.96, 0.1],
              [n + t, 2.33, -6.98],
              u,
              0.003,
            );
          $(
            this.group,
            `Window transom ` + e,
            [2.06, 0.024, 0.08],
            [n, 3.35, -6.96],
            u,
            0.002,
          );
        }
      }
      for (let e of [-1, 1])
        ($(
          this.group,
          `Limestone side return`,
          [0.45, 4.75, 11.8],
          [e * 7.47, 2.23, -1.02],
          s,
          0.016,
        ),
          $(
            this.group,
            `Low walnut acoustic lining`,
            [0.048, 1.1, 10.6],
            [e * 7.225, 0.65, -1.35],
            o,
            0.006,
          ),
          $(
            this.group,
            `Bronze baseboard`,
            [0.035, 0.055, 11.8],
            [e * 7.22, 0.063, -1.02],
            u,
            0.003,
          ),
          $(
            this.group,
            `Upper wall reveal`,
            [0.12, 0.08, 11.8],
            [e * 7.2, 4.18, -1.02],
            c,
            0.002,
          ),
          $(
            this.group,
            `Concealed wall light`,
            [0.014, 0.018, 11.65],
            [e * 7.13, 4.17, -1.02],
            p,
            0.001,
          ));
      for (let e of [-1, 1])
        ($(
          this.group,
          `Entrance wall`,
          [6.06, 4.72, 0.35],
          [e * 4.54, 2.24, 5.48],
          s,
          0.014,
        ),
          $(
            this.group,
            `Entrance acoustic panel`,
            [4.8, 2.18, 0.045],
            [e * 4.43, 1.38, 5.283],
            o,
            0.006,
          ),
          $(
            this.group,
            `Entrance panel lower reveal`,
            [4.8, 0.02, 0.025],
            [e * 4.43, 0.281, 5.25],
            u,
            0.002,
          ));
      $(
        this.group,
        `Door lintel`,
        [3.02, 1.86, 0.35],
        [0, 3.67, 5.48],
        s,
        0.013,
      );
      let g = new N({
        name: `Walnut entrance joinery`,
        color: 9601131,
        map: n(`/assets/materials/walnut.png`, 0.65, 1.65),
        roughness: 0.54,
      });
      for (let e of [-1, 1])
        ($(
          this.group,
          `Solid entrance door`,
          [1.42, 2.6, 0.065],
          [e * 0.728, 1.337, 5.43],
          g,
          0.004,
        ),
          $(
            this.group,
            `Entrance door stile`,
            [0.026, 2.61, 0.09],
            [e * 1.464, 1.337, 5.38],
            u,
            0.002,
          ),
          $(
            this.group,
            `Bronze door pull`,
            [0.013, 0.35, 0.045],
            [e * 0.122, 1.18, 5.361],
            u,
            0.004,
          ));
      ($(
        this.group,
        `Entrance threshold`,
        [2.95, 0.026, 0.3],
        [0, 0.004, 5.36],
        s,
        0.004,
      ),
        $(
          this.group,
          `Ceiling slab`,
          [15.45, 0.25, 13.35],
          [0, 4.98, -1.17],
          d,
          0.02,
        ));
      let _ = [];
      for (let e = 0; e < 42; e++)
        _.push({ p: [-7.21 + e * 0.351, 4.69, -1.17] });
      ur(
        this.group,
        `Timber acoustic ceiling battens`,
        new _t(0.13, 0.22, 13.05, 1, 0.004),
        o,
        _,
      );
      for (let e of [-5.8, -2.3, 1.2, 4.25])
        $(
          this.group,
          `Ceiling cross beam`,
          [14.7, 0.2, 0.18],
          [0, 4.5, e],
          o,
          0.008,
        );
      for (let e of [-4.8, 4.8])
        $(
          this.group,
          `Ceiling slot light`,
          [0.035, 0.008, 10.9],
          [e, 4.563, -1.45],
          p,
          0.001,
        );
      let v = (e, t) =>
          -0.165 +
          F((-t - 12.8) / 8) *
            (0.18 * Math.sin(e * 0.13 + t * 0.11) +
              0.11 * Math.cos(e * 0.29 - t * 0.1)) +
          F((-t - 26) / 24) * 1.8,
        y = new N({
          name: `Planted garden terrain`,
          color: 9015662,
          roughness: 1,
          vertexColors: !0,
        }),
        b = new Se(90, 77, t ? 38 : 70, t ? 34 : 60);
      (b.rotateX(-Math.PI / 2), b.translate(0, 0, -43.5));
      let x = b.attributes.position,
        S = new Float32Array(x.count * 3);
      for (let e = 0; e < x.count; e++) {
        let t = x.getX(e),
          n = x.getZ(e);
        x.setY(e, v(t, n));
        let r =
          0.78 +
          0.12 * Math.sin(t * 0.61 + n * 0.38) +
          0.09 * Math.sin(t * 1.62 - n * 0.43) +
          M(e + 401) * 0.07;
        S.set([r * 0.96, r, r * 0.83], e * 3);
      }
      (b.setAttribute(`color`, new xe(S, 3)), b.computeVertexNormals());
      let T = new z(b, y);
      ((T.name = `Continuous planted garden`),
        (T.receiveShadow = !0),
        this.group.add(T));
      let D = new z(
        new Se(24, 3.5),
        new L({
          name: `Courtyard water`,
          color: 6321522,
          metalness: 0.18,
          roughness: 0.19,
          clearcoat: 1,
        }),
      );
      ((D.name = `Shallow reflecting pool`),
        (D.rotation.x = -Math.PI / 2),
        D.position.set(0, -0.115, -9.8),
        this.group.add(D));
      let ne = [],
        re = [];
      for (let e = 0; e < 2; e++)
        for (let t = 0; t < 42; t++) {
          let n = 0.8 + M(e * 89 + t + 806) * 0.17;
          ne.push({
            p: [-12.3 + t * 0.6, -0.095, -12.02 - e * 0.6],
            s: [0.592, 0.1, 0.592],
            c: new U(n, n * 0.99, n * 0.96),
          });
        }
      for (let e of [-1, 1])
        for (let t = 0; t < 9; t++)
          for (let n = 0; n < 2; n++) {
            let r = 0.83 + M(t * 39 + n + e + 880) * 0.13;
            ne.push({
              p: [e * (12.64 + n * 0.6), -0.095, -7.62 - t * 0.6],
              s: [0.592, 0.1, 0.592],
              c: new U(r, r * 0.99, r * 0.97),
            });
          }
      for (let e = 0; e < 42; e++)
        ne.push({
          p: [-12.3 + e * 0.6, -0.095, -7.62],
          s: [0.592, 0.1, 0.592],
          c: new U(0.88, 0.87, 0.84),
        });
      for (let e of [-8, -11.6])
        re.push({ p: [0, -0.08, e], s: [24.9, 0.16, 0.24] });
      for (let e of [-1, 1])
        re.push({ p: [e * 12.34, -0.08, -9.8], s: [0.24, 0.16, 3.72] });
      (re.push({ p: [0, -0.08, -12.99], s: [25.25, 0.16, 0.11] }),
        ur(this.group, `Limestone garden paving`, new Ce(1, 1, 1), s, ne),
        ur(
          this.group,
          `Low pool and planting curbs`,
          new _t(1, 1, 1, 1, 0.015),
          s,
          re,
        ));
      let ie = [],
        O = [],
        ae = R(0, 1, 0),
        k = (e, t, n) => {
          let r = t.clone().sub(e);
          ie.push({
            p: e.clone().add(t).multiplyScalar(0.5).toArray(),
            s: [n, r.length(), n],
            q: new W().setFromUnitVectors(ae, r.normalize()).toArray(),
          });
        },
        oe = (e, t, n, r, i, a, o) => {
          for (let s = 0; s < n; s++) {
            let n = t + s * 11,
              c = M(n) * Math.PI * 2,
              u = Math.sqrt(M(n + 1)) * r,
              d = (M(n + 2) - 0.5) * i,
              f = new W().setFromEuler(
                new l(
                  (M(n + 3) - 0.5) * 2.8,
                  M(n + 4) * Math.PI * 2,
                  (M(n + 5) - 0.5) * 2.2,
                ),
              ),
              p = a * (0.72 + M(n + 6) * 0.68),
              m = o * (0.74 + M(n + 7) * 0.38);
            O.push({
              p: e
                .clone()
                .add(R(Math.cos(c) * u, d, Math.sin(c) * u))
                .toArray(),
              s: [p, p, p],
              q: f.toArray(),
              c: new U().setRGB(0.67 * m, 0.78 * m, 0.45 * m),
            });
          }
        };
      for (let e = 0; e < 18; e++) {
        let n = -22.5 + e * 2.65 + (M(e + 906) - 0.5) * 2.25,
          r = -15 - M(e + 933) * 17,
          i = 4.1 + M(e + 918) * 4,
          a = R(n, v(n, r) - 0.035, r),
          o = R((M(e + 210) - 0.5) * 1.2, 0, (M(e + 212) - 0.5) * 0.85),
          s = [a];
        for (let t = 1; t <= 4; t++) {
          let n = t / 4,
            r = a.clone().add(R(o.x * n * n, i * n, o.z * n * n));
          (k(s[t - 1], r, (0.115 + M(e + 920) * 0.055) * (1 - n * 0.65)),
            s.push(r));
        }
        let c = 11 + Math.floor(M(e + 960) * 5);
        for (let n = 0; n < c; n++) {
          let r = 0.3 + (n / c) * 0.62,
            s = n * 2.399 + e * 0.71 + (M(e * 55 + n) - 0.5) * 0.8,
            l = i * r,
            u = a.clone().add(R(o.x * r * r, l, o.z * r * r)),
            d = (0.9 + M(e * 33 + n) * 1.55) * (1.3 - r * 0.56),
            f = u
              .clone()
              .add(
                R(
                  Math.cos(s) * d,
                  0.45 + M(e * 17 + n) * 0.95,
                  Math.sin(s) * d,
                ),
              ),
            p = u
              .clone()
              .lerp(f, 0.53)
              .add(R(0, -0.08 - M(e * 31 + n) * 0.21, 0));
          (k(u, p, 0.028 + M(e * 29 + n) * 0.018),
            k(p, f, 0.016 + M(e * 49 + n) * 0.008));
          for (let r = 0; r < 3; r++) {
            let i = f
              .clone()
              .add(
                R(
                  (M(e * 137 + n * 5 + r) - 0.5) * 1.15,
                  0.08 + M(n * 8 + r) * 0.53,
                  (M(e * 97 + n * 7 + r) - 0.5) * 1.15,
                ),
              );
            (k(f.clone().lerp(p, 0.18), i, 0.0055),
              oe(
                i,
                e * 9001 + n * 311 + r * 71,
                t ? 20 : 42,
                0.5,
                0.56,
                1,
                0.88 + M(e + 71) * 0.25,
              ));
          }
        }
      }
      for (let e = 0; e < 44; e++) {
        let n = -18 + M(e * 13 + 3301) * 36,
          r = -13.65 - M(e * 19 + 3302) * 10.5,
          i = R(n, v(n, r) - 0.025, r),
          a = 0.36 + M(e * 7 + 3303) * 0.62;
        for (let n = 0; n < 5; n++) {
          let r = n * 2.399 + M(e + 58),
            o = 0.18 + M(e * 51 + n) * 0.4,
            s = i
              .clone()
              .add(
                R(
                  Math.cos(r) * o,
                  a * (0.6 + M(e * 29 + n) * 0.4),
                  Math.sin(r) * o,
                ),
              );
          (k(i, s, 0.0048),
            oe(
              s,
              e * 5003 + n * 631 + 73001,
              t ? 30 : 48,
              0.34,
              0.38,
              0.8,
              0.91 + M(e + 441) * 0.12,
            ));
        }
      }
      let se = new N({ name: `Garden bark`, color: 8024672, roughness: 1 });
      ur(
        this.group,
        `Branched courtyard trees and shrubs`,
        new a(0.62, 1, 1, 7),
        se,
        ie,
      );
      let ce = new pe();
      (ce.setAttribute(
        `position`,
        new Oe(
          [
            0, 0, 0, -0.029, 0.064, 0, 0, 0.15, -0.003, 0.029, 0.064, 0, 0,
            0.062, 0.012,
          ],
          3,
        ),
      ),
        ce.setIndex([0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0, 4]),
        ce.computeVertexNormals());
      let A = new N({
        name: `Individual garden leaves`,
        color: 9083493,
        roughness: 0.94,
        side: 2,
      });
      ur(this.group, `Individual courtyard leaves`, ce, A, O);
      let le = [],
        ue = [];
      for (let e = 0; e < 5; e++) {
        let t = e * 2.399,
          n = Math.cos(t),
          r = Math.sin(t),
          i = 0.09 + M(e + 620) * 0.09,
          a = 0.27 + M(e + 621) * 0.24,
          o = le.length / 3;
        (le.push(
          -r * 0.014,
          0,
          n * 0.014,
          r * 0.014,
          0,
          -n * 0.014,
          n * i * 0.35 - r * 0.008,
          a * 0.52,
          r * i * 0.35 + n * 0.008,
          n * i * 0.35 + r * 0.008,
          a * 0.52,
          r * i * 0.35 - n * 0.008,
          n * i,
          a,
          r * i,
        ),
          ue.push(o, o + 1, o + 2, o + 1, o + 3, o + 2, o + 2, o + 3, o + 4));
      }
      let j = new pe();
      (j.setAttribute(`position`, new Oe(le, 3)),
        j.setIndex(ue),
        j.computeVertexNormals());
      let de = [];
      for (let e = 0; e < (t ? 550 : 1100); e++) {
        let t = -25 + M(e * 7 + 12401) * 50,
          n = -13.25 - M(e * 11 + 12402) * 27,
          r = 0.48 + M(e * 13 + 12403) * 0.8,
          i = 0.71 + M(e * 17 + 12404) * 0.34;
        de.push({
          p: [t, v(t, n) - 0.018, n],
          s: [r, r, r],
          r: M(e + 12405) * Math.PI * 2,
          c: new U(i * 0.84, i, i * 0.66),
        });
      }
      ur(
        this.group,
        `Meadow grass drifts`,
        j,
        new N({
          name: `Fine garden grasses`,
          color: 8753510,
          roughness: 1,
          side: 2,
        }),
        de,
      );
      let fe = [];
      for (let e = 0; e < 26; e++) {
        let t = -18 + M(e * 31 + 14501) * 36,
          n = -13.7 - M(e * 23 + 14502) * 11,
          r = 0.12 + M(e * 17 + 14503) * 0.26,
          i = 0.66 + M(e * 43 + 14504) * 0.24;
        fe.push({
          p: [t, v(t, n) + r * 0.12, n],
          s: [
            r * (1 + M(e + 14505)),
            r * 0.56,
            r * (0.75 + M(e + 14506) * 0.6),
          ],
          r: M(e + 14507) * 6.28,
          c: new U(i, i * 0.99, i * 0.92),
        });
      }
      (ur(this.group, `Weathered planting stones`, new ee(1, 1), s, fe),
        (this.sky = new E({
          side: 1,
          depthWrite: !1,
          uniforms: { uLift: { value: 0 }, uTime: { value: 0 } },
          vertexShader: `varying vec3 vPosition;void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
          fragmentShader: `varying vec3 vPosition;uniform float uLift;void main(){vec3 p=normalize(vPosition);float h=smoothstep(-.06,.75,p.y);vec3 horizon=mix(vec3(.38,.46,.50),vec3(.66,.64,.57),uLift);vec3 zenith=mix(vec3(.13,.25,.37),vec3(.24,.39,.51),uLift);vec3 c=mix(horizon,zenith,h);float sun=pow(max(0.,dot(p,normalize(vec3(-.63,.25,-.74)))),52.);c+=vec3(.25,.18,.09)*sun;gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,
        })),
        this.group.add(new z(new w(90, 32, 20), this.sky)),
        e.add(new C(12768738, 6244660, 0.56)));
      let P = new te(16771796, 112, 25, 0.75, 0.86, 2);
      (P.position.set(-3.4, 4.25, -2.2),
        P.target.position.set(0, 0.92, 0.42),
        (P.castShadow = !0),
        P.shadow.mapSize.set(t ? 1024 : 2048, t ? 1024 : 2048),
        (P.shadow.bias = -18e-5),
        (P.shadow.normalBias = 0.004),
        (P.shadow.radius = 4),
        e.add(P, P.target),
        this.lights.push(P));
      let he = new te(13032689, 62, 24, 0.85, 0.95, 2);
      (he.position.set(4.3, 3.5, 1.3),
        he.target.position.set(0, 0.85, 0.2),
        e.add(he, he.target),
        this.lights.push(he));
      let I = new te(16767917, 330, 40, 0.64, 0.73, 2);
      (I.position.set(-5.5, 4.8, -12),
        I.target.position.set(0, 0.5, 0.4),
        (I.castShadow = !0),
        I.shadow.mapSize.set(t ? 1024 : 2048, t ? 1024 : 2048),
        (I.shadow.bias = -2e-4),
        (I.shadow.normalBias = 0.006),
        (I.shadow.radius = 3),
        e.add(I, I.target),
        this.lights.push(I),
        (this.accent = new me(16769469, 0.2, 4, 2)),
        this.accent.position.set(0, 1.6, 1.7),
        e.add(this.accent));
      let ge = t ? 90 : 190,
        _e = new Float32Array(ge * 3),
        ve = new Float32Array(ge),
        ye = new Float32Array(ge);
      for (let e = 0; e < ge; e++)
        (_e.set(
          [
            (M(e + 4) - 0.5) * 9,
            0.2 + M(e + 21) * 4,
            (M(e + 66) - 0.5) * 8 - 1,
          ],
          e * 3,
        ),
          (ve[e] = M(e + 55) * 6.28),
          (ye[e] = 0.8 + M(e + 43) * 1.3));
      let be = new pe();
      (be.setAttribute(`position`, new xe(_e, 3)),
        be.setAttribute(`aSize`, new xe(ye, 1)),
        be.setAttribute(`aSeed`, new xe(ve, 1)));
      let we = new E({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        uniforms: {
          uTime: { value: 0 },
          uLift: { value: 0 },
          uPixel: {
            value:
              typeof window < `u` ? Math.min(window.devicePixelRatio, 1.7) : 1,
          },
        },
        vertexShader: `attribute float aSize;attribute float aSeed;uniform float uTime;uniform float uPixel;varying float alpha;void main(){vec3 p=position;p.x+=sin(uTime*.07+aSeed)*.11;p.y+=sin(uTime*.06+aSeed*2.)*.09;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPixel*8./(-mv.z),.6,2.2);alpha=.10+.12*pow(sin(aSeed+uTime*.11),2.);}`,
        fragmentShader: `varying float alpha;uniform float uLift;void main(){float a=smoothstep(.5,.07,length(gl_PointCoord-.5))*alpha;gl_FragColor=vec4(vec3(.93,.86,.70),a);}`,
      });
      ((this.dust = new Ge(be, we)), this.group.add(this.dust));
    }
    update(e, t, n) {
      let r = F((t - 0.2) / 0.72);
      ((this.sky.uniforms.uLift.value = r),
        (this.sky.uniforms.uTime.value = e));
      let i = this.dust.material;
      ((i.uniforms.uTime.value = e),
        (i.uniforms.uLift.value = r),
        (this.lights[0].intensity = B(108, 121, r)),
        (this.lights[2].intensity = B(300, 400, r)),
        (this.accent.intensity = 0.16 + n * 0.07));
    }
    whenReady() {
      return Promise.all(this.pendingTextures);
    }
    dispose() {
      this.reflector.dispose();
    }
  },
  fr = (e) => R(...e),
  pr = class {
    constructor(e) {
      ((this.shots = []),
        (this.name = `First light`),
        (this.override = -1),
        (this.reduce = !1));
      let t = (t) =>
          e.harmony?.find((e) => e.bar === t)?.time ?? ((t - 1) * 240) / e.bpm,
        n = [
          [
            t(1),
            `First light`,
            [3.35, 1.91, 3.4],
            [2.75, 1.62, 2.9],
            [0, 0.76, -0.58],
            38,
            39,
          ],
          [
            t(5),
            `A window opens`,
            [1.84, 1.32, 0.93],
            [1.65, 1.24, 0.7],
            [0, 0.91, 0.28],
            40,
            43,
          ],
          [
            t(9),
            `Hands · the theme`,
            [0.55, 1.34, 0.43],
            [0.39, 1.29, 0.46],
            [0.07, 0.753, 0.16],
            43,
            41,
          ],
          [
            t(13),
            `The answering phrase`,
            [-1.93, 1.27, 1.49],
            [-1.64, 1.35, 1.34],
            [0, 0.95, 0.27],
            42,
            42,
          ],
          [
            t(17),
            `Room to breathe`,
            [2.442, 1.074, 1.268],
            [3.136, 1.555, 2.097],
            [0, 0.76, -0.3],
            45,
            43,
          ],
          [
            t(21),
            `Across the strings`,
            [1.48, 2.75, -0.54],
            [1.75, 2.34, 0.3],
            [0, 0.77, -0.53],
            46,
            44,
          ],
          [
            t(25),
            `A little farther`,
            [3.48, 1.27, 2.37],
            [2.65, 1.68, 2.92],
            [0, 0.8, -0.45],
            43,
            40,
          ],
          [
            t(29),
            `Daybreak · touch`,
            [0.46, 1.27, 0.61],
            [0.8, 1.2, 0.39],
            [0.1, 0.765, 0.145],
            39,
            40,
          ],
          [
            t(33),
            `Daybreak`,
            [-2.16, 1.74, 1.51],
            [-2.82, 1.59, 1.6],
            [0, 0.86, -0.12],
            43,
            43,
          ],
          [
            t(37),
            `The inner voice`,
            [0.73, 1.31, -0.34],
            [0.89, 1.35, -0.24],
            [0, 1.15, 0.65],
            40,
            40,
          ],
          [
            t(41),
            `What the night kept`,
            [1.79, 1.2, 0.85],
            [1.68, 1.16, 1.12],
            [0, 0.88, 0.29],
            43,
            42,
          ],
          [
            t(45),
            `Left hand · response`,
            [-0.78, 1.05, 0.53],
            [-0.47, 1.13, 0.68],
            [-0.2, 0.744, 0.15],
            40,
            40,
          ],
          [
            t(49),
            `A quieter answer`,
            [-1.85, 1.12, 1.04],
            [-2.31, 1.38, 1.91],
            [0, 0.83, 0.06],
            44,
            42,
          ],
          [
            t(53),
            `The light returns`,
            [2.88, 1.57, 2.73],
            [3.22, 1.85, 2.03],
            [0, 0.78, -0.48],
            41,
            41,
          ],
          [
            t(57),
            `Everything opens · hands`,
            [0.76, 1.3, 0.49],
            [0.5, 1.31, 0.46],
            [0.05, 0.756, 0.16],
            41,
            43,
          ],
          [
            t(61),
            `A new breath`,
            [0.9, 1.3, -0.14],
            [0.72, 1.35, -0.22],
            [0, 1.15, 0.64],
            43,
            41,
          ],
          [
            t(63),
            `The unfolding phrase`,
            [-1.42, 1.21, 0.8],
            [-1.58, 1.31, 0.92],
            [0, 0.92, 0.34],
            44,
            44,
          ],
          [
            t(65),
            `Everything opens`,
            [3.4, 1.28, 2.78],
            [3.12, 2.08, 2.22],
            [0, 0.76, -0.53],
            43,
            40,
          ],
          [
            t(67),
            `The highest note`,
            [1.02, 1.35, 0.56],
            [0.74, 1.25, 0.69],
            [0.15, 0.765, 0.16],
            41,
            40,
          ],
          [
            t(69),
            `Full light`,
            [-2.98, 1.51, 1.93],
            [-2.57, 1.8, 2.36],
            [0, 0.88, -0.29],
            43,
            41,
          ],
          [
            t(71),
            `Coming home`,
            [2.38, 1.15, 0.87],
            [2.85, 1.41, 1.59],
            [0, 0.87, 0.1],
            44,
            42,
          ],
          [
            t(73),
            `Home in the light`,
            [0.48, 1.34, 0.44],
            [0.28, 1.27, 0.5],
            [0, 0.756, 0.16],
            43,
            42,
          ],
          [
            t(77),
            `The last phrase`,
            [1.67, 1.36, 1.02],
            [2.09, 1.56, 1.41],
            [0, 0.89, 0.16],
            42,
            42,
          ],
          [
            t(80),
            `Daybreak · ending`,
            [2.73, 1.82, 2.77],
            [3.61, 2.1, 3.72],
            [0, 0.81, -0.42],
            40,
            38,
          ],
        ];
      this.shots = n.map((t, r) => ({
        start: t[0],
        end: n[r + 1]?.[0] ?? e.duration,
        name: t[1],
        from: fr(t[2]),
        to: fr(t[3]),
        look: fr(t[4]),
        lookTo: fr(t[4]),
        fov: t[5],
        fovTo: t[6],
      }));
    }
    update(e, t, n) {
      e.up.set(0, 1, 0);
      let r =
          (this.override >= 0
            ? this.shots[this.override]
            : this.shots.find((e) => t < e.end)) ?? this.shots.at(-1),
        i = this.override >= 0 ? 0.5 : F((t - r.start) / (r.end - r.start));
      ((this.name = r.name),
        e.position.copy(r.from).lerp(r.to, this.reduce ? 0.35 : i));
      let a = r.look.clone().lerp(r.lookTo, i),
        o = B(r.fov, r.fovTo, i);
      if (n < 1) {
        let t = /hands|touch|left hand|highest note|home in the light/i.test(
          r.name,
        );
        if (r.name === `Across the strings`)
          (e.position.set(B(0.95, 1.1, i), B(3.45, 3.2, i), B(3.05, 2.85, i)),
            a.set(0, 0.8, -0.37),
            (o = 48));
        else if (t) {
          let t = /left hand/i.test(r.name);
          (e.position.set(
            (t ? -1 : 1) * B(0.12, 0.09, i),
            B(1.75, 1.72, i),
            0.12,
          ),
            a.set(0, 0.754, 0.24),
            e.up.set(1, 0, 0),
            (o = 52));
        } else {
          let t = V(1 / n, 1, 1.9),
            r = e.position.clone().sub(a),
            i = t;
          for (let [e, t, n] of [
            [`x`, -6.85, 6.85],
            [`y`, 0.3, 4.3],
            [`z`, -6.55, 4.95],
          ])
            r[e] > 0
              ? (i = Math.min(i, (n - a[e]) / r[e]))
              : r[e] < 0 && (i = Math.min(i, (t - a[e]) / r[e]));
          (e.position.copy(r).multiplyScalar(i).add(a),
            (o = ve.radToDeg(
              2 * Math.atan((Math.tan(ve.degToRad((o + 5) / 2)) * t) / i),
            )),
            (a.y += 0.035));
        }
      }
      ((e.fov = o), e.lookAt(a), e.updateProjectionMatrix());
    }
  },
  mr = class {
    constructor(e, n, r, a) {
      ((this.container = e),
        (this.getTime = r),
        (this.onTelemetry = a),
        (this.scene = new c()),
        (this.camera = new Me(40, 1, 0.035, 180)),
        (this.pianist = new sr()),
        (this.raf = 0),
        (this.lastFrame = 0),
        (this.fps = 60),
        (this.disposed = !1),
        (this.showTime = -1),
        (this.contextLost = !1),
        (this.dirty = !0),
        (this.renderedTime = NaN),
        (this.renderedShot = -2),
        (this.lost = (e) => {
          (e.preventDefault(),
            (this.contextLost = !0),
            cancelAnimationFrame(this.raf),
            (this.raf = 0));
        }),
        (this.initialized = !1),
        (this.restored = () => {
          if (
            !this.disposed &&
            ((this.contextLost = !1),
            (this.lastFrame = 0),
            (this.dirty = !0),
            this.initialized)
          ) {
            try {
              this.captureEnvironment();
            } catch (e) {
              console.warn(`Room reflections could not recover`, e);
            }
            this.tick(performance.now());
          }
        }),
        (this.tick = (e) => {
          if (this.disposed || this.contextLost) return;
          let t = (e - this.lastFrame) / 1e3;
          (t > 0 && t < 1 && (this.fps = B(this.fps, 1 / t, 0.04)),
            (this.lastFrame = e));
          let n = this.showTime >= 0 ? this.showTime : this.getTime();
          if (
            !this.dirty &&
            n === this.renderedTime &&
            this.renderedShot === this.direction.override
          ) {
            (this.lastTelemetry && this.onTelemetry(this.lastTelemetry),
              (this.raf = requestAnimationFrame(this.tick)));
            return;
          }
          let r = Pe(n, this.score.sections),
            i = Te(n, this.score.pedals),
            a = 0;
          for (let e of this.score.accents) {
            let t = n - e.time;
            t >= 0 && t < 1 && (a = Math.max(a, e.energy * Math.exp(-t * 5)));
          }
          let o = this.score.notes.filter(
            (e) => e.time < n + 1 && e.time + e.duration > n - 0.2,
          );
          (this.piano.update(n, o, i),
            this.pianist.update(n, this.score, this.piano, i, r),
            this.direction.update(this.camera, n, this.camera.aspect),
            this.stage.update(n, r, a),
            this.renderer.info.reset(),
            this.composer.render(),
            (this.dirty = !1),
            (this.renderedTime = n),
            (this.renderedShot = this.direction.override),
            (this.lastTelemetry = {
              time: n,
              activeNotes: this.piano.active,
              contacts: this.pianist.contacts,
              fps: this.fps,
              triangles: this.renderer.info.render.triangles,
              calls: this.renderer.info.render.calls,
              shot: this.direction.name,
              ready: this.pianist.ready,
            }),
            this.onTelemetry(this.lastTelemetry),
            (this.raf = requestAnimationFrame(this.tick)));
        }),
        (this.score = n));
      let o = e.clientWidth < 700;
      ((this.renderer = new ge({
        antialias: !1,
        powerPreference: `high-performance`,
        alpha: !1,
      })),
        (this.renderer.info.autoReset = !1),
        this.renderer.setPixelRatio(this.pixelRatio()),
        this.renderer.setSize(e.clientWidth, e.clientHeight),
        (this.renderer.outputColorSpace = k),
        (this.renderer.toneMapping = 4),
        (this.renderer.toneMappingExposure = ft.exposure),
        (this.renderer.shadowMap.enabled = !0),
        (this.renderer.shadowMap.type = 2),
        this.renderer.domElement.setAttribute(
          `aria-label`,
          `A human pianist at a concert grand in a timber and stone recital pavilion at dawn`,
        ),
        e.appendChild(this.renderer.domElement),
        (this.scene.background = new U(1516332)),
        (this.scene.fog = new t(ft.fogColor, ft.fogDensity)),
        (this.stage = new dr(this.scene, o)),
        (this.scene.environmentIntensity = ft.environmentIntensity),
        (this.piano = new Tt()),
        this.scene.add(this.piano.group, this.pianist.group),
        (this.direction = new pr(n)),
        (this.direction.reduce = window.matchMedia(
          `(prefers-reduced-motion: reduce)`,
        ).matches));
      let s = new ue(Math.max(1, e.clientWidth), Math.max(1, e.clientHeight), {
        type: x,
        samples: Math.min(o ? 2 : 4, this.renderer.capabilities.maxSamples),
      });
      ((this.composer = new ot(this.renderer, s)),
        this.composer.addPass(new st(this.scene, this.camera)),
        this.composer.addPass(
          new lt(
            new i(e.clientWidth, e.clientHeight),
            o ? 0.16 : 0.22,
            0.48,
            1.3,
          ),
        ));
      let l = new dt();
      ((l.needsSwap = !1),
        this.composer.addPass(l),
        (this.resizeObserver = new ResizeObserver(() => this.resize())),
        this.resizeObserver.observe(e),
        this.resize(),
        this.renderer.domElement.addEventListener(
          `webglcontextlost`,
          this.lost,
        ),
        this.renderer.domElement.addEventListener(
          `webglcontextrestored`,
          this.restored,
        ));
    }
    async initialize() {
      let e = this.pianist.load(this.score).finally(() => {
          this.disposed && (hr(this.pianist.group), this.pianist.group.clear());
        }),
        t = this.stage.whenReady().finally(() => {
          this.disposed && hr(this.stage.group);
        }),
        n = this.piano.whenReady().finally(() => {
          this.disposed && hr(this.piano.group);
        });
      (await Promise.all([e, t, n]),
        !this.disposed &&
          (this.contextLost || this.captureEnvironment(),
          (this.initialized = !0),
          this.tick(performance.now())));
    }
    captureEnvironment() {
      if (this.disposed || this.contextLost) return;
      ((this.scene.environment = null),
        this.env?.dispose(),
        (this.env = void 0));
      let e = this.showTime >= 0 ? this.showTime : this.getTime();
      (this.stage.update(e, Pe(e, this.score.sections), 0),
        (this.piano.group.visible = !1),
        (this.pianist.group.visible = !1),
        (this.stage.reflector.visible = !1),
        (this.stage.dust.visible = !1));
      let t = new He(this.renderer);
      try {
        ((this.env = t.fromScene(this.scene, 0.045, 0.1, 110, {
          position: new A(...ft.environmentPosition),
          size: ft.environmentSize,
        })),
          (this.scene.environment = this.env.texture));
      } finally {
        (t.dispose(),
          (this.piano.group.visible = !0),
          (this.pianist.group.visible = !0),
          (this.stage.reflector.visible = !0),
          (this.stage.dust.visible = !0));
      }
    }
    pixelRatio() {
      let e = Math.max(1, this.container.clientWidth),
        t = Math.max(1, this.container.clientHeight),
        n = e < 700;
      return Math.min(
        window.devicePixelRatio,
        n ? 1.5 : 1.7,
        Math.sqrt((n ? 15e5 : 32e5) / (e * t)),
      );
    }
    resize() {
      let e = this.container.clientWidth,
        t = this.container.clientHeight;
      if (e === 0 || t === 0) return;
      let n = this.pixelRatio();
      ((this.camera.aspect = e / t),
        this.camera.updateProjectionMatrix(),
        this.renderer.setPixelRatio(n),
        this.renderer.setSize(e, t),
        this.composer.setPixelRatio(n),
        this.composer.setSize(e, t),
        (this.dirty = !0));
    }
    dispose() {
      if (!this.disposed) {
        ((this.disposed = !0),
          cancelAnimationFrame(this.raf),
          this.resizeObserver.disconnect(),
          this.renderer.domElement.removeEventListener(
            `webglcontextlost`,
            this.lost,
          ),
          this.renderer.domElement.removeEventListener(
            `webglcontextrestored`,
            this.restored,
          ),
          this.stage.dispose());
        for (let e of this.composer.passes) e.dispose();
        (this.composer.dispose(),
          hr(this.scene),
          this.env?.dispose(),
          this.renderer.dispose(),
          this.renderer.domElement.remove());
      }
    }
  };
function hr(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set(),
    i = new Set();
  (e.traverse((e) => {
    let a = e;
    a.isLight && a.shadow?.dispose();
    let o = e;
    if (!(!(`geometry` in o) || !(`material` in o))) {
      t.add(o.geometry);
      for (let e of Array.isArray(o.material) ? o.material : [o.material]) {
        n.add(e);
        for (let t of Object.values(e)) t instanceof d && r.add(t);
      }
      o.isSkinnedMesh && i.add(o.skeleton);
    }
  }),
    e.traverse((e) => {
      e.isInstancedMesh && e.dispose();
    }));
  let a = new Set();
  for (let e of r) {
    for (let t of Array.isArray(e.image) ? e.image : [e.image]) t && a.add(t);
    e.dispose();
  }
  for (let e of a)
    typeof ImageBitmap < `u` && e instanceof ImageBitmap && e.close();
  for (let e of t) e.dispose();
  for (let e of n) e.dispose();
  for (let e of i) e.dispose();
}
export { mr as PerformanceScene };
